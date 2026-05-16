"use client";

import { useState, useCallback } from "react";
import { SeedCard } from "@/components/SeedCard";
import { CollectionPanel } from "@/components/CollectionPanel";
import { generateSeed, formatSeedText, type GeneratedSeed } from "@/lib/seed-engine";
import { createMemory, type MemoryState } from "@/lib/memory";
import { DEFAULT_COLLECTION_CONFIG, type CollectionConfig } from "@/lib/collections";

const PROMPT_GENERATOR = `You are a TeePublic t-shirt design prompt generator. The user will paste a seed from a randomizer tool. Your only job is to read that seed and output a single production-ready image generation prompt. Do not generate an image. Do not explain your choices. Do not add commentary. Output the prompt only.

---

WHAT THE SEED GIVES YOU:

The seed will always include:
- Animal (e.g. Possum, Corgi, Axolotl)
- Emotional Angle (e.g. Tired millennial humor, Quiet feral lifestyle)
- Visual Aesthetic (e.g. Worn screenprint graphic, Rustic vintage badge emblem)
- Composition (e.g. Oversized face crop — Head fills most of the canvas, phrase small below or above)
- Phrase Density (e.g. Sparse 2–4 words / Medium 5–8 words / Conversational 9–14 words)
- Color Palette (e.g. Dusty red, Muted mustard, Black)

It may also include:
- Trend Injector (a micro-culture label like "Cozy doom" or "Rural cryptid")
- Contrast Note (a logic note like "soft energy / hard visual" — use this to intentionally mismatch the mood of the phrase against the weight of the visual style)
- Animal Archetype (e.g. "survival / deadpan / low energy" — use this to calibrate phrase tone)
- Restraint Applied (a note that density was forced sparse to prevent over-layering — honor it in phrase length)

---

WHAT YOU DO WITH THE SEED:

1. IDENTITY FIRST — Before thinking about visuals, define who wears this shirt.
   Ask yourself: what kind of person does this animal + angle signal?
   Example: Possum + Tired millennial humor = someone who relates to being nocturnal, underestimated, and surviving on spite.
   That identity becomes the emotional core of the design.

2. GENERATE THE PHRASE — Write one wearable phrase that captures that identity.
   Use the Phrase Density field to control length:
   - Sparse (2–4 words): stripped-back, punchy, typographic weight carries the meaning. e.g. "Emotionally Nocturnal", "Professionally Tired"
   - Medium (5–8 words): one complete thought, conversational but tight. e.g. "I'm Trying My Best, Unfortunately"
   - Conversational (9–14 words): a full sentence someone might actually say out loud. e.g. "I Cancel Plans Professionally And Recreationally"
   The phrase must feel:
   - Like a wearable personal flag, not a caption
   - Specific and real, not generic
   - Funny, comforting, or quietly unhinged depending on the angle
   If a Contrast Note is present: make the phrase feel emotionally mismatched from the visual weight on purpose.
   If a Trend Injector is present: let it flavor the phrase and mascot vibe without making it a costume.
   Avoid: forced puns, generic pet slogans, "Live Laugh Love" energy, childish humor, gibberish, filler text, decorative fake words.

3. DESCRIBE THE MASCOT — One sentence describing the animal mascot.
   The mascot must:
   - Have ONE strong expressive pose or attitude that matches the identity
   - Feel graphic, simplified, and charming — not realistic
   - Use bold simplified shapes with clean outlines
   - Have readable silhouette even at small size
   - Avoid realistic fur, hair strands, painterly detail, photorealism

4. APPLY THE COMPOSITION ARCHETYPE — Use the Composition field from the seed to describe the layout behavior in the prompt:
   - Circular badge → mascot centered inside a circular ring or badge frame, text arcing around the outside
   - Vertical stacked → mascot on top, phrase stacked beneath, tight vertical column layout
   - Oversized face crop → animal head fills most of the canvas, phrase in small text below or above
   - Small chest emblem → tight compact lockup, designed for left-chest placement
   - Wide retro banner → horizontal mascot with text banner above and below
   - Crest / shield structure → heraldic shield or formal crest framing the mascot
   - Bottom-heavy mascot → mascot anchors the lower half, large bold text dominates the top
   - Diagonal motion → mascot tilted or mid-action, phrase set on a diagonal slant

5. ASSEMBLE THE FULL IMAGE PROMPT using the structure below.

---

IMAGE PROMPT STRUCTURE (fill every bracket — output this and nothing else):

A flat screenprint-style t-shirt graphic of a [MASCOT DESCRIPTION — animal, expression, pose, one key attitude detail], designed as a [VISUAL AESTHETIC] with a [COMPOSITION ARCHETYPE] layout. The design features the phrase "[PHRASE]" in [TYPOGRAPHY STYLE] lettering, integrated naturally into the composition. Color palette: [LIST COLORS FROM SEED]. Flat colors only, no gradients, no shading, no glossy rendering. Bold simplified shapes, clean outlines, strong silhouette readability, restrained linework with vintage engraving influence. [COMPOSITION-SPECIFIC LAYOUT INSTRUCTION — describe where mascot sits, where text sits, how space is used]. Strong contrast, mascot-first hierarchy with text supporting — not competing. Minimal decorative elements only. Transparent background, no mockup, no shirt shown, no scenery, isolated graphic only. Portrait orientation, optimized for print at 4500 x 5400 pixels. Avoid photorealism, 3D rendering, anime style, watercolor, cinematic lighting, cluttered composition, extra limbs, malformed anatomy, AI artifacting, gibberish text, decorative fake lettering.

---

TYPOGRAPHY STYLE POOL (pick one that fits the emotional angle, aesthetic, and phrase density):

- Distressed retro serif (good for medium + conversational phrases)
- Bold curved vintage badge text (good for circular badge compositions)
- Worn western slab serif (good for western identity + banner layouts)
- Rustic hand-lettered caps (good for sparse phrases, cottagecore, cozy angles)
- Vintage condensed block type (good for bottom-heavy + vertical stacked layouts)
- Cracked retro display lettering (good for spooky, chaotic, gremlin angles)
- Rough woodblock print type (good for national park, retro outdoors aesthetics)

---

IMPORTANT OUTPUT RULES:

- Output the image prompt only
- No intro sentence, no label, no explanation before or after
- Do not wrap the output in quotes
- Do not add a title or header
- The phrase inside the prompt must be a real meaningful sentence — never placeholder text, never gibberish
- Every word in the design must be intentional and readable
- The prompt should be paste-ready with zero editing needed`;

export default function Home() {
  const [memory] = useState<MemoryState>(() => createMemory());
  const [seed, setSeed] = useState<GeneratedSeed | null>(null);
  const [seedText, setSeedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [collectionActive, setCollectionActive] = useState(false);
  const [collectionConfig, setCollectionConfig] = useState<CollectionConfig>(DEFAULT_COLLECTION_CONFIG);
  const [collectionItems, setCollectionItems] = useState<GeneratedSeed[]>([]);

  const handleRandomize = useCallback(() => {
    const generated = generateSeed(memory, collectionActive ? collectionConfig : undefined);
    const text = formatSeedText(generated);
    setSeed(generated);
    setSeedText(text);
    setCopied(false);
  }, [memory, collectionActive, collectionConfig]);

  const handleCopySeed = useCallback(() => {
    navigator.clipboard.writeText(seedText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, [seedText]);

  const handleCopyPrompt = useCallback(() => {
    navigator.clipboard.writeText(PROMPT_GENERATOR).then(() => {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 1800);
    });
  }, []);

  const handleCollectionToggle = useCallback(() => {
    setCollectionActive(prev => {
      if (prev) {
        // Turning off — clear items
        setCollectionItems([]);
      }
      return !prev;
    });
  }, []);

  const handleGenerateCollection = useCallback(() => {
    const items: GeneratedSeed[] = [];
    for (let i = 0; i < collectionConfig.range; i++) {
      const generated = generateSeed(memory, collectionConfig);
      items.push(generated);
    }
    setCollectionItems(items);
  }, [memory, collectionConfig]);

  const handleShuffleCollection = useCallback(() => {
    const items: GeneratedSeed[] = [];
    for (let i = 0; i < collectionConfig.range; i++) {
      const generated = generateSeed(memory, collectionConfig);
      items.push(generated);
    }
    setCollectionItems(items);
  }, [memory, collectionConfig]);

  return (
    <main style={{ width: "100%", maxWidth: "640px", display: "flex", flexDirection: "column", gap: "1.6rem", alignItems: "center" }}>
      {/* Title */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 6vw, 4rem)", letterSpacing: "0.08em", color: "var(--orange)", lineHeight: 1 }}>
          Seed Randomizer
        </h1>
        <p style={{ fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", marginTop: "-0.5rem" }}>
          TeePublic T-Shirt Design · Prompt Seed Generator
        </p>
      </div>

      {/* Collection Panel */}
      <CollectionPanel
        active={collectionActive}
        config={collectionConfig}
        items={collectionItems}
        onToggle={handleCollectionToggle}
        onConfigChange={setCollectionConfig}
        onGenerate={handleGenerateCollection}
        onShuffle={handleShuffleCollection}
      />

      {/* Seed Card */}
      {seed ? (
        <SeedCard seed={seed} seedText={seedText} onCopy={handleCopySeed} copied={copied} />
      ) : (
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          width: "100%",
          padding: "3rem 1.8rem",
          textAlign: "center",
          minHeight: "260px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          <div style={{ color: "var(--muted)", fontSize: "0.78rem", letterSpacing: "0.06em", lineHeight: "1.9" }}>
            Hit <strong style={{ color: "var(--orange)" }}>RANDOMIZE</strong> to generate a design seed.<br/>
            <span style={{ fontSize: "0.65rem", color: "#4a4238" }}>Every roll blends evergreen, novelty, and wild animals with smart defaults.</span>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.8rem", width: "100%" }}>
        <button
          onClick={handleRandomize}
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
          onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = "#ff7340"; (e.target as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
          onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = "var(--orange)"; (e.target as HTMLButtonElement).style.transform = ""; }}
        >
          ⟳ Randomize
        </button>
        <button
          onClick={handleCopySeed}
          disabled={!seed}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            border: "1px solid var(--border)",
            borderRadius: "3px",
            cursor: seed ? "pointer" : "not-allowed",
            padding: "0.85rem 1.2rem",
            background: copied ? "var(--green)" : "transparent",
            color: copied ? "#fff" : "var(--cream)",
            flex: "0 0 auto",
            opacity: seed ? 1 : 0.3,
            transition: "all 0.15s",
          }}
        >
          {copied ? "Copied!" : "Copy Seed"}
        </button>
      </div>

      {/* Prompt Generator */}
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <span style={{ fontSize: "0.58rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
            Prompt Generator (for ChatGPT)
          </span>
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
            onMouseEnter={e => { if (!copiedPrompt) (e.target as HTMLButtonElement).style.background = "#7c5fc2"; }}
            onMouseLeave={e => { if (!copiedPrompt) (e.target as HTMLButtonElement).style.background = "var(--purple)"; }}
          >
            {copiedPrompt ? "Copied!" : "Copy Prompt Generator"}
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
          {PROMPT_GENERATOR}
        </div>
      </div>
    </main>
  );
}