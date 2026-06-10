const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// 1. Update intro paragraph for ALL prompt templates to inject Buyer Identity explicitly.
const oldIntro = "You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.";
const newIntro = "You are an expert TeePublic t-shirt design concept generator and SEO copywriter. You are generating a t-shirt concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.";
content = content.replaceAll(oldIntro, newIntro);

// 2. Update Meme Framework rule
const oldRule = `- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').`;
const newRule = `- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].`;
content = content.replaceAll(oldRule, newRule);

// Ensure [FRAMEWORK] parameter is added to DESIGN PARAMETERS block
content = content.replaceAll("- Humor/Phrase Style: [HUMOR_STYLE]", "- Humor/Phrase Style: [HUMOR_STYLE]\n- Phrase Framework: [FRAMEWORK]");

// 3. Update AnimalConfig interface to include themes and frameworks
content = content.replace(
  "  archetypes: { arc: string; idty: string }[];",
  "  archetypes: { arc: string; idty: string; themes: string[]; frameworks: string[] }[];"
);

// We need to inject `themes` and `frameworks` into every single archetype in the file.
// Let's do a programmatic mapping based on keywords in the archetype names or IDs.
// It's easier to just Regex replace all { arc: "...", idty: "..." } with added themes/frameworks.
const THEME_IDS = [
  "coffee", "plant", "retro", "skate", "gaming", "book", "truecrime",
  "pizza", "napping", "gym", "hiking", "art", "baking", "astrology",
  "halloween", "christmas", "ramen", "camping", "tarot", "music"
];
const FRAMEWORKS = [
  `The "Reframe" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')`,
  `The "Confessional" (e.g., 'In my defense, I was left unsupervised')`,
  `The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward')`,
  `The "Bold Label" (e.g., 'Professional Overthinker')`
];

content = content.replace(/\{ arc: "(.*?)", idty: "(.*?)" \}/g, (match, arc, idty) => {
  // Simple heuristic mapping
  let themes = [];
  if (arc.includes('Tired') || arc.includes('Insomniac') || arc.includes('Burnout') || arc.includes('Overthinker')) {
    themes = ['coffee', 'napping', 'truecrime'];
  } else if (arc.includes('Chaos') || arc.includes('Feral') || arc.includes('Menace') || arc.includes('Screaming')) {
    themes = ['skate', 'pizza', 'gaming', 'halloween'];
  } else if (arc.includes('Zen') || arc.includes('Cozy') || arc.includes('Plant') || arc.includes('Hermit')) {
    themes = ['plant', 'book', 'baking', 'ramen', 'tarot'];
  } else if (arc.includes('Goth') || arc.includes('Spooky') || arc.includes('Vampire')) {
    themes = ['halloween', 'tarot', 'truecrime', 'astrology'];
  } else if (arc.includes('Athlete') || arc.includes('Survivor') || arc.includes('Commuter')) {
    themes = ['gym', 'hiking', 'camping'];
  } else {
    // Default fallback random subset
    themes = ['coffee', 'music', 'retro'];
  }

  let frameworks = [];
  if (arc.includes('Introvert') || arc.includes('Confessional') || arc.includes('Overthinker')) {
    frameworks = [FRAMEWORKS[1], FRAMEWORKS[3]]; // Confessional, Bold Label
  } else if (arc.includes('Chaos') || arc.includes('Feral') || arc.includes('Menace')) {
    frameworks = [FRAMEWORKS[0], FRAMEWORKS[2]]; // Reframe, Rule of 3
  } else if (arc.includes('Zen') || arc.includes('Pessimist') || arc.includes('Observer')) {
    frameworks = [FRAMEWORKS[2], FRAMEWORKS[3]]; // Rule of 3, Bold Label
  } else {
    frameworks = [FRAMEWORKS[0], FRAMEWORKS[1]]; // Reframe, Confessional
  }

  return `{ arc: "${arc}", idty: "${idty}", themes: ${JSON.stringify(themes)}, frameworks: ${JSON.stringify(frameworks)} }`;
});

fs.writeFileSync(dataFilePath, content);
console.log('Successfully mapped themes and frameworks to archetypes, and explicitly injected Buyer Identity.');
