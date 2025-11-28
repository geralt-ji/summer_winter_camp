"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    content: "夏令营让我对AI有了全新的认识，不仅学到了实用的编程技能，更重要是培养了解决问题的思维方式。",
    author: "张同学",
    role: "2024夏令营学员",
  },
  {
    content: "导师们都很专业，课程安排也很合理，特别是实战项目的经历对我申请大学很有帮助。",
    author: "李同学",
    role: "2024夏令营学员",
  },
  {
    content:
      "人都超级好！我真的好喜欢好爱，帅哥老师还有美女姐姐老师人都很好相处，很耐心地回答问题！互动式的教学真的很有效很喜欢！",
    author: "王同学",
    role: "2024夏令营学员",
  },
  {
    content:
      "充实的~能够获得足够的情绪价值的，能学到真正知识的，不搞任何形式主义的，是一个提升自己的好的机会。老师认真辅导，帮助同学理解问题，这次真的很满意！",
    author: "陈同学",
    role: "2024夏令营学员",
  },
  {
    content: "非常好，课程形式特别喜欢，认识了好棒的老师，结交了朋友，依依不舍。",
    author: "刘同学",
    role: "2024夏令营学员",
  },
  {
    content:
      "老师和助教们都很友善亲切，教学方式让我们很放松，保持很好的学习状态，激发我们的学习兴趣，有点难，但总体很好。",
    author: "赵同学",
    role: "2024夏令营学员",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">学员真实反馈</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">听听学员们怎么说</h2>
          <p className="text-lg text-muted-foreground text-balance">
            500+学员的真实学习体验，98%的满意度是对我们最大的认可
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="border-2 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              <CardContent className="p-6 space-y-4 relative">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="pt-2 border-t border-border">
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
