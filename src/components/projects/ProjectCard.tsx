import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "grid min-w-0 gap-10 border-b border-border/70 pb-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:border-b-0 lg:pb-0",
        project.featured && "lg:grid-cols-[1fr_1.1fr]"
      )}
    >
      <div className="order-2 flex flex-col lg:order-1">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="min-w-0 break-words font-display text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl">
            {project.name}
          </h3>
          {project.featured ? (
            <span className="font-mono text-xs text-secondary-foreground">Featured</span>
          ) : null}
        </div>

        <p className="mt-3 max-w-prose text-muted-foreground">{project.description}</p>

        <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span aria-hidden="true">–</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded border border-border px-2 py-1">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-4 text-sm font-medium">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          ) : null}
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live demo
            </a>
          ) : null}
        </div>
      </div>

      <div className="group relative order-1 lg:order-2">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-border/70 bg-muted">
          <div className="absolute inset-0 z-10 bg-primary/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={`Screenshot of the ${project.name} project`}
            onError={(event) => { event.currentTarget.style.display = "none"; }}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="absolute bottom-6 right-6 z-20 flex h-20 w-20 translate-y-3 items-center justify-center rounded-full bg-primary text-xs font-medium uppercase tracking-wider text-primary-foreground opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
          >
            View
          </a>
        ) : null}
      </div>
    </article>
  );
}
