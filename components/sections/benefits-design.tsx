import { Card } from "@/components/ui/card"
import { designContent } from "@/lib/content-design"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function BenefitsDesign() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Prečo zelené fasády
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Spojenie prírody s architektúrou prináša výhody, ktoré presahujú estetiku.
            Zelené fasády vytvárajú hodnotu pre budovy, ľudí aj životné prostredie.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designContent.benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons] as LucideIcon

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white dark:bg-gray-950"
                style={{
                  animation: `slide-up 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Gradient Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="p-8">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 group-hover:from-emerald-100 group-hover:to-teal-100 dark:group-hover:from-emerald-900 dark:group-hover:to-teal-900 transition-colors duration-500">
                    <Icon className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-emerald-50/50 dark:from-emerald-950/50 group-hover:h-full transition-all duration-500 -z-10" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
