"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Snowflake, Monitor, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/components/i18n-provider"
import { dictionary } from "@/lib/dictionary"

export function ProgramsGrid() {
  const { t, locale } = useI18n()
  const programsDict = dictionary[locale].programs

  const programs = [
    {
      id: "summer",
      icon: Sun,
      data: programsDict.items.summer,
      gradient: "from-orange-500/10 to-yellow-500/10",
      iconColor: "text-orange-600",
    },
    {
      id: "winter",
      icon: Snowflake,
      data: programsDict.items.winter,
      gradient: "from-blue-500/10 to-cyan-500/10",
      iconColor: "text-blue-600",
    },
  ]

  return (
    <section id="programs" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">{programsDict.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">
            {programsDict.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {programs.map((program) => {
            const Icon = program.icon
            return (
              <Card
                key={program.id}
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <CardHeader className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-background/80 ${program.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {program.data.season}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.data.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{program.data.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Program Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{programsDict.duration}{program.data.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{programsDict.location}{program.data.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{programsDict.capacity}{program.data.capacity}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">{programsDict.highlights}</h4>
                    <ul className="space-y-2">
                      {program.data.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full tech-gradient text-primary-foreground" asChild>
                    <Link href={
                      program.id === "winter" ? "/winter-camp" : 
                      program.id === "summer" ? "/summer-camp" : 
                      "#contact"
                    }>
                      {program.data.cta}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
