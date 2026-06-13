# Seed Randomizer Project Navigation & Rules

## 🧭 Project Navigation (The Blueprint)
Our architecture follows a strictly modular separation of concerns. Do **not** put everything in a monolithic file.

```text
seed-randomizer/
├── seed-mcp/                   # Node.js MCP (The Orchestrator)
│   ├── src/
│   │   ├── index.js            # Entry point: Stdio Server Setup & Tools Definition
│   │   ├── db/
│   │   │   └── duckdb.js       # The Ledger: API Caching & State Management
│   │   └── schemas/            # Zod validation schemas
├── bin/
│   └── seed-manager.js         # CLI tool to pull/update random seeds
├── data/
│   └── database.json           # The raw seed JSON database
├── agent-config.md             # The Master Workflow Skill (5-Phase Protocol)
├── qa-director.md              # The QA Audit Skill
└── README.md
```

## 🛠️ Tool Stack & What We Use It For
1. **Orchestrator**: Node.js MCP Server (Stdio) using `Zod` for schema validation and `Pino` for async logging.
2. **Database (`DuckDB`)**: Local, in-process ledger that handles historical runs, validated directions, IP blacklists, and API caching.
3. **NLP Engine (`natural`)**: Node.js library for N-gram clustering, powered by a **GPT-4o-mini Semantic Refiner** to clean/normalize data.
4. **Google Shopping (`Serper API`)**: Gets hard product data, pricing, and **Format Routing** (determines if the niche is better for stickers vs. shirts).
5. **Market & Culture (`Exa API`)**: Queries `site:teepublic.com`, `site:redbubble.com` for titles and cultural vibes without bot-detection issues, and `site:uspto.gov`/Etsy for trademark strikes.
6. **Hard Intent APIs**: Direct JSON unauthenticated hits for Etsy auto-suggestions and Amazon autocomplete.

## 🛑 What NOT to Add (The ROI Sweet Spot)
Do not add complexity that has low ROI. We avoid:
* **Heavy Job Queues (e.g. Redis, BullMQ)**: `DuckDB` cache is sufficient. We do not need heavy infrastructure.
* **Vector Databases (e.g. ChromaDB, Pinecone)**: Overkill for phrase overlap. Use `natural` N-grams on GPT-refined text.
* **Visual/Image Analysis (OpenCV, AI Vision)**: Too heavy. Rely on text metadata (`ld+json`) and related search clouds.
* **Headless Browsers (Puppeteer/Playwright)**: Replaced by Exa and Serper APIs to avoid Datadome/Cloudflare bot blocking.
* **Python Microservices**: Deleted. The entire orchestrator is a single Node.js process using lightweight REST APIs and DuckDB.

## 🤖 The Agent Review Pipeline (Dual-Track Relay Race)
**Do NOT launch all agents simultaneously.**
The review system operates as a sequential "relay race" over two distinct tracks. Agents must use their search MCPs to research tools (`duckdb`, `exa`, `natural`) and converge their findings into a shared ledger.

**Core Agent Directives:**
1. **Research Documents:** Only use `Qwen-MCP-and-Niche-Research.md`. Ignore old research files.
2. **Orchestrator Context:** Agents must be aware that the frontend orchestrator will be Antigravity CLI (`agy`), communicating via standard I/O (`stdio`).
3. **Shared Ledger:** All agents MUST collaborate on `TOOL_ARCHITECTURE.md`. Use search MCPs to research the tools running this project. Identify if a tool can take a burden, if it gets richer data, or if it is being misused. Append this research to `TOOL_ARCHITECTURE.md` so downstream agents have the "bigger picture."

**The Two Sequential Tracks:**
1. **Track 1: Infrastructure & Source Review:** 
   - Agent 1 (Crawler Inspector) reviews APIs (Exa, Serper, Etsy), logs findings, its "Strategic Intent", and cross-domain dependencies in `TOOL_ARCHITECTURE.md`.
   - Agent 2 (MCP Backend Tester) reviews `index.js`, DuckDB caching, and logs. It manages the relationship with the `agy` config and checks if the tools map to the 5-Phase protocol perfectly. Passes consolidated report to Track 2.
2. **Track 2: Agent Logic & Synthesis:**
   - Agent 3 (Prompt Architect) reads the master workflow `agent-config.md`, the `qa-director.md` skill, and the JSON seed database (`data/database.json`). It cross-references `Qwen-MCP-and-Niche-Research.md` and `TOOL_ARCHITECTURE.md` to ensure the JSON seed traits and MCP responses correctly flow through the 5-Phase Execution Protocol without logic gaps or data loss before reaching the QA Director.
   - Agent 4 (Final Synthesizer) reads `TOOL_ARCHITECTURE.md` and all reports to output the final system evaluation.
3. **Track 3: Workspace & Operations Review:**
   - Agent 5 (Workspace & Operations Director) maintains the global health of the workspace. It checks the operational cohesion of the CLI (`bin/seed-manager.js`), log files, and the "5-Phase Protocol" skills. It ensures `TOOL_ARCHITECTURE.md` correctly informs the Antigravity CLI of all tools and properly monitors the coherence of Agents 1-4 across the pipeline.

## 🛡️ Agent-First Linux Tooling Stack & Safety Rules

**TERMINAL TOOL USAGE RULES:**
1. **Search:** Always use `rg` (ripgrep) instead of `grep`, and `fd` instead of `find`. They are faster and ignore `.gitignore` automatically.
2. **Editing:** NEVER use `sed` or `awk` for file replacement. Always use `sd 'search' 'replace' filename`. It is safer and less prone to syntax errors.
3. **Validation:** If you generate a bash script, you must run `shellcheck` on it before executing it.
4. **JSON/YAML:** Use `jq` or `yq` to read or modify structured config files. Do not use native text editors for structured data.
5. **Introspection:** Use `tree -I 'node_modules|.git'` to understand directory structure, and `stat` to check file permissions before modifying them.

**CODE QUALITY & DEBUGGING PROTOCOL:**
1. **No Silent Failures:** Every script you write that interacts with APIs or the database MUST have `try/catch` blocks and log errors using `pino`.
2. **Structural Review:** If you need to find a pattern (e.g., missing error handling), use `ast-grep` (`sg`), NOT `grep` or `sed`.
3. **Hang Prevention:** If a script does not terminate, run it with `npx wtfnode` to identify the open handle, then fix it. Always use `timeout 10s` for untested scripts.
4. **Schema Truth:** Before querying DuckDB, run `PRAGMA table_info('table_name')` to verify column names. Before declaring code "done", run `npx tsc --noEmit` to ensure zero type errors.
5. **Self-Audit:** Before marking a coding task as complete, run `git diff --unified=3` on the modified files to verify no unintended logic was destroyed.
