import type { Metadata } from "next"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt - Zelene fasady",
  description: "Kontaktujte nas expertny tim pre konzultaciu ohladom vaseho projektu zelenych fasad. Bezplatne posudenie lokality a dizajnove koncepty.",
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-br from-forest-900 via-forest-800 to-earth-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/pattern-organic.svg')] opacity-10" />

        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <MessageSquare className="h-4 w-4" />
              Kontaktujte nas
            </div>

            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl mb-6 leading-tight">
              Zaciname spolocny projekt
            </h1>

            <p className="text-xl text-white/80 leading-relaxed">
              Bezplatne posudenie lokality, dizajnove koncepty a odborne poradenstvo. Nas tim vam pomože najst optimalne riesenie pre vas projekt.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-premium-lg p-8 md:p-12 bg-white dark:bg-gray-950">
                <h2 className="font-heading text-3xl font-bold mb-2">
                  Nezavazna konzultacia
                </h2>
                <p className="text-muted-foreground mb-8">
                  Vyplnte formular a ozveme sa vam do 24 hodin
                </p>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Meno a priezvisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 dark:border-earth-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                      placeholder="Jan Novak"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 dark:border-earth-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                      placeholder="jan.novak@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 dark:border-earth-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                      placeholder="+421 900 123 456"
                    />
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Typ projektu *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 dark:border-earth-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all"
                    >
                      <option value="">Vyberte typ projektu</option>
                      <option value="commercial">Komercna budova</option>
                      <option value="residential">Rezidencna budova</option>
                      <option value="public">Verejna budova</option>
                      <option value="interior">Interierova zelena stena</option>
                      <option value="other">Ine</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Sprava *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-earth-200 dark:border-earth-800 bg-white dark:bg-gray-950 focus:ring-2 focus:ring-forest-600 focus:border-transparent transition-all resize-none"
                      placeholder="Popiste vas projekt a poziadavky..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-forest-600 to-warmth-600 hover:from-forest-700 hover:to-warmth-700 text-white shadow-premium hover:shadow-premium-hover transition-all duration-150"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Odoslat spravu
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-premium p-6 bg-white dark:bg-gray-950">
                <h3 className="font-heading text-xl font-bold mb-6">Priamy kontakt</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-forest-50 dark:bg-forest-950/50 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-forest-600 dark:text-forest-400" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Telefon</div>
                      <a href="tel:+421900123456" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                        +421 900 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-forest-50 dark:bg-forest-950/50 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-forest-600 dark:text-forest-400" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <a href="mailto:info@zelenefasady.sk" className="text-sm text-muted-foreground hover:text-forest-600 transition-colors">
                        info@zelenefasady.sk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-forest-50 dark:bg-forest-950/50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-forest-600 dark:text-forest-400" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Adresa</div>
                      <div className="text-sm text-muted-foreground">
                        Hlavna ulica 123<br />
                        811 01 Bratislava<br />
                        Slovensko
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-forest-50 dark:bg-forest-950/50 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-forest-600 dark:text-forest-400" />
                    </div>
                    <div>
                      <div className="font-medium mb-1">Pracovny cas</div>
                      <div className="text-sm text-muted-foreground">
                        Pon - Pia: 8:00 - 17:00<br />
                        Vikend: Zatvorene
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-premium p-6 bg-gradient-to-br from-forest-50 to-warmth-50 dark:from-forest-950/50 dark:to-warmth-950/50">
                <h3 className="font-heading text-xl font-bold mb-4">Co mozete ockavat</h3>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                    <span>Odpoved do 24 hodin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                    <span>Bezplatne posudenie lokality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                    <span>Predbezne dizajnove koncepty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-forest-600 mt-2 flex-shrink-0" />
                    <span>Indikacia rozpoctu</span>
                  </li>
                </ul>
              </Card>

              <Card className="border-0 shadow-premium overflow-hidden aspect-square bg-earth-100 dark:bg-earth-900">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-earth-400 mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Mapa lokality</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}