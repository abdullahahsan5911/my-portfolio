import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Experience } from "@/components/experience/Experience";
import { Certifications } from "@/components/certifications/Certifications";
import { Education } from "@/components/education/Education";
import { Contact } from "@/components/contact/Contact";
import { SectionScroller } from "@/components/scroll/SectionScroller";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <SectionScroller>
          <About />
          <Projects />
          <Experience />
          <Certifications />
          <Skills />
          <Education />
          <Contact />
        </SectionScroller>
      </main>
      <Footer />
    </>
  );
}
