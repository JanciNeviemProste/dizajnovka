import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { siteContent } from "@/lib/content"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-background dark:to-green-950/20" />

      <div className="container relative">
        <div className="py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            {/* Urgency Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-4 py-1.5 text-sm font-medium text-red-800 dark:text-red-300 animate-pulse">
              <span className="mr-2">⚡</span>
              {siteContent.company.urgency}
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-gradient block mb-2">{siteContent.company.headline}</span>
              <span className="mt-2 block text-3xl sm:text-4xl md:text-5xl">
                {siteContent.company.subheadline}
              </span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              {siteContent.company.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="group bg-red-600 hover:bg-red-700 text-white">
                <Link href="/kontakt">
                  Získať BEZPLATNÚ analýzu (hodnota 500€)
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/systemy">Kalkulačka úspor 💰</Link>
              </Button>
            </div>

            {/* Trust Indicators with Numbers */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm font-semibold">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                <span>15+ rokov expertízy</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                <span>50+ úspešných projektov</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                <span>100% spokojnosť</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                <span>ROI 3-7 rokov garantovane</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}