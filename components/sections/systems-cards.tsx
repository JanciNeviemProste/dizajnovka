import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function SystemsCards() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Naše systémy zelených fasád
          </h2>
          <p className="text-lg text-muted-foreground">
            Ponúkame širokú škálu riešení prispôsobených vašim potrebám a rozpočtu
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.systems.slice(0, 3).map((system) => (
            <Card key={system.id} className="flex flex-col h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">{system.subtitle}</span>
                </div>
                <CardTitle className="text-2xl">{system.name}</CardTitle>
                <CardDescription className="mt-2">
                  {system.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong>ROI:</strong> {system.roi}
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      <strong>Údržba:</strong> {system.maintenanceLifespan.split(",")[0]}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Hlavné výhody:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {system.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full group" asChild>
                  <Link href={`/systemy#${system.id}`}>
                    Viac informácií
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="/systemy">
              Zobraziť všetky systémy
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}