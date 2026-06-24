#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'database.json');
const usedPath = path.join(__dirname, '..', 'data', 'used_seeds.json');

function parseData() {
  const content = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(content);
}

function getUsed() {
  try {
    const content = fs.readFileSync(usedPath, 'utf-8');
    return JSON.parse(content);
  } catch {
    return { used: [] };
  }
}

function saveUsed(used) {
  fs.writeFileSync(usedPath, JSON.stringify(used, null, 2), 'utf-8');
}

function getRandom() {
  const data = parseData();
  const used = getUsed();

  // ponytail: auto-reset used pool on exhaustion to prevent infinite JSON file growth and ensure cyclic uniqueness
  let unused = data.ANIMALS.filter(a => !used.used.includes(a.id));
  if (unused.length === 0) {
    used.used = [];
    unused = data.ANIMALS;
  }

  const pick = unused[Math.floor(Math.random() * unused.length)];

  used.used.push(pick.id);
  saveUsed(used);

  console.log(JSON.stringify({
    seed: { animal: pick.label }
  }, null, 2));
}

function resetUsed() {
  saveUsed({ used: [] });
  console.log(JSON.stringify({ success: true, message: 'Used seeds tracking reset.' }));
}

function status() {
  const data = parseData();
  const used = getUsed();
  const total = data.ANIMALS.length;
  const remaining = data.ANIMALS.filter(a => !used.used.includes(a.id));
  console.log(`Total animals: ${total}`);
  console.log(`Used: ${used.used.length}`);
  console.log(`Remaining: ${remaining.length} — ${remaining.map(a => a.label).join(', ') || 'none (cycle complete)'}`);
}

const command = process.argv[2];

if (command === 'get-random') {
  getRandom();
} else if (command === 'reset-used') {
  resetUsed();
} else if (command === 'status') {
  status();
} else {
  console.log("Usage:");
  console.log("  node bin/seed-manager.js get-random");
  console.log("  node bin/seed-manager.js reset-used");
  console.log("  node bin/seed-manager.js status");
}
