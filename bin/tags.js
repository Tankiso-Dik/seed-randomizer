#!/usr/bin/env node
// bin/tags.js — Tag validation for Agent 4.
// Checks tag rules that are frequently violated:
//   40/30/30 split, banned terms, register purity, length, duplicates.
// Usage: tags validate --register "a,b,c" --best-fit "d,e" --proven "f,g" --main-tag "x" --animal "y"

'use strict';

const BANNED = ['vector', 'illustration', 'clipart', 'png', 'svg', 'digital art', 'drawing',
  'graphic', 'design', 'artwork', 't-shirt', 'shirt', 'sticker', 'hoodie', 'apparel',
  'present', 'merch'];

// Allowed in Proven Territory but banned in Register/Best-Fit
const GENERIC_BANNED_REGISTER_BF = ['cute', 'cartoon', 'funny', 'cool', 'kawaii', 'vintage', 'retro'];

function usage() {
  console.log(`
Usage:
  tags validate \\
    --register "tag1, tag2, ..." \\
    --best-fit "tag1, tag2, ..." \\
    --proven "tag1, tag2, ..." \\
    --main-tag "..." \\
    --animal "..."

Outputs structured JSON with per-check pass/fail.
`);
}

function parseArgs(argv) {
  const r = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const k = argv[i].slice(2).replace(/-/g, '_');
      if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        r[k] = argv[i + 1]; i++;
      } else { r[k] = true; }
    }
  }
  return r;
}

function split(v) { return v ? v.split(',').map(s => s.trim()).filter(Boolean) : []; }

function root(tag) {
  return tag.toLowerCase().replace(/s$/, '').replace(/[^a-z0-9 ]/g, '').trim();
}

function checkBanned(tags, bucket) {
  const failed = [];
  const genericAllowed = bucket === 'proven';
  for (const t of tags) {
    const low = t.toLowerCase();
    for (const b of BANNED) {
      if (low.includes(b)) { failed.push(t); break; }
    }
    if (!genericAllowed) {
      for (const g of GENERIC_BANNED_REGISTER_BF) {
        if (low === g) { failed.push(t); break; }
      }
    }
  }
  return failed;
}

function validate(args) {
  const register = split(args.register);
  const bestFit = split(args.best_fit);
  const proven = split(args.proven);
  const mainTag = (args.main_tag || '').trim().toLowerCase();
  const animal = (args.animal || '').trim().toLowerCase();
  const all = [...register, ...bestFit, ...proven];
  const total = register.length + bestFit.length + proven.length;
  const checks = [];

  // 1. Ratio check (40/30/30 ±5%)
  if (total > 0) {
    const rPct = Math.round(register.length / total * 100);
    const bPct = Math.round(bestFit.length / total * 100);
    const pPct = Math.round(proven.length / total * 100);
    const ratioPass = Math.abs(rPct - 40) <= 5 && Math.abs(bPct - 30) <= 5 && Math.abs(pPct - 30) <= 5;
    checks.push({
      name: 'ratio_40_30_30', pass: ratioPass,
      detail: `${register.length}/${bestFit.length}/${proven.length} (${rPct}%/${bPct}%/${pPct}%)`,
      note: ratioPass ? '' : `Target 40/30/30 ±5%. Got ${rPct}%/${bPct}%/${pPct}%`
    });
  } else {
    checks.push({ name: 'ratio_40_30_30', pass: true, detail: 'no tags to validate' });
  }

  // 2. Banned terms per bucket
  const bannedR = checkBanned(register, 'register');
  const bannedBF = checkBanned(bestFit, 'best_fit');
  const bannedP = checkBanned(proven, 'proven');
  const allBanned = [...bannedR, ...bannedBF, ...bannedP];
  checks.push({
    name: 'banned_terms', pass: allBanned.length === 0,
    detail: allBanned.length ? allBanned.join(', ') : 'none found',
    note: allBanned.length ? `Remove banned terms: ${allBanned.join(', ')}` : ''
  });

  // 3. Register purity: no animal name
  if (animal && register.length) {
    const impure = register.filter(t => t.toLowerCase().includes(animal));
    checks.push({
      name: 'register_no_animal', pass: impure.length === 0,
      detail: impure.length ? impure.join(', ') : 'all clean',
      note: impure.length ? `Register tags cannot mention the animal: ${impure.join(', ')}` : ''
    });
  } else {
    checks.push({ name: 'register_no_animal', pass: true, detail: animal ? 'no register tags' : 'no animal specified' });
  }

  // 4. Register purity: no gift/product terms
  const giftProductTerms = ['gift', 'present', 'shirt', 't-shirt', 'sticker', 'hoodie'];
  const impureGift = register.filter(t => giftProductTerms.some(g => t.toLowerCase().includes(g)));
  checks.push({
    name: 'register_no_gift_terms', pass: impureGift.length === 0,
    detail: impureGift.length ? impureGift.join(', ') : 'all clean',
    note: impureGift.length ? `Register tags cannot contain gift/product terms: ${impureGift.join(', ')}` : ''
  });

  // 5. Best-Fit: 2+ words
  const shortBF = bestFit.filter(t => t.split(/\s+/).length < 2);
  checks.push({
    name: 'best_fit_min_words', pass: shortBF.length === 0,
    detail: shortBF.length ? shortBF.join(', ') : 'all 2+ words',
    note: shortBF.length ? `Best-Fit tags must be 2+ words: ${shortBF.join(', ')}` : ''
  });

  // 6. Tag length: ≤20 chars
  const long = all.filter(t => t.length > 20);
  checks.push({
    name: 'tag_length_max_20', pass: long.length === 0,
    detail: long.length ? long.join(', ') : 'all under 20',
    note: long.length ? `Tags exceed 20 characters: ${long.join(', ')}` : ''
  });

  // 7. Main Tag not duplicated in supporting tags
  if (mainTag) {
    const duped = all.filter(t => t.toLowerCase() === mainTag);
    checks.push({
      name: 'main_tag_not_in_supporting', pass: duped.length === 0,
      detail: duped.length ? duped.join(', ') : 'not duplicated',
      note: duped.length ? `Main tag "${mainTag}" found in supporting tags — remove duplicate` : ''
    });
  } else {
    checks.push({ name: 'main_tag_not_in_supporting', pass: true, detail: 'no main tag specified' });
  }

  // 8. No duplicate tags across buckets
  const seen = new Set();
  const dupes = [];
  for (const t of all) {
    const low = t.toLowerCase();
    if (seen.has(low)) dupes.push(t);
    seen.add(low);
  }
  checks.push({
    name: 'no_duplicate_tags', pass: dupes.length === 0,
    detail: dupes.length ? dupes.join(', ') : 'none found',
    note: dupes.length ? `Duplicate tags: ${dupes.join(', ')}` : ''
  });

  // 9. Root word repetition
  const roots = new Map();
  for (const t of all) {
    const r = root(t);
    if (!r) continue;
    if (roots.has(r)) roots.get(r).push(t);
    else roots.set(r, [t]);
  }
  const repeated = [...roots.entries()].filter(([, tags]) => tags.length > 1);
  checks.push({
    name: 'no_root_word_repetition', pass: repeated.length === 0,
    detail: repeated.length ? repeated.map(([r, tags]) => `${r}: ${tags.join(', ')}`).join('; ') : 'none found',
    note: repeated.length ? `Root words repeated: ${repeated.map(([r]) => r).join(', ')}` : ''
  });

  // 10. Gift tag count (≥2 across any bucket)
  const giftTags = all.filter(t => t.toLowerCase().includes('gift'));
  checks.push({
    name: 'gift_tag_minimum', pass: giftTags.length >= 2,
    detail: `${giftTags.length} gift tag(s): ${giftTags.join(', ') || 'none'}`,
    note: giftTags.length < 2 ? `Need at least 2 gift tags, found ${giftTags.length}` : ''
  });

  const passed = checks.filter(c => c.pass).length;
  const result = { pass: passed === checks.length, total: checks.length, passed, failed: checks.length - passed, checks };
  console.log(JSON.stringify(result, null, 2));
  process.exit(result.pass ? 0 : 1);
}

function main() {
  const a = parseArgs(process.argv.slice(2));
  const cmd = a._ ? a._[0] : null;
  if (!cmd || cmd === 'help' || cmd === 'validate') {
    if (!a.register && !a.best_fit && !a.proven) { usage(); return; }
    validate(a);
  } else {
    console.error(`Unknown command: ${cmd}. Use: tags help`);
    process.exit(1);
  }
}

main();
