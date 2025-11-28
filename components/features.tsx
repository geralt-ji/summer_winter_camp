import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code2, Cpu, TrendingUp, Users2, Presentation } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "理论与实践结合",
    description: "从Python基础到机器学习，从理论讲解到树莓派实战，全方位掌握数据科学技能",
  },
  {
    icon: Code2,
    title: "Python编程能力",
    description: "系统学习Python编程，掌握数据处理、可视化和算法实现的核心技能",
  },
  {
    icon: Cpu,
    title: "硬件实战项目",
    description: "通过树莓派小车项目学习硬件组装、算法优化、图像识别等前沿技术",
  },
  {
    icon: TrendingUp,
    title: "AI与机器学习",
    description: "深入学习机器学习算法、深度学习框架，培养AI时代的核心竞争力",
  },
  {
    icon: Users2,
    title: "团队协作能力",
    description: "通过小组项目培养团队协作精神，提升沟通能力和项目管理经验",
  },
  {
    icon: Presentation,
    title: "国际化展示",
    description: "英文汇报训练和成果展示，培养国际化沟通能力和演讲技巧",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">全面培养未来科技人才</h2>
          <p className="text-lg text-muted-foreground text-balance">
            从编程技能到工程思维，从硬件实战到国际视野，打造完整的数据科学能力体系
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
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
