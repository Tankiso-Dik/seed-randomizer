// Collection Mode — generates cohesive product lines
// Fixed palette, typography, and composition with rotating animals + phrases

import { COMPOSITIONS, PHRASE_DENSITIES } from "./data";

export interface CollectionConfig {
  palette: keyof typeof COLLECTION_PALETTES;
  composition: keyof typeof COLLECTION_COMPOSITIONS;
  typography: keyof typeof COLLECTION_TYPOGRAPHY;
  range: number;
}

export const COLLECTION_PALETTES = {
  warmearth:  ["Muted orange","Cream","Charcoal"],
  forest:     ["Rustic green","Cream","Burnt sienna"],
  coastal:    ["Faded teal","Warm beige","Black"],
  mono:       ["Black","Muted orange","Warm beige"],
  dusty:      ["Dusty red","Muted mustard","Black"],
  midnight:   ["Deep plum","Dusty rose","Off-white"],
} as const;

export const COLLECTION_COMPOSITIONS = {
  circular:   { label:"Circular badge",           hint:"Mascot centered inside a ring or badge frame",               fits:["Western country pet identity","Retro outdoors aesthetic","Burnt-out but thriving"] },
  vertical:   { label:"Vertical stacked",        hint:"Mascot on top, phrase beneath, tight column",                fits:["Introvert humor","Cozy lifestyle","Cottagecore pet aesthetic","Quiet feral lifestyle"] },
  facecrop:   { label:"Oversized face crop",     hint:"Head fills most of the canvas, phrase small below or above", fits:["Sarcastic pet humor","Tired millennial humor","Mildly chaotic humor","Chaotic little gremlin energy"] },
  chest:      { label:"Small chest emblem",       hint:"Tight compact lockup, meant for left-chest placement",       fits:["Pet obsession identity","Cozy lifestyle","Creature solidarity"] },
  banner:     { label:"Wide retro banner",        hint:"Horizontal mascot with banner text above and below",         fits:["Retro outdoors aesthetic","Western country pet identity","National park nostalgia"] },
  crest:      { label:"Crest / shield structure", hint:"Heraldic-style formal frame around mascot",                 fits:["Western country pet identity","Creature solidarity","Burnt-out but thriving"] },
  bottomheavy:{ label:"Bottom-heavy mascot",      hint:"Mascot anchors bottom, large text dominates top",           fits:["Tired millennial humor","Introvert humor","Quiet feral lifestyle"] },
  diagonal:   { label:"Diagonal motion",          hint:"Mascot tilted or mid-action, phrase on a slant",            fits:["Mildly chaotic humor","Chaotic little gremlin energy","Spooky gothic pet vibes"] },
} as const;

export const COLLECTION_TYPOGRAPHY = {
  retro:       "Distressed retro serif",
  badge:       "Bold curved vintage badge text",
  western:     "Worn western slab serif",
  handlettered:"Rustic hand-lettered caps",
  condensed:   "Vintage condensed block type",
  cracked:     "Cracked retro display lettering",
  woodblock:   "Rough woodblock print type",
} as const;

export const DEFAULT_COLLECTION_CONFIG: CollectionConfig = {
  palette: "warmearth",
  composition: "circular",
  typography: "retro",
  range: 5,
};

export function paletteLabel(key: keyof typeof COLLECTION_PALETTES): string {
  const map: Record<string, string> = {
    warmearth: "Warm Earth · Orange / Cream / Charcoal",
    forest:    "Forest · Rustic Green / Cream / Burnt Sienna",
    coastal:   "Coastal · Faded Teal / Warm Beige / Black",
    mono:      "Mono · Black / Muted Orange / Warm Beige",
    dusty:     "Dusty · Dusty Red / Muted Mustard / Black",
    midnight:  "Midnight · Deep Plum / Dusty Rose / Off-white",
  };
  return map[key] ?? key;
}

export function compositionLabel(key: keyof typeof COLLECTION_COMPOSITIONS): string {
  return COLLECTION_COMPOSITIONS[key]?.label ?? key;
}

export function typographyLabel(key: keyof typeof COLLECTION_TYPOGRAPHY): string {
  return COLLECTION_TYPOGRAPHY[key] ?? key;
}

export function rangeLabel(range: number): string {
  return `${range} design${range !== 1 ? "s" : ""}`;
}