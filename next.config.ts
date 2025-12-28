import type { NextConfig } from "next";

// Set basePath for GitHub Pages deployment
// For local development, basePath is empty
// For production builds (including CI), use the repository name as basePath
const isProduction = process.env.NODE_ENV === 'production' || process.env.CI === 'true';
const basePath = isProduction ? '/it-smart-hiring-tech' : '';

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  trailingSlash: true,
};

export default nextConfig;
