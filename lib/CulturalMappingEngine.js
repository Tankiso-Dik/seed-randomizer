'use strict';

const fs = require('fs');
const path = require('path');
const ROOT = process.env.PROJECT_ROOT || path.join(__dirname, '..');

class CulturalMappingEngine {
  static getDiversityRoutes(animalData, count = 3) {
    const registersPath = path.join(ROOT, 'reference', 'registers.json');
    const expressionsPath = path.join(ROOT, 'reference', 'expressions.json');
    
    const registers = JSON.parse(fs.readFileSync(registersPath, 'utf8'));
    const expressions = JSON.parse(fs.readFileSync(expressionsPath, 'utf8'));
    
    const usedRegisters = new Set(animalData.used_vocabulary?.registers || []);
    
    // Available registers prioritizing unused ones
    const unusedRegisters = Object.keys(registers).filter(r => !usedRegisters.has(r));
    const regPool = unusedRegisters.length >= count ? unusedRegisters : Object.keys(registers);
    
    const exprPool = Object.keys(expressions);

    // Deterministic shuffle using run_count or just random? We want random diversity for the prompt maker.
    // However, pseudo-random based on current time or just Math.random is fine.
    const shuffledRegs = [...regPool].sort(() => 0.5 - Math.random());
    const shuffledExprs = [...exprPool].sort(() => 0.5 - Math.random());

    const routes = [];
    for (let i = 0; i < count; i++) {
      const regKey = shuffledRegs[i % shuffledRegs.length];
      const exprKey = shuffledExprs[i % shuffledExprs.length];
      
      routes.push({
        route_number: i + 1,
        register: regKey,
        register_slang: registers[regKey].slice(0, 4), // Sample of slang
        expression: exprKey,
        expression_visual: expressions[exprKey]
      });
    }

    return {
      animal: animalData.animal,
      used_registers: Array.from(usedRegisters),
      recommended_routes: routes
    };
  }
}

module.exports = CulturalMappingEngine;
