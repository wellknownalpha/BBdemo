"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Globe,
  DollarSign,
  BookOpen,
  Heart,
  Cpu,
  Palette,
  ChevronDown,
  ArrowUpRight,
  Target,
  Handshake,
  Lightbulb,
  Rocket,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import CTA from "@/components/sections/cta"
import { AnimatedSection } from "@/components/ui/animated-section"
import { careersData } from "@/lib/constants"

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world. We trust our team to do their best work, wherever they are.",
    icon: Globe,
  },
  {
    title: "Competitive Compensation",
    description: "Top-tier salary, equity packages, and performance bonuses that reward your impact.",
    icon: DollarSign,
  },
  {
    title: "Growth & Learning",
    description: "Annual learning budget, conference tickets, and dedicated time for professional development.",
    icon: BookOpen,
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage, wellness stipends, and mental health support for you and your family.",
    icon: Heart,
  },
  {
    title: "Latest Tools",
    description: "Access to cutting-edge technology, software, and equipment to keep you at the top of your game.",
    icon: Cpu,
  },
  {
    title: "Creative Freedom",
    description: "Own your projects from concept to launch. Your ideas matter here.",
    icon: Palette,
  },
]

const companyValues = [
  {
    title: "Innovation First",
    description: "We challenge conventions and push boundaries to create solutions that redefine what's possible.",
    icon: Lightbulb,
  },
  {
    title: "Collaborative Spirit",
    description: "Great ideas come from diverse perspectives. We build together, grow together, and win together.",
    icon: Handshake,
  },
  {
    title: "Purpose Driven",
    description: "Every line of code we write is aimed at making a meaningful impact on the world.",
    icon: Target,
  },
  {
    title: "Fearless Execution",
    description: "We move fast, take calculated risks, and learn from every outcome.",
    icon: Rocket,
  },
]

function PositionCard({
  position,
  index,
}: {
  position: (typeof careersData)[number]
  index: number
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <AnimatedSection key={position.title} index={index}>
      <Card
        className="border-neutral-800 bg-neutral-900/50 cursor-pointer transition-colors hover:border-neutral-700"
        onClick={() => setExpanded(!expanded)}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                <Badge variant={position.type === "Full-time" ? "primary" : "secondary"}>
                  {position.type}
                </Badge>
              </div>
              <p className="text-sm text-neutral-400">
                {position.department} &middot; {position.location}
              </p>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-neutral-500" />
            </motion.div>
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-neutral-300 leading-relaxed">{position.description}</p>
                <div className="mt-6">
                  <Button
                    variant="primary"
                    size="md"
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    Apply Now
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </AnimatedSection>
  )
}

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden border-b border-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container size="lg">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <AnimatedSection index={0}>
              <Badge variant="primary" className="mb-6">
                Careers
              </Badge>
            </AnimatedSection>
            <AnimatedSection index={1}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Join Our Team
              </h1>
            </AnimatedSection>
            <AnimatedSection index={2}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                At Beyond Binary, we believe in the power of people. We're building a team of
                passionate innovators who want to shape the future of technology. If you're driven by
                curiosity and committed to excellence, you'll find a home here.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container size="lg">
          <AnimatedSection index={0}>
            <SectionHeading
              label="Benefits"
              title="Why Join Us?"
              description="We believe in taking care of our team. Here's what you can expect when you join Beyond Binary."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} index={index + 1}>
                <Card className="border-neutral-800 bg-neutral-900/50 h-full transition-colors hover:border-neutral-700">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                      <benefit.icon className="h-6 w-6 text-primary-500" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-800 py-20 lg:py-28">
        <Container size="lg">
          <AnimatedSection index={0}>
            <SectionHeading
              label="Open Positions"
              title="Current Openings"
              description="Explore our open roles and find the position that matches your skills and ambitions."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-16 space-y-4">
            {careersData.map((position, index) => (
              <PositionCard key={position.title} position={position} index={index + 1} />
            ))}
            {careersData.length === 0 && (
              <p className="text-center text-neutral-500 py-12">
                No open positions at the moment. Check back soon!
              </p>
            )}
          </div>
        </Container>
      </section>

      <section className="border-t border-neutral-800 py-20 lg:py-28">
        <Container size="lg">
          <AnimatedSection index={0}>
            <SectionHeading
              label="Our Values"
              title="What We Stand For"
              description="These core principles guide every decision we make and every product we build."
              align="center"
            />
          </AnimatedSection>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {companyValues.map((value, index) => (
              <AnimatedSection key={value.title} index={index + 1}>
                <div className="group text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 transition-colors group-hover:border-primary-500/50 group-hover:bg-primary-500/5">
                    <value.icon className="h-7 w-7 text-primary-500" />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  )
}
