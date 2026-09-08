import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="container py-14 sm:py-20">
      <SectionHeading index="07" title="Contact" />
      <Reveal className="grid gap-6 sm:grid-cols-[2fr_1fr]">
        <div>
          <p className="max-w-prose text-lg text-muted-foreground sm:text-xl">
            Have a project in mind, or a role you think I'd be a fit for? I'm happy to talk.
          </p>
          <a
            href={`mailto:${portfolio.email}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {portfolio.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 font-mono text-sm">
          <a
            href={portfolio.social.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-2">
              <Github className="h-4 w-4" aria-hidden="true" /> GitHub
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={portfolio.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg border border-border px-4 py-3 transition-colors hover:bg-muted"
          >
            <span className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
