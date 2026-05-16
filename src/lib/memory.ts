// Anti-repeat memory — rolling window of recently used values
// Prevents aesthetic loops and convergence in procedural generation

export const MAX_MEMORY = 5;

export interface MemoryState {
  animals: string[];
  angles: string[];
  aesthetics: string[];
  trends: string[];
}

export function createMemory(): MemoryState {
  return { animals: [], angles: [], aesthetics: [], trends: [] };
}

// Count how many times a value appears in recent memory
function countOccurrences(list: string[], value: string): number {
  return list.filter(x => x === value).length;
}

// Pick from pool using memory-penalized scoring
// Recently used items get scored lower, reducing their probability
export function pickWithMemory<T>(
  pool: T[],
  recentList: string[],
  weightKey?: (item: T) => string
): T {
  let best: T | null = null;
  let bestScore = -Infinity;

  for (let attempt = 0; attempt < 15; attempt++) {
    const candidate = pool[Math.floor(Math.random() * pool.length)];
    const key = weightKey ? weightKey(candidate) : String(candidate);
    const hitCount = countOccurrences(recentList, key);
    // Random base + penalty for recency
    // Each hit reduces probability by 40%
    const score = Math.random() - hitCount * 0.4;
    if (score > bestScore) {
      bestScore = score;
      best = candidate;
    }
  }

  return best!;
}

// Add value to memory (most recent first), trim to max
export function track<T>(list: T[], value: T, max = MAX_MEMORY): void {
  const idx = list.indexOf(value);
  if (idx !== -1) list.splice(idx, 1); // remove if already present
  list.unshift(value); // add to front
  if (list.length > max) list.pop(); // trim
}

// Penalize animal weight by recency hits
export function animalScore(baseWeight: number, recentAnimals: string[], animalKey: string): number {
  const hits = countOccurrences(recentAnimals, animalKey);
  return baseWeight * Math.pow(0.6, hits); // each hit reduces weight by 40%
}