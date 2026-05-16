// Animal Archetype Definitions
// Maps animal to its strongest emotional read for phrase-tone consistency

export type HumorType =
  | "survival"  // possum
  | "neutral"   // capybara
  | "cryptic"   // crow
  | "unstable"  // chihuahua
  | "existential" // frog
  | "resilient" // vulture
  | "obsessive" // moth
  | "adaptive"  // gecko
  | "chaotic"   // goat
  | "underdog"  // pigeon
  | "trickster" // raccoon
  | "dark"      // bat
  | "anxious"   // rabbit
  | "melancholy" // axolotl
  | "sweet"     // guinea pig
  | "loyal"     // dog
  | "ironic"    // cat
  | "generic";

export type ToneType =
  | "deadpan" | "zen" | "intelligent" | "confident"
  | "soft" | "exhausted" | "driven" | "calm"
  | "sturdy" | "mysterious" | "warm" | "cool"
  | "resilient" | "neutral" | "clever" | "cozy";

export type EnergyLevel = "low" | "medium" | "high";

export interface Archetype {
  humor: HumorType;
  tone: ToneType;
  energy: EnergyLevel;
}

// Strongest emotional reads per animal
export const ANIMAL_ARCHETYPES: Record<string, Archetype> = {
  possum:    { humor: "survival",    tone: "deadpan",    energy: "low" },
  capybara:  { humor: "neutral",     tone: "zen",        energy: "low" },
  crow:      { humor: "cryptic",     tone: "intelligent", energy: "medium" },
  chihuahua: { humor: "unstable",    tone: "confident",  energy: "high" },
  frog:      { humor: "existential", tone: "soft",       energy: "low" },
  vulture:   { humor: "resilient",   tone: "exhausted",  energy: "low" },
  moth:      { humor: "obsessive",   tone: "driven",      energy: "high" },
  gecko:     { humor: "adaptive",    tone: "calm",       energy: "medium" },
  goat:      { humor: "chaotic",     tone: "sturdy",      energy: "medium" },
  pigeon:    { humor: "underdog",    tone: "resilient",   energy: "low" },
  raccoon:   { humor: "trickster",   tone: "clever",      energy: "medium" },
  bat:       { humor: "dark",        tone: "mysterious", energy: "medium" },
  rabbit:    { humor: "anxious",     tone: "soft",       energy: "high" },
  axolotl:   { humor: "melancholy",  tone: "calm",       energy: "low" },
  guinea_pig:{ humor: "sweet",       tone: "cozy",       energy: "low" },
  dog:       { humor: "loyal",      tone: "warm",       energy: "medium" },
  cat:       { humor: "ironic",      tone: "cool",       energy: "medium" },
};

// Normalize animal key: dog_french → dog, cat_black → cat
export function getArchetype(animalKey: string): Archetype {
  const base = animalKey.replace(/_[a-z]+$/, '');
  return ANIMAL_ARCHETYPES[base] ?? { humor: "generic", tone: "neutral", energy: "medium" };
}

// Archetype display string for UI
export function archetypeLabel(key: string): string {
  const a = getArchetype(key);
  if (a.humor === "generic") return "";
  return `${a.humor} · ${a.tone} tone`;
}