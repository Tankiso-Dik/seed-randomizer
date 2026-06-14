<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# 🤖 Agent Review Pipeline (The Dual-Track Relay Race)

We have transitioned from a simultaneous POD Evolution Swarm to a **Sequential Review Pipeline**.
Agents MUST pass detailed context to the next agent in line, forming a cohesive chain of reasoning.

## 📚 Core Review Materials (Available to All Agents)
1. **Research Documents:** Agents 1 & 2 ONLY rely on `Qwen-Rebuild-Advice.md`. Agent 3 ONLY relies on `Qwen-MCP-and-Niche-Research.md`. Omit all older research files.
2. **Orchestrator Context:** Agents must be aware that the frontend orchestrating this MCP will be Antigravity CLI (`agy`) acting via standard I/O (`stdio`).
3. **Shared Ledger:** All agents MUST collaborate on `TOOL_ARCHITECTURE.md`. Use search MCPs (like `context7` or web search) to research `duckdb`, `exa`, `serper`, `natural`, `pino`, etc. Append capabilities, misuses, and optimization opportunities to this file.

## 🛤️ The Two Sequential Tracks

### Track 1: The Infrastructure & Source Review
1. **Crawler & Source Inspector**
   - **Focus:** Reviews data sources (Teepublic via Exa, Google Shopping via Serper, Etsy/Amazon JSON endpoints) and the implementations. MUST always evaluate if the specific API queries (e.g. `exa_gap_analysis_probe`, `exa_ip_probe`) are the optimal choice for the system's goals and logic.
   - **Action:** Uses search MCPs to research tools. Updates `TOOL_ARCHITECTURE.md` with capabilities, its "Strategic Intent" (what we hope this accomplishes), and verifies cross-domain dependencies (checking if other domains are in the way of its job). Passes report down.
2. **MCP API & Backend Tester**
   - **Focus:** Reviews `seed-mcp/index.js`, the `stdio` server transport logic, the `duckdb` caching layer, `zod`, and `pino`. Manages the relationship with the Antigravity (`agy`) CLI integration.
   - **Action:** Performs at least 3 rounds of different tests for all MCP tool calls to thoroughly cover edge cases. Verifies that the `seed-mcp` works as a robust `stdio` process, and that the DuckDB ledger is functioning correctly. Updates `TOOL_ARCHITECTURE.md` with its behavior observations, its "Strategic Intent", and cross-domain accountability checks. Combines with Crawler report, passes down.

### Track 2: The Agent Logic & Synthesis Review
*(Begins when Track 1 finishes)*
3. **Skill & Prompt Architect (Agent 3)**
   - **Focus:** Reads the new sequential pipeline definitions (`agent-1-research.md`, `agent-2-prompt-maker.md`, `agent-3-qa-director.md`), the `MASTER-WORKFLOW.md`, and the JSON seed database (`data/database.json`).
   - **Action:** Cross-references `Qwen-MCP-and-Niche-Research.md` and `TOOL_ARCHITECTURE.md`. Verifies that the JSON seed traits and MCP responses correctly flow through the new "Flexible Core" Execution Protocol without logic gaps or data loss before reaching the QA Director. Specifically checks that the "Me Too Identity Hook", "Master Composition Template", and "Phrase Generation Rules" are intact. Updates the review chain.
4. **The Final Synthesizer (Agent 4)**
   - **Focus:** The master consolidation. Reads `TOOL_ARCHITECTURE.md` and the accumulated Track 1 & 2 reports.
   - **Action:** Produces the final, unified "System Evolution Blueprint" ensuring tools take the maximum burden off custom code.

### Track 3: The Workspace & Operations Review
*(Begins when Track 2 finishes)*
5. **Workspace & Operations Director (Agent 5)**
   - **Focus:** Maintains the global health of the workspace against all system goals.
   - **Action:** 
     1. Validates the cohesion of all CLI tools (`bin/seed-manager.js`), loggers (`usage_analytics.jsonl` / complaints), and local agent prompt files (`agent-1-research.md`, `agent-2-prompt-maker.md`, `agent-3-qa-director.md`).
     2. Cross-references `TOOL_ARCHITECTURE.md` to ensure the orchestrator (Antigravity CLI) correctly understands which tools exist and how to use them.
     3. Reviews the operational coherence of Agents 1-4 in the `review-power` pipeline, ensuring they are looking at the right files and pulling logic consistently.
     4. Finalizes the workspace state and signs off on the pipeline run.

# 🎨 Design Generation Pipeline (The Master Workflow)

This is the primary operational workflow for generating new designs. It uses a sequential three-agent chain to ensure maximum cultural resonance and technical printability.

## 🛠️ The 3-Agent Design Chain
1. **Agent 1: Research Agent** (`agent-1-research.md`)
   - **Start Command:** `node bin/seed-manager.js get-random`
   - **Context passing:** Writes to `MASTER_WORKFLOW_CONTEXT.md`
2. **Agent 2: Prompt Maker** (`agent-2-prompt-maker.md`)
   - **Focus:** Identity Hooks & Phrase Generation.
   - **Context passing:** Reads from and appends to `MASTER_WORKFLOW_CONTEXT.md`
3. **Agent 3: QA Director** (`agent-3-qa-director.md`)
   - **Focus:** Technical Audit & IP Clearance.
   - **Context passing:** Finalizes `MASTER_WORKFLOW_CONTEXT.md`

**Usage:** Invoke these agents sequentially via Antigravity CLI (`agy`) for any new design task.