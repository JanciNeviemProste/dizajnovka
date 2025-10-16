import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { siteContent } from "@/lib/content"
import * as Icons from "lucide-react"
import { LucideIcon } from "lucide-react"

export function BenefitsGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Prečo investovať do zelených fasád?
          </h2>
          <p className="text-lg text-muted-foreground">
            Komplexné riešenie pre udržateľnú architektúru s merateľnými výsledkami
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteContent.benefits.map((benefit, index) => {
            const Icon = Icons[benefit.icon as keyof typeof Icons] as LucideIcon

            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                <CardHeader>
                  {benefit.stat && (
                    <div className="absolute top-4 right-4 text-5xl font-bold text-green-100 dark:text-green-900/30">
                      {benefit.stat}
                    </div>
                  )}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                    <Icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                  <CardDescription className="text-base mb-3">
                    {benefit.description}
                  </CardDescription>
                  {benefit.proof && (
                    <div className="pt-3 border-t border-green-200 dark:border-green-800">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        ✓ {benefit.proof}
                      </span>
                    </div>
                  )}
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* Additional Statistics */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">30%</div>
            <div className="text-sm text-muted-foreground">Úspora energie</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15°C</div>
            <div className="text-sm text-muted-foreground">Zníženie teploty fasády</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">20+</div>
            <div className="text-sm text-muted-foreground">LEED bodov</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">5-10</div>
            <div className="text-sm text-muted-foreground">Rokov návratnosť</div>
          </div>
        </div>
      </div>
    </section>
  )
}