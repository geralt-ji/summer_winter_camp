import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProgramsGrid } from "@/components/programs-grid"
import { Features } from "@/components/features"
import { Instructors } from "@/components/instructors"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProgramsGrid />
      <Features />
      <Instructors />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
