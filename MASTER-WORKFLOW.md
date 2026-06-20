# 🚀 MASTER WORKFLOW: The "Flexible Core" Sequential Agent Pipeline

This workflow replaces the old monolithic `agent-config.md` and `qa-director.md` with a clean, sequential three-agent pipeline. 

To execute a full design generation run, orchestrate the following three agents in sequence. Each agent must pass its complete deliverables to the next agent down the chain via the **`MASTER_WORKFLOW_CONTEXT.md`** file to ensure zero context loss.

## 🔗 The Agent Chain

### 🕵️‍♂️ Agent 1: The Research Agent (`agent-1-research.md`)
*   **Trigger:** Provide the command `node bin/seed-manager.js get-random` to start the seed.
*   **Role:** Performs deep cultural and market research. Tells the agent to use Exa (first), then Serper, and then Tavily (multiple searches each) to extract the phrase humor framework, gather SEO keywords, and establish a deeper connection of how these keywords connect.
*   **Deliverable:** Writes the **"Context Brief"** to `MASTER_WORKFLOW_CONTEXT.md`.

### 🧠 Agent 2: The Prompt Maker (`agent-2-prompt-maker.md`)
*   **Trigger:** Receives notification that Agent 1 has finished.
*   **Role:** Reads the "Context Brief" from `MASTER_WORKFLOW_CONTEXT.md`. Uses the `sequentialthinking` MCP tool to brainstorm the "Me Too" Identity Hook and generate punchy, spicy phrases.
*   **Deliverable:** Appends the **"Identity Hook," "Approved Phrase," "Style Choices," and the "Master Composition Prompt"** to `MASTER_WORKFLOW_CONTEXT.md`.

### ⚖️ Agent 3: The QA Director (`agent-3-qa-director.md`)
*   **Trigger:** Receives notification that Agent 2 has finished.
*   **Role:** Reads the full context from `MASTER_WORKFLOW_CONTEXT.md`. Runs the final IP check via `web_search_exa`. Rigorously audits the prompt to ensure NO gradients/3D are present.
*   **Deliverable:** Appends the **Final Executive Verdict, IP Clearance, Final Optimized Prompt, and Final SEO Package** to `MASTER_WORKFLOW_CONTEXT.md` and outputs to the user.

---
## 📦 Archiving
When the pipeline completes, the final `MASTER_WORKFLOW_CONTEXT.md` is archived to `runs/YYYY-MM-DD-animal-phrase/` for permanent record-keeping and dedup tracking.

**How to Start:** "Invoke the Master Workflow starting with Agent 1."
