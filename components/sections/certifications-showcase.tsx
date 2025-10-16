import { Card } from "@/components/ui/card"
import { certifications } from "@/lib/content-team"
import { Award, CheckCircle2 } from "lucide-react"

export function CertificationsShowcase() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-earth-50/30 dark:from-background dark:to-earth-950/10">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-warmth-50 dark:bg-warmth-950/30 text-warmth-700 dark:text-warmth-300 border border-warmth-100 dark:border-warmth-900 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Award className="h-4 w-4" />
            Medzinarodne certifikacie
          </div>

          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Certifikovana expertiza
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nasi specialisti su certifikovani v najvyznamnejsich medzinarodnych standardoch pre zelene budovy a udrzatelnu architekturu.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={cert.id}
              className="group relative overflow-hidden border-0 bg-white dark:bg-gray-950 shadow-premium hover:shadow-premium-hover transition-all duration-150"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-600 via-warmth-500 to-terra-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="p-8">
                {/* Logo Placeholder */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-forest-50 to-warmth-50 dark:from-forest-950 dark:to-warmth-950 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-150">
                    {/* SVG Logo would go here */}
                    <div className="h-12 w-12 bg-forest-600 dark:bg-forest-400 rounded-md opacity-40" />
                  </div>

                  {/* Level Badge */}
                  <div className="inline-flex items-center gap-1.5 bg-warmth-50 dark:bg-warmth-950/30 text-warmth-700 dark:text-warmth-300 border border-warmth-100 dark:border-warmth-900 rounded-full px-3 py-1 text-xs font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    {cert.level}
                  </div>
                </div>

                {/* Short Name */}
                <div className="text-sm font-medium text-forest-600 dark:text-forest-400 mb-2">
                  {cert.shortName}
                </div>

                {/* Full Name */}
                <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors duration-150">
                  {cert.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Issuer */}
                <div className="pt-4 border-t border-earth-100 dark:border-earth-900">
                  <div className="text-xs text-muted-foreground">
                    Vydane: <span className="font-medium text-foreground">{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-forest-50/50 via-transparent to-warmth-50/50 dark:from-forest-950/30 dark:to-warmth-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Card>
          ))}
        </div>

        {/* Bottom Info Row */}
        <div className="grid gap-6 sm:grid-cols-3 bg-forest-50 dark:bg-forest-950/30 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground">Medzinarodnych certifikacii</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">
              100%
            </div>
            <div className="text-sm text-muted-foreground">Tim certifikovanych expertov</div>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-forest-600 dark:text-forest-400 font-heading mb-2">
              LEED
            </div>
            <div className="text-sm text-muted-foreground">Prispevok ku green building</div>
          </div>
        </div>

        {/* Certification Logos Strip */}
        <div className="mt-16 text-center">
          <div className="text-sm text-muted-foreground mb-8">
            Cleni a partneri medzinarodnych organizacii:
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="h-12 w-24 bg-earth-200 dark:bg-earth-800 rounded flex items-center justify-center"
                title={cert.name}
              >
                <span className="text-xs font-medium text-earth-600 dark:text-earth-400">
                  {cert.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
