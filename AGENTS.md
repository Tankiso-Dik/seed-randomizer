# 🎨 Design Generation Pipeline (The Master Workflow)

This is the primary operational workflow for generating new designs. It uses a sequential four-agent chain to ensure maximum cultural resonance, technical printability, and platform discoverability.

## 🛠️ The 4-Agent Design Chain
1. **Agent 1: Research Agent** (`agent-1-research.md`)
   - **Start Command:** `node bin/seed-manager.js get-random`
   - **Context passing:** Writes to `MASTER_WORKFLOW_CONTEXT.md`
2. **Agent 2: Prompt Maker** (`agent-2-prompt-maker.md`)
   - **Focus:** Identity Hooks & Phrase Generation.
   - **Context passing:** Reads from and appends to `MASTER_WORKFLOW_CONTEXT.md`
3. **Agent 3: QA Director** (`agent-3-qa-director.md`)
   - **Focus:** Technical Audit, IP Clearance, & Design QA.
   - **Context passing:** Appends Executive Verdict, validated tags, and optimized prompt to `MASTER_WORKFLOW_CONTEXT.md`
4. **Agent 4: SEO Specialist** (`agent-4-seo-specialist.md`)
   - **Focus:** Deep keyword research, platform-specific metadata optimization, competitive gap analysis.
   - **Context passing:** Reads final context from Agent 3, appends polished SEO package, signals pipeline complete.

**Usage:** Invoke these agents sequentially for any new design task. The agents use the available MCP tools (`web_search_exa`, `serper_search`, `tavily_search`, `sequentialthinking`) for research, brainstorming, and validation.
