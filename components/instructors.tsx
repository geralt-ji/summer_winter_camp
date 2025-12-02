import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap } from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

/* Original content commented out
const instructors = [
  {
    university: "哈佛大学",
    title: "生物医学信息学教授",
    expertise: "机器学习、生物信息学",
  },
  {
    university: "哈佛大学",
    title: "生物统计学助理教授",
    expertise: "统计建模、数据分析",
  },
  {
    university: "多伦多大学",
    title: "统计科学系助理教授",
    expertise: "统计理论、数据科学",
  },
  {
    university: "杜克大学",
    title: "教授",
    expertise: "算法设计、计算机科学",
  },
  {
    university: "浙江大学",
    title: "统计学教授",
    expertise: "应用统计、数据挖掘",
  },
  {
    university: "业界",
    title: "资深工程师",
    expertise: "工程实践、项目开发",
  },
]
*/

const collaborators = [
  { name: 'Molei Liu', image: 'molei-liu.jpg', title: 'PhD Student in Biostatistics, Harvard T.H. Chan School of Public Health' },
  { name: 'Doudou Zhou', image: 'doudou-zhou.jpg', title: 'PhD, Professor of Statistics & Data Science, National University of Singapore' },
]

export function Instructors() {
  return (
    <section id="instructors" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Original content commented out
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">世界顶尖大学师资</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">由最优秀的导师带领你成长</h2>
          <p className="text-lg text-muted-foreground text-balance">
            汇集哈佛、多伦多、杜克等世界顶尖大学教授，以及业界资深工程师，为你提供最专业的指导
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {instructors.map((instructor, idx) => (
            <Card key={idx} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full tech-gradient flex items-center justify-center text-primary-foreground">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">{instructor.university}</CardTitle>
                </div>
                <p className="text-base font-semibold text-foreground">{instructor.title}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{instructor.expertise}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">导师团队优势</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">6+</div>
                  <p className="text-muted-foreground">顶尖大学教授与业界专家</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <p className="text-muted-foreground">年平均教学与研究经验</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">发表的学术论文与项目</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        */}

        {/* New People Section */}
        <div className="container mx-auto px-4 lg:px-8">
          {/* Research Team Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Research Team</h1>
             <p className="text-lg mb-5 max-w-4xl mx-auto text-muted-foreground">We believe in team science. CELEHS research team is highly interdisciplinary, consisting of researchers from many fields related to biomedical data science. We have collaborators from many institutions including Harvard, MIT, Stanford, Rand Corporation, Veteran Affairs (VA), Partner's Healthcare, and Tsinghua University.</p>
          </div>

          {/* CELEHS Director */}
          <div className="mb-16">
             <h2 className="text-2xl font-bold text-foreground mb-8 text-center md:text-left">CELEHS Director</h2>
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
                            <a href="https://dbmi.hms.harvard.edu/people/tianxi-cai" target="_blank" className="text-primary hover:underline">Tianxi Cai</a>
                         </h4>
                      </div>
                      <div className="space-y-6 text-center md:text-left">
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">Director</h5>
                            <p className="text-muted-foreground">Translational Data Science Center for a Learning Health System (CELEHS)</p>
                         </div>
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">John Rock Professor</h5>
                            <p className="text-muted-foreground">Population and Translational Data Sciences, Harvard T.H. Chan School of Public Health</p>
                         </div>
                         <div>
                            <h5 className="text-lg font-bold text-primary mb-1">Professor</h5>
                            <p className="text-muted-foreground">Biomedical Informatics, Harvard Medical School</p>
                         </div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </div>

          {/* Key Collaborators */}
          <div>
             <h2 className="text-2xl font-bold text-foreground mb-4">Key Collaborators</h2>
             <p className="text-muted-foreground mb-8">Note: the names are sorted by last name in alphabetical order. Hover over the avatar to see details.</p>
             
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collaborators.map((person) => (
                   <div key={person.name} className="text-center">
                      <HoverCard>
                         <HoverCardTrigger asChild>
                            <div className="inline-block cursor-pointer group">
                               <Avatar className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg border-2 border-transparent group-hover:border-primary">
                                  <AvatarImage src={`/assets/images/${person.image}`} alt={person.name} className="object-cover" />
                                  <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                               </Avatar>
                               <h6 className="font-medium text-foreground group-hover:text-primary transition-colors">{person.name}</h6>
                            </div>
                         </HoverCardTrigger>
                         <HoverCardContent className="w-80 bg-popover/95 backdrop-blur-sm">
                            <div className="space-y-2">
                               <h4 className="text-base font-bold text-primary">{person.name}</h4>
                               <div className="text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: person.title }} />
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
