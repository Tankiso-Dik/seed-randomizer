'use strict';

class GapAnalyzer {
  static analyze(data) {
    if (!data) {
      throw new Error("No data provided for gap analysis");
    }
    const gaps = [];

    // 1. Cultural Vibe check
    const vibes = data.cultural_profile ? data.cultural_profile.vibes : [];
    if (!vibes || vibes.length === 0) {
      gaps.push({
        section: 'cultural',
        severity: 'high',
        message: 'No cultural vibes recorded. Run searches on Reddit/TikTok to identify vibes.',
        query_suggestion: `${data.animal} meme reddit`
      });
    }

    // 2. Slang check
    const slang = data.cultural_profile ? data.cultural_profile.community_slang : [];
    if (!slang || slang.length === 0) {
      gaps.push({
        section: 'cultural',
        severity: 'medium',
        message: 'No community slang registered. Search TikTok for slang terms.',
        query_suggestion: `${data.animal} slang TikTok`
      });
    }

    // 3. Keyword phrases check
    const phrases = data.buyer_search_phrases || [];
    if (phrases.length < 10) {
      gaps.push({
        section: 'keyword',
        severity: 'high',
        message: `Under 10 seed-specific buyer search phrases registered (currently: ${phrases.length}). Gather at least 10-15 phrases.`,
        query_suggestion: `${data.animal} shirt Etsy`
      });
    }

    // 4. Register validation confidence check
    const registers = data.registers || {};
    const registerNames = Object.keys(registers);
    if (registerNames.length === 0) {
      gaps.push({
        section: 'register',
        severity: 'high',
        message: 'No emotional registers registered. Brainstorm registers (e.g. anxious, smug, cozy) and validate them.',
        query_suggestion: `${data.animal} personality memes`
      });
    } else {
      for (const name of registerNames) {
        const reg = registers[name];
        if (reg.confidence === null || reg.confidence === undefined) {
          gaps.push({
            section: 'register',
            severity: 'medium',
            message: `Register "${name}" has no confidence score. Validate it through searches and log a confidence.`,
            query_suggestion: `${name} ${data.animal} meme`
          });
        }
      }
    }

    // 5. Competitor patterns check
    const competitor = data.competitor_patterns || {};
    const notes = competitor.notes || [];
    if (notes.length === 0) {
      gaps.push({
        section: 'competitor',
        severity: 'medium',
        message: 'No competitor notes registered. Scan competitor listings and log tags/notes.',
        query_suggestion: `${data.animal} Redbubble`
      });
    }

    // 6. IP Clearance check
    const clearances = data.ip_clearances || [];
    if (clearances.length === 0) {
      gaps.push({
        section: 'clearance',
        severity: 'medium',
        message: 'No trademark or IP clearances registered. Perform Exa searches and verify safety.',
        query_suggestion: `"${data.animal} shirt" USPTO`
      });
    }

    return {
      animal: data.animal,
      gaps_found: gaps.length,
      gaps
    };
  }
}

module.exports = GapAnalyzer;
