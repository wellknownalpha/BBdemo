"use client"

import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { AnimatedSection } from "@/components/ui/animated-section"
import { cn } from "@/lib/utils"
import { fadeUp, transition } from "@/lib/animations"

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-500/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,56,255,0.15),transparent_50%)]" />

      <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-primary-500/10 blur-3xl" />

      <Container>
        <AnimatedSection>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={transition}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-primary-300 to-primary-500 bg-clip-text text-transparent">
                Extraordinary
              </span>
              ?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ ...transition, delay: 0.1 }}
              viewport={{ once: true }}
              className="mx-auto mt-6 max-w-xl text-lg text-neutral-400"
            >
              Let&apos;s turn your vision into reality. Partner with us and build digital products
              that drive growth.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ ...transition, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button variant="primary" size="xl">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="xl">
                <Phone className="mr-2 h-5 w-5" />
                Book a Call
              </Button>
            </motion.div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  )
}
