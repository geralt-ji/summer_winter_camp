"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"

export default function SummerCampPage() {
  const { t, locale } = useI18n()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            {t('summerCampPage.title')}
          </h1>

          <div className="mb-12">
            <img
              src={locale === 'en' ? "/assets/summer-images/summer-camp-EN.png" : "/assets/summer-images/summer-camp-cn.png"}
              alt="Summer Camp"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              className="text-lg leading-relaxed" 
              dangerouslySetInnerHTML={{ __html: t('summerCampPage.description') }} 
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
