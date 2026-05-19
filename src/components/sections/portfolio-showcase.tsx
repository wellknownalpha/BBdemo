"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { portfolioItems } from "@/lib/constants"

interface PortfolioItem {
  image: string
  category: string
  title: string
  description: string
  tags: string[]
  link: string
}

export default function PortfolioShowcase() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Our Work"
            title="Portfolio"
            description="Explore our latest projects and see how we've helped businesses achieve their digital goals."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {(portfolioItems as PortfolioItem[]).slice(0, 6).map((item, i) => (
            <AnimatedItem key={i} index={i}>
              <div className="group relative cursor-pointer overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 transition-all duration-500 hover:border-neutral-700 hover:shadow-xl hover:shadow-primary-500/5">
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="absolute inset-0 bg-neutral-900/60" />

                  <Badge variant="primary" className="absolute left-4 top-4">
                    {item.category}
                  </Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-primary-300">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary-400 opacity-0 transition-opacity group-hover:opacity-100">
                    <span>View Project</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem index={6} className="mt-12 text-center">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </AnimatedItem>
      </Container>
    </section>
  )
}
