import { ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export function CertificateCard({ cert }: { cert: Certification }) {
  return (
    <article className="group flex min-h-44 overflow-hidden rounded-lg border border-border bg-card transition-transform duration-500 hover:-translate-y-1 hover:shadow-lg">
      {cert.image ? (
        <div className="flex w-2/5 shrink-0 items-start overflow-hidden border-r border-border bg-white">
          <ImageCarousel
            images={[cert.image]}
            alt={`${cert.name} certificate`}
            className="h-full"
            imageClassName="block h-full w-full object-cover object-top transition-transform duration-700 group-hover/image:scale-[1.02]"
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col justify-center p-5">
        <h3 className="font-display text-lg">{cert.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {cert.issuer ?? "Issuer to be confirmed"}
          {cert.date ? ` · ${cert.date}` : ""}
        </p>
        {cert.credentialUrl ? (
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary"
          >
            View credential
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
