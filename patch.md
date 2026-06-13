
## 🕵️ Track 1: Data Sources & Implementations Review (Agent 1 - Crawler Inspector)

**1. API Strategy Evaluation (The Decoupling of Exa):**
- **Observation:** Exa API has been completely scrubbed from the `seed-mcp` backend. The system now uses the native `exa` MCP via Antigravity CLI.
- **Verdict:** **Highly Optimal.** Hardcoding Exa probes (`exa_gap_analysis_probe`, `exa_ip_probe`) inside the Node.js backend created rigid query structures that often failed (e.g., trying to scrape `uspto.gov`). By relying on the native Antigravity Exa MCP, the orchestrating AI has the freedom to dynamically construct queries (e.g., `site:reddit.com` or `community.etsy.com` for trademark strikes) based on the context of the niche. This significantly improves the system's resilience and adaptability.

**2. Hard Intent Probes (Etsy & Amazon):**
- **Observation:** The `etsy_probe` and `amazon_probe` use fast, unauthenticated `axios` hits to public autocomplete JSON endpoints. They are wrapped in a 7-day DuckDB cache.
- **Verdict:** **Optimal.** These endpoints act as "Anchors to Reality." While Exa provides fuzzy cultural vibes, these probes return exact buyer search intent. Keeping them in the backend is correct because it allows DuckDB to cache the responses and format them neatly, shielding the AI from raw payload overhead.

**3. Serper API (Market & Format Routing):**
- **Observation:** Google Shopping data is queried via Serper to calculate the "Format Route" (e.g., sticker vs. mug).
- **Verdict:** **Optimal.** This is a highly deterministic mathematical operation (`(stickerCount / items.length) > 0.6`). Keeping this in the backend is the correct strategic intent. It takes the burden of counting off the LLM and mathematically forces the downstream Art Director to pivot its physical constraints.

**4. DuckDB Cache & NLP (Natural):**
- **Observation:** DuckDB handles state and `probe_cache` flawlessly for serverless/local environments. The `natural` library is strictly used for mathematical N-gram overlap on text that is *pre-cleaned* by the `gpt_refiner`.
- **Verdict:** **Optimal.** Removing `natural`'s heavy stemming in favor of an LLM refiner prevents the loss of crucial cultural slang. DuckDB acts as the perfect lightweight persistence layer.

