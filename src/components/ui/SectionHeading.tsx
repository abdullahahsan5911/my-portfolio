"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="mb-8 flex items-baseline gap-4 border-b border-border pb-4 sm:mb-10"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        className="font-mono text-sm text-muted-foreground"
        initial={shouldReduceMotion ? undefined : { opacity: 0, x: -12 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.12, duration: 0.45 }}
      >
        {index}
      </motion.span>
      <div>
        <h2 className="font-display text-2xl font-medium sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-prose text-sm text-muted-foreground sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}