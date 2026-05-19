"use client"

import { useScroll, useTransform, motion, useMotionValueEvent, useMotionValue } from "framer-motion"
import { useState, useEffect } from "react"

const symbols = ["*", "<>", "@", "*"]

export default function ScrollEffects() {
  const { scrollYProgress } = useScroll()
  const [currentSymbol, setCurrentSymbol] = useState(symbols[0])

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mouseX.set((e.clientX - cx) / cx)
      mouseY.set((e.clientY - cy) / cy)
    }
    window.addEventListener("mousemove", handleMouse)
    return () => window.removeEventListener("mousemove", handleMouse)
  }, [mouseX, mouseY])

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.12, 0.25])
  const brackOpa = useTransform(scrollYProgress, [0.4, 0.7], [0, 0.12])
  const brackScale = useTransform(scrollYProgress, [0.4, 0.7], [0.5, 1])

  const shapeX = useTransform(mouseX, [-1, 1], [-30, 30])
  const shapeY = useTransform(mouseY, [-1, 1], [-30, 30])

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = v < 0.25 ? 0 : v < 0.5 ? 1 : v < 0.75 ? 2 : 3
    setCurrentSymbol(symbols[idx])
  })

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Center shape morpher - responds to mouse + scroll */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          style={{ x: shapeX, y: shapeY }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            key={currentSymbol}
            initial={{ scale: 0.3, opacity: 0, rotate: -40 }}
            animate={{ scale: 1, opacity: 0.6, rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="font-oldburg text-[12rem] md:text-[16rem] font-bold text-[#FAFD00] select-none block text-center leading-none"
            style={{ minWidth: 200 }}
          >
            {currentSymbol}
          </motion.span>
        </motion.div>
      </div>

      {/* Code bracket fades in mid-page */}
      <motion.div
        className="absolute bottom-24 left-16 hidden md:block"
        style={{ opacity: brackOpa, scale: brackScale }}
      >
        <span className="text-5xl text-[#FAFD00] select-none">&lt;/&gt;</span>
      </motion.div>
    </div>
  )
}
