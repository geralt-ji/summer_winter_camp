"use client"

import { useI18n } from "@/components/i18n-provider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const collaborators = [
  { id: 'molei', image: 'molei-liu.jpg' },
  { id: 'doudou', image: 'doudou-zhou.jpg' },
  { id: 'chuan', image: 'chuan-hong.jpg' },
]

export function Instructors() {
  const { t } = useI18n()

  return (
    <section id="instructors" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* New People Section */}
        <div className="container mx-auto px-4 lg:px-8">
          {/* Research Team Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">{t('instructors.title')}</h1>
             <p className="text-lg mb-5 max-w-4xl mx-auto text-muted-foreground">{t('instructors.description')}</p>
          </div>

          {/* CELEHS Director */}
          <div className="mb-16">
             <h2 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">{t('instructors.director.title')}</h2>
             <Card className="border-0 shadow-sm overflow-hidden bg-background">
                <CardContent className="p-8">
                   <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0 text-center">
                         <a href="https://dbmi.hms.harvard.edu/people/tianxi-cai" target="_blank" className="inline-block transition-transform hover:scale-105">
                            <Avatar className="w-48 h-48 border-4 border-white shadow-lg">
                               <AvatarImage src="/assets/images/tianxi-cai.jpg" alt="Tianxi Cai" className="object-cover" />
                               <AvatarFallback>TC</AvatarFallback>
                            </Avatar>
                         </a>
                         <h4 className="mt-4 text-xl font-bold">
                            <a href="https://dbmi.hms.harvard.edu/people/tianxi-cai" target="_blank" className="text-primary hover:underline">{t('instructors.director.name')}</a>
                         </h4>
                      </div>
                      <div className="space-y-6 text-center md:text-left">
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">{t('instructors.director.role1')}</h5>
                            <p className="text-muted-foreground">{t('instructors.director.desc1')}</p>
                         </div>
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">{t('instructors.director.role2')}</h5>
                            <p className="text-muted-foreground">{t('instructors.director.desc2')}</p>
                         </div>
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">{t('instructors.director.role3')}</h5>
                            <p className="text-muted-foreground">{t('instructors.director.desc3')}</p>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

          {/* Key Collaborators */}
          <div>
             <h2 className="text-2xl font-bold text-foreground mb-4">{t('instructors.collaborators.title')}</h2>
             <p className="text-muted-foreground mb-8">{t('instructors.collaborators.note')}</p>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collaborators.map((person) => (
                   <div key={person.id} className="text-center">
                      <HoverCard>
                         <HoverCardTrigger asChild>
                            <div className="inline-block cursor-pointer group">
                               <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg border-2 border-transparent group-hover:border-primary">
                                  <AvatarImage src={`/assets/images/${person.image}`} alt={person.id} className="object-cover" />
                                  <AvatarFallback>{t(`instructors.collaborators.${person.id}.name`).split(' ').map(n => n[0]).join('')}</AvatarFallback>
                               </Avatar>
                               <h6 className="font-medium text-foreground group-hover:text-primary transition-colors">{t(`instructors.collaborators.${person.id}.name`)}</h6>
                            </div>
                         </HoverCardTrigger>
                         <HoverCardContent className="w-80 bg-popover/95 backdrop-blur-sm">
                            <div className="space-y-2">
                               <h4 className="text-base font-bold text-primary">{t(`instructors.collaborators.${person.id}.name`)}</h4>
                               <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`instructors.collaborators.${person.id}.title`) }} />
                            </div>
                         </HoverCardContent>
                      </HoverCard>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
