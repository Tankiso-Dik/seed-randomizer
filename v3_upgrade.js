const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// 1. Prompt text replacements to remove "t-shirt" and update SEO tag rules
content = content.replaceAll(
  "expert TeePublic t-shirt design concept generator",
  "expert TeePublic apparel graphic concept generator"
);
content = content.replaceAll(
  "generating a t-shirt concept",
  "generating an apparel graphic concept"
);
content = content.replaceAll(
  "Designed by a t-shirt printer",
  "Designed by an expert illustrator"
);
content = content.replaceAll(
  "--no blurry, --no watermark",
  "--no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark"
);
content = content.replaceAll(
  "1 single dominant 2-5 word keyword phrase",
  "1 single dominant 1-2 word keyword phrase"
);

// 2. Update compositions globally
content = content.replace(
  /compositions:\s*\[.*?\]/g,
  `compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"]`
);

// 3. Update aesthetics globally (append the new ones to the existing arrays)
const newAesthetics = `,"Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"`;
content = content.replace(/aesthetics:\s*\[(.*?)\]/g, (match, p1) => {
  return `aesthetics: [${p1}${newAesthetics}]`;
});

// 4. Inject new animals into ANIMALS_DATA
const newAnimalsStr = `,
  llama: {
    id: "llama",
    label: "Llama / Alpaca",
    archetypes: [
      { arc: "The Dramatic Diva", idty: "Someone who thrives on gossip and slightly overreacts to everything", themes: ["coffee","music","retro"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')", "The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Spitfire", idty: "Someone who has zero patience and will absolutely bite back", themes: ["halloween","skate","retro"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] },
      { arc: "The Cottagecore Dreamer", idty: "Someone who just wants to knit sweaters and ignore modern society", themes: ["plants","baking","tarot"], frameworks: ["The \\"Rule of Three Subversion\\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Fluffy White", "Brown", "Pastel Rainbow"],
    angles: ["Spitting mad", "Majestic but confused", "Judging you"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Llama/Alpaca
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of drama, spitting, majestic fluff, or extreme judgment.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  fox: {
    id: "fox",
    label: "Fox",
    archetypes: [
      { arc: "The Cunning Instigator", idty: "Someone who loves to stir the pot and watch the chaos unfold", themes: ["coffee","skate","gaming"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Forest Spirit", idty: "A mystical introvert who belongs in a fairy tale", themes: ["tarot","plants","halloween"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Exhausted Trickster", idty: "Someone whose brain runs too fast and is now permanently tired", themes: ["coffee","reading","music"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] }
    ],
    colors: ["Red", "Arctic White", "Silver"],
    angles: ["Mischievous", "Sleepy", "Mystical"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Fox
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of mischief, woodland magic, cleverness, or being hyperactive.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  turtle: {
    id: "turtle",
    label: "Turtle",
    archetypes: [
      { arc: "The Slow Processor", idty: "Someone who needs 3 business days to reply to a text", themes: ["gaming","napping","coffee"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] },
      { arc: "The Ancient Introvert", idty: "An old soul who carries their house with them so they never have to socialize", themes: ["plants","reading","music"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Stubborn Rock", idty: "Someone entirely unbothered by the chaos around them", themes: ["skate","camping","tarot"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] }
    ],
    colors: ["Green", "Galactic Purple", "Neon Radioactive"],
    angles: ["Hiding in shell", "Slow and steady", "Unbothered"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Turtle
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of being slow, hiding, ancient wisdom, or refusing to participate in society.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  hippo: {
    id: "hippo",
    label: "Pygmy Hippo (Moo Deng)",
    archetypes: [
      { arc: "The Chaotic Toddler", idty: "Someone who operates purely on emotion, screaming, and water", themes: ["gaming","coffee","music"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Biting Menace", idty: "Small, cute, but will absolutely cause problems on purpose", themes: ["halloween","skate","retro"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] },
      { arc: "The Slippery Introvert", idty: "Someone who slides away from responsibilities and taking baths", themes: ["plants","napping","tarot"], frameworks: ["The \\"Rule of Three Subversion\\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Wet Pinkish-Grey", "Glossy Black", "Muted Purple"],
    angles: ["Screaming with mouth wide open", "Biting something", "Looking fiercely moist"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Pygmy Hippo
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of being dramatically moist, screaming, biting, or internet meme stardom.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  shoebill: {
    id: "shoebill",
    label: "Shoebill Stork",
    archetypes: [
      { arc: "The Ominous Stalker", idty: "Someone who just stares deeply into your soul instead of making small talk", themes: ["coffee","reading","music"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Menacing Introvert", idty: "A giant bird that looks terrifying but is actually just socially awkward", themes: ["tarot","gaming","napping"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Unbothered Ancient", idty: "A dinosaur-like entity that refuses to adapt to modern stress", themes: ["plants","camping","retro"], frameworks: ["The \\"Rule of Three Subversion\\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Ash Grey", "Dark Charcoal", "Storm Blue"],
    angles: ["Staring intensely forward", "Looming ominously", "Looking incredibly tall and confused"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Shoebill Stork
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of intense staring, intimidating presence, prehistoric energy, and awkward silence.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  narwhal: {
    id: "narwhal",
    label: "Narwhal",
    archetypes: [
      { arc: "The Deep Sea Introvert", idty: "Someone who prefers the dark, cold depths of the ocean to human interaction", themes: ["gaming","coffee","music"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Y2K Sea Unicorn", idty: "A majestic but slightly awkward creature that loves internet nostalgia", themes: ["retro","tarot","reading"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Pointy Menace", idty: "Cute but fully armed and ready to poke you if you get too close", themes: ["halloween","skate","camping"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] }
    ],
    colors: ["Ocean Blue", "Bioluminescent Purple", "Ice White"],
    angles: ["Swimming away from responsibilities", "Looking majestic but confused", "Poking something with its tusk"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Narwhal
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of deep ocean isolation, being a real-life unicorn, pointing the tusk at problems, or deep-sea pressure.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  polar_bear: {
    id: "polar_bear",
    label: "Polar Bear 2026",
    archetypes: [
      { arc: "The Time Traveler", idty: "A bear from the future warning us about impending doom", themes: ["retro","gaming","coffee"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Creepypasta Mascot", idty: "Something cute that feels incredibly ominous and out of place", themes: ["halloween","tarot","music"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Glitch in the Matrix", idty: "An entity surviving purely on internet lore and anxiety", themes: ["reading","napping","skate"], frameworks: ["The \\"Rule of Three Subversion\\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Glitch White", "Neon Blue", "Static Grey"],
    angles: ["Staring blankly from 2026", "Looking displaced in time", "Ominously waving"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Polar Bear
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of time travel, internet creepypasta, the year 2026, ominous cuteness, and glitches.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  },
  wumpus: {
    id: "wumpus",
    label: "Wumpus (Discord)",
    archetypes: [
      { arc: "The Server Admin", idty: "Someone desperately trying to maintain order in a chaotic voice channel", themes: ["gaming","coffee","music"], frameworks: ["The \\"Confessional\\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Lurker", idty: "A cute entity that reads every message but never replies", themes: ["reading","napping","tarot"], frameworks: ["The \\"Bold Label\\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Extremely Online Hermit", idty: "Someone whose entire social life exists in dark mode", themes: ["retro","plants","skate"], frameworks: ["The \\"Reframe\\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')"] }
    ],
    colors: ["Blurple", "Dark Mode Grey", "Neon Green"],
    angles: ["Stressed at keyboard", "Sleeping in voice chat", "Peeking out from behind a screen"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front"],
    promptTemplate: \`You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Wumpus
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Phrase Framework: [FRAMEWORK]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of Discord servers, being perpetually online, gaming stress, dark mode, and cute awkwardness.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "A simple, complementary background that supports the overall theme (e.g., a soft bokeh, a minimal prop, or clean solid color fill). Ensure the main character is still the clear focal point. Do NOT force a purely empty or transparent background, as this stifles creative composition."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Simple, complementary environment that enhances the subject without clutter. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy Title that integrates the core joke/phrase, the Animal, and MUST include the exact Main Tag]
Main Tag: [1 single dominant 1-2 word keyword phrase representing natural search behavior (e.g., 'sarcastic cat'). This exactly matches the Redbubble UI requirement.]
Supporting Tags: [9 highly searched related tags that overlap with the Main Tag. Do not duplicate the Main Tag or use irrelevant tag-stuffing.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors for the user to set as the default on TeePublic/Redbubble (e.g., 'Heather Grey', 'Black', 'Soft Pink'). Ensure the color provides high contrast against the design.]\`
  }`;

content = content.replace(/\n};\n\nexport const THEMES/, `${newAnimalsStr}\n};\n\nexport const THEMES`);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully upgraded data.ts to V3!');
