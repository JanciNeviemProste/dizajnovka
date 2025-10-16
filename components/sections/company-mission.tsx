import { Card } from "@/components/ui/card"
import { companyMission, companyValues } from "@/lib/content-team"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function CompanyMission() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-earth-50/30 dark:from-background dark:to-earth-950/10">
      <div className="container">
        {/* Mission Statement */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-forest-50 dark:bg-forest-950/50 text-forest-700 dark:text-forest-300 border border-forest-100 dark:border-forest-900 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Icons.Building2 className="h-4 w-4" />
              Zalozene {companyMission.founded}
            </div>

            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {companyMission.title}
            </h2>

            <p className="text-xl text-forest-600 dark:text-forest-400 font-semibold mb-4">
              {companyMission.subtitle}
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {companyMission.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {companyMission.stats.map((stat, index) => (
                <div key={index} className="border-l-2 border-warmth-500 pl-4">
                  <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image Card */}
          <div className="relative">
            <Card className="relative overflow-hidden border-0 shadow-premium-lg aspect-[4/3] bg-gradient-to-br from-forest-500 to-terra-500">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[url('/images/pattern-organic.svg')] opacity-10" />

              {/* Placeholder Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/20 text-9xl font-bold font-heading">15+</div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent flex items-end p-8">
                <div className="text-white">
                  <div className="text-sm opacity-80 mb-2">Od roku {companyMission.founded}</div>
                  <div className="text-2xl font-heading font-bold">
                    Pionieri vertikalneho ozelenovania na Slovensku
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Company Values Grid */}
        <div className="text-center mb-12">
          <h3 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Nase hodnoty
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zakladne principy, ktorymi sa riadime pri kazdnom projekte
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((value, index) => {
            const Icon = Icons[value.icon as keyof typeof Icons] as LucideIcon

            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white dark:bg-gray-950 shadow-premium hover:shadow-premium-hover transition-all duration-150 p-8"
                style={{
                  animation: `slide-up 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-600 via-warmth-500 to-terra-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-50 to-warmth-50 dark:from-forest-950 dark:to-warmth-950 group-hover:from-forest-100 group-hover:to-warmth-100 dark:group-hover:from-forest-900 dark:group-hover:to-warmth-900 transition-all duration-150 shadow-sm group-hover:shadow-md">
                  <Icon className="h-8 w-8 text-forest-600 dark:text-forest-400" />
                </div>

                {/* Content */}
                <h4 className="font-heading text-xl font-semibold mb-3 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors duration-150">
                  {value.title}
                </h4>

                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
