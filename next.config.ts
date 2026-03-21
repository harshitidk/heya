import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/heya",
  assetPrefix: "/heya/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
