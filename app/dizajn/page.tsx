import type { Metadata } from "next"
import { HeroPremium } from "@/components/sections/hero-premium"
import { BenefitsPremium } from "@/components/sections/benefits-premium"
import { ProcessSection } from "@/components/sections/process-section"
import { SystemsPremium } from "@/components/sections/systems-premium"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { TechnologySection } from "@/components/sections/technology-section"
import { TestimonialsDesign } from "@/components/sections/testimonials-design"
import { CTADesign } from "@/components/sections/cta-design"

export const metadata: Metadata = {
  title: "Zelene fasady - Premium systemy",
  description: "Profesionalne systemy zelenych fasad pre udrzatelnu architekturu. Navrh, instalacia a udrzba certifikovanymi specialistami s 15+ rokmi expertiz.",
}

export default function DesignPage() {
  return (
    <>
      <HeroPremium />
      <BenefitsPremium />
      <FeaturedProjects />
      <SystemsPremium />
      <ProcessSection />
      <TechnologySection />
      <TestimonialsDesign />
      <CTADesign />
    </>
  )
}
