"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-slide");

      let currentIndex = 0;
      let isAnimating = false;

      const getSlideWidth = () => section.clientWidth;

      const goToSlide = (index: number) => {
        if (isAnimating) return;

        const nextIndex = gsap.utils.clamp(
          0,
          cards.length - 1,
          index
        );

        if (nextIndex === currentIndex) return;

        isAnimating = true;
        currentIndex = nextIndex;

        gsap.to(track, {
          x: () => -currentIndex * getSlideWidth(),
          duration: 0.7,
          ease: "power3.inOut",

          onComplete: () => {
            isAnimating = false;
          },
        });
      };

      const scrollTrigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getSlideWidth() * (cards.length - 1)}`,
        pin: true,
      });

      const observer = ScrollTrigger.observe({
        target: window,
        type: "wheel,touch",

        tolerance: 50,

        onDown: () => {
          goToSlide(currentIndex + 1);
        },

        onUp: () => {
          goToSlide(currentIndex - 1);
        },
      });

      observer.disable();

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${getSlideWidth() * (cards.length - 1)}`,

        onEnter: () => {
          observer.enable();
        },

        onEnterBack: () => {
          observer.enable();
        },

        onLeave: () => {
          observer.disable();
        },

        onLeaveBack: () => {
          observer.disable();
        },
      });

      return () => {
        scrollTrigger.kill();
        observer.kill();
      };
    }, section);

    return () => ctx.revert();

  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative overflow-hidden py-20 sm:py-28" >
      <div className="container">
        <SectionHeading index="03" title="Projects" description="A few full-stack builds that best represent how I work — end to end, from schema to UI." />
      </div>

      <div
        ref={trackRef}
        className="mt-12 flex w-max will-change-transform"
      >
        {projects.map((project) => (
          <div
            key={project.slug}
            className="project-slide w-screen min-w-[100vw] shrink-0 px-6 sm:px-12"
          >
            <div className="container">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </section>

  );
}