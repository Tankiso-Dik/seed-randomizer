#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

// Mock deterministic blacklist of trademarked or banned terms.
// In a production environment, this would query the USPTO/WIPO API.
const TRADEMARKS = [
  "disney", "marvel", "star wars", "nike", "just do it", "adidas", 
  "supreme", "gucci", "louis vuitton", "mickey", "yoda", "harry potter",
  "hogwarts", "nintendo", "pokemon", "pikachu", "mario"
];

function checkIp(phrase) {
  const normalized = phrase.toLowerCase();
  
  for (const tm of TRADEMARKS) {
    if (normalized.includes(tm)) {
      return {
        safe: false,
        reason: `Trademark violation: contains protected term "${tm}"`
      };
    }
  }

  return {
    safe: true,
    reason: "No trademark conflicts found in registry."
  };
}

const cmd = process.argv[2];
const args = process.argv.slice(3);

if (cmd === 'check-ip') {
  const phrase = args.join(' ');
  if (!phrase) {
    console.error("Usage: node bin/safety.js check-ip \"<phrase>\"");
    process.exit(1);
  }

  console.log(`Checking IP safety for: "${phrase}"...`);
  const result = checkIp(phrase);

  if (result.safe) {
    console.log(`✅ PASS: ${result.reason}`);
    process.exit(0);
  } else {
    console.error(`❌ FAIL: ${result.reason}`);
    process.exit(1);
  }
} else {
  console.log("Usage:");
  console.log("  node bin/safety.js check-ip \"<phrase>\"");
  process.exit(1);
}
