#!/usr/bin/env node
const { execSync } = require('child_process');
const db = require('./db');

const cmd = process.argv[2];
const query = process.argv.slice(3).join(' ');

async function main() {
  if (!query) { console.error("Usage: node bin/search.js suggest <query>"); process.exit(1); }

  const d = await db.getDb();

  // Check cache first
  const stmt = d.prepare("SELECT result_json FROM search_cache WHERE query = ?");
  stmt.bind([query]);
  if (stmt.step()) {
    const cached = stmt.getAsObject();
    stmt.free();
    const parsed = JSON.parse(cached.result_json);
    console.log(JSON.stringify(parsed, null, 2));
    console.error(`[cache HIT] "${query}"`);
    return;
  }
  stmt.free();

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
    const insert = d.prepare("INSERT OR REPLACE INTO search_cache (query, result_json, source) VALUES (?, ?, 'curl')");
    insert.run([query, JSON.stringify(suggestions)]);
    insert.free();
    db.save();

    console.log(JSON.stringify(suggestions, null, 2));
    console.error(`[cache MISS] "${query}" — ${suggestions.length} suggestions`);
  } catch (e) {
    console.error(`curl failed: ${e.message}`);
    console.log(JSON.stringify([]));
  }
}

main().catch(e => { console.error(e.message); process.exit(1); });
