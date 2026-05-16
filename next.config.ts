import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Silence the lockfile warning by not setting turbopack.root
  // The warning is cosmetic and doesn't affect the build
};

export default nextConfig;