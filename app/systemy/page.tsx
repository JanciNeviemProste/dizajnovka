import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { siteContent } from "@/lib/content"
import { CheckCircle2, Leaf, Award, TrendingUp, Wrench } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Systémy zelených fasád",
  description: "Kompletný prehľad našich systémov zelených fasád - popínavé, modulárne, hydroponické, hybridné a biofiltračné riešenia.",
}

export default function SystemsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Systémy zelených fasád
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ponúkame komplexné riešenia prispôsobené vašim potrebám,
              od ekonomických popínavých systémov až po high-tech biofiltračné steny.
            </p>
          </div>
        </div>
      </section>

      {/* Systems Detail Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-24">
            {siteContent.systems.map((system, index) => (
              <div key={system.id} id={system.id} className="scroll-mt-20">
                <div className="grid gap-8 lg:grid-cols-2 items-start">
                  {/* System Info */}
                  <div className={index % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {system.subtitle}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{system.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {system.description}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <TrendingUp className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Návratnosť investície</p>
                          <p className="text-sm text-muted-foreground">{system.roi}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Wrench className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Údržba a životnosť</p>
                          <p className="text-sm text-muted-foreground">{system.maintenanceLifespan}</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Certifikácie</p>
                          <p className="text-sm text-muted-foreground">
                            {Array.isArray(system.certifications)
                              ? system.certifications.join(", ")
                              : system.certifications}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button asChild>
                      <Link href="/kontakt">Získať cenovú ponuku</Link>
                    </Button>
                  </div>

                  {/* System Details Card */}
                  <Card className={index % 2 === 0 ? "lg:order-2" : "lg:order-1"}>
                    <CardHeader>
                      <CardTitle>Detaily systému</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Benefits */}
                      <div>
                        <h4 className="font-medium mb-3">Hlavné výhody</h4>
                        <div className="space-y-2">
                          {system.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center">
                              <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Plants */}
                      <div>
                        <h4 className="font-medium mb-3">Vhodné rastliny</h4>
                        <div className="flex flex-wrap gap-2">
                          {system.plants.map((plant, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            >
                              <Leaf className="h-3 w-3 mr-1" />
                              {plant}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">Porovnanie systémov</h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Systém</th>
                    <th className="text-left py-4 px-4">Vstupné náklady</th>
                    <th className="text-left py-4 px-4">Údržba</th>
                    <th className="text-left py-4 px-4">Životnosť</th>
                    <th className="text-left py-4 px-4">Efekt</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Popínavé</td>
                    <td className="py-4 px-4 text-muted-foreground">Nízke</td>
                    <td className="py-4 px-4 text-muted-foreground">Minimálna</td>
                    <td className="py-4 px-4 text-muted-foreground">30+ rokov</td>
                    <td className="py-4 px-4 text-muted-foreground">Postupný</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Modulárne</td>
                    <td className="py-4 px-4 text-muted-foreground">Stredné</td>
                    <td className="py-4 px-4 text-muted-foreground">Pravidelná</td>
                    <td className="py-4 px-4 text-muted-foreground">15-20 rokov</td>
                    <td className="py-4 px-4 text-muted-foreground">Okamžitý</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Hydroponické</td>
                    <td className="py-4 px-4 text-muted-foreground">Vysoké</td>
                    <td className="py-4 px-4 text-muted-foreground">Odborná</td>
                    <td className="py-4 px-4 text-muted-foreground">20+ rokov</td>
                    <td className="py-4 px-4 text-muted-foreground">Okamžitý</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-4 font-medium">Hybridné</td>
                    <td className="py-4 px-4 text-muted-foreground">Stredné</td>
                    <td className="py-4 px-4 text-muted-foreground">Stredná</td>
                    <td className="py-4 px-4 text-muted-foreground">30+ rokov</td>
                    <td className="py-4 px-4 text-muted-foreground">Kombinovaný</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Biofiltračné</td>
                    <td className="py-4 px-4 text-muted-foreground">Vysoké</td>
                    <td className="py-4 px-4 text-muted-foreground">Odborná</td>
                    <td className="py-4 px-4 text-muted-foreground">15+ rokov</td>
                    <td className="py-4 px-4 text-muted-foreground">Okamžitý</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}