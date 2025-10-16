import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-700 dark:to-orange-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-block">
            <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold animate-pulse">
              ⏰ LIMITOVANÁ PONUKA – Zostávajú 3 voľné termíny
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6">
            Každý deň bez zelenej fasády =
            <span className="block text-yellow-300 text-4xl sm:text-5xl md:text-6xl mt-2">strata 100€ na energiách</span>
          </h2>
          <p className="mb-8 text-lg text-white/90 font-medium">
            STOP plateniu zbytočných nákladov! Získajte BEZPLATNÚ analýzu úspor
            v hodnote 500€ a zistite, koľko môžete ušetriť už tento mesiac.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8" asChild>
              <Link href="/kontakt">
                ÁNO, CHCEM UŠETRIŤ TISÍCKY EUR! 💰
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-black border-white hover:bg-gray-100 font-bold"
              asChild
            >
              <a href="tel:+421900123456">
                <Phone className="mr-2 h-5 w-5" />
                Zavolať HNEĎ: +421 900 123 456
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white font-semibold">
            <div className="flex items-center">
              <span className="mr-2 text-yellow-400">✓</span>
              Analýza ZADARMO (hodnota 500€)
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-400">✓</span>
              Garancia ROI 3-7 rokov
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-yellow-400">✓</span>
              30-dňová záruka vrátenia peňazí
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}