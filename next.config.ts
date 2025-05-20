import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.themoviedb.org",
        port: "",
        pathname: "/t/p/w220_and_h330_face/**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
