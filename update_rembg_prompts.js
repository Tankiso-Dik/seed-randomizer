const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Update the BACKGROUND INSTRUCTION rule
const oldRule = `- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."`;
const newRule = `- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."`;

content = content.replaceAll(oldRule, newRule);

// Update the IMAGE PROMPT template segment
const oldImagePromptSegment = `Simple, complementary environment that enhances the subject without clutter.`;
const newImagePromptSegment = `Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready.`;

content = content.replaceAll(oldImagePromptSegment, newImagePromptSegment);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated background prompts for rembg optimization.');
