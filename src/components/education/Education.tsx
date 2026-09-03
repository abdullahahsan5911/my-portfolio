import { education } from "@/data/education";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="container py-20 sm:py-28">
      <SectionHeading index="06" title="Education" />
      <Reveal>
        <div>
          {education.map((item) => (
            <div key={item.school} className="grid gap-1 sm:grid-cols-[1fr_2fr] sm:gap-8">
              <div className="font-mono text-sm text-muted-foreground">{item.year}</div>
              <div>
                <h3 className="font-display text-xl">{item.school}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.degree}, {item.field}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
