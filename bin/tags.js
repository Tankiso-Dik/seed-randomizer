#!/usr/bin/env node
// bin/tags.js — Tag validation for Agent 4.
// Checks tag rules that are frequently violated:
//   40/30/30 split, banned terms, register purity, length, duplicates.
// Usage: tags validate --register "a,b,c" --best-fit "d,e" --proven "f,g" --main-tag "x" --animal "y"

'use strict';

const TagValidator = require('../lib/TagValidator');

function usage() {
  console.log(`
Usage:
  tags validate \\
    --register "tag1, tag2, ..." \\
    --best-fit "tag1, tag2, ..." \\
    --proven "tag1, tag2, ..." \\
    --main-tag "..." \\
    --animal "..."

Outputs structured JSON with per-check pass/fail.
`);
}

function parseArgs(argv) {
  const r = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const k = argv[i].slice(2).replace(/-/g, '_');
      if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        r[k] = argv[i + 1]; i++;
      } else { r[k] = true; }
    }
  }
  return r;
}

function validate(args) {
  const result = TagValidator.validate(args);
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  const cmd = a._ ? a._[0] : null;
  if (!cmd || cmd === 'help' || cmd === 'validate') {
    if (!a.register && !a.best_fit && !a.proven) { usage(); return; }
    validate(a);
  } else {
    console.error(`Unknown command: ${cmd}. Use: tags help`);
    process.exit(1);
  }
}

main();

