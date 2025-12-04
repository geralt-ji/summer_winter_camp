"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"
import Image from "next/image"

export default function WinterCampPage() {
  const { t, locale } = useI18n()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            {t('winterCampPage.title')}
          </h1>

          <div className="flex justify-center mb-12">
            <img
              src={locale === 'en' ? "/assets/winter-images/webwxgetmsgimg-en.jpg" : "/assets/winter-images/webwxgetmsgimg.jpg"}
              alt="Winter Camp"
              className="max-w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed whitespace-pre-wrap">
              {t('winterCampPage.description')}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
