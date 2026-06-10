const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(filePath, 'utf8');

const oldSeoBlockRegex = /\[SEO METADATA & UPLOAD INSTRUCTIONS\]\nTitle: \[(.*?)\]\nMain Tag: \[(.*?)\]\nSupporting Tags: \[(.*?)\]\nDescription: \[(.*?)\]\nRecommended Garment Color: \[(.*?)\]/g;

const newSeoBlock = `[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 highly relevant tags. NO vague buzzwords. NO redundancies (e.g., if you use 'cat', do NOT use 'cats' or 'kitten').]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`;

content = content.replace(oldSeoBlockRegex, newSeoBlock);

fs.writeFileSync(filePath, content);
console.log('Successfully updated SEO instructions across all templates in data.ts!');
