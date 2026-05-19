"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { Card } from "@/components/ui/card"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { testimonialsData } from "@/lib/constants"

interface TestimonialItem {
  content: string
  name: string
  role: string
  avatar: string
  rating: number
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Testimonials"
            title="What Our Clients Say"
            description="Hear from the businesses and leaders we've partnered with."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(testimonialsData as TestimonialItem[]).map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <Card variant="glass" className="flex h-full flex-col">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={16}
                      className={cn(
                        si < item.rating ? "fill-secondary-500 text-secondary-500" : "text-neutral-700",
                      )}
                    />
                  ))}
                </div>

                <blockquote className="flex-1 text-sm leading-relaxed text-neutral-300">
                  &ldquo;{item.content}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-neutral-800 pt-4">
                  <div
                    className="h-10 w-10 flex-shrink-0 rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.avatar})` }}
                  />
                  <div>
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </Container>
    </section>
  )
}
