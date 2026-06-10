const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

// Update Interface
if (!content.includes('archetype: string;')) {
  content = content.replace(
    'export interface AnimalConfig {',
    'export interface AnimalConfig {\n  archetype: string;\n  buyerIdentity: string;'
  );
}

const archetypes = {
  pig: { arc: "The Indulgent Hedonist", idty: "Someone who unapologetically loves snacking, relaxing in the mud, and refusing to do any actual work." },
  crow: { arc: "The Goth Scholar", idty: "Someone who loves shiny things, true crime, spooky academia, and judging people from a distance." },
  possum: { arc: "The Tired One", idty: "Someone who is overstimulated, exhausted, surviving on caffeine, and uses 'I\\'m fine' as their entire personality." },
  raccoon: { arc: "The Chaotic Trash Panda", idty: "Someone with scrappy, unhinged gremlin energy who thrives in late-night chaos and proudly makes terrible decisions." },
  capybara: { arc: "The Zen Master", idty: "Someone who is aggressively unbothered, chronically chill, and refuses to let modern stress affect their inner peace." },
  axolotl: { arc: "The Sweet & Empty-Headed", idty: "Someone who is overwhelmingly cute but has absolutely zero thoughts going on behind their eyes." },
  frog: { arc: "The Blissfully Detached", idty: "Someone who wants to retreat to the woods, avoid society, and live a derpy, simple, cottagecore life." },
  bat: { arc: "The Spooky Introvert", idty: "Someone who hates daylight, avoids social interaction, and considers Halloween to be a year-round lifestyle." },
  moth: { arc: "The Feral Light-Seeker", idty: "Someone drawn to shiny, destructive things, embracing weird alt-fashion, and constantly distracted." },
  pigeon: { arc: "The Urban Survivor", idty: "Someone who feels overlooked, slightly trashy, but highly resilient and just trying to secure the bread." },
  rabbit: { arc: "The Anxious Over-Thinker", idty: "Someone who is highly caffeinated, perpetually nervous, easily startled, and trying their best." },
  "guinea pig": { arc: "The Dramatic Potato", idty: "Someone who demands immediate attention, screams when hungry, and prefers staying home in their cozy corner." },
  goat: { arc: "The Screaming Menace", idty: "Someone with unbridled chaotic energy who yells at inconveniences and climbs over obstacles out of pure stubbornness." },
  gecko: { arc: "The Derpy Observer", idty: "Someone who is slightly awkward, stares blankly at situations, and clings to their comfort zone." },
  vulture: { arc: "The Ominous Loner", idty: "Someone with a morbid sense of humor who patiently waits for things to fall apart while drinking their coffee." },
  shrimp: { arc: "The Post-Ironic Weirdo", idty: "Someone deeply immersed in absurdist Gen Z internet humor who uses nonsense memes to cope with reality." },
  goose: { arc: "The Agent of Chaos", idty: "Someone who wakes up choosing violence, loves causing minor inconveniences, and thrives on spite." },
  sloth: { arc: "The Proud Procrastinator", idty: "Someone whose ultimate goal is doing absolutely nothing and who actively refuses to participate in hustle culture." },
  "red panda": { arc: "The Clumsy Introvert", idty: "Someone trying to look intimidating but actually just soft, easily overwhelmed, and prone to silly mistakes." },
  otter: { arc: "The Playful Companion", idty: "Someone who just wants to hold hands, float through life, and prioritize snacks and emotional support." }
};

// Loop through each animal key and inject the properties into the object definition
for (const [key, data] of Object.entries(archetypes)) {
  const safeKey = key === "guinea pig" || key === "red panda" ? `"${key}"` : key;
  const regex = new RegExp(`(${safeKey}: {\\s*\\n\\s*id: "${key}",\\s*\\n\\s*label: "[^"]+",)`);
  if (content.match(regex)) {
    content = content.replace(
      regex,
      `$1\n    archetype: "${data.arc}",\n    buyerIdentity: "${data.idty}",`
    );
  }
}

// UPDATE 1: Add Archetype and Buyer Identity to DESIGN PARAMETERS
// Note: Only replacing the first occurrence (which acts as a template or inside the first Pig prompt, wait, I need to replace it EVERYWHERE).
content = content.replace(/- Animal: ([A-Za-z ]+)\n/g, "- Animal: $1\n- Animal Archetype: [ARCHETYPE]\n- Buyer Identity: [BUYER_IDENTITY]\n");

// UPDATE 2: Add THUMBNAIL HIERARCHY rule
const ruleSearch = "- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.\\n";
const ruleReplacement = "- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.\\n- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.\\n";
// Let's use regex instead to be safer:
content = content.replace(/- \*\*NICHE INTERSECTION:\*\* The design MUST visually combine the Animal with the Hobby\/Theme\/Props listed above\. Use the props naturally in the design\.\n/g, "- **NICHE INTERSECTION:** The design MUST visually combine the Animal with the Hobby/Theme/Props listed above. Use the props naturally in the design.\n- **THUMBNAIL BLINDNESS:** The animal character MUST be the massive, dominant focal point of the image so it is instantly readable as a tiny 200px thumbnail on a phone. Keep background details minimal to avoid a muddy design.\n");

// UPDATE 3: Update PHRASE TONE for Internal Monologue
content = content.replace(/- \*\*PHRASE TONE:\*\* The phrase MUST strictly match the selected "\[HUMOR_STYLE\]" \(2-8 words\)\.\n/g, "- **PHRASE TONE / INTERNAL MONOLOGUE:** The phrase MUST be written in the 1st-person internal monologue of the Buyer Identity (e.g., 'I am no longer taking questions' instead of 'Tired Possum'). It must sound like something the buyer would text their friend. Strictly match the selected \"[HUMOR_STYLE]\" (2-8 words).\n");

fs.writeFileSync(dataFilePath, content);
console.log('Successfully updated data.ts with Archetypes, Buyer Identities, Thumbnail rules, and Internal Monologue rules.');
