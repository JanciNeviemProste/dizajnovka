import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { designContent } from "@/lib/content-design"
import { ArrowRight, Check } from "lucide-react"

export function SystemsDesign() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Naše systémy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ponúkame rôzne typy zelených fasád prispôsobené vašim potrebám.
            Od klasických popínavých systémov až po high-tech hydroponické riešenia.
          </p>
        </div>

        {/* Systems Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {designContent.systems.map((system, index) => (
            <Card
              key={system.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-950"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-950 dark:to-teal-950">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/80 to-teal-600/80 group-hover:from-emerald-500/60 group-hover:to-teal-600/60 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-8xl font-bold">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-white/90 text-sm mb-2">{system.subtitle}</div>
                  <h3 className="text-white text-2xl font-bold">{system.name}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {system.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 mb-6">
                  {system.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-600 dark:text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Plants */}
                <div className="mb-6 pb-6 border-b">
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    Vhodné rastliny
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {system.plants.slice(0, 4).map((plant, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                      >
                        {plant}
                      </span>
                    ))}
                    {system.plants.length > 4 && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-800 text-muted-foreground">
                        +{system.plants.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group/btn border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30"
                  asChild
                >
                  <Link href={`/systemy#${system.id}`}>
                    Viac o systéme
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all group"
            asChild
          >
            <Link href="/systemy">
              Porovnať všetky systémy
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
