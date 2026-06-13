#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data', 'database.json');

function parseData() {
  const content = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(content);
}

function getRandom() {
  const data = parseData();
  const animals = data.ANIMALS;
  const directions = data.DIRECTIONS;
  
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const randomDirection = directions[Math.floor(Math.random() * directions.length)];
  
  console.log(JSON.stringify({
    seed: {
      animal: randomAnimal.label,
      direction: randomDirection
    }
  }, null, 2));
}

function updateDirection(oldDir, newDir) {
  const data = parseData();
  const directions = data.DIRECTIONS;
  
  const index = directions.indexOf(oldDir);
  if (index === -1) {
    console.error(`Direction "${oldDir}" not found in database.json.`);
    process.exit(1);
  }
  
  // Replace the old direction with the new one
  directions[index] = newDir;
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(JSON.stringify({ success: true, message: `Replaced "${oldDir}" with "${newDir}" in database.json.` }));
}

const command = process.argv[2];

if (command === 'get-random') {
  getRandom();
} else if (command === 'update-direction') {
  const oldDir = process.argv[3];
  const newDir = process.argv[4];
  if (!oldDir || !newDir) {
    console.error("Usage: node seed-manager.js update-direction <old_direction> <new_direction>");
    process.exit(1);
  }
  updateDirection(oldDir, newDir);
} else {
  console.log("Usage: ");
  console.log("  node seed-manager.js get-random");
  console.log("  node seed-manager.js update-direction <old> <new>");
}
