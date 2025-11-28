const envBase = process.env.NEXT_BASE_PATH || process.env.BASE_PATH
let prefix = envBase || null
if (!prefix && process.env.CI_PAGES_URL) {
  try {
    const u = new URL(process.env.CI_PAGES_URL)
    const p = u.pathname
    if (p && p !== '/') {
      prefix = p.replace(/\/$/, '')
    }
  } catch {}
}
 
const nextConfig = {
  output: 'export',
  basePath: prefix || undefined,
  assetPrefix: prefix || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig

