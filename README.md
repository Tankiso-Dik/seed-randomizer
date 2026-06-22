# Seed Randomizer (POD Intelligence Engine)

An advanced Print-On-Demand (POD) market intelligence orchestrator. This project acts as a "senior market research analyst" that gathers, clusters, and fuses SEO data into a predictive Opportunity Score and outputs ready-to-use Gen Z meme apparel assets.

## 🏗️ Architecture
The system is highly modular and avoids fragile DOM scraping in favor of resilient enterprise-grade APIs and local caching.

* **`bin/`**: CLI tooling to pull/update seeds.

## 🚀 Quick Start

Invoke the 4-agent Design Pipeline defined in `AGENTS.md` sequentially. The agents use the available MCP tools (`exa_search`, `serper_search`, `tavily_search`, `sequentialthinking`) for research and validation.

## 🧭 Project Rules & Navigation
Please see `GEMINI.md` for strict architectural guidelines, including:
* The required **Hybrid Tool Stack** (DuckDB, Zod, Pino, Axios, Exa, Serper).
* **What NOT to build** (No heavy job queues, no Python microservices, no headless browsers/Crawlee, no vector DBs).
* The **4-Agent Design Pipeline** (Research -> Prompt Maker -> QA Director -> SEO Specialist).
