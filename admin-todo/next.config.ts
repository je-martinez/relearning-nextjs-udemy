import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: [
      "tailus.io",
      "gravatar.com",
      "www.shutterstock.com",
      "img.freepik.com",
    ],
  },
};

export default nextConfig;
