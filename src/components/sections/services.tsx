"use client"

import {
  Sparkles,
  Code2,
  TrendingUp,
  Workflow,
  Cloud,
  BarChart3,
  Brain,
  HeadphonesIcon,
  type LucideIcon,
} from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { servicesData } from "@/lib/constants"

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Code2,
  TrendingUp,
  Workflow,
  Cloud,
  BarChart3,
  Brain,
  HeadphonesIcon,
}

interface ServiceItem {
  icon: string
  title: string
  description: string
  features: string[]
}

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="What We Do"
            title="Services"
            description="From strategy to execution, we deliver end-to-end digital solutions that transform businesses."
            align="center"
          />
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {(servicesData as ServiceItem[]).map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles
            const isHovered = hoveredIndex === i

            return (
              <AnimatedItem key={i} custom={i}>
                <Card
                  variant="glass"
                  className={cn(
                    "group relative h-full cursor-default transition-all duration-500",
                    isHovered && "translate-y-[-8px] shadow-xl shadow-primary-500/10",
                  )}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={cn(
                      "absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500",
                      isHovered && "opacity-100",
                    )}
                    style={{
                      background:
                        "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,56,255,0.08), transparent 40%)",
                    }}
                  />

                  <div className="relative z-10 flex flex-col gap-4 p-6">
                    <div
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-lg transition-all duration-500",
                        isHovered
                          ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                          : "bg-primary-500/10 text-primary-400",
                      )}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-400">
                      {service.description}
                    </p>

                    {service.features && service.features.length > 0 && (
                      <ul className="mt-auto space-y-2 pt-4">
                        {service.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-2 text-sm text-neutral-500">
                            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Card>
              </AnimatedItem>
            )
          })}
        </div>

        <AnimatedItem custom={8} className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            View All Services
          </Button>
        </AnimatedItem>
      </Container>
    </section>
  )
}
