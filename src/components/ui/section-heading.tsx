"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, transition } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16 lg:mb-20",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {label && (
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={transition}
          className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-400 mb-4"
        >
          {label}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...transition, delay: 0.1 }}
        className={cn(
          "text-display-sm sm:text-display-md lg:text-display-lg font-display text-white",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ ...transition, delay: 0.2 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
