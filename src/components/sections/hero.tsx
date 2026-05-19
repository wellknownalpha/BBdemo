"use client"

import { ArrowDown, ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { DotPattern } from "@/components/ui/dot-pattern"
import { cn } from "@/lib/utils"
import { fadeUp, transition } from "@/lib/animations"

const floatingElements = [
  { icon: Sparkles, x: "15%", y: "20%", delay: 0, size: 24, opacity: 0.3 },
  { icon: Sparkles, x: "80%", y: "15%", delay: 1.5, size: 18, opacity: 0.2 },
  { icon: Sparkles, x: "10%", y: "70%", delay: 0.8, size: 20, opacity: 0.25 },
  { icon: Sparkles, x: "75%", y: "75%", delay: 2.2, size: 16, opacity: 0.2 },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <DotPattern className="absolute inset-0 z-0" />

      {floatingElements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-primary-500/20"
          style={{ left: el.x, top: el.y }}
          animate={{ y: [0, -20, 0], opacity: [el.opacity, el.opacity * 1.5, el.opacity] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: el.delay }}
        >
          <el.icon size={el.size} />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-transparent to-neutral-950 z-[1]" />

      <Container className="relative z-10 pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={transition}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-300"
          >
            <Sparkles size={14} />
            <span>Your Digital Growth Partner</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent">
              We Build Digital Products That Scale
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 sm:text-xl"
          >
            Beyond Binary is your end-to-end technology partner. We design, build, and grow digital
            products that drive real business impact.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ ...transition, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button variant="primary" size="xl">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-2 text-neutral-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={18} />
        </div>
      </motion.div>
    </section>
  )
}
