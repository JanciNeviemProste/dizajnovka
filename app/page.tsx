import type { Metadata } from "next"
import { HeroPremium } from "@/components/sections/hero-premium"
import { CompanyMission } from "@/components/sections/company-mission"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { SystemsPremium } from "@/components/sections/systems-premium"
import { TeamSection } from "@/components/sections/team-section"
import { BenefitsPremium } from "@/components/sections/benefits-premium"
import { TechnologySection } from "@/components/sections/technology-section"
import { CertificationsShowcase } from "@/components/sections/certifications-showcase"
import { TestimonialsDesign } from "@/components/sections/testimonials-design"
import { CTADesign } from "@/components/sections/cta-design"

export const metadata: Metadata = {
  title: "Zelene fasady - Profesionalne systemy vertikalneho ozelenovania",
  description: "Top dizajn zelenych fasad pre modernu architekturu. Certifikovani experti s 15+ rokmi skusenosti. LEED, BREEAM a C2C akreditacie. 50+ zrealizovanych projektov.",
}

export default function HomePage() {
  return (
    <>
      <HeroPremium />
      <CompanyMission />
      <FeaturedProjects />
      <SystemsPremium />
      <TeamSection />
      <BenefitsPremium />
      <TechnologySection />
      <CertificationsShowcase />
      <TestimonialsDesign />
      <CTADesign />
    </>
  )
}
