#!/usr/bin/env node
const fs = require('fs');
const ActiveContext = require('../lib/ActiveContext');

const cmd = process.argv[2];

async function main() {
  try {
    const sections = await ActiveContext.getSections();

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
        console.log(fs.readFileSync(ActiveContext.getFilePath(), 'utf-8'));
        return;
      }
      console.log(matched.map(s => `## ${s.name}\n${s.content}`).join('\n\n'));

    } else {
      console.error("Usage:\n  node bin/context.js sections\n  node bin/context.js extract --sections name1,name2");
      process.exit(1);
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

main();
