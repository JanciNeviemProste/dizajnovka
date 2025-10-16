import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import { designContent } from "@/lib/content-design"

export function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-emerald-50/30 dark:from-background dark:to-emerald-950/10">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Naše projekty
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Každý projekt je jedinečný príbeh o transformácii priestoru.
            Pozrite sa na naše realizácie a nechajte sa inšpirovať.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designContent.caseStudies.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-emerald-100 dark:bg-emerald-950">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/20 text-6xl font-bold">
                    {project.id.toString().padStart(2, "0")}
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Project Details */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pt-4 border-t">
                  <span>{project.system}</span>
                  <span>{project.area}</span>
                  <span>{project.year}</span>
                </div>

                {/* CTA */}
                <Button
                  variant="ghost"
                  className="w-full group/btn hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                  asChild
                >
                  <Link href={`/projekty/${project.id}`}>
                    Zobraziť projekt
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-emerald-200 hover:bg-emerald-50 dark:border-emerald-800 dark:hover:bg-emerald-950/30 group"
            asChild
          >
            <Link href="/projekty">
              Zobraziť všetky projekty
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
