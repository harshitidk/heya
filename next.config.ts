import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Only apply basePath if building for GitHub Pages subfolder
  basePath: process.env.GITHUB_ACTIONS === 'true' ? "/heya" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
