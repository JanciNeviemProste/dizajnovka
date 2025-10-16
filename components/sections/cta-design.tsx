import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { designContent } from "@/lib/content-design"
import { ArrowRight, Check, Phone } from "lucide-react"

export function CTADesign() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950" />
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10">
        <div className="mx-auto max-w-5xl">
          <Card className="border-0 shadow-2xl bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm overflow-hidden">
            <div className="grid lg:grid-cols-5 gap-8">
              {/* Content Side */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                  {designContent.cta.title}
                </h2>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  {designContent.cta.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all group"
                    asChild
                  >
                    <Link href="/kontakt">
                      {designContent.cta.cta.primary}
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30 group"
                    asChild
                  >
                    <a href="tel:+421900123456">
                      <Phone className="mr-2 h-5 w-5" />
                      {designContent.cta.cta.secondary}
                    </a>
                  </Button>
                </div>

                {/* Trust Line */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 border-2 border-white dark:border-gray-950"
                      />
                    ))}
                  </div>
                  <span>Pridajte sa k viac ako 50 spokojným klientom</span>
                </div>
              </div>

              {/* Benefits Side */}
              <div className="lg:col-span-2 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/50 dark:to-teal-950/50 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-lg font-semibold mb-6">Čo získate</h3>
                <div className="space-y-4">
                  {designContent.cta.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-emerald-200 dark:border-emerald-800">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Odpovieme do 24 hodín</div>
                      <div className="text-xs text-muted-foreground">
                        Po - Pi: 8:00 - 17:00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
