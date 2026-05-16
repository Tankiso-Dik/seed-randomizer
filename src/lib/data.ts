// Animals — single merged pool with combined weights
// Evergreen tier: high weights (dogs + cats dominate)
// Novelty tier: medium weights (axolotl, capybara, crow, possum, etc.)
// Wild tier: low but non-zero weights (shrimp, vulture, goat, gecko)

export const ANIMALS: Record<string, AnimalEntry> = {
  dog_french:    { label:"French Bulldog",   group:"dog",     tag:"badge-dog",      weight:14 },
  dog_golden:    { label:"Golden Retriever", group:"dog",     tag:"badge-dog",      weight:13 },
  dog_dachshund: { label:"Dachshund",        group:"dog",     tag:"badge-dog",      weight:12 },
  dog_corgi:     { label:"Corgi",            group:"dog",     tag:"badge-dog",      weight:11 },
  dog_gsd:       { label:"German Shepherd",  group:"dog",     tag:"badge-dog",      weight:10 },
  dog_lab:       { label:"Labrador",         group:"dog",     tag:"badge-dog",      weight:10 },
  dog_pit:       { label:"Pitbull",          group:"dog",     tag:"badge-dog",      weight:9 },
  dog_chi:       { label:"Chihuahua",        group:"dog",     tag:"badge-dog",      weight:9 },
  cat_black:     { label:"Black Cat",        group:"cat",     tag:"badge-cat",      weight:12 },
  cat_orange:    { label:"Orange Tabby",     group:"cat",     tag:"badge-cat",      weight:11 },
  cat_siamese:   { label:"Siamese Cat",      group:"cat",     tag:"badge-cat",      weight:9 },
  cat_tuxedo:    { label:"Tuxedo Cat",       group:"cat",     tag:"badge-cat",      weight:9 },
  cat_fold:      { label:"Scottish Fold",   group:"cat",     tag:"badge-cat",      weight:8 },
  rabbit:        { label:"Rabbit",           group:"creature",tag:"badge-creature", weight:10 },
  guinea_pig:    { label:"Guinea Pig",       group:"creature",tag:"badge-creature", weight:8 },
  axolotl:       { label:"Axolotl",          group:"creature",tag:"badge-creature", weight:8 },
  capybara:      { label:"Capybara",         group:"creature",tag:"badge-creature", weight:6 },
  crow:          { label:"Crow",             group:"creature",tag:"badge-creature", weight:6 },
  possum:        { label:"Possum",           group:"creature",tag:"badge-creature", weight:5 },
  frog:          { label:"Frog",            group:"creature",tag:"badge-creature", weight:5 },
  raccoon:       { label:"Raccoon",          group:"creature",tag:"badge-creature", weight:5 },
  bat:           { label:"Bat",             group:"creature",tag:"badge-creature", weight:4 },
  moth:          { label:"Moth",             group:"creature",tag:"badge-creature", weight:4 },
  pigeon:        { label:"Pigeon",           group:"creature",tag:"badge-creature", weight:3 },
  goat:          { label:"Goat",             group:"creature",tag:"badge-creature", weight:2 },
  gecko:         { label:"Gecko",            group:"creature",tag:"badge-creature", weight:2 },
  vulture:       { label:"Vulture",          group:"creature",tag:"badge-creature", weight:1 },
  shrimp:        { label:"Shrimp",           group:"creature",tag:"badge-creature", weight:1 },
};

export interface AnimalEntry {
  label: string;
  group: string;
  tag: string;
  weight: number;
}

export const ANGLES = [
  "Sarcastic pet humor","Tired millennial humor","Introvert humor",
  "Cozy lifestyle","Cottagecore pet aesthetic","Spooky gothic pet vibes",
  "Western country pet identity","Retro outdoors aesthetic",
  "Mildly chaotic humor","Pet obsession identity",
  "Burnt-out but thriving","Creature solidarity",
  "Chaotic little gremlin energy","Quiet feral lifestyle"
];

export const AESTHETICS = [
  "Retro vintage graphic tee","Distressed mascot design",
  "Folk-art influenced sticker illustration","Rustic vintage badge emblem",
  "Simplified engraved mascot","Bold clean silhouette art",
  "Worn screenprint graphic","Vintage western emblem",
  "National park poster style","Old school tattoo flash",
  "Woodblock print aesthetic"
];

export const CONTRAST_COMBOS = [
  {angle:"Introvert humor",               aesthetic:"Vintage western emblem",                    note:"fragile phrase / tough layout"},
  {angle:"Tired millennial humor",        aesthetic:"National park poster style",                note:"burnout / wholesome wrapper"},
  {angle:"Cottagecore pet aesthetic",     aesthetic:"Old school tattoo flash",                   note:"soft energy / hard visual"},
  {angle:"Spooky gothic pet vibes",       aesthetic:"Folk-art influenced sticker illustration",  note:"dark angle / cute format"},
  {angle:"Cozy lifestyle",                aesthetic:"Bold clean silhouette art",                 note:"warm feeling / cold geometry"},
  {angle:"Chaotic little gremlin energy", aesthetic:"Rustic vintage badge emblem",               note:"chaos / formal crest"},
  {angle:"Quiet feral lifestyle",         aesthetic:"Retro vintage graphic tee",                 note:"feral energy / nostalgic shell"},
  {angle:"Burnt-out but thriving",        aesthetic:"Woodblock print aesthetic",                 note:"exhaustion / artisan prestige"},
];

export const TRENDS = [
  "2006 mall goth","National park nostalgia","Burnt-out office humor",
  "Cozy doom","Rural cryptid","Gas station occultism",
  "Bookstore employee energy","Goblincore forager",
  "Sad snack era","Cottage witch lifestyle",
  "Feral academia","Chronic overthinker"
];

export const PALETTES = [
  ["Muted orange","Cream","Charcoal"],
  ["Faded teal","Warm beige","Black"],
  ["Dusty red","Off-white","Rustic green"],
  ["Muted mustard","Burnt sienna","Cream"],
  ["Black","Muted orange","Warm beige"],
  ["Charcoal","Faded teal","Off-white"],
  ["Dusty red","Muted mustard","Black"],
  ["Rustic green","Cream","Burnt sienna"],
  ["Deep plum","Dusty rose","Off-white"],
  ["Midnight navy","Muted orange","Cream"]
];

export interface CompositionEntry {
  label: string;
  hint: string;
  fits: readonly string[];
}

export const COMPOSITIONS = [
  { label:"Circular badge",           hint:"Mascot centered inside a ring or badge frame",               fits:["Western country pet identity","Retro outdoors aesthetic","Burnt-out but thriving"] },
  { label:"Vertical stacked",         hint:"Mascot on top, phrase beneath, tight column",                fits:["Introvert humor","Cozy lifestyle","Cottagecore pet aesthetic","Quiet feral lifestyle"] },
  { label:"Oversized face crop",      hint:"Head fills most of the canvas, phrase small below or above", fits:["Sarcastic pet humor","Tired millennial humor","Mildly chaotic humor","Chaotic little gremlin energy"] },
  { label:"Small chest emblem",       hint:"Tight compact lockup, meant for left-chest placement",       fits:["Pet obsession identity","Cozy lifestyle","Creature solidarity"] },
  { label:"Wide retro banner",        hint:"Horizontal mascot with banner text above and below",         fits:["Retro outdoors aesthetic","Western country pet identity","National park nostalgia"] },
  { label:"Crest / shield structure", hint:"Heraldic-style formal frame around mascot",                  fits:["Western country pet identity","Creature solidarity","Burnt-out but thriving"] },
  { label:"Bottom-heavy mascot",      hint:"Mascot anchors bottom, large text dominates top",            fits:["Tired millennial humor","Introvert humor","Quiet feral lifestyle"] },
  { label:"Diagonal motion",          hint:"Mascot tilted or mid-action, phrase on a slant",             fits:["Mildly chaotic humor","Chaotic little gremlin energy","Spooky gothic pet vibes"] },
] as const;

export const PHRASE_DENSITIES = [
  { label:"Sparse",         hint:"2–4 words",    example:'"Emotionally Nocturnal"' },
  { label:"Medium",         hint:"5–8 words",    example:'"I\'m Trying My Best, Unfortunately"' },
  { label:"Conversational", hint:"9–14 words",   example:'"I Cancel Plans Professionally And Recreationally"' },
] as const;

// 30% Sparse, 45% Medium, 25% Conversational
export const DENSITY_WEIGHTS = [0.30, 0.45, 0.25];