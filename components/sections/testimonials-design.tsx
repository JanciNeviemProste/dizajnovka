import { Card } from "@/components/ui/card"
import { designContent } from "@/lib/content-design"
import { Quote, Star } from "lucide-react"

export function TestimonialsDesign() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-emerald-50/30 dark:from-background dark:to-emerald-950/10">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Čo hovoria naši klienti
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Spokojnosť klientov je naším meradlom úspechu.
            Prečítajte si skúsenosti tých, ktorí s nami realizovali svoje projekty.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {designContent.testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-950 p-8"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-emerald-600" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-emerald-500 text-emerald-500"
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="relative z-10 mb-8">
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t">
                {/* Avatar */}
                <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
                  {testimonial.name.charAt(0)}
                </div>

                {/* Info */}
                <div>
                  <div className="font-semibold text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 sm:grid-cols-3 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              98%
            </div>
            <div className="text-sm text-muted-foreground">
              Spokojnosť klientov
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              50+
            </div>
            <div className="text-sm text-muted-foreground">
              Úspešných projektov
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              15+
            </div>
            <div className="text-sm text-muted-foreground">
              Rokov skúseností
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
