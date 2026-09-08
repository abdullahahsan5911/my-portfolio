"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeProject = projects[activeIndex] ?? projects[0];

  if (!activeProject) return null;

  const previousProject = () => {
    setActiveIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setActiveIndex((index) => (index + 1) % projects.length);
  };

  return (
    <section id="projects" className="relative py-14 sm:py-20">
      <div className="container">
        <SectionHeading index="03" title="Projects" description="A few full-stack builds that best represent how I work end to end, from schema to UI." />
        <div className="mt-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground" aria-live="polite">
              Project {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={previousProject}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Previous project"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextProject}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                aria-label="Next project"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeProject.slug}
                initial={shouldReduceMotion ? undefined : { opacity: 0, x: 36 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, x: -36 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-2 bg-border hover:bg-primary/60"}`}
                aria-label={`Show ${project.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}