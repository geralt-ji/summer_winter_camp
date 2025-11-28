/**
 * 目的：为 Next.js 配置静态导出模式，修复 GitHub Actions 部署时 `next export` 被移除的问题。
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = nextConfig

