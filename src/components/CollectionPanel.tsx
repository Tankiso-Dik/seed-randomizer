"use client";

import type { GeneratedSeed } from "@/lib/seed-engine";
import {
  COLLECTION_PALETTES,
  COLLECTION_COMPOSITIONS,
  COLLECTION_TYPOGRAPHY,
  paletteLabel,
  compositionLabel,
  typographyLabel,
  rangeLabel,
  type CollectionConfig,
} from "@/lib/collections";

interface CollectionPanelProps {
  active: boolean;
  config: CollectionConfig;
  items: GeneratedSeed[];
  onToggle: () => void;
  onConfigChange: (config: CollectionConfig) => void;
  onGenerate: () => void;
  onShuffle: () => void;
}

export function CollectionPanel({
  active,
  config,
  items,
  onToggle,
  onConfigChange,
  onGenerate,
  onShuffle,
}: CollectionPanelProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "640px",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "1.2rem 1.4rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
        transition: "all 0.25s ease",
        borderColor: active ? "var(--orange)" : undefined,
        boxShadow: active ? "0 0 0 1px var(--orange), 0 4px 20px rgba(232,98,42,0.12)" : undefined,
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <span style={headerTitleStyle}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}>
            <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
            <rect x="7" y="1" width="4" height="4" rx="1" fill="currentColor"/>
            <rect x="1" y="7" width="4" height="4" rx="1" fill="currentColor"/>
            <rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor" opacity="0.6"/>
          </svg>
          Collection Mode
        </span>

        {/* Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", cursor: "pointer" }} onClick={onToggle}>
          <div
            style={{
              width: "32px",
              height: "16px",
              background: active ? "var(--orange)" : "var(--border)",
              borderRadius: "8px",
              position: "relative",
              transition: "background 0.2s",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "2px",
                left: active ? "18px" : "2px",
                width: "12px",
                height: "12px",
                background: "var(--cream)",
                borderRadius: "50%",
                transition: "left 0.2s",
              }}
            />
          </div>
          <span style={{ ...toggleLabelStyle, color: active ? "var(--orange)" : undefined }}>
            {active ? "On" : "Off"}
          </span>
        </div>
      </div>

      {/* Settings */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0.7rem",
          overflow: "hidden",
          maxHeight: active ? "200px" : "0",
          transition: "max-height 0.3s ease",
        }}
      >
        <Field label="Palette">
          <select
            value={config.palette}
            onChange={e => onConfigChange({ ...config, palette: e.target.value as keyof typeof COLLECTION_PALETTES })}
            style={selectStyle}
          >
            {(Object.keys(COLLECTION_PALETTES) as (keyof typeof COLLECTION_PALETTES)[]).map(k => (
              <option key={k} value={k}>{paletteLabel(k)}</option>
            ))}
          </select>
        </Field>

        <Field label="Composition">
          <select
            value={config.composition}
            onChange={e => onConfigChange({ ...config, composition: e.target.value as keyof typeof COLLECTION_COMPOSITIONS })}
            style={selectStyle}
          >
            {(Object.keys(COLLECTION_COMPOSITIONS) as (keyof typeof COLLECTION_COMPOSITIONS)[]).map(k => (
              <option key={k} value={k}>{compositionLabel(k)}</option>
            ))}
          </select>
        </Field>

        <Field label="Typography">
          <select
            value={config.typography}
            onChange={e => onConfigChange({ ...config, typography: e.target.value as keyof typeof COLLECTION_TYPOGRAPHY })}
            style={selectStyle}
          >
            {(Object.keys(COLLECTION_TYPOGRAPHY) as (keyof typeof COLLECTION_TYPOGRAPHY)[]).map(k => (
              <option key={k} value={k}>{typographyLabel(k)}</option>
            ))}
          </select>
        </Field>

        <Field label="Range">
          <select
            value={config.range}
            onChange={e => onConfigChange({ ...config, range: parseInt(e.target.value) })}
            style={selectStyle}
          >
            {[3, 5, 8, 12].map(n => (
              <option key={n} value={n}>{rangeLabel(n)}</option>
            ))}
          </select>
        </Field>
      </div>

      {/* Controls */}
      <div style={{ display: active ? "flex" : "none", gap: "0.6rem", alignItems: "center" }}>
        <button style={btnStyle} onClick={onGenerate}>
          ⟳ Generate Line
        </button>
        <button style={btnStyle} onClick={onShuffle}>
          Shuffle
        </button>
        {items.length > 0 && (
          <span style={{ fontSize: "0.62rem", color: "var(--muted)" }}>
            Line: <span style={{ color: "var(--orange)", fontWeight: 600 }}>{items.length}</span> designs
          </span>
        )}
      </div>

      {/* Preview */}
      {items.length > 0 && (
        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          {items.map((item, i) => (
            <div key={i} style={collectionItemStyle}>
              <span style={{ fontWeight: 600, color: "var(--cream)" }}>{item.animal.label}</span>
              {" · "}
              {item.angle}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
      <label style={{ fontSize: "0.56rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        {label}
      </label>
      {children}
    </div>
  );
}

const headerTitleStyle: React.CSSProperties = {
  fontSize: "0.65rem",
  color: "var(--muted)",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
};

const toggleLabelStyle: React.CSSProperties = {
  fontSize: "0.62rem",
  color: "var(--muted)",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
};

const selectStyle: React.CSSProperties = {
  background: "var(--bg)",
  border: "1px solid var(--border)",
  borderRadius: "3px",
  color: "var(--cream)",
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.68rem",
  padding: "0.45rem 0.6rem",
  cursor: "pointer",
  transition: "border-color 0.15s",
  width: "100%",
};

const btnStyle: React.CSSProperties = {
  fontFamily: "'IBM Plex Mono', monospace",
  fontSize: "0.68rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  border: "1px solid var(--border)",
  borderRadius: "3px",
  cursor: "pointer",
  padding: "0.5rem 0.9rem",
  background: "transparent",
  color: "var(--cream)",
  transition: "all 0.15s",
};

const collectionItemStyle: React.CSSProperties = {
  fontSize: "0.6rem",
  padding: "0.18rem 0.5rem",
  border: "1px solid var(--border)",
  borderRadius: "2px",
  color: "var(--muted)",
  animation: "fadeIn 0.3s ease",
};