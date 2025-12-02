import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Snowflake, Monitor, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "summer",
    icon: Sun,
    title: "数据科学夏令营",
    season: "暂未开放",
    description:
      "两周密集式学习体验，专为中学生设计的基础入门课程，从Python编程到机器学习基础，结合树莓派智能小车项目，在动手实践中开启AI第一课。",
    duration: "2周（暑期）",
    location: "线下沉浸式学习",
    capacity: "40–50人/班",
    highlights: [
      "顶尖高校导师亲自指导",
      "树莓派智能车实战项目，学以致用",
      "小组协作完成课题，锻炼团队能力",
      "全英文项目展示，提升学术表达能力",
    ],
    gradient: "from-orange-500/10 to-yellow-500/10",
    iconColor: "text-orange-600",
  },
  {
    id: "winter",
    icon: Snowflake,
    title: "数据科学冬令营",
    season: "正在招生",
    description:
      "冬季课程带领高中生从大语言模型的原理出发，了解AI驱动蛋白质设计的前沿应用，通过直观的数学讲解与动手实践，构建跨学科工程化思维。",
    duration: "4天（寒假）",
    location: "线上集中授课",
    capacity: "30–40人/班",
    highlights: [
      "数学原理与算法直观可视化",
      "前沿AI在蛋白质设计的应用",
      "贯穿全程的动手实验活动",
      "培养计算与生物跨学科视野",
    ],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
]

export function ProgramsGrid() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">选择最适合你的成长路径</h2>
          <p className="text-lg text-muted-foreground text-balance">
            我们为中学生量身打造全方位的数据科学课程，涵盖线下密集营与线上系统课，匹配不同学习节奏与目标，助你从小接触前沿科技，赢在人工智能时代起跑线。
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
                      {program.season}
                    </span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{program.description}</CardDescription>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Program Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>课程时长：{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>授课方式：{program.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>班级规模：{program.capacity}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">课程亮点</h4>
                    <ul className="space-y-2">
                      {program.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full tech-gradient text-primary-foreground" asChild>
                    <Link href="#contact">
                      {program.id === "summer"
                        ? "立即了解夏令营详情"
                        : program.id === "winter"
                        ? "立即了解冬令营详情"
                        : "立即了解线上课程详情"}
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
