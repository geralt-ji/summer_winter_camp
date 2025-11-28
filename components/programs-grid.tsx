import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sun, Snowflake, Monitor, Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

const programs = [
  {
    id: "summer",
    icon: Sun,
    title: "数据科学夏令营",
    season: "暑期项目",
    description: "两周密集式学习体验，包含Python编程、机器学习基础、树莓派小车实战项目",
    duration: "2周",
    location: "线下集中授课",
    capacity: "20-30人/期",
    highlights: ["顶尖大学导师授课", "树莓派实战项目", "团队协作与展示", "英文汇报训练"],
    gradient: "from-orange-500/10 to-yellow-500/10",
    iconColor: "text-orange-600",
  },
  {
    id: "winter",
    icon: Snowflake,
    title: "数据科学冬令营",
    season: "寒假项目",
    description: "冬季强化课程，深入学习人工智能算法，结合实际案例进行项目开发",
    duration: "2周",
    location: "线下集中授课",
    capacity: "20-30人/期",
    highlights: ["AI算法深度学习", "实际案例分析", "项目开发实战", "职业发展指导"],
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    id: "online",
    icon: Monitor,
    title: "线上系统课程",
    season: "全年开放",
    description: "灵活的在线学习模式，系统化课程体系，适合各个水平的学生深入学习",
    duration: "8-12周",
    location: "线上直播+录播",
    capacity: "小班制教学",
    highlights: ["时间灵活安排", "系统化课程体系", "一对一辅导", "终身学习资源"],
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
]

export function ProgramsGrid() {
  return (
    <section id="programs" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">选择适合你的学习方式</h2>
          <p className="text-lg text-muted-foreground text-balance">
            无论是密集式夏令营、冬令营，还是灵活的线上课程，我们都为你提供顶尖的教学资源
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                    <Link href="#contact">了解详情</Link>
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
