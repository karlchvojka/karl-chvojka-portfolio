import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/deploy-to-gh-pages",
  output: "export",
  images: { unoptimized: true },
  devIndicators: false
};

export default nextConfig;
