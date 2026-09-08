"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const revealRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: revealRef,
    offset: ["start end", "end start"]
  });
  const parallaxX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <motion.div
      ref={revealRef}
      className={className}
      style={{ x: shouldReduceMotion ? 0 : parallaxX }}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24, filter: "blur(6px)" }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1], filter: { duration: 0.55, delay } }}
    >
      {children}
    </motion.div>
  );
}
