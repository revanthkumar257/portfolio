import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BentoGrid />
      <Experience />
    </>
  );
}
