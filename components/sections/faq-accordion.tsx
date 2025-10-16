"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteContent } from "@/lib/content"

export function FAQAccordion() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Časté otázky
            </h2>
            <p className="text-lg text-muted-foreground">
              Odpovede na najčastejšie otázky o zelených fasádach
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {siteContent.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Máte ďalšie otázky? Radi vám ich zodpovieme.
            </p>
            <a
              href="/kontakt"
              className="inline-flex items-center text-primary hover:underline font-medium"
            >
              Kontaktujte nás →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}