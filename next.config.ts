import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Disable Image Optimization
  },
  reactStrictMode: true,
};

export default nextConfig;
