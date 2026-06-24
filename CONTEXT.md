# Domain Glossary

This file defines the shared domain vocabulary for the Seed Randomizer project. Use these exact terms when discussing the architecture or writing documentation.

## Core Concepts

- **Parallel Subagent Dispatcher**: An architectural pattern where a primary agent delegates bulk I/O tasks (such as executing multiple MCP searches) to a specialized, parallel-capable subagent. This deepens the seam between the agent's creative logic and the mechanical execution.
- **MCP Tool Choreography**: The anti-pattern where a primary LLM agent manually loops through raw API calls (like `exa_exa_search`) rather than using a deeper adapter or delegating to a dispatcher.
- **SearchDiscovery Adapter**: The CLI boundary (`bin/search.js`, `bin/discover.js`) that safely formats, caches, and compiles search responses to protect agents from parsing hallucinations.
- **HandoffSerializer**: The gatekeeper seam (`bin/pipeline.js handoff`) that strictly validates inter-agent data transfers against JSON schemas before saving state.
- **CulturalMappingEngine**: The DB-backed logic (`bin/knowledge.js map-culture`) that programmatically routes agents toward unique emotional registers and prevents portfolio saturation.
