import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['nyeras.com', 'upload.wikimedia.org'], // Allow the specific domain
  },
};

export default nextConfig;
