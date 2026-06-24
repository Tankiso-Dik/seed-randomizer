---
name: master-workflow
description: Starts and consolidates the sequential 4-agent Design Generation Pipeline (Agent 1 -> Agent 2 -> Agent 3 -> Agent 4) for the seed-randomizer project.
---

# Master Workflow Orchestration Skill

This skill starts, drives, and consolidates the **Design Generation Pipeline** (Master Workflow) for the `seed-randomizer` project. 

> [!IMPORTANT]
> **Orchestration & Delegation Protocol:** 
> Do NOT execute the research, prompt making, QA auditing, or SEO optimization steps yourself in your main conversation context. You MUST delegate each stage of the pipeline to the designated specialized subagent in the workflow. 
> For each step, use `define_subagent` to define a new subagent using the system prompt and instructions loaded from the respective markdown file, equip them with write/execution capabilities (`enable_write_tools: true`, `enable_mcp_tools: true`), and launch them using `invoke_subagent`. Wait for each subagent to complete its tasks and write its output to `MASTER_WORKFLOW_CONTEXT.md` before proceeding to the next step.

## 🚀 Execution Steps

1. **Delegate to Agent 1 (Research Agent):**
   - Load instructions from [agent-1-research.md](file:///home/tankisompela/Projects/seed-randomizer/agent-1-research.md).
   - Define and invoke the Research Agent to start the run.
   - The Research Agent will execute `node bin/seed-manager.js get-random` to pull a random seed, run the deep cultural/marketplace searches, and write the Context Brief as a drop-in replacement into [MASTER_WORKFLOW_CONTEXT.md](file:///home/tankisompela/Projects/seed-randomizer/MASTER_WORKFLOW_CONTEXT.md).
   - Wait for the subagent to report completion.

2. **Delegate to Agent 2 (Prompt Maker):**
   - Load instructions from [agent-2-prompt-maker.md](file:///home/tankisompela/Projects/seed-randomizer/agent-2-prompt-maker.md).
   - Define and invoke the Prompt Maker subagent.
   - The Prompt Maker will read the Context Brief from [MASTER_WORKFLOW_CONTEXT.md](file:///home/tankisompela/Projects/seed-randomizer/MASTER_WORKFLOW_CONTEXT.md), run the prompt engineering flow, and append the generated phrases, composition prompts, and style choices to the context file.
   - Wait for the subagent to report completion.

3. **Delegate to Agent 3 (QA Director):**
   - Load instructions from [agent-3-qa-director.md](file:///home/tankisompela/Projects/seed-randomizer/agent-3-qa-director.md).
   - Define and invoke the QA Director subagent.
   - The QA Director will read [MASTER_WORKFLOW_CONTEXT.md](file:///home/tankisompela/Projects/seed-randomizer/MASTER_WORKFLOW_CONTEXT.md), run final IP and design QA checks, and append the Executive Verdict and optimized prompt to the context file.
   - Wait for the subagent to report completion.

4. **Delegate to Agent 4 (SEO Specialist):**
   - Load instructions from [agent-4-seo-specialist.md](file:///home/tankisompela/Projects/seed-randomizer/agent-4-seo-specialist.md).
   - Define and invoke the SEO Specialist subagent.
   - The SEO Specialist will read [MASTER_WORKFLOW_CONTEXT.md](file:///home/tankisompela/Projects/seed-randomizer/MASTER_WORKFLOW_CONTEXT.md), run competitive landscape scans, and append the final SEO and metadata package to the context file.
   - Wait for the subagent to report completion.

5. **Consolidation & Archiving (Orchestrator Role):**
   - Read the finalized [MASTER_WORKFLOW_CONTEXT.md](file:///home/tankisompela/Projects/seed-randomizer/MASTER_WORKFLOW_CONTEXT.md) ledger.
   - Output the complete design concept, optimized prompt, and polished SEO package directly to the user.
   - Archive the run: extract the animal and phrase from the context, then:
     ```bash
     mkdir -p runs
     DIR="runs/$(date +%Y-%m-%d)-<animal>-<phrase>"
     mkdir -p "$DIR" && cp MASTER_WORKFLOW_CONTEXT.md "$DIR/"
     ```
