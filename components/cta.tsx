import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="max-w-5xl mx-auto border-2 overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 tech-gradient opacity-10" />
            <CardContent className="relative p-8 lg:p-12 text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-balance text-foreground">开启你的数据科学之旅</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                  无论你想参加夏令营、冬令营，还是线上课程，我们都随时欢迎你的加入。
                  现在就联系我们，获取详细课程信息和报名指导。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="tech-gradient text-primary-foreground text-base px-8 h-12 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/winter-camp">
                    立即报名
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 h-12 w-full sm:w-auto bg-transparent">
                  <Mail className="mr-2 w-5 h-5" />
                  联系我们
                </Button>
              </div>

              <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground border-t border-border">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contact@sds4a.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>课程咨询：请通过邮件联系</span>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
