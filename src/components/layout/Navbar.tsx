"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" className="font-display text-lg font-medium">
          {portfolio.name}
        </a>

        <ul className="hidden items-center gap-7 font-mono text-sm md:flex">
          {portfolio.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </a>
            </li>
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

      <div
        className={cn(
          "grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-300 md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <ul className="min-h-0 flex-col gap-1 overflow-hidden px-6 py-4 font-mono text-sm">
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
      </div>
    </header>
  );
}
