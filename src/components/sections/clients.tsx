"use client"

import { motion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/ui/section-heading"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"

const clients = [
  "TechFlow",
  "Meridian",
  "PulseGrid",
  "Apex Digital",
  "Nova Systems",
  "Vertex",
  "Stratus",
  "Orion Labs",
]

export default function Clients() {
  return (
    <section className="relative py-24 lg:py-32">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Trusted By"
            description="Companies that rely on us to deliver exceptional digital experiences."
            align="center"
          />
        </AnimatedSection>

        <div className="relative mt-16 overflow-hidden">
          <div className="flex animate-scroll gap-16">
            {[...clients, ...clients].map((name, i) => (
              <div
                key={i}
                className="flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 transition-colors duration-300 hover:border-neutral-700 hover:bg-neutral-800/50"
              >
                <span className="text-lg font-semibold tracking-tight text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  )
}
