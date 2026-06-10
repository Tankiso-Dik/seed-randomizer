export interface AnimalConfig {
  archetypes: { arc: string; idty: string }[];
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
    archetypes: [
      { arc: "The Indulgent Hedonist", idty: "Someone who unapologetically loves snacking, relaxing, and refusing to do work" },
      { arc: "The Cozy Glutton", idty: "Someone who views snacks as the only reliable form of emotional support" },
      { arc: "The Stubborn Homebody", idty: "Someone who will literally fight you if asked to leave the house" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  crow: {
    id: "crow",
    label: "Crow",
    archetypes: [
      { arc: "The Goth Scholar", idty: "Someone who loves shiny things, true crime, and judging from a distance" },
      { arc: "The Ominous Observer", idty: "Someone who collects secrets, watches drama unfold, and refuses to intervene" },
      { arc: "The Spooky Academic", idty: "Someone who drinks dark roast coffee while reading Wikipedia pages about unsolved mysteries" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  possum: {
    id: "possum",
    label: "Possum",
    archetypes: [
      { arc: "The Tired One", idty: "Someone who is overstimulated, exhausted, surviving on caffeine" },
      { arc: "The Feral Survivor", idty: "Someone running on 2 hours of sleep, spite, and garbage" },
      { arc: "The Anxious Introvert", idty: "Someone who screams internally but externally says 'I\'m fine'" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  raccoon: {
    id: "raccoon",
    label: "Raccoon",
    archetypes: [
      { arc: "The Chaotic Trash Panda", idty: "Someone with scrappy gremlin energy who thrives in late-night chaos" },
      { arc: "The Insomniac Schemer", idty: "Someone with 3 AM energy plotting overly complex solutions to simple problems" },
      { arc: "The Lovable Menace", idty: "Someone who makes terrible decisions but is too cute to stay mad at" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  capybara: {
    id: "capybara",
    label: "Capybara",
    archetypes: [
      { arc: "The Zen Master", idty: "Someone who is aggressively unbothered and chronically chill" },
      { arc: "The Emotional Support Friend", idty: "Someone who absorbs everyone\'s stress while remaining completely placid" },
      { arc: "The Unfazed Observer", idty: "Someone watching the world burn but just vibing in the hot spring" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  axolotl: {
    id: "axolotl",
    label: "Axolotl",
    archetypes: [
      { arc: "The Sweet & Empty-Headed", idty: "Someone overwhelmingly cute but with zero thoughts behind their eyes" },
      { arc: "The Oblivious Optimist", idty: "Someone smiling through the chaos because they literally don\'t understand it" },
      { arc: "The Pastel Derp", idty: "Someone with a soft aesthetic who is deeply confused by modern technology" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  frog: {
    id: "frog",
    label: "Frog",
    archetypes: [
      { arc: "The Blissfully Detached", idty: "Someone who wants to retreat to the woods and live a derpy cottagecore life" },
      { arc: "The Swamp Hermit", idty: "Someone grumpy, wet, and refusing to answer text messages" },
      { arc: "The Existential Hopper", idty: "Someone who stares blankly into space pondering the meaning of life while sitting on a lilypad" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  bat: {
    id: "bat",
    label: "Bat",
    archetypes: [
      { arc: "The Spooky Introvert", idty: "Someone who hates daylight and considers Halloween a year-round lifestyle" },
      { arc: "The Nocturnal Overthinker", idty: "Someone who is only wide awake and productive at 2 AM" },
      { arc: "The Socially Awkward Vampire", idty: "Someone who tries to be edgy but is actually just shy and likes fruit" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  moth: {
    id: "moth",
    label: "Moth",
    archetypes: [
      { arc: "The Feral Light-Seeker", idty: "Someone drawn to shiny destructive things and easily distracted" },
      { arc: "The Lamp Addict", idty: "Someone with an obsessive personality who fixates on one hyper-specific interest" },
      { arc: "The Dusty Goth", idty: "Someone who is an alternative fashion enthusiast but bumps into walls" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  pigeon: {
    id: "pigeon",
    label: "Pigeon",
    archetypes: [
      { arc: "The Urban Survivor", idty: "Someone who feels overlooked, slightly trashy, but highly resilient" },
      { arc: "The Hustle Culture Reject", idty: "Someone just trying to secure the bread without working a 9-to-5" },
      { arc: "The Chaotic Commuter", idty: "Someone angry, fast-walking, and fueled by discarded french fries" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  rabbit: {
    id: "rabbit",
    label: "Rabbit",
    archetypes: [
      { arc: "The Anxious Over-Thinker", idty: "Someone highly caffeinated, perpetually nervous, and easily startled" },
      { arc: "The Speedy Procrastinator", idty: "Someone who does everything at the last minute through sheer panic-induced adrenaline" },
      { arc: "The Jumpy Perfectionist", idty: "Someone stressed out because the vibes aren\'t exactly right" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  guinea_pig: {
    id: "guinea_pig",
    label: "Guinea Pig",
    archetypes: [
      { arc: "The Dramatic Potato", idty: "Someone who demands immediate attention and screams when hungry" },
      { arc: "The Anxious Loaf", idty: "Someone who looks calm but is actually vibrating with nervous energy" },
      { arc: "The Pampered Critic", idty: "Someone highly judgmental of the quality of their snacks and accommodations" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  goat: {
    id: "goat",
    label: "Goat",
    archetypes: [
      { arc: "The Screaming Menace", idty: "Someone with unbridled chaotic energy who yells at inconveniences" },
      { arc: "The Stubborn Climber", idty: "Someone who will go out of their way to make things difficult just to prove a point" },
      { arc: "The Feral Athlete", idty: "Someone who parkours off furniture, eats things they shouldn\'t, and has zero regrets" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  gecko: {
    id: "gecko",
    label: "Gecko",
    archetypes: [
      { arc: "The Derpy Observer", idty: "Someone slightly awkward who stares blankly and clings to comfort zones" },
      { arc: "The Clingy Introvert", idty: "Someone who wants to be invited but will just hang on the wall and not talk to anyone" },
      { arc: "The Smooth Brain", idty: "Someone licking their own eyeballs instead of dealing with adult responsibilities" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  vulture: {
    id: "vulture",
    label: "Vulture",
    archetypes: [
      { arc: "The Ominous Loner", idty: "Someone with morbid humor who waits for things to fall apart while drinking coffee" },
      { arc: "The Patient Pessimist", idty: "Someone who expects the worst and is quietly smug when it happens" },
      { arc: "The Desert Goth", idty: "Someone whose aesthetics are bone-dry and loves true crime and vintage westerns" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  shrimp: {
    id: "shrimp",
    label: "Shrimp",
    archetypes: [
      { arc: "The Post-Ironic Weirdo", idty: "Someone immersed in absurdist Gen Z humor to cope with reality" },
      { arc: "The Posture Disaster", idty: "Someone who sits like a curled-up shrimp at their desk for 10 hours a day" },
      { arc: "The Deep Sea Derp", idty: "Someone under immense pressure but still trying to look cute" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  goose: {
    id: "goose",
    label: "Goose",
    archetypes: [
      { arc: "The Agent of Chaos", idty: "Someone who wakes up choosing violence and thrives on spite" },
      { arc: "The Accidental Menace", idty: "Someone who causes problems but thinks they are helping" },
      { arc: "The Aggressive Defender", idty: "Someone who will honk loudly at minor inconveniences and societal norms" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  sloth: {
    id: "sloth",
    label: "Sloth",
    archetypes: [
      { arc: "The Proud Procrastinator", idty: "Someone whose ultimate goal is doing nothing and refuses hustle culture" },
      { arc: "The Slow-Motion Panicker", idty: "Someone freaking out internally but moving too slowly to do anything about it" },
      { arc: "The Cozy Nihilist", idty: "Someone who thinks the world is a mess so they might as well stay in bed" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  red_panda: {
    id: "red_panda",
    label: "Red Panda",
    archetypes: [
      { arc: "The Clumsy Introvert", idty: "Someone trying to look intimidating but actually just soft and easily overwhelmed" },
      { arc: "The Dramatic Reactor", idty: "Someone who throws their hands up at the slightest surprise or inconvenience" },
      { arc: "The Anxious Acrobat", idty: "Someone trying to juggle responsibilities but constantly dropping them" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
Description: [Short 2-sentence description]`
  },
  otter: {
    id: "otter",
    label: "Otter",
    archetypes: [
      { arc: "The Playful Companion", idty: "Someone who just wants to hold hands, float, and prioritize snacks" },
      { arc: "The Chaotic Swimmer", idty: "Someone with high energy, easily distracted, who drops their favorite rock" },
      { arc: "The Aquatic Sibling", idty: "Someone annoying but endearing who is constantly demanding playtime" }
    ],
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
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use one of these 4 viral meme frameworks: 1) The "Reframe" (e.g., 'I\'m not lazy, I\'m on energy-saving mode'), 2) The "Confessional" (e.g., 'In my defense, I was left unsupervised'), 3) The "Rule of Three Subversion" (e.g., 'I came. I saw. I made it awkward'), or 4) The "Bold Label" (e.g., 'Professional Overthinker').
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "purely transparent background with absolutely NO background colors, NO scenery, and NO background elements."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by a t-shirt printer, not rendered by a vector engine. Purely transparent background with no background elements or colors. No 3D, no glossy AI rendering. --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA]
Title: [Catchy Title that integrates the core joke/phrase + Animal + Aesthetic]
Search-Intent Clusters: [Generate 3 distinct 2-4 word search-intent clusters that a buyer would actually type (e.g., 'introvert cat shirt', 'antisocial cat humor', 'leave me alone cat aesthetic')]
Supporting Tags: [9 highly searched related tags that overlap with the clusters]
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
