import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { I18nProvider } from "@/components/i18n-provider"

export const metadata: Metadata = {
  title: "SDS4A - 数据科学教育平台 | 夏令营·冬令营·线上课程",
  description:
    "由哈佛、多伦多等顶尖大学教授授课，提供数据科学夏令营、冬令营和线上课程。学习Python、机器学习、人工智能，树莓派实战项目，培养未来科技人才。",
  keywords: "数据科学,夏令营,冬令营,线上课程,Python,机器学习,人工智能,编程教育",
  generator: "v0.app",
  icons: {
    icon: "/celehs.png",
    apple: "/celehs.png",
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
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
