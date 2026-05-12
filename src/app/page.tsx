import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechMarquee from "@/components/TechMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <BentoGrid />
      <Experience />
    </>
  );
}
