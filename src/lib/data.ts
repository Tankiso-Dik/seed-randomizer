export interface AnimalConfig {
  archetype: string;
  buyerIdentity: string;
  id: string;
  label: string;
  colors: string[];
  angles: string[];
  aesthetics: string[];
  compositions: string[];
  promptTemplate: string;
}

export const ANIMALS_DATA: Record<string, AnimalConfig> = {
  pig: {
    id: "pig",
    label: "Pig",
    archetype: "The Indulgent Hedonist",
    buyerIdentity: "Someone who unapologetically loves snacking, relaxing in the mud, and refusing to do any actual work.",
    colors: ["Pink","Brown","Spotted"],
    angles: ["Lazy & unbothered","Always hungry","Muddy but happy"],
    aesthetics: ["Rustic vintage badge","Cottagecore sticker","Bold clean silhouette","Vintage diner mascot"],
    compositions: ["Circular badge","Bottom-heavy mascot","Small chest emblem"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Pig
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on themes of indulgence, mud, relaxation, or snack obsession. The phrase should be about doing nothing or demanding treats.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  crow: {
    id: "crow",
    label: "Crow",
    archetype: "The Goth Scholar",
    buyerIdentity: "Someone who loves shiny things, true crime, spooky academia, and judging people from a distance.",
    colors: ["Black","Iridescent Black"],
    angles: ["Spooky gothic","Feral academia","Shiny object enthusiast","Ominous watcher"],
    aesthetics: ["Old school tattoo flash","Woodblock print","Simplified engraved","Tarot card illustration"],
    compositions: ["Vertical stacked","Circular badge","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Crow
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Emphasize dark academia, gothic vibes, or a chaotic obsession with shiny garbage. The phrase should be slightly menacing, scholarly, or unhinged.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  possum: {
    id: "possum",
    label: "Possum",
    archetype: "The Tired One",
    buyerIdentity: "Someone who is overstimulated, exhausted, surviving on caffeine, and uses 'I\'m fine' as their entire personality.",
    colors: ["Gray and White","Grungy Gray"],
    angles: ["Tired millennial humor","Nocturnal survivor","Screaming internally","Feral lifestyle"],
    aesthetics: ["Worn screenprint graphic","Distressed mascot design","Retro vintage graphic tee","Grunge typography poster"],
    compositions: ["Oversized face crop","Diagonal motion","Bottom-heavy mascot"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Possum
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The mascot must look exhausted, anxious, or feral. The phrase should be deeply self-deprecating, about surviving purely on spite, or nocturnal habits.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  raccoon: {
    id: "raccoon",
    label: "Raccoon",
    archetype: "The Chaotic Trash Panda",
    buyerIdentity: "Someone with scrappy, unhinged gremlin energy who thrives in late-night chaos and proudly makes terrible decisions.",
    colors: ["Gray with Black Mask","Dusty Brownish-Gray"],
    angles: ["Trash goblin","Chaotic little gremlin energy","Sad snack era","Sneaky"],
    aesthetics: ["Retro vintage graphic tee","Rustic vintage badge emblem","Bold clean silhouette","Grunge typography poster"],
    compositions: ["Circular badge","Small chest emblem","Wide retro banner"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Raccoon
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Lean heavily into the 'trash panda' identity, sneaking around, or eating garbage. The phrase should be about chaos, stealing, or eating terrible food.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  capybara: {
    id: "capybara",
    label: "Capybara",
    archetype: "The Zen Master",
    buyerIdentity: "Someone who is aggressively unbothered, chronically chill, and refuses to let modern stress affect their inner peace.",
    colors: ["Warm Brown","Tan"],
    angles: ["Unbothered","Cozy lifestyle","Chill mediator","Zen master"],
    aesthetics: ["National park poster style","Folk-art influenced","Woodblock print aesthetic","70s retro sunset graphic"],
    compositions: ["Circular badge","Wide retro banner","Vertical stacked"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Capybara
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The vibe is absolute peace, zen, and being completely unbothered by the world's chaos. The phrase should reflect deep chillness or taking a nap.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  axolotl: {
    id: "axolotl",
    label: "Axolotl",
    archetype: "The Sweet & Empty-Headed",
    buyerIdentity: "Someone who is overwhelmingly cute but has absolutely zero thoughts going on behind their eyes.",
    colors: ["Pink","Melanoid (Black)","Golden"],
    angles: ["Blank stare","Smiling but empty","Watery doom","Cute but clueless"],
    aesthetics: ["Bold clean silhouette","Retro vintage graphic tee","Folk-art influenced sticker","Kawaii pastel vector"],
    compositions: ["Small chest emblem","Circular badge","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Axolotl
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on its permanent smile contrasting with absolute emptiness behind the eyes. The phrase should be deceptively cute but mildly chaotic or completely oblivious.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  frog: {
    id: "frog",
    label: "Frog",
    archetype: "The Blissfully Detached",
    buyerIdentity: "Someone who wants to retreat to the woods, avoid society, and live a derpy, simple, cottagecore life.",
    colors: ["Bright Green","Poison Dart Pattern","Muddy Brown"],
    angles: ["Pond life","Unblinking judge","Cottagecore pet aesthetic","Grumpy toad"],
    aesthetics: ["Cottagecore sticker","Woodblock print","Rustic vintage badge","Kawaii pastel vector"],
    compositions: ["Vertical stacked","Small chest emblem","Crest / shield structure"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Frog
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
It can be cottagecore and sweet or a grumpy, unblinking judge of humanity. The phrase should relate to pond life, mushrooms, sitting, or silent judgment.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  bat: {
    id: "bat",
    label: "Bat",
    archetype: "The Spooky Introvert",
    buyerIdentity: "Someone who hates daylight, avoids social interaction, and considers Halloween to be a year-round lifestyle.",
    colors: ["Dark Brown","Black"],
    angles: ["Upside-down view","Spooky gothic pet vibes","Night shift","Fluffy darkness"],
    aesthetics: ["Old school tattoo flash","Simplified engraved","Distressed mascot design","Tarot card illustration"],
    compositions: ["Diagonal motion","Crest / shield structure","Circular badge"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Bat
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on nocturnal energy, being upside down, or gothic vibes but cute. The phrase should be about avoiding the sun, night shifts, or spooky cuteness.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  moth: {
    id: "moth",
    label: "Moth",
    archetype: "The Feral Light-Seeker",
    buyerIdentity: "Someone drawn to shiny, destructive things, embracing weird alt-fashion, and constantly distracted.",
    colors: ["Dusty Brown","Pale Luna Green","White"],
    angles: ["Lamp obsessed","Fluffy but erratic","Night flyer","Fuzzy cryptid"],
    aesthetics: ["Woodblock print aesthetic","Folk-art influenced","Worn screenprint graphic","Tarot card illustration"],
    compositions: ["Wide retro banner","Circular badge","Small chest emblem"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Moth
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The theme revolves around a chaotic attraction to lights, being fuzzy, or cryptid energy. The phrase should be intensely focused on lamps, dust, or frantic flight.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  pigeon: {
    id: "pigeon",
    label: "Pigeon",
    archetype: "The Urban Survivor",
    buyerIdentity: "Someone who feels overlooked, slightly trashy, but highly resilient and just trying to secure the bread.",
    colors: ["City Gray","White","Iridescent Neck"],
    angles: ["Bread crumb collector","Urban survivor","Cooing menace","Oblivious walker"],
    aesthetics: ["Retro vintage graphic tee","Worn screenprint graphic","Distressed mascot design","70s retro sunset graphic"],
    compositions: ["Bottom-heavy mascot","Vertical stacked","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Pigeon
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Emphasize survival in the concrete jungle, aggressively seeking bread, or general clumsiness. The phrase should be about walking instead of flying or begging for crumbs.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  rabbit: {
    id: "rabbit",
    label: "Rabbit",
    archetype: "The Anxious Over-Thinker",
    buyerIdentity: "Someone who is highly caffeinated, perpetually nervous, easily startled, and trying their best.",
    colors: ["White","Brown","Spotted"],
    angles: ["Nervous twitch","Fast but tired","Fluffy anger","Always late"],
    aesthetics: ["Vintage western emblem","Rustic vintage badge","Old school tattoo flash","Psychedelic retro cartoon"],
    compositions: ["Circular badge","Diagonal motion","Crest / shield structure"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Rabbit
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on high anxiety, excessive speed followed by exhaustion, or being surprisingly angry despite being fluffy. The phrase should be fast, panicked, or violently cozy.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  guinea_pig: {
    id: "guinea_pig",
    label: "Guinea Pig",
    archetype: "The Dramatic Potato",
    buyerIdentity: "Someone who demands immediate attention, screams when hungry, and prefers staying home in their cozy corner.",
    colors: ["Calico","Brown","White"],
    angles: ["Wheeking for snacks","Round potato","Constant panic","Staring blankly"],
    aesthetics: ["Bold clean silhouette art","Folk-art influenced sticker","Simplified engraved mascot","Kawaii pastel vector"],
    compositions: ["Small chest emblem","Bottom-heavy mascot","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Guinea Pig
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
It should look like a literal potato with eyes. The theme is constant panic, demanding vegetables, or absolute lack of thoughts. The phrase should be loud and snack-motivated.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  goat: {
    id: "goat",
    label: "Goat",
    archetype: "The Screaming Menace",
    buyerIdentity: "Someone with unbridled chaotic energy who yells at inconveniences and climbs over obstacles out of pure stubbornness.",
    colors: ["White","Black","Brown and White"],
    angles: ["Headbutt enthusiast","Screaming","Will eat garbage","Mountain chaos"],
    aesthetics: ["Rustic vintage badge emblem","National park poster style","Woodblock print aesthetic","Heavy metal band logo style"],
    compositions: ["Crest / shield structure","Circular badge","Vertical stacked"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Goat
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The energy is pure unadulterated chaos, screaming at nothing, and eating inedible objects. The phrase should be loud, stubborn, or mildly aggressive.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  gecko: {
    id: "gecko",
    label: "Gecko",
    archetype: "The Derpy Observer",
    buyerIdentity: "Someone who is slightly awkward, stares blankly at situations, and clings to their comfort zone.",
    colors: ["Bright Green","Leopard Spotted","Crested Brown"],
    angles: ["Sticky fingers","Wall lurker","Blep","Brain empty"],
    aesthetics: ["Retro vintage graphic tee","Bold clean silhouette","Folk-art influenced","70s retro sunset graphic"],
    compositions: ["Diagonal motion","Wide retro banner","Small chest emblem"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Gecko
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
It should have a goofy smile or its tongue out (blep). The phrase should be about sticking to things, dropping tails, or having zero thoughts.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  vulture: {
    id: "vulture",
    label: "Vulture",
    archetype: "The Ominous Loner",
    buyerIdentity: "Someone with a morbid sense of humor who patiently waits for things to fall apart while drinking their coffee.",
    colors: ["Black with Red Head","Dusty Brown"],
    angles: ["Waiting patiently","Desert gothic","Sunbathing","Macabre but polite"],
    aesthetics: ["Vintage western emblem","Old school tattoo flash","National park poster style","Traditional American tattoo"],
    compositions: ["Crest / shield structure","Circular badge","Vertical stacked"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Vulture
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Emphasize a polite but morbid patience, desert vibes, or sunbathing. The phrase should be dark, patient, or lightly dealing with mortality in a funny way.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  shrimp: {
    id: "shrimp",
    label: "Shrimp",
    archetype: "The Post-Ironic Weirdo",
    buyerIdentity: "Someone deeply immersed in absurdist Gen Z internet humor who uses nonsense memes to cope with reality.",
    colors: ["Pink","Translucent","Cherry Red"],
    angles: ["Deep sea weirdo","Small and angry","Krill issue","Posture check"],
    aesthetics: ["Woodblock print aesthetic","Worn screenprint graphic","Simplified engraved mascot","Vintage seafood tin label"],
    compositions: ["Oversized face crop","Diagonal motion","Bottom-heavy mascot"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Shrimp
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
Focus on terrible posture, being tiny but enraged, or deep ocean absurdity. The phrase should be a pun (like krill issue), or about being small and stressed.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  goose: {
    id: "goose",
    label: "Goose",
    archetype: "The Agent of Chaos",
    buyerIdentity: "Someone who wakes up choosing violence, loves causing minor inconveniences, and thrives on spite.",
    colors: ["White","Canadian Goose (Brown/Black)"],
    angles: ["Pure chaotic menace","Holding a weapon","Peace was never an option","Honking loudly"],
    aesthetics: ["Retro vintage graphic tee","Bold clean silhouette","Grunge typography poster","Woodblock print aesthetic"],
    compositions: ["Circular badge","Bottom-heavy mascot","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Goose
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The mascot is an aggressive goose. The energy is pure chaotic evil. The phrase should be mildly threatening or about causing problems on purpose.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  sloth: {
    id: "sloth",
    label: "Sloth",
    archetype: "The Proud Procrastinator",
    buyerIdentity: "Someone whose ultimate goal is doing absolutely nothing and who actively refuses to participate in hustle culture.",
    colors: ["Brown","Mossy Green-Brown"],
    angles: ["Zero energy","Takes 3 business days to reply","Napping expert","Moving in slow motion"],
    aesthetics: ["70s retro sunset graphic","Rustic vintage badge","Cottagecore sticker","Flat screenprint vector"],
    compositions: ["Diagonal motion","Circular badge","Small chest emblem"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Sloth
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The mascot is a sloth. Emphasize moving impossibly slow or putting in zero effort. The phrase should be about canceling plans, sleeping, or chronic laziness.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  red_panda: {
    id: "red_panda",
    label: "Red Panda",
    archetype: "The Clumsy Introvert",
    buyerIdentity: "Someone trying to look intimidating but actually just soft, easily overwhelmed, and prone to silly mistakes.",
    colors: ["Red/Orange with White Markings"],
    angles: ["Easily startled","Hands up in surrender","Too fluffy to function","Stressed but cute"],
    aesthetics: ["Kawaii pastel vector","Folk-art influenced sticker","Bold clean silhouette","Retro vintage graphic tee"],
    compositions: ["Small chest emblem","Vertical stacked","Oversized face crop"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Red Panda
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The mascot is a red panda standing on its hind legs with hands up. The phrase should be about surrendering to stress, being startled, or needing a break.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
  otter: {
    id: "otter",
    label: "Otter",
    archetype: "The Playful Companion",
    buyerIdentity: "Someone who just wants to hold hands, float through life, and prioritize snacks and emotional support.",
    colors: ["Brown","Sleek Dark Brown"],
    angles: ["Holding a rock","Smooth operator","Floating completely relaxed","Water puppy"],
    aesthetics: ["National park poster style","Woodblock print aesthetic","Retro vintage graphic tee","Kawaii pastel vector"],
    compositions: ["Circular badge","Wide retro banner","Diagonal motion"],
    promptTemplate: `You are an expert TeePublic t-shirt design concept generator and SEO copywriter. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Otter
- Animal Archetype: [ARCHETYPE]
- Buyer Identity: [BUYER_IDENTITY]
- Hobby/Theme/Props: [THEME]
- Color/Markings: [COLOR]
- Emotional Angle: [ANGLE]
- Humor/Phrase Style: [HUMOR_STYLE]
- Visual Aesthetic: [AESTHETIC]
- Render Style: [RENDER_STYLE_LABEL]
- Composition: [COMPOSITION]

ANIMAL VIBE:
The mascot is an otter floating on its back or holding a prized rock. The phrase should involve water puns, holding hands, or deep relaxation.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected "[HUMOR_STYLE]" (2-8 words).
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Purely transparent background with no background elements or colors. Ensure a white outer stroke for dark apparel contrast. No 3D, no glossy AI rendering, highly graphic.

[SEO METADATA]
Title: [Catchy Title]
Main Tag: [The single most accurate tag for the intersection (2-4 words MAX). Must be actual buyer search phrasing, NOT poetic or descriptive (e.g. 'Coffee Possum' or 'Skater Capybara')]
Sub-Tags: [9 highly searched related tags]
Description: [Short 2-sentence description]`
  },
};

export const THEMES = [
  {
    "id": "none",
    "label": "None (Just the Animal)"
  },
  {
    "id": "coffee",
    "label": "Iced Coffee / Caffeine Addiction"
  },
  {
    "id": "reading",
    "label": "Reading / Book Hoarder"
  },
  {
    "id": "gaming",
    "label": "Retro Gaming / Controller"
  },
  {
    "id": "skate",
    "label": "Skateboarding / 90s Skater"
  },
  {
    "id": "plants",
    "label": "Houseplants / Gardening"
  },
  {
    "id": "halloween",
    "label": "Halloween / Spooky Season (Pumpkins, Ghosts)"
  },
  {
    "id": "christmas",
    "label": "Festive Holiday / Ugly Sweater Vibes"
  },
  {
    "id": "ramen",
    "label": "Eating Japanese Ramen / Noodles"
  },
  {
    "id": "camping",
    "label": "Camping / The Great Outdoors"
  },
  {
    "id": "tarot",
    "label": "Witchy / Tarot Cards / Crystals"
  },
  {
    "id": "music",
    "label": "Listening to Music / Headphones"
  }
];

export const HUMOR_STYLES = [
  {
    "id": "sarcastic",
    "label": "Sarcastic & Self-Deprecating"
  },
  {
    "id": "aggressive",
    "label": "Aggressively Positive / Motivational"
  },
  {
    "id": "punny",
    "label": "Pun-Heavy / Dad Joke"
  },
  {
    "id": "feral",
    "label": "Feral / Gen Z Absurdism"
  },
  {
    "id": "ominous",
    "label": "Ominous / Mildly Threatening"
  },
  {
    "id": "introvert",
    "label": "Anti-Social / Introvert Pride"
  }
];

export const RENDER_STYLES = [
  { id: "flat", label: "Flat Screenprint Vector", instruction: "A clean, flat screenprint-style vector graphic" },
  { id: "distressed", label: "Vintage Distressed Wash", instruction: "A vintage, distressed, heavily faded retro t-shirt graphic with cracked texture" },
  { id: "sticker", label: "Die-Cut Vinyl Sticker", instruction: "A punchy, die-cut vinyl sticker graphic surrounded by a thick solid white border" },
  { id: "lineart", label: "Bold Line-Art Engraving", instruction: "A highly detailed, high-contrast line-art engraving graphic with woodblock hatching" }
];
