import type { Experience } from "@/data/experience";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  return (
    <article className="group relative pl-8 sm:grid sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6 sm:pl-0">
      <div className="pointer-events-none absolute bottom-0 left-2 top-0 w-px bg-border sm:left-[7.5rem]" />
      <span className="pointer-events-none absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background text-[9px] font-semibold text-primary sm:left-[7rem]">
        {String(index).padStart(2, "0")}
      </span>
      <div className="pb-3 pt-1 font-mono text-xs uppercase tracking-wide text-muted-foreground sm:pr-2 sm:pt-7 sm:text-right">
        <span className="block">{item.start}</span>
        <span className="mt-1 block text-foreground/60">{item.end}</span>
      </div>
      <div className="relative grid overflow-hidden rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-primary/50 group-hover:shadow-xl sm:p-7 lg:grid-cols-[minmax(0,1fr)_11rem] lg:gap-8">
        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-secondary">{item.company}</p>
              <h3 className="mt-2 font-display text-2xl transition-colors duration-300 group-hover:text-primary sm:text-3xl">{item.role}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
            </div>
            <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Experience
            </span>
          </div>
          {item.highlights.length > 0 ? (
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {item.highlights.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {item.images?.length ? (
          <div className="mt-6 min-h-48 overflow-hidden rounded-lg border border-border bg-muted lg:mt-0">
            <ImageCarousel
              images={item.images}
              alt={`${item.company} experience document`}
              imageClassName="block h-full max-h-64 w-full object-contain object-top"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
