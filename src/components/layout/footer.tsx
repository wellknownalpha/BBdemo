"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Github, Dribbble, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navigation, servicesData, siteConfig } from "@/lib/constants"

const socialLinks = [
  { label: "Twitter", href: siteConfig.social.twitter, icon: Twitter },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: Linkedin },
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
  { label: "Dribbble", href: siteConfig.social.dribbble, icon: Dribbble },
] as const

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Press Kit", href: "/press" },
] as const

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email ?? "hello@beyondbinary.co",
    href: `mailto:${siteConfig.email ?? "hello@beyondbinary.co"}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone ?? "+1 (555) 000-0000",
    href: `tel:${siteConfig.phone ?? "+15550000000"}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address ?? "San Francisco, CA",
    href: "#",
  },
] as const

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
] as const

function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full max-w-sm gap-2"
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20"
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="shrink-0 rounded-xl"
      >
        Subscribe
      </Button>
    </form>
  )
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
        {title}
      </h3>
      {children}
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-neutral-950">
      {/* Subtle top highlight */}

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:px-8">
        {/* Top section: columns + newsletter */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company info */}
          <div className="space-y-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white">
                B
              </span>
              Beyond Binary
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              We craft digital experiences that push beyond the ordinary. Partner with us to build
              the future of your brand.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-colors hover:border-primary-500/30 hover:text-primary-500"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={16} />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <FooterColumn title="Services">
              <ul className="space-y-3">
                {servicesData.slice(0, 6).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services#${service.id}`}
                      className="group inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {service.title}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-200 group-hover:opacity-60"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <FooterColumn title="Company">
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm text-white/40 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition-all duration-200 group-hover:opacity-60"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <FooterColumn title="Contact">
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.label}>
                      {item.href !== "#" ? (
                        <Link
                          href={item.href}
                          className="group flex items-start gap-3"
                        >
                          <Icon size={16} className="mt-0.5 shrink-0 text-white/30" />
                          <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                            {item.value}
                          </span>
                        </Link>
                      ) : (
                        <span className="flex items-start gap-3">
                          <Icon size={16} className="mt-0.5 shrink-0 text-white/30" />
                          <span className="text-sm text-white/40">{item.value}</span>
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </FooterColumn>

            {/* Newsletter */}
            <div className="mt-8 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-white/40">
                Newsletter
              </h3>
              <p className="text-sm text-white/30">
                Get the latest insights delivered to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Beyond Binary. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
