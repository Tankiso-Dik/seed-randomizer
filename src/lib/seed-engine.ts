// Core Seed Engine — generates a single randomized design seed
// Orchestrates all subsystems: memory, restraint, archetypes, collection

import {
  ANIMALS,
  ANGLES,
  AESTHETICS,
  CONTRAST_COMBOS,
  TRENDS,
  PALETTES,
  COMPOSITIONS,
  PHRASE_DENSITIES,
  DENSITY_WEIGHTS,
} from "./data";
import { pickWithMemory, track, animalScore, type MemoryState } from "./memory";
import { applyRestraint } from "./restraint";
import { archetypeLabel } from "./archetypes";
import {
  COLLECTION_COMPOSITIONS,
  COLLECTION_PALETTES,
  COLLECTION_TYPOGRAPHY,
  type CollectionConfig,
} from "./collections";

// Use the actual `as const` types from data.ts directly
type DataComposition = typeof COMPOSITIONS[number];
type DataDensity = typeof PHRASE_DENSITIES[number];

export interface GeneratedSeed {
  animalKey: string;
  animal: typeof ANIMALS[string];
  angle: string;
  aesthetic: string;
  composition: DataComposition;
  density: DataDensity;
  palette: string[];
  trend: string | null;
  contrastNote: string | null;
  archetypeLabel: string;
  restraintApplied?: string;
  // Collection mode extras
  collectionPalette?: string;
  collectionComposition?: string;
  collectionTypography?: string;
}

// Picks a weighted animal with memory penalty
function pickAnimal(recentAnimals: string[]): string {
  const keys = Object.keys(ANIMALS);
  let bestKey = keys[0];
  let bestScore = -Infinity;

  for (let attempt = 0; attempt < 15; attempt++) {
    let r = Math.random() * 100;
    let selectedKey = keys[keys.length - 1];
    for (const k of keys) {
      r -= ANIMALS[k].weight;
      if (r <= 0) { selectedKey = k; break; }
    }
    const score = Math.random() - animalScore(1, recentAnimals, selectedKey) * 0.5;
    if (score > bestScore) {
      bestScore = score;
      bestKey = selectedKey;
    }
  }

  return bestKey;
}

// Picks weighted phrase density
function pickDensity(): DataDensity {
  const r = Math.random();
  let cumulative = 0;
  for (let i = 0; i < DENSITY_WEIGHTS.length; i++) {
    cumulative += DENSITY_WEIGHTS[i];
    if (r < cumulative) return PHRASE_DENSITIES[i];
  }
  return PHRASE_DENSITIES[1];
}

// Generates a single seed with optional collection overrides
export function generateSeed(
  memory: MemoryState,
  collectionConfig?: CollectionConfig
): GeneratedSeed {
  // Animal with memory — avoid immediate repeat
  let lastAnimalKey: string | null = null;
  let attempts = 0;
  let animalKey: string;
  do {
    animalKey = pickAnimal(memory.animals);
    attempts++;
  } while (animalKey === lastAnimalKey && attempts < 20);
  track(memory.animals, animalKey);
  lastAnimalKey = animalKey;

  const animal = ANIMALS[animalKey];

  // Angle with memory
  const angle = pickWithMemory(ANGLES, memory.angles);
  track(memory.angles, angle);

  // Aesthetic with memory
  let aesthetic = pickWithMemory(AESTHETICS, memory.aesthetics);
  track(memory.aesthetics, aesthetic);

  // Contrast: 30% chance — only use if angle matches
  let contrastNote: string | null = null;
  if (Math.random() < 0.30) {
    const combo = CONTRAST_COMBOS.find(c => c.angle === angle);
    if (combo) {
      contrastNote = combo.note;
      aesthetic = combo.aesthetic;
    }
  }

  // Trend: 35% chance with memory
  let trend: string | null = null;
  if (Math.random() < 0.35) {
    trend = pickWithMemory(TRENDS, memory.trends);
    track(memory.trends, trend);
  }

  // Archetype label
  const archLabel = archetypeLabel(animalKey);

  // Composition — collection override or auto-fit
  let composition: DataComposition;
  if (collectionConfig) {
    composition = (COLLECTION_COMPOSITIONS as Record<string, DataComposition>)[collectionConfig.composition] ?? COMPOSITIONS[0];
  } else {
    const fits = COMPOSITIONS.filter(c => (c.fits as readonly string[]).includes(angle));
    composition = fits.length ? fits[Math.floor(Math.random() * fits.length)] : COMPOSITIONS[0];
  }

  // Palette
  const palette: string[] = collectionConfig
    ? [...COLLECTION_PALETTES[collectionConfig.palette]]
    : [...PALETTES[Math.floor(Math.random() * PALETTES.length)]];

  // Density — may be overridden by restraint
  let density = pickDensity();
  const restraintResult = applyRestraint({ animalKey, trend, contrastNote });
  let restraintApplied: string | undefined;
  if (restraintResult.forSparse) {
    density = { label: "Sparse", hint: "2–4 words", example: `"${angle.split(' ')[0]} Mode"` } as unknown as DataDensity;
    restraintApplied = restraintResult.reason;
  }

  const result: GeneratedSeed = {
    animalKey,
    animal,
    angle,
    aesthetic,
    composition,
    density,
    palette,
    trend,
    contrastNote,
    archetypeLabel: archLabel,
    restraintApplied,
  };

  // Apply collection fixed values
  if (collectionConfig) {
    result.collectionPalette = palette.join(", ");
    result.collectionComposition = (COLLECTION_COMPOSITIONS as Record<string, {label: string}>)[collectionConfig.composition].label;
    result.collectionTypography = COLLECTION_TYPOGRAPHY[collectionConfig.typography];
  }

  return result;
}

// Format seed as text for clipboard/prompt
export function formatSeedText(seed: GeneratedSeed): string {
  let text = `Animal: ${seed.animal.label}
Emotional Angle: ${seed.angle}
Visual Aesthetic: ${seed.aesthetic}
Composition: ${seed.composition.label} — ${seed.composition.hint}
Phrase Density: ${seed.density.label} (${seed.density.hint}) e.g. ${seed.density.example}
Color Palette: ${seed.palette.join(", ")}`;

  if (seed.trend) text += `\nTrend Injector: ${seed.trend}`;
  if (seed.contrastNote) text += `\nContrast Note: ${seed.contrastNote}`;
  if (seed.archetypeLabel) text += `\nAnimal Archetype: ${seed.archetypeLabel}`;
  if (seed.restraintApplied) text += `\nRestraint: ${seed.restraintApplied}`;

  if (seed.collectionPalette) {
    text += `\n\n[COLLECTION MODE — fixed across line]`;
    text += `\nPalette: ${seed.collectionPalette}`;
    text += `\nComposition: ${seed.collectionComposition}`;
    text += `\nTypography: ${seed.collectionTypography}`;
  }

  return text;
}