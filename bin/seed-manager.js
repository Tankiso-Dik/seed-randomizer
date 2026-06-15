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
  
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
  const animalDirections = randomAnimal.directions || [];
  const randomDirection = animalDirections.length > 0
    ? animalDirections[Math.floor(Math.random() * animalDirections.length)]
    : "Detached / Unbothered";
  
  console.log(JSON.stringify({
    seed: {
      animal: randomAnimal.label,
      direction: randomDirection
    }
  }, null, 2));
}

function updateDirection(oldDir, newDir) {
  const data = parseData();
  let replacedCount = 0;
  
  data.ANIMALS.forEach(animal => {
    if (animal.directions) {
      const index = animal.directions.indexOf(oldDir);
      if (index !== -1) {
        animal.directions[index] = newDir;
        replacedCount++;
      }
    }
  });
  
  if (replacedCount === 0) {
    console.error(`Direction "${oldDir}" not found in database.json.`);
    process.exit(1);
  }
  
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log(JSON.stringify({ success: true, message: `Replaced "${oldDir}" with "${newDir}" in database.json across ${replacedCount} animals.` }));
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
