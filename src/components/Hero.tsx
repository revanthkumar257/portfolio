"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, User } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        
        {/* Profile Picture Placeholder */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-dark-surface border-4 border-dark-border shadow-2xl flex items-center justify-center mb-8 relative overflow-hidden group"
        >
          {/* Replace this div with next/image later */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent group-hover:opacity-50 transition-opacity" />
          <User size={48} className="text-zinc-500" />
          <div className="absolute bottom-2 text-[10px] text-zinc-500 font-medium uppercase tracking-widest">
            Photo
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-brand-500 font-medium tracking-wide uppercase text-sm md:text-base mb-4">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground">
            Revanth Kumar
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            An <strong className="text-white font-medium">AI/Data-focused engineer</strong> who builds intelligent systems and analytics-driven products.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-dark-bg font-bold hover:bg-zinc-200 transition-colors"
          >
            View Projects
            <ArrowRight size={20} />
          </Link>
          <a
            href="/Revanth_Kumar_Golagani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-dark-surface border border-dark-border text-white font-medium hover:border-brand-500 transition-colors"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
