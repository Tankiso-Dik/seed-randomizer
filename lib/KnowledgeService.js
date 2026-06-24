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

class KnowledgeService {
  static getDir() {
    return KNOWLEDGE_DIR;
  }

  static fp(animal) {
    return path.join(KNOWLEDGE_DIR, `${animal}.json`);
  }

  static read(animal) {
    const f = this.fp(animal);
    return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : null;
  }

  static write(animal, data) {
    this.ensureDir();
    const KnowledgeConsolidator = require('./KnowledgeConsolidator');
    const consolidated = KnowledgeConsolidator.consolidate(data);
    const f = this.fp(animal);
    const tmp = f + '.tmp';
    fs.writeFileSync(tmp, JSON.stringify(consolidated, null, 2) + '\n');
    fs.renameSync(tmp, f);
  }

  static ensureDir() {
    if (!fs.existsSync(KNOWLEDGE_DIR)) {
      fs.mkdirSync(KNOWLEDGE_DIR, { recursive: true });
    }
  }

  static init(animal) {
    this.ensureDir();
    if (this.read(animal)) {
      throw new Error(`Knowledge for '${animal}' already exists`);
    }
    this.write(animal, { animal, ...TEMPLATE });
    return this.fp(animal);
  }

  static get(animal, section = null) {
    const data = this.read(animal) || { animal, ...TEMPLATE };
    if (!section) {
      return data;
    }
    let val = data;
    for (const p of section.split('.')) {
      if (val && typeof val === 'object') {
        val = val[p];
      } else {
        val = undefined;
        break;
      }
    }
    return val;
  }

  static list() {
    this.ensureDir();
    const files = fs.readdirSync(KNOWLEDGE_DIR).filter(f => f.endsWith('.json'));
    return files.map(f => ({
      animal: f.replace('.json', ''),
      path: path.join(KNOWLEDGE_DIR, f)
    }));
  }

  static add(animal, section, options) {
    this.ensureDir();
    const data = this.read(animal) || { animal, ...TEMPLATE };

    switch (section) {
      case 'cultural':
        this.addCultural(data, options);
        break;
      case 'register':
        this.addRegister(data, options);
        break;
      case 'keyword':
        this.addKeyword(data, options);
        break;
      case 'gap':
        this.addGap(data, options);
        break;
      case 'clearance':
        this.addClearance(data, options);
        break;
      case 'design':
        this.addDesign(data, options);
        break;
      case 'query':
        this.addQuery(data, options);
        break;
      case 'competitor':
        this.addCompetitor(data, options);
        break;
      default:
        throw new Error(`Unknown section: ${section}`);
    }

    this.write(animal, data);
    return data;
  }

  static addCultural(data, a) {
    const c = data.cultural_profile;
    if (a.type === 'vibe' && a.value && !c.vibes.includes(a.value)) c.vibes.push(a.value);
    if (a.type === 'slang' && a.value && !c.community_slang.includes(a.value)) c.community_slang.push(a.value);
    if (a.context) {
      const ex = c.viral_contexts.find(v => v.context === a.context);
      if (ex) {
        if (a.platform) ex.platform = a.platform;
        if (a.virality) ex.virality = a.virality;
      } else {
        c.viral_contexts.push({
          context: a.context,
          platform: a.platform || 'unknown',
          virality: a.virality || 'medium',
          first_seen: new Date().toISOString().slice(0, 10)
        });
      }
    }
  }

  static addRegister(data, a) {
    if (!a.name) throw new Error('--name required for register');
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

  static addKeyword(data, a) {
    if (!a.phrase) throw new Error('--phrase required for keyword');
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

  static addGap(data, a) {
    if (!a.text) throw new Error('--text required for gap');
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

  static addClearance(data, a) {
    if (!a.phrase) throw new Error('--phrase required for clearance');
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

  static addDesign(data, a) {
    if (!a.phrase) throw new Error('--phrase required for design');
    if (a.composition) {
      const parts = a.composition.split('+');
      const validCrop = ['face_only', 'head_shoulders', 'full_body'];
      const validText = ['below', 'arched_above', 'split_above_below', 'negative_space', 'small_bottom', 'arches_face'];
      const validView = ['front_centered', 'side_profile', 'peering_down', 'action_diagonal'];
      if (parts.length !== 3) throw new Error(`Invalid --composition "${a.composition}". Expected 3 parts separated by '+': crop+text_placement+viewpoint.`);
      if (!validCrop.includes(parts[0])) throw new Error(`Invalid crop "${parts[0]}". Valid: ${validCrop.join(', ')}.`);
      if (!validText.includes(parts[1])) throw new Error(`Invalid text_placement "${parts[1]}". Valid: ${validText.join(', ')}.`);
      if (!validView.includes(parts[2])) throw new Error(`Invalid viewpoint "${parts[2]}". Valid: ${validView.join(', ')}.`);
    }
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

  static addQuery(data, a) {
    const q = a.query || (a._ ? a._[0] : null);
    if (!q) throw new Error('--query required');
    const tool = a.tool || 'serper';
    const ex = data.known_queries.find(x => x.query === q && x.tool === tool);
    if (ex) {
      ex.use_count++;
      if (a.quality !== undefined) ex.result_quality = parseInt(a.quality);
    } else {
      data.known_queries.push({ query: q, tool, result_quality: a.quality !== undefined ? parseInt(a.quality) : null, use_count: 1 });
    }
  }

  static addCompetitor(data, a) {
    if (a.tag && !data.competitor_patterns.common_tags.includes(a.tag)) data.competitor_patterns.common_tags.push(a.tag);
    if (a.note && !data.competitor_patterns.notes.includes(a.note)) data.competitor_patterns.notes.push(a.note);
  }
}

module.exports = KnowledgeService;
