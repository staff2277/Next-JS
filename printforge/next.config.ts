import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL("https://place-hold.it/*")],
  },
};
export default nextConfig;
