import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['nyeras.com', 'upload.wikimedia.org','encrypted-tbn0.gstatic.com'], // Allow the specific domain
  },
};

export default nextConfig;
