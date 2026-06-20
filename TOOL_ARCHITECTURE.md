# Shared Tool & Architecture Ledger

This file is a shared, continuously-updated collaboration space for all reviewing agents. As you use your search MCPs to research the tools running this project (`duckdb`, `pino`, `natural`, `exa`, `serper`), you must convergely append and edit this file.

## Purpose of this Ledger
1. **Strategic Intent:** Document what we hope this tool/domain accomplishes. Explain *why* it is here and what its goal is in the larger system.
2. **Cross-Domain Dependencies:** Explain what this tool relies on from other domains or tools. Agents must check if other domains are "meeting their end of the bargain" and not being in the way of its job.
3. **Tool Capabilities:** Document exactly what each tool is capable of, based on your active web research.
4. **Current Usage & Misuse:** Document how the tool is currently being used. If the code isn't relying on the tool properly, or if the tool is being misused, log it here.
5. **Improvement Opportunities:** If the tool has abilities that can take the burden off custom code, improve system resilience, or get richer data, point it out here.
6. **Next.js Seed Validation:** For logic agents, check if the frontend seed traits align with the tool observations, `agent-config.md`, and `Qwen-MCP-and-Niche-Research.md` to ensure downstream execution works perfectly.
7. **Bigger Picture:** Allow downstream agents in the sequential review pipeline to understand *why* everything is here and what is possible.

---

## 🛠️ Tool Research & Capabilities

*(Agents: Append your findings below. Cross-reference each other's work.)*

### DuckDB (The Ledger & API Shield)
* **Capabilities:** Local, serverless, in-process analytical database.
* **Strategic Intent:** Provides a deterministic, robust memory layer replacing fragile LLM context windows or complex knowledge graphs.
* **Current Usage:** 
  - `probe_cache`: Caches raw API responses (Exa, Serper, Etsy) for 7 days to shield API credits. Tested robustly; `getCached` correctly parses payload_json.
  - `discovered_directions`: Stores high-scoring alternative niches discovered during processing for future runs. Self-pruning. Tested via direct insertion; correctly uses `ON CONFLICT` constraints to safely upsert market scores without duplicating rows.
  - `seed_runs`: Logs every completed design run.
  - `ip_blacklist`: Stores phrases flagged by the Exa IP probe to prevent repeated mistakes. Tested to ensure duplicate phrases are ignored cleanly.
* **Cross-Domain Dependencies:** Relies heavily on `initDb()` async startup.
* **Behavior Observations (Agent 2):** DuckDB perfectly acts as a lightweight ledger. Tests confirm robust error handling when tables are empty and reliable caching mechanisms.

### Exa API (Cultural Intelligence)
* **Capabilities:** Neural semantic search engine. Maps cultural queries ("exhausted moth aesthetic") to highly relevant URLs without needing exact keyword matches.
* **Strategic Intent:** Replaces fragile headless browsers (Crawlee/Puppeteer) that constantly hit Datadome/Cloudflare 403 errors. Extracts the "vibe" and competitor titles cleanly, while handling IP safety and finding blue ocean gaps.
* **Cross-Domain Dependencies:** Heavily dependent on `gpt_refiner` to clean its fuzzy/noisy narrative data before the `concept_overlap_probe` can do math on it. It does not replace Etsy/Amazon probes; it complements them by providing the *cultural narrative* while the JSON probes provide *hard metadata*.
* **Current Usage & Integration:**
  - **AVAILABLE AS MCP TOOL:** The workflow uses the `web_search_exa` MCP tool. Agent 1 uses it for deep cultural research (Reddit/TikTok/Tumblr), and Agent 3 uses it for tag validation and trademark checks.
  - This allows the AI greater flexibility to dynamically construct its own `site:reddit.com` or `site:teepublic.com` queries as needed.

### Sequential Thinking MCP
* **Capabilities:** Dynamic and reflective problem-solving tool that manages chained "thoughts" and hypothesis verification.
* **Strategic Intent:** Forces the Prompt Maker (Agent 2) to construct its logic linearly and reflect on context before blurting out a final prompt. It prevents "zero-shot hallucination" by requiring explicit reasoning over the Research Context Brief, ensuring the final joke and composition perfectly align with the intended psychological hooks.
* **Current Usage:** Integrated directly into `agent-2-prompt-maker.md` as a mandatory Step 1.

### Tavily API (Deep Contextual Search)
* **Capabilities:** AI-optimized web search designed specifically for LLMs.
* **Strategic Intent:** Acts as a powerful companion to Exa. While Exa excels at semantic "vibes" and neural mapping of subreddits/TikTok, Tavily is exceptional at pulling structured, factual context and deep-diving into specific trends iteratively.
* **Current Usage:** Available as the `tavily_search` / `tavily_research` MCP tool. Agent 1 uses it for deep contextual searches to build the "Context Brief". Agent 3 uses it to validate supporting tags are actively trending N-grams before outputting the final SEO package.

### Serper API (Market & Format Routing)
* **Capabilities:** Fast, reliable Google Search API.
* **Strategic Intent:** Replaces Google Trends scraping. Provides hard market data (pricing, cross-platform product saturation). Unlocks "Format Routing" to identify whether a niche is best for stickers, mugs, or shirts.
* **Current Usage:** Available as the `serper_search` MCP tool. Agent 1 uses it for marketplace saturation checks (Etsy, Redbubble) and format routing to determine if a niche works better as a shirt or sticker.

### Natural (NLP N-Grams)
* **Capabilities:** Provides rule-based tokenization and N-gram generation (bigrams, trigrams).

### GPT-4o-mini Semantic Refiner
* **Capabilities:** Fast, cheap LLM data normalization.
* **Strategic Intent:** Normalizes synonyms (e.g. "tee" = "shirt") and strips low-value noise better than static regex.
* **Current Usage:** `gpt_refiner` tool normalizes raw arrays before feeding them to the N-gram overlap probe.

### Hard Intent JSON Probes (Etsy & Amazon)
* **Capabilities:** Public autocomplete endpoints. Free, direct JSON fetches.
* **Strategic Intent:** Provides raw buyer phrasing (what people are actually typing). These are the "anchors to reality" that prevent the AI from hallucinating unsearchable niches.
* **Cross-Domain Dependencies:** Independent of AI generation. They act as deterministic counterweights to the fuzzy semantic data provided by Exa. They depend on standard `axios` without requiring headless browsers.
* **Current Usage & Agent 1 Evaluation:** Handled via fast `axios` requests inside the MCP, completely avoiding Playwright.
  - `amazon_probe`: Uses `completion.amazon.com/api/2017/suggestions` with a `" + shirt"` fallback logic. **Agent 1 Verdict:** Highly optimal. Forces the autocomplete to assume a physical apparel intent rather than digital goods or unrelated items.
  - `etsy_probe`: Hits Etsy's internal bespoke autocomplete API. **Agent 1 Verdict:** Optimal. Retrieves direct long-tail search volume signals securely without scrapers.
* **Behavior Observations (Agent 2):** Implemented as fast `axios` fetches with strict timeout rules, completely immune to bot detection. Acts as an "anchor to reality."

### Pino (Asynchronous Logging)
* **Capabilities:** High-performance asynchronous structured JSON logger.
* **Strategic Intent:** Provide robust debugging without blocking the event loop or corrupting the MCP communication channel.
* **Current Usage:** Correctly configured for `stdio` MCP communication using `pino({}, pino.destination(2))` to route logs to `stderr`.
* **Behavior Observations (Agent 2):** Tested runtime; perfectly preserves standard I/O, ensuring orchestration protocols are uncorrupted.

### Zod & Zod-to-JSON-Schema
* **Capabilities:** Schema declaration and validation library.
* **Current Usage:** Properly applied inside the `mcp.tool()` definitions, using `.describe()` effectively to explain fields to the LLM. 
* **Behavior Observations (Agent 2):** Verified that `schemas.*.shape` syntactically matches the `@modelcontextprotocol/sdk` expected format for tool definitions. Zod perfectly types the payloads. 

### MCP Tool Environment
* **Strategic Intent:** Agents use the available MCP tools (`web_search_exa`, `serper_search`, `tavily_search`, `sequentialthinking`) for research, brainstorming, and validation.
* **Available Tools:**
  - `web_search_exa` / `web_fetch_exa` — Neural semantic search (Exa)
  - `serper_search` — Google Search API (Serper)
  - `tavily_search` / `tavily_research` — Deep contextual search (Tavily)
  - `sequentialthinking` — Structured reasoning

### 🎭 Agent Skills & Orchestration Workflows
* **Agent 1: Research Agent (`agent-1-research.md`):** Drives Phase 1. Uses the seed JSON data to execute deep cultural and market research iteratively across Exa and Tavily. Produces the "Context Brief".
* **Agent 2: Prompt Maker (`agent-2-prompt-maker.md`):** Drives Phase 2-4. Uses `sequentialthinking` to construct the "Me Too" Identity Hook, generates phrases, and writes the Master Composition Template following the Flexible Core framework.
* **Agent 3: QA Director (`agent-3-qa-director.md`):** Operates Phase 5. A rigorous legal, visual, and SEO editor.
  - **Strategic Intent:** Enforce strict POD-platform specific optimization before output.
  - **Current Usage:** Verifies the Composition Sanity Check, audits the Master Template to ensure no style rules are broken, uses `web_search_exa` to check for trademark violations on the final phrase, and generates final 1-2 word Main Tags.

---
