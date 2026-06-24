#!/usr/bin/env node
// bin/qa.js — Structured QA checklist for design pipeline.
// Stores PASS/FAIL/WARN per check in SQLite. Downstream agents
// query results instead of parsing markdown.
// Usage: qa <init|check|status|verify> [flags]

'use strict';

const db = require('./db');

const REQUIRED = [
  'ip_safety', 'meme_fidelity',
  'cohesion_animal_expression', 'cohesion_expression_phrase',
  'cohesion_phrase_prop', 'cohesion_prop_posture', 'cohesion_register',
  'prop_count', 'format_fidelity', 'anatomy_risk'
];

const ALL = [...REQUIRED, 'phrase_market_validation', 'color_contrast', 'taste_score', 'shareability'];

function usage() {
  console.log(`
Usage:
  qa init                              Create QA checklist for active run
  qa check <name> --status <pass|fail|warn> [--note "..."]
  qa status                            Show all checks for active run
  qa verify                            Exit 0 only if all required checks pass

Checks:
  Required: ${REQUIRED.join(', ')}
  Optional: phrase_market_validation, color_contrast, taste_score, shareability
`);
}

function parseArgs(argv) {
  const r = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const k = argv[i].slice(2);
      if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        r[k] = argv[i + 1]; i++;
      } else { r[k] = true; }
    } else { r._.push(argv[i]); }
  }
  return r;
}

async function cmdInit() {
  const run = await db.requireActiveRun();
  const d = await db.getDb();
  for (const name of ALL) {
    d.run("INSERT OR IGNORE INTO qa_checks (run_id, check_name, status) VALUES (?, ?, 'pending')", [run.id, name]);
  }
  db.save();
  console.log(`QA checklist initialized for run ${run.id} (${run.animal})`);
}

async function cmdCheck(a) {
  const name = a._[1];
  if (!name) die('Usage: qa check <name> --status <pass|fail|warn> [--note "..."]');
  if (!ALL.includes(name)) die(`Unknown check: ${name}. Valid: ${ALL.join(', ')}`);
  const status = a.status;
  if (!['pass', 'fail', 'warn'].includes(status)) die('--status must be pass, fail, or warn');
  const run = await db.requireActiveRun();
  const d = await db.getDb();
  d.run("INSERT OR REPLACE INTO qa_checks (run_id, check_name, status, note, created_at) VALUES (?, ?, ?, ?, datetime('now'))",
    [run.id, name, status, a.note || '']);
  db.save();
  console.log(`qa ${name}: ${status}${a.note ? ' — ' + a.note : ''}`);
}

async function cmdStatus() {
  const run = await db.requireActiveRun();
  const d = await db.getDb();
  const stmt = d.prepare("SELECT check_name, status, note FROM qa_checks WHERE run_id = ? ORDER BY check_name");
  stmt.bind([run.id]);
  const rows = [];
  while (stmt.step()) rows.push(stmt.getAsObject());
  stmt.free();
  if (rows.length === 0) { console.log('No QA checks for this run. Run: qa init'); return; }
  const icon = { pass: '✅', fail: '❌', warn: '⚠️', pending: '⬜' };
  console.log(`\nQA Status — Run ${run.id} (${run.animal}):`);
  for (const r of rows) {
    console.log(`  ${icon[r.status] || '⬜'} ${r.check_name}${r.note ? ' — ' + r.note : ''}`);
  }
}

async function cmdVerify() {
  const run = await db.requireActiveRun();
  const d = await db.getDb();
  const stmt = d.prepare("SELECT check_name, status FROM qa_checks WHERE run_id = ? AND check_name IN (" +
    REQUIRED.map(() => '?').join(',') + ")");
  stmt.bind([run.id, ...REQUIRED]);
  const results = {};
  while (stmt.step()) {
    const r = stmt.getAsObject();
    results[r.check_name] = r.status;
  }
  stmt.free();
  let allPass = true;
  for (const name of REQUIRED) {
    const s = results[name] || 'missing';
    if (s !== 'pass') { allPass = false; console.error(`❌ ${name}: ${s}`); }
  }
  if (allPass) { console.log('✅ All required QA checks pass'); process.exit(0); }
  else { console.error('\n❌ QA verification failed — required checks not all passing'); process.exit(1); }
}

function die(msg) { console.error(msg); process.exit(1); }

async function main() {
  const a = parseArgs(process.argv.slice(2));
  const cmd = a._[0];
  if (!cmd || cmd === 'help') { usage(); return; }
  try {
    switch (cmd) {
      case 'init': await cmdInit(); break;
      case 'check': await cmdCheck(a); break;
      case 'status': await cmdStatus(); break;
      case 'verify': await cmdVerify(); break;
      default: die(`Unknown command: ${cmd}. Use: qa help`);
    }
  } catch (e) {
    die(e.message || String(e));
  }
}

main();
