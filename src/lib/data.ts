export interface AnimalConfig {
  archetypes: { arc: string; idty: string; themes: string[]; frameworks: string[] }[];
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
      { arc: "The Indulgent Hedonist", idty: "Someone who unapologetically loves snacking, relaxing, and refusing to do work", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Cozy Glutton", idty: "Someone who views snacks as the only reliable form of emotional support", themes: ["plant","book","baking","ramen","tarot"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Stubborn Homebody", idty: "Someone who will literally fight you if asked to leave the house", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Pink","Brown","Spotted"],
    angles: ["Lazy & unbothered","Always hungry","Muddy but happy"],
    aesthetics: ["Rustic vintage badge","Cottagecore sticker","Bold clean silhouette","Vintage diner mascot","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Pig
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
Focus on themes of indulgence, mud, relaxation, or snack obsession. The phrase should be about doing nothing or demanding treats.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  crow: {
    id: "crow",
    label: "Crow",
    archetypes: [
      { arc: "The Goth Scholar", idty: "Someone who loves shiny things, true crime, and judging from a distance", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Ominous Observer", idty: "Someone who collects secrets, watches drama unfold, and refuses to intervene", themes: ["coffee","music","retro"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Spooky Academic", idty: "Someone who drinks dark roast coffee while reading Wikipedia pages about unsolved mysteries", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Black","Iridescent Black"],
    angles: ["Spooky gothic","Feral academia","Shiny object enthusiast","Ominous watcher"],
    aesthetics: ["Old school tattoo flash","Woodblock print","Simplified engraved","Tarot card illustration","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Crow
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
Emphasize dark academia, gothic vibes, or a chaotic obsession with shiny garbage. The phrase should be slightly menacing, scholarly, or unhinged.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  possum: {
    id: "possum",
    label: "Possum",
    archetypes: [
      { arc: "The Tired One", idty: "Someone who is overstimulated, exhausted, surviving on caffeine", themes: ["coffee","napping","truecrime"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Feral Survivor", idty: "Someone running on 2 hours of sleep, spite, and garbage", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] },
      { arc: "The Anxious Introvert", idty: "Someone who screams internally but externally says 'I\'m fine'", themes: ["coffee","music","retro"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] }
    ],
    colors: ["Gray and White","Grungy Gray"],
    angles: ["Tired millennial humor","Nocturnal survivor","Screaming internally","Feral lifestyle"],
    aesthetics: ["Worn screenprint graphic","Distressed mascot design","Retro vintage graphic tee","Grunge typography poster","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Possum
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
The mascot must look exhausted, anxious, or feral. The phrase should be deeply self-deprecating, about surviving purely on spite, or nocturnal habits.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  raccoon: {
    id: "raccoon",
    label: "Raccoon",
    archetypes: [
      { arc: "The Chaotic Trash Panda", idty: "Someone with scrappy gremlin energy who thrives in late-night chaos", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Insomniac Schemer", idty: "Someone with 3 AM energy plotting overly complex solutions to simple problems", themes: ["coffee","napping","truecrime"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Lovable Menace", idty: "Someone who makes terrible decisions but is too cute to stay mad at", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Gray with Black Mask","Dusty Brownish-Gray"],
    angles: ["Trash goblin","Chaotic little gremlin energy","Sad snack era","Sneaky"],
    aesthetics: ["Retro vintage graphic tee","Rustic vintage badge emblem","Bold clean silhouette","Grunge typography poster","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Raccoon
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
Lean heavily into the 'trash panda' identity, sneaking around, or eating garbage. The phrase should be about chaos, stealing, or eating terrible food.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  capybara: {
    id: "capybara",
    label: "Capybara",
    archetypes: [
      { arc: "The Zen Master", idty: "Someone who is aggressively unbothered and chronically chill", themes: ["plant","book","baking","ramen","tarot"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Emotional Support Friend", idty: "Someone who absorbs everyone\'s stress while remaining completely placid", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Unfazed Observer", idty: "Someone watching the world burn but just vibing in the hot spring", themes: ["coffee","music","retro"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] }
    ],
    colors: ["Warm Brown","Tan"],
    angles: ["Unbothered","Cozy lifestyle","Chill mediator","Zen master"],
    aesthetics: ["National park poster style","Folk-art influenced","Woodblock print aesthetic","70s retro sunset graphic","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Capybara
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
The vibe is absolute peace, zen, and being completely unbothered by the world's chaos. The phrase should reflect deep chillness or taking a nap.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  axolotl: {
    id: "axolotl",
    label: "Axolotl",
    archetypes: [
      { arc: "The Sweet & Empty-Headed", idty: "Someone overwhelmingly cute but with zero thoughts behind their eyes", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Oblivious Optimist", idty: "Someone smiling through the chaos because they literally don\'t understand it", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Pastel Derp", idty: "Someone with a soft aesthetic who is deeply confused by modern technology", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Pink","Melanoid (Black)","Golden"],
    angles: ["Blank stare","Smiling but empty","Watery doom","Cute but clueless"],
    aesthetics: ["Bold clean silhouette","Retro vintage graphic tee","Folk-art influenced sticker","Kawaii pastel vector","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Axolotl
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
Focus on its permanent smile contrasting with absolute emptiness behind the eyes. The phrase should be deceptively cute but mildly chaotic or completely oblivious.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  frog: {
    id: "frog",
    label: "Frog",
    archetypes: [
      { arc: "The Blissfully Detached", idty: "Someone who wants to retreat to the woods and live a derpy cottagecore life", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Swamp Hermit", idty: "Someone grumpy, wet, and refusing to answer text messages", themes: ["plant","book","baking","ramen","tarot"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Existential Hopper", idty: "Someone who stares blankly into space pondering the meaning of life while sitting on a lilypad", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Bright Green","Poison Dart Pattern","Muddy Brown"],
    angles: ["Pond life","Unblinking judge","Cottagecore pet aesthetic","Grumpy toad"],
    aesthetics: ["Cottagecore sticker","Woodblock print","Rustic vintage badge","Kawaii pastel vector","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Frog
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
It can be cottagecore and sweet or a grumpy, unblinking judge of humanity. The phrase should relate to pond life, mushrooms, sitting, or silent judgment.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  bat: {
    id: "bat",
    label: "Bat",
    archetypes: [
      { arc: "The Spooky Introvert", idty: "Someone who hates daylight and considers Halloween a year-round lifestyle", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Nocturnal Overthinker", idty: "Someone who is only wide awake and productive at 2 AM", themes: ["coffee","napping","truecrime"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Socially Awkward Vampire", idty: "Someone who tries to be edgy but is actually just shy and likes fruit", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Dark Brown","Black"],
    angles: ["Upside-down view","Spooky gothic pet vibes","Night shift","Fluffy darkness"],
    aesthetics: ["Old school tattoo flash","Simplified engraved","Distressed mascot design","Tarot card illustration","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Bat
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
Focus on nocturnal energy, being upside down, or gothic vibes but cute. The phrase should be about avoiding the sun, night shifts, or spooky cuteness.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  moth: {
    id: "moth",
    label: "Moth",
    archetypes: [
      { arc: "The Feral Light-Seeker", idty: "Someone drawn to shiny destructive things and easily distracted", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] },
      { arc: "The Lamp Addict", idty: "Someone with an obsessive personality who fixates on one hyper-specific interest", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Dusty Goth", idty: "Someone who is an alternative fashion enthusiast but bumps into walls", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Dusty Brown","Pale Luna Green","White"],
    angles: ["Lamp obsessed","Fluffy but erratic","Night flyer","Fuzzy cryptid"],
    aesthetics: ["Woodblock print aesthetic","Folk-art influenced","Worn screenprint graphic","Tarot card illustration","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Moth
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
The theme revolves around a chaotic attraction to lights, being fuzzy, or cryptid energy. The phrase should be intensely focused on lamps, dust, or frantic flight.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  pigeon: {
    id: "pigeon",
    label: "Pigeon",
    archetypes: [
      { arc: "The Urban Survivor", idty: "Someone who feels overlooked, slightly trashy, but highly resilient", themes: ["gym","hiking","camping"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Hustle Culture Reject", idty: "Someone just trying to secure the bread without working a 9-to-5", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Chaotic Commuter", idty: "Someone angry, fast-walking, and fueled by discarded french fries", themes: ["gym","hiking","camping"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["City Gray","White","Iridescent Neck"],
    angles: ["Bread crumb collector","Urban survivor","Cooing menace","Oblivious walker"],
    aesthetics: ["Retro vintage graphic tee","Worn screenprint graphic","Distressed mascot design","70s retro sunset graphic","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Pigeon
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
Emphasize survival in the concrete jungle, aggressively seeking bread, or general clumsiness. The phrase should be about walking instead of flying or begging for crumbs.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  rabbit: {
    id: "rabbit",
    label: "Rabbit",
    archetypes: [
      { arc: "The Anxious Over-Thinker", idty: "Someone highly caffeinated, perpetually nervous, and easily startled", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Speedy Procrastinator", idty: "Someone who does everything at the last minute through sheer panic-induced adrenaline", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Jumpy Perfectionist", idty: "Someone stressed out because the vibes aren\'t exactly right", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["White","Brown","Spotted"],
    angles: ["Nervous twitch","Fast but tired","Fluffy anger","Always late"],
    aesthetics: ["Vintage western emblem","Rustic vintage badge","Old school tattoo flash","Psychedelic retro cartoon","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Rabbit
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
Focus on high anxiety, excessive speed followed by exhaustion, or being surprisingly angry despite being fluffy. The phrase should be fast, panicked, or violently cozy.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  guinea_pig: {
    id: "guinea_pig",
    label: "Guinea Pig",
    archetypes: [
      { arc: "The Dramatic Potato", idty: "Someone who demands immediate attention and screams when hungry", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Anxious Loaf", idty: "Someone who looks calm but is actually vibrating with nervous energy", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Pampered Critic", idty: "Someone highly judgmental of the quality of their snacks and accommodations", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Calico","Brown","White"],
    angles: ["Wheeking for snacks","Round potato","Constant panic","Staring blankly"],
    aesthetics: ["Bold clean silhouette art","Folk-art influenced sticker","Simplified engraved mascot","Kawaii pastel vector","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Guinea Pig
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
It should look like a literal potato with eyes. The theme is constant panic, demanding vegetables, or absolute lack of thoughts. The phrase should be loud and snack-motivated.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  goat: {
    id: "goat",
    label: "Goat",
    archetypes: [
      { arc: "The Screaming Menace", idty: "Someone with unbridled chaotic energy who yells at inconveniences", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] },
      { arc: "The Stubborn Climber", idty: "Someone who will go out of their way to make things difficult just to prove a point", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Feral Athlete", idty: "Someone who parkours off furniture, eats things they shouldn\'t, and has zero regrets", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["White","Black","Brown and White"],
    angles: ["Headbutt enthusiast","Screaming","Will eat garbage","Mountain chaos"],
    aesthetics: ["Rustic vintage badge emblem","National park poster style","Woodblock print aesthetic","Heavy metal band logo style","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Goat
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
The energy is pure unadulterated chaos, screaming at nothing, and eating inedible objects. The phrase should be loud, stubborn, or mildly aggressive.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  gecko: {
    id: "gecko",
    label: "Gecko",
    archetypes: [
      { arc: "The Derpy Observer", idty: "Someone slightly awkward who stares blankly and clings to comfort zones", themes: ["coffee","music","retro"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Clingy Introvert", idty: "Someone who wants to be invited but will just hang on the wall and not talk to anyone", themes: ["coffee","music","retro"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Smooth Brain", idty: "Someone licking their own eyeballs instead of dealing with adult responsibilities", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Bright Green","Leopard Spotted","Crested Brown"],
    angles: ["Sticky fingers","Wall lurker","Blep","Brain empty"],
    aesthetics: ["Retro vintage graphic tee","Bold clean silhouette","Folk-art influenced","70s retro sunset graphic","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Gecko
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
It should have a goofy smile or its tongue out (blep). The phrase should be about sticking to things, dropping tails, or having zero thoughts.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  vulture: {
    id: "vulture",
    label: "Vulture",
    archetypes: [
      { arc: "The Ominous Loner", idty: "Someone with morbid humor who waits for things to fall apart while drinking coffee", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Patient Pessimist", idty: "Someone who expects the worst and is quietly smug when it happens", themes: ["coffee","music","retro"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Desert Goth", idty: "Someone whose aesthetics are bone-dry and loves true crime and vintage westerns", themes: ["halloween","tarot","truecrime","astrology"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Black with Red Head","Dusty Brown"],
    angles: ["Waiting patiently","Desert gothic","Sunbathing","Macabre but polite"],
    aesthetics: ["Vintage western emblem","Old school tattoo flash","National park poster style","Traditional American tattoo","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Vulture
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
Emphasize a polite but morbid patience, desert vibes, or sunbathing. The phrase should be dark, patient, or lightly dealing with mortality in a funny way.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  shrimp: {
    id: "shrimp",
    label: "Shrimp",
    archetypes: [
      { arc: "The Post-Ironic Weirdo", idty: "Someone immersed in absurdist Gen Z humor to cope with reality", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Posture Disaster", idty: "Someone who sits like a curled-up shrimp at their desk for 10 hours a day", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Deep Sea Derp", idty: "Someone under immense pressure but still trying to look cute", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Pink","Translucent","Cherry Red"],
    angles: ["Deep sea weirdo","Small and angry","Krill issue","Posture check"],
    aesthetics: ["Woodblock print aesthetic","Worn screenprint graphic","Simplified engraved mascot","Vintage seafood tin label","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Shrimp
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
Focus on terrible posture, being tiny but enraged, or deep ocean absurdity. The phrase should be a pun (like krill issue), or about being small and stressed.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  goose: {
    id: "goose",
    label: "Goose",
    archetypes: [
      { arc: "The Agent of Chaos", idty: "Someone who wakes up choosing violence and thrives on spite", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] },
      { arc: "The Accidental Menace", idty: "Someone who causes problems but thinks they are helping", themes: ["skate","pizza","gaming","halloween"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] },
      { arc: "The Aggressive Defender", idty: "Someone who will honk loudly at minor inconveniences and societal norms", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["White","Canadian Goose (Brown/Black)"],
    angles: ["Pure chaotic menace","Holding a weapon","Peace was never an option","Honking loudly"],
    aesthetics: ["Retro vintage graphic tee","Bold clean silhouette","Grunge typography poster","Woodblock print aesthetic","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Goose
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
The mascot is an aggressive goose. The energy is pure chaotic evil. The phrase should be mildly threatening or about causing problems on purpose.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  sloth: {
    id: "sloth",
    label: "Sloth",
    archetypes: [
      { arc: "The Proud Procrastinator", idty: "Someone whose ultimate goal is doing nothing and refuses hustle culture", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Slow-Motion Panicker", idty: "Someone freaking out internally but moving too slowly to do anything about it", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Cozy Nihilist", idty: "Someone who thinks the world is a mess so they might as well stay in bed", themes: ["plant","book","baking","ramen","tarot"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Brown","Mossy Green-Brown"],
    angles: ["Zero energy","Takes 3 business days to reply","Napping expert","Moving in slow motion"],
    aesthetics: ["70s retro sunset graphic","Rustic vintage badge","Cottagecore sticker","Flat screenprint vector","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Sloth
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
The mascot is a sloth. Emphasize moving impossibly slow or putting in zero effort. The phrase should be about canceling plans, sleeping, or chronic laziness.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  red_panda: {
    id: "red_panda",
    label: "Red Panda",
    archetypes: [
      { arc: "The Clumsy Introvert", idty: "Someone trying to look intimidating but actually just soft and easily overwhelmed", themes: ["coffee","music","retro"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')","The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Dramatic Reactor", idty: "Someone who throws their hands up at the slightest surprise or inconvenience", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Anxious Acrobat", idty: "Someone trying to juggle responsibilities but constantly dropping them", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Red/Orange with White Markings"],
    angles: ["Easily startled","Hands up in surrender","Too fluffy to function","Stressed but cute"],
    aesthetics: ["Kawaii pastel vector","Folk-art influenced sticker","Bold clean silhouette","Retro vintage graphic tee","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Red Panda
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
The mascot is a red panda standing on its hind legs with hands up. The phrase should be about surrendering to stress, being startled, or needing a break.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  otter: {
    id: "otter",
    label: "Otter",
    archetypes: [
      { arc: "The Playful Companion", idty: "Someone who just wants to hold hands, float, and prioritize snacks", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Chaotic Swimmer", idty: "Someone with high energy, easily distracted, who drops their favorite rock", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Aquatic Sibling", idty: "Someone annoying but endearing who is constantly demanding playtime", themes: ["coffee","music","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\\'m not lazy, I\\'m on energy-saving mode')","The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] }
    ],
    colors: ["Brown","Sleek Dark Brown"],
    angles: ["Holding a rock","Smooth operator","Floating completely relaxed","Water puppy"],
    aesthetics: ["National park poster style","Woodblock print aesthetic","Retro vintage graphic tee","Kawaii pastel vector","Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

DESIGN PARAMETERS:
- Animal: Otter
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
The mascot is an otter floating on its back or holding a prized rock. The phrase should involve water puns, holding hands, or deep relaxation.

CRITICAL RULES:
- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.
- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.
- **DEEP THINKING REQUIRED:** Before generating the image prompt or SEO, you MUST execute a "search and research" thinking step. Analyze the target audience for this exact niche intersection, evaluate the psychology of the humor style, and aggressively research what specific SEO keywords buyers actually type into the TeePublic search bar.
- **TYPOGRAPHY INTEGRATION & STYLE:** You must provide the EXACT spelling of the phrase inside quotes in the image prompt (e.g. features the typography text "STAY WEIRD"). You MUST also explicitly describe the font style to match the aesthetic/humor (e.g., 'messy handwritten cursive', 'bold distressed 70s serif', or 'clean minimalist sans-serif'). The typography must be explicitly described as either wrapping around the character or stacked boldly underneath.
- **PHRASE TONE & MEME FRAMEWORK:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity. Strictly match the selected "[HUMOR_STYLE]" (2-8 words). You MUST structurally use this specific viral meme framework: [FRAMEWORK].
- **NO AI ARTIFACTS:** ABSOLUTELY NO glossy AI sheen, NO photorealism, and NO 3D rendering. The design must be mindful, graphic, and highly intentional.
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a vector engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  llama: {
    id: "llama",
    label: "Llama / Alpaca",
    archetypes: [
      { arc: "The Dramatic Diva", idty: "Someone who thrives on gossip and slightly overreacts to everything", themes: ["coffee","music","retro"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')", "The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Spitfire", idty: "Someone who has zero patience and will absolutely bite back", themes: ["halloween","skate","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] },
      { arc: "The Cottagecore Dreamer", idty: "Someone who just wants to knit sweaters and ignore modern society", themes: ["plants","baking","tarot"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Fluffy White", "Brown", "Pastel Rainbow"],
    angles: ["Spitting mad", "Majestic but confused", "Judging you"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  fox: {
    id: "fox",
    label: "Fox",
    archetypes: [
      { arc: "The Cunning Instigator", idty: "Someone who loves to stir the pot and watch the chaos unfold", themes: ["coffee","skate","gaming"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Forest Spirit", idty: "A mystical introvert who belongs in a fairy tale", themes: ["tarot","plants","halloween"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Exhausted Trickster", idty: "Someone whose brain runs too fast and is now permanently tired", themes: ["coffee","reading","music"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] }
    ],
    colors: ["Red", "Arctic White", "Silver"],
    angles: ["Mischievous", "Sleepy", "Mystical"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  turtle: {
    id: "turtle",
    label: "Turtle",
    archetypes: [
      { arc: "The Slow Processor", idty: "Someone who needs 3 business days to reply to a text", themes: ["gaming","napping","coffee"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] },
      { arc: "The Ancient Introvert", idty: "An old soul who carries their house with them so they never have to socialize", themes: ["plants","reading","music"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Stubborn Rock", idty: "Someone entirely unbothered by the chaos around them", themes: ["skate","camping","tarot"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] }
    ],
    colors: ["Green", "Galactic Purple", "Neon Radioactive"],
    angles: ["Hiding in shell", "Slow and steady", "Unbothered"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  hippo: {
    id: "hippo",
    label: "Pygmy Hippo (Moo Deng)",
    archetypes: [
      { arc: "The Chaotic Toddler", idty: "Someone who operates purely on emotion, screaming, and water", themes: ["gaming","coffee","music"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Biting Menace", idty: "Small, cute, but will absolutely cause problems on purpose", themes: ["halloween","skate","retro"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] },
      { arc: "The Slippery Introvert", idty: "Someone who slides away from responsibilities and taking baths", themes: ["plants","napping","tarot"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Wet Pinkish-Grey", "Glossy Black", "Muted Purple"],
    angles: ["Screaming with mouth wide open", "Biting something", "Looking fiercely moist"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  shoebill: {
    id: "shoebill",
    label: "Shoebill Stork",
    archetypes: [
      { arc: "The Ominous Stalker", idty: "Someone who just stares deeply into your soul instead of making small talk", themes: ["coffee","reading","music"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Menacing Introvert", idty: "A giant bird that looks terrifying but is actually just socially awkward", themes: ["tarot","gaming","napping"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Unbothered Ancient", idty: "A dinosaur-like entity that refuses to adapt to modern stress", themes: ["plants","camping","retro"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Ash Grey", "Dark Charcoal", "Storm Blue"],
    angles: ["Staring intensely forward", "Looming ominously", "Looking incredibly tall and confused"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  narwhal: {
    id: "narwhal",
    label: "Narwhal",
    archetypes: [
      { arc: "The Deep Sea Introvert", idty: "Someone who prefers the dark, cold depths of the ocean to human interaction", themes: ["gaming","coffee","music"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Y2K Sea Unicorn", idty: "A majestic but slightly awkward creature that loves internet nostalgia", themes: ["retro","tarot","reading"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Pointy Menace", idty: "Cute but fully armed and ready to poke you if you get too close", themes: ["halloween","skate","camping"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] }
    ],
    colors: ["Ocean Blue", "Bioluminescent Purple", "Ice White"],
    angles: ["Swimming away from responsibilities", "Looking majestic but confused", "Poking something with its tusk"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  polar_bear: {
    id: "polar_bear",
    label: "Polar Bear 2026",
    archetypes: [
      { arc: "The Time Traveler", idty: "A bear from the future warning us about impending doom", themes: ["retro","gaming","coffee"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Creepypasta Mascot", idty: "Something cute that feels incredibly ominous and out of place", themes: ["halloween","tarot","music"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Glitch in the Matrix", idty: "An entity surviving purely on internet lore and anxiety", themes: ["reading","napping","skate"], frameworks: ["The \"Rule of Three Subversion\" (e.g., 'I came. I saw. I made it awkward')"] }
    ],
    colors: ["Glitch White", "Neon Blue", "Static Grey"],
    angles: ["Staring blankly from 2026", "Looking displaced in time", "Ominously waving"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  },
  wumpus: {
    id: "wumpus",
    label: "Wumpus (Discord)",
    archetypes: [
      { arc: "The Server Admin", idty: "Someone desperately trying to maintain order in a chaotic voice channel", themes: ["gaming","coffee","music"], frameworks: ["The \"Confessional\" (e.g., 'In my defense, I was left unsupervised')"] },
      { arc: "The Lurker", idty: "A cute entity that reads every message but never replies", themes: ["reading","napping","tarot"], frameworks: ["The \"Bold Label\" (e.g., 'Professional Overthinker')"] },
      { arc: "The Extremely Online Hermit", idty: "Someone whose entire social life exists in dark mode", themes: ["retro","plants","skate"], frameworks: ["The \"Reframe\" (e.g., 'I\'m not lazy, I\'m on energy-saving mode')"] }
    ],
    colors: ["Blurple", "Dark Mode Grey", "Neon Green"],
    angles: ["Stressed at keyboard", "Sleeping in voice chat", "Peeking out from behind a screen"],
    aesthetics: ["Whimsigoth","Y2K Cyber-Grunge","Frutiger Aero","Cottagecore Woodcut","Futuristic AI Dystopian","Handmade Analog Sketch","Retro Airbrush","Vintage Sepia","Castlecore (Medieval)","Solarpunk","Gothic-Celestial"],
    compositions: ["Large Center-Chest Graphic", "Small Pocket-Logo Style", "Typography-Heavy Front","Arched Typography Design","Repeating Text Pattern"],
    promptTemplate: `You are an expert TeePublic apparel graphic concept generator and SEO copywriter. You are generating an apparel graphic concept exclusively for a specific person: [BUYER_IDENTITY]. Everything — the image, the phrase, the tags — must feel like it was made exactly for this person's psychological profile. Based on the provided parameters, generate a production-ready image generation prompt (for Midjourney/DALL-E) and SEO metadata. Do not add conversational filler.

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
- **BACKGROUND INSTRUCTION:** Instruct: "Use a solid, pure white background. If the main character is mostly white, use a solid dark or bright green background instead. There must be zero scenery, zero shadows, and high contrast between the character and the background to allow for flawless AI background removal."

OUTPUT EXACTLY LIKE THIS:

[RESEARCH & THINKING]
(Write 1 detailed paragraph proving you have analyzed the niche audience, psychological appeal of the humor, and brainstormed the highest-converting TeePublic SEO keywords before building the prompt.)

[IMAGE PROMPT]
[RENDER_STYLE_INSTRUCTION] of a [MASCOT DESCRIPTION + PROPS/THEME INTEGRATION], designed as a [VISUAL AESTHETIC] with a [COMPOSITION] layout. The design features the bold typography text "[EXACT PHRASE]", neatly [TYPOGRAPHY PLACEMENT]. [COMPOSITION DETAILS]. Screenprint style, slight grain/ink texture, bold silhouette readability, centered composition. Designed by an expert illustrator, not rendered by a slick AI engine. Solid pure white background (or solid high-contrast green if the character is white). Zero scenery, zero shadows, clean cut-out ready. No 3D, no glossy AI rendering. --no mockup, --no 3d, --no photorealism, --no glossy, --no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200

[SEO METADATA & UPLOAD INSTRUCTIONS]
Title: [Catchy, descriptive Title (~50 characters) that integrates the core joke/phrase and the Animal. DO NOT include product words like "T-shirt", "Sticker", or "Poster"]
Main Tag: [1 SINGLE SPECIFIC WORD (TeePublic requirement) that represents the most crucial search term (e.g., 'introvert' or 'capybara').]
Supporting Tags: [Comma separated list of 6-15 HIGH-INTENT long-tail keywords (3-4 words each). DO NOT use generic single words. Think like a human shopper. Use the formula 'Subject + Context/Style + Audience' (e.g., 'funny introvert raccoon meme', 'sarcastic trash panda gift', 'y2k aesthetic animal'). NO single-word redundancies.]
Description: [Short 2-sentence description. You MUST seamlessly weave the exact Main Tag into the first sentence to reinforce algorithm relevance.]
Recommended Garment Color: [Suggest 1-2 ideal t-shirt colors that provide high contrast against the design.]`
  }
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
