import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, BookOpen, GraduationCap } from "lucide-react"

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

export function Instructors() {
  return (
    <section id="instructors" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
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
      </div>
    </section>
  )
}
