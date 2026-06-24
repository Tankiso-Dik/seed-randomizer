const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

// Allow DB_DIR override via env (used by tests)
const DB_DIR = process.env.DB_DIR || path.join(__dirname, '..', '.pipeline');
const DB_PATH = path.join(DB_DIR, 'state.db');

let db = null;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  animal TEXT NOT NULL,
  phrase TEXT,
  status TEXT DEFAULT 'active',
  current_agent INTEGER DEFAULT 1,
  created_at TEXT DEFAULT (datetime('now')),
  completed_at TEXT
);

CREATE TABLE IF NOT EXISTS decisions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  agent_number INTEGER NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_decisions_key ON decisions(key);
CREATE INDEX IF NOT EXISTS idx_decisions_run ON decisions(run_id);

CREATE TABLE IF NOT EXISTS tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  tag TEXT NOT NULL,
  bucket TEXT NOT NULL,
  platform TEXT,
  source TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_tags_run ON tags(run_id);
CREATE INDEX IF NOT EXISTS idx_tags_bucket ON tags(bucket);

CREATE TABLE IF NOT EXISTS search_cache (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  query TEXT UNIQUE NOT NULL,
  result_json TEXT NOT NULL,
  source TEXT,
  queried_at TEXT DEFAULT (datetime('now')),
  queried_by_agent INTEGER
);

CREATE INDEX IF NOT EXISTS idx_cache_query ON search_cache(query);

CREATE TABLE IF NOT EXISTS context_sections (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  agent_number INTEGER NOT NULL,
  section_name TEXT NOT NULL,
  content_preview TEXT,
  line_count INTEGER,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS run_metadata (
  run_id INTEGER PRIMARY KEY REFERENCES runs(id),
  register_vocab TEXT,
  seed_search_language TEXT,
  confidence_score TEXT,
  color_palette TEXT,
  garment_color TEXT
);

CREATE TABLE IF NOT EXISTS qa_checks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  check_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('pass','fail','warn','pending')),
  note TEXT DEFAULT '',
  created_at TEXT DEFAULT (datetime('now')),
  UNIQUE(run_id, check_name)
);

CREATE TABLE IF NOT EXISTS friction_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_id INTEGER NOT NULL REFERENCES runs(id),
  agent_number INTEGER NOT NULL,
  what_worked TEXT NOT NULL,
  what_went_differently TEXT NOT NULL,
  troubled_tools TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);
`;

async function getDb() {
  if (db) return db;
  const SQL = await initSqlJs();
  fs.mkdirSync(DB_DIR, { recursive: true });
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }
  db.run(SCHEMA);
  save();
  return db;
}

function save() {
  if (!db) return;
  const data = db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

async function close() {
  if (db) { save(); db.close(); db = null; }
}

async function getActiveRun() {
  const d = await getDb();
  const stmt = d.prepare("SELECT * FROM runs WHERE status = 'active' ORDER BY id DESC LIMIT 1");
  if (stmt.step()) {
    const row = stmt.getAsObject();
    stmt.free();
    return row;
  }
  stmt.free();
  return null;
}

async function requireActiveRun() {
  const run = await getActiveRun();
  if (!run) {
    console.error("No active run. Start one with: node bin/pipeline.js start <animal>");
    process.exit(1);
  }
  return run;
}

module.exports = { getDb, save, close, getActiveRun, requireActiveRun };
