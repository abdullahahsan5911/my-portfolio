"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !scope.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 10, duration: 0.5 })
        .from("[data-hero-name]", { opacity: 0, y: 24, duration: 0.7 }, "-=0.25")
        .from("[data-hero-line]", { scaleX: 0, transformOrigin: "left", duration: 0.6 }, "-=0.35")
        .from("[data-hero-copy]", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from("[data-hero-cta]", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.25");
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={scope} className="container flex min-h-[70vh] flex-col justify-center pb-16 pt-28 sm:pt-32">
      <p data-hero-eyebrow className="font-mono text-sm text-muted-foreground">
        {portfolio.location}
      </p>

      <h1
        data-hero-name
        className="mt-4 font-display text-4xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl"
      >
        {portfolio.name}
      </h1>

      <div data-hero-line className="mt-6 h-px w-full max-w-xl bg-border" />

      <p data-hero-copy className="mt-6 max-w-prose text-lg text-muted-foreground sm:text-xl">
        {portfolio.title} — {portfolio.intro}
      </p>

      <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
        {portfolio.roleTags.map((tag) => (
          <span key={tag} className="rounded-full border border-border px-3 py-1">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          data-hero-cta
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          View my work
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
        <a
          data-hero-cta
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
        >
          Get in touch
        </a>
        <div data-hero-cta className="flex items-center gap-3 pl-2">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
