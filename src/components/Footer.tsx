import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg py-12 mt-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-foreground">
            Revanth<span className="text-brand-500">.</span>
          </Link>
          <p className="text-zinc-400 text-sm text-center md:text-left max-w-xs">
            AI & Data Engineer building intelligent systems and analytics-driven products.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/revanthkumar257"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-dark-surface rounded-full"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/revanth-kumar-golagani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-brand-500 transition-colors p-2 hover:bg-dark-surface rounded-full"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.youtube.com/@Revanthkumar-iw2ps"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-red-500 transition-colors p-2 hover:bg-dark-surface rounded-full"
            aria-label="YouTube"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="mailto:revanthyadavg05@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors p-2 hover:bg-dark-surface rounded-full"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-dark-border/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <p>&copy; {new Date().getFullYear()} Revanth Kumar Golagani. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed & Built with Next.js</p>
      </div>
    </footer>
  );
}
