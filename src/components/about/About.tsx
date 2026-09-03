import { portfolio } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="container py-20 sm:py-28">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
        <Reveal className="space-y-5">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph} className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-6 border-l border-border pl-6">
            {portfolio.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs text-muted-foreground">{stat.label}</dt>
                <dd className="mt-1 font-display text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
