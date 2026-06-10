const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/app/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add Animal Archetype Dropdown
const animalDropdownIndex = content.indexOf('<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>\n          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Color / Markings</label>');

const archetypeDropdown = `
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Animal Archetype</label>
          <select 
            value={selectedArchetype?.arc || ""} 
            onChange={(e) => {
              const newArc = currentAnimal.archetypes.find((a: any) => a.arc === e.target.value);
              if (newArc) {
                setSelectedArchetype(newArc);
                setSelectedTheme(newArc.themes[0]);
                setSelectedFramework(newArc.frameworks[0]);
              }
            }}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {currentAnimal.archetypes.map((arc: any) => (
              <option key={arc.arc} value={arc.arc}>{arc.arc}</option>
            ))}
          </select>
        </div>

`;

content = content.slice(0, animalDropdownIndex) + archetypeDropdown + content.slice(animalDropdownIndex);

// 2. Add Phrase Framework Dropdown right above Humor / Phrase Style
const humorDropdownIndex = content.indexOf('<div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>\n          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Humor / Phrase Style</label>');

const frameworkDropdown = `
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Phrase Framework</label>
          <select 
            value={selectedFramework} 
            onChange={(e) => setSelectedFramework(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {selectedArchetype?.frameworks.map((f: string) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

`;

content = content.slice(0, humorDropdownIndex) + frameworkDropdown + content.slice(humorDropdownIndex);

fs.writeFileSync(filePath, content);
console.log('UI successfully updated with missing dropdowns.');
