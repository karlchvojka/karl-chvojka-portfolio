import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV == 'production';
const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: isProd ? '/karl-chvojka-portfolio' : '',
  basePath: isProd ? '/karl-chvojka-production' : '',
  output: "export",
  images: { unoptimized: true },
  devIndicators: false
};

export default nextConfig;
