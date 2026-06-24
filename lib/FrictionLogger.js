'use strict';
const fs = require('fs');
const path = require('path');
const db = require('../bin/db');

const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');
const TEXT_LOG_PATH = path.join(ROOT, 'agent-friction.log');

class FrictionLogger {
  static async log(runId, agentNumber, { worked, differently, tools }) {
    if (!worked || !worked.trim()) throw new Error("Friction log error: '--worked' notes cannot be empty");
    if (!differently || !differently.trim()) throw new Error("Friction log error: '--differently' notes cannot be empty");
    if (!tools || !tools.trim()) throw new Error("Friction log error: '--tools' notes cannot be empty");

    const d = await db.getDb();
    
    // Check if we already have an entry to prevent duplicates
    const existStmt = d.prepare("SELECT id FROM friction_logs WHERE run_id = ? AND agent_number = ?");
    existStmt.bind([runId, agentNumber]);
    let exists = false;
    if (existStmt.step()) {
      exists = true;
    }
    existStmt.free();

    if (exists) {
      d.run("UPDATE friction_logs SET what_worked = ?, what_went_differently = ?, troubled_tools = ? WHERE run_id = ? AND agent_number = ?", [
        worked.trim(), differently.trim(), tools.trim(), runId, agentNumber
      ]);
    } else {
      d.run("INSERT INTO friction_logs (run_id, agent_number, what_worked, what_went_differently, troubled_tools) VALUES (?, ?, ?, ?, ?)", [
        runId, agentNumber, worked.trim(), differently.trim(), tools.trim()
      ]);
    }
    db.save();

    // Append to human-readable text file agent-friction.log
    const timestamp = new Date().toISOString();
    const prefix = `${timestamp} - Agent ${agentNumber} -`;
    const logLine = `${prefix} Worked: ${worked.trim()} | Differently: ${differently.trim()} | Tools: ${tools.trim()}\n`;
    try {
      fs.appendFileSync(TEXT_LOG_PATH, logLine, 'utf-8');
    } catch (e) {
      console.warn("⚠️ Warning: Could not write to text log file: " + e.message);
    }

    return { success: true };
  }

  static async getLogsForRun(runId) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT * FROM friction_logs WHERE run_id = ? ORDER BY agent_number ASC");
    stmt.bind([runId]);
    const results = [];
    while (stmt.step()) {
      results.push(stmt.getAsObject());
    }
    stmt.free();
    return results;
  }

  static async hasLogged(runId, agentNumber) {
    const d = await db.getDb();
    const stmt = d.prepare("SELECT id FROM friction_logs WHERE run_id = ? AND agent_number = ?");
    stmt.bind([runId, agentNumber]);
    const hasRow = stmt.step();
    stmt.free();
    return hasRow;
  }
}

module.exports = FrictionLogger;
