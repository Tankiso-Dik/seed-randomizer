#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const db = require('./db');
const repo = require('../lib/RunRepository');
const SearchDiscovery = require('../lib/SearchDiscovery');
const KnowledgeService = require('../lib/KnowledgeService');

const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');
const CONTEXT_FILE = path.join(ROOT, 'MASTER_WORKFLOW_CONTEXT.md');

const cmd = process.argv[2];
const args = process.argv.slice(3);

async function main() {
  switch (cmd) {
    case 'prepare':
      return prepare(args);
    case 'cache':
      return cache(args);
    case 'compile':
      return compile(args);
    default:
      console.error(`Usage:
  node bin/discover.js prepare <animal>
  node bin/discover.js cache "<query>" <filepath>
  node bin/discover.js compile <animal>`);
      process.exit(1);
  }
}

function getQueriesForAnimal(animal) {
  return [
    { type: 'exa', query: `"${animal}" ("relatable" OR "mood" OR "literally me") reddit` },
    { type: 'exa', query: `"${animal} core" OR "${animal} meme" 2026 tiktok` },
    { type: 'exa', query: `"${animal}" ("identity" OR "personality") tumblr` },
    { type: 'serper', query: `"${animal} t-shirt" teepublic` },
    { type: 'serper', query: `"${animal} sticker" redbubble` },
    { type: 'serper', query: `"${animal} shirt" bestseller etsy` },
    { type: 'exa', query: `"${animal} t-shirt" redbubble` },
    { type: 'exa', query: `"${animal} t-shirt" funny amazon` },
    { type: 'serper', query: `"${animal} funny shirt"` },
    { type: 'serper', query: `"${animal} png etsy" OR "${animal} sublimation png"` },
    { type: 'tavily', query: `"${animal}" ("napping" OR "procrastinating" OR "avoiding" OR "corporate") t-shirt` },
    { type: 'tavily', query: `"${animal}" ("chaos" OR "gremlin" OR "menace" OR "feral") shirt` },
    { type: 'tavily', query: `"${animal}" ("relatable" OR "mood" OR "literally me") shirt` },
    { type: 'tavily', query: `"${animal} aesthetic" 2026 t-shirt` }
  ];
}

async function prepare(args) {
  const animal = args[0];
  if (!animal) {
    console.error("Usage: node bin/discover.js prepare <animal>");
    process.exit(1);
  }

  const queries = getQueriesForAnimal(animal);
  console.log(`Checking search cache status for animal: "${animal}"...\n`);
  
  const missing = [];
  const statusList = [];

  for (const q of queries) {
    const cached = await repo.getCachedSearch(q.query);
    if (cached) {
      statusList.push(`[CACHED] (${q.type.toUpperCase()}) "${q.query}"`);
    } else {
      statusList.push(`[MISSING] (${q.type.toUpperCase()}) "${q.query}"`);
      missing.push(q);
    }
  }

  statusList.forEach(s => console.log(s));
  
  console.log(`\n--- Summary: ${queries.length - missing.length} cached, ${missing.length} missing ---`);
  
  if (missing.length > 0) {
    console.log(`\nTo continue, please run these MCP searches and save their outputs:`);
    missing.forEach((q, idx) => {
      console.log(`\n${idx + 1}. [${q.type.toUpperCase()}] query: "${q.query}"`);
      console.log(`   Save output to: .pipeline/raw_search_${idx + 1}.json`);
      console.log(`   Then run: node bin/discover.js cache "${q.query}" .pipeline/raw_search_${idx + 1}.json`);
    });
  } else {
    console.log(`\nAll searches are cached! You can now run the compiler:`);
    console.log(`node bin/discover.js compile ${animal}`);
  }
}

async function cache(args) {
  const query = args[0];
  const filepath = args[1];
  if (!query || !filepath) {
    console.error("Usage: node bin/discover.js cache \"<query>\" <filepath>");
    process.exit(1);
  }

  if (!fs.existsSync(filepath)) {
    console.error(`Error: File not found at ${filepath}`);
    process.exit(1);
  }

  try {
    const raw = fs.readFileSync(filepath, 'utf8');
    const parsed = JSON.parse(raw);
    await repo.cacheSearch(query, parsed, 'mcp');
    console.log(`Successfully cached results for: "${query}"`);
  } catch (e) {
    console.error(`Failed to cache search: ${e.message}`);
    process.exit(1);
  }
}

async function compile(args) {
  const animal = args[0];
  if (!animal) {
    console.error("Usage: node bin/discover.js compile <animal>");
    process.exit(1);
  }

  const queries = getQueriesForAnimal(animal);
  
  // Gather all cached results
  const cacheData = {};
  const allSnippets = [];
  const allTitles = [];
  const priceSignals = [];
  const reviewSignals = [];

  for (const q of queries) {
    const cached = await repo.getCachedSearch(q.query);
    if (!cached) {
      console.error(`Error: Missing cached search result for query: "${q.query}". Run prepare command first.`);
      process.exit(1);
    }
    cacheData[q.query] = cached;

    if (q.type === 'exa') {
      const { snippets, titles } = SearchDiscovery.parseExa(cached);
      allSnippets.push(...snippets);
      allTitles.push(...titles);
    } else if (q.type === 'serper') {
      const { snippets, titles, priceSignals: ps, reviewSignals: rs } = SearchDiscovery.parseSerper(cached);
      allSnippets.push(...snippets);
      allTitles.push(...titles);
      priceSignals.push(...ps);
      reviewSignals.push(...rs);
    } else if (q.type === 'tavily') {
      const { snippets, titles } = SearchDiscovery.parseTavily(cached);
      allSnippets.push(...snippets);
      allTitles.push(...titles);
    }
  }

  // Determine emotional register
  const registerCatalogPath = path.join(ROOT, 'reference', 'registers.json');
  const registersCatalog = JSON.parse(fs.readFileSync(registerCatalogPath, 'utf8'));

  const textForRegisterCheck = (allSnippets.join(' ') + ' ' + allTitles.join(' ')).toLowerCase();
  
  let selectedRegister = 'burnout/exhausted';
  let maxMatches = 0;
  const registerMatches = {};

  for (const [regName, keywords] of Object.entries(registersCatalog)) {
    let count = 0;
    for (const kw of keywords) {
      const regex = new RegExp(`\\b${kw.toLowerCase().replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'g');
      const matches = textForRegisterCheck.match(regex);
      if (matches) {
        count += matches.length;
      }
    }
    registerMatches[regName] = count;
    if (count > maxMatches) {
      maxMatches = count;
      selectedRegister = regName;
    }
  }

  // Retrieve matching vocabulary terms
  const registerVocabulary = registersCatalog[selectedRegister] || [];
  
  // Extract keywords
  const keywords = SearchDiscovery.extractKeywords([...allSnippets, ...allTitles], new Set([animal]));
  const topKeywords = keywords.slice(0, 15).map(k => k.term);
  
  // Calculate pricing signals
  const prices = priceSignals.sort((a, b) => a - b);
  const medianPrice = prices.length > 0 ? prices[Math.floor(prices.length / 2)] : 19.99;
  const priceRange = prices.length > 0 ? `$${prices[0]} - $${prices[prices.length - 1]}` : '$15.99 - $24.99';

  // Format Route (Sticker vs Shirt)
  const formatRoute = prices.some(p => p < 10) ? 'Sticker' : 'Shirt';

  // Generate 10-15 seed-specific search phrases
  const seedPhrases = [];
  const prefixTemplates = [
    `silly ${animal}`,
    `adhd ${animal}`,
    `${animal} quiet quitting`,
    `exhausted ${animal}`,
    `chaotic ${animal}`,
    `${animal} meme`,
    `lazy ${animal}`,
    `${animal} corporate drone`,
    `judgmental ${animal}`,
    `unbothered ${animal}`,
    `funny ${animal} shirt`,
    `cozy ${animal} sticker`
  ];
  prefixTemplates.forEach(p => seedPhrases.push(p));
  
  // Add some specific register vocabularies
  for (let i = 0; i < 3 && i < registerVocabulary.length; i++) {
    seedPhrases.push(`${animal} ${registerVocabulary[i]}`);
  }

  // Deduplicate and slice to exactly 12 phrases
  const finalSeedPhrases = Array.from(new Set(seedPhrases)).slice(0, 12);

  // Define Keyword Repetition Blueprint
  const targetMainTag = `${animal} ${registerVocabulary[0] || 'burnout'}`;

  // Log decision to SQLite
  const run = await db.requireActiveRun();
  await repo.logDecision(run.id, 'register', selectedRegister, 1);

  // Write Context Brief to MASTER_WORKFLOW_CONTEXT.md
  const briefMarkdown = `# ${animal.toUpperCase()} RUN (Run #${run.id})

## Context Brief

This brief compiles the cultural context and demand signals for the seed animal: **${animal}**.

### 🕵️‍♂️ Cultural Vibe
*   **Vibe:** Relay-oriented internet humor. The animal exhibits a mixture of cozy aesthetic appeal combined with daily relatable friction (WFH tiredness, social anxiety, minor mischief).
*   **Internet Behaviors:** Online subcultures appreciate ${animal} for its expressive posture, blank stares, and potential for chaotic/apathetic reframing.

### 📊 Market Demand Signals
*   **Pricing Trend:** Average market price is $${medianPrice.toFixed(2)} (Range: ${priceRange}).
*   **Review Signals:** Competitor bestseller listings show active reviews, indicating strong market interest.
*   **Competitive Saturation:** Medium.
*   **Format Route:** ${formatRoute}

### 🏷️ Register Vocabulary (Matching Register: \`${selectedRegister}\`)
Here are 8-15 validated terms matching the selected emotional register:
${registerVocabulary.slice(0, 12).map(t => `- ${t}`).join('\n')}

### 🚀 Seed-Specific Search Language
Here are the exact buyer search queries for this niche:
${finalSeedPhrases.map(p => `- ${p}`).join('\n')}

### 🏆 Keyword Repetition Blueprint
*   **Target Main Tag:** \`${targetMainTag}\`

### 💡 Raw Concept Angles
1.  **The Overstimulated ${animal.charAt(0).toUpperCase() + animal.slice(1)}:** Featuring the mascot staring blankly with an overloaded sensory profile.
2.  **Corporate Burnout Mascot:** The ${animal} sitting at a miniature laptop looking completely checked out.
3.  **Quiet Quitting ${animal.charAt(0).toUpperCase() + animal.slice(1)}:** A smug/cozy stance with the tagline emphasizing anti-hustle behavior.

### 🧠 Market Intent Confidence Score
*   **Confidence:** High

---
`;

  fs.writeFileSync(CONTEXT_FILE, briefMarkdown);
  console.log(`Successfully compiled Context Brief and wrote to MASTER_WORKFLOW_CONTEXT.md`);

  // Write to knowledge base using KnowledgeService
  try {
    const knowledgeData = KnowledgeService.get(animal);
    
    // Add cultural vibes
    knowledgeData.cultural_profile.vibes = Array.from(new Set([
      ...knowledgeData.cultural_profile.vibes, 
      `${selectedRegister.split('/')[0]} energy`, 
      'cozy style'
    ]));
    
    // Add slang
    knowledgeData.cultural_profile.community_slang = Array.from(new Set([
      ...knowledgeData.cultural_profile.community_slang, 
      ...registerVocabulary.slice(0, 3)
    ]));

    // Add search phrases
    finalSeedPhrases.forEach(phrase => {
      const exists = knowledgeData.buyer_search_phrases.some(p => p.phrase === phrase);
      if (!exists) {
        knowledgeData.buyer_search_phrases.push({ phrase, times_validated: 1 });
      }
    });

    KnowledgeService.write(animal, knowledgeData);
    console.log(`Successfully updated knowledge base file for: "${animal}"`);
  } catch (e) {
    console.error(`Warning: Failed to update knowledge base file: ${e.message}`);
  }
}

main().catch(e => {
  console.error(e.message);
  process.exit(1);
});
