import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás pre nezáväznú konzultáciu ohľadom zelených fasád. Radi vám poradíme s výberom najvhodnejšieho riešenia.",
}

export default function ContactPage() {

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
              Kontaktujte nás
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Máte záujem o zelené fasády? Radi vám pripravíme nezáväznú ponuku
              na mieru presne podľa vašich potrieb a požiadaviek.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Kontaktné informácie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefón</p>
                      <a href="tel:+421900123456" className="text-muted-foreground hover:text-foreground">
                        +421 900 123 456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@zelenefasady.sk" className="text-muted-foreground hover:text-foreground">
                        info@zelenefasady.sk
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Adresa</p>
                      <p className="text-muted-foreground">
                        Bratislava<br />
                        Slovensko
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="font-medium">Pracovné hodiny</p>
                      <p className="text-muted-foreground">
                        Po - Pi: 8:00 - 17:00<br />
                        So - Ne: Zatvorené
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Prečo s nami?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">15+ rokov skúseností</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Certifikovaní experti</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Komplexné riešenia</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Záručný servis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-sm">Individuálny prístup</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-8">Kde nás nájdete</h2>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interaktívna mapa bude pridaná neskôr
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}