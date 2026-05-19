"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Container } from "@/components/ui/container"
import CTA from "@/components/sections/cta"
import { portfolioItems } from "@/lib/constants"

const allCategories = ["All", ...Array.from(new Set(portfolioItems.map((item) => item.category)))]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = useMemo(
    () =>
      activeCategory === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  )

  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="Our Work"
              title="Our Portfolio"
              description="Explore our latest projects and see how we've helped brands transform their digital presence."
              align="center"
            />
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <AnimatedSection>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "text-neutral-950"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {activeCategory === category && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary-500 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-neutral-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={item.link}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-neutral-950 font-semibold rounded-full translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        View Project
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="primary" className="mb-3">
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-neutral-100 mb-2">{item.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-neutral-500 bg-neutral-800/50 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </Container>
      </section>

      <CTA />
    </main>
  )
}
