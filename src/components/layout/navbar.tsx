"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { navigation } from "@/lib/constants"
import { useScroll } from "@/hooks/use-scroll"

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const mobileLinkVariants = {
  hidden: { x: -60, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.2 } },
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, height: 0 },
  visible: {
    opacity: 1,
    y: 0,
    height: "auto",
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -8,
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
}

const servicesDropdownItems = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "AI & Machine Learning", href: "/services/ai-ml" },
  { label: "Cloud Solutions", href: "/services/cloud" },
  { label: "UI/UX Design", href: "/services/design" },
  { label: "Consulting", href: "/services/consulting" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()
  const { y } = useScroll()

  const isScrolled = y > 50
  const isActive = (href: string) => pathname === href

  return (
    <>
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-neutral-950/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-2 text-lg font-bold tracking-tight text-white"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500 text-sm font-bold text-white">
              B
            </span>
            Beyond Binary
          </Link>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              if (item.label === "Services") {
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={cn(
                        "group flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                        isActive(item.href)
                          ? "text-white"
                          : "text-white/60 hover:text-white"
                      )}
                    >
                      Services
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200",
                          servicesOpen && "rotate-180"
                        )}
                      />
                      <span className="absolute -bottom-[2px] left-4 right-4 h-[2px] origin-left scale-x-0 rounded-full bg-primary-500 transition-transform duration-300 group-hover:scale-x-100" />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute left-0 top-full mt-1 w-56 overflow-hidden rounded-xl border border-white/5 bg-neutral-950/90 backdrop-blur-2xl"
                        >
                          <div className="p-2">
                            {servicesDropdownItems.map((s) => (
                              <Link
                                key={s.href}
                                href={s.href}
                                className={cn(
                                  "block rounded-lg px-4 py-2.5 text-sm transition-colors",
                                  isActive(s.href)
                                    ? "bg-primary-500/10 text-primary-500"
                                    : "text-white/60 hover:bg-white/5 hover:text-white"
                                )}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                )
              }
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-white"
                        : "text-white/60 hover:text-white"
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-[2px] left-4 right-4 h-[2px] origin-left rounded-full bg-primary-500 transition-transform duration-300",
                        isActive(item.href)
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <Button
              variant="primary"
              size="sm"
              className="rounded-xl"
              asChild
            >
              <Link href="/contact">Let&apos;s Talk</Link>
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="relative z-10 flex items-center justify-center rounded-lg p-2 text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col bg-neutral-950/95 backdrop-blur-2xl md:hidden"
          >
            {/* Close button */}
            <div className="flex justify-end px-6 pt-6">
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center rounded-lg p-2 text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile nav links */}
            <nav className="flex flex-1 flex-col justify-center px-8">
              <ul className="space-y-2">
                {navigation.map((item, i) => {
                  if (item.label === "Services") {
                    return (
                      <motion.li
                        key={item.label}
                        custom={i}
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <button
                          onClick={() => setServicesOpen((prev) => !prev)}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-2xl font-semibold text-white/80 transition-colors hover:text-white"
                        >
                          Services
                          <ChevronDown
                            size={20}
                            className={cn(
                              "transition-transform duration-200",
                              servicesOpen && "rotate-180"
                            )}
                          />
                        </button>
                        <AnimatePresence>
                          {servicesOpen && (
                            <motion.div
                              variants={dropdownVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              className="overflow-hidden"
                            >
                              <div className="ml-4 mt-1 space-y-1 border-l border-white/10 pl-4">
                                {servicesDropdownItems.map((s) => (
                                  <Link
                                    key={s.href}
                                    href={s.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                      "block rounded-lg px-4 py-2.5 text-base transition-colors",
                                      isActive(s.href)
                                        ? "text-primary-500"
                                        : "text-white/50 hover:text-white"
                                    )}
                                  >
                                    {s.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    )
                  }
                  return (
                    <motion.li
                      key={item.label}
                      custom={i}
                      variants={mobileLinkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3 text-2xl font-semibold transition-colors",
                          isActive(item.href)
                            ? "text-primary-500"
                            : "text-white/80 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              {/* Mobile CTA */}
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <Button
                  variant="primary"
                  size="xl"
                  className="w-full rounded-2xl"
                  asChild
                >
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    Let&apos;s Talk
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
