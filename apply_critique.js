const fs = require('fs');
const path = require('path');

// --- 1. Update data.ts ---
const dataPath = path.join(__dirname, 'src/lib/data.ts');
let dataContent = fs.readFileSync(dataPath, 'utf8');

// Replace SEO Block
const oldSeoRegex = /\[SEO METADATA & UPLOAD INSTRUCTIONS\][\s\S]*?Recommended Garment Color: \[.*?\]/g;
const newSeoBlock = `[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1-3 word highly specific phrase representing the core search intent (e.g., 'tired possum', 'introvert raccoon', 'capybara meme'). Do not restrict to 1 word if a 2-3 word phrase is more accurate.]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT tags. Include a mix of: 1. Purchase Intent ('anxious friend gift', 'raccoon lover gift'). 2. Identity Claims ('socially exhausted', 'professional overthinker'). 3. Aesthetic Searches ('cottagecore animal', 'vintage possum'). NO single-word redundancies.]
Description: [Write a 2-3 sentence description written IN THE TONE of the Buyer Identity. This must do conversion work, not just SEO. Make the buyer feel seen ("Because sometimes you're just a chaotic neutral energy trying to survive Tuesday..."). Weave the Main Tag naturally into the text.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`;

dataContent = dataContent.replace(oldSeoRegex, newSeoBlock);

// Replace Background Instruction Block
const oldBgRegex = /- \*\*BACKGROUND INSTRUCTION:\*\* Instruct: "Use a solid, pure white background\. If the main character is mostly white, use a solid dark or bright green background instead\. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal\."/g;
const newBgInstruction = `- **BACKGROUND INSTRUCTION:** Do not blindly force a white background. If the selected [VISUAL AESTHETIC] relies on background context (like Frutiger Aero or Whimsigoth), generate a simple, atmospheric, complementary background that enhances the subject without clutter. If it's a Mascot or Badge design, use a clean isolated background.`;

dataContent = dataContent.replace(oldBgRegex, newBgInstruction);

// Replace hardcoded white background in Image Prompt
const oldImageBgRegex = /Solid pure white background \(or solid high-contrast green if the character is white\)\. Zero scenery, zero shadows, clean cut-out ready\./g;
const newImageBgInstruction = `[BACKGROUND CONTEXT OR ISOLATION BASED ON AESTHETIC].`;

dataContent = dataContent.replace(oldImageBgRegex, newImageBgInstruction);

fs.writeFileSync(dataPath, dataContent);
console.log('Successfully updated data.ts with SEO and Background critique!');

// --- 2. Update page.tsx ---
const pagePath = path.join(__dirname, 'src/app/page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');

// Replace standard random theme selection with Organized Mutation logic (30% global, 70% archetype)
const oldThemeLogic = /setSelectedTheme\(randArc\.themes\[Math\.floor\(Math\.random\(\) \* randArc\.themes\.length\)\]\);/g;
const newThemeLogic = `// 30% chance of global mutation, 70% archetype coherence
    const isMutation = Math.random() < 0.3;
    const selectedThemeId = isMutation 
      ? THEMES[Math.floor(Math.random() * THEMES.length)].id 
      : randArc.themes[Math.floor(Math.random() * randArc.themes.length)];
    setSelectedTheme(selectedThemeId);`;

pageContent = pageContent.replace(oldThemeLogic, newThemeLogic);

// Replace it inside handleCopyBatch too
const oldBatchThemeLogic = /const randTheme = randArc\.themes\[Math\.floor\(Math\.random\(\) \* randArc\.themes\.length\)\];/g;
const newBatchThemeLogic = `const isMutation = Math.random() < 0.3;
      const randTheme = isMutation 
        ? THEMES[Math.floor(Math.random() * THEMES.length)].id 
        : randArc.themes[Math.floor(Math.random() * randArc.themes.length)];`;

pageContent = pageContent.replace(oldBatchThemeLogic, newBatchThemeLogic);

fs.writeFileSync(pagePath, pageContent);
console.log('Successfully added Organized Mutation to page.tsx!');
