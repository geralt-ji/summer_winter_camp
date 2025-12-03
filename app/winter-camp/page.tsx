"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useI18n } from "@/components/i18n-provider"
import Image from "next/image"

export default function WinterCampPage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            {t('winterCampPage.title')}
          </h1>

          <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl mb-12">
            <Image
              src="/assets/winter-images/webwxgetmsgimg.jpg"
              alt="Winter Camp"
              fill
              className="object-cover"
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
