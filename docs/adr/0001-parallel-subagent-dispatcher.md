# ADR 0001: Parallel Subagent Dispatcher for Bulk Data Acquisition

## Status
Accepted

## Context
Acquiring "rich data" (competitor pricing, cultural trends, raw snippets) is critical to the pipeline's effectiveness. However, because the CLI adapters (like `bin/discover.js`) do not have native access to the LLM's MCP tools, Agent 1 was forced to act as "human middleware."

Previously, Agent 1 had to manually execute 14 separate `exa_search`, `serper_search`, and `tavily_search` queries sequentially, manually saving each output to a file, and then manually passing those files back to the `discover.js cache` CLI. 

This **MCP Tool Choreography** anti-pattern was extremely slow, prone to parsing errors, and consumed immense token context, creating a shallow interface between the LLM and the local filesystem.

## Decision
We will deepen the Search Automation seam by adopting the **Parallel Subagent Dispatcher** pattern. 
Instead of Agent 1 executing searches itself, it will utilize the `invoke_subagent` capability to spawn a dedicated "Search Execution Subagent". 
Because subagents can execute concurrently, this dispatcher will run the full array of missing queries simultaneously, cache the results, and report back.

## Consequences

**Positive:**
- **Drastic Speed Increase:** 14 sequential LLM tool calls are compressed into a single concurrent dispatch.
- **High Locality:** Agent 1's prompt focuses purely on evaluating the compiled research context, not on mechanical JSON I/O formatting.
- **Testability Survived:** The CLI `compile` logic remains completely unchanged, meaning our unit tests are unaffected.

**Negative:**
- **Concurrency Rate-Limiting:** If the array of searches exceeds the rate limits of the external search APIs (Exa/Serper), the Dispatcher may need to implement batching logic.
