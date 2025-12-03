"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useI18n } from "@/components/i18n-provider"
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
  const { t, toggleLocale } = useI18n()
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
            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
              <Image
                src="/celehs.png"
                alt="SDS4A Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">SDS4A</span>
              <span className="text-xs text-muted-foreground">{t('header.slogan')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      {t('header.home')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>{t('header.pastReviews')}</NavigationMenuTrigger>
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
                        2025年夏令营回顾
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a href={external.onlineCamp.recap} target="_blank" rel="noopener noreferrer" className="rounded-sm px-2 py-1.5">
                        2025线上课程回顾
                      </a>
                    </NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/summer-camp/test" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      {t('header.summerCamp')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/winter-camp" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      {t('header.winterCamp')}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>



                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <a href={external.usCamp} target="_blank" rel="noopener noreferrer" className="text-sm font-medium px-4 py-2 rounded-md hover:bg-accent hover:text-accent-foreground">
                      {t('header.usCamp')}
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/winter-camp">{t('header.apply')}</Link>
            </Button>
            <Button variant="outline" onClick={toggleLocale}>
              {t('header.toggle')}
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
                {t('header.home')}
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="past">
                  <AccordionTrigger className="px-2">{t('header.pastReviews')}</AccordionTrigger>
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

              <Link
                href="/summer-camp/test"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.summerCamp')}
              </Link>

              <Link
                href="/winter-camp"
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('header.winterCamp')}
              </Link>


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
                  <Link href="/winter-camp">报名选拔</Link>
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
