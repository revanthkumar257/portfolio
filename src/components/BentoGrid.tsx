"use client";

import { motion } from "framer-motion";
import { FaYoutube, FaPython, FaReact, FaDatabase, FaChartBar } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNextdotjs } from "react-icons/si";
import { Award, ExternalLink, Code2 } from "lucide-react";
import AnimatedHeader from "./AnimatedHeader";

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4">
            Arsenal & Content
          </h2>
          <AnimatedHeader 
            text="Tools, Tech & Teaching." 
            tag="h3" 
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground justify-center text-center"
          />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]"
        >
          {/* Main YouTube/Media Box */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <motion.div 
                drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={0.2}
                className="w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 mb-4 cursor-grab active:cursor-grabbing hover:scale-110 transition-transform"
              >
                <FaYoutube size={28} className="pointer-events-none" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Tech Education</h4>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-sm">
                  Beyond building systems, I share insights into AI, Data Analytics, and Full-Stack Development on YouTube.
                </p>
                <a
                  href="https://www.youtube.com/@Revanthkumar-iw2ps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-dark-bg/10 hover:bg-red-500 text-foreground hover:text-white border border-dark-border text-sm font-medium transition-all"
                >
                  Visit Channel <ExternalLink size={16} />
                </a>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-red-500/20 rounded-full blur-2xl group-hover:bg-red-500/30 transition-colors duration-500" />
          </motion.div>

          {/* Core AI Tech Box */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-panel rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-lg font-bold text-foreground">AI & ML Stack</h4>
              <Code2 className="text-brand-500" />
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing"><SiTensorflow size={32} className="text-[#FF6F00] pointer-events-none" /><span className="text-xs text-zinc-500">TensorFlow</span></motion.div>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing"><SiPytorch size={32} className="text-[#EE4C2C] pointer-events-none" /><span className="text-xs text-zinc-500">PyTorch</span></motion.div>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing"><SiScikitlearn size={32} className="text-[#F7931E] pointer-events-none" /><span className="text-xs text-zinc-500">Scikit</span></motion.div>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="flex flex-col items-center gap-2 cursor-grab active:cursor-grabbing"><FaPython size={32} className="text-[#3776AB] pointer-events-none" /><span className="text-xs text-zinc-500">Python</span></motion.div>
            </div>
          </motion.div>

          {/* Data Analytics Box */}
          <motion.div variants={itemVariants} className="glass-panel rounded-3xl p-6 flex flex-col justify-between group">
            <h4 className="text-lg font-bold text-foreground">Data Analytics</h4>
            <div className="flex justify-between items-end">
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="cursor-grab active:cursor-grabbing z-10"><FaChartBar size={48} className="text-[#F2C811] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" /></motion.div>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="cursor-grab active:cursor-grabbing z-10"><FaDatabase size={32} className="text-[#4479A1] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" /></motion.div>
            </div>
          </motion.div>

          {/* Web Stack Box */}
          <motion.div variants={itemVariants} className="glass-panel rounded-3xl p-6 flex flex-col justify-between group">
            <h4 className="text-lg font-bold text-foreground">Web Stack</h4>
            <div className="flex justify-between items-end">
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="cursor-grab active:cursor-grabbing z-10"><SiNextdotjs size={48} className="text-foreground opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" /></motion.div>
              <motion.div drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} className="cursor-grab active:cursor-grabbing z-10"><FaReact size={36} className="text-[#61DAFB] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all pointer-events-none" /></motion.div>
            </div>
          </motion.div>

          {/* Certifications Box */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass-panel rounded-3xl p-6 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-32 h-32 bg-brand-600/10 rounded-bl-full group-hover:bg-brand-600/20 transition-colors" />
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <Award className="text-brand-500" />
              <h4 className="text-lg font-bold text-foreground">Certifications</h4>
            </div>
            <ul className="space-y-2 relative z-10">
              <li className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Azure Data Scientist Associate</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Azure Data Fundamentals</li>
              <li className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span> Infosys Gen AI</li>
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
