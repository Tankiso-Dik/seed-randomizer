# Seed Randomizer (POD Intelligence Engine)

An advanced Print-On-Demand (POD) market intelligence orchestrator. This project acts as a "senior market research analyst" that gathers, clusters, and fuses SEO data into a predictive Opportunity Score and outputs ready-to-use Gen Z meme apparel assets.

## 🏗️ Architecture
The system is highly modular and avoids fragile DOM scraping in favor of resilient enterprise-grade APIs and local caching.

* **`bin/`**: CLI tooling to pull/update seeds.

## 🚀 Quick Start

- **Design Generation (Master Workflow):** Invoke the 4-agent Design Pipeline (Research -> Prompt Maker -> QA Director -> SEO Specialist) defined in `AGENTS.md` sequentially.
- **Etsy PNG Listing (Etsy Workflow):** Run the standalone Agent 5 (`agent-5-etsy-png-specialist.md`) to create optimized Etsy digital download listings from Agent 1 & Agent 4 outputs.

The agents use the available MCP tools (`exa_search`, `serper_search`, `tavily_search`, `sequentialthinking`) for research and validation.

## 🧭 Project Rules & Navigation
Please see `GEMINI.md` for strict architectural guidelines, including:
* The required **Hybrid Tool Stack** (DuckDB, Zod, Pino, Axios, Exa, Serper).
* **What NOT to build** (No heavy job queues, no Python microservices, no headless browsers/Crawlee, no vector DBs).
* The **4-Agent Design Pipeline** (Research -> Prompt Maker -> QA Director -> SEO Specialist) and **Etsy PNG Listing Pipeline** (Agent 5).
