import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  basePath: isProd ? "/karl-chvojka-portfolio" : '',
  output: "export",
  images: { unoptimized: true, path: "/" },
  devIndicators: false,
  distDir: 'dist'
};

export default nextConfig;
