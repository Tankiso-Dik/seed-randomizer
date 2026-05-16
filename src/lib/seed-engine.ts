// Core Seed Engine — generates a single randomized design seed
// Orchestrates all subsystems: memory, restraint, archetypes, mutation, collection

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
import { archetypeLabel, ANIMAL_ARCHETYPES } from "./archetypes";
import { applyMutation, formatMutationLabel, type MutationResult } from "./mutation";
import {
  COLLECTION_COMPOSITIONS,
  COLLECTION_PALETTES,
  COLLECTION_TYPOGRAPHY,
  type CollectionConfig,
} from "./collections";

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
  mutationApplied?: string;
  mutationType?: string;
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
  // ── Animal ───────────────────────────────────────────────────────────
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

  // ── Angle ────────────────────────────────────────────────────────────
  const angle = pickWithMemory(ANGLES, memory.angles);
  track(memory.angles, angle);

  // ── Aesthetic ─────────────────────────────────────────────────────────
  let aesthetic = pickWithMemory(AESTHETICS, memory.aesthetics);
  track(memory.aesthetics, aesthetic);

  // ── Contrast (curated, 30%) ──────────────────────────────────────────
  let contrastNote: string | null = null;
  if (Math.random() < 0.30) {
    const combo = CONTRAST_COMBOS.find(c => c.angle === angle);
    if (combo) {
      contrastNote = combo.note;
      aesthetic = combo.aesthetic;
    }
  }

  // ── Trend (35%) ──────────────────────────────────────────────────────
  let trend: string | null = null;
  if (Math.random() < 0.35) {
    trend = pickWithMemory(TRENDS, memory.trends);
    track(memory.trends, trend);
  }

  // ── Archetype label ──────────────────────────────────────────────────
  const archLabel = archetypeLabel(animalKey);

  // ── Mutation (controlled, ~7%) ────────────────────────────────────────
  // Fires AFTER angle and aesthetic are set, BEFORE composition/density finalize.
  // Can override: angle, aesthetic, composition, density, contrastNote.
  // Runs with archetype map so inversion can reference tone data.
  let mutationResult: MutationResult = { mutated: false };
  let mutationApplied: string | undefined;
  let mutationType: string | undefined;

  if (!collectionConfig) {
    // Mutations don't fire in collection mode (coherence > surprise in lines)
    mutationResult = applyMutation({
      animalKey,
      angle,
      aesthetic,
      archetypeMap: ANIMAL_ARCHETYPES,
    });

    if (mutationResult.mutated) {
      mutationApplied = mutationResult.reason;
      mutationType = formatMutationLabel(mutationResult);

      if (mutationResult.angleOverride) {
        // Remove old angle, track new angle (handles unshift + trim via MAX_MEMORY)
        const idx = memory.angles.indexOf(angle);
        if (idx !== -1) memory.angles.splice(idx, 1);
        track(memory.angles, mutationResult.angleOverride);
      }
      if (mutationResult.aestheticOverride) {
        const idx = memory.aesthetics.indexOf(aesthetic);
        if (idx !== -1) memory.aesthetics.splice(idx, 1);
        memory.aesthetics.unshift(mutationResult.aestheticOverride);
        if (memory.aesthetics.length > 5) memory.aesthetics.pop();
      }
    }
  }

  // Apply mutation overrides to working variables
  const finalAngle = mutationResult.angleOverride ?? angle;
  const finalAesthetic = mutationResult.aestheticOverride ?? aesthetic;
  const finalContrastNote = mutationResult.contrastOverride ?? contrastNote;

  // ── Composition ──────────────────────────────────────────────────────
  let composition: DataComposition;
  if (collectionConfig) {
    composition = (COLLECTION_COMPOSITIONS as Record<string, DataComposition>)[collectionConfig.composition] ?? COMPOSITIONS[0];
  } else if (mutationResult.compositionOverride) {
    composition = mutationResult.compositionOverride;
  } else {
    const fits = COMPOSITIONS.filter(c => (c.fits as readonly string[]).includes(finalAngle));
    composition = fits.length ? fits[Math.floor(Math.random() * fits.length)] : COMPOSITIONS[0];
  }

  // ── Palette ──────────────────────────────────────────────────────────
  const palette: string[] = collectionConfig
    ? [...COLLECTION_PALETTES[collectionConfig.palette]]
    : [...PALETTES[Math.floor(Math.random() * PALETTES.length)]];

  // ── Density ───────────────────────────────────────────────────────────
  let density = pickDensity();
  const mutationFired = mutationResult.mutated;
  const restraintResult = applyRestraint({ animalKey, trend, contrastNote: finalContrastNote, mutationFired });
  let restraintApplied: string | undefined;
  if (restraintResult.forSparse) {
    density = { label: "Sparse", hint: "2–4 words", example: `"${finalAngle.split(' ')[0]} Mode"` } as unknown as DataDensity;
    restraintApplied = restraintResult.reason;
  }

  // Mutation density override (fires AFTER restraint, but only if restraint didn't force sparse)
  if (mutationResult.densityOverride && !restraintResult.forSparse) {
    density = mutationResult.densityOverride as unknown as DataDensity;
    if (!mutationApplied) mutationApplied = mutationResult.reason;
    if (!mutationType) mutationType = formatMutationLabel(mutationResult);
  }

  // ── Assemble result ──────────────────────────────────────────────────
  const result: GeneratedSeed = {
    animalKey,
    animal,
    angle: finalAngle,
    aesthetic: finalAesthetic,
    composition,
    density,
    palette,
    trend,
    contrastNote: finalContrastNote,
    archetypeLabel: archLabel,
    restraintApplied,
    mutationApplied,
    mutationType,
  };

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
  if (seed.mutationApplied) text += `\nMutation: ${seed.mutationApplied}`;

  if (seed.collectionPalette) {
    text += `\n\n[COLLECTION MODE — fixed across line]`;
    text += `\nPalette: ${seed.collectionPalette}`;
    text += `\nComposition: ${seed.collectionComposition}`;
    text += `\nTypography: ${seed.collectionTypography}`;
  }

  return text;
}