const { spawn } = require('child_process');
const server = spawn('node', ['seed-mcp/index.js'], { cwd: '/home/tankiso/Projects/seed-randomizer' });

let id = 1;

function sendRequest(method, params) {
  const req = {
    jsonrpc: "2.0",
    id: id++,
    method,
    params
  };
  server.stdin.write(JSON.stringify(req) + '\n');
}

server.stdout.on('data', data => {
  console.log('STDOUT:', data.toString());
});

server.stderr.on('data', data => {
  console.log('STDERR:', data.toString());
});

server.on('close', code => {
  console.log(`Server exited with code ${code}`);
});

// Test 1: Initialize MCP
sendRequest("initialize", {
  protocolVersion: "2024-11-05",
  capabilities: {},
  clientInfo: { name: "test-client", version: "1.0.0" }
});

setTimeout(() => {
  sendRequest("notifications/initialized", {});
  // Test 2: List tools
  sendRequest("tools/list", {});
}, 1000);

setTimeout(() => {
  // Test 3: Call db_save_direction
  sendRequest("tools/call", {
    name: "db_save_direction",
    arguments: { animal: "penguin", direction: "flying penguin", market_signal_score: 85 }
  });
}, 2000);

setTimeout(() => {
  // Test 4: Call db_query_direction
  sendRequest("tools/call", {
    name: "db_query_direction",
    arguments: { animal: "penguin" }
  });
}, 3000);

setTimeout(() => {
  // Test 5: Call concept_overlap_probe
  sendRequest("tools/call", {
    name: "concept_overlap_probe",
    arguments: { inputs: ["penguin shirt", "flying penguin shirt", "penguin flying shirt", "cute penguin"] }
  });
}, 4000);

setTimeout(() => {
  // Test 6: Call exa_ip_probe with fake phrase without API key
  sendRequest("tools/call", {
    name: "exa_ip_probe",
    arguments: { phrase: "test ip block" }
  });
}, 5000);

setTimeout(() => {
  server.kill();
}, 6000);

