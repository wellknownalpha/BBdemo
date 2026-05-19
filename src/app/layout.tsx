import type { Metadata } from "next"
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google"
import { Toaster } from "sonner"

import "@/app/globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: {
    template: "%s | Beyond Binary",
    default: "Beyond Binary",
  },
  description:
    "Beyond Binary is a cutting-edge digital agency specializing in AI-driven solutions, web development, and brand transformation.",
  openGraph: {
    title: "Beyond Binary",
    description:
      "A cutting-edge digital agency specializing in AI-driven solutions, web development, and brand transformation.",
    url: "https://beyondbinary.io",
    siteName: "Beyond Binary",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beyond Binary",
    description:
      "A cutting-edge digital agency specializing in AI-driven solutions, web development, and brand transformation.",
  },
  metadataBase: new URL("https://beyondbinary.io"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased text-white`}
      >
        <div className="grid-pattern fixed inset-0 pointer-events-none z-0" />
        <div className="relative z-10">
          <Navbar />
          <main className="relative min-h-screen">{children}</main>
          <Footer />
        </div>
        <div className="noise-overlay pointer-events-none fixed inset-0 z-50" />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#0a0a0a",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
          }}
        />
      </body>
    </html>
  )
}
