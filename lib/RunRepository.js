'use strict';

const db = require('../bin/db');

class RunRepository {
  static async startRun(animal) {
    const d = await db.getDb();
    d.run("INSERT INTO runs (animal, status, current_agent) VALUES (?, 'active', 1)", [animal]);
    const runId = d.exec("SELECT last_insert_rowid() AS id")[0].values[0][0];
    db.save();
    return runId;
  }

  static async getUsedAnimals() {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT DISTINCT animal FROM runs");
    const animals = [];
    while (stmt.step()) {
      animals.push(stmt.getAsObject().animal);
    }
    stmt.free();
    return animals;
  }

  static async logDecision(runId, key, value, agentNumber) {
    const d = await db.getDb();
    const stmt = d.prepare("INSERT INTO decisions (run_id, agent_number, key, value) VALUES (?, ?, ?, ?)");
    stmt.run([runId, agentNumber, key, value]);
    stmt.free();
    
    // Auto-advance agent number if needed
    const run = await db.getActiveRun();
    if (run && agentNumber > run.current_agent) {
      d.run("UPDATE runs SET current_agent = ? WHERE id = ?", [agentNumber, run.id]);
    }
    db.save();
  }

  static async queryDecisions(key, lastN = 5) {
    const d = await db.getDb();
    const stmt = d.prepare(`
      SELECT d.value, d.agent_number, r.animal
      FROM decisions d
      JOIN runs r ON r.id = d.run_id
      WHERE d.key = ?
      ORDER BY d.id DESC
      LIMIT ?
    `);
    stmt.bind([key, lastN]);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  }

  static async getDecisions(runId) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT key, value FROM decisions WHERE run_id = ? ORDER BY agent_number, id");
    stmt.bind([runId]);
    const decisions = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (!decisions[row.key]) decisions[row.key] = row.value;
    }
    stmt.free();
    return decisions;
  }

  static async addTag(runId, tag, bucket, platform = null, source = null) {
    const d = await db.getDb();
    const stmt = d.prepare("INSERT INTO tags (run_id, tag, bucket, platform, source) VALUES (?, ?, ?, ?, ?)");
    stmt.run([runId, tag, bucket, platform, source]);
    stmt.free();
    db.save();
  }

  static async getTags(runId) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT tag, bucket, platform, source FROM tags WHERE run_id = ? ORDER BY bucket, id");
    stmt.bind([runId]);
    const tagsByBucket = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (!tagsByBucket[row.bucket]) tagsByBucket[row.bucket] = [];
      tagsByBucket[row.bucket].push(row.tag);
    }
    stmt.free();
    return tagsByBucket;
  }

  static async getRecentTags(bucket = null, lastN = 3) {
    const d = await db.getDb();
    let sql = `
      SELECT t.tag, t.bucket, t.run_id, r.animal
      FROM tags t
      JOIN runs r ON r.id = t.run_id
    `;
    const params = [];
    if (bucket) { sql += " WHERE t.bucket = ?"; params.push(bucket); }
    sql += " ORDER BY t.id DESC LIMIT ?";
    params.push(lastN * 15);

    const stmt = d.prepare(sql);
    stmt.bind(params);
    const results = {};
    while (stmt.step()) {
      const row = stmt.getAsObject();
      if (!results[row.tag]) results[row.tag] = 0;
      results[row.tag]++;
    }
    stmt.free();
    return results;
  }

  static async getCachedSearch(query) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT result_json FROM search_cache WHERE query = ?");
    stmt.bind([query]);
    let result = null;
    if (stmt.step()) {
      const cached = stmt.getAsObject();
      result = JSON.parse(cached.result_json);
    }
    stmt.free();
    return result;
  }

  static async cacheSearch(query, suggestions, source = 'curl') {
    const d = await db.getDb();
    const stmt = d.prepare("INSERT OR REPLACE INTO search_cache (query, result_json, source) VALUES (?, ?, ?)");
    stmt.run([query, JSON.stringify(suggestions), source]);
    stmt.free();
    db.save();
  }

  static async initQA(runId, checkNames) {
    const d = await db.getDb();
    for (const name of checkNames) {
      d.run("INSERT OR IGNORE INTO qa_checks (run_id, check_name, status) VALUES (?, ?, 'pending')", [runId, name]);
    }
    db.save();
  }

  static async updateQACheck(runId, name, status, note = '') {
    const d = await db.getDb();
    d.run("INSERT OR REPLACE INTO qa_checks (run_id, check_name, status, note, created_at) VALUES (?, ?, ?, ?, datetime('now'))",
      [runId, name, status, note]);
    db.save();
  }

  static async getQAChecks(runId) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT check_name, status, note FROM qa_checks WHERE run_id = ? ORDER BY check_name");
    stmt.bind([runId]);
    const rows = [];
    while (stmt.step()) {
      rows.push(stmt.getAsObject());
    }
    stmt.free();
    return rows;
  }

  static async getRequiredQACheckStatuses(runId, requiredChecks) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT check_name, status FROM qa_checks WHERE run_id = ? AND check_name IN (" +
      requiredChecks.map(() => '?').join(',') + ")");
    stmt.bind([runId, ...requiredChecks]);
    const results = {};
    while (stmt.step()) {
      const r = stmt.getAsObject();
      results[r.check_name] = r.status;
    }
    stmt.free();
    return results;
  }
}

module.exports = RunRepository;
