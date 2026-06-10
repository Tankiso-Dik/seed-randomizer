const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

const oldSeoBlock = `[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`;

const newSeoBlock = `[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 2-5 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat who wants to be alone'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]`;

content = content.replaceAll(oldSeoBlock, newSeoBlock);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated SEO METADATA block to enforce Main Tag integration into Title and Description.');
