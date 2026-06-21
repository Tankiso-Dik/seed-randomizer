---
name: master-workflow
description: Starts and consolidates the sequential 4-agent Design Generation Pipeline (Agent 1 -> Agent 2 -> Agent 3 -> Agent 4) for the seed-randomizer project.
---

# Master Workflow Orchestration Skill

This skill starts, drives, and consolidates the **Design Generation Pipeline** (Master Workflow) for the `seed-randomizer` project. It automates the execution of the sequential four-agent chain: Agent 1 (Research), Agent 2 (Prompt Maker), Agent 3 (QA Director), and Agent 4 (SEO Specialist).

## 🚀 Execution Steps

1. **Trigger Agent 1 (Research Agent):**
   - Start the run by executing `node bin/seed-manager.js get-random` to pull a random seed.
   - Run the research process defined in `agent-1-research.md`. Perform multiple sequential searches (as many as needed) in this exact order to extract the phrase humor framework, gather all SEO keywords, and establish a deeper connection of how these keywords connect:
     1. **Exa MCP (`web_search_exa` with `highlights: true`, `summary: true`, and `include_domains: ["reddit.com", "tiktok.com", "tumblr.com"]`)** (first, multiple searches) to scan niche designs and communities.
     2. **Serper MCP (`serper_search` with `num: 20`, `type: "shopping"`, `gl: "us"`, `hl: "en"`, `location: "United States"`)** (second, multiple searches) to fetch search volumes, intent, and format routing data. Also search `site:etsy.com "[animal]" shirt` or `site:redbubble.com "[animal]"` to gauge saturation.
     3. **Tavily MCP (`tavily_search` with `search_depth: "advanced"` and `include_answer: true`)** (third, multiple searches) to build a deep, contextual synthesis of the **Humor Framework** and compile a **Keyword Cohesion Web**.
   - Write the Context Brief as a drop-in replacement into `MASTER_WORKFLOW_CONTEXT.md`.

2. **Trigger Agent 2 (Prompt Maker):**
   - Read the Context Brief from `MASTER_WORKFLOW_CONTEXT.md`.
   - Run the Art Director prompt engineering flow defined in `agent-2-prompt-maker.md` using the `sequentialthinking` MCP tool.
   - Append the generated phrases, composition prompts, and style choices to `MASTER_WORKFLOW_CONTEXT.md`.

3. **Trigger Agent 3 (QA Director):**
   - Read the compiled context in `MASTER_WORKFLOW_CONTEXT.md`.
   - Run the final checks (including tag validation via `web_search_exa` and `tavily_research`) defined in `agent-3-qa-director.md`.
   - Append the Executive Verdict, IP Clearance, validated tags, and optimized prompt to `MASTER_WORKFLOW_CONTEXT.md`.

4. **Trigger Agent 4 (SEO Specialist):**
   - Read the final context (after Agent 3) from `MASTER_WORKFLOW_CONTEXT.md`.
   - Run deep keyword discovery, competitive gap analysis, and platform-specific optimization defined in `agent-4-seo-specialist.md`.
   - Append the polished SEO package and pipeline completion signal to `MASTER_WORKFLOW_CONTEXT.md`.

5. **Consolidation:**
   - Read the final `MASTER_WORKFLOW_CONTEXT.md` ledger.
   - Outputs the complete design concept, optimized prompt, and polished SEO package directly to the user.
   - Archive the run: extract the animal and phrase from the context, then:
     ```bash
     mkdir -p runs
     DIR="runs/$(date +%Y-%m-%d)-<animal>-<phrase>"
     mkdir -p "$DIR" && cp MASTER_WORKFLOW_CONTEXT.md "$DIR/"
     ```
