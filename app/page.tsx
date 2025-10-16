import { Hero } from "@/components/sections/hero"
import { BenefitsGrid } from "@/components/sections/benefits-grid"
import { SystemsCards } from "@/components/sections/systems-cards"
import { TeamPreview } from "@/components/sections/team-preview"
import { CTASection } from "@/components/sections/cta-section"
import { FAQAccordion } from "@/components/sections/faq-accordion"

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsGrid />
      <SystemsCards />
      <TeamPreview />
      <CTASection />
      <FAQAccordion />
    </>
  )
}