"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

import { Container } from "@/components/ui/container"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { stats } from "@/lib/constants"

interface StatItem {
  value: string
  label: string
  suffix?: string
}

function AnimatedCounter({ value, suffix = "+" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10) || 0

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = numericValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= numericValue) {
        setCount(numericValue)
        clearInterval(timer)
      } else {
        setCount(Math.round(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, numericValue])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-neutral-900/50" />

      <Container>
        <AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(stats as StatItem[]).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix || "+"} />
                </p>
                <p className="mt-2 text-sm text-neutral-400 sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
