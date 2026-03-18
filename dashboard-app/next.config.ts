import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      }
    ],
  },
};

export default nextConfig;
