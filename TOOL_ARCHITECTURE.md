# Tool Architecture & Agent Workflows

This file documents the tools available to the design pipeline agents and how they're used.

## Tool Stack

### Exa API (`web_search_exa`)
- **Capabilities:** Neural semantic search engine. Maps cultural queries to highly relevant URLs without exact keyword matches.
- **Purpose:** Pulls cultural "vibes", competitor titles, and marketplace saturation across Reddit, TikTok, Tumblr, TeePublic, and Redbubble.
- **Used By:** Agent 1 (deep cultural research on Reddit/TikTok/Tumblr subcultures), Agent 3 (trademark checks, tag validation, oversaturation checks), Agent 4 (competitive landscaping).

### Serper API (`serper_search`)
- **Capabilities:** Fast, reliable Google Search API.
- **Purpose:** Hard market data — pricing, cross-platform product saturation.
- **Used By:** Agent 1 (marketplace saturation checks on Etsy/Redbubble, format routing).

### Tavily API (`tavily_search`)
- **Capabilities:** AI-optimized web search designed for LLMs. Deep contextual search with answer extraction.
- **Purpose:** Complements Exa — excels at pulling structured factual context and deep-diving into specific trends iteratively.
- **Used By:** Agent 1 (deep contextual searches for the Context Brief), Agent 3 (tag validation against recent cultural discussions).

### Sequential Thinking (`sequentialthinking`)
- **Capabilities:** Dynamic reflective problem-solving with chained thought management and hypothesis verification.
- **Purpose:** Forces agents to construct logic linearly before outputting final prompts. Prevents "zero-shot hallucination" by requiring explicit reasoning over the research context.
- **Used By:** Agent 2 (mandatory Step 1 — maps out concept before phrase/prompt generation), Agent 3 (mandatory Step 0 — audits context coherence across the pipeline).

## The 4-Agent Pipeline

1. **Agent 1 (Research):** Runs `node bin/seed-manager.js get-random` to pull a seed animal. Performs deep cultural/market research using Exa → Serper → Tavily. Writes Context Brief to `MASTER_WORKFLOW_CONTEXT.md`.

2. **Agent 2 (Prompt Maker):** Reads Context Brief. Uses `sequentialthinking` to brainstorm the "Me Too" Identity Hook. Generates phrases from the 8 Formats. Writes the Master Composition Prompt. Appends to `MASTER_WORKFLOW_CONTEXT.md`.

3. **Agent 3 (QA Director):** Reads full pipeline context. Uses `sequentialthinking` for audit. Checks IP/trademark. Enforces style rules (Bold Mascot, Vintage Screen Print, 8 Formats, Prop Rules). Appends verdict to `MASTER_WORKFLOW_CONTEXT.md`.

4. **Agent 4 (SEO Specialist):** Reads validated context from Agent 3. Conducts deep keyword discovery and platform-specific mapping. Generates the final SEO package and writes consolidated output files to the `outputs/` folder.

## Archiving

Completed runs are saved to `runs/YYYY-MM-DD-animal-phrase/` for permanent record-keeping and dedup tracking.
