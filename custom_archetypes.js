const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'src/lib/data.ts');
let content = fs.readFileSync(dataFilePath, 'utf8');

const customArchetypes = {
  pig: [
    { arc: "The Indulgent Hedonist", idty: "Someone who unapologetically loves snacking, relaxing, and refusing to do work" },
    { arc: "The Cozy Glutton", idty: "Someone who views snacks as the only reliable form of emotional support" },
    { arc: "The Stubborn Homebody", idty: "Someone who will literally fight you if asked to leave the house" }
  ],
  crow: [
    { arc: "The Goth Scholar", idty: "Someone who loves shiny things, true crime, and judging from a distance" },
    { arc: "The Ominous Observer", idty: "Someone who collects secrets, watches drama unfold, and refuses to intervene" },
    { arc: "The Spooky Academic", idty: "Someone who drinks dark roast coffee while reading Wikipedia pages about unsolved mysteries" }
  ],
  possum: [
    { arc: "The Tired One", idty: "Someone who is overstimulated, exhausted, surviving on caffeine" },
    { arc: "The Feral Survivor", idty: "Someone running on 2 hours of sleep, spite, and garbage" },
    { arc: "The Anxious Introvert", idty: "Someone who screams internally but externally says 'I\\'m fine'" }
  ],
  raccoon: [
    { arc: "The Chaotic Trash Panda", idty: "Someone with scrappy gremlin energy who thrives in late-night chaos" },
    { arc: "The Insomniac Schemer", idty: "Someone with 3 AM energy plotting overly complex solutions to simple problems" },
    { arc: "The Lovable Menace", idty: "Someone who makes terrible decisions but is too cute to stay mad at" }
  ],
  capybara: [
    { arc: "The Zen Master", idty: "Someone who is aggressively unbothered and chronically chill" },
    { arc: "The Emotional Support Friend", idty: "Someone who absorbs everyone\\'s stress while remaining completely placid" },
    { arc: "The Unfazed Observer", idty: "Someone watching the world burn but just vibing in the hot spring" }
  ],
  axolotl: [
    { arc: "The Sweet & Empty-Headed", idty: "Someone overwhelmingly cute but with zero thoughts behind their eyes" },
    { arc: "The Oblivious Optimist", idty: "Someone smiling through the chaos because they literally don\\'t understand it" },
    { arc: "The Pastel Derp", idty: "Someone with a soft aesthetic who is deeply confused by modern technology" }
  ],
  frog: [
    { arc: "The Blissfully Detached", idty: "Someone who wants to retreat to the woods and live a derpy cottagecore life" },
    { arc: "The Swamp Hermit", idty: "Someone grumpy, wet, and refusing to answer text messages" },
    { arc: "The Existential Hopper", idty: "Someone who stares blankly into space pondering the meaning of life while sitting on a lilypad" }
  ],
  bat: [
    { arc: "The Spooky Introvert", idty: "Someone who hates daylight and considers Halloween a year-round lifestyle" },
    { arc: "The Nocturnal Overthinker", idty: "Someone who is only wide awake and productive at 2 AM" },
    { arc: "The Socially Awkward Vampire", idty: "Someone who tries to be edgy but is actually just shy and likes fruit" }
  ],
  moth: [
    { arc: "The Feral Light-Seeker", idty: "Someone drawn to shiny destructive things and easily distracted" },
    { arc: "The Lamp Addict", idty: "Someone with an obsessive personality who fixates on one hyper-specific interest" },
    { arc: "The Dusty Goth", idty: "Someone who is an alternative fashion enthusiast but bumps into walls" }
  ],
  pigeon: [
    { arc: "The Urban Survivor", idty: "Someone who feels overlooked, slightly trashy, but highly resilient" },
    { arc: "The Hustle Culture Reject", idty: "Someone just trying to secure the bread without working a 9-to-5" },
    { arc: "The Chaotic Commuter", idty: "Someone angry, fast-walking, and fueled by discarded french fries" }
  ],
  rabbit: [
    { arc: "The Anxious Over-Thinker", idty: "Someone highly caffeinated, perpetually nervous, and easily startled" },
    { arc: "The Speedy Procrastinator", idty: "Someone who does everything at the last minute through sheer panic-induced adrenaline" },
    { arc: "The Jumpy Perfectionist", idty: "Someone stressed out because the vibes aren\\'t exactly right" }
  ],
  guinea_pig: [
    { arc: "The Dramatic Potato", idty: "Someone who demands immediate attention and screams when hungry" },
    { arc: "The Anxious Loaf", idty: "Someone who looks calm but is actually vibrating with nervous energy" },
    { arc: "The Pampered Critic", idty: "Someone highly judgmental of the quality of their snacks and accommodations" }
  ],
  goat: [
    { arc: "The Screaming Menace", idty: "Someone with unbridled chaotic energy who yells at inconveniences" },
    { arc: "The Stubborn Climber", idty: "Someone who will go out of their way to make things difficult just to prove a point" },
    { arc: "The Feral Athlete", idty: "Someone who parkours off furniture, eats things they shouldn\\'t, and has zero regrets" }
  ],
  gecko: [
    { arc: "The Derpy Observer", idty: "Someone slightly awkward who stares blankly and clings to comfort zones" },
    { arc: "The Clingy Introvert", idty: "Someone who wants to be invited but will just hang on the wall and not talk to anyone" },
    { arc: "The Smooth Brain", idty: "Someone licking their own eyeballs instead of dealing with adult responsibilities" }
  ],
  vulture: [
    { arc: "The Ominous Loner", idty: "Someone with morbid humor who waits for things to fall apart while drinking coffee" },
    { arc: "The Patient Pessimist", idty: "Someone who expects the worst and is quietly smug when it happens" },
    { arc: "The Desert Goth", idty: "Someone whose aesthetics are bone-dry and loves true crime and vintage westerns" }
  ],
  shrimp: [
    { arc: "The Post-Ironic Weirdo", idty: "Someone immersed in absurdist Gen Z humor to cope with reality" },
    { arc: "The Posture Disaster", idty: "Someone who sits like a curled-up shrimp at their desk for 10 hours a day" },
    { arc: "The Deep Sea Derp", idty: "Someone under immense pressure but still trying to look cute" }
  ],
  goose: [
    { arc: "The Agent of Chaos", idty: "Someone who wakes up choosing violence and thrives on spite" },
    { arc: "The Accidental Menace", idty: "Someone who causes problems but thinks they are helping" },
    { arc: "The Aggressive Defender", idty: "Someone who will honk loudly at minor inconveniences and societal norms" }
  ],
  sloth: [
    { arc: "The Proud Procrastinator", idty: "Someone whose ultimate goal is doing nothing and refuses hustle culture" },
    { arc: "The Slow-Motion Panicker", idty: "Someone freaking out internally but moving too slowly to do anything about it" },
    { arc: "The Cozy Nihilist", idty: "Someone who thinks the world is a mess so they might as well stay in bed" }
  ],
  red_panda: [
    { arc: "The Clumsy Introvert", idty: "Someone trying to look intimidating but actually just soft and easily overwhelmed" },
    { arc: "The Dramatic Reactor", idty: "Someone who throws their hands up at the slightest surprise or inconvenience" },
    { arc: "The Anxious Acrobat", idty: "Someone trying to juggle responsibilities but constantly dropping them" }
  ],
  otter: [
    { arc: "The Playful Companion", idty: "Someone who just wants to hold hands, float, and prioritize snacks" },
    { arc: "The Chaotic Swimmer", idty: "Someone with high energy, easily distracted, who drops their favorite rock" },
    { arc: "The Aquatic Sibling", idty: "Someone annoying but endearing who is constantly demanding playtime" }
  ]
};

// Use regex to replace the entire archetypes array block for each animal
for (const [key, data] of Object.entries(customArchetypes)) {
  const replacementArray = `archetypes: [\n      { arc: "${data[0].arc}", idty: "${data[0].idty}" },\n      { arc: "${data[1].arc}", idty: "${data[1].idty}" },\n      { arc: "${data[2].arc}", idty: "${data[2].idty}" }\n    ],`;
  
  // The existing pattern is archetypes: [\n ... \n ... \n ... \n ],
  const regex = new RegExp(`archetypes:\\s*\\[[^\\]]+\\],`, 'g');
  
  // Actually we need to match the specific animal's block.
  // We can match the id: "key" and then look backwards/forwards, but in data.ts it looks like:
  // key: {
  //   id: "key",
  //   label: "Key",
  //   archetypes: [ ... ],
  // So we can find `id: "${key}"` and then replace the very next `archetypes: [ ... ],`
  const idMatch = new RegExp(`id: "${key}",\\s*\\n\\s*label: "[^"]+",\\s*\\n\\s*archetypes:\\s*\\[[\\s\\S]*?\\],`);
  
  if (content.match(idMatch)) {
    content = content.replace(idMatch, (match) => {
      return match.replace(/archetypes:\s*\[[\s\S]*?\],/, replacementArray);
    });
  }
}

// Add --ar 2:3 --stylize 200 to image prompt
const oldNegatives = "--no blurry, --no watermark, --no signature, --no gradients, --no realistic textures";
const newNegatives = "--no blurry, --no watermark, --no signature, --no gradients, --no realistic textures --ar 2:3 --stylize 200";

content = content.replaceAll(oldNegatives, newNegatives);

fs.writeFileSync(dataFilePath, content);
console.log('Successfully added 60 custom archetypes and Midjourney aspect ratio parameters.');
