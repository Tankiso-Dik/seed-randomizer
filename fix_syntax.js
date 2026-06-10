const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Fix the double comma
content = content.replace("},,", "},");

fs.writeFileSync(dataFilePath, content);
console.log('Successfully fixed syntax error.');
