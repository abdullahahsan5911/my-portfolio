import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/certifications/CertificateCard";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="container py-14 sm:py-20">
      <SectionHeading index="05" title="Certifications" />
      <div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <CertificateCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
