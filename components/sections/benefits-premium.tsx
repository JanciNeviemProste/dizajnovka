import { Card } from "@/components/ui/card"
import { premiumContent } from "@/lib/content-premium"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function BenefitsPremium() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-earth-50/30 dark:from-background dark:to-earth-950/10">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Environmental benefits
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Green façade systems deliver measurable improvements across multiple performance indicators. Our installations contribute to healthier buildings and urban environments.
          </p>
        </div>

        {/* Benefits Grid with Premium Shadows */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {premiumContent.benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons] as LucideIcon

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white dark:bg-gray-950 shadow-premium hover:shadow-premium-hover transition-all duration-150"
                style={{
                  animation: `slide-up 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Top Accent - appears on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-600 via-warmth-500 to-terra-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div className="p-8">
                  {/* Icon with Premium Styling */}
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-warmth-50 dark:from-forest-950 dark:to-warmth-950 group-hover:from-forest-100 group-hover:to-warmth-100 dark:group-hover:from-forest-900 dark:group-hover:to-warmth-900 transition-all duration-150 shadow-sm group-hover:shadow-md">
                    <Icon className="h-8 w-8 text-forest-600 dark:text-forest-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl font-semibold mb-4 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors duration-150">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-50/50 via-transparent to-warmth-50/50 dark:from-forest-950/30 dark:to-warmth-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            )
          })}
        </div>

        {/* Bottom Stats Row */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">-12°C</div>
            <div className="text-sm text-muted-foreground">Façade cooling</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">60%</div>
            <div className="text-sm text-muted-foreground">Water savings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">20+</div>
            <div className="text-sm text-muted-foreground">LEED points</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Energy reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">8dB</div>
            <div className="text-sm text-muted-foreground">Noise reduction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Years lifespan</div>
          </div>
        </div>
      </div>
    </section>
  )
}
