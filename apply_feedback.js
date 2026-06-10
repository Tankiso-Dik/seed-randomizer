const fs = require('fs');
const path = require('path');

// 1. Update data.ts
const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Update Interface
content = content.replace(
  '  archetype: string;\n  buyerIdentity: string;',
  '  archetypes: { arc: string; idty: string }[];'
);

// We need to replace `archetype: "...",\n    buyerIdentity: "...",` with `archetypes: [ { arc: "...", idty: "..." }, { arc: "Variant 2", idty: "Variant 2 identity" } ],`
// Let's use a regex to capture existing and convert them to an array of 3 variants to inject entropy.
content = content.replace(/archetype: "(.*?)",\n\s*buyerIdentity: "(.*?)",/g, (match, p1, p2) => {
  return `archetypes: [
      { arc: "${p1}", idty: "${p2}" },
      { arc: "The Chaos Survivor", idty: "Someone barely holding it together but finding humor in the absolute absurdity of modern life." },
      { arc: "The Nihilist Cozy", idty: "Someone who has accepted the world is ending and decided to just get comfortable and drink tea." }
    ],`;
});

// Update the [IMAGE PROMPT] instruction to add screenprint realism
const oldPrompt = "Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.";
const newPrompt = "Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering.";
content = content.replaceAll(oldPrompt, newPrompt);

// Update SEO Clusters
const oldMainTag = "Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]";
const newMainTag = "Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]";
content = content.replaceAll(oldMainTag, newMainTag);
content = content.replaceAll("Main Tag:", "Search-Intent Clusters:"); // just in case

// We don't need the Sub-Tags strictly if we have clusters, but we can keep it or rename it.
const oldSubTags = "Sub-Tags: [9 highly searched related tags]";
const newSubTags = "Supporting Tags: [9 highly searched related tags that overlap with the clusters]";
content = content.replaceAll(oldSubTags, newSubTags);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated data.ts with probabilistic archetypes, image prompt entropy, and SEO clusters.');

// 2. Update page.tsx to handle array of archetypes
const pageFilePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pageFilePath, 'utf8');

// For single selection (line 64-ish):
// const generatedPrompt = currentAnimal?.promptTemplate
//   .replace("[ARCHETYPE]", currentAnimal?.archetype || "")
//   .replace("[BUYER_IDENTITY]", currentAnimal?.buyerIdentity || "")
// Needs to pick a random archetype from currentAnimal.archetypes on every render? Or better, just use currentAnimal?.archetypes[0] for single preview, or randomize it if we want.
// Let's randomize it during batch copy, and for single preview, pick a random one deterministically or dynamically.
pageContent = pageContent.replace(
  /\.replace\("\[ARCHETYPE\]", currentAnimal\?\.archetype \|\| ""\)\s*\n\s*\.replace\("\[BUYER_IDENTITY\]", currentAnimal\?\.buyerIdentity \|\| ""\)/g,
  `.replace("[ARCHETYPE]", currentAnimal?.archetypes ? currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)].arc : "")
    .replace("[BUYER_IDENTITY]", currentAnimal?.archetypes ? currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)].idty : "")`
);

// For batch copy:
// const p = animal.promptTemplate
//   .replace("[ARCHETYPE]", animal.archetype)
//   .replace("[BUYER_IDENTITY]", animal.buyerIdentity)
pageContent = pageContent.replace(
  /\.replace\("\[ARCHETYPE\]", animal\.archetype\)\s*\n\s*\.replace\("\[BUYER_IDENTITY\]", animal\.buyerIdentity\)/g,
  `{(() => {
          const randArc = animal.archetypes[Math.floor(Math.random() * animal.archetypes.length)];
          return p
            .replace("[ARCHETYPE]", randArc.arc)
            .replace("[BUYER_IDENTITY]", randArc.idty);
        })()}` // this requires some refactoring since it's inside a chained .replace
);

// Let's just do a simpler replacement for batch copy
const oldBatchReplace = `      const p = animal.promptTemplate
        .replace("[ARCHETYPE]", animal.archetype)
        .replace("[BUYER_IDENTITY]", animal.buyerIdentity)`;
const newBatchReplace = `      const randArc = animal.archetypes[Math.floor(Math.random() * animal.archetypes.length)];
      const p = animal.promptTemplate
        .replace("[ARCHETYPE]", randArc.arc)
        .replace("[BUYER_IDENTITY]", randArc.idty)`;
pageContent = pageContent.replace(oldBatchReplace, newBatchReplace);

fs.writeFileSync(pageFilePath, pageContent);
console.log('Successfully updated page.tsx to support probabilistic archetypes.');
