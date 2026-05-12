"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Database, Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] hidden md:flex items-center justify-center w-16 h-16 glass rounded-2xl text-brand-400 opacity-50"
      >
        <Terminal size={32} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[10%] hidden md:flex items-center justify-center w-20 h-20 glass rounded-full text-brand-600 opacity-50"
      >
        <Database size={40} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 right-[20%] hidden lg:flex items-center justify-center w-12 h-12 glass rounded-xl text-brand-500 opacity-30"
      >
        <Code2 size={24} />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-widest uppercase text-zinc-300">Available for new opportunities</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-[1.1]"
          >
            Engineering <br className="hidden md:block" />
            <span className="text-gradient">Intelligence.</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I am <strong className="text-white font-medium">Revanth Kumar</strong>, an AI/Data-focused engineer architecting intelligent systems and analytics-driven products.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <Link
              href="#projects"
              className={cn(
                "group relative inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white transition-all duration-300",
                "bg-brand-600 hover:bg-brand-500 rounded-full overflow-hidden shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] hover:shadow-[0_0_60px_-15px_rgba(99,102,241,0.7)]"
              )}
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <a
              href="/Revanth_Kumar_Golagani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium transition-all duration-300",
                "glass rounded-full hover:bg-white/10"
              )}
            >
              <Download size={18} className="text-zinc-400 group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
