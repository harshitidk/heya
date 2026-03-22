import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: "export",
  // Ensure the base path and asset prefix are correctly set for GitHub Pages
  // If you use a custom domain, you MUST set both to ""
  basePath: isGithubActions ? "/heya" : "",
  assetPrefix: isGithubActions ? "/heya/" : "",
  generateBuildId: async () => process.env.GITHUB_SHA || 'dev',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
