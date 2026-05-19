"use client"

import Hero from "@/components/sections/hero"
import Stats from "@/components/sections/stats"
import Services from "@/components/sections/services"
import PortfolioShowcase from "@/components/sections/portfolio-showcase"
import Process from "@/components/sections/process"
import Testimonials from "@/components/sections/testimonials"
import Clients from "@/components/sections/clients"
import CTA from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <PortfolioShowcase />
      <Process />
      <Testimonials />
      <Clients />
      <CTA />
    </>
  )
}
