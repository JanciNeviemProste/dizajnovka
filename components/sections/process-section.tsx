import { designContent } from "@/lib/content-design"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-emerald-50/30 to-white dark:from-emerald-950/10 dark:to-background">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Ako to funguje
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Od prvej konzultácie až po dlhodobú starostlivosť.
            Každý krok je starostlivo naplánovaný pre váš úspech.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-0 left-0 right-0 hidden lg:block">
            <div className="mx-auto max-w-5xl px-12">
              <div className="absolute top-20 left-32 right-32 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200 dark:from-emerald-800 dark:via-teal-800 dark:to-emerald-800" />
            </div>
          </div>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
            {designContent.process.map((step, index) => {
              const Icon = Icons[step.icon as keyof typeof Icons] as LucideIcon

              return (
                <div
                  key={index}
                  className="relative group"
                  style={{
                    animation: `slide-up 0.6s ease-out`,
                    animationDelay: `${index * 0.15}s`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Step Number Badge */}
                  <div className="relative mb-8 flex justify-center">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <span className="text-2xl font-bold">{step.step}</span>
                    </div>
                    {/* Icon Background */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-emerald-100 dark:bg-emerald-950 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-gray-950 shadow-sm group-hover:shadow-md transition-shadow">
                      <Icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Začnime váš projekt ešte dnes
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 border-2 border-white dark:border-gray-950"
                />
              ))}
            </div>
            <span>Viac ako 50 spokojných klientov</span>
          </div>
        </div>
      </div>
    </section>
  )
}
