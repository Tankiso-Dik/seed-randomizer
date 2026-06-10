const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// 1. Update TYPOGRAPHY INTEGRATION
const oldTypo = "- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text \"STAY WEIRD\"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.\n";
const newTypo = "- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text \"STAY WEIRD\"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.\n";
content = content.replaceAll(oldTypo, newTypo);

// 2. Add advanced negative prompting to the image prompt template
// Currently it says: "No 3D, no glossy AI rendering."
const oldPromptEnd = "No 3D, no glossy AI rendering.";
const newPromptEnd = "No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures";
content = content.replaceAll(oldPromptEnd, newPromptEnd);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully added typography style guidance and advanced negative prompts to data.ts');
