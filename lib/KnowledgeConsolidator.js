'use strict';

class KnowledgeConsolidator {
  static consolidate(data) {
    if (!data) return null;

    // 1. Initialize rollup stats if not present
    if (!data.design_rollup_stats) {
      data.design_rollup_stats = {
        total_runs: 0,
        approved_count: 0,
        register_counts: {},
        composition_counts: {}
      };
    }

    // 2. Deduplicate buyer search phrases
    if (Array.isArray(data.buyer_search_phrases)) {
      const phraseMap = new Map();
      for (const item of data.buyer_search_phrases) {
        if (!item.phrase) continue;
        const norm = item.phrase.trim().toLowerCase();
        if (phraseMap.has(norm)) {
          const ex = phraseMap.get(norm);
          ex.times_validated = (ex.times_validated || 1) + (item.times_validated || 1);
          if (item.competition && item.competition !== 'unknown') ex.competition = item.competition;
          ex.suggestions_returned = Math.max(ex.suggestions_returned || 0, item.suggestions_returned || 0);
          if (item.is_main_tag) ex.is_main_tag = true;
        } else {
          phraseMap.set(norm, { ...item });
        }
      }
      data.buyer_search_phrases = [...phraseMap.values()];
    }

    // 3. Roll up and prune design history (limit detailed runs to 15)
    if (Array.isArray(data.design_history)) {
      const MAX_DETAILED_DESIGNS = 15;
      if (data.design_history.length > MAX_DETAILED_DESIGNS) {
        const toRollUp = data.design_history.slice(0, data.design_history.length - MAX_DETAILED_DESIGNS);
        const toKeep = data.design_history.slice(data.design_history.length - MAX_DETAILED_DESIGNS);

        for (const run of toRollUp) {
          data.design_rollup_stats.total_runs++;
          if (run.verdict === 'approved' || run.verdict === 'APPROVED') {
            data.design_rollup_stats.approved_count++;
          }
          if (run.register) {
            const reg = run.register.toLowerCase();
            data.design_rollup_stats.register_counts[reg] = (data.design_rollup_stats.register_counts[reg] || 0) + 1;
          }
          if (run.composition) {
            const comp = run.composition;
            data.design_rollup_stats.composition_counts[comp] = (data.design_rollup_stats.composition_counts[comp] || 0) + 1;
          }
        }

        data.design_history = toKeep;
      }
    }

    // 4. Prune known queries (keep top 20 by use count)
    if (Array.isArray(data.known_queries)) {
      if (data.known_queries.length > 20) {
        data.known_queries.sort((a, b) => (b.use_count || 0) - (a.use_count || 0));
        data.known_queries = data.known_queries.slice(0, 20);
      }
    }

    // 5. Clean up and deduplicate competitor patterns
    if (data.competitor_patterns) {
      if (Array.isArray(data.competitor_patterns.common_tags)) {
        data.competitor_patterns.common_tags = [...new Set(data.competitor_patterns.common_tags.map(t => t.trim().toLowerCase()))];
      }
      if (Array.isArray(data.competitor_patterns.notes)) {
        data.competitor_patterns.notes = [...new Set(data.competitor_patterns.notes.map(n => n.trim()))];
      }
    }

    // 6. Deduplicate used vocabulary and limit array sizes
    if (data.used_vocabulary) {
      const vocabKeys = ['phrases', 'formats', 'compositions', 'pose_energies', 'registers'];
      for (const key of vocabKeys) {
        if (Array.isArray(data.used_vocabulary[key])) {
          const unique = [...new Set(data.used_vocabulary[key].map(v => v.trim()))];
          data.used_vocabulary[key] = unique.slice(-30); // Keep last 30 entries
        }
      }
    }

    return data;
  }
}

module.exports = KnowledgeConsolidator;
