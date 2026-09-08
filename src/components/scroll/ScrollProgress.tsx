"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const shouldReduceMotion = useReducedMotion();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 24,
        restDelta: 0.001,
    });

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
            <motion.div
                className="h-full origin-left bg-primary shadow-[0_0_18px_color-mix(in_srgb,var(--primary)_70%,transparent)]"
                style={{ scaleX: shouldReduceMotion ? 1 : scaleX }}
            />
        </div>
    );
}
