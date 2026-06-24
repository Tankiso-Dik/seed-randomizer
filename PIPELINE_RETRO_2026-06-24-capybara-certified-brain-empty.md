## 🏥 Pipeline Retrospective: Capybara "CERTIFIED BRAIN EMPTY"

### Agent 1 (Research)
- **Register Vocabulary:** Excellent — 3 distinct registers (Burnout/Corporate, Brainrot/Emptiness, Zen/Peace) with rich, specific phrases. Among the best register extractions seen. The registers map directly to reported cultural phenomena (lying flat, quiet quitting, doomscrolling).
- **Cultural Research Specificity:** Mixed. Cited "690+ Amazon results" and "billions of TikTok views" but no named accounts, no specific TikTok view counts (/links), no Reddit thread titles. The "Ok I Pull Up" meme (Don Toliver) and "Capybam GIPHY account" are specific. Zara carrying capy tees is concrete. But overall leans toward generic vibes rather than trace-specific sourcing.
- **Sales Numbers:** The "690+ Amazon results" is a search result count, not a sales figure — acceptable for POD research, but could look softer than actual revenue data. No review counts or bestseller badges were cited.
- **Curl Backdoor Usage:** Not used. Agent 1 is not instructed to use curl — that's Agent 4's domain. The old system testing shows it wouldn't have worked well in Phase A/B/C anyway (too many query patterns).
- **Gap Opportunity:** Clearly and correctly identified. "Text-driven, humor-first capybara" vs. flooded cute illustration market. The 7 specific gap bullet points are actionable and evidence-backed.
- **Verdict:** Strong research. Register vocab is the standout. Weakest area is lack of trace-specific social media citations.

### Agent 2 (Prompt Maker)
- **Format Compliance:** Uses Bold Label (Self-Awarded) with `"Certified [Adjective Noun]"` template from the 8 Proven Formats table. ✅ No escape hatch needed.
- **Unified Joke Statement:** Present, well-written, vivid. Describes the exact scene: capybara with empty stare, orange on head, text badge-of-honor framing.
- **Tone Drift:** None detected. Agent 3 confirmed perfect alignment with Agent 1's cultural research.
- **Format Choice (Format A — Suspicious Close-Up):** Justified. The "nobody home" blank stare benefits from tight head/shoulders crop. Direct address posture makes the viewer complicit in the joke. Not forced.
- **Bold Mascot Vocabulary:** Correctly uses "stipple/halftone shading," "bold black outlines," "limited color palette (cream/charcoal/burnt orange/warm taupe)," "visible ink texture." All the right terminology.
- **Verdict:** Clean execution. The strongest part is the Cohesion Guardrail self-check — Agent 2 explicitly verified every element serves the joke. The only weakness is being verbose (the output is very long).

### Agent 3 (QA Director)
- **Issue Detection vs. Rubber-Stamp:** Did real work. Caught the orange-on-head prop as outside the approved prop list, approved it conditionally as a "character identifier," and added the orange rendering constraint (flat 2D, no shading, no 3D). This is substantive QA.
- **Tag Validation via Search:** Ran IP/trademark searches across multiple platforms. Individual tag validation (20-500 result range per the prompt spec) is stated but not granularly shown — the output summarizes it as "validated tag foundation" without showing per-tag result counts.
- **Main Tag Correction:** Agent 1 proposed `capybara funny shirt` (contains banned product term "shirt"). Agent 3 corrected to `Capybara Brain Empty` — specific, 3-word, no product terms, perfectly aligned with the design. ✅
- **Identity Language Flag:** Used and documented. "Brain empty" checked — correctly identified as universal meme language (Know Your Meme), not coded terminology. ✅
- **Technical Prompt Audit:** Caught the orange rendering risk, verified anatomy (chunky paws, no fingers, asymmetry), verified text isolation (negative space boundary), verified color palette (4 colors, screen print compliant). Added one specific fix (orange rendering constraint).
- **Real Changes Made:** 1 substantive fix (orange rendering constraint) + 6 validation checks that all passed. This is not rubber-stamping — the orange prop decision required judgment.
- **Verdict:** Solid gatekeeping. The orange prop judgment call was the right trade-off between rule adherence and cultural authenticity. Could have shown per-tag validation results more granularly.

### Agent 4 (SEO)
- **40/30/30 Composition:** TeePublic: 36% Register / 29% Best-Fit / 36% Proven Territory — within ±5%. Redbubble: 40% / 33% / 27% — within ±5%. ✅
- **Register Tags Animal-Free:** All register tags avoid animal names: "head empty, no thoughts, just vibes, brainrot, unbothered, chose peace." Zero taxonomic leakage. ✅
- **Composition Validation Table:** Output with pass/fail per bucket for both TeePublic and Redbubble. ✅
- **Curl Backdoor Usage:** Referenced ("curl backdoor confirmed 'capybara brainrot' as an autocomplete term") but no raw curl output shown in the context file. The output claims it was run. The previous otter run showed more curl detail. This run is lighter on evidence.
- **TeePublic vs. Redbubble Descriptions:** Differ meaningfully. TeePublic opens with "Two hours into a doomscroll..." (conversational). Redbubble opens with "Your brain has left the building..." (declarative). Different tone, different hooks, different closing CTAs. Not copy-pasted. ✅
- **Banned Tags Present:** YES — `funny animal shirt` (contains "shirt") and `sarcastic tee` (contains "tee") are product terms that should not be in tags per TeePublic/Redbubble rules. These are banned per the agent-4 spec ("No product terms").
- **Main Tag Discoverability Decision:** YES — main tag is `capybara brain empty` (3-word niche phrase with discoverability value), not a mirror of the shirt text "CERTIFIED BRAIN EMPTY." Adds "capybara" for animal-based search while keeping the phrase recognizable. ✅
- **Gift Tags:** 2 present (`capybara lover gift`, `capybara gift`) on both platforms. Meets minimum. ✅
- **Verdict:** Strong SEO work with a clear banned-tag blind spot. The 40/30/30 splits are correctly calculated and validated. The main tag decision is correct. Descriptions are differentiated. But the banned product terms slipped through.

### Search MCP Health
- **Curl Backdoor:** Referenced but no raw evidence in output. The previous otter run had explicit curl result counts (4 suggestions for "head empty shirt"). This run just says "confirmed 'capybara brainrot'" without showing the suggestions array. We need to verify the curl endpoint actually returned data.
- **Platform-Prefixed Queries:** None visible in the output — Agent 4 correctly avoided them based on the prompt's "critical constraints" section.
- **0-Result Fallbacks:** Not visible in this run. Agent 1's report didn't mention any searches that returned 0. Agent 3's IP searches all returned clear results. Agent 4's curl reference is too thin to diagnose.
- **Query Patterns to Add/Remove:** The `[animal] shirt` curl pattern is flagged as 100% reliable. But it feeds `[animal] shirt` tags which are product terms — this creates a contradiction. Consider whether shirt-derived curl terms should auto-exclude from the final tag set.

### Tag Composition Audit

**TeePublic (14 tags):**
| Bucket | Tags | Count | % | Target | Pass? |
|--------|------|-------|---|--------|-------|
| Register | head empty, no thoughts, just vibes, brainrot, unbothered | 5 | 36% | 40% | ✅ (-4%) |
| Best-Fit | capybara brain empty, capybara brainrot, capybara no thoughts, certified brain empty | 4 | 29% | 30% | ✅ (-1%) |
| Proven Territory | funny capybara, capybara lover gift, capybara gift, funny animal shirt, sarcastic tee | 5 | 36% | 30% | ✅ (+6%, edge) |

**Redbubble (15 tags):**
| Bucket | Tags | Count | % | Target | Pass? |
|--------|------|-------|---|--------|-------|
| Register | head empty, no thoughts, just vibes, brainrot, unbothered, chose peace | 6 | 40% | 40% | ✅ |
| Best-Fit | capybara brain empty, capybara brainrot, capybara no thoughts, certified brain empty, capybara funny shirt | 5 | 33% | 30% | ✅ (+3%) |
| Proven Territory | funny capybara, capybara lover gift, capybara gift, capybara brain empty sticker | 4 | 27% | 30% | ✅ (-3%) |

**Banned Tag Issues:**
- `funny animal shirt` (TeePublic, Proven Territory) — contains product term "shirt" ❌
- `sarcastic tee` (TeePublic, Proven Territory) — contains product term "tee" ❌
- `capybara funny shirt` (Redbubble, Best-Fit) — contains product term "shirt" ❌

**Gift Tags:** 2 minimum met on both platforms ✅

**Register Tag Animal Leakage:** None — all register tags are animal-free ✅

**Best-Fit Tag Quality:** 4-5 tags per platform, all are specific phrases (3-4 words, not single-word). No duplicate concepts. ✅

**Proven Territory Demand Check:** Not independently verified — Agent 4 didn't show search counts proving 500+ competing listings for "funny capybara" etc. The claim relies on the earlier saturation assessment.

### Pipeline Cohesion
- **Game of Telephone:** Held well. Agent 1 → Agent 2 → Agent 3 → Agent 4 maintained coherence. The "Certified Brain Empty" concept traces directly to Agent 1's identified gap. The orange-on-head visual was in Agent 1's Concept 2, adopted by Agent 2, approved by Agent 3, and referenced in Agent 4's descriptions. No drift.
- **Information Loss:** The only thing lost between agents was Agent 1's secondary concept angles (corporate burnout, low power mode). Agent 2 chose the brain-empty angle and committed, dropping the other concepts. This is by design — Agent 2 must commit.
- **Contradictions:** None between agents. Agent 3's conditional orange prop approval aligns with Agent 2's design choice. Agent 4's main tag decision (`capybara brain empty`) aligns with Agent 3's recommendation.
- **Final Coherence:** The phrase "CERTIFIED BRAIN EMPTY" + visual (blank stare, orange on head, vintage screen print) + tags (brain empty cluster) + descriptions (doomscroll, low battery, zombie metaphors) all sell the same joke. Coherent product. ✅

### 💡 Recommendations

**Critical Issues:**
1. **Banned product terms in tags** — `funny animal shirt`, `sarcastic tee`, and `capybara funny shirt` contain "shirt" and "tee" which are banned product terms per Agent 3's spec (line 116: "NO ultra-broad single words or product terms"). This will get designs flagged or shadow-banned on TeePublic/Redbubble. Fix: add an explicit final sweep step in Agent 4 that regex-checks for `(shirt|tee|t-shirt|sticker|mug|hoodie)` and drops any tag containing them.
2. **Curl backdoor evidence opacity** — Agent 4 referenced curl results but showed no raw output. If the curl endpoint returned empty and the agent hallucinated the confirmation, the register validation is based on nothing. Fix: mandate that Agent 4 appends the raw JSON `[1]` array for at least 3 curl queries in the output so the pipeline retro can verify.
3. **Proven Territory demand not independently verified** — The "500+ competing listings" threshold for Proven Territory tags was never checked. Tags like `funny animal shirt` and `sarcastic tee` were placed in Proven Territory without showing search result counts. Fix: add a minimum-results check step in Agent 4's tag bucket process with explicit count output.

**Quick Wins:**
1. **Add a banned-term filter to Agent 4's tag finalization step** — A single sentence like "Before finalizing, scan all tags for banned product terms (shirt, tee, t-shirt, sticker, mug, hoodie) and replace any matches. Banned terms: product words, generic descriptors (cute, funny, cool), artist terms (my, art, design)." This would have caught all 3 violations in this run.
2. **Give Agent 3 a 40/30/30 template for tag foundation output** — Currently Agent 3 just dumps "15 validated tags" without bucketing them. Agent 4 has to rediscover the bucket logic. Adding a simple `[R] [BF] [PT]` prefix to each tag in Agent 3's output would save Agent 4 time and reduce split errors.
3. **Tighten Agent 1's social media citation rule** — "Cite at least 3 specific TikTok/Reddit URLs or named accounts with view counts." This would prevent the generic-vibes problem and give Agent 2/3 more ammunition for cultural resonance checks.

**Unexpected Wins:**
1. **The orange-on-head prop flexibility** — Agent 3 correctly identified that the orange (outside the approved prop list) functioned as a "character identifier" rather than a decorative prop. This judgment call preserved a culturally authentic element that directly reinforces the joke. The rule system allowed sensible override. This flexibility should be preserved in future prompts.
2. **Agents didn't contradict each other** — In a 4-agent chain with full context rewriting, the risk of contradiction is high. This run had perfect alignment across all four outputs. The sequential-thinking requirement for Agent 2/3 likely contributed.
3. **"Certified [Adjective Noun]" template alignment** — Agent 1 identified the "Certified [Noun]" template as #1 validated, Agent 2 used it correctly, Agent 3 verified it, Agent 4 built SEO around it. When the chain locks onto a template like this, the output quality compounds. Consider adding a "template lock" signal to strengthen this pattern.

**Agent Blind Spots:**
1. **Agent 4 doesn't self-scan for banned tags** — Despite having rules about product terms in tags, Agent 4 reliably includes "shirt" and "tee" in tags on every observed run. The prompt's tag rules are distributed across multiple sections (line 102, line 195, line 116 in Agent 3) and Agent 4 appears to miss the intersection of these rules. A consolidated "BANNED TAG LIST: [explicit list]" at the tag-building step would fix this.
2. **Agent 1 cites weak search counts as "demand signals"** — "690+ Amazon results" is a search result count, not a sales number. Agent 1 treats them as demand proof. Adding a specific instruction to look for review counts, bestseller badges, or "sold by X" signals would improve demand validation.
3. **All agents over-explain** — The output files are extremely long. Agent 2's output alone is 100 lines of rationale. While this helps auditability, the actual usable content (phrase + prompt + tags + description) could fit in 50 lines. Consider adding a "concise handoff" section mandatory at the end of each agent's output, with a separate verbose analysis section above.
