import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { premiumContent } from "@/lib/content-premium"
import { ArrowRight } from "lucide-react"

export function SystemsPremium() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Green façade systems
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We offer comprehensive vertical greening solutions designed for different building types, climates, and performance requirements. Each system is engineered for long-term reliability and low maintenance.
          </p>
        </div>

        {/* Systems Grid with 400px Height Cards (Mobilane Style) */}
        <div className="grid gap-8 md:grid-cols-2">
          {premiumContent.systems.map((system, index) => (
            <Card
              key={system.id}
              className="group overflow-hidden border-0 shadow-premium hover:shadow-premium-hover transition-all duration-150 bg-white dark:bg-gray-950"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Image Container - 400px height with object-fit cover */}
              <div className="relative h-[400px] overflow-hidden bg-gradient-to-br from-forest-100 to-warmth-100 dark:from-forest-950 dark:to-warmth-950">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-500/80 to-terra-500/80 group-hover:from-forest-500/60 group-hover:to-terra-500/60 transition-all duration-300" />

                {/* Number Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/10 text-9xl font-bold font-heading">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </div>

                {/* Hover Overlay Box with White Background (Mobilane Style) */}
                <div className="absolute inset-0 flex items-end p-8 bg-gradient-to-t from-forest-950/90 via-forest-900/60 to-transparent group-hover:from-forest-950/95 transition-all duration-300">
                  <div className="w-full">
                    <div className="text-warmth-400 text-sm font-medium mb-2">{system.subtitle}</div>
                    <h3 className="text-white text-3xl font-heading font-bold mb-2">{system.name}</h3>

                    {/* Quick Specs - Appear on Hover */}
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                          <div className="text-white/60 text-xs mb-1">Weight</div>
                          <div className="text-white text-sm font-medium">{system.specifications.weight}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                          <div className="text-white/60 text-xs mb-1">Lifespan</div>
                          <div className="text-white text-sm font-medium">{system.specifications.lifespan}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {system.description}
                </p>

                {/* Benefits List */}
                <div className="space-y-2 mb-6 pb-6 border-b">
                  {system.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Plants Tags */}
                <div className="mb-6">
                  <div className="text-xs font-medium text-muted-foreground mb-3">Suitable plants</div>
                  <div className="flex flex-wrap gap-2">
                    {system.plants.slice(0, 4).map((plant, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-forest-50 dark:bg-forest-950/50 text-forest-700 dark:text-forest-300 border border-forest-100 dark:border-forest-900"
                      >
                        {plant}
                      </span>
                    ))}
                    {system.plants.length > 4 && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-earth-100 dark:bg-earth-800 text-muted-foreground">
                        +{system.plants.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full group/btn border-forest-200 hover:bg-forest-50 dark:border-forest-800 dark:hover:bg-forest-950/30 transition-all duration-150"
                  asChild
                >
                  <Link href={`/systemy#${system.id}`}>
                    Technical specifications
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-forest-600 to-warmth-600 hover:from-forest-700 hover:to-warmth-700 text-white shadow-premium hover:shadow-premium-hover transition-all duration-150 group"
            asChild
          >
            <Link href="/systemy">
              Compare all systems
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
