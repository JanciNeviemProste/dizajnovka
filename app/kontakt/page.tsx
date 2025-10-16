"use client"

import { useState } from "react"
import type { Metadata } from "next"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { siteContent } from "@/lib/content"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

// Export metadata as a regular const since this is a client component
export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás pre nezáväznú konzultáciu ohľadom zelených fasád. Radi vám poradíme s výberom najvhodnejšieho riešenia.",
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    systemType: "",
    message: "",
    consent: false,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          systemType: "",
          message: "",
          consent: false,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              <Card>
                <CardHeader>
                  <CardTitle>Formulár pre nezáväznú konzultáciu</CardTitle>
                  <CardDescription>
                    Vyplňte formulár a my vás budeme kontaktovať do 24 hodín
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSuccess ? (
                    <div className="py-8 text-center">
                      <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Ďakujeme za vašu správu!</h3>
                      <p className="text-muted-foreground">
                        Budeme vás kontaktovať čo najskôr.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Meno a priezvisko *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Firma</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefón</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="systemType">Typ systému</Label>
                        <Select
                          value={formData.systemType}
                          onValueChange={(value) => setFormData({ ...formData, systemType: value })}
                        >
                          <SelectTrigger id="systemType">
                            <SelectValue placeholder="Vyberte typ systému" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="popinave">Popínavé systémy</SelectItem>
                            <SelectItem value="modularne">Modulárne systémy</SelectItem>
                            <SelectItem value="hydroponicke">Hydroponické systémy</SelectItem>
                            <SelectItem value="hybridne">Hybridné riešenia</SelectItem>
                            <SelectItem value="biofiltracne">Biofiltračné steny</SelectItem>
                            <SelectItem value="neviem">Neviem sa rozhodnúť</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Správa *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Popíšte váš projekt alebo otázky..."
                        />
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          required
                          checked={formData.consent}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, consent: checked as boolean })
                          }
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          Súhlasím so spracovaním osobných údajov v súlade s našimi
                          zásadami ochrany osobných údajov *
                        </Label>
                      </div>

                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                        {isSubmitting ? "Odosielanie..." : "Odoslať správu"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
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