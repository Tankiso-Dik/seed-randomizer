'use strict';

const fs = require('fs');
const path = require('path');
const db = require('../bin/db');

const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');
const CONTEXT_FILE = path.join(ROOT, 'MASTER_WORKFLOW_CONTEXT.md');

class ActiveContext {
  static getFilePath() {
    return CONTEXT_FILE;
  }

  static parseSections(content) {
    const lines = content.split('\n');
    const sections = [];
    let current = null;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const headerMatch = line.match(/^#{2,3}\s+(.+)/);
      if (headerMatch) {
        if (current) sections.push(current);
        current = { name: headerMatch[1].trim(), content: '', startLine: i + 1, lines: 0 };
      } else if (current) {
        current.content += (current.content ? '\n' : '') + line;
        current.lines++;
      }
    }
    if (current) sections.push(current);
    return sections;
  }

  static async writeHeader(runId, animal) {
    const header = `# Pipeline Run #${runId} — ${animal}\nStarted: ${new Date().toISOString()}\n\n`;
    fs.writeFileSync(CONTEXT_FILE, header);
  }

  static async appendDecision(runId, agentNumber, key, value) {
    const line = `- **Decision (Agent ${agentNumber}):** \`${key}=${value}\`\n`;
    fs.appendFileSync(CONTEXT_FILE, line);
  }

  static async appendSection(runId, agentNumber, name, content) {
    const formatted = `\n## ${name}\n${content}\n`;
    fs.appendFileSync(CONTEXT_FILE, formatted);

    const d = await db.getDb();
    const preview = content.slice(0, 100).replace(/\n/g, ' ');
    const lineCount = content.split('\n').length;
    
    const stmt = d.prepare(`
      INSERT INTO context_sections (run_id, agent_number, section_name, content_preview, line_count)
      VALUES (?, ?, ?, ?, ?)
    `);
    stmt.run([runId, agentNumber, name, preview, lineCount]);
    stmt.free();
    db.save();
  }

  static async readSection(name) {
    if (!fs.existsSync(CONTEXT_FILE)) {
      throw new Error("No MASTER_WORKFLOW_CONTEXT.md found.");
    }
    const content = fs.readFileSync(CONTEXT_FILE, 'utf-8');
    const sections = this.parseSections(content);
    return sections.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }

  static async getSections() {
    if (!fs.existsSync(CONTEXT_FILE)) {
      throw new Error("No MASTER_WORKFLOW_CONTEXT.md found.");
    }
    const content = fs.readFileSync(CONTEXT_FILE, 'utf-8');
    return this.parseSections(content);
  }
}

module.exports = ActiveContext;
