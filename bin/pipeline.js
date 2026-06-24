#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const db = require('./db');

// Allow root override via env (used by tests)
const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');
const CONTEXT_FILE = path.join(ROOT, 'MASTER_WORKFLOW_CONTEXT.md');
const RUNS_DIR = path.join(ROOT, 'runs');

const cmd = process.argv[2];
const args = process.argv.slice(3);

async function main() {
  switch (cmd) {
    case 'start':   return start(args);
    case 'log':     return log(args);
    case 'query':   return query(args);
    case 'status':  return status();
    case 'tags':    return tags(args);
    default:
      console.error(`Usage:
  node bin/pipeline.js start <animal>
  node bin/pipeline.js log <key>=<value> [--agent N]
  node bin/pipeline.js query <key> [--last N]
  node bin/pipeline.js status
  node bin/pipeline.js tags add <tag> --bucket <b> [--platform <p>] [--source <s>]
  node bin/pipeline.js tags list [--run N]
  node bin/pipeline.js tags recent [--bucket <b>] [--last N]`);
      process.exit(1);
  }
}

async function start(args) {
  const animal = args[0];
  if (!animal) { console.error("Usage: node bin/pipeline.js start <animal>"); process.exit(1); }

  // Archive existing context
  if (fs.existsSync(CONTEXT_FILE)) {
    const ts = new Date().toISOString().slice(0, 10);
    const phrase = await getCurrentPhrase();
    const slug = phrase ? `-${slugify(phrase)}` : '';
    const archiveDir = path.join(RUNS_DIR, `${ts}-${animal}${slug}`);
    fs.mkdirSync(archiveDir, { recursive: true });
    fs.copyFileSync(CONTEXT_FILE, path.join(archiveDir, 'MASTER_WORKFLOW_CONTEXT.md'));
    console.error(`Archived previous context → ${archiveDir}/MASTER_WORKFLOW_CONTEXT.md`);
  }

  // Close any existing DB state
  await db.close();

  // Delete old DB so we start fresh
  const dbPath = path.join(ROOT, '.pipeline', 'state.db');
  if (fs.existsSync(dbPath)) fs.unlinkSync(dbPath);

  // Create new run in fresh DB
  const d = await db.getDb();
  d.run("INSERT INTO runs (animal, status, current_agent) VALUES (?, 'active', 1)", [animal]);
  const runId = d.exec("SELECT last_insert_rowid() AS id")[0].values[0][0];
  db.save();

  // Write fresh context file
  const header = `# Pipeline Run #${runId} — ${animal}\nStarted: ${new Date().toISOString()}\n\n`;
  fs.writeFileSync(CONTEXT_FILE, header);
  console.error(`Run #${runId} started. Animal: ${animal}. Context: MASTER_WORKFLOW_CONTEXT.md`);
  console.log(runId);
}

async function getCurrentPhrase() {
  try {
    const content = fs.readFileSync(CONTEXT_FILE, 'utf-8');
    const match = content.match(/Phrase[:\s]+[""]([^""]+)[""]/i) || content.match(/\*\*Phrase\*\*[:\s]+(.+)/i);
    return match ? match[1].trim().slice(0, 40) : null;
  } catch { return null; }
}

async function log(args) {
  const run = await db.requireActiveRun();

  // Parse key=value pairs and flags
  const kvps = [];
  let agent = run.current_agent;

  for (const arg of args) {
    if (arg === '--agent') { agent = parseInt(args[args.indexOf(arg) + 1]); continue; }
    if (arg.startsWith('--')) continue;
    const eq = arg.indexOf('=');
    if (eq > 0) kvps.push({ key: arg.slice(0, eq), value: arg.slice(eq + 1) });
  }

  if (kvps.length === 0) { console.error("Usage: node bin/pipeline.js log <key>=<value> [--agent N]"); process.exit(1); }

  const d = await db.getDb();
  const stmt = d.prepare("INSERT INTO decisions (run_id, agent_number, key, value) VALUES (?, ?, ?, ?)");
  for (const kv of kvps) {
    stmt.run([run.id, agent, kv.key, kv.value]);
  }
  stmt.free();
  db.save();

  // Also append to context file
  const lines = kvps.map(kv => `- **Decision (Agent ${agent}):** \`${kv.key}=${kv.value}\``).join('\n');
  fs.appendFileSync(CONTEXT_FILE, `\n${lines}\n`);

  // If agent number changes, update current_agent
  if (agent > run.current_agent) {
    d.run("UPDATE runs SET current_agent = ? WHERE id = ?", [agent, run.id]);
    db.save();
  }
}

async function query(args) {
  const key = args[0];
  const lastIdx = args.indexOf('--last');
  const last = lastIdx >= 0 ? parseInt(args[lastIdx + 1]) || 3 : 5;

  if (!key) { console.error("Usage: node bin/pipeline.js query <key> [--last N]"); process.exit(1); }

  const run = await db.getActiveRun();
  const d = await db.getDb();

  const stmt = d.prepare(`
    SELECT d.value, d.agent_number, r.animal
    FROM decisions d
    JOIN runs r ON r.id = d.run_id
    WHERE d.key = ?
    ORDER BY d.id DESC
    LIMIT ?
  `);
  stmt.bind([key, last]);

  const results = [];
  while (stmt.step()) {
    results.push(stmt.getAsObject());
  }
  stmt.free();

  if (results.length === 0) { process.exit(0); }

  // Return just the values array (easy for LLM to parse)
  console.log(JSON.stringify(results.map(r => r.value)));
}

async function status() {
  const run = await db.getActiveRun();
  if (!run) {
    console.log(JSON.stringify({ status: 'no_active_run' }));
    return;
  }

  const d = await db.getDb();
  const decStmt = d.prepare("SELECT key, value FROM decisions WHERE run_id = ? ORDER BY agent_number, id");
  decStmt.bind([run.id]);
  const decisions = {};
  while (decStmt.step()) {
    const row = decStmt.getAsObject();
    if (!decisions[row.key]) decisions[row.key] = row.value;
  }
  decStmt.free();

  console.log(JSON.stringify({
    run_id: run.id,
    animal: run.animal,
    phrase: run.phrase,
    current_agent: run.current_agent,
    status: run.status,
    decisions
  }, null, 2));
}

async function tags(args) {
  const sub = args[0];
  const run = await db.requireActiveRun();
  const d = await db.getDb();

  if (sub === 'add') {
    const tag = args[1];
    const bucketIdx = args.indexOf('--bucket');
    const platformIdx = args.indexOf('--platform');
    const sourceIdx = args.indexOf('--source');
    const bucket = bucketIdx >= 0 ? args[bucketIdx + 1] : 'best-fit';
    const platform = platformIdx >= 0 ? args[platformIdx + 1] : null;
    const source = sourceIdx >= 0 ? args[sourceIdx + 1] : null;

    if (!tag) { console.error("Usage: node bin/pipeline.js tags add <tag> --bucket <b>"); process.exit(1); }

    const stmt = d.prepare("INSERT INTO tags (run_id, tag, bucket, platform, source) VALUES (?, ?, ?, ?, ?)");
    stmt.run([run.id, tag, bucket, platform, source]);
    stmt.free();
    db.save();

  } else if (sub === 'list') {
    const runIdx = args.indexOf('--run');
    const runId = runIdx >= 0 ? parseInt(args[runIdx + 1]) : run.id;

    const stmt = d.prepare("SELECT tag, bucket, platform, source FROM tags WHERE run_id = ? ORDER BY bucket, id");
    stmt.bind([runId]);

    const tags_by_bucket = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (!tags_by_bucket[row.bucket]) tags_by_bucket[row.bucket] = [];
      tags_by_bucket[row.bucket].push(row.tag);
    }
    stmt.free();
    console.log(JSON.stringify(tags_by_bucket, null, 2));

  } else if (sub === 'recent') {
    const bucketIdx = args.indexOf('--bucket');
    const lastIdx = args.indexOf('--last');
    const bucket = bucketIdx >= 0 ? args[bucketIdx + 1] : null;
    const last = lastIdx >= 0 ? parseInt(args[lastIdx + 1]) : 3;

    let sql = `
      SELECT t.tag, t.bucket, t.run_id, r.animal
      FROM tags t
      JOIN runs r ON r.id = t.run_id
    `;
    const params = [];
    if (bucket) { sql += " WHERE t.bucket = ?"; params.push(bucket); }
    sql += " ORDER BY t.id DESC LIMIT ?";
    params.push(last * 15);

    const stmt = d.prepare(sql);
    stmt.bind(params);
    const results = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (!results[row.tag]) results[row.tag] = 0;
      results[row.tag]++;
    }
    stmt.free();
    console.log(JSON.stringify(results, null, 2));

  } else {
    console.error("Usage: node bin/pipeline.js tags add|list|recent [...]");
    process.exit(1);
  }
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

main().catch(e => { console.error(e.message); process.exit(1); });
