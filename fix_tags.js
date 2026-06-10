const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const oldTagRegex = /Supporting Tags: \[Comma separated list of 6-15 highly relevant tags\. NO vague buzzwords\. NO redundancies \(e\.g\., if you use 'cat', do NOT use 'cats' or 'kitten'\)\.\]/g;

const newTagInstruction = `Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]`;

content = content.replace(oldTagRegex, newTagInstruction);

fs.writeFileSync(filePath, content);
console.log('Successfully updated Supporting Tags to enforce long-tail keyword strategy!');
