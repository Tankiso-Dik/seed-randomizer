#!/usr/bin/env bash
# CLI integration tests for seed-randomizer pipeline tools.
# Usage: bash tests/cli.test.sh
# Exits 0 on pass, non-zero on failure.
set -uo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; CYAN='\033[0;36m'; NC='\033[0m'
pass=0; fail=0
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

ok()   { echo -e "  ${GREEN}✓${NC} $1"; pass=$((pass+1)); }
not()  { echo -e "  ${RED}✗${NC} $1"; fail=$((fail+1)); [ "${2:-}" ] && echo "    → $2"; }

# Run a CLI tool in isolated env. Env vars override hard-coded paths.
# By default: stdout only (stderr suppressed).
# Pass "--stderr" as first arg to capture stderr as well.
run_isolated() {
  local keep_stderr=0 dir="$1"
  if [ "$dir" = "--stderr" ]; then keep_stderr=1; dir="$2"; shift 2; else shift 1; fi
  if [ $keep_stderr -eq 1 ]; then
    DB_DIR="$dir/pipeline" PROJECT_ROOT="$dir" node "$ROOT/bin/$1" "${@:2}" 2>&1
  else
    DB_DIR="$dir/pipeline" PROJECT_ROOT="$dir" node "$ROOT/bin/$1" "${@:2}" 2>/dev/null
  fi
}

fresh_env() {
  local dir="$(mktemp -d)"
  echo "# Test Run" > "$dir/MASTER_WORKFLOW_CONTEXT.md"
  mkdir -p "$dir/runs"
  echo "$dir"
}

# ── db.js (low-level) ──────────────────────────────────────────
echo -e "\n${CYAN}── db.js ──${NC}"

T=$(fresh_env)

# T1: getDb creates all tables (set env BEFORE require)
DB_DIR="$T/pipeline" node -e "
const db = require('$ROOT/bin/db');
db.getDb().then(d => {
  const tables = d.exec(\"SELECT name FROM sqlite_master WHERE type='table' ORDER BY name\");
  const names = tables[0].values.map(r => r[0]);
  if (names.includes('runs') && names.includes('decisions') && names.includes('tags') && names.includes('search_cache')) process.exit(0);
  process.exit(1);
}).catch(() => process.exit(1));
" && ok "T1: schema creates all tables" || not "T1: schema missing tables"

# T2: getActiveRun returns null when empty
DB_DIR="$T/pipeline" node -e "
const db = require('$ROOT/bin/db');
db.getActiveRun().then(r => { process.exit(r === null ? 0 : 1); }).catch(() => process.exit(1));
" && ok "T2: getActiveRun null when empty" || not "T2: getActiveRun broken"

# T3: close/re-open cycle
DB_DIR="$T/pipeline" node -e "
const db = require('$ROOT/bin/db');
db.getDb().then(d => db.close()).then(() => db.getDb()).then(() => process.exit(0)).catch(() => process.exit(1));
" && ok "T3: close/re-open cycle" || not "T3: close failed"

# T4: save round-trips
DB_DIR="$T/pipeline" node -e "
const db = require('$ROOT/bin/db');
db.getDb().then(d => {
  d.run(\"INSERT INTO runs (animal, status) VALUES ('test', 'active')\");
  db.save();
  return db.close();
}).then(() => db.getDb()).then(d => {
  const r = d.exec(\"SELECT animal FROM runs WHERE status='active'\");
  if (r[0].values[0][0] !== 'test') process.exit(1);
  process.exit(0);
}).catch(() => process.exit(1));
" && ok "T4: save round-trips" || not "T4: save broken"
rm -rf "$T"

# ── pipeline.js ────────────────────────────────────────────────
echo -e "\n${CYAN}── pipeline.js ──${NC}"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
[ -f "$T/pipeline/state.db" ] && ok "T5: start creates state.db" || not "T5: state.db missing"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" pipeline.js log format=D --agent 2 >/dev/null
run_isolated "$T" pipeline.js log register=playful --agent 2 >/dev/null
VALUES=$(run_isolated "$T" pipeline.js query format --last 3)
echo "$VALUES" | grep -q '"D"' && ok "T6: log + query round-trip" || not "T6: log/query broken"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" pipeline.js log register=playful --agent 2 >/dev/null
STATUS=$(run_isolated "$T" pipeline.js status)
echo "$STATUS" | grep -q '"register": "playful"' && echo "$STATUS" | grep -q '"animal": "raptor"' && ok "T7: status merged" || not "T7: status broken"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" pipeline.js tags add "playful raptor" --bucket best-fit >/dev/null
run_isolated "$T" pipeline.js tags add "funny raptor" --bucket proven-territory >/dev/null
TAGS=$(run_isolated "$T" pipeline.js tags list)
echo "$TAGS" | grep -q "playful raptor" && ok "T8a: tags add+list" || not "T8a: tags broken"
RECENT=$(run_isolated "$T" pipeline.js tags recent --bucket best-fit --last 1)
echo "$RECENT" | grep -q "playful raptor" && ok "T8b: tags recent" || not "T8b: tags recent broken"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" pipeline.js log register=playful --agent 4 >/dev/null
STATUS=$(run_isolated "$T" pipeline.js status)
echo "$STATUS" | grep -q '"current_agent": 4' && ok "T9: agent advances" || not "T9: agent broken"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start eagle >/dev/null
run_isolated "$T" pipeline.js start wolf >/dev/null
[ -d "$T/runs/$(date -u +%Y-%m-%d)-eagle" ] && ok "T10: second start archives" || not "T10: archive missing"
rm -rf "$T"

T=$(fresh_env)
rm -f "$T/MASTER_WORKFLOW_CONTEXT.md"
run_isolated "$T" pipeline.js start phoenix >/dev/null && ok "T11: start without context" || not "T11: start without context failed"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" pipeline.js verify-step 1 >/dev/null 2>&1
[ $? -ne 0 ] && ok "T11a: verify-step fails when required sections missing" || not "T11a: verify-step passed on empty context"

echo -e "\n## Context Brief\nSeed-Specific Search Language:\n- playful raptor" >> "$T/MASTER_WORKFLOW_CONTEXT.md"
run_isolated "$T" pipeline.js friction log --worked "ok" --differently "ok" --tools "none" --agent 1 >/dev/null
run_isolated "$T" pipeline.js verify-step 1 >/dev/null 2>&1
[ $? -eq 0 ] && ok "T11b: verify-step passes with valid Agent 1 data" || not "T11b: verify-step failed on valid Agent 1 data"
rm -rf "$T"

# ── search.js ──────────────────────────────────────────────────
echo -e "\n${CYAN}── search.js ──${NC}"

T=$(fresh_env)
run_isolated "$T" pipeline.js start test >/dev/null
OUT=$(run_isolated --stderr "$T" search.js cache "otter shirt")
echo "$OUT" | head -1 | grep -q '\[' && ok "T12a: cache miss returns array" || not "T12a: miss broken"
echo "$OUT" | grep -q 'cache MISS' && ok "T12b: reports MISS" || not "T12b: MISS label"
OUT2=$(run_isolated --stderr "$T" search.js cache "otter shirt")
echo "$OUT2" | grep -q 'cache HIT' && ok "T12c: cache HIT" || not "T12c: HIT broken"
rm -rf "$T"

T=$(fresh_env)
run_isolated "$T" pipeline.js start test >/dev/null
OUT=$(run_isolated "$T" search.js cache "zzzzznonexistent")
echo "$OUT" | grep -q '\[\]' && ok "T13: nonexistent returns []" || not "T13: nonexistent broken"
rm -rf "$T"

# ── context.js ─────────────────────────────────────────────────
echo -e "\n${CYAN}── context.js ──${NC}"

T=$(fresh_env)
run_isolated "$T" pipeline.js start test >/dev/null
run_isolated "$T" pipeline.js log "verdict=APPROVED" --agent 3 >/dev/null
# Add a proper section header to test parsing
echo -e "\n## Executive Verdict\nAPPROVED with minor tweaks" >> "$T/MASTER_WORKFLOW_CONTEXT.md"
SECTIONS=$(run_isolated "$T" context.js sections)
echo "$SECTIONS" | grep -q '"name"' && ok "T14a: sections parses" || not "T14a: sections broken" "$(echo "$SECTIONS" | head -c 200)"
EXTRACT=$(run_isolated "$T" context.js extract --sections verdict)
echo "$EXTRACT" | grep -q "APPROVED" && ok "T14b: extract finds content" || not "T14b: extract broken"
rm -rf "$T"

MISSING_DIR=$(mktemp -d)
rm -f "$MISSING_DIR/MASTER_WORKFLOW_CONTEXT.md"
PROJECT_ROOT="$MISSING_DIR" node "$ROOT/bin/context.js" sections > /tmp/_cli_test_t15_out.txt 2>&1
grep -q "No MASTER_WORKFLOW_CONTEXT\.md" /tmp/_cli_test_t15_out.txt && ok "T15: missing context file handled" || not "T15: missing file not caught" "$(cat /tmp/_cli_test_t15_out.txt)"
rm -rf "$MISSING_DIR" /tmp/_cli_test_t15_out.txt

# ── knowledge.js ────────────────────────────────────────────────
echo -e "\n${CYAN}── knowledge.js ──${NC}"

# Helper: run knowledge in isolated temp with KNOWLEDGE_DIR
run_knowledge() {
  local dir="$1" animal="$2" cmd="$3"; shift 3
  KNOWLEDGE_DIR="$dir/knowledge" node "$ROOT/bin/knowledge.js" "$cmd" "$animal" "$@"
}

T=$(mktemp -d)

# T16: init creates file
run_knowledge "$T" otter init >/dev/null
[ -f "$T/knowledge/otter.json" ] && ok "T16: init creates file" || not "T16: file missing"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null

# T17: add register + get register round-trip
run_knowledge "$T" otter add register --name playful --term "otter energy" --confidence 70 >/dev/null
REG=$(run_knowledge "$T" otter get registers)
echo "$REG" | grep -q '"playful"' && echo "$REG" | grep -q '"otter energy"' && ok "T17: register add+get" || not "T17: register broken"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null

# T18: add design auto-tracks used_vocabulary (compositions, phrases, poses, registers)
run_knowledge "$T" otter add design --phrase "OTTER ENERGY" --composition "head_shoulders+below+front_centered" --pose collapsed --register playful --taste 8 --verdict approved >/dev/null
run_knowledge "$T" otter add design --phrase "OTTER" --composition "full_body+below+side_profile" --pose composed --register playful --taste 7 --verdict pending >/dev/null
UV=$(run_knowledge "$T" otter get used_vocabulary)
echo "$UV" | grep -q '"OTTER ENERGY"' && echo "$UV" | grep -q '"head_shoulders+below+front_centered"' && echo "$UV" | grep -q '"full_body+below+side_profile"' && echo "$UV" | grep -q '"collapsed"' && echo "$UV" | grep -q '"composed"' && ok "T18: design tracks used_vocabulary" || not "T18: used_vocabulary broken"
rm -rf "$T"

T=$(mktemp -d)
# T19: get returns defaults for unknown animal (no init needed)
DEF=$(run_knowledge "$T" otter get)
echo "$DEF" | grep -q '"registers"' && ok "T19: unknown animal returns defaults" || not "T19: defaults broken"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null

# T20: add cultural vibe, slang, context
run_knowledge "$T" otter add cultural --type vibe --value "playful chaos" >/dev/null
run_knowledge "$T" otter add cultural --type slang --value "otter mode" >/dev/null
run_knowledge "$T" otter add cultural --context "Otter slide TikTok trend" --platform tiktok --virality high >/dev/null
CP=$(run_knowledge "$T" otter get cultural_profile)
echo "$CP" | grep -q '"playful chaos"' && echo "$CP" | grep -q '"otter mode"' && echo "$CP" | grep -q '"Otter slide TikTok trend"' && ok "T20: cultural add+get" || not "T20: cultural broken"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null

# T21: keyword + gap + clearance + competitor
run_knowledge "$T" otter add keyword --phrase "playful otter" --competition medium --suggestions 5 >/dev/null
run_knowledge "$T" otter add gap --text "No chaotic otter designs exist" --still-open >/dev/null
run_knowledge "$T" otter add clearance --phrase "OTTER ENERGY" --status clear --note "No TM found" >/dev/null
run_knowledge "$T" otter add competitor --tag "cute otter" --note "Everyone uses cute, missing chaos angle" >/dev/null
KP=$(run_knowledge "$T" otter get buyer_search_phrases)
echo "$KP" | grep -q '"playful otter"' && ok "T21a: keyword add" || not "T21a: keyword broken"
GP=$(run_knowledge "$T" otter get market_gaps)
echo "$GP" | grep -q '"No chaotic otter designs exist"' && ok "T21b: gap add" || not "T21b: gap broken"
CL=$(run_knowledge "$T" otter get ip_clearances)
echo "$CL" | grep -q 'OTTER ENERGY' && ok "T21c: clearance add" || not "T21c: clearance broken"
COMP=$(run_knowledge "$T" otter get competitor_patterns)
echo "$COMP" | grep -q '"cute otter"' && echo "$COMP" | grep -q '"Everyone uses cute' && ok "T21d: competitor add" || not "T21d: competitor broken"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null
run_knowledge "$T" beaver init >/dev/null

# T22: list shows all animals
LIST=$(KNOWLEDGE_DIR="$T/knowledge" node "$ROOT/bin/knowledge.js" list)
echo "$LIST" | grep -q '"otter"' && echo "$LIST" | grep -q '"beaver"' && ok "T22: list shows animals" || not "T22: list broken"
rm -rf "$T"

T=$(mktemp -d)
run_knowledge "$T" otter init >/dev/null

# T23: invalid composition string errors
run_knowledge "$T" otter add design --phrase "BAD" --composition "head_only+below+front" --register playful --taste 1 --verdict test >/dev/null 2>&1 && not "T23a: invalid crop passed" || ok "T23a: invalid crop rejected"
run_knowledge "$T" otter add design --phrase "BAD" --composition "head_shoulders+under+front" --register playful --taste 1 --verdict test >/dev/null 2>&1 && not "T23b: invalid text passed" || ok "T23b: invalid text rejected"
run_knowledge "$T" otter add design --phrase "BAD" --composition "head_shoulders+below+top_down" --register playful --taste 1 --verdict test >/dev/null 2>&1 && not "T23c: invalid view passed" || ok "T23c: invalid view rejected"
run_knowledge "$T" otter add design --phrase "BAD" --composition "head_shoulders-below-front" --register playful --taste 1 --verdict test >/dev/null 2>&1 && not "T23d: bad separator passed" || ok "T23d: bad separator rejected"
run_knowledge "$T" otter add design --phrase "GOOD" --composition "head_shoulders+below+front_centered" --pose collapsed --register playful --taste 1 --verdict test >/dev/null 2>&1 && ok "T23e: valid composition+pose accepted" || not "T23e: valid composition rejected"
UV=$(run_knowledge "$T" otter get used_vocabulary)
echo "$UV" | grep -q '"head_shoulders+below+front_centered"' && echo "$UV" | grep -q '"collapsed"' && ok "T23f: composition+pose tracked" || not "T23f: tracking broken"
rm -rf "$T"

# ── qa.js ──────────────────────────────────────────────────────
echo -e "\n${CYAN}── qa.js ──${NC}"

T=$(fresh_env)
run_isolated "$T" pipeline.js start raptor >/dev/null
run_isolated "$T" qa.js init >/dev/null
QA_STATUS=$(run_isolated "$T" qa.js status)
echo "$QA_STATUS" | grep -q "ip_safety" && echo "$QA_STATUS" | grep -q "⬜" && ok "T24a: qa init registers checks as pending" || not "T24a: qa init failed"

run_isolated "$T" qa.js check ip_safety --status pass --note "Cleared TM" >/dev/null
QA_STATUS_UPDATED=$(run_isolated "$T" qa.js status)
echo "$QA_STATUS_UPDATED" | grep -q "✅ ip_safety — Cleared TM" && ok "T24b: qa check updates status and note" || not "T24b: qa check failed"

# Verify should fail because not all required checks pass
run_isolated "$T" qa.js verify >/dev/null 2>&1
[ $? -ne 0 ] && ok "T24c: qa verify fails when checks are pending" || not "T24c: qa verify succeeded on pending"

# Pass all required checks
for c in ip_safety meme_fidelity cohesion_animal_expression cohesion_expression_phrase cohesion_phrase_prop cohesion_prop_posture cohesion_register prop_count format_fidelity anatomy_risk; do
  run_isolated "$T" qa.js check "$c" --status pass >/dev/null
done
run_isolated "$T" qa.js verify >/dev/null 2>&1
[ $? -eq 0 ] && ok "T24d: qa verify passes when all required checks pass" || not "T24d: qa verify failed on passing checks"
rm -rf "$T"

# ── tags.js ────────────────────────────────────────────────────
echo -e "\n${CYAN}── tags.js ──${NC}"

T=$(fresh_env)
# Validate failing tags
run_isolated "$T" tags.js validate --register "executive dysfunction, quiet quitting, head empty" --best-fit "tired otter, adhd otter, otter burnout" --proven "funny otter, otter shirt, sarcastic tee" --main-tag "tired otter burnout" --animal "otter" >/dev/null 2>&1
[ $? -ne 0 ] && ok "T25a: tags validate fails on invalid tags" || not "T25a: tags validate succeeded on invalid tags"

# Validate passing tags
run_isolated "$T" tags.js validate --register "head empty, quiet quitting, no thoughts, burnout vibe" --best-fit "tired otter, adhd otter, otter burnout" --proven "otter lover gift, sarcastic gift, funny gift" --main-tag "tired otter burnout" --animal "otter" >/dev/null 2>&1
[ $? -eq 0 ] && ok "T25b: tags validate passes on valid tags" || not "T25b: tags validate failed on valid tags"
rm -rf "$T"

# ── library unit tests ──────────────────────────────────────────
echo -e "\n${CYAN}── library unit tests ──${NC}"

# T26: TagValidator pure function test
node -e "
const tv = require('$ROOT/lib/TagValidator');
const failResult = tv.validate({
  register: 'executive dysfunction, quiet quitting, head empty',
  best_fit: 'tired otter, adhd otter, otter burnout',
  proven: 'funny otter, otter shirt, sarcastic tee',
  main_tag: 'tired otter burnout',
  animal: 'otter'
});
if (failResult.pass) { console.error('Expected validation to fail'); process.exit(1); }

const passResult = tv.validate({
  register: 'head empty, quiet quitting, no thoughts, burnout vibe',
  best_fit: 'tired otter, adhd otter, otter burnout',
  proven: 'otter lover gift, sarcastic gift, funny gift',
  main_tag: 'tired otter burnout',
  animal: 'otter'
});
if (!passResult.pass) { console.error('Expected validation to pass', JSON.stringify(passResult, null, 2)); process.exit(1); }
process.exit(0);
" && ok "T26: TagValidator direct validation" || not "T26: TagValidator validation failed"

# T27: QAValidator verify function test
node -e "
const qv = require('$ROOT/lib/QAValidator');
const results = {};
for (const name of qv.getRequiredChecks()) {
  results[name] = 'pass';
}
const passResult = qv.verify(results);
if (!passResult.pass) { console.error('Expected QA verify to pass'); process.exit(1); }

results['ip_safety'] = 'fail';
const failResult = qv.verify(results);
if (failResult.pass || failResult.failures.length !== 1 || failResult.failures[0].name !== 'ip_safety') {
  console.error('Expected QA verify to fail with ip_safety');
  process.exit(1);
}
process.exit(0);
" && ok "T27: QAValidator direct verification" || not "T27: QAValidator verification failed"

# T28: KnowledgeConsolidator unit test
node -e "
const kc = require('$ROOT/lib/KnowledgeConsolidator');
const data = {
  buyer_search_phrases: [
    { phrase: 'otter meme', times_validated: 1 },
    { phrase: 'OTTER MEME', times_validated: 2 }
  ],
  design_history: Array.from({ length: 20 }, (_, i) => ({
    run_id: i, phrase: 'test', verdict: i < 5 ? 'approved' : 'pending', register: 'playful', composition: 'head+below+front'
  })),
  known_queries: Array.from({ length: 25 }, (_, i) => ({
    query: 'q' + i, use_count: i
  }))
};
const result = kc.consolidate(data);
if (result.buyer_search_phrases.length !== 1 || result.buyer_search_phrases[0].times_validated !== 3) {
  console.error('Buyer search phrases not merged correctly');
  process.exit(1);
}
if (result.design_history.length !== 15 || result.design_rollup_stats.total_runs !== 5) {
  console.error('Design history not rolled up correctly', result.design_history.length, result.design_rollup_stats.total_runs);
  process.exit(1);
}
if (result.known_queries.length !== 20 || result.known_queries[0].query !== 'q24') {
  console.error('Known queries not pruned correctly', result.known_queries.length);
  process.exit(1);
}
process.exit(0);
" && ok "T28: KnowledgeConsolidator direct unit test" || not "T28: KnowledgeConsolidator unit test failed"

# T29: GapAnalyzer unit test
node -e "
const ga = require('$ROOT/lib/GapAnalyzer');
const emptyData = {
  animal: 'raptor',
  cultural_profile: { vibes: [], community_slang: [] },
  buyer_search_phrases: [],
  registers: {},
  competitor_patterns: { notes: [] },
  ip_clearances: []
};
const result = ga.analyze(emptyData);
if (result.gaps_found < 6) {
  console.error('Expected at least 6 gaps for empty profile', result.gaps_found);
  process.exit(1);
}

const filledData = {
  animal: 'raptor',
  cultural_profile: { vibes: ['vibe1'], community_slang: ['slang1'] },
  buyer_search_phrases: Array.from({ length: 12 }, (_, i) => ({ phrase: 'p' + i })),
  registers: { playful: { confidence: 80 } },
  competitor_patterns: { notes: ['note1'] },
  ip_clearances: [{ phrase: 'p1', status: 'clear' }]
};
const result2 = ga.analyze(filledData);
if (result2.gaps_found !== 0) {
  console.error('Expected 0 gaps for filled profile', result2.gaps_found, JSON.stringify(result2.gaps, null, 2));
  process.exit(1);
}
process.exit(0);
" && ok "T29: GapAnalyzer direct unit test" || not "T29: GapAnalyzer unit test failed"

# T30: FrictionLogger unit test
node -e "
const path = require('path');
process.env.DB_DIR = path.join('$ROOT', '.pipeline-test-friction');

const fs = require('fs');
if (fs.existsSync(process.env.DB_DIR)) {
  fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
}

const db = require('$ROOT/bin/db');
const FrictionLogger = require('$ROOT/lib/FrictionLogger');

async function runTest() {
  // Clear file log if exists
  const fileLog = path.join('$ROOT', 'agent-friction.log');
  if (fs.existsSync(fileLog)) fs.unlinkSync(fileLog);

  const d = await db.getDb();
  
  // Start a mock run
  d.run(\"INSERT INTO runs (id, animal, status) VALUES (99, 'capybara', 'active')\");
  db.save();

  // Log friction
  await FrictionLogger.log(99, 1, {
    worked: 'Research went perfectly',
    differently: 'Use more specific queries',
    tools: 'none'
  });

  const logs = await FrictionLogger.getLogsForRun(99);
  if (logs.length !== 1 || logs[0].what_worked !== 'Research went perfectly') {
    console.error('Friction log failed to save');
    process.exit(1);
  }

  const hasLogged = await FrictionLogger.hasLogged(99, 1);
  if (!hasLogged) {
    console.error('hasLogged returned false for recorded log');
    process.exit(1);
  }

  // Check file append
  if (!fs.existsSync(fileLog)) {
    console.error('agent-friction.log file was not created');
    process.exit(1);
  }
  const content = fs.readFileSync(fileLog, 'utf-8');
  if (!content.includes('Research went perfectly')) {
    console.error('agent-friction.log file does not contain log entry');
    process.exit(1);
  }

  // Cleanup
  fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
  fs.unlinkSync(fileLog);
  process.exit(0);
}
runTest().catch(e => { console.error(e); process.exit(1); });
" && ok "T30: FrictionLogger direct unit test" || not "T30: FrictionLogger unit test failed"

# T31: pipeline verify-step requires friction log
node -e "
const path = require('path');
process.env.DB_DIR = path.join('$ROOT', '.pipeline-test-verify-friction');

const fs = require('fs');
if (fs.existsSync(process.env.DB_DIR)) {
  fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
}

const db = require('$ROOT/bin/db');
const HandoffSerializer = require('$ROOT/lib/HandoffSerializer');

async function runTest() {
  // Create context file
  const contextFile = path.join('$ROOT', 'MASTER_WORKFLOW_CONTEXT.md');
  const contextContent = \`# Capybara Run
## Context Brief
Seed-Specific Search Language:
- Silly Capybara
\`;
  fs.writeFileSync(contextFile, contextContent);

  const d = await db.getDb();
  d.run(\"INSERT INTO runs (id, animal, status) VALUES (101, 'capybara', 'active')\");
  db.save();

  // Verify should fail due to missing friction log
  try {
    await HandoffSerializer.verifyStep(1);
    console.error('verifyStep succeeded but should have failed due to missing friction log');
    process.exit(1);
  } catch (e) {
    if (!e.message.includes('Missing friction log entry')) {
      console.error('verifyStep failed with unexpected error:', e.message);
      process.exit(1);
    }
  }

  // Log friction
  const FrictionLogger = require('$ROOT/lib/FrictionLogger');
  await FrictionLogger.log(101, 1, {
    worked: 'Ok', differently: 'Ok', tools: 'none'
  });

  // Verify should now succeed
  const result = await HandoffSerializer.verifyStep(1);
  if (!result.success) {
    console.error('verifyStep failed even after logging friction');
    process.exit(1);
  }

  // Cleanup
  fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
  if (fs.existsSync(contextFile)) fs.unlinkSync(contextFile);
  process.exit(0);
}
runTest().catch(e => { console.error(e); process.exit(1); });
" && ok "T31: pipeline verify-step requires friction log check" || not "T31: verify-step friction check failed"

# T32: SearchDiscovery direct unit test
PROJECT_ROOT="$ROOT" node -e '
const path = require("path");
const root = process.env.PROJECT_ROOT;
const SearchDiscovery = require(path.join(root, "lib", "SearchDiscovery"));

// Exa Parsing
const exaRaw = {
  results: [
    { title: "Relatable Otter Meme", text: "This otter is quiet quitting at its corporate job." }
  ]
};
const exaParsed = SearchDiscovery.parseExa(exaRaw);
if (exaParsed.titles[0] !== "Relatable Otter Meme" || !exaParsed.snippets[0].includes("quiet quitting")) {
  console.error("Exa parsing failed");
  process.exit(1);
}

// Serper Parsing
const serperRaw = {
  organic: [
    { title: "Tired Otter Shirt", snippet: "Funny tired otter design. Price: $19.99, 120 reviews." }
  ]
};
const serperParsed = SearchDiscovery.parseSerper(serperRaw);
if (serperParsed.priceSignals[0] !== 19.99 || serperParsed.reviewSignals[0] !== "120") {
  console.error("Serper parsing failed", serperParsed);
  process.exit(1);
}

// Keyword Extraction
const kw = SearchDiscovery.extractKeywords(["This is a funny otter shirt, very silly otter."], new Set(["silly"]));
const otterKw = kw.find(k => k.term === "otter");
if (!otterKw || otterKw.count !== 2) {
  console.error("Keyword extraction failed", kw);
  process.exit(1);
}

process.exit(0);
' && ok "T32: SearchDiscovery direct unit test" || not "T32: SearchDiscovery unit test failed"

# T33: discover.js CLI integration test
PROJECT_ROOT="$ROOT" node -e '
const path = require("path");
const root = process.env.PROJECT_ROOT;

process.env.DB_DIR = path.join(root, ".pipeline-test-discover");
process.env.KNOWLEDGE_DIR = path.join(root, ".pipeline-test-discover-knowledge");

const fs = require("fs");
if (fs.existsSync(process.env.DB_DIR)) fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
if (fs.existsSync(process.env.KNOWLEDGE_DIR)) fs.rmSync(process.env.KNOWLEDGE_DIR, { recursive: true, force: true });

const db = require(path.join(root, "bin", "db"));
const repo = require(path.join(root, "lib", "RunRepository"));
const { execSync } = require("child_process");

async function runTest() {
  const d = await db.getDb();
  
  // Start active run
  const runId = await repo.startRun("otter");
  await db.close();

  // Create temporary mock search payloads
  const tempDir = path.join(root, ".pipeline-test-discover-temp");
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const exaPath = path.join(tempDir, "exa.json");
  fs.writeFileSync(exaPath, JSON.stringify({ results: [{ title: "Relatable Otter", text: "This otter is quiet quitting." }] }));

  const serperPath = path.join(tempDir, "serper.json");
  fs.writeFileSync(serperPath, JSON.stringify({ organic: [{ title: "Otter Shirt", snippet: "$19.99, 50 reviews" }] }));

  const tavilyPath = path.join(tempDir, "tavily.json");
  fs.writeFileSync(tavilyPath, JSON.stringify({ results: [{ title: "Vibe", content: "cozy chaos" }] }));

  // Test caching using CLI discover.js
  const queries = [
    "\"otter\" (\"relatable\" OR \"mood\" OR \"literally me\") reddit",
    "\"otter core\" OR \"otter meme\" 2026 tiktok",
    "\"otter\" (\"identity\" OR \"personality\") tumblr",
    "\"otter t-shirt\" teepublic",
    "\"otter sticker\" redbubble",
    "\"otter shirt\" bestseller etsy",
    "\"otter t-shirt\" redbubble",
    "\"otter t-shirt\" funny amazon",
    "\"otter funny shirt\"",
    "\"otter png etsy\" OR \"otter sublimation png\"",
    "\"otter\" (\"napping\" OR \"procrastinating\" OR \"avoiding\" OR \"corporate\") t-shirt",
    "\"otter\" (\"chaos\" OR \"gremlin\" OR \"menace\" OR \"feral\") shirt",
    "\"otter\" (\"relatable\" OR \"mood\" OR \"literally me\") shirt",
    "\"otter aesthetic\" 2026 t-shirt"
  ];

  // Store mocks for all queries
  for (const q of queries) {
    let p = exaPath;
    if (q.includes("teepublic") || q.includes("etsy") || q.includes("redbubble") || q.includes("funny shirt")) p = serperPath;
    else if (q.includes("corporate") || q.includes("chaos") || q.includes("aesthetic")) p = tavilyPath;
    
    const escapedQuery = q.replace(/"/g, "\\\"");
    execSync(`node bin/discover.js cache "${escapedQuery}" "${p}"`, {
      env: { ...process.env, PROJECT_ROOT: root }
    });
  }

  // Compile using CLI discover.js
  execSync(`node bin/discover.js compile otter`, {
    env: { ...process.env, PROJECT_ROOT: root }
  });

  // Verify compile results
  const contextFile = path.join(root, "MASTER_WORKFLOW_CONTEXT.md");
  if (!fs.existsSync(contextFile)) {
    console.error("MASTER_WORKFLOW_CONTEXT.md was not created");
    process.exit(1);
  }

  const content = fs.readFileSync(contextFile, "utf8");
  if (!content.includes("Context Brief") || !content.includes("Seed-Specific Search Language")) {
    console.error("Context brief markdown missing sections", content);
    process.exit(1);
  }

  // Verify DB decision logged
  const decisions = await repo.getDecisions(runId);
  const decision = decisions.register;
  if (decision !== "burnout/exhausted") {
    console.error("Selected register not logged in SQLite", decision);
    process.exit(1);
  }

  // Cleanup
  fs.rmSync(process.env.DB_DIR, { recursive: true, force: true });
  fs.rmSync(process.env.KNOWLEDGE_DIR, { recursive: true, force: true });
  fs.rmSync(tempDir, { recursive: true, force: true });
  if (fs.existsSync(contextFile)) fs.unlinkSync(contextFile);
  process.exit(0);
}
runTest().catch(e => { console.error(e); process.exit(1); });
' && ok "T33: discover.js CLI compile integration test" || not "T33: discover.js compile failed"

# ── summary ────────────────────────────────────────────────────
echo -e "\n${CYAN}══════════════════════════════════════════${NC}"
echo -e "${GREEN}${pass} passed${NC}, ${RED}${fail} failed${NC}"
[ $fail -eq 0 ] || exit 1



