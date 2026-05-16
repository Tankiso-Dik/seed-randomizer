// Controlled Mutation System
// Introduces deliberate, bounded unpredictability to prevent combinatorial rigidity.
// The system becomes knowable over time; mutation keeps it honest.
//
// Each mutation type fires at a configured probability (default 5-10%).
// Mutations are designed to be surprising but not destructive:
// - they break pattern expectation without destroying coherence
// - they feel like a real brand occasionally surprising itself

import { ANGLES, AESTHETICS, COMPOSITIONS, PHRASE_DENSITIES, DENSITY_WEIGHTS, CONTRAST_COMBOS } from "./data";

/** For testability — replace with a deterministic function */
export let randomFn: () => number = Math.random;
export function setRandomFn(fn: () => number) { randomFn = fn; }

export type MutationType =
  | "composition_mismatch"  // composition doesn't match angle's natural fit
  | "archetype_inversion"   // animal used in a tone that contradicts its archetype
  | "density_violation"     // density doesn't match the weight distribution
  | "aesthetic_corruption"  // aesthetic pulled from outside angle's natural orbit
  | "contrast_break"        // contrast fires but doesn't match angle (wild contrast)
  | "pairing_anomaly";      // animal+angle combo that's unusual (e.g. capybara + chaotic gremlin)

export interface MutationConfig {
  /** Chance any mutation fires at all (default 0.07 = 7%) */
  mutationRate: number;
  /** Individual mutation type rates */
  compositionMismatchRate: number;
  archetypeInversionRate: number;
  densityViolationRate: number;
  aestheticCorruptionRate: number;
  contrastBreakRate: number;
  pairingAnomalyRate: number;
}

export const DEFAULT_MUTATION_CONFIG: MutationConfig = {
  mutationRate: 0.07,
  compositionMismatchRate: 0.08,
  archetypeInversionRate: 0.06,
  densityViolationRate: 0.07,
  aestheticCorruptionRate: 0.08,
  contrastBreakRate: 0.05,
  pairingAnomalyRate: 0.05,
};

// Rare but impactful: animal+angle pairings that don't naturally belong together
// These create the "wait, that works?" moments that make a brand feel alive
const PAIRING_ANOMALIES: Array<[string[], string[]]> = [
  // Creature + high-energy angle
  [["capybara", "rabbit", "guinea_pig", "axolotl"], ["Chaotic little gremlin energy", "Mildly chaotic humor", "Pet obsession identity"]],
  // Dog/cat + dark angle
  [["dog_french", "dog_corgi", "cat_black", "cat_orange"], ["Spooky gothic pet vibes", "Burnt-out but thriving"]],
  // Wild animal + cozy angle
  [["vulture", "bat", "moth", "goat"], ["Cozy lifestyle", "Cottagecore pet aesthetic"]],
  // Any animal + introvert humor (surprisingly works for irony)
  [["dog_golden", "dog_lab", "cat_tuxedo", "cat_siamese"], ["Introvert humor", "Quiet feral lifestyle"]],
  // Exotic creature + western
  [["crow", "raccoon", "frog", "pigeon"], ["Western country pet identity", "Retro outdoors aesthetic"]],
];

// Compositions that should NOT naturally fit certain angles
// Using them anyway = controlled mismatch
const MISMATCH_PAIRS: Array<[string, string[]]> = [
  // Western angle → but NOT a badge/banner/crest
  ["Western country pet identity", ["Vertical stacked", "Oversized face crop", "Small chest emblem", "Bottom-heavy mascot", "Diagonal motion"]],
  // Diagonal/gremlin → but NOT chaotic — put it in formal structure
  ["Chaotic little gremlin energy", ["Circular badge", "Crest / shield structure", "Small chest emblem"]],
  // Cozy/cottagecore → but NOT soft — put it in rough structure
  ["Cozy lifestyle", ["Wide retro banner", "Woodblock print aesthetic", "Diagonal motion"]],
  // Tired millennial → but NOT bottom-heavy — put it in formal
  ["Tired millennial humor", ["Circular badge", "Crest / shield structure", "Small chest emblem"]],
  // Spooky gothic → but NOT dark aesthetic — use warm/cute aesthetic
  ["Spooky gothic pet vibes", ["Bold clean silhouette art", "Rustic hand-lettered caps", "Vintage condensed block type"]],
];

export interface MutationResult {
  mutated: boolean;
  type?: MutationType;
  reason?: string;
  // Override values
  compositionOverride?: typeof COMPOSITIONS[number];
  densityOverride?: { label: string; hint: string; example: string };
  aestheticOverride?: string;
  angleOverride?: string;
  contrastOverride?: string;
}

function roll(rate: number): boolean {
  return randomFn() < rate;
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(randomFn() * arr.length)];
}

// 1. Composition Mismatch — force a composition that doesn't fit the angle
function applyCompositionMismatch(angle: string): MutationResult | null {
  const match = MISMATCH_PAIRS.find(([a]) => a === angle);
  if (!match) return null;
  const [, badComps] = match;
  // Pick from the "wrong" compositions for this angle
  const mismatched = COMPOSITIONS.filter(c => badComps.includes(c.label));
  if (!mismatched.length) return null;
  return {
    mutated: true,
    type: "composition_mismatch",
    reason: `Composition mismatch: ${angle} → ${randomItem(mismatched).label}`,
    compositionOverride: randomItem(mismatched),
  };
}

// 2. Archetype Inversion — pair animal with a tone that contradicts its archetype
// capybara (zen/calm) + chaotic gremlin, crow (cryptic/intelligent) + cozy lifestyle
function applyArchetypeInversion(animalKey: string, angle: string, cfg: MutationConfig): MutationResult | null {
  if (!roll(cfg.archetypeInversionRate)) return null;

  const INVERSION_PAIRS: Array<[string[], string[]]> = [
    [["capybara"], ["Chaotic little gremlin energy", "Mildly chaotic humor"]],
    [["crow"], ["Cozy lifestyle", "Cottagecore pet aesthetic"]],
    [["vulture"], ["Sarcastic pet humor", "Pet obsession identity"]],
    [["moth"], ["Cozy lifestyle", "Burnt-out but thriving"]],
    [["frog"], ["Western country pet identity", "Pet obsession identity"]],
    [["axolotl"], ["Mildly chaotic humor", "Chaotic little gremlin energy"]],
    [["bat"], ["Cozy lifestyle", "Cottagecore pet aesthetic"]],
    [["pigeon"], ["Sarcastic pet humor", "Chaotic little gremlin energy"]],
    [["chihuahua"], ["Cozy lifestyle", "Burnt-out but thriving"]],
    [["cat_fold"], ["Mildly chaotic humor", "Chaotic little gremlin energy"]],
  ];

  for (const [animals, validAngles] of INVERSION_PAIRS) {
    if (animals.includes(animalKey) && validAngles.includes(angle)) {
      // This is the inversion — pick a contrasting angle
      const contrastingAngles = ANGLES.filter(a => !validAngles.includes(a) && a !== angle);
      if (!contrastingAngles.length) continue;
      const newAngle = randomItem(contrastingAngles);
      return {
        mutated: true,
        type: "archetype_inversion",
        reason: `Archetype inversion: ${animalKey} paired with "${newAngle}" (tension with natural archetype)`,
        angleOverride: newAngle,
      };
    }
  }

  return null;
}

// 3. Density Violation — pick against the weighted distribution
function applyDensityViolation(cfg: MutationConfig): MutationResult | null {
  if (!roll(cfg.densityViolationRate)) return null;

  // Force a density that the weights would rarely produce
  // If Sparse was last picked (rare under weights), go to Conversational
  // This creates variety without being destructive
  const violations: Array<{ label: string; hint: string; example: string }> = [
    { label: "Sparse", hint: "2–4 words", example: '"Unspoken"' },
    { label: "Conversational", hint: "9–14 words", example: '"I Have No Idea What I Am Doing But I Am Here"' },
  ];

  return {
    mutated: true,
    type: "density_violation",
    reason: "Density violation: bending the weight curve for rhythmic surprise",
    densityOverride: randomItem(violations),
  };
}

// 4. Aesthetic Corruption — pull aesthetic from outside angle's natural orbit
// Don't pick from angle-fit aesthetics; pick from the ones that don't match
const CORRUPT_AESTHETICS = [
  "Old school tattoo flash",
  "Bold clean silhouette art",
  "Woodblock print aesthetic",
  "National park poster style",
  "Simplified engraved mascot",
];

function applyAestheticCorruption(angle: string, cfg: MutationConfig): MutationResult | null {
  if (!roll(cfg.aestheticCorruptionRate)) return null;

  // Find aesthetics that DON'T naturally pair with this angle
  // Use CONTRAST_COMBOS as the source of truth for angle-aesthetic pairs
  const fitting = new Set(
    CONTRAST_COMBOS
      .filter(c => c.angle === angle)
      .map(c => c.aesthetic)
  );
  // CORRUPT_AESTHETICS already defined as the anti-fitting set
  // Pick from CORRUPT_AESTHETICS that aren't in the fitting set
  const antiFitting = CORRUPT_AESTHETICS.filter(a => !fitting.has(a));
  const pool = antiFitting.length > 0 ? antiFitting : CORRUPT_AESTHETICS;

  return {
    mutated: true,
    type: "aesthetic_corruption",
    reason: `Aesthetic corruption: pulling from outside angle's natural orbit`,
    aestheticOverride: randomItem(pool),
  };
}

// 5. Contrast Break — contrast fires but it's a weird mismatch, not a thoughtful one
// This creates the "that shouldn't work but does" energy
function applyContrastBreak(angle: string, currentAesthetic: string): MutationResult | null {
  if (!roll(0.05)) return null;

  // Pick a contrast note that isn't curated for this angle
  const BREAK_CONTRASTS = [
    "minimalist / maximalist collision",
    "retro warmth / clinical precision",
    "quiet phrase / loud structure",
    "intimate message / public format",
    "earnest copy / ironic frame",
  ];

  return {
    mutated: true,
    type: "contrast_break",
    reason: `Contrast break: unconventional mismatch (not curated contrast)`,
    contrastOverride: randomItem(BREAK_CONTRASTS),
    aestheticOverride: currentAesthetic, // keep aesthetic but add weird contrast
  };
}

// 6. Pairing Anomaly — animal+angle combo that's genuinely unusual
function applyPairingAnomaly(cfg: MutationConfig): MutationResult | null {
  if (!roll(cfg.pairingAnomalyRate)) return null;

  const anomaly = randomItem(PAIRING_ANOMALIES);
  const [animals, angles] = anomaly;

  return {
    mutated: true,
    type: "pairing_anomaly",
    reason: `Pairing anomaly: ${randomItem(animals)} + unusual angle context`,
    angleOverride: randomItem(angles),
  };
}

// Main mutation function — applies all mutation types in sequence
export function applyMutation(args: {
  animalKey: string;
  angle: string;
  aesthetic: string;
  archetypeMap: Record<string, {tone: string}>;
}): MutationResult {
  const cfg = DEFAULT_MUTATION_CONFIG;

  if (!roll(cfg.mutationRate)) {
    return { mutated: false };
  }

  // Try mutations in order of impact — only one fires per call
  const mutations: Array<() => MutationResult | null> = [
    () => applyPairingAnomaly(cfg),
    () => applyArchetypeInversion(args.animalKey, args.angle, cfg),
    () => applyCompositionMismatch(args.angle),
    () => applyDensityViolation(cfg),
    () => applyAestheticCorruption(args.angle, cfg),
    () => applyContrastBreak(args.angle, args.aesthetic),
  ];

  // Shuffle mutation attempt order for variety
  for (let i = mutations.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [mutations[i], mutations[j]] = [mutations[j], mutations[i]];
  }

  for (const mutationFn of mutations) {
    const result = mutationFn();
    if (result && result.mutated) {
      return result;
    }
  }

  return { mutated: false };
}

// Format mutation for display
export function formatMutationLabel(result: MutationResult): string {
  if (!result.mutated || !result.type) return "";
  const labels: Record<MutationType, string> = {
    composition_mismatch: "⟋ Mismatch",
    archetype_inversion:   "⟲ Inversion",
    density_violation:     "⚡ Violation",
    aesthetic_corruption:  "⌬ Corruption",
    contrast_break:        "⊘ Break",
    pairing_anomaly:      "◎ Anomaly",
  };
  return labels[result.type] ?? "Mutation";
}