import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { designContent } from "@/lib/content-design"

export function HeroDesign() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/90 via-teal-900/80 to-emerald-950/90 z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center bg-no-repeat" />
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-emerald-500 to-teal-600" />
        </div>
      </div>

      {/* Animated Overlay Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container relative z-20 py-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Subtitle Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 text-sm font-medium text-white animate-slide-up">
            {designContent.company.tagline}
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {designContent.hero.title}
          </h1>

          {/* Subheading */}
          <p className="mx-auto mb-12 max-w-3xl text-xl text-white/90 md:text-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {designContent.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button
              size="lg"
              className="bg-white text-emerald-900 hover:bg-white/90 text-lg px-8 py-6 h-auto group shadow-2xl"
              asChild
            >
              <Link href="/kontakt">
                {designContent.hero.cta.primary}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 text-lg px-8 py-6 h-auto group"
              asChild
            >
              <Link href="/projekty">
                {designContent.hero.cta.secondary}
                <Play className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-white/80">rokov skúseností</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-white/80">realizovaných projektov</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-white/80">spokojnosť klientov</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>
  )
}
