const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

const oldSeoBlock = `Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]\``;

const newSeoBlock = `Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\``;

content = content.replaceAll(oldSeoBlock, newSeoBlock);

// Also update the [SEO METADATA] header to reflect this new addition
content = content.replaceAll("[SEO METADATA]", "[SEO METADATA & UPLOAD INSTRUCTIONS]");

fs.writeFileSync(dataFilePath, content);
console.log('Successfully added Recommended Garment Color to the prompt template.');
