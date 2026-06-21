# 🚀 MASTER WORKFLOW: The "Flexible Core" Sequential Agent Pipeline

This workflow defines a clean, sequential four-agent pipeline. 

To execute a full design generation run, orchestrate the following four agents in sequence. Each agent must pass its complete deliverables to the next agent down the chain via the **`MASTER_WORKFLOW_CONTEXT.md`** file to ensure zero context loss.

## 🔗 The Agent Chain

### 🕵️‍♂️ Agent 1: The Research Agent (`agent-1-research.md`)
*   **Trigger:** Provide the command `node bin/seed-manager.js get-random` to start the seed.
*   **Role:** Performs deep cultural and market research using Exa, Serper, and Tavily to extract the phrase humor framework, gather SEO keywords, and establish their connections.
*   **Deliverable:** Writes the **"Context Brief"** to `MASTER_WORKFLOW_CONTEXT.md`.

### 🧠 Agent 2: The Prompt Maker (`agent-2-prompt-maker.md`)
*   **Trigger:** Receives notification that Agent 1 has finished.
*   **Role:** Reads the "Context Brief" from `MASTER_WORKFLOW_CONTEXT.md`. Uses the `sequentialthinking` MCP tool to brainstorm the "Me Too" Identity Hook and generate punchy, spicy phrases.
*   **Deliverable:** Appends the **"Identity Hook," "Approved Phrase," "Style Choices," and the "Master Composition Prompt"** to `MASTER_WORKFLOW_CONTEXT.md`.

### ⚖️ Agent 3: The QA Director (`agent-3-qa-director.md`)
*   **Trigger:** Receives notification [agent-2-prompt-maker](file:///home/tankisompela/Projects/seed-randomizer/agent-2-prompt-maker.md) has finished.
*   **Role:** Reads the full context from `MASTER_WORKFLOW_CONTEXT.md`. Runs the final IP check via `web_search_exa`. Rigorously audits the prompt to ensure NO gradients/3D are present.
*   **Deliverable:** Appends the **Final Executive Verdict, IP Clearance, and Final Optimized Prompt** to `MASTER_WORKFLOW_CONTEXT.md` and hands off to Agent 4.

### 🛍️ Agent 4: The SEO Specialist (`agent-4-seo-specialist.md`)
*   **Trigger:** Receives notification that Agent 3 has finished.
*   **Role:** Reads the full context from `MASTER_WORKFLOW_CONTEXT.md`. Performs competitive landscape scans and keyword gap analysis using Exa and Tavily.
*   **Deliverable:** Appends the **Final SEO & Metadata Package** to `MASTER_WORKFLOW_CONTEXT.md`, creates a consolidated markdown file in `outputs/`, and signals pipeline complete.

---
## 📦 Archiving
When the pipeline completes, the final `MASTER_WORKFLOW_CONTEXT.md` is archived to `runs/YYYY-MM-DD-animal-phrase/` for permanent record-keeping and dedup tracking.

**How to Start:** "Invoke the Master Workflow starting with Agent 1."
