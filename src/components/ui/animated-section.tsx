"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, transition, staggerContainer } from "@/lib/animations";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  stagger?: boolean;
  id?: string;
  index?: number;
  custom?: number;
}

export function AnimatedSection({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  stagger = false,
  id,
  index,
  custom,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const customValue = custom ?? index;

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        id={id}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className={cn("relative", className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      id={id}
      variants={variants}
      custom={customValue}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ ...transition, delay }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  index?: number;
  custom?: number;
}

export function AnimatedItem({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  index,
  custom,
}: AnimatedItemProps) {
  const customValue = custom ?? index;
  return (
    <motion.div
      variants={variants}
      custom={customValue}
      transition={{ ...transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
