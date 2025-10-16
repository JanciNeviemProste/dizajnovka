"use client"

import { useState } from "react"
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
import { CheckCircle } from "lucide-react"

export function ContactForm() {
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
  )
}