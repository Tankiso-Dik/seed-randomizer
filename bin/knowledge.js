#!/usr/bin/env node
// bin/knowledge.js — Per-animal knowledge store
// Agents write reasoned insights, not raw search dumps.
// Usage: knowledge <init|get|add|list> <animal> [section] [flags...]

'use strict';

const KnowledgeService = require('../lib/KnowledgeService');

function usage() {
  console.log(`
Usage:
  knowledge init <animal>                    Create a new knowledge file
  knowledge get <animal> [section]           Read knowledge (section supports dot: "cultural_profile.vibes")
  knowledge add <animal> <section> [flags]   Add data to a section
  knowledge list                             List animals with knowledge files
  knowledge analyze <animal>                 Run gap analysis on animal knowledge
  knowledge map-culture <animal>             Generate diverse cultural routes


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

function die(msg) { console.error(msg); process.exit(1); }

async function main() {
  const a = parseArgs(process.argv.slice(2));
  const cmd = a._[0], animal = a._[1];

  try {
    switch (cmd) {
      case 'init': {
        if (!animal) die('Usage: knowledge init <animal>');
        KnowledgeService.init(animal);
        console.log(`Created knowledge/${animal}.json`);
        break;
      }
      case 'get': {
        if (!animal) die('Usage: knowledge get <animal> [section]');
        const section = a._[2];
        const val = KnowledgeService.get(animal, section);
        console.log(val !== undefined ? JSON.stringify(val, null, 2) : 'null');
        break;
      }
      case 'add': {
        if (!animal) die('Usage: knowledge add <animal> <section> [flags]');
        const section = a._[2];
        if (!section) die(`Usage: knowledge add <animal> <section> [flags]`);
        const options = { ...a };
        options._ = a._.slice(3);
        KnowledgeService.add(animal, section, options);
        break;
      }
      case 'list': {
        const list = KnowledgeService.list();
        console.log(JSON.stringify(list, null, 2));
        break;
      }
      case 'analyze': {
        if (!animal) die('Usage: knowledge analyze <animal>');
        const data = KnowledgeService.get(animal);
        const GapAnalyzer = require('../lib/GapAnalyzer');
        const report = GapAnalyzer.analyze(data);
        console.log(JSON.stringify(report, null, 2));
        break;
      }
      case 'map-culture': {
        if (!animal) die('Usage: knowledge map-culture <animal>');
        const data = KnowledgeService.get(animal);
        const CulturalMappingEngine = require('../lib/CulturalMappingEngine');
        const routes = CulturalMappingEngine.getDiversityRoutes(data);
        console.log(JSON.stringify(routes, null, 2));
        break;
      }
      default:
        usage();
        break;
    }
  } catch (e) {
    die(e.message || String(e));
  }
}

main();
