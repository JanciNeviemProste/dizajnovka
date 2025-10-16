import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { premiumContent } from "@/lib/content-premium"

export function HeroPremium() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Diagonal Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Botanical Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900 via-forest-800 to-earth-900" />
        <div className="absolute inset-0 bg-[url('/images/hero-botanical.jpg')] bg-cover bg-center bg-no-repeat opacity-40" />

        {/* Diagonal Gradient Overlay (45deg like SemperGreenwall) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-forest-900/95 via-forest-800/80 to-transparent"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 47, 32, 0.95) 0%, rgba(0, 89, 63, 0.85) 50%, rgba(46, 62, 40, 0.7) 100%)'
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-warmth-500 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terra-500 rounded-full blur-3xl opacity-10" />

      {/* Content */}
      <div className="container relative z-20 py-32 md:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-7">
              {/* Tagline */}
              <div className="mb-6 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2 text-sm font-medium text-white/90">
                {premiumContent.company.tagline}
              </div>

              {/* Main Heading - 90px like SemperGreenwall */}
              <h1 className="font-heading font-bold tracking-tight text-white mb-6 animate-fade-in leading-[1.1]"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)' }}>
                {premiumContent.hero.title}
              </h1>

              {/* Subheading with White Divider Element */}
              <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-24 h-1 bg-warmth-500 mb-4" />
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                  {premiumContent.hero.description}
                </p>
              </div>

              {/* CTA Buttons with Premium Styling */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
                <Button
                  size="lg"
                  className="bg-warmth-500 hover:bg-warmth-600 text-white text-lg px-8 py-6 h-auto shadow-premium-lg hover:shadow-premium-hover transition-all duration-150 group font-heading"
                  asChild
                >
                  <Link href="/kontakt">
                    {premiumContent.hero.cta.primary}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60 text-lg px-8 py-6 h-auto transition-all duration-150 group"
                  asChild
                >
                  <Link href="/projekty">
                    <Play className="mr-2 h-5 w-5" />
                    {premiumContent.hero.cta.secondary}
                  </Link>
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.6s" }}>
                {premiumContent.hero.stats.map((stat, index) => (
                  <div key={index} className="border-l-2 border-warmth-500/50 pl-4">
                    <div className="text-3xl md:text-4xl font-bold text-white font-heading mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/70">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Featured Image Card (Optional) */}
            <div className="lg:col-span-5 hidden lg:block animate-scale-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-premium-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-forest-400 to-terra-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-9xl font-bold font-heading">01</div>
                </div>
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-[url('/images/hero-feature.jpg')] bg-cover bg-center opacity-80" />

                {/* Card Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-forest-900/90 to-transparent">
                  <div className="text-warmth-400 text-sm font-medium mb-1">Vybrany projekt</div>
                  <div className="text-white text-lg font-heading font-semibold">{premiumContent.featuredProjects[0].title}</div>
                  <div className="text-white/70 text-sm">{premiumContent.featuredProjects[0].location}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  )
}
