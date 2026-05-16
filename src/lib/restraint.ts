// Commercial Restraint Logic
// Limits simultaneous novelty layers to preserve readability
// Wild animal + trend + contrast = too many novelty layers → force sparse density

const WILD_ANIMALS = [
  'vulture','shrimp','goat','gecko','bat','moth','pigeon'
];

export interface RestraintResult {
  forSparse: boolean;
  reason?: string;
}

export function applyRestraint(args: {
  animalKey: string;
  trend: string | null;
  contrastNote: string | null;
  mutationFired?: boolean;
}): RestraintResult {
  const isWild = WILD_ANIMALS.includes(args.animalKey);
  const hasTrend = !!args.trend;
  const hasContrast = !!args.contrastNote;
  const hasMutation = !!args.mutationFired;

  // Count active novelty layers
  let layers = 0;
  if (isWild) layers++;
  if (hasTrend) layers++;
  if (hasContrast) layers++;
  if (hasMutation) layers++;

  // If 2+ novelty layers, force sparse density to preserve readability
  if (layers >= 2) {
    const parts: string[] = [];
    if (isWild) parts.push('wild animal');
    if (hasTrend) parts.push('trend');
    if (hasContrast) parts.push('contrast');
    if (hasMutation) parts.push('mutation');
    return {
      forSparse: true,
      reason: `Sparse density: ${layers} novelty layers (${parts.join(' + ')})`,
    };
  }

  return { forSparse: false };
}