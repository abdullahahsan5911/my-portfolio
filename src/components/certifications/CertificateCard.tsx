import { ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";

export function CertificateCard({ cert }: { cert: Certification }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
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
  );
}
