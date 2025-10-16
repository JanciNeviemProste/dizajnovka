import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/lib/content"
import { ArrowRight, Users, Award, CheckCircle } from "lucide-react"

export function TeamPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Profesionálny tím expertov
          </h2>
          <p className="text-lg text-muted-foreground">
            Skúsení odborníci s dlhoročnou praxou v oblasti zelených fasád
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {/* Team Stats */}
          <Card className="p-8">
            <CardHeader className="p-0">
              <div className="mb-4">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-4">Náš prístup</CardTitle>
              <CardDescription className="text-base space-y-4">
                <p>
                  Kombinujeme technickú expertízu s kreatívnym prístupom k dizajnu.
                  Každý projekt je pre nás jedinečný a pristupujeme k nemu s maximálnou
                  pozornosťou k detailom.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>15+ rokov skúseností v obore</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Certifikovaní BREEAM/LEED konzultanti</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Komplexné riešenia od návrhu po údržbu</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Záručný a pozáručný servis</span>
                  </div>
                </div>
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Featured Team Member */}
          <Card className="p-8 bg-muted/30">
            <CardHeader className="p-0">
              <div className="mb-4">
                <Award className="h-10 w-10 text-green-600" />
              </div>
              <CardTitle className="text-2xl mb-2">{siteContent.team[0].name}</CardTitle>
              <p className="text-muted-foreground font-medium mb-4">{siteContent.team[0].role}</p>
              <CardDescription className="text-base space-y-4">
                <p>{siteContent.team[0].bio}</p>
                <p className="text-sm">
                  "Zelené fasády nie sú len estetickým prvkom - sú investíciou do zdravšej
                  a udržateľnejšej budúcnosti našich miest. Každý projekt vnímame ako
                  príležitosť prispieť k lepšiemu životnému prostrediu."
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" asChild className="group">
            <Link href="/tim">
              Spoznajte celý tím
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}