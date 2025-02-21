import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  basePath: "/nlw-connect-frontend",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  assetPrefix: "/nlw-connect-frontend/",
}

export default nextConfig
