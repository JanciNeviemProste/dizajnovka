import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Calendar, Ruler } from "lucide-react"
import { premiumContent } from "@/lib/content-premium"

export function FeaturedProjects() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Featured projects
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover how we've transformed buildings across Europe with innovative green façade systems. Each project demonstrates our commitment to quality, sustainability, and design excellence.
          </p>
        </div>
      </div>

      {/* Full-Width Projects - Patrick Blanc Style */}
      <div className="space-y-0">
        {premiumContent.featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className="relative group"
            style={{
              animation: `fade-in 0.8s ease-out`,
              animationDelay: `${index * 0.2}s`,
              animationFillMode: "both",
            }}
          >
            {/* Full-Width Image Container */}
            <div className="relative aspect-[21/9] overflow-hidden bg-earth-900">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-500 to-terra-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/10 text-[20vw] font-bold font-heading">
                  {project.id.toString().padStart(2, "0")}
                </div>
              </div>

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/60 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Content Overlay - Minimal Text like Patrick Blanc */}
              <div className="absolute inset-0 flex items-end">
                <div className="container">
                  <div className="grid lg:grid-cols-12 gap-8 py-12">
                    {/* Left - Project Info */}
                    <div className="lg:col-span-7">
                      <div className="space-y-4">
                        {/* Category Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white/90">
                          {project.category}
                        </div>

                        {/* Title */}
                        <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight group-hover:text-warmth-300 transition-colors duration-300">
                          {project.title}
                        </h3>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-6 text-white/80">
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm">{project.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Ruler className="h-4 w-4" />
                            <span className="text-sm">{project.area}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm">{project.year}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-white/70 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>

                        {/* CTA */}
                        <div className="pt-4">
                          <Button
                            variant="outline"
                            className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60 transition-all duration-150 group/btn"
                            asChild
                          >
                            <Link href={`/projekty/${project.id}`}>
                              View project details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Right - Key Stats */}
                    <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
                      <div className="grid grid-cols-2 gap-6 max-w-md">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white font-heading mb-1">
                            {project.area}
                          </div>
                          <div className="text-xs text-white/60">Coverage area</div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                          <div className="text-2xl font-bold text-white font-heading mb-1">
                            {project.year}
                          </div>
                          <div className="text-xs text-white/60">Completed</div>
                        </div>
                        <div className="col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4">
                          <div className="text-sm font-medium text-white mb-1">
                            System type
                          </div>
                          <div className="text-xs text-white/60">{project.system}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < premiumContent.featuredProjects.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-earth-300 to-transparent dark:via-earth-700" />
            )}
          </div>
        ))}
      </div>

      {/* View All Projects CTA */}
      <div className="container">
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-forest-600 hover:bg-forest-700 text-white shadow-premium hover:shadow-premium-hover transition-all duration-150 group"
            asChild
          >
            <Link href="/projekty">
              Explore all projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
