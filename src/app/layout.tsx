import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seed Randomizer — TeePublic T-Shirt Design Prompt Generator",
  description: "Generate randomized design seeds for TeePublic t-shirt listings. Combines animals, emotional angles, aesthetics, and composition archetypes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=IBM+Plex+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}