"use client";

import { useState, useCallback, useEffect } from "react";
import { ANIMALS_DATA, RENDER_STYLES, THEMES, HUMOR_STYLES } from "@/lib/data";

export default function Home() {
  const [selectedAnimalId, setSelectedAnimalId] = useState<string>("pig");
  
  const currentAnimal = ANIMALS_DATA[selectedAnimalId];

  const [selectedColor, setSelectedColor] = useState<string>(currentAnimal?.colors[0] || "");
  const [selectedAngle, setSelectedAngle] = useState<string>(currentAnimal?.angles[0] || "");
  const [selectedAesthetic, setSelectedAesthetic] = useState<string>(currentAnimal?.aesthetics[0] || "");
  const [selectedTheme, setSelectedTheme] = useState<string>(currentAnimal?.archetypes[0]?.themes[0] || "none");
  const [selectedFramework, setSelectedFramework] = useState<string>(currentAnimal?.archetypes[0]?.frameworks[0] || "");
  const [selectedArchetype, setSelectedArchetype] = useState<any>(currentAnimal?.archetypes[0] || null);
  const [selectedHumor, setSelectedHumor] = useState<string>("sarcastic");
  const [selectedComposition, setSelectedComposition] = useState<string>(currentAnimal?.compositions[0] || "");
  const [selectedRenderStyle, setSelectedRenderStyle] = useState<string>("flat");
  
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [copiedBatch, setCopiedBatch] = useState(false);

  const handleAnimalChange = useCallback((newAnimalId: string) => {
    setSelectedAnimalId(newAnimalId);
    const newAnimal = ANIMALS_DATA[newAnimalId];
    if (newAnimal) {
      const firstArc = newAnimal.archetypes[0];
      setSelectedArchetype(firstArc);
      setSelectedFramework(firstArc.frameworks[0]);
      setSelectedTheme(firstArc.themes[0]);
      setSelectedColor(newAnimal.colors[0]);
      setSelectedAngle(newAnimal.angles[0]);
      setSelectedAesthetic(newAnimal.aesthetics[0]);
      setSelectedComposition(newAnimal.compositions[0]);
    }
  }, []);

  const handleRandomizeAll = useCallback(() => {
    const randomAnimalKeys = Object.keys(ANIMALS_DATA);
    const randomAnimalId = randomAnimalKeys[Math.floor(Math.random() * randomAnimalKeys.length)];
    const animal = ANIMALS_DATA[randomAnimalId];
    setSelectedAnimalId(randomAnimalId);
    
    const randArc = animal.archetypes[Math.floor(Math.random() * animal.archetypes.length)];
    setSelectedArchetype(randArc);
    setSelectedColor(animal.colors[Math.floor(Math.random() * animal.colors.length)]);
    setSelectedAngle(animal.angles[Math.floor(Math.random() * animal.angles.length)]);
    setSelectedAesthetic(animal.aesthetics[Math.floor(Math.random() * animal.aesthetics.length)]);
    setSelectedTheme(randArc.themes[Math.floor(Math.random() * randArc.themes.length)]);
    setSelectedFramework(randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)]);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(animal.compositions[Math.floor(Math.random() * animal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, []);

  const handleRandomizeCurrent = useCallback(() => {
    if (!currentAnimal) return;
    const randArc = currentAnimal.archetypes[Math.floor(Math.random() * currentAnimal.archetypes.length)];
    setSelectedArchetype(randArc);
    setSelectedColor(currentAnimal.colors[Math.floor(Math.random() * currentAnimal.colors.length)]);
    setSelectedAngle(currentAnimal.angles[Math.floor(Math.random() * currentAnimal.angles.length)]);
    setSelectedAesthetic(currentAnimal.aesthetics[Math.floor(Math.random() * currentAnimal.aesthetics.length)]);
    setSelectedTheme(randArc.themes[Math.floor(Math.random() * randArc.themes.length)]);
    setSelectedFramework(randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)]);
    setSelectedHumor(HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)].id);
    setSelectedComposition(currentAnimal.compositions[Math.floor(Math.random() * currentAnimal.compositions.length)]);
    setSelectedRenderStyle(RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)].id);
  }, [currentAnimal]);

  const currentRenderStyle = RENDER_STYLES.find(r => r.id === selectedRenderStyle);
  const currentTheme = THEMES.find(t => t.id === selectedTheme);
  const currentHumor = HUMOR_STYLES.find(h => h.id === selectedHumor);

  const generatedPrompt = currentAnimal?.promptTemplate
    .replace("[ARCHETYPE]", selectedArchetype?.arc || "")
    .replace("[BUYER_IDENTITY]", selectedArchetype?.idty || "")
    .replace("[FRAMEWORK]", selectedFramework || "")
    .replace("[COLOR]", selectedColor)
    .replace("[ANGLE]", selectedAngle)
    .replace("[AESTHETIC]", selectedAesthetic)
    .replace("[COMPOSITION]", selectedComposition)
    .replace("[RENDER_STYLE_LABEL]", currentRenderStyle?.label || "")
    .replace("[RENDER_STYLE_INSTRUCTION]", currentRenderStyle?.instruction || "")
    .replace("[THEME]", THEMES.find(t => t.id === selectedTheme)?.label || "")
    .replace("[HUMOR_STYLE]", currentHumor?.label || "") || "";

  const handleCopyPrompt = useCallback(() => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 1800);
    });
  }, [generatedPrompt]);

  const handleCopyBatch = useCallback(() => {
    let batchPrompts = [];
    const randomAnimalKeys = Object.keys(ANIMALS_DATA);
    for (let i = 0; i < 10; i++) {
      const randomAnimalId = randomAnimalKeys[Math.floor(Math.random() * randomAnimalKeys.length)];
      const animal = ANIMALS_DATA[randomAnimalId];
      const randColor = animal.colors[Math.floor(Math.random() * animal.colors.length)];
      const randAngle = animal.angles[Math.floor(Math.random() * animal.angles.length)];
      const randAesthetic = animal.aesthetics[Math.floor(Math.random() * animal.aesthetics.length)];
      const randComp = animal.compositions[Math.floor(Math.random() * animal.compositions.length)];
      const randRender = RENDER_STYLES[Math.floor(Math.random() * RENDER_STYLES.length)];
      const randArc = animal.archetypes[Math.floor(Math.random() * animal.archetypes.length)];
      const randTheme = randArc.themes[Math.floor(Math.random() * randArc.themes.length)];
      const randFramework = randArc.frameworks[Math.floor(Math.random() * randArc.frameworks.length)];
      const randHumor = HUMOR_STYLES[Math.floor(Math.random() * HUMOR_STYLES.length)];
      const p = animal.promptTemplate
        .replace("[ARCHETYPE]", randArc.arc)
        .replace("[BUYER_IDENTITY]", randArc.idty)
        .replace("[FRAMEWORK]", randFramework)
        .replace("[COLOR]", randColor)
        .replace("[ANGLE]", randAngle)
        .replace("[AESTHETIC]", randAesthetic)
        .replace("[COMPOSITION]", randComp)
        .replace("[RENDER_STYLE_LABEL]", randRender.label)
        .replace("[RENDER_STYLE_INSTRUCTION]", randRender.instruction)
        .replace("[THEME]", THEMES.find(t => t.id === randTheme)?.label || randTheme)
        .replace("[HUMOR_STYLE]", randHumor.label);
      
      batchPrompts.push(`--- PROMPT ${i + 1} ---\n\n${p}\n\n`);
    }
    
    navigator.clipboard.writeText(batchPrompts.join("")).then(() => {
      setCopiedBatch(true);
      setTimeout(() => setCopiedBatch(false), 2000);
    });
  }, []);

  if (!currentAnimal) return null;

  return (
    <main style={{ width: "100%", maxWidth: "640px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.6rem", alignItems: "center", padding: "2rem" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "0.08em", color: "var(--orange)", lineHeight: 1 }}>
          Seed Builder
        </h1>
        <p style={{ fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "-0.5rem" }}>
          TeePublic T-Shirt Design · Prompt Builder
        </p>
      </div>

      <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          width: "100%",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.2rem",
        }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Select Animal</label>
          <select 
            value={selectedAnimalId} 
            onChange={(e) => handleAnimalChange(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {Object.values(ANIMALS_DATA).map(animal => (
              <option key={animal.id} value={animal.id}>{animal.label}</option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Color / Markings</label>
          <select 
            value={selectedColor} 
            onChange={(e) => setSelectedColor(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {currentAnimal.colors.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Emotional Angle</label>
          <select 
            value={selectedAngle} 
            onChange={(e) => setSelectedAngle(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {currentAnimal.angles.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Visual Aesthetic</label>
          <select 
            value={selectedAesthetic} 
            onChange={(e) => setSelectedAesthetic(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {currentAnimal.aesthetics.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Core Render Style</label>
          <select 
            value={selectedRenderStyle} 
            onChange={(e) => setSelectedRenderStyle(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {RENDER_STYLES.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Hobby / Props / Season</label>
          <select 
            value={selectedTheme} 
            onChange={(e) => setSelectedTheme(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {THEMES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Humor / Phrase Style</label>
          <select 
            value={selectedHumor} 
            onChange={(e) => setSelectedHumor(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {HUMOR_STYLES.map(h => <option key={h.id} value={h.id}>{h.label}</option>)}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={{ fontSize: "0.75rem", fontWeight: "bold", color: "var(--cream)", textTransform: "uppercase" }}>Composition</label>
          <select 
            value={selectedComposition} 
            onChange={(e) => setSelectedComposition(e.target.value)}
            style={{ padding: "0.5rem", borderRadius: "4px", background: "var(--bg)", color: "var(--cream)", border: "1px solid var(--border)" }}
          >
            {currentAnimal.compositions.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.8rem", width: "100%" }}>
        <button
          onClick={handleRandomizeCurrent}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "0.85rem 1.2rem",
            background: "var(--orange)",
            color: "#0f0e0c",
            flex: 1,
            transition: "all 0.15s ease",
          }}
        >
          ⟳ Randomize This Animal
        </button>
        <button
          onClick={handleRandomizeAll}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "1px solid var(--orange)",
            borderRadius: "3px",
            cursor: "pointer",
            padding: "0.85rem 1.2rem",
            background: "transparent",
            color: "var(--orange)",
            flex: 1,
            transition: "all 0.15s ease",
          }}
        >
          ⟳ Randomize Everything
        </button>
      </div>

      {/* Prompt Generator Output */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.8rem", marginTop: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontSize: "0.58rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.14em", flex: 1 }}>
            Generated Prompt
          </span>
          <button
            onClick={handleCopyBatch}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid var(--purple)",
              borderRadius: "3px",
              cursor: "pointer",
              padding: "0.5rem 0.9rem",
              background: copiedBatch ? "var(--green)" : "transparent",
              color: copiedBatch ? "#fff" : "var(--purple)",
              flex: "0 0 auto",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            {copiedBatch ? "Copied Batch!" : "Copy Batch (10)"}
          </button>
          <button
            onClick={handleCopyPrompt}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.65rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              padding: "0.5rem 0.9rem",
              background: copiedPrompt ? "var(--green)" : "var(--purple)",
              color: "#fff",
              flex: "0 0 auto",
              whiteSpace: "nowrap",
              transition: "all 0.15s",
            }}
          >
            {copiedPrompt ? "Copied!" : "Copy Prompt"}
          </button>
        </div>
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "3px",
          padding: "1rem",
          fontSize: "0.72rem",
          color: "var(--muted)",
          lineHeight: "1.6",
          whiteSpace: "pre-wrap",
          userSelect: "all",
          maxHeight: "300px",
          overflowY: "auto",
        }}>
          {generatedPrompt}
        </div>
      </div>
    </main>
  );
}