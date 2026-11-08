import path from "path"
import type { NextConfig } from "next"

// The first build used Spanish paths. English is now the default, so the old URLs redirect permanently.
const renamed: [string, string][] = [
  ["/cafes", "/coffees"],
  ["/servicios", "/services"],
  ["/comunidad", "/community"],
  ["/historia", "/story"],
  ["/contacto", "/contact"],
]

const nextConfig: NextConfig = {
  // Pin the workspace root: a lockfile higher up the tree otherwise confuses root inference.
  turbopack: { root: path.join(__dirname) },
  async redirects() {
    return renamed.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
