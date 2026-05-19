"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import CTA from "@/components/sections/cta"
import { AnimatedSection } from "@/components/ui/animated-section"
import { servicesData, siteConfig } from "@/lib/constants"
import type { ContactFormData } from "@/types"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

const contactInfo = [
  {
    label: "Email",
    value: siteConfig.email,
    icon: Mail,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    icon: Phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    label: "Address",
    value: siteConfig.address,
    icon: MapPin,
    href: null,
  },
]

const socialLinks = [
  { label: "GitHub", icon: Github, href: siteConfig.social.github },
  { label: "Twitter", icon: Twitter, href: siteConfig.social.twitter },
  { label: "LinkedIn", icon: Linkedin, href: siteConfig.social.linkedin },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      })
      reset()
    } catch {
      toast.error("Something went wrong", {
        description: "Please try again later or email us directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="relative overflow-hidden border-b border-neutral-800 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <Container size="lg">
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <AnimatedSection index={0}>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s Talk
              </h1>
            </AnimatedSection>
            <AnimatedSection index={1}>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                Have a project in mind? We&apos;d love to hear about it. Send us a message and
                we&apos;ll get back to you within 24 hours.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <AnimatedSection index={0}>
                <SectionHeading
                  label="Get in Touch"
                  title="Send Us a Message"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                />
              </AnimatedSection>

              <AnimatedSection index={1}>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      id="name"
                      label="Name"
                      placeholder="Your full name"
                      error={errors.name?.message}
                      {...register("name")}
                    />
                    <Input
                      id="email"
                      label="Email"
                      type="email"
                      placeholder="you@example.com"
                      error={errors.email?.message}
                      {...register("email")}
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      id="phone"
                      label="Phone (optional)"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      error={errors.phone?.message}
                      {...register("phone")}
                    />
                    <div className="space-y-2">
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-300">
                        Service
                      </label>
                      <select
                        id="service"
                        className="flex h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900 px-4 text-sm text-white placeholder-neutral-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        {...register("service")}
                      >
                        <option value="">Select a service</option>
                        {servicesData.map((service) => (
                          <option key={service.id} value={service.title}>
                            {service.title}
                          </option>
                        ))}
                      </select>
                      {errors.service?.message && (
                        <p className="text-sm text-red-400">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <Textarea
                    id="message"
                    label="Message"
                    placeholder="Tell us about your project..."
                    rows={5}
                    error={errors.message?.message}
                    {...register("message")}
                  />

                  <Button type="submit" variant="primary" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-2">
              <AnimatedSection index={2}>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <Card key={item.label} className="border-neutral-800 bg-neutral-900/50">
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10">
                          <item.icon className="h-5 w-5 text-primary-500" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="mt-0.5 block text-sm font-medium text-white transition-colors hover:text-primary-500"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm font-medium text-white">{item.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <Card className="border-neutral-800 bg-neutral-900/50">
                    <CardContent className="p-5">
                      <p className="text-sm text-neutral-500 mb-4">Follow Us</p>
                      <div className="flex gap-3">
                        {socialLinks.map(
                          (link) =>
                            link.href && (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-800 text-neutral-400 transition-colors hover:border-primary-500/50 hover:text-primary-500"
                                aria-label={link.label}
                              >
                                <link.icon className="h-5 w-5" />
                              </a>
                            ),
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-neutral-800 bg-neutral-900/50 overflow-hidden">
                    <div className="aspect-[4/3] w-full bg-neutral-900 flex items-center justify-center">
                      <div className="text-center p-6">
                        <MapPin className="mx-auto h-8 w-8 text-primary-500" />
                        <p className="mt-3 text-sm text-neutral-400">{siteConfig.address}</p>
                        <a
                          href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block text-sm text-primary-500 transition-colors hover:text-primary-400"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                  </Card>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </main>
  )
}
