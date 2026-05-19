"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/ui/container"
import { AnimatedSection } from "@/components/ui/animated-section"
import CTA from "@/components/sections/cta"

const lastUpdated = "January 15, 2026"

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing or using the Beyond Binary website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not access or use our services. We reserve the right to update these terms at any time, and continued use after changes constitutes acceptance of the modified terms.",
  },
  {
    title: "Services",
    content:
      "Beyond Binary provides digital transformation, software development, AI/ML solutions, and related consulting services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time. We will make reasonable efforts to notify clients of any significant changes that may affect ongoing projects.",
  },
  {
    title: "Intellectual Property",
    content:
      "All content, designs, code, and materials provided as part of our services remain the intellectual property of Beyond Binary unless otherwise agreed in writing. Upon full payment for services, clients receive a license to use the deliverables for their intended purpose. You may not reproduce, distribute, or create derivative works without our express written consent.",
  },
  {
    title: "User Obligations",
    content:
      "You agree to provide accurate and complete information when using our services or contacting us. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree not to use our services for any unlawful purpose or in violation of any applicable laws or regulations.",
  },
  {
    title: "Limitation of Liability",
    content:
      "Beyond Binary shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services. Our total liability for any claims under these terms shall not exceed the amount paid by you for the specific service giving rise to the claim. This limitation applies to the fullest extent permitted by applicable law.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties. Upon termination, your right to use our services will immediately cease. Provisions regarding intellectual property, limitation of liability, and governing law shall survive termination.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions. Any disputes arising under these terms shall be resolved in the courts of San Francisco County, California. The parties agree to submit to the personal jurisdiction of such courts.",
  },
  {
    title: "Contact Information",
    content:
      "If you have any questions about these Terms of Service, please contact us at legal@beyondbinary.com or at our mailing address. We will make every effort to address your concerns and provide clarification on any aspect of these terms.",
  },
]

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <Container size="lg">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <AnimatedSection index={0}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
            </AnimatedSection>
            <AnimatedSection index={1}>
              <p className="mt-4 text-neutral-500">Last updated: {lastUpdated}</p>
            </AnimatedSection>
            <AnimatedSection index={2}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                Please read these terms carefully before using our website or services.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container size="md">
          <AnimatedSection index={0}>
            <div className="prose prose-invert prose-neutral max-w-none">
              {sections.map((section, index) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-bold text-white mt-12 mb-4 first:mt-0">
                    {index + 1}. {section.title}
                  </h2>
                  <p className="text-neutral-400 leading-relaxed">{section.content}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection index={1}>
            <div className="mt-16 border-t border-neutral-800 pt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary-500"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to home
              </Link>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <CTA />
    </main>
  )
}
