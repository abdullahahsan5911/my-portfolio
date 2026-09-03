"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionScroller({
    children,
}: {
    children: React.ReactNode;
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const ctx = gsap.context(() => {
            // GSAP scrolling logic goes here
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            {children}
        </div>
    );
}