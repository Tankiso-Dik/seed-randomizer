#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const repo = require('../lib/RunRepository');

const dataPath = path.join(__dirname, '..', 'data', 'database.json');

function parseData() {
  const content = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(content);
}

async function getRandom() {
  const data = parseData();
  const usedAnimals = await repo.getUsedAnimals();
  
  // Normalize strings for comparison
  const usedNames = usedAnimals.map(a => a.toLowerCase());
  
  // Filter out animals that exist in the database
  let unused = data.ANIMALS.filter(a => !usedNames.includes(a.label.toLowerCase()));
  
  if (unused.length === 0) {
    // If we've exhausted all, reset the pool logically.
    // In a deep state system, "resetting" means allowing overlaps.
    // So we just pick from all of them again.
    unused = data.ANIMALS;
  }

  const pick = unused[Math.floor(Math.random() * unused.length)];

  console.log(JSON.stringify({
    seed: { animal: pick.label }
  }, null, 2));
}

async function status() {
  const data = parseData();
  const usedAnimals = await repo.getUsedAnimals();
  const usedNames = usedAnimals.map(a => a.toLowerCase());
  
  const total = data.ANIMALS.length;
  const remaining = data.ANIMALS.filter(a => !usedNames.includes(a.label.toLowerCase()));
  
  console.log(`Total animals: ${total}`);
  console.log(`Used (in DB): ${usedNames.length}`);
  console.log(`Remaining: ${remaining.length} — ${remaining.map(a => a.label).join(', ') || 'none (cycle complete)'}`);
}

async function resetUsed() {
  console.log(JSON.stringify({ 
    success: false, 
    message: 'Resetting is deprecated. The seed-manager now reads deep state from the SQLite DB. To clear runs, clear state.db.' 
  }));
}

const command = process.argv[2];

async function main() {
  if (command === 'get-random') {
    await getRandom();
  } else if (command === 'reset-used') {
    await resetUsed();
  } else if (command === 'status') {
    await status();
  } else {
    console.log("Usage:");
    console.log("  node bin/seed-manager.js get-random");
    console.log("  node bin/seed-manager.js reset-used (deprecated)");
    console.log("  node bin/seed-manager.js status");
  }
}

main().catch(console.error);
