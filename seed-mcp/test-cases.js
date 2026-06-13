const path = require('path');
const dbMockPath = path.resolve(__dirname, './src/db/duckdb.js');

// Pre-fill require cache
require.cache[dbMockPath] = {
    id: dbMockPath,
    filename: dbMockPath,
    loaded: true,
    exports: {
        run: async () => {},
        all: async () => [],
        getCached: async () => null,
        setCache: async () => {}
    }
};

const { McpServer } = require('@modelcontextprotocol/sdk/server/mcp.js');
const axios = require('axios');

const tools = {};
McpServer.prototype.tool = function(name, description, shape, callback) {
    tools[name] = callback;
};
McpServer.prototype.connect = async function() { };

require('./index.js'); // Should now use our mock duckdb!

async function runTests() {
    console.log("=== Round 1: Edge Cases for Etsy and Amazon ===");
    try {
        const res1 = await tools['etsy_probe']({ keyword: "   " });
        console.log("Etsy Probe (whitespace):", res1.isError ? res1.content[0].text : "Success, length: " + JSON.parse(res1.content[0].text).length);
        
        const res2 = await tools['amazon_probe']({ keyword: "@@@&&&!!!" });
        console.log("Amazon Probe (special chars):", res2.isError ? res2.content[0].text : "Success, length: " + JSON.parse(res2.content[0].text).length);
    } catch(e) {
        console.error("Etsy/Amazon Error:", e);
    }

    console.log("\\n=== Round 2: Serper Shopping Errors ===");
    try {
        const oldKey = process.env.SERPER_API_KEY;
        process.env.SERPER_API_KEY = "bad_key_123";
        
        const res3 = await tools['serper_shopping_probe']({ keyword: "test shirt" });
        console.log("Serper Probe (bad key):", res3.isError ? res3.content[0].text : res3.content[0].text);
        
        process.env.SERPER_API_KEY = oldKey;
        
        // Let's also test when no key is present
        delete process.env.SERPER_API_KEY;
        const res4 = await tools['serper_shopping_probe']({ keyword: "test shirt" });
        console.log("Serper Probe (missing key):", res4.isError ? res4.content[0].text : res4.content[0].text);

        process.env.SERPER_API_KEY = oldKey; // restore
    } catch(e) {
        console.error("Serper Error:", e);
    }

    console.log("\\n=== Round 3: Concept Overlap Edge Cases ===");
    try {
        const res4 = await tools['concept_overlap_probe']({ inputs: [] });
        console.log("Concept Overlap (empty inputs):", res4.content[0].text);

        const res5 = await tools['concept_overlap_probe']({ inputs: ["@@@", "   ", ""] });
        console.log("Concept Overlap (weird inputs):", res5.content[0].text);
        
        const res6 = await tools['concept_overlap_probe']({ inputs: ["shirt shirt shirt", "shirt", "cat cat"] });
        console.log("Concept Overlap (duplicates):", res6.content[0].text);
    } catch(e) {
        console.error("Overlap Error:", e);
    }
    
    // Test GPT Refiner (this requires OPENAI_API_KEY which might be present or not)
    console.log("\\n=== Round 4: GPT Refiner ===");
    try {
        const oldOpenai = process.env.OPENAI_API_KEY;
        process.env.OPENAI_API_KEY = "sk-badkey";
        const res7 = await tools['gpt_refiner']({ inputs: ["cool shirt", "cheap mug"] });
        console.log("GPT Refiner (bad key):", res7.isError ? res7.content[0].text : res7.content[0].text);
        process.env.OPENAI_API_KEY = oldOpenai;
    } catch (e) {
        console.error(e);
    }

    process.exit(0);
}

runTests();
