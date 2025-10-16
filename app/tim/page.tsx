import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { siteContent } from "@/lib/content"
import { Users, Linkedin, Mail, UserPlus } from "lucide-react"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Náš tím",
  description: "Spoznajte náš tím expertov v oblasti zelených fasád s dlhoročnými skúsenosťami v návrhu, realizácii a údržbe.",
}

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Náš tím expertov
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Kombinujeme technickú expertízu s kreatívnym prístupom k dizajnu.
              Každý projekt je pre nás jedinečný a pristupujeme k nemu s maximálnou
              pozornosťou k detailom.
            </p>

            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Rokov skúseností</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Realizovaných projektov</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Spokojnosť klientov</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Servisná podpora</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {siteContent.team.map((member) => (
              <Card
                key={member.id}
                className={`h-full ${
                  member.placeholder
                    ? "bg-muted/30 border-dashed"
                    : "hover:shadow-lg transition-all duration-300"
                }`}
              >
                <CardHeader className="text-center">
                  {/* Avatar */}
                  <div className="mb-4 mx-auto">
                    {member.placeholder ? (
                      <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                        <UserPlus className="h-10 w-10 text-muted-foreground" />
                      </div>
                    ) : (
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground font-medium mb-4">
                    {member.role}
                  </p>
                  <CardDescription className="text-sm">
                    {member.bio}
                  </CardDescription>

                  {/* Social Links */}
                  {!member.placeholder && (
                    <div className="flex justify-center gap-4 mt-6">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      )}
                      <a
                        href="mailto:info@zelenefasady.sk"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </a>
                    </div>
                  )}
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">Naše hodnoty</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">Profesionalita</CardTitle>
                  <CardDescription>
                    Pristupujeme k každému projektu s maximálnou odbornosťou a
                    dôrazom na kvalitu. Naši experti neustále sledujú najnovšie
                    trendy a technológie v oblasti zelených fasád.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">Udržateľnosť</CardTitle>
                  <CardDescription>
                    Veríme v zelenú budúcnosť miest. Naše riešenia prispievajú k
                    lepšiemu životnému prostrediu a pomáhajú vytvárať zdravšie a
                    príjemnejšie miesta na život.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl mb-2">Inovácia</CardTitle>
                  <CardDescription>
                    Neustále hľadáme nové a lepšie spôsoby, ako integrovať prírodu
                    do architektúry. Využívame najmodernejšie technológie a
                    materiály pre optimálne výsledky.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}