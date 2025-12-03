"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SummerCampTestPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold text-center mb-8">
            Summer Camp Test Page
          </h1>
          <p className="text-center text-muted-foreground">
            This is a placeholder page for the Summer Camp content.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
