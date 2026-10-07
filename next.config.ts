import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // For GitHub Pages the site is served from a subpath (/vzhik).
  // Set DEPLOY_BASE_PATH=/vzhik only for the production build;
  // local dev keeps the root path.
  ...(process.env.DEPLOY_BASE_PATH
    ? { basePath: process.env.DEPLOY_BASE_PATH }
    : {}),
};

export default nextConfig;
