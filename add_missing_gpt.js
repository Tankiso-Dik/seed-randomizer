const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add missing Aesthetics to the individual animals
const missingAesthetics = ',"Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"';
content = content.replace(/aesthetics: \[(.*?)\]/g, (match, p1) => {
  if (!p1.includes("Retro Airbrush")) {
    return `aesthetics: [${p1}${missingAesthetics}]`;
  }
  return match;
});

// 2. Add missing Compositions to the individual animals
const missingCompositions = ',"Arched Typography Design","Repeating Text Pattern"';
content = content.replace(/compositions: \[(.*?)\]/g, (match, p1) => {
  if (!p1.includes("Arched Typography Design")) {
    return `compositions: [${p1}${missingCompositions}]`;
  }
  return match;
});

fs.writeFileSync(filePath, content);
console.log('Successfully injected missing GPT aesthetics and layouts into data.ts!');
