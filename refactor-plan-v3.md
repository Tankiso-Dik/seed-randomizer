# 🧭 SYSTEM SPEC UPDATE v3 — MCP + SEED + AGENT ARCHITECTURE

---

# 1. 🧬 SEED SYSTEM (Input Layer)

## Purpose
The seed is a **minimal intent launcher**, not a full creative spec.
It defines:
* *what entity we are exploring*
* *what emotional bias we apply*

---

## 1.1 Seed Structure
```json
{
  "animal": "string",
  "direction": "string"
}
```

---

## 1.2 Definitions

### 🐾 Animal (Anchor Identity)
Stable semantic object.
Examples: capybara, raccoon, goose, crow, possum
Role:
* provides visual identity
* defines subject consistency

### 🎛 Direction (Bias Lens)
Single-word emotional or behavioral modifier.
Examples: anxious, chaotic, detached, playful, exhausted, sarcastic
Role:
* does NOT define outcome
* only biases interpretation of MCP signals

---

## 1.3 Seed Rules
* Must always be 1 animal + 1 direction
* Direction must be **universal across animals**
* No archetype lists in seed layer
* No humor frameworks here

---

# 2. 🌐 MCP SYSTEM (External Reality Layer)

## Purpose
MCP = **multi-source perception system**
It does NOT decide outputs.
It returns:
> “how the internet is currently talking about this concept”

---

# 2.1 MCP DESIGN PRINCIPLE
Each MCP tool is: single-source, narrow, repeatable, comparable. Not aggregated.

---

# 2.2 MCP TOOL FAMILY

## 🟢 2.2.1 Google Trends Probe
**Purpose:** demand signals, rising interest, evergreen vs spike detection.

## 🟡 2.2.2 Etsy Phrase Probe
**Purpose:** buyer language, purchase intent framing.

## 🔵 2.2.3 Reddit Meme Probe
**Purpose:** cultural humor patterns, archetype language, meme evolution.

## 🟣 2.2.4 Marketplace Pattern Probe (Redbubble / TeePublic)
**Purpose:** competition mapping, visual trend awareness, validation layer.
**Implementation:** Queries POD platforms using Exa API (`web_search_exa`) to extract competitor designs, tags, and pricing signals without anti-bot blocks.

---

# 2.3 MCP EXECUTION RULE
MCP tools are called independently, in parallel or sequence, never merged internally. Each tool must return **pure signal**, not interpretation.

---

# 3. 🧠 AGENT REASONING LAYER

## Purpose
The agent is NOT a generator first. It is a: **signal reconciler**

---

# 3.1 Agent Input Package
```json
{
  "seed": {},
  "mcp_outputs": {},
  "style_catalog": {},
  "anchor_prompt_rules": {}
}
```

---

# 3.2 Agent Thinking Model
1. **Identify dominant MCP signal**: What is repeated across sources?
2. **Apply Direction Bias**: Direction creates tension or influences framing.
3. **Resolve contradiction**: e.g., MCP = “unbothered” + Direction = “anxious” → internal contradiction humor.
4. **Select visual style**: From style catalog based on readability, meme compatibility, tone match.
5. **Generate output package**.

---

# 4. 🎨 STYLE SYSTEM (Visual Constraint Layer)

## Purpose
Ensures everything looks like it belongs in the same store.

## 4.1 Style Rules
* Screenprint realism default, no photorealism, no 3D, no clutter backgrounds, always thumbnail readable.

## 4.2 Style Selection Logic
Agent chooses style based on: MCP aesthetic signals, emotional tone of direction, readability constraints.

## 4.3 Style Catalog Behavior
Static registry, not expanded at runtime.

---

# 5. 🧾 ANCHOR PROMPT SYSTEM (Global Instruction Layer)

## Purpose
Anchor prompt defines immutable rules for image generation + metadata formatting.

## 5.1 Anchor Prompt Rules
* **Visual rules**: flat colors only, screenprint texture preferred, center mascot dominance, no busy backgrounds.
* **Typography rules**: meme-first readability, bold or handwritten depending on archetype, legible at thumbnail size.
* **Composition rules**: subject always primary focus, text secondary but visible, no competing focal points.
* **Negative constraints**: no photorealism, no 3D, no gradients-heavy rendering, no watermark, signature, clutter.

---

# 6. 🔁 FULL SYSTEM FLOW
SEED → QUERY EXPANSION → MCP TOOL CALLS → AGENT SIGNAL RECONCILIATION → STYLE SELECTION → ANCHOR PROMPT APPLICATION → OUTPUT PACKAGE

---

# 7. 🧨 KEY DESIGN INSIGHT (IMPORTANT)
This system works because: You are NOT generating ideas. You are generating **reconciliations of real-world language signals**.

---

# 8. 🧭 SYSTEM BOUNDARIES (NON-NEGOTIABLE)
* MCP never decides final output
* Seed never contains archetypes
* Agent never invents new style rules
* Style catalog never becomes dynamic
* Anchor prompt always enforces print constraints

---

# ⚙️ SYSTEM IMPLEMENTATION SPEC v1 (MCP + Next.js + Agent Runtime)

# 1. 🧠 HIGH-LEVEL RUNTIME ARCHITECTURE
Next.js (Seed UI) → Agent Runtime (LibreChat) → MCP Server Layer → External APIs

# 2. 🧬 SEED SYSTEM (Next.js Layer)
Output: `{"animal": "capybara", "direction": "anxious"}`. Next.js is only a controlled randomness engine.

# 3. 🌐 MCP SERVER ARCHITECTURE
Single SSE MCP server with multiple isolated tools.

# 4. 🧩 MCP TOOL DEFINITIONS
Stateless, deterministic, no reasoning. Tools like Google Trends, Etsy Phrase, Reddit Meme, Marketplace Probe.

# 5. ⚙️ MCP EXECUTION LAYER
Tools are executed in parallel (`Promise.all()`).

# 6. 🧠 AGENT ORCHESTRATION LAYER (LibreChat)
**Agent Rules**: Do not invent data. Extract repeated phrases, detect tension/contradiction, pick strongest idea, format output.

# 7. 🎨 STYLE SYSTEM INTEGRATION
Agent selects from a static list based on signals.

# 8. 🧾 OUTPUT SCHEMA (FINAL LAYER)
`{ "image_prompt": "string", "title": "string", "main_tag": "string", "supporting_tags": ["string"], "description": "string" }`

---

# ♻️ REFACTORING / SALVAGE PLAN

## 🟢 Keep
* **Animals**: Core anchor identity.
* **Commercial Restraint Logic**: Fallback to sparse phrasing when novelty complexity is too high.
* **Composition Archetypes**: Move to Style Catalog.
* **Color Palettes**: Move to Style Catalog.

## 🟡 Modify
* **Animal Archetype Mapping**: Weaken from hardcoded truth to "starting hypothesis" (`known_traits`).
* **Trend Injectors**: Removed from randomizer; instead detected by MCP.
* **Contrast Notes**: Moved to Agent logic (Agent detects contradiction naturally).

## 🔴 Remove
* **Emotional Angle** (Replaced by single Direction).
* **Phrase Density Randomization** (Agent decides based on novelty count).
* **Hardcoded Theme Lists** (Replaced completely by MCP discovery).
