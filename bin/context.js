#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');
const CONTEXT_FILE = path.join(ROOT, 'MASTER_WORKFLOW_CONTEXT.md');

const cmd = process.argv[2];

function main() {
  if (!fs.existsSync(CONTEXT_FILE)) {
    console.error("No MASTER_WORKFLOW_CONTEXT.md found.");
    process.exit(1);
  }

  const content = fs.readFileSync(CONTEXT_FILE, 'utf-8');
  const sections = parseSections(content);

  if (cmd === 'sections') {
    console.log(JSON.stringify(sections.map(s => ({
      name: s.name,
      lines: s.lines,
      preview: s.content.slice(0, 100).replace(/\n/g, ' ')
    })), null, 2));

  } else if (cmd === 'extract') {
    const namesIdx = process.argv.indexOf('--sections');
    if (namesIdx < 0) { console.error("Usage: node bin/context.js extract --sections name1,name2"); process.exit(1); }
    const names = process.argv[namesIdx + 1].split(',').map(n => n.trim().toLowerCase());

    const matched = sections.filter(s => names.some(n => s.name.toLowerCase().includes(n)));
    if (matched.length === 0) {
      // Fallback: print everything
      console.log(content);
      return;
    }
    console.log(matched.map(s => `## ${s.name}\n${s.content}`).join('\n\n'));

  } else {
    console.error("Usage:\n  node bin/context.js sections\n  node bin/context.js extract --sections name1,name2");
    process.exit(1);
  }
}

function parseSections(content) {
  const lines = content.split('\n');
  const sections = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Match ## or ### headers
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

main();
