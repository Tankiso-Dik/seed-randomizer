const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

const missingArchetypes = {
  guinea_pig: { arc: "The Dramatic Potato", idty: "Someone who demands immediate attention, screams when hungry, and prefers staying home in their cozy corner." },
  red_panda: { arc: "The Clumsy Introvert", idty: "Someone trying to look intimidating but actually just soft, easily overwhelmed, and prone to silly mistakes." }
};

for (const [key, data] of Object.entries(missingArchetypes)) {
  const regex = new RegExp(`(${key}: {\\s*\\n\\s*id: "${key}",\\s*\\n\\s*label: "[^"]+",)`);
  if (content.match(regex)) {
    content = content.replace(
      regex,
      `$1\n    archetype: "${data.arc}",\n    buyerIdentity: "${data.idty}",`
    );
  } else {
    console.log("Could not find", key);
  }
}

fs.writeFileSync(dataFilePath, content);
console.log('Fixed missing guinea_pig and red_panda');
