import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { CompanyMission } from "@/components/sections/company-mission"
import { TeamSection } from "@/components/sections/team-section"
import { CertificationsShowcase } from "@/components/sections/certifications-showcase"
import { companyTimeline } from "@/lib/content-team"
import { Calendar, MapPin, Users, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "O nas - Zelene fasady",
  description: "Spoznajte nas expertny tim a historiu spolocnosti. 15+ rokov skusenosti v oblasti vertikalneho ozelenovania s medzinarodnymi certifikaciami.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-forest-900 via-forest-800 to-earth-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-organic.svg')] opacity-10" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              O spolocnosti
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
              Pionieri vertikalneho ozelenovania
            </h1>

            <p className="text-xl text-white/80 leading-relaxed mb-8">
              Od roku 2009 transformujeme mestske prostredie prostrednict vom inovativnych systemov zelenych fasad. Nase misia je vytvorit zdravsie, udrzatelnejsie a estetickejsie mesto.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2">2009</div>
                <div className="text-sm text-white/70">Zalozenie</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2">50+</div>
                <div className="text-sm text-white/70">Projektov</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2">4</div>
                <div className="text-sm text-white/70">Expertov</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold font-heading mb-2">5+</div>
                <div className="text-sm text-white/70">Certifikacii</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Mission */}
      <CompanyMission />

      {/* Timeline Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-earth-50/30 to-white dark:from-earth-950/10 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-20">
            <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Nasa cesta
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Od skromnych zaciatok k pozicii liderov v oblasti vertikalneho ozelenovania
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            {companyTimeline.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-8 pb-12 last:pb-0"
                style={{
                  animation: `slide-in-left 0.6s ease-out`,
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {/* Timeline Line */}
                {index < companyTimeline.length - 1 && (
                  <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-forest-600 to-forest-200 dark:from-forest-400 dark:to-forest-900" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-gradient-to-br from-forest-600 to-warmth-600 flex items-center justify-center shadow-lg">
                  <Calendar className="h-4 w-4 text-white" />
                </div>

                <Card className="ml-4 border-0 shadow-premium hover:shadow-premium-hover transition-all duration-150 bg-white dark:bg-gray-950 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-3xl font-bold font-heading text-forest-600 dark:text-forest-400">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Certifications */}
      <CertificationsShowcase />

      {/* Location & Contact Info */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-earth-50/30 to-white dark:from-earth-950/10 dark:to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Headquarters Info */}
            <Card className="border-0 shadow-premium p-8 bg-white dark:bg-gray-950">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-forest-100 to-warmth-100 dark:from-forest-950 dark:to-warmth-950 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-forest-600 dark:text-forest-400" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Sidlo spolocnosti</h3>
                  <p className="text-muted-foreground">Bratislava, Slovensko</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-medium mb-1">Adresa:</div>
                  <div className="text-muted-foreground">
                    Zelene fasady s.r.o.<br />
                    Hlavna ulica 123<br />
                    811 01 Bratislava<br />
                    Slovensko
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-1">Kontakt:</div>
                  <div className="text-muted-foreground">
                    Email: info@zelenefasady.sk<br />
                    Tel: +421 900 123 456<br />
                    ICO: 12 345 678
                  </div>
                </div>

                <div>
                  <div className="font-medium mb-1">Pracovny cas:</div>
                  <div className="text-muted-foreground">
                    Pondelok - Piatok: 8:00 - 17:00<br />
                    Sobota - Nedela: Zatvorene
                  </div>
                </div>
              </div>
            </Card>

            {/* Awards & Recognition */}
            <Card className="border-0 shadow-premium p-8 bg-white dark:bg-gray-950">
              <div className="flex items-start gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-warmth-100 to-terra-100 dark:from-warmth-950 dark:to-terra-950 flex items-center justify-center">
                  <Award className="h-6 w-6 text-warmth-600 dark:text-warmth-400" />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold mb-2">Ocenenia</h3>
                  <p className="text-muted-foreground">Medzinarodne uznanie</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-warmth-500 pl-4">
                  <div className="font-medium mb-1">Prazska architektonicka cena 2023</div>
                  <div className="text-sm text-muted-foreground">
                    Za projekt Riverside Residences
                  </div>
                </div>

                <div className="border-l-2 border-forest-500 pl-4">
                  <div className="font-medium mb-1">BREEAM Excellent 2023</div>
                  <div className="text-sm text-muted-foreground">
                    NBS Business Center Bratislava
                  </div>
                </div>

                <div className="border-l-2 border-terra-500 pl-4">
                  <div className="font-medium mb-1">Best Green Innovation 2021</div>
                  <div className="text-sm text-muted-foreground">
                    IoT monitoring system
                  </div>
                </div>

                <div className="border-l-2 border-earth-500 pl-4">
                  <div className="font-medium mb-1">Cradle to Cradle Certified</div>
                  <div className="text-sm text-muted-foreground">
                    Udrzatelne materialy a systemy
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
