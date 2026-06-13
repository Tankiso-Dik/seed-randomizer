process.env.DOTENV_CONFIG_QUIET = "true";
const { McpServer } = require('@modelcontextprotocol/sdk/server/mcp.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const axios = require('axios');
const fs = require('fs');
const natural = require('natural');
const pino = require('pino');
const crypto = require('crypto');
const { schemas } = require('./src/schemas/tool_schemas.js');
const dbClient = require('./src/db/duckdb.js');

// Must write logs to stderr so we don't corrupt the MCP stdio protocol
const logger = pino({}, pino.destination(2));

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
});

function setupTools(mcp) {
  // DB Ledger Tools
  mcp.tool("db_query_direction", "Queries DuckDB for a validated alternative direction.", schemas.dbQueryDirection.shape, async ({ animal }) => {
    const rows = await dbClient.all('SELECT direction, market_signal_score FROM discovered_directions WHERE animal = ? ORDER BY market_signal_score DESC LIMIT 1', animal);
    return { content: [{ type: "text", text: JSON.stringify(rows && rows.length > 0 ? rows[0] : { direction: null }) }] };
  });

  mcp.tool("db_save_direction", "Saves a new alternative direction to DuckDB.", schemas.dbSaveDirection.shape, async ({ animal, direction, market_signal_score }) => {
    await dbClient.run(`
        INSERT INTO discovered_directions (animal, direction, market_signal_score, discovered_date)
        VALUES (?, ?, ?, current_date())
        ON CONFLICT (animal, direction) DO UPDATE SET market_signal_score = EXCLUDED.market_signal_score, discovered_date = current_date();
    `, animal, direction, market_signal_score);
    return { content: [{ type: "text", text: JSON.stringify({ success: true }) }] };
  });

  mcp.tool("db_log_run", "Logs a completed seed generation run to DuckDB.", schemas.dbLogRun.shape, async ({ animal, direction, viability_score, format }) => {
    await dbClient.run(`
        INSERT INTO seed_runs (animal, direction, viability_score, format, run_date)
        VALUES (?, ?, ?, ?, current_date());
    `, animal, direction, viability_score, format);
    return { content: [{ type: "text", text: JSON.stringify({ success: true }) }] };
  });

  mcp.tool("db_check_ip_blacklist", "Checks if a phrase is in the IP Blacklist.", schemas.dbCheckIpBlacklist.shape, async ({ phrase }) => {
    const rows = await dbClient.all('SELECT reason FROM ip_blacklist WHERE phrase = ?', phrase);
    return { content: [{ type: "text", text: JSON.stringify({ isBlacklisted: rows && rows.length > 0, reason: rows && rows.length > 0 ? rows[0].reason : null }) }] };
  });

  mcp.tool("db_add_ip_blacklist", "Adds a phrase to the IP Blacklist.", schemas.dbAddIpBlacklist.shape, async ({ phrase, reason }) => {
    await dbClient.run(`
        INSERT INTO ip_blacklist (phrase, reason, flagged_date)
        VALUES (?, ?, current_date())
        ON CONFLICT (phrase) DO NOTHING;
    `, phrase, reason);
    return { content: [{ type: "text", text: JSON.stringify({ success: true }) }] };
  });

  // Layer 1: Hard Intent Probes
  mcp.tool("etsy_probe", "Fetch Etsy auto-suggestions for buyer intent.", schemas.etsyProbe.shape, async ({ keyword }) => {
    const cached = await dbClient.getCached(keyword, 'etsy');
    if (cached) return { content: [{ type: "text", text: JSON.stringify(cached) }] };
    try {
        const url = `https://www.etsy.com/suggestions_ajax.php?search_query=${encodeURIComponent(keyword)}`;
        const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
        const results = response.data.results ? response.data.results.map(r => r.query) : [];
        await dbClient.setCache(keyword, 'etsy', results);
        return { content: [{ type: "text", text: JSON.stringify(results) }] };
    } catch(e) {
        return { content: [{ type: "text", text: `Error: ${e.message}`}], isError: true };
    }
  });

  mcp.tool("amazon_probe", "Fetch Amazon auto-suggestions.", schemas.amazonProbe.shape, async ({ keyword }) => {
    const cached = await dbClient.getCached(keyword, 'amazon');
    if (cached) return { content: [{ type: "text", text: JSON.stringify(cached) }] };
    try {
        const searchQuery = keyword.trim().includes(' ') ? keyword : `${keyword} shirt`;
        const url = `https://completion.amazon.com/api/2017/suggestions?mid=ATVPDKIKX0DER&alias=aps&prefix=${encodeURIComponent(searchQuery)}`;
        const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' }, timeout: 10000 });
        const results = response.data.suggestions ? response.data.suggestions.map(s => s.value) : [];
        await dbClient.setCache(keyword, 'amazon', results);
        return { content: [{ type: "text", text: JSON.stringify(results) }] };
    } catch(e) {
        return { content: [{ type: "text", text: `Error: ${e.message}`}], isError: true };
    }
  });

  // Layer 2: Market & Culture Probes


  mcp.tool("serper_shopping_probe", "Query Google Shopping via Serper to get market data and Format Routing.", schemas.serperShoppingProbe.shape, async ({ keyword }) => {
    const cached = await dbClient.getCached(keyword, 'serper_shopping');
    if (cached) return { content: [{ type: "text", text: JSON.stringify(cached) }] };
    try {
        const apiKeys = (process.env.SERPER_API_KEY || "").split(',').map(k => k.trim()).filter(k => k.length > 0);
        if (apiKeys.length === 0) throw new Error("SERPER_API_KEY missing");
        const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];
        const response = await axios.post('https://google.serper.dev/shopping', {
            q: keyword,
            gl: "us",
            hl: "en"
        }, { headers: { 'X-API-KEY': apiKey, 'Content-Type': 'application/json' }});
        
        const items = response.data.shopping || [];
        const uniqueTitles = [...new Set(items.map(item => item.title))].slice(0, 20);
        
        let formatRoute = "t-shirt";
        let stickerCount = items.filter(i => i.title.toLowerCase().includes('sticker')).length;
        if (items.length > 0 && (stickerCount / items.length) > 0.6) {
            formatRoute = "sticker";
        }
        let mugCount = items.filter(i => i.title.toLowerCase().includes('mug')).length;
        if (items.length > 0 && (mugCount / items.length) > 0.6) {
            formatRoute = "mug";
        }

        const payload = { titles: uniqueTitles, formatRoute };
        await dbClient.setCache(keyword, 'serper_shopping', payload);
        return { content: [{ type: "text", text: JSON.stringify(payload) }] };
    } catch(e) {
        return { content: [{ type: "text", text: `Error: ${e.message}`}], isError: true };
    }
  });



  // Layer 3: Processing
  mcp.tool("gpt_refiner", "Normalize and bucket arrays using GPT-4o-mini.", schemas.gptRefiner.shape, async ({ inputs }) => {
    try {
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) throw new Error("OPENAI_API_KEY missing");
        
        const prompt = "You are a Semantic Refiner. I will give you a list of phrases scraped from marketplaces. Your job is to normalize synonyms (e.g., 't-shirt' to 'shirt'), strip out low-value words (e.g. 'gift', 'cheap'), and return the cleaned list as a JSON array of strings.";
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: prompt },
                { role: "user", content: JSON.stringify(inputs) }
            ],
            response_format: { type: "json_object" }
        }, { headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' }});
        
        const cleaned = JSON.parse(response.data.choices[0].message.content);
        return { content: [{ type: "text", text: JSON.stringify(cleaned) }] };
    } catch(e) {
        return { content: [{ type: "text", text: `Error: ${e.message}`}], isError: true };
    }
  });

  mcp.tool("concept_overlap_probe", "Runs natural N-grams on cleaned data.", schemas.conceptOverlap.shape, async ({ inputs }) => {
    const wordCounts = {};
    const clusterCounts = {};
    const tokenizer = new natural.WordTokenizer();

    inputs.forEach(item => {
      const rawWords = tokenizer.tokenize(item.toLowerCase());
      rawWords.forEach(w => {
        wordCounts[w] = (wordCounts[w] || 0) + 1;
      });
      const bigrams = natural.NGrams.ngrams(rawWords, 2) || [];
      bigrams.forEach(bg => {
        const cluster = bg.join(' ');
        clusterCounts[cluster] = (clusterCounts[cluster] || 0) + 1;
      });
    });

    const topWords = Object.entries(wordCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    const topClusters = Object.entries(clusterCounts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    return { content: [{ type: "text", text: JSON.stringify({ topWords, topClusters }) }] };
  });

  // Humor Frameworks and Styles
  mcp.tool("get_humor_framework_examples", "Returns structural examples of comedy archetypes.", schemas.humorFrameworks.shape, async () => {
    const frameworks = [
      "The Reframe (e.g., 'I'm not lazy, I'm on energy-saving mode')",
      "The Confessional (e.g., 'In my defense, I was left unsupervised')",
      "The Subversion (e.g., 'I came. I saw. I made it awkward')",
      "The Bold Label (e.g., 'Professional Overthinker')"
    ];
    return { content: [{ type: "text", text: JSON.stringify(frameworks) }] };
  });

  mcp.tool("get_style_catalog", "Returns a catalog of print-on-demand aesthetics.", schemas.styleCatalog.shape, async () => {
    const catalog = [
      { name: "Screenprint Realism", texture: "light ink grain overlay, subtle halftone in shadow areas" },
      { name: "Y2K Cyber-Grunge", texture: "digital noise, scanlines, chromatic aberration" },
      { name: "Corporate Memphis Irony", texture: "completely flat, vector smooth, zero grain" },
      { name: "Surreal Dreamcore", texture: "heavy digital compression artifacts, JPEG artifacting, scanlines" },
      { name: "Neo-Tactile Scrapbook", texture: "torn paper, staples, tape, spray paint splatter" },
      { name: "Dopamine Gradient Surrealism", texture: "silky, glassmorphic, subtle grain over luminous colors" },
      { name: "Authentic Lo-Fi Sketched", texture: "heavy paper grain, graphite smudges, raw canvas feel" }
    ];
    return { content: [{ type: "text", text: JSON.stringify(catalog) }] };
  });

  return mcp;
}

const mcp = new McpServer({ name: "Seed-MCP", version: "1.0.0" });
setupTools(mcp);

async function startServer() {
  const transport = new StdioServerTransport();
  await mcp.connect(transport);
  logger.info("Seed-MCP Server running on stdio");
}

startServer().catch((error) => {
  logger.error({ err: error.message }, "Failed to start MCP server");
  process.exit(1);
});
