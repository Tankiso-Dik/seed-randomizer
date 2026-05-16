# Plan: Fix Controlled Mutation System — Critical/High Issues

## Goal

Fix 5 Critical and 5 High severity issues found in the Controlled Mutation System review. The mutation system (`src/lib/mutation.ts`, `src/lib/seed-engine.ts`) has functional bugs, testability problems, and logic errors that must be resolved before release.

## Architecture Summary

The mutation system fires after angle/aesthetic are set but before composition/density finalize. It can override: angle, aesthetic, composition, density, contrastNote. Only one mutation fires per call (first-wins after shuffled order). The system uses hardcoded rates instead of the `DEFAULT_MUTATION_CONFIG` object.

## Critical/High Issues to Fix

### Phase 1 — Testability Foundation
1. **#3 Inject random function** — Replace direct `Math.random()` with injectable `RandomFn` so mutation logic is deterministic-testable
2. **#4 Bind per-type rates to config** — `roll(0.06)` → `roll(cfg.archetypeInversionRate)`, etc.

### Phase 2 — Functional Bugs
3. **#1 Make pairing_anomaly functional** — Add `angleOverride` or `aestheticOverride` to actually change the seed
4. **#5 Fix restraint vs mutation density priority** — Mutation should not be able to undo restraint's `forSparse` decision
5. **#10 Validate dog_chi in INVERSION_PAIRS** — `dog_chi` is referenced in mutation.ts:122 but not in `ANIMAL_ARCHETYPES`

### Phase 3 — Dead Code Cleanup
6. **#2 Fix applyAestheticCorruption to actually use angle** — The function accepts `angle` param but picks from static list; implement the stated intent or remove dead computation
7. **#6 Remove dead archetypes parameter** — `applyArchetypeInversion` accepts `archetypes` but uses hardcoded INVERSION_PAIRS instead
8. **#7 Remove safeAesthetics Set computation** — Lines 176-179 compute a Set that's never used
9. **#9 Refactor manual memory manipulation to use track()** — seed-engine.ts:151-157 manually splices/unshifts instead of using `track()` abstraction
10. **#8 Make restraint aware of mutation** — Restraint runs pre-mutation but mutation adds novelty layers that restraint doesn't see

## Constraints

- Do not change the public API of `applyMutation()`
- Do not change existing generated seed output format
- Keep mutation fire rate behavior identical (only fix bugs, not probabilities)
- Maintain collection mode suppression behavior

## Verification

- Unit tests for each mutation function with controlled randomness
- Verify pairing_anomaly now produces seed changes
- Verify aesthetic_corruption selects from angle-exclusion list (not random from static list)
- Verify no mutation can override restraint's `forSparse` decision
- All 10 issues must be resolved before closing this plan