# Shared Tool & Architecture Ledger

This file is a shared, continuously-updated collaboration space for all reviewing agents. As you use your search MCPs to research the tools running this project (`duckdb`, `pino`, `natural`, `exa`, `serper`), you must convergely append and edit this file.

## Purpose of this Ledger
1. **Strategic Intent:** Document what we hope this tool/domain accomplishes. Explain *why* it is here and what its goal is in the larger system.
2. **Cross-Domain Dependencies:** Explain what this tool relies on from other domains or tools. Agents must check if other domains are "meeting their end of the bargain" and not being in the way of its job.
3. **Tool Capabilities:** Document exactly what each tool is capable of, based on your active web research.
4. **Current Usage & Misuse:** Document how the tool is currently being used in `seed-mcp`. If the code isn't relying on the tool properly, or if the tool is being misused, log it here.
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
* **Cross-Domain Dependencies:** Used by the `seed-mcp` tools seamlessly. Relies heavily on `initDb()` async startup.
* **Behavior Observations (Agent 2):** DuckDB perfectly acts as a lightweight ledger. Tests confirm robust error handling when tables are empty and reliable caching mechanisms.

### Exa API (Cultural Intelligence)
* **Capabilities:** Neural semantic search engine. Maps cultural queries ("exhausted moth aesthetic") to highly relevant URLs without needing exact keyword matches.
* **Strategic Intent:** Replaces fragile headless browsers (Crawlee/Puppeteer) that constantly hit Datadome/Cloudflare 403 errors. Extracts the "vibe" and competitor titles cleanly, while handling IP safety and finding blue ocean gaps.
* **Cross-Domain Dependencies:** Heavily dependent on `gpt_refiner` to clean its fuzzy/noisy narrative data before the `concept_overlap_probe` can do math on it. It does not replace Etsy/Amazon probes; it complements them by providing the *cultural narrative* while the JSON probes provide *hard metadata*.
* **Current Usage & Integration:**
  - **DECOUPLED FROM `seed-mcp`:** We have fully removed the custom Exa probes (`exa_marketplace_probe`, `exa_gap_analysis_probe`, `exa_ip_probe`) from the local Node.js backend. 
  - **NATIVE ANTIGRAVITY MCP:** The workflow now relies exclusively on the native `exa` MCP configured natively in the Antigravity CLI environment (using tools like `web_search_exa` and `web_fetch_exa`).
  - This guarantees the Exa searches operate in an environment where the API key is natively managed, preventing local STDIN script crashes, and allows the AI greater flexibility to dynamically construct its own `site:reddit.com` or `site:teepublic.com` queries as needed instead of relying on hardcoded backend routes.

### Sequential Thinking MCP
* **Capabilities:** Dynamic and reflective problem-solving tool that manages chained "thoughts" and hypothesis verification.
* **Strategic Intent:** Forces the Prompt Maker (Agent 2) to construct its logic linearly and reflect on context before blurting out a final prompt. It prevents "zero-shot hallucination" by requiring explicit reasoning over the Research Context Brief, ensuring the final joke and composition perfectly align with the intended psychological hooks.
* **Current Usage:** Integrated directly into `agent-2-prompt-maker.md` as a mandatory Step 1.

### Tavily API (Deep Contextual Search)
* **Capabilities:** AI-optimized web search designed specifically for LLMs.
* **Strategic Intent:** Acts as a powerful companion to Exa. While Exa excels at semantic "vibes" and neural mapping of subreddits/TikTok, Tavily is exceptional at pulling structured, factual context and deep-diving into specific trends iteratively.
* **Current Usage:** Deployed alongside Exa via the native Antigravity CLI as `tavily_search` / `tavily_research`. Agent 1 uses both APIs iteratively to build an airtight "Context Brief".

### Serper API (Market & Format Routing)
* **Capabilities:** Fast, reliable Google Search API.
* **Strategic Intent:** Replaces Google Trends scraping. Provides hard market data (pricing, cross-platform product saturation). Unlocks "Format Routing" to identify whether a niche is best for stickers, mugs, or shirts.
* **Cross-Domain Dependencies:** Relies on DuckDB `probe_cache` to shield API credits. Feeds directly into the Art Director agent's physical constraints (e.g., forcing a 2x2 die-cut sticker prompt instead of a shirt prompt).
* **Current Usage:** `serper_shopping_probe` determines the *Format Route* by analyzing the top 20 Google Shopping results. If >60% are stickers, it outputs `recommended_canvas: "sticker"`.
* **Behavior Observations (Agent 2):** Code correctly implements format routing threshold `(stickerCount / items.length) > 0.6` while gracefully avoiding division by zero if items array is empty. Grabs cross-platform saturation data. Relies on DuckDB `probe_cache` to shield credits.

### Natural (NLP N-Grams)
* **Capabilities:** Provides rule-based tokenization and N-gram generation (bigrams, trigrams).
* **Current Usage:** Correctly implemented in `seed-mcp/index.js` inside the `concept_overlap_probe`. **NOTE:** The complex `natural.PorterStemmer` logic was deleted in favor of a GPT Refiner step. `natural` is now ONLY used for math (N-grams) on pre-cleaned data.

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
* **Behavior Observations (Agent 2):** Tested runtime; perfectly preserves standard I/O for `seed-mcp`, ensuring orchestration protocols are uncorrupted.

### Zod & Zod-to-JSON-Schema
* **Capabilities:** Schema declaration and validation library.
* **Current Usage:** Properly applied inside the `mcp.tool()` definitions, using `.describe()` effectively to explain fields to the LLM. 
* **Behavior Observations (Agent 2):** Verified that `schemas.*.shape` syntactically matches the `@modelcontextprotocol/sdk` expected format for tool definitions. Zod perfectly types the payloads. 

### Hosting & Orchestrator Context (Antigravity CLI - `agy`)
* **Strategic Intent:** Run the MCP tools reliably as a standard I/O process orchestrated by the Antigravity CLI (`agy`).
* **Current Usage/Corrections:** The MCP is instantiated using `StdioServerTransport()` and communicates strictly via standard I/O. All logging is routed to `stderr` to maintain protocol integrity.

### 🎭 Agent Skills & Orchestration Workflows
* **Agent 1: Research Agent (`agent-1-research.md`):** Drives Phase 1. Uses the seed JSON data to execute deep cultural and market research iteratively across Exa and Tavily. Produces the "Context Brief".
* **Agent 2: Prompt Maker (`agent-2-prompt-maker.md`):** Drives Phase 2-4. Uses `sequentialthinking` to construct the "Me Too" Identity Hook, generates phrases, and writes the Master Composition Template following the Flexible Core framework.
* **Agent 3: QA Director (`agent-3-qa-director.md`):** Operates Phase 5. A rigorous legal, visual, and SEO editor.
  - **Strategic Intent:** Enforce strict POD-platform specific optimization before output.
  - **Current Usage:** Verifies the Composition Sanity Check, audits the Master Template to ensure no style rules are broken, uses `web_search_exa` to check for trademark violations on the final phrase, and generates final 1-2 word Main Tags.

---

## 🕵️ Track 1: Data Sources & Implementations Review (Agent 1 - Crawler Inspector)

**1. API Strategy Evaluation (The Decoupling of Exa):**
- **Observation:** Exa API has been completely scrubbed from the `seed-mcp` backend. The system now uses the native `exa` MCP via Antigravity CLI.
- **Verdict:** **Highly Optimal.** Hardcoding Exa probes (`exa_gap_analysis_probe`, `exa_ip_probe`) inside the Node.js backend created rigid query structures that often failed. By relying on the native Antigravity Exa MCP, the orchestrating AI has the freedom to dynamically construct queries (e.g., `site:reddit.com` or `community.etsy.com` for trademark strikes) based on the context of the niche. This significantly improves the system's resilience and adaptability.

**2. Hard Intent Probes (Etsy & Amazon):**
- **Observation:** The `etsy_probe` and `amazon_probe` use fast, unauthenticated `axios` hits to public autocomplete JSON endpoints. They are wrapped in a 7-day DuckDB cache.
- **Verdict:** **Optimal.** These endpoints act as "Anchors to Reality." While Exa provides fuzzy cultural vibes, these probes return exact buyer search intent. Keeping them in the backend is correct because it allows DuckDB to cache the responses and format them neatly, shielding the AI from raw payload overhead.

**3. Serper API (Market & Format Routing):**
- **Observation:** Google Shopping data is queried via Serper to calculate the "Format Route" (e.g., sticker vs. mug).
- **Verdict:** **Optimal.** This is a highly deterministic mathematical operation (`(stickerCount / items.length) > 0.6`). Keeping this in the backend is the correct strategic intent. It takes the burden of counting off the LLM and mathematically forces the downstream Art Director to pivot its physical constraints.

**4. DuckDB Cache & NLP (Natural):**
- **Observation:** DuckDB handles state and `probe_cache` flawlessly for serverless/local environments. The `natural` library is strictly used for mathematical N-gram overlap on text that is *pre-cleaned* by the `gpt_refiner`.
- **Verdict:** **Optimal.** Removing `natural`'s heavy stemming in favor of an LLM refiner prevents the loss of crucial cultural slang. DuckDB acts as the perfect lightweight persistence layer.

**5. Verification of Scraper Purge (Redbubble & Python Trends API):**
- **Observation:** Searched both `seed-randomizer` and `Librechat` repositories. The old `trends-mcp` Python microservice (`pytrends-modern`), Crawlee, and Puppeteer configurations for scraping Redbubble/Teepublic have been entirely eradicated from the active codebase. Only dormant `node_modules` remnants exist.
- **Verdict:** **Optimal.** The system has successfully executed the "Great Deletion" advised by the Qwen architectural research. By completely removing these fragile scraping vectors, the system is now a resilient, pure Node.js/API-driven architecture, eliminating maintenance overhead caused by Datadome/Cloudflare 403 blocks.

---

## 🧠 Track 1: Back-End & Infrastructure Validation (Agent 2 - MCP Tester)

**1. `stdio` Server Transport Validation:**
- **Observation:** Tested the `seed-mcp` logs. Pino successfully routes all diagnostics (like `Seed-MCP Server running on stdio`) to `stderr` using `pino({}, pino.destination(2))`. `process.env.DOTENV_CONFIG_QUIET = "true"` effectively silences `dotenv` console pollution.
- **Strategic Intent:** Prevents the silent corruption of the MCP JSON-RPC protocol caused by third-party packages writing to `stdout`.

**2. API Resiliency & Edge-Case Coverage (Tested in 3 Rounds):**
- **Round 1 (Etsy/Amazon & Bad Inputs):** Simulated white-space and special-character inputs. The MCP gracefully caught an Etsy 403 using standard Axios try/catch blocks and returned `isError: true` without crashing. Amazon handled special characters effectively, returning generic fallbacks.
- **Round 2 (Serper Routing & Errors):** Tested missing and invalid Serper API keys. The `serper_shopping_probe` securely intercepted the errors (403s and missing key assertions) and returned handled JSON. The mathematical routing threshold (`stickerCount / items.length > 0.6`) natively protected against Zero-Division via strict `items.length > 0` checks.
- **Round 3 (Concept Overlap & Empty Arrays):** Passed empty strings and arrays to the `concept_overlap_probe` and `gpt_refiner`. Natural's N-gram correctly returned empty clusters without throwing TypeError, while duplicate inputs cleanly incremented word/cluster frequencies.

**3. DuckDB Cache & Ledger Integrity (Cross-Domain Checks):**
- **Observation:** Verified that while `seed-mcp` is running (e.g., via LibreChat), duckdb tightly locks the local `seed_ledger.duckdb` file to prevent concurrent corruption.
- **Security Check:** Validated the DB logic against SQL injection (e.g., passing `'; DROP TABLE...`). `duckdb.js` wraps its queries securely using DuckDB's parameterized `(?, ?)` operations, safely sanitizing malicious strings inside tools like `db_check_ip_blacklist`.

**4. Conclusion on Architecture:**
- All tools strictly respect the cross-domain accountability checks. DuckDB reliably acts as a fast ledger, Serper accurately extracts format recommendations, and GPT seamlessly prepares text for N-gram tokenization without node-crashing errors. Exa is properly delegated externally.

---

## 🧠 Track 2: Agent Logic & Synthesis Review (Agent 3)

**1. Data Flow & Execution Protocol Validation:**
- **JSON Seed Integrity (Intentional Override):** Verified `data/database.json` contains static `cultural_vibes`, `text_props`, and `actions`. However, `bin/seed-manager.js` explicitly omits these when executing `get-random`, returning only `{ animal, direction }`. This proves the seed workflow is intentionally decoupled from rigid JSON visual traits. Instead, the Art Director uses the new **7th Visual Axis (Meme Subject Format)** and native Exa cultural research to dynamically invent highly specific, asymmetrical postures and props, preventing generic AI output.
- **Workflow Gaps:** The handoff between Phases 1-4 (Art Director in `agent-config.md`) and Phase 5 (QA Director in `qa-director.md`) is perfectly aligned. Both now request exactly 14 supporting tags, and the deep research mandate of Phase 1 feeds directly into highly descriptive prompt generation in Phase 4.

**2. Core Rules Integrity:**
- **Base Garment Contrast:** Fully intact. Phase 3 forces the declaration of "Target Garment Color" before selecting a palette, and Phase 5 rigorously checks the resulting contrast.
- **IP Kill Switch:** Logically bulletproof. `agent-config.md` checks `ip_blacklist` proactively during Phase 1 to prevent reuse of dead concepts, and `qa-director.md` enforces a final clearance check via the native `web_search_exa` MCP + DuckDB in Phase 5, forcing a rewrite on failure.
- **Main Tag Derivation:** Intact and aligned. Phase 5 enforces the 1-2 word limit using the highest-intent N-gram, strictly separating it from the 14 supporting broad/long-tail tags.

**3. Alignment with Track 1 Tool Observations:**
- Track 1 confirmed Exa is decoupled from the Node.js backend and operates natively in the CLI. This perfectly supports the Art Director's Phase 1 "Deep Research Mandate" to construct flexible, dynamic queries (e.g., `site:reddit.com`) to determine the niche's *cultural narrative*, circumventing the static `cultural_vibes` from the database.
- The hard-intent JSON probes (Etsy/Amazon) and Serper format routing verified in Track 1 effectively provide the deterministic physical and market constraints needed before the QA Director runs the "Canvas Suitability" check in Phase 5.
