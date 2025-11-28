const isProd = process.env.NODE_ENV === 'production'
const repo = 'summer_winter_camp'
const envBase = process.env.NEXT_BASE_PATH || process.env.BASE_PATH
const envAsset = process.env.NEXT_ASSET_PREFIX || process.env.ASSET_PREFIX
let prefix = envBase || null
if (!prefix && process.env.CI_PAGES_URL) {
  try {
    const u = new URL(process.env.CI_PAGES_URL)
    prefix = u.pathname.replace(/\/$/, '')
  } catch {}
}
if (!prefix && isProd) {
  prefix = `/${repo}`
}
const assetPrefix = envAsset || prefix || undefined

const nextConfig = {
  output: 'export',
  basePath: prefix || undefined,
  assetPrefix,
  images: { unoptimized: true },
  trailingSlash: true,
}

module.exports = nextConfig

