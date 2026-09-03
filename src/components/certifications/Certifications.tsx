import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CertificateCard } from "@/components/certifications/CertificateCard";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="container py-20 sm:py-28">
      <SectionHeading index="05" title="Certifications" />
      <div className="grid gap-4 sm:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <CertificateCard cert={cert} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
