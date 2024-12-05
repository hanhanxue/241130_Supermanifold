import type { NextConfig } from "next"

import { withPlausibleProxy } from "next-plausible"

const nextConfig: NextConfig = withPlausibleProxy({
  customDomain: "https://plausible.hanhanxueb.synology.me"
})({
  /* config options here */
})

export default nextConfig
