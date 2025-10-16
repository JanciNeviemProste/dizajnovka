import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { teamMembers } from "@/lib/content-team"
import { Linkedin, Mail, Award } from "lucide-react"
import Link from "next/link"

export function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-earth-50/30 to-white dark:from-earth-950/10 dark:to-background">
      <div className="container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Nas expertny tim
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Certifikovani specialisti s medzinarodnou skusenostou v oblasti vertikalneho ozelenovania, udrzatelnej architektury a biofilneho dizajnu.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className="group overflow-hidden border-0 shadow-premium hover:shadow-premium-hover transition-all duration-150 bg-white dark:bg-gray-950"
              style={{
                animation: `slide-up 0.6s ease-out`,
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              {/* Photo Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-forest-100 to-warmth-100 dark:from-forest-950 dark:to-warmth-950">
                {/* Placeholder Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-forest-500/60 to-terra-500/60" />

                {/* Number Watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/10 text-8xl font-bold font-heading">
                    {member.id.toString().padStart(2, "0")}
                  </div>
                </div>

                {/* Hover Overlay with Social Links */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/95 via-forest-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-6">
                  <div className="flex gap-3 w-full">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60"
                      asChild
                    >
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/60"
                      asChild
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name & Role */}
                <div className="mb-4">
                  <h3 className="font-heading text-xl font-bold mb-1 group-hover:text-forest-700 dark:group-hover:text-forest-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-warmth-600 dark:text-warmth-400">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-4">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-forest-50 dark:bg-forest-950/50 text-forest-700 dark:text-forest-300 border border-forest-100 dark:border-forest-900"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.expertise.length > 2 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-earth-100 dark:bg-earth-800 text-muted-foreground">
                        +{member.expertise.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Achievements */}
                <div className="pt-4 border-t border-earth-100 dark:border-earth-900">
                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-warmth-500 flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2">
                      {member.achievements[0]}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-forest-50 dark:bg-forest-950/30 rounded-2xl p-12">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Chcete sa stat sucastou naseho timu?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Hladame talentovanych profesionalov v oblasti krajinnej architektury, botaniky a envirotechnologii. Pozrite si aktualne karierove prilezitosti.
          </p>
          <Button
            size="lg"
            className="bg-forest-600 hover:bg-forest-700 text-white shadow-premium hover:shadow-premium-hover transition-all duration-150"
            asChild
          >
            <Link href="/kariera">
              Karierove prilezitosti
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
