"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { processSteps } from "@/lib/constants"

interface ProcessStep {
  step: string
  title: string
  description: string
}

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="A proven methodology that takes your project from concept to launch and beyond."
            align="center"
          />
        </AnimatedSection>

        <div className="relative mt-16">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent lg:block" />

          <div className="grid gap-12 lg:grid-cols-2 xl:grid-cols-3">
            {(processSteps as ProcessStep[]).map((step, i) => (
              <AnimatedItem key={i} index={i}>
                <div className="relative flex gap-6 lg:flex-col lg:gap-4">
                  <div
                    className={cn(
                      "relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border text-lg font-bold transition-colors duration-300",
                      "border-primary-500/30 bg-primary-500/10 text-primary-400",
                      "lg:h-14 lg:w-14 lg:text-xl",
                    )}
                  >
                    {step.step}
                    <span className="absolute -inset-1 animate-ping rounded-full bg-primary-500/10 opacity-75" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
