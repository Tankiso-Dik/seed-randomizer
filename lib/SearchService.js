'use strict';

const { execSync } = require('child_process');
const repo = require('./RunRepository');

class SearchService {
  static async getSuggestions(query) {
    if (!query) {
      throw new Error("Query is required");
    }

    // Check cache first
    const cached = await repo.getCachedSearch(query);
    if (cached !== null) {
      return { source: 'cache', suggestions: cached };
    }

    // Cache miss — run curl
    const url = `https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(query)}`;
    try {
      const raw = execSync(`curl -s "${url}"`, { timeout: 10000, encoding: 'utf-8' });
      let suggestions = [];
      try {
        const parsed = JSON.parse(raw);
        suggestions = parsed[1] || [];
      } catch {
        suggestions = [];
      }

      // Store in cache
      await repo.cacheSearch(query, suggestions, 'curl');
      return { source: 'network', suggestions };
    } catch (e) {
      throw new Error(`curl failed: ${e.message}`);
    }
  }
}

module.exports = SearchService;
