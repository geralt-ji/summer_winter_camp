"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const external = {
    wechat: {
      summer2024Kickoff: "https://mp.weixin.qq.com/s/BsAXv8Ft-XfY5XvR4LXoqA",
      summer2024Dream: "https://mp.weixin.qq.com/s/vYb7A_SccRro19v9psugdw",
      summer2025Intro: "https://mp.weixin.qq.com/s/2r1_ZMrrgoLRnoKqZNbrpg",
      summer2025Kickoff: "https://mp.weixin.qq.com/s/cnayKi14C76nzS53vAtaCg",
      week1Recap2025: "https://mp.weixin.qq.com/s/SIJfHqD2ZubAB4TeDzWBrg",
    },
    onlineCamp: {
      recap: "https://meeting.tencent.com/cw/KwrYawdk7e",
      week1: "https://meeting.tencent.com/crm/K0wMo57q9f",
      week2: "https://meeting.tencent.com/crm/N1AjVr739f",
      week3: "https://meeting.tencent.com/crm/lRXzABv199",
      week4: "https://meeting.tencent.com/crm/2BL8w0Ekaf",
      week5: "https://meeting.tencent.com/cw/2OGpQxPa24",
      week6: "https://meeting.tencent.com/crm/lvmDXxRAe8",
      pythonQA: "https://docs.qq.com/doc/DS1RLcEVnUHZpcm1i",
      slidesW1: "https://docs.qq.com/slide/DS3FNRWpqdWZXUkxk",
      slidesW2: "https://docs.qq.com/document/DS1NwSGJ0UkFITGxz",
      slidesW3: "https://docs.qq.com/document/DS2xHZURZTWJReFpi",
      slidesGPU: "https://docs.qq.com/document/DS1hURWtXRmRCVGJZ",
      slidesAgent: "https://docs.qq.com/pdf/DS2FmTmNqY3VXU3ZD",
      pythonDocs: "https://python.sds4a.org/",
      tracking: "https://www.kaggle.com/",
    },
    offlineCamp: {
      schedule: "https://learn.sds4a.org",
      day2Intro: "https://meeting.tencent.com/cw/NxjwZ4ZP77",
      day2Viz: "https://meeting.tencent.com/cw/2rEer4r533",
      day3Intro: "https://meeting.tencent.com/crm/l7QE1J5939",
      day3LR: "https://meeting.tencent.com/crm/NAmpgd0Gce",
      day3LRPractice: "https://meeting.tencent.com/crm/KejyrmJkb4",
      day4Intro: "https://meeting.tencent.com/crm/2jWw96OJfe",
      day4LogReg: "https://meeting.tencent.com/crm/2967Lwg414",
      day4LogRegPractice: "https://meeting.tencent.com/crm/2Ookb4Emd2",
      day5AIIntro: "https://meeting.tencent.com/crm/2jWaqpdnef",
      day5Eval: "https://meeting.tencent.com/crm/29684dj1b0",
      day5EvalPractice: "https://meeting.tencent.com/crm/NLz66BnY2a",
      day6DL: "https://meeting.tencent.com/crm/N8p3Mjg092",
      day6SSL: "https://meeting.tencent.com/crm/KmV4RyPz6f",
      day6NNPractice: "https://meeting.tencent.com/crm/Kne4MqZBf5",
      day6CarSSH: "https://meeting.tencent.com/crm/2VoXenjx32",
      day7CNN1: "https://meeting.tencent.com/crm/KmVoQwjM61",
      day7CNN1Practice: "https://meeting.tencent.com/crm/NQDdWDVR5d",
      day8CNN2: "https://meeting.tencent.com/crm/2q5jPv3ya4",
      day8CNN2Practice: "https://meeting.tencent.com/crm/2VoqZrZO4a",
      day9LLM1: "https://meeting.tencent.com/crm/l6bZqjz970",
      day9LLM2: "https://meeting.tencent.com/crm/KzVL67x982",
      day9RL: "https://meeting.tencent.com/crm/2jW4Gqy30e",
      day9LLMApps: "https://meeting.tencent.com/crm/Nb8LvJqJc7",
      careerAndre: "https://meeting.tencent.com/crm/KPY1rqYW1e",
      careerGavinBand: "https://meeting.tencent.com/crm/KEB99EPY7d",
      careerJessica: "https://meeting.tencent.com/crm/KzVo4X6ved",
      careerYongcheng: "https://meeting.tencent.com/crm/2ZBMDxRZ7e",
      careerDoudou: "https://meeting.tencent.com/crm/Nb8L1kPP03",
      slidesDay2Intro: "https://docs.qq.com/slide/DTVh3b3JQZ01YdFhx",
      slidesDay2Viz: "https://docs.qq.com/slide/DTUZCYVFoek5LQ0d6",
      slidesDay3Intro: "https://docs.qq.com/slide/DTXNoVWpwUVphT3ZN",
      slidesDay3LR: "https://docs.qq.com/slide/DTW1kVmhkWnFHZ0Za",
      slidesDay4Intro: "https://docs.qq.com/slide/DTUxxY0pUU0hDTFBL",
      slidesDay4LogReg: "https://docs.qq.com/slide/DTXROeERBcW9hTmZw",
      slidesDay5AIIntro: "https://docs.qq.com/slide/DTXZZbkF1WWtVbnVt",
      slidesDay5Eval: "https://docs.qq.com/slide/DTWp4YVBqU09BYWJQ",
      slidesDay6DL: "https://docs.qq.com/slide/DTWNQUmJ5cU9KQWpu",
      slidesDay6SSL: "https://docs.qq.com/slide/DTXpoR05MTGtCb0Zq",
      slidesDay7CNN1: "https://docs.qq.com/slide/DTWNQUmJ5cU9KQWpu",
      slidesDay8CNN2: "https://docs.qq.com/slide/DTXpoR05MTGtCb0Zq",
      slidesDay9LLM1PDF: "https://docs.qq.com/pdf/DTWNzbk1GVUJKQVNx",
      slidesDay9RL: "https://docs.qq.com/slide/DTUVwWG5peFVEY3Bt",
      slidesDay9LLMApps: "https://docs.qq.com/slide/DTU1XVG5GRVVRTmpV",
    },
    usCamp: "https://celehs.hms.harvard.edu/summer-camp.html",
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg tech-gradient flex items-center justify-center text-primary-foreground font-bold text-lg transition-transform group-hover:scale-105">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">SDS4A</span>
              <span className="text-xs text-muted-foreground">数据科学教育</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      首页
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>往期回顾</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[520px] grid grid-cols-1 gap-1">
                    <NavigationMenuLink asChild>
                      <a href={external.wechat.summer2024Kickoff} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2024年夏令营开营
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href={external.wechat.summer2024Dream} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2024年数据科学筑梦记
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href={external.wechat.summer2025Intro} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2025年夏令营介绍
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href={external.wechat.summer2025Kickoff} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2025年夏令营开营
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href={external.wechat.week1Recap2025} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2025年第一周回顾
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>线下夏令营</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[720px] grid grid-cols-3 gap-3 p-2">
                    <div>
                      <div className="text-xs font-semibold mb-2">课程安排</div>
                      <NavigationMenuLink asChild>
                        <a href={external.offlineCamp.schedule} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                          课程安排
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-2">课程回放</div>
                      <ul className="space-y-1 text-sm">
                        <li className="font-medium mt-1">第二天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day2Intro} target="_blank" rel="noopener noreferrer">数据科学入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day2Viz} target="_blank" rel="noopener noreferrer">数据可视化</a></li>
                        <li className="font-medium mt-2">第三天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day3Intro} target="_blank" rel="noopener noreferrer">统计学习入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day3LR} target="_blank" rel="noopener noreferrer">线性回归</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day3LRPractice} target="_blank" rel="noopener noreferrer">实践：线性回归</a></li>
                        <li className="font-medium mt-2">第四天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day4Intro} target="_blank" rel="noopener noreferrer">机器学习入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day4LogReg} target="_blank" rel="noopener noreferrer">逻辑回归</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day4LogRegPractice} target="_blank" rel="noopener noreferrer">实践：逻辑回归</a></li>
                        <li className="font-medium mt-2">第五天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day5AIIntro} target="_blank" rel="noopener noreferrer">人工智能入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day5Eval} target="_blank" rel="noopener noreferrer">模型评估</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day5EvalPractice} target="_blank" rel="noopener noreferrer">实践：模型评估</a></li>
                        <li className="font-medium mt-2">第六天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day6DL} target="_blank" rel="noopener noreferrer">深度学习</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day6SSL} target="_blank" rel="noopener noreferrer">无标签学习</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day6NNPractice} target="_blank" rel="noopener noreferrer">实践：神经网络</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day6CarSSH} target="_blank" rel="noopener noreferrer">造车：SSH连接</a></li>
                        <li className="font-medium mt-2">第七天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day7CNN1} target="_blank" rel="noopener noreferrer">CNN 第一部分</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day7CNN1Practice} target="_blank" rel="noopener noreferrer">实践：CNN I</a></li>
                        <li className="font-medium mt-2">第八天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day8CNN2} target="_blank" rel="noopener noreferrer">CNN 第二部分</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day8CNN2Practice} target="_blank" rel="noopener noreferrer">实践：CNN II</a></li>
                        <li className="font-medium mt-2">第九天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day9LLM1} target="_blank" rel="noopener noreferrer">大语言模型介绍 - 1</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day9LLM2} target="_blank" rel="noopener noreferrer">大语言模型介绍 - 2</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day9RL} target="_blank" rel="noopener noreferrer">强化学习</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.day9LLMApps} target="_blank" rel="noopener noreferrer">大语言模型应用</a></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-2">职业分享</div>
                      <ul className="space-y-1 text-sm">
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.careerAndre} target="_blank" rel="noopener noreferrer">职业分享 - Andre Python</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.careerGavinBand} target="_blank" rel="noopener noreferrer">职业分享 - GavinBand</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.careerJessica} target="_blank" rel="noopener noreferrer">职业分享 - Jessica Gronsbell</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.careerYongcheng} target="_blank" rel="noopener noreferrer">职业分享 - Yongcheng Li (脑机接口)</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.careerDoudou} target="_blank" rel="noopener noreferrer">职业分享 - Doudou Zhou</a></li>
                      </ul>
                      <div className="text-xs font-semibold mt-3 mb-2">课程课件</div>
                      <ul className="space-y-1 text-sm">
                        <li className="font-medium mt-1">第二天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay2Intro} target="_blank" rel="noopener noreferrer">数据科学入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay2Viz} target="_blank" rel="noopener noreferrer">数据可视化</a></li>
                        <li className="font-medium mt-2">第三天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay3Intro} target="_blank" rel="noopener noreferrer">统计学习入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay3LR} target="_blank" rel="noopener noreferrer">线性回归</a></li>
                        <li className="font-medium mt-2">第四天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay4Intro} target="_blank" rel="noopener noreferrer">机器学习入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay4LogReg} target="_blank" rel="noopener noreferrer">逻辑回归</a></li>
                        <li className="font-medium mt-2">第五天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay5AIIntro} target="_blank" rel="noopener noreferrer">人工智能入门</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay5Eval} target="_blank" rel="noopener noreferrer">模型评估</a></li>
                        <li className="font-medium mt-2">第六天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay6DL} target="_blank" rel="noopener noreferrer">深度学习 PPT</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay6SSL} target="_blank" rel="noopener noreferrer">无标签学习 PPT</a></li>
                        <li className="font-medium mt-2">第七天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay7CNN1} target="_blank" rel="noopener noreferrer">CNN 第一部分 PPT</a></li>
                        <li className="font-medium mt-2">第八天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay8CNN2} target="_blank" rel="noopener noreferrer">CNN 第二部分 PPT</a></li>
                        <li className="font-medium mt-2">第九天</li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay9LLM1PDF} target="_blank" rel="noopener noreferrer">大语言模型介绍 - 1 PDF</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay9RL} target="_blank" rel="noopener noreferrer">强化学习 PPT</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.offlineCamp.slidesDay9LLMApps} target="_blank" rel="noopener noreferrer">大语言模型应用 PPT</a></li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href="#" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground" aria-disabled>
                      冬令营
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>线上课程</NavigationMenuTrigger>
                  <NavigationMenuContent className="min-w-[720px] grid grid-cols-3 gap-3 p-2">
                    <div>
                      <div className="text-xs font-semibold mb-2">线上夏令营回顾</div>
                      <NavigationMenuLink asChild>
                        <a href={external.onlineCamp.recap} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                          线上夏令营回顾
                        </a>
                      </NavigationMenuLink>
                      <div className="text-xs font-semibold mt-3 mb-2">Python 文档</div>
                      <NavigationMenuLink asChild>
                        <a href={external.onlineCamp.pythonDocs} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                          Python 文档
                        </a>
                      </NavigationMenuLink>
                      <div className="text-xs font-semibold mt-3 mb-2">学习追踪</div>
                      <NavigationMenuLink asChild>
                        <a href={external.onlineCamp.tracking} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                          学习追踪
                        </a>
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-2">课程回放</div>
                      <ul className="space-y-1 text-sm">
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week1} target="_blank" rel="noopener noreferrer">第一周</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week2} target="_blank" rel="noopener noreferrer">第二周</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week3} target="_blank" rel="noopener noreferrer">第三周(Numpy)</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week4} target="_blank" rel="noopener noreferrer">第四周(GPU&Dify)</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week5} target="_blank" rel="noopener noreferrer">第五周(生物医学领域分享)</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.week6} target="_blank" rel="noopener noreferrer">第六周大咖面对面</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.pythonQA} target="_blank" rel="noopener noreferrer">Python学习问题汇总</a></li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-2">课程课件</div>
                      <ul className="space-y-1 text-sm">
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.slidesW1} target="_blank" rel="noopener noreferrer">第一周课件</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.slidesW2} target="_blank" rel="noopener noreferrer">第二周课件</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.slidesW3} target="_blank" rel="noopener noreferrer">第三周课件</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.slidesGPU} target="_blank" rel="noopener noreferrer">GPU:游戏与AI的强大引擎</a></li>
                        <li><a className="rounded-sm px-2 py-1.5" href={external.onlineCamp.slidesAgent} target="_blank" rel="noopener noreferrer">AI智能体科普</a></li>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href={external.usCamp} target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      美国夏令营
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/enrollment/form">报名选拔</Link>
            </Button>
            <Button variant="outline" asChild>
              <a href="#" aria-disabled>中文/English</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-lg">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                首页
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="past">
                  <AccordionTrigger className="px-2">往期回顾</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <a href={external.wechat.summer2024Kickoff} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">2024年夏令营开营</a>
                      <a href={external.wechat.summer2024Dream} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">2024年数据科学筑梦记</a>
                      <a href={external.wechat.summer2025Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">2025年夏令营介绍</a>
                      <a href={external.wechat.summer2025Kickoff} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">2025年夏令营开营</a>
                      <a href={external.wechat.week1Recap2025} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">2025年第一周回顾</a>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="offline">
                  <AccordionTrigger className="px-2">线下夏令营</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <a href={external.offlineCamp.schedule} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">课程安排</a>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="offline-replay">
                          <AccordionTrigger className="px-2 text-sm">课程回放</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <div className="px-2 py-1 font-medium">第二天</div>
                              <a href={external.offlineCamp.day2Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">数据科学入门</a>
                              <a href={external.offlineCamp.day2Viz} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">数据可视化</a>
                              <div className="px-2 py-1 font-medium">第三天</div>
                              <a href={external.offlineCamp.day3Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">统计学习入门</a>
                              <a href={external.offlineCamp.day3LR} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">线性回归</a>
                              <a href={external.offlineCamp.day3LRPractice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：线性回归</a>
                              <div className="px-2 py-1 font-medium">第四天</div>
                              <a href={external.offlineCamp.day4Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">机器学习入门</a>
                              <a href={external.offlineCamp.day4LogReg} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">逻辑回归</a>
                              <a href={external.offlineCamp.day4LogRegPractice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：逻辑回归</a>
                              <div className="px-2 py-1 font-medium">第五天</div>
                              <a href={external.offlineCamp.day5AIIntro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">人工智能入门</a>
                              <a href={external.offlineCamp.day5Eval} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">模型评估</a>
                              <a href={external.offlineCamp.day5EvalPractice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：模型评估</a>
                              <div className="px-2 py-1 font-medium">第六天</div>
                              <a href={external.offlineCamp.day6DL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">深度学习</a>
                              <a href={external.offlineCamp.day6SSL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">无标签学习</a>
                              <a href={external.offlineCamp.day6NNPractice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：神经网络</a>
                              <a href={external.offlineCamp.day6CarSSH} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">造车：SSH连接</a>
                              <div className="px-2 py-1 font-medium">第七天</div>
                              <a href={external.offlineCamp.day7CNN1} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">CNN 第一部分</a>
                              <a href={external.offlineCamp.day7CNN1Practice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：CNN I</a>
                              <div className="px-2 py-1 font-medium">第八天</div>
                              <a href={external.offlineCamp.day8CNN2} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">CNN 第二部分</a>
                              <a href={external.offlineCamp.day8CNN2Practice} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">实践：CNN II</a>
                              <div className="px-2 py-1 font-medium">第九天</div>
                              <a href={external.offlineCamp.day9LLM1} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">大语言模型介绍 - 1</a>
                              <a href={external.offlineCamp.day9LLM2} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">大语言模型介绍 - 2</a>
                              <a href={external.offlineCamp.day9RL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">强化学习</a>
                              <a href={external.offlineCamp.day9LLMApps} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">大语言模型应用</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="offline-career">
                          <AccordionTrigger className="px-2 text-sm">职业分享</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <a href={external.offlineCamp.careerAndre} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">职业分享 - Andre Python</a>
                              <a href={external.offlineCamp.careerGavinBand} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">职业分享 - GavinBand</a>
                              <a href={external.offlineCamp.careerJessica} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">职业分享 - Jessica Gronsbell</a>
                              <a href={external.offlineCamp.careerYongcheng} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">职业分享 - Yongcheng Li (脑机接口)</a>
                              <a href={external.offlineCamp.careerDoudou} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">职业分享 - Doudou Zhou</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="offline-slides">
                          <AccordionTrigger className="px-2 text-sm">课程课件</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <div className="px-2 py-1 font-medium">第二天</div>
                              <a href={external.offlineCamp.slidesDay2Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">数据科学入门</a>
                              <a href={external.offlineCamp.slidesDay2Viz} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">数据可视化</a>
                              <div className="px-2 py-1 font-medium">第三天</div>
                              <a href={external.offlineCamp.slidesDay3Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">统计学习入门</a>
                              <a href={external.offlineCamp.slidesDay3LR} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">线性回归</a>
                              <div className="px-2 py-1 font-medium">第四天</div>
                              <a href={external.offlineCamp.slidesDay4Intro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">机器学习入门</a>
                              <a href={external.offlineCamp.slidesDay4LogReg} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">逻辑回归</a>
                              <div className="px-2 py-1 font-medium">第五天</div>
                              <a href={external.offlineCamp.slidesDay5AIIntro} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">人工智能入门</a>
                              <a href={external.offlineCamp.slidesDay5Eval} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">模型评估</a>
                              <div className="px-2 py-1 font-medium">第六天</div>
                              <a href={external.offlineCamp.slidesDay6DL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">深度学习 PPT</a>
                              <a href={external.offlineCamp.slidesDay6SSL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">无标签学习 PPT</a>
                              <div className="px-2 py-1 font-medium">第七天</div>
                              <a href={external.offlineCamp.slidesDay7CNN1} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">CNN 第一部分 PPT</a>
                              <div className="px-2 py-1 font-medium">第八天</div>
                              <a href={external.offlineCamp.slidesDay8CNN2} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">CNN 第二部分 PPT</a>
                              <div className="px-2 py-1 font-medium">第九天</div>
                              <a href={external.offlineCamp.slidesDay9LLM1PDF} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">大语言模型介绍 - 1 PDF</a>
                              <a href={external.offlineCamp.slidesDay9RL} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">强化学习 PPT</a>
                              <a href={external.offlineCamp.slidesDay9LLMApps} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">大语言模型应用 PPT</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="winter">
                  <AccordionTrigger className="px-2">冬令营</AccordionTrigger>
                  <AccordionContent>
                    <div className="px-2 py-1.5 text-sm text-muted-foreground">内容待补充</div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="online">
                  <AccordionTrigger className="px-2">线上课程</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2">
                      <a href={external.onlineCamp.recap} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">线上夏令营回顾</a>
                      <Accordion type="single" collapsible>
                        <AccordionItem value="online-replay">
                          <AccordionTrigger className="px-2 text-sm">课程回放</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <a href={external.onlineCamp.week1} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第一周</a>
                              <a href={external.onlineCamp.week2} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第二周</a>
                              <a href={external.onlineCamp.week3} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第三周(Numpy)</a>
                              <a href={external.onlineCamp.week4} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第四周(GPU&Dify)</a>
                              <a href={external.onlineCamp.week5} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第五周(生物医学领域分享)</a>
                              <a href={external.onlineCamp.week6} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第六周大咖面对面</a>
                              <a href={external.onlineCamp.pythonQA} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">Python学习问题汇总</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="online-slides">
                          <AccordionTrigger className="px-2 text-sm">课程课件</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col">
                              <a href={external.onlineCamp.slidesW1} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第一周课件</a>
                              <a href={external.onlineCamp.slidesW2} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第二周课件</a>
                              <a href={external.onlineCamp.slidesW3} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">第三周课件</a>
                              <a href={external.onlineCamp.slidesGPU} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">GPU:游戏与AI的强大引擎</a>
                              <a href={external.onlineCamp.slidesAgent} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">AI智能体科普</a>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <a href={external.onlineCamp.pythonDocs} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">Python 文档</a>
                      <a href={external.onlineCamp.tracking} target="_blank" rel="noopener noreferrer" className="px-2 py-1.5">学习追踪</a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <a
                href={external.usCamp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
              >
                美国夏令营
              </a>

              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button variant="ghost" asChild className="w-full">
                  <Link href="/enrollment/form">报名选拔</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" aria-disabled>中文/English</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
