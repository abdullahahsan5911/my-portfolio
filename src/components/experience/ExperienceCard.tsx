import type { Experience } from "@/data/experience";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="grid gap-2 border-b border-border py-8 first:pt-0 last:border-none sm:grid-cols-[1fr_2fr] sm:gap-8">
      <div className="font-mono text-sm text-muted-foreground">
        {item.start} — {item.end}
      </div>
      <div>
        <h3 className="font-display text-xl">{item.role}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {item.company} · {item.location}
        </p>
        {item.highlights.length > 0 ? (
          <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            {item.highlights.map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true">–</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
