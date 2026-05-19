"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { servicesData } from "@/lib/constants"
import { Sparkles, Code2, TrendingUp, Workflow, Cloud, BarChart3, ArrowUpRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Code2, TrendingUp, Workflow, Cloud, BarChart3,
}

export default function Services() {
  const items = servicesData.slice(0, 6)

  return (
    <section id="services" className="section-padding">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-medium text-[#FAFD00] tracking-wider uppercase">Our service</p>
          <h2 className="mt-3 text-display-sm sm:text-display-md font-bold text-white">
            What We Do
          </h2>
        </motion.div>

        <div className="divide-y divide-white/10">
          {items.map((service, i) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group grid gap-6 py-10 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr_auto] sm:gap-10"
              >
                <div className="flex items-start gap-4 sm:flex-col sm:items-center">
                  <span className="hidden text-5xl font-bold text-white/10 sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white/70 sm:hidden">
                    <Icon size={22} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70 group-hover:bg-[#FAFD00]/20 group-hover:text-[#FAFD00] transition-colors sm:flex">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-xl font-semibold text-white sm:text-2xl">{service.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-white/60 max-w-xl">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-sm text-white/50">
                    {service.features.map((f) => (
                      <span key={f} className="flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-[#FAFD00]" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden items-start justify-end sm:flex">
                  <span className="text-sm text-white/30 group-hover:text-[#FAFD00] transition-colors">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
