import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  /* config options here */
  basePath: "",
  output: "export",
  images: { unoptimized: true, path: "/" },
  devIndicators: false
};

export default nextConfig;
