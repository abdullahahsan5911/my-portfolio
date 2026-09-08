import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/skills/SkillBadge";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  const renderItems = (items: string[]) => (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {items.map((item, index) => (
        <Reveal key={item} delay={index * 0.035}>
          <SkillBadge label={item} />
        </Reveal>
      ))}
    </div>
  );

  return (
    <section id="skills" className="container py-14 sm:py-20">
      <SectionHeading index="02" title="Skills" description="The languages, capabilities, and technologies I use to turn ideas into working products." />
      {renderItems(skills)}
    </section>
  );
}
