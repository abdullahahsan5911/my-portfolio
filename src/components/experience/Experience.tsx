import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="container py-14 sm:py-20">
      <SectionHeading
        index="04"
        title="Experience"
        description="A short record of the teams and products where I have built practical web development experience."
      />
      <div className="space-y-5">
        {experience.map((item, index) => (
          <Reveal key={`${item.company}-${item.start}`} delay={index * 0.1}>
            <ExperienceCard item={item} index={index + 1} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
