const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// 1. Replace BACKGROUND INSTRUCTION
const oldBgInstruction = `- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."`;
const newBgInstruction = `- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."`;
content = content.replaceAll(oldBgInstruction, newBgInstruction);

// 2. Remove purely transparent background from IMAGE PROMPT
const oldImageBg = `Purely transparent background with no background elements or colors. `;
const newImageBg = `Simple, complementary environment that enhances the subject without clutter. `;
content = content.replaceAll(oldImageBg, newImageBg);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated background instructions to allow complementary scenery.');
