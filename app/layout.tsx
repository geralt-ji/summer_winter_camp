import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "SDS4A - 数据科学教育平台 | 夏令营·冬令营·线上课程",
  description:
    "由哈佛、多伦多等顶尖大学教授授课，提供数据科学夏令营、冬令营和线上课程。学习Python、机器学习、人工智能，树莓派实战项目，培养未来科技人才。",
  keywords: "数据科学,夏令营,冬令营,线上课程,Python,机器学习,人工智能,编程教育",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
