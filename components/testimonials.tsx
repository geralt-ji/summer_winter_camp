"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { dictionary } from "@/lib/dictionary"

export function Testimonials() {
  const { t, locale } = useI18n()
  const testimonials = dictionary[locale].testimonials.items

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{t("testimonials.badge")}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">{t("testimonials.title")}</h2>
          <p className="text-lg text-muted-foreground text-balance">
            {t("testimonials.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="border-2 hover:shadow-lg transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
            >
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              <CardContent className="p-6 relative flex flex-col flex-1 gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="pt-2 border-t border-border mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
