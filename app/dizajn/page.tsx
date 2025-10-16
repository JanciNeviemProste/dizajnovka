import type { Metadata } from "next"
import { HeroDesign } from "@/components/sections/hero-design"
import { BenefitsDesign } from "@/components/sections/benefits-design"
import { ProcessSection } from "@/components/sections/process-section"
import { SystemsDesign } from "@/components/sections/systems-design"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { TestimonialsDesign } from "@/components/sections/testimonials-design"
import { CTADesign } from "@/components/sections/cta-design"

export const metadata: Metadata = {
  title: "Zelené fasády - Dizajnová verzia",
  description: "Transformujeme budovy na živé ekosystémy. Špecializujeme sa na tvorbu zelených fasád, ktoré spájajú architektúru s prírodou.",
}

export default function DesignPage() {
  return (
    <>
      <HeroDesign />
      <BenefitsDesign />
      <ProcessSection />
      <SystemsDesign />
      <PortfolioSection />
      <TestimonialsDesign />
      <CTADesign />
    </>
  )
}
