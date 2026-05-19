"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/ui/container"
import { AnimatedSection } from "@/components/ui/animated-section"
import CTA from "@/components/sections/cta"

const lastUpdated = "January 15, 2026"

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly to us, such as when you fill out a contact form, subscribe to a newsletter, or communicate with us. This may include your name, email address, phone number, and any other information you choose to share. We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and usage patterns through cookies and similar technologies.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our services, improve our website, send administrative information, and comply with legal obligations. We may also use your information to send you marketing communications about our services, but only with your consent where required by applicable law. You can opt out of these communications at any time.",
  },
  {
    title: "Data Sharing and Disclosure",
    content:
      "We do not sell your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and business, provided they agree to keep your information confidential. We may also disclose your information if required by law, to protect our rights, or in connection with a business transaction such as a merger or acquisition.",
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from. You can control cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain until deleted).",
  },
  {
    title: "Your Rights",
    content:
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to restrict or object to certain processing activities. To exercise these rights, please contact us using the information below. We will respond to your request within the timeframes required by applicable law. We may need to verify your identity before processing your request.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@beyondbinary.com or write to us at our mailing address. We are committed to addressing your concerns and will work to resolve any issues promptly.",
  },
]

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent" />
        <Container size="lg">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <AnimatedSection index={0}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
            </AnimatedSection>
            <AnimatedSection index={1}>
              <p className="mt-4 text-neutral-500">Last updated: {lastUpdated}</p>
            </AnimatedSection>
            <AnimatedSection index={2}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                We take your privacy seriously. This policy describes how we collect, use, and
                protect your personal information.
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
