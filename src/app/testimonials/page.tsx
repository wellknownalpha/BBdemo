"use client"

import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import Stats from "@/components/sections/stats"
import CTA from "@/components/sections/cta"
import { testimonialsData } from "@/lib/constants"

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "fill-secondary-500 text-secondary-500" : "fill-neutral-800 text-neutral-800"
          }`}
        />
      ))}
    </div>
  )
}

export default function TestimonialsPage() {
  const [featured, ...rest] = testimonialsData

  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 pointer-events-none" />
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="Testimonials"
              title="What Our Clients Say"
              description="Hear from the brands and businesses we've had the privilege of working with."
              align="center"
            />
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <AnimatedSection className="mb-20">
            <Card className="relative bg-neutral-900 border-primary-500/20 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
              <CardContent className="p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                  <div className="lg:col-span-3 space-y-6 relative">
                    <Quote className="w-12 h-12 text-primary-500/30" />
                    <blockquote className="text-xl md:text-2xl text-neutral-200 leading-relaxed font-light italic">
                      &ldquo;{featured.content}&rdquo;
                    </blockquote>
                    <div className="space-y-2">
                      <StarRating rating={featured.rating} />
                      <div>
                        <p className="text-neutral-100 font-semibold text-lg">{featured.name}</p>
                        <p className="text-neutral-500 text-sm">{featured.role}</p>
                      </div>
                    </div>
                  </div>
                  {featured.avatar && (
                    <div className="lg:col-span-2 flex justify-center lg:justify-end">
                      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-2 border-neutral-800">
                        <img
                          src={featured.avatar || "/placeholder.svg"}
                          alt={featured.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} delay={index * 0.1}>
                <Card className="relative h-full bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors group">
                  <CardContent className="p-8 space-y-5">
                    <Quote className="w-8 h-8 text-neutral-800 group-hover:text-primary-500/40 transition-colors" />
                    <StarRating rating={testimonial.rating} />
                    <blockquote className="text-neutral-300 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-4 pt-2">
                      {testimonial.avatar && (
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-800 shrink-0">
                          <img
                            src={testimonial.avatar || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-neutral-100 font-semibold">{testimonial.name}</p>
                        <p className="text-neutral-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <Stats />
      <CTA />
    </main>
  )
}
