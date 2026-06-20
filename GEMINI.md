# Seed Randomizer Project Navigation & Rules

## 🧭 Project Navigation (The Blueprint)
Our architecture follows a strictly modular separation of concerns. Do **not** put everything in a monolithic file.

```text
seed-randomizer/
├── bin/
│   └── seed-manager.js         # CLI tool to pull/update random seeds
├── data/
│   └── database.json           # The raw seed JSON database
├── agent-1-research.md         # Agent 1: Research Agent
├── agent-2-prompt-maker.md     # Agent 2: Prompt Maker
├── agent-3-qa-director.md      # Agent 3: QA Director
└── MASTER_WORKFLOW_CONTEXT.md  # Shared context between agents
```

## 🛠️ Tool Stack & What We Use It For
1. **Market & Culture (`Exa API`)**: Queries `site:reddit.com`, `site:tiktok.com`, `site:teepublic.com` for cultural vibes and trademark strikes. Available as the `web_search_exa` MCP tool.
2. **Google Search (`Serper API`)**: Gets hard market data, pricing, and marketplace saturation. Available as the `serper_search` MCP tool.
3. **Deep Context (`Tavily API`)**: AI-optimized web search for deep trend research. Available as the `tavily_search` / `tavily_research` MCP tool.
4. **Structured Reasoning (`sequentialthinking`)**: Forces agents to construct logic linearly before outputting final prompts.

## 🛑 What NOT to Add (The ROI Sweet Spot)
Do not add complexity that has low ROI. We avoid:
* **Heavy Job Queues (e.g. Redis, BullMQ)**: Overkill for this scale. Simple JSON file tracking is sufficient.
* **Vector Databases (e.g. ChromaDB, Pinecone)**: Overkill. Web search provides all the cultural mapping needed.
* **Visual/Image Analysis (OpenCV, AI Vision)**: Too heavy. Rely on text research and prompting quality.
* **Headless Browsers (Puppeteer/Playwright)**: Replaced by Exa, Serper, and Tavily APIs to avoid bot blocking.
* **Separate Databases (DuckDB, SQLite)**: At this scale, JSON files for seeds and run archives are simpler and zero-infrastructure.

## 🤖 The Agent Pipelines

We maintain two distinct agent pipelines for different stages of the project.

### 1. The Design Generation Pipeline (Master Workflow)
**Sequential 3-Agent Chain:** Used for creating new designs.
- **Agent 1 (Research)** -> **Agent 2 (Prompt Maker)** -> **Agent 3 (QA Director)**
- **Shared Memory:** `MASTER_WORKFLOW_CONTEXT.md`
- **Goal:** Generate high-intent, printable designs.

## 🛡️ Agent-First Linux Tooling Stack & Safety Rules

**TERMINAL TOOL USAGE RULES:**
1. **Search:** Always use `rg` (ripgrep) instead of `grep`, and `fd` instead of `find`. They are faster and ignore `.gitignore` automatically.
2. **Editing:** NEVER use `sed` or `awk` for file replacement. Always use `sd 'search' 'replace' filename`. It is safer and less prone to syntax errors.
3. **Validation:** If you generate a bash script, you must run `shellcheck` on it before executing it.
4. **JSON/YAML:** Use `jq` or `yq` to read or modify structured config files. Do not use native text editors for structured data.
5. **Introspection:** Use `tree -I 'node_modules|.git'` to understand directory structure, and `stat` to check file permissions before modifying them.

**CODE QUALITY & DEBUGGING PROTOCOL:**
1. **No Silent Failures:** Every script you write that interacts with APIs or the database MUST have `try/catch` blocks.
2. **Structural Review:** If you need to find a pattern (e.g., missing error handling), use `ast-grep` (`sg`), NOT `grep` or `sed`.
3. **Hang Prevention:** If a script does not terminate, run it with `npx wtfnode` to identify the open handle, then fix it. Always use `timeout 10s` for untested scripts.
4. **Schema Truth:** Before marking a coding task as complete, run `git diff --unified=3` on the modified files to verify no unintended logic was destroyed.
