"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code2, Cpu, TrendingUp, Users2, Presentation } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { dictionary } from "@/lib/dictionary"

const icons = [Brain, Code2, Cpu, TrendingUp, Users2, Presentation]

export function Features() {
  const { t, locale } = useI18n()
  const featureItems = dictionary[locale].features.items

  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">{t("features.title")}</h2>
          <p className="text-lg text-muted-foreground text-balance">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featureItems.map((feature, idx) => {
            const Icon = icons[idx]
            return (
              <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg tech-gradient flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
