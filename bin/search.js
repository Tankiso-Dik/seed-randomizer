#!/usr/bin/env node
const SearchService = require('../lib/SearchService');

const cmd = process.argv[2];
const query = process.argv.slice(3).join(' ');

async function main() {
  if (!query) { console.error("Usage: node bin/search.js suggest <query>"); process.exit(1); }

  try {
    const { source, suggestions } = await SearchService.getSuggestions(query);
    console.log(JSON.stringify(suggestions, null, 2));
    if (source === 'cache') {
      console.error(`[cache HIT] "${query}"`);
    } else {
      console.error(`[cache MISS] "${query}" — ${suggestions.length} suggestions`);
    }
  } catch (e) {
    console.error(e.message);
    console.log(JSON.stringify([]));
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
