"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <motion.a
          href="#top"
          className="font-display text-lg font-medium"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {portfolio.name}
        </motion.a>

        <ul className="hidden items-center gap-7 font-mono text-sm md:flex">
          {portfolio.nav.map((item) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.08 * portfolio.nav.indexOf(item) }}
            >
              <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={portfolio.resume.href}
            download
            className="rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
          >
            {portfolio.resume.label}
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden border-t border-border md:hidden"
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <ul className="flex min-h-0 flex-col gap-1 px-6 py-4 font-mono text-sm">
          {portfolio.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={portfolio.resume.href} download className="block py-2 font-medium text-foreground">
              {portfolio.resume.label}
            </a>
          </li>
        </ul>
      </motion.div>
    </header>
  );
}
