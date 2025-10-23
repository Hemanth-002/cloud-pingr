import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization for static export
  },
  assetPrefix: isProd ? '/cloud-pingr/' : '',
  basePath: isProd ? '/cloud-pingr' : '',
  output: 'export'
};

export default nextConfig;
