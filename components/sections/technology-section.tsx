import { Card } from "@/components/ui/card"
import { premiumContent } from "@/lib/content-premium"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function TechnologySection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-earth-50/30 to-white dark:from-earth-950/10 dark:to-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              {premiumContent.technology.title}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {premiumContent.technology.description}
            </p>

            {/* Features Grid */}
            <div className="grid gap-6">
              {premiumContent.technology.features.map((feature, index) => {
                const Icon = Icons[feature.icon as keyof typeof Icons] as LucideIcon

                return (
                  <div
                    key={index}
                    className="flex gap-4 group"
                    style={{
                      animation: `slide-in-left 0.6s ease-out`,
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "both",
                    }}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-forest-100 to-warmth-100 dark:from-forest-950 dark:to-warmth-950 flex items-center justify-center group-hover:from-forest-200 group-hover:to-warmth-200 dark:group-hover:from-forest-900 dark:group-hover:to-warmth-900 transition-all duration-150 shadow-sm">
                        <Icon className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            {/* Main Card */}
            <Card className="relative overflow-hidden border-0 shadow-premium-lg animate-scale-in">
              <div className="aspect-[4/3] bg-gradient-to-br from-forest-500 to-terra-500 relative">
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/images/pattern-tech.svg')] opacity-10" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <div className="text-center text-white">
                    <div className="text-7xl font-bold font-heading mb-4">98%</div>
                    <div className="text-lg">Spolahlvost systemu</div>
                    <div className="text-sm opacity-80 mt-2">Na zaklade 15+ rokov instalacii</div>
                  </div>
                </div>

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm border-t border-white/20 p-4">
                  <div className="grid grid-cols-3 gap-4 text-center text-white">
                    <div>
                      <div className="text-2xl font-bold font-heading">24/7</div>
                      <div className="text-xs opacity-80">Monitoring</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading">60%</div>
                      <div className="text-xs opacity-80">Uspora vody</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold font-heading">25+</div>
                      <div className="text-xs opacity-80">Rokov zivotnost</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Floating Card - Certifications */}
            <Card className="absolute -bottom-6 -left-6 w-48 border-0 shadow-premium bg-white dark:bg-gray-950 p-4 animate-slide-in-left" style={{ animationDelay: "0.4s" }}>
              <div className="text-xs text-muted-foreground mb-2">Certifikovane</div>
              <div className="space-y-2">
                {premiumContent.certifications.slice(0, 2).map((cert, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-earth-100 dark:bg-earth-900 flex items-center justify-center">
                      <div className="w-4 h-4 bg-forest-600 rounded-sm" />
                    </div>
                    <div className="text-xs font-medium truncate">{cert.name.split(' ')[0]}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Floating Badge - Top Right */}
            <div className="absolute -top-4 -right-4 bg-warmth-500 text-white rounded-full p-4 shadow-premium animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <div className="text-2xl font-bold font-heading">15+</div>
                <div className="text-xs">Rokov</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
