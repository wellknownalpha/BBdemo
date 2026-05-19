import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { ShareButtons } from "@/components/shared/share-buttons"
import { blogPosts, siteConfig } from "@/lib/constants"
import { formatDate } from "@/lib/utils"

interface BlogPostPageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

function getRelatedPosts(currentSlug: string, currentCategory: string) {
  return blogPosts
    .filter((post) => post.slug !== currentSlug && post.category === currentCategory)
    .slice(0, 2)
}

const contentTemplate = `
<h2>Introduction</h2>
<p>In today's rapidly evolving digital landscape, staying ahead of the curve requires more than just keeping up with trends—it demands a fundamental understanding of the technologies and strategies that drive real business value.</p>
<p>This article explores the key concepts, best practices, and actionable insights that will help you navigate the complexities of modern digital transformation.</p>
<h2>Key Insights</h2>
<p>Our research and hands-on experience have revealed several critical factors that separate successful digital initiatives from those that fall short. Understanding these principles is essential for any organization looking to thrive in the digital age.</p>
<h3>Understanding the Landscape</h3>
<p>The first step in any successful digital strategy is gaining a comprehensive understanding of the current landscape. This involves analyzing market trends, competitor positioning, and emerging technologies that could impact your industry.</p>
<h3>Strategic Implementation</h3>
<p>Once you have a clear picture of the landscape, the next step is developing and executing a strategic implementation plan. This requires careful consideration of resource allocation, timeline management, and risk mitigation.</p>
<h2>Best Practices</h2>
<p>Through years of working with leading organizations across industries, we've identified several best practices that consistently deliver results.</p>
<ul>
<li>Start with a clear vision and measurable objectives</li>
<li>Build cross-functional teams with diverse expertise</li>
<li>Iterate quickly and learn from failures</li>
<li>Invest in scalable infrastructure from day one</li>
<li>Measure what matters and adjust course as needed</li>
</ul>
<h2>Conclusion</h2>
<p>The digital landscape will continue to evolve at an accelerating pace. Organizations that embrace change, invest in the right technologies, and partner with experienced experts will be best positioned for long-term success.</p>
<p>Ready to take your digital strategy to the next level? Our team of experts is here to help you navigate the journey.</p>
`

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(params.slug, post.category)

  const shareUrl = `${siteConfig.url}/blog/${post.slug}`
  const shareText = encodeURIComponent(post.title)

  return (
    <main className="min-h-screen bg-neutral-950">
      <Container>
        <div className="pt-32 pb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-neutral-200 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>

        <article>
          <header className="max-w-3xl mx-auto mb-12 space-y-6">
            <Badge variant="primary">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-100 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-500">
              <span className="text-neutral-300 font-medium">{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {post.image && (
            <div className="relative aspect-[2/1] max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="max-w-3xl mx-auto">
            <div
              className="prose prose-invert prose-lg max-w-none prose-headings:text-neutral-100 prose-p:text-neutral-300 prose-a:text-primary-400 prose-strong:text-neutral-200 prose-code:text-secondary-400 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-800 prose-blockquote:border-primary-500 prose-blockquote:text-neutral-300"
              dangerouslySetInnerHTML={{ __html: contentTemplate }}
            />

            <div className="mt-16 pt-10 border-t border-neutral-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-neutral-300 font-medium">Share this article</p>
                <ShareButtons shareUrl={shareUrl} shareText={post.title} />
              </div>
            </div>
          </div>
        </article>

        {relatedPosts.length > 0 && (
          <section className="mt-24 mb-32">
            <h2 className="text-2xl font-bold text-neutral-100 mb-10">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block"
                >
                  <article className="bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-300 h-full">
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={rp.image || "/placeholder.svg"}
                        alt={rp.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6 space-y-3">
                      <Badge variant="primary">{rp.category}</Badge>
                      <h3 className="text-lg font-bold text-neutral-100 group-hover:text-primary-400 transition-colors">
                        {rp.title}
                      </h3>
                      <p className="text-neutral-400 text-sm line-clamp-2">{rp.excerpt}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </Container>
    </main>
  )
}
