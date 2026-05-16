"use client";

import type { GeneratedSeed } from "@/lib/seed-engine";

interface SeedCardProps {
  seed: GeneratedSeed;
  seedText: string;
  onCopy: () => void;
  copied: boolean;
}

export function SeedCard({ seed, seedText, onCopy, copied }: SeedCardProps) {
  const hasMutation = !!seed.mutationApplied;
  const mutationLabel = seed.mutationType ?? "Mutation";

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "4px",
        padding: "1.8rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.4rem",
        minHeight: "260px",
        position: "relative",
        animation: "fadeIn 0.3s ease",
        borderColor: seed.contrastNote
          ? "var(--purple)"
          : seed.trend
          ? "var(--teal)"
          : hasMutation
          ? "#7c5fc2"
          : undefined,
        boxShadow: hasMutation ? "0 0 0 1px #7c5fc2, 0 4px 20px rgba(124,95,194,0.15)" : undefined,
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: "2px",
          borderRadius: "4px 4px 0 0",
          background: seed.contrastNote
            ? "var(--purple)"
            : seed.trend
            ? "var(--teal)"
            : hasMutation
            ? "#7c5fc2"
            : "var(--orange)",
          transition: "background 0.3s",
        }}
      />

      {/* Seed Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={labelStyle}>Animal</span>
          <span style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <span className={`badge ${seed.animal.tag}`} style={badgeStyle}>
              {seed.animal.label}
            </span>
          </span>
          {seed.archetypeLabel && (
            <span style={{ fontSize: "0.6rem", color: "var(--muted)" }}>
              {seed.archetypeLabel}
            </span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={labelStyle}>Emotional Angle</span>
          <span style={{ ...valueStyle, color: "var(--orange)" }}>{seed.angle}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={labelStyle}>Visual Aesthetic</span>
          <span style={valueStyle}>{seed.aesthetic}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          <span style={labelStyle}>Modes</span>
          <span style={{ fontSize: "0.7rem" }}>
            {seed.contrastNote ? (
              <span className="badge badge-contrast" style={badgeStyle}>CONTRAST</span>
            ) : hasMutation ? (
              <span style={{ color: "#7c5fc2", fontWeight: 600 }}>{mutationLabel}</span>
            ) : (
              <span style={{ color: "var(--muted)" }}>HARMONY</span>
            )}
            {seed.trend && (
              <>
                {" · "}
                <span className="badge badge-trend" style={badgeStyle}>TREND</span>
              </>
            )}
          </span>
        </div>
      </div>

      <hr style={dividerStyle} />

      <OutputBlock
        label="Composition Archetype"
        value={seed.composition.label}
        sub={seed.composition.hint}
      />

      <OutputBlock
        label="Phrase Density"
        value={
          <>
            {seed.density.label}{" "}
            <span style={{ color: "var(--muted)", fontSize: "0.7rem", fontWeight: 400 }}>
              {seed.density.hint}
            </span>
          </>
        }
        sub={`e.g. ${seed.density.example}`}
      />

      <hr style={dividerStyle} />

      <OutputBlock
        label="Color Palette"
        value={
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
            {seed.palette.map((c) => (
              <span key={c} style={paletteSwatchStyle}>{c}</span>
            ))}
          </div>
        }
      />

      {seed.trend && (
        <OutputBlock
          label="Trend Injector"
          value={<span className="badge badge-trend" style={badgeStyle}>{seed.trend}</span>}
        />
      )}

      {seed.contrastNote && (
        <OutputBlock
          label="Contrast Logic"
          value={<em style={{ fontSize: "0.72rem", color: "#c084fc" }}>{seed.contrastNote}</em>}
        />
      )}

      {seed.mutationApplied && (
        <OutputBlock
          label="Mutation"
          value={
            <span style={{ fontSize: "0.72rem", color: "#7c5fc2", fontStyle: "italic" }}>
              {seed.mutationApplied}
            </span>
          }
        />
      )}

      {seed.restraintApplied && (
        <OutputBlock
          label="Restraint Applied"
          value={<em style={{ fontSize: "0.72rem", color: "var(--green)" }}>{seed.restraintApplied}</em>}
        />
      )}

      <hr style={dividerStyle} />

      <OutputBlock
        label="Seed — paste into ChatGPT prompt generator"
        value={
          <div
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: "3px",
              padding: "1rem",
              fontSize: "0.76rem",
              color: "var(--cream)",
              lineHeight: "1.8",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
              userSelect: "all",
            }}
          >
            {seedText}
          </div>
        }
      />
    </div>
  );
}

function OutputBlock({
  label,
  value,
  sub,
}: {
  label: string;
  value: React.ReactNode;
  sub?: string;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <span style={labelStyle}>{label}</span>
      <span style={{ fontSize: "0.82rem", color: "var(--cream)", fontWeight: 600 }}>
        {value}
      </span>
      {sub && (
        <span style={{ fontSize: "0.68rem", color: "var(--muted)", marginTop: "-0.1rem" }}>
          {sub}
        </span>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.58rem",
  color: "var(--muted)",
  textTransform: "uppercase",
  letterSpacing: "0.14em",
};

const valueStyle: React.CSSProperties = {
  fontSize: "0.88rem",
  color: "var(--cream)",
  fontWeight: 600,
  lineHeight: "1.3",
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  fontSize: "0.58rem",
  padding: "0.18rem 0.5rem",
  borderRadius: "2px",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  fontWeight: 600,
};

const dividerStyle: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid var(--border)",
};

const paletteSwatchStyle: React.CSSProperties = {
  fontSize: "0.68rem",
  padding: "0.22rem 0.6rem",
  border: "1px solid #2e2b25",
  borderRadius: "2px",
  color: "#f0e6d0",
};