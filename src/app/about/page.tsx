"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import {
  Award,
  Target,
  Lightbulb,
  HeartHandshake,
  ArrowRight,
  Quote,
  ChevronRight,
} from "lucide-react"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Stats from "@/components/sections/stats"
import Process from "@/components/sections/process"
import CTA from "@/components/sections/cta"
import { teamMembers } from "@/lib/constants"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We push boundaries with emerging technologies to deliver solutions that redefine what's possible.",
  },
  {
    icon: Target,
    title: "Precision Execution",
    description:
      "Every pixel, every line of code, every interaction is crafted with meticulous attention to detail.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership Mindset",
    description:
      "We embed ourselves in your vision, becoming true partners invested in your success.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description:
      "Mediocrity is not an option. We hold ourselves to the highest standards in everything we do.",
  },
]

const milestones = [
  { year: "2026", event: "Founded with a vision to bridge AI and design" },
  { year: "2026", event: "First major enterprise client onboarded" },
  { year: "2026", event: "Expanded to 30+ team members globally" },
  { year: "2026", event: "Launched proprietary AI analytics platform" },
  { year: "2027", event: "Opened offices in London & Singapore" },
  { year: "2028", event: "Named Top 10 Digital Agency by DesignRush" },
  { year: "2029", event: "Surpassed 200 successful projects delivered" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
}

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container size="lg">
          <AnimatedSection className="relative text-center">
            <Badge variant="outline" className="mb-6">
              About Us
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="text-white">
                Beyond Binary
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              We are a team of dreamers, engineers, and strategists on a mission
              to transform how businesses leverage technology. Part agency, part
              innovation lab — entirely committed to your success.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <AnimatedSection className="py-20 lg:py-28">
        <Container size="lg">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Born from a belief that
                <span className="block text-primary-500">
                  technology should feel human
                </span>
              </h2>
              <div className="mt-6 space-y-4 text-neutral-400">
                <p>
                  Beyond Binary was founded in 2018 by a group of designers and
                  engineers frustrated with the gap between creative vision and
                  technical execution. We saw too many beautiful designs fail in
                  development and too many powerful technologies go unused
                  because they felt inaccessible.
                </p>
                <p>
                  Our name reflects our philosophy: we reject false
                  dichotomies. Great digital experiences shouldn&apos;t force a
                  choice between form and function, art and science, or
                  automation and humanity. We exist at the intersection —
                  beyond binary thinking.
                </p>
                <p>
                  Today, we are a distributed team of 50+ specialists across
                  design, engineering, AI, and strategy, united by a shared
                  obsession with craft and a relentless drive to push
                  boundaries.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-neutral-800 p-1">
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-neutral-950">
                  <Quote className="h-16 w-16 text-primary-500/30" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-neutral-900 p-6 shadow-xl">
                <p className="text-sm font-medium text-neutral-300">
                  Years of Excellence
                </p>
                <p className="font-display text-4xl font-bold text-primary-500">
                  7+
                </p>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-28 bg-neutral-900/50">
        <Container size="lg">
          <SectionHeading
            label="Our Values"
            title="What drives us every day"
            description="These core principles shape every decision, every relationship, and every line of code."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => {
              const Icon = value.icon
              return (
                <AnimatedItem key={value.title} custom={i}>
                  <Card variant="glass" className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10">
                        <Icon className="h-6 w-6 text-primary-500" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-neutral-400">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedItem>
              )
            })}
          </div>
        </Container>
      </AnimatedSection>

      <Stats />

      <AnimatedSection className="py-20 lg:py-28">
        <Container size="lg">
          <SectionHeading
            label="Timeline"
            title="Our journey so far"
            description="Key milestones that shaped Beyond Binary into what it is today."
          />
          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-primary-500/30 lg:left-1/2 lg:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((item, i) => (
                <AnimatedItem key={item.year} custom={i}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    custom={i}
                    viewport={{ once: true }}
                    className={`relative flex flex-col gap-2 pl-12 lg:w-1/2 lg:pl-0 ${
                      i % 2 === 0
                        ? "lg:pr-12 lg:text-right"
                        : "lg:ml-auto lg:pl-12"
                    }`}
                  >
                    <div
                      className={`absolute left-2 top-1 h-4 w-4 rounded-full border-2 border-primary-500 bg-neutral-950 lg:left-auto ${
                        i % 2 === 0 ? "lg:right-[-9px]" : "lg:left-[-9px]"
                      }`}
                    />
                    <span className="font-display text-2xl font-bold text-primary-500">
                      {item.year}
                    </span>
                    <p className="text-neutral-400">{item.event}</p>
                  </motion.div>
                </AnimatedItem>
              ))}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-28 bg-neutral-900/50">
        <Container size="lg">
          <SectionHeading
            label="Our Team"
            title="Meet the minds behind the work"
            description="A diverse collective of designers, engineers, and strategists united by craft."
          />
          <div className="mt-12">
            <div className="relative">
              {/* Hover preview image */}
              <div className="sticky top-32 hidden lg:block">
                {teamMembers.map((member) => (
                  <div
                    key={member.name}
                    className={`absolute right-0 top-0 w-72 transition-all duration-300 ${
                      hoveredMember === member.name
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8 pointer-events-none"
                    }`}
                  >
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl">
                      <img
                        src={member.avatar || "/placeholder.svg"}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Team list */}
              <div className="divide-y divide-neutral-800">
                {teamMembers.map((member, i) => (
                  <AnimatedItem key={member.name} custom={i}>
                    <div
                      className="group flex items-start gap-6 py-6 lg:pr-80"
                      onMouseEnter={() => setHoveredMember(member.name)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      {/* Mobile avatar */}
                      <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-neutral-700 lg:hidden">
                        <img
                          src={member.avatar || "/placeholder.svg"}
                          alt={member.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold text-white transition-colors duration-200 cursor-default lg:cursor-pointer lg:hover:text-[#FAFD00]">
                            {member.name}
                          </h3>
                          <ChevronRight className="h-4 w-4 text-neutral-600 transition-all duration-200 lg:group-hover:translate-x-1 lg:group-hover:text-[#FAFD00]" />
                        </div>
                        <p className="mt-0.5 text-sm text-primary-500">
                          {member.role}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-400 max-w-xl">
                          {member.bio}
                        </p>
                      </div>
                    </div>
                  </AnimatedItem>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <Process />

      <AnimatedSection className="py-20 lg:py-28">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-2xl bg-neutral-900 p-8 lg:p-12">
            <div className="relative z-10 max-w-lg">
              <Badge variant="outline" className="mb-4">
                Join Us
              </Badge>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Want to build the future with us?
              </h2>
              <p className="mt-4 text-neutral-400">
                We are always looking for talented individuals who share our
                passion for craft and innovation.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="lg">
                  Learn About Culture
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      <CTA />
    </>
  )
}
