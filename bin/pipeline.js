#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const db = require('./db');
const repo = require('../lib/RunRepository');
const ActiveContext = require('../lib/ActiveContext');

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
    case 'verify-step': return verifyStep(args);
    case 'handoff': return handoff(args);
    case 'friction': return friction(args);
    default:
      console.error(`Usage:
  node bin/pipeline.js start <animal>
  node bin/pipeline.js log <key>=<value> [--agent N]
  node bin/pipeline.js query <key> [--last N]
  node bin/pipeline.js status
  node bin/pipeline.js tags add <tag> --bucket <b> [--platform <p>] [--source <s>]
  node bin/pipeline.js tags list [--run N]
  node bin/pipeline.js tags recent [--bucket <b>] [--last N]
  node bin/pipeline.js verify-step <1|2|3|4>
  node bin/pipeline.js friction log --worked <w> --differently <d> --tools <t> [--agent N]
  node bin/pipeline.js friction list
  node bin/pipeline.js handoff <1|2|3|4> <payload.json>`);
      process.exit(1);
  }
}

async function handoff(args) {
  const agentNumber = parseInt(args[0]);
  const jsonFile = args[1];

  if (isNaN(agentNumber) || agentNumber < 1 || agentNumber > 4 || !jsonFile) {
    console.error("Usage: node bin/pipeline.js handoff <1|2|3|4> <payload.json>");
    process.exit(1);
  }

  const payloadPath = path.resolve(process.cwd(), jsonFile);
  if (!fs.existsSync(payloadPath)) {
    console.error(`Error: Payload file not found at ${payloadPath}`);
    process.exit(1);
  }

  let payload;
  try {
    payload = JSON.parse(fs.readFileSync(payloadPath, 'utf-8'));
  } catch (e) {
    console.error(`Error: Failed to parse JSON from ${payloadPath}: ${e.message}`);
    process.exit(1);
  }

  const HandoffSerializer = require('../lib/HandoffSerializer');
  try {
    const result = await HandoffSerializer.saveHandoff(agentNumber, payload);
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

async function start(args) {
  const animal = args[0];
  if (!animal) { console.error("Usage: node bin/pipeline.js start <animal>"); process.exit(1); }

  // Archive existing context
  if (fs.existsSync(CONTEXT_FILE)) {
    const ts = new Date().toISOString().slice(0, 10);
    const oldAnimal = await getOldAnimal() || animal;
    const phrase = await getCurrentPhrase();
    const slug = phrase ? `-${slugify(phrase)}` : '';
    const archiveDir = path.join(RUNS_DIR, `${ts}-${oldAnimal}${slug}`);
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
  const runId = await repo.startRun(animal);

  // Write fresh context file
  await ActiveContext.writeHeader(runId, animal);
  console.error(`Run #${runId} started. Animal: ${animal}. Context: MASTER_WORKFLOW_CONTEXT.md`);
  console.log(runId);
}

async function getOldAnimal() {
  try {
    const content = fs.readFileSync(CONTEXT_FILE, 'utf-8');
    const match = content.match(/^#\s+Pipeline\s+Run\s+#\d+\s+—\s+([a-zA-Z0-9_-]+)/i) || content.match(/^#\s+([a-zA-Z0-9_-]+)\s+RUN/i);
    return match ? match[1].toLowerCase() : null;
  } catch { return null; }
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

  for (const kv of kvps) {
    await repo.logDecision(run.id, kv.key, kv.value, agent);
    await ActiveContext.appendDecision(run.id, agent, kv.key, kv.value);
  }
}

async function query(args) {
  const key = args[0];
  const lastIdx = args.indexOf('--last');
  const last = lastIdx >= 0 ? parseInt(args[lastIdx + 1]) || 3 : 5;

  if (!key) { console.error("Usage: node bin/pipeline.js query <key> [--last N]"); process.exit(1); }

  const run = await db.getActiveRun();
  const results = await repo.queryDecisions(key, last);

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

  const decisions = await repo.getDecisions(run.id);

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
  if (sub === 'add') {
    const tag = args[1];
    const bucketIdx = args.indexOf('--bucket');
    const platformIdx = args.indexOf('--platform');
    const sourceIdx = args.indexOf('--source');
    const bucket = bucketIdx >= 0 ? args[bucketIdx + 1] : 'best-fit';
    const platform = platformIdx >= 0 ? args[platformIdx + 1] : null;
    const source = sourceIdx >= 0 ? args[sourceIdx + 1] : null;

    if (!tag) { console.error("Usage: node bin/pipeline.js tags add <tag> --bucket <b>"); process.exit(1); }

    await repo.addTag(run.id, tag, bucket, platform, source);

  } else if (sub === 'list') {
    const runIdx = args.indexOf('--run');
    const runId = runIdx >= 0 ? parseInt(args[runIdx + 1]) : run.id;

    const tags_by_bucket = await repo.getTags(runId);
    console.log(JSON.stringify(tags_by_bucket, null, 2));

  } else if (sub === 'recent') {
    const bucketIdx = args.indexOf('--bucket');
    const lastIdx = args.indexOf('--last');
    const bucket = bucketIdx >= 0 ? args[bucketIdx + 1] : null;
    const last = lastIdx >= 0 ? parseInt(args[lastIdx + 1]) : 3;

    const results = await repo.getRecentTags(bucket, last);
    console.log(JSON.stringify(results, null, 2));

  } else {
    console.error("Usage: node bin/pipeline.js tags add|list|recent [...]");
    process.exit(1);
  }
}

async function verifyStep(args) {
  const agentNumber = parseInt(args[0]);
  if (isNaN(agentNumber) || agentNumber < 1 || agentNumber > 4) {
    console.error("Usage: node bin/pipeline.js verify-step <1|2|3|4>");
    process.exit(1);
  }
  const HandoffSerializer = require('../lib/HandoffSerializer');
  try {
    const result = await HandoffSerializer.verifyStep(agentNumber);
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

async function friction(args) {
  const sub = args[0];
  const run = await db.requireActiveRun();
  const FrictionLogger = require('../lib/FrictionLogger');

  if (sub === 'log') {
    let agent = run.current_agent;
    let worked = '';
    let differently = '';
    let tools = '';

    for (let i = 0; i < args.length; i++) {
      if (args[i] === '--agent') { agent = parseInt(args[i + 1]); i++; }
      else if (args[i] === '--worked') { worked = args[i + 1]; i++; }
      else if (args[i] === '--differently') { differently = args[i + 1]; i++; }
      else if (args[i] === '--tools') { tools = args[i + 1]; i++; }
    }

    if (!worked || !differently || !tools) {
      console.error("Usage: node bin/pipeline.js friction log --worked <w> --differently <d> --tools <t> [--agent N]");
      process.exit(1);
    }

    try {
      await FrictionLogger.log(run.id, agent, { worked, differently, tools });
      console.error(`Friction log saved for Agent ${agent} on Run #${run.id}`);
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }

  } else if (sub === 'list') {
    try {
      const logs = await FrictionLogger.getLogsForRun(run.id);
      if (logs.length === 0) {
        console.log("No friction logs recorded for this run.");
        return;
      }
      console.log(JSON.stringify(logs, null, 2));
    } catch (e) {
      console.error(e.message);
      process.exit(1);
    }
  } else {
    console.error("Usage: node bin/pipeline.js friction log|list [...]");
    process.exit(1);
  }
}

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

main().catch(e => { console.error(e.message); process.exit(1); });
