# Seed Randomizer (POD Intelligence Engine)

An advanced Print-On-Demand (POD) market intelligence orchestrator. This project acts as a "senior market research analyst" that gathers, clusters, and fuses SEO data into a predictive Opportunity Score and outputs ready-to-use Gen Z meme apparel assets.

## 🏗️ Architecture
The system is highly modular and avoids fragile DOM scraping in favor of resilient enterprise-grade APIs and local caching.

* **`seed-mcp/`**: Node.js MCP server acting as the Orchestrator. Connects to `DuckDB` for state and caching, and provides tools wrapping Exa, Serper, Etsy, and Amazon APIs.
* **`bin/`**: CLI tooling to pull/update seeds.
* **`src/`**: Next.js UI Frontend.

## 🚀 Quick Start

### 1. Node.js MCP Server
The backend is now unified into a single Node.js MCP server using DuckDB. No Python microservices are required.

```bash
cd seed-mcp
npm install
# Set up your environment variables
export EXA_API_KEY="..."
export SERPER_API_KEY="..."
export OPENAI_API_KEY="..."
# Run the MCP (usually managed by Antigravity CLI via stdio)
node index.js
```

### 2. Next.js App
```bash
npm install
npm run dev # Runs on port 3000
```

## 🧭 Project Rules & Navigation
Please see `GEMINI.md` for strict architectural guidelines, including:
* The required **Hybrid Tool Stack** (DuckDB, Zod, Pino, Axios, Exa, Serper).
* **What NOT to build** (No heavy job queues, no Python microservices, no headless browsers/Crawlee, no vector DBs).
* The **Agent Review Pipeline** logic (Relay Race, no simultaneous runs).
