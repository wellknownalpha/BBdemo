"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { blogPosts } from "@/lib/constants"
import { formatDate } from "@/lib/utils"

export default function BlogPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-20">
        <Container>
          <AnimatedSection>
            <SectionHeading
              label="Insights"
              title="Our Blog"
              description="Thoughts on design, development, and the future of digital experiences."
              align="center"
            />
          </AnimatedSection>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.slug} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="primary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-100 group-hover:text-primary-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-sm text-neutral-500">{post.author}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 group-hover:gap-2 transition-all">
                          Read More
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container size="sm">
          <AnimatedSection>
            <Card className="bg-neutral-900 border-primary-500/20 overflow-hidden relative">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
              <CardContent className="p-10 md:p-14 text-center relative">
                <div className="mx-auto w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-neutral-100 mb-3">
                  Stay in the Loop
                </h3>
                <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                  Get the latest insights delivered straight to your inbox.
                </p>
                {subscribed ? (
                  <p className="text-secondary-400 font-semibold text-lg">
                    You&apos;re subscribed!
                  </p>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-5 py-3 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-primary-500 transition-colors"
                    />
                    <Button type="submit" variant="primary" size="lg">
                      Subscribe
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
