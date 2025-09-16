import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/r/pure-ui/:path([^.]*)",
        destination: "/r/pure-ui/:path.json",
        permanent: true,
      },
    ];
  },
  outputFileTracingIncludes: {
    "/*": ["./src/registry/**/*"],
  },
};

export default nextConfig;
