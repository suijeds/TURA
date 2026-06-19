import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['clerk.accounts.dev'],
  },
  async rewrites() {
    return [
      {
        source: '/api/__clerk/:path*',
        // Enforce secure HTTPS connection to prevent SSL Handshake (Error 525)
        destination: "https://smart-jawfish-6.clrk.accounts.dev/v1/:path*",
      },
    ];
  },
};

export default nextConfig;
