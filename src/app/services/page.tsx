"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
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

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Process from "@/components/sections/process"
import CTA from "@/components/sections/cta"
import { servicesData } from "@/lib/constants"
import type { Service } from "@/types"

const faqs = [
  {
    question: "What is the typical timeline for a project?",
    answer:
      "Timelines vary depending on scope and complexity. A standard website or web app typically takes 8-16 weeks from discovery to launch. Larger platform builds or AI integrations may span 3-6 months. We provide a detailed timeline during the proposal phase.",
  },
  {
    question: "Do you work with startups or only enterprise clients?",
    answer:
      "We work with clients of all sizes, from early-stage startups to Fortune 500 companies. We tailor our engagement model to fit your budget, timeline, and goals. Our startup programs offer streamlined scoping and faster delivery cycles.",
  },
  {
    question: "What does the discovery phase involve?",
    answer:
      "Discovery is a deep-dive into your business, users, and goals. We conduct stakeholder interviews, competitive analysis, technical audits, and UX research. The outcome is a comprehensive strategy document that guides the entire project.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. We offer retainer-based support, managed hosting, performance monitoring, and continued optimization. Every project includes a post-launch warranty period, and we can design a custom support plan that scales with your needs.",
  },
  {
    question: "How do you handle intellectual property?",
    answer:
      "You own 100% of the intellectual property for everything we produce. We sign standard NDAs and IP assignment agreements. Our goal is to empower you with full ownership of your digital assets.",
  },
  {
    question: "What technologies does your team specialize in?",
    answer:
      "Our stack spans modern frontend frameworks (React, Next.js, Vue), backend systems (Node.js, Python, Go), cloud infrastructure (AWS, GCP, Azure), AI/ML (TensorFlow, PyTorch, OpenAI APIs), and headless CMS platforms. We select the best tools for each project's unique requirements.",
  },
]

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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] || Sparkles

  return (
    <AnimatedItem custom={index}>
      <Card
        variant="hover"
        className="group flex h-full flex-col overflow-hidden"
      >
        <CardHeader>
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/10 transition-colors duration-300 group-hover:bg-primary-500/20">
            <Icon className="h-7 w-7 text-primary-500" />
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
          <CardDescription className="text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <ul className="space-y-3">
            {service.features?.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" />
                <span className="text-sm text-neutral-400">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm" className="group/btn">
            Learn More
            <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </AnimatedItem>
  )
}

function FaqItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string }
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <AnimatedItem custom={index}>
      <div
        className={`rounded-xl border transition-colors duration-300 ${
          isOpen
            ? "border-primary-500/30 bg-primary-500/5"
            : "border-neutral-800 bg-neutral-900/50 hover:border-neutral-700"
        }`}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between px-6 py-5 text-left"
        >
          <span className="pr-4 text-base font-medium">{faq.question}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 text-primary-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="border-t border-neutral-800 px-6 pb-5 pt-4 text-sm leading-relaxed text-neutral-400">
                {faq.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedItem>
  )
}

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3">
          <Sparkles className="h-64 w-64 text-primary-500/5" />
        </div>
        <Container size="lg">
          <AnimatedSection className="relative text-center">
            <Badge variant="outline" className="mb-6">
              What We Do
            </Badge>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Our{" "}
              <span className="bg-gradient-to-r from-primary-500 to-primary-300 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
              From strategy to execution, we deliver end-to-end digital
              solutions that combine creative vision with technical excellence.
              Every service is designed to drive measurable impact.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      <AnimatedSection className="py-20 lg:py-28">
        <Container size="xl">
          <SectionHeading
            title="Everything you need to succeed online"
            description="We take a holistic approach to digital, ensuring every layer of your product is cohesive, performant, and beautiful."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {servicesData.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <Process />

      <AnimatedSection className="py-20 lg:py-28 bg-neutral-900/50">
        <Container size="lg">
          <SectionHeading
            label="FAQ"
            title="Frequently asked questions"
            description="Everything you need to know about working with us. Still have questions? Reach out."
          />
          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openFaqIndex === i}
                onToggle={() =>
                  setOpenFaqIndex(openFaqIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </Container>
      </AnimatedSection>

      <AnimatedSection className="py-20 lg:py-28">
        <Container size="lg">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-transparent p-8 text-center lg:p-12">
            <div className="relative z-10 mx-auto max-w-xl">
              <Badge variant="outline" className="mb-4">
                Get Started
              </Badge>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
                Not sure which service fits your needs?
              </h2>
              <p className="mt-4 text-neutral-400">
                Book a free consultation and we will help you map out the ideal
                strategy for your project.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Button variant="primary" size="lg">
                  Book a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" size="lg">
                  View Case Studies
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
