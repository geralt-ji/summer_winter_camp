/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'summer_winter_camp'

const nextConfig = {
  output: 'export',
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}` : undefined,
  images: { unoptimized: true },
}

module.exports = nextConfig

