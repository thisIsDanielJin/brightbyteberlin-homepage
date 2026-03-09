"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp, viewportConfig } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface ScrollRevealProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  /** Skip initial="hidden" so above-the-fold content paints immediately (avoids LCP penalty). */
  aboveFold?: boolean;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
  aboveFold = false,
}: ScrollRevealProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={aboveFold ? "visible" : "hidden"}
      whileInView="visible"
      viewport={viewportConfig}
      variants={variants}
      className={className}
      custom={delay}
    >
      {children}
    </motion.div>
  );
}
