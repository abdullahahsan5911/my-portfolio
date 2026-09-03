import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="container py-20 sm:py-28">
      <SectionHeading index="04" title="Experience" />
      <Reveal>
        <div>
          {experience.map((item) => (
            <ExperienceCard key={`${item.company}-${item.start}`} item={item} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
