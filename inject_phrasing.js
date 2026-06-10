const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Update PHRASE TONE
const oldPhraseTone = "- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected \"[HUMOR_STYLE]\" (2-8 words).\n";
const newPhraseTone = "- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected \"[HUMOR_STYLE]\" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode'), 2) The \"Confessional\" (e.g., 'In my defense, I was left unsupervised'), 3) The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward'), or 4) The \"Bold Label\" (e.g., 'Professional Overthinker').\n";

content = content.replaceAll(oldPhraseTone, newPhraseTone);

// Update SEO Title
const oldTitle = "Title: [Catchy Title]\n";
const newTitle = "Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]\n";

content = content.replaceAll(oldTitle, newTitle);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated Phrase Frameworks and SEO Title rules in data.ts');
