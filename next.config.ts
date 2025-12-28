import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to a subdirectory (e.g., /repo-name/), uncomment and set:
  // basePath: process.env.NODE_ENV === 'production' ? '/repo-name' : '',
  // trailingSlash: true,
};

export default nextConfig;
