#!/usr/bin/env node
// bin/knowledge.js — Per-animal knowledge store
// Agents write reasoned insights, not raw search dumps.
// Usage: knowledge <init|get|add|list> <animal> [section] [flags...]

'use strict';

const fs = require('fs');
const path = require('path');

const KNOWLEDGE_DIR = process.env.KNOWLEDGE_DIR || path.resolve(__dirname, '..', 'knowledge');

const TEMPLATE = {
  cultural_profile: { vibes: [], community_slang: [], viral_contexts: [] },
  registers: {},
  buyer_search_phrases: [],
  ip_clearances: [],
  market_gaps: [],
  competitor_patterns: { common_tags: [], notes: [] },
  known_queries: [],
  design_history: [],
  used_vocabulary: { phrases: [], formats: [], compositions: [], pose_energies: [], registers: [] },
  run_count: 0,
  last_run: null
};

function fp(animal) { return path.join(KNOWLEDGE_DIR, `${animal}.json`); }

function read(animal) {
  const f = fp(animal);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
}

function write(animal, data) {
  const f = fp(animal), tmp = f + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2) + '\n');
  fs.renameSync(tmp, f);
}

function ensureDir() { !fs.existsSync(KNOWLEDGE_DIR) && fs.mkdirSync(KNOWLEDGE_DIR, { recursive: true }); }

function die(msg) { console.error(msg); process.exit(1); }

function usage() {
  console.log(`
Usage:
  knowledge init <animal>                    Create a new knowledge file
  knowledge get <animal> [section]           Read knowledge (section supports dot: "cultural_profile.vibes")
  knowledge add <animal> <section> [flags]   Add data to a section
  knowledge list                             List animals with knowledge files

Sections:
  cultural     Add vibe, slang, or viral context
  register     Add/update register validation
  keyword      Add buyer search phrase
  gap          Add market gap
  clearance    Add IP clearance record
  design       Add design record (auto-tracks used_vocabulary). Flags: --phrase, --composition (e.g. "head_shoulders+below+front_centered"), --pose (e.g. "collapsed"), --register, --taste, --verdict
  query        Add known search query
  competitor   Add competitor tag or note
`);
}

// ── arg parsing ────────────────────────────────────────────────
function parseArgs(argv) {
  const r = { _: [] };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const k = argv[i].slice(2).replace(/-/g, '_');
      if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        r[k] = argv[i + 1]; i++;
      } else { r[k] = true; }
    } else { r._.push(argv[i]); }
  }
  return r;
}

// ── add handlers ───────────────────────────────────────────────
function addCultural(data, a) {
  const c = data.cultural_profile;
  if (a.type === 'vibe' && a.value && !c.vibes.includes(a.value)) c.vibes.push(a.value);
  if (a.type === 'slang' && a.value && !c.community_slang.includes(a.value)) c.community_slang.push(a.value);
  if (a.context) {
    const ex = c.viral_contexts.find(v => v.context === a.context);
    if (ex) {
      if (a.platform) ex.platform = a.platform;
      if (a.virality) ex.virality = a.virality;
    } else {
      c.viral_contexts.push({ context: a.context, platform: a.platform || 'unknown', virality: a.virality || 'medium', first_seen: new Date().toISOString().slice(0, 10) });
    }
  }
}

function addRegister(data, a) {
  if (!a.name) die('--name required for register');
  if (!data.registers[a.name]) {
    data.registers[a.name] = { terms: [], validation_count: 0, confidence: null, last_used: null, platform_demand_confirmed: false };
  }
  const r = data.registers[a.name];
  if (a.term && !r.terms.includes(a.term)) r.terms.push(a.term);
  r.validation_count++;
  if (a.confidence !== undefined) {
    const c = parseInt(a.confidence);
    r.confidence = r.confidence === null ? c : Math.max(r.confidence, c);
  }
  r.last_used = new Date().toISOString().slice(0, 10);
  if (a.platform_demand) r.platform_demand_confirmed = true;
}

function addKeyword(data, a) {
  if (!a.phrase) die('--phrase required for keyword');
  const ex = data.buyer_search_phrases.find(k => k.phrase === a.phrase);
  if (ex) {
    if (a.competition) ex.competition = a.competition;
    if (a.suggestions !== undefined) ex.suggestions_returned = parseInt(a.suggestions);
    if (a.main_tag) ex.is_main_tag = true;
    ex.times_validated = (ex.times_validated || 1) + 1;
  } else {
    data.buyer_search_phrases.push({
      phrase: a.phrase, competition: a.competition || 'unknown',
      suggestions_returned: a.suggestions !== undefined ? parseInt(a.suggestions) : 0,
      is_main_tag: !!a.main_tag,
      first_seen: new Date().toISOString().slice(0, 10), times_validated: 1
    });
  }
}

function addGap(data, a) {
  if (!a.text) die('--text required for gap');
  const ex = data.market_gaps.find(g => g.gap === a.text);
  if (ex) {
    ex.last_validated = new Date().toISOString().slice(0, 10);
    if (!a.closed) ex.still_open = true;
    if (a.closed) ex.still_open = false;
  } else {
    data.market_gaps.push({
      gap: a.text, discovered: new Date().toISOString().slice(0, 10),
      still_open: a.closed ? false : true, last_validated: new Date().toISOString().slice(0, 10)
    });
  }
}

function addClearance(data, a) {
  if (!a.phrase) die('--phrase required for clearance');
  const ex = data.ip_clearances.find(c => c.phrase === a.phrase);
  if (ex) {
    if (a.status) ex.status = a.status;
    if (a.note) ex.note = a.note;
    ex.checked_at = new Date().toISOString().slice(0, 10);
  } else {
    data.ip_clearances.push({
      phrase: a.phrase, status: a.status || 'clear', note: a.note || '',
      checked_at: new Date().toISOString().slice(0, 10)
    });
  }
}

function addDesign(data, a) {
  if (!a.phrase) die('--phrase required for design');
  if (a.composition) {
    const parts = a.composition.split('+');
    const validCrop = ['face_only', 'head_shoulders', 'full_body'];
    const validText = ['below', 'arched_above', 'split_above_below', 'negative_space', 'small_bottom', 'arches_face'];
    const validView = ['front_centered', 'side_profile', 'peering_down', 'action_diagonal'];
    if (parts.length !== 3) die(`Invalid --composition "${a.composition}". Expected 3 parts separated by '+': crop+text_placement+viewpoint.`);
    if (!validCrop.includes(parts[0])) die(`Invalid crop "${parts[0]}". Valid: ${validCrop.join(', ')}.`);
    if (!validText.includes(parts[1])) die(`Invalid text_placement "${parts[1]}". Valid: ${validText.join(', ')}.`);
    if (!validView.includes(parts[2])) die(`Invalid viewpoint "${parts[2]}". Valid: ${validView.join(', ')}.`);
  }
  // pose is now a flexible descriptor, so we do not restrict to a strict enum.
  data.design_history.push({
    run_id: data.run_count + 1, phrase: a.phrase,
    composition: a.composition || null,
    pose: a.pose || null,
    register: a.register || 'unknown',
    taste_score: a.taste !== undefined ? parseInt(a.taste) : null,
    verdict: a.verdict || 'pending'
  });
  if (!data.used_vocabulary.phrases.includes(a.phrase)) data.used_vocabulary.phrases.push(a.phrase);
  if (a.composition && !data.used_vocabulary.compositions.includes(a.composition)) data.used_vocabulary.compositions.push(a.composition);
  if (a.pose) {
    const poses = a.pose.split(',').map(p => p.trim()).filter(Boolean);
    for (const p of poses) {
      if (!data.used_vocabulary.pose_energies.includes(p)) data.used_vocabulary.pose_energies.push(p);
    }
  }
  if (a.register && !data.used_vocabulary.registers.includes(a.register)) data.used_vocabulary.registers.push(a.register);
  data.run_count++;
  data.last_run = new Date().toISOString().slice(0, 10);
}

function addQuery(data, a) {
  const q = a.query || a._[0];
  if (!q) die('--query required');
  const tool = a.tool || 'serper';
  const ex = data.known_queries.find(x => x.query === q && x.tool === tool);
  if (ex) {
    ex.use_count++;
    if (a.quality !== undefined) ex.result_quality = parseInt(a.quality);
  } else {
    data.known_queries.push({ query: q, tool, result_quality: a.quality !== undefined ? parseInt(a.quality) : null, use_count: 1 });
  }
}

function addCompetitor(data, a) {
  if (a.tag && !data.competitor_patterns.common_tags.includes(a.tag)) data.competitor_patterns.common_tags.push(a.tag);
  if (a.note && !data.competitor_patterns.notes.includes(a.note)) data.competitor_patterns.notes.push(a.note);
}

const HANDLERS = {
  cultural: addCultural, register: addRegister, keyword: addKeyword,
  gap: addGap, clearance: addClearance, design: addDesign,
  query: addQuery, competitor: addCompetitor
};

// ── commands ───────────────────────────────────────────────────
function cmdInit(animal) {
  ensureDir();
  if (read(animal)) die(`Knowledge for '${animal}' already exists`);
  write(animal, { animal, ...TEMPLATE });
  console.log(`Created knowledge/${animal}.json`);
}

function cmdGet(animal, a) {
  const data = read(animal) || { animal, ...TEMPLATE };
  const section = a._[0];
  if (!section) { console.log(JSON.stringify(data, null, 2)); return; }
  let val = data;
  for (const p of section.split('.')) {
    if (val && typeof val === 'object') val = val[p];
    else { val = undefined; break; }
  }
  console.log(val !== undefined ? JSON.stringify(val, null, 2) : 'null');
}

function cmdAdd(animal, a) {
  ensureDir();
  const data = read(animal) || { animal, ...TEMPLATE };
  const section = a._[0];
  if (!section || !HANDLERS[section]) die(`Usage: knowledge add <animal> <${Object.keys(HANDLERS).join('|')}> [flags]`);
  HANDLERS[section](data, a);
  write(animal, data);
}

function cmdList() {
  ensureDir();
  const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.json'));
  if (files.length === 0) { console.log('[]'); return; }
  const animals = files.map(f => ({ animal: f.replace('.json', ''), path: path.join(KNOWLEDGE_DIR, f) }));
  console.log(JSON.stringify(animals, null, 2));
}

// ── main ───────────────────────────────────────────────────────
function main() {
  const a = parseArgs(process.argv.slice(2));
  const cmd = a._[0], animal = a._[1];

  switch (cmd) {
    case 'init': if (!animal) die('Usage: knowledge init <animal>'); cmdInit(animal); break;
    case 'get': if (!animal) die('Usage: knowledge get <animal> [section]'); a._.splice(0, 2); cmdGet(animal, a); break;
    case 'add':
      if (!animal) die('Usage: knowledge add <animal> <section> [flags]');
      a._.splice(0, 2);
      cmdAdd(animal, a);
      break;
    case 'list': cmdList(); break;
    default: usage(); break;
  }
}

main();
