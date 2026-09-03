import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="container py-20 sm:py-28">
      <SectionHeading index="02" title="Skills" description="Technologies I use regularly, grouped by where they sit in the stack." />
      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.05}>
            <h3 className="font-mono text-sm text-muted-foreground">{group.group}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <SkillBadge key={item} label={item} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
