"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Database, BrainCircuit, Activity, LineChart, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedHeader from "./AnimatedHeader";

const projects = [
  {
    title: "Agri AI",
    category: "Computer Vision",
    description: "Designed a custom ResNet-inspired CNN architecture from scratch for multi-class plant disease classification. Processed 55,000+ leaf images across 39 classes.",
    tech: ["TensorFlow", "Deep Learning", "Python", "ResNet"],
    github: "https://github.com/revanthkumar257/Agri-AI",
    metric: "99.52% Accuracy",
    icon: <BrainCircuit size={48} className="text-emerald-400 opacity-20 group-hover:opacity-100 transition-opacity" />,
    gradient: "from-emerald-500/20 to-teal-900/20",
    border: "border-emerald-500/20"
  },
  {
    title: "Falcon SQL Generator",
    category: "Generative AI",
    description: "Fine-tuned Falcon-1B using LoRA on a handcrafted text-to-SQL dataset. Integrated RAG using FAISS and Sentence Transformers to retrieve schema-aware context dynamically.",
    tech: ["Hugging Face", "LoRA", "FAISS", "Gradio"],
    github: "https://github.com/revanthkumar257/Falcon-SQL-Generator",
    metric: "LoRA Fine-tuned",
    icon: <Database size={48} className="text-blue-400 opacity-20 group-hover:opacity-100 transition-opacity" />,
    gradient: "from-blue-500/20 to-indigo-900/20",
    border: "border-blue-500/20"
  },
  {
    title: "Smart Class Attendance",
    category: "System Engineering",
    description: "Desktop-based automated attendance system using real-time facial recognition. Implemented Haar Cascades and LBPH algorithms connected to a MySQL backend.",
    tech: ["OpenCV", "Python", "Tkinter", "MySQL"],
    github: "https://github.com/revanthkumar257/smart-class-attendance-system",
    metric: "Real-time Tracking",
    icon: <Activity size={48} className="text-purple-400 opacity-20 group-hover:opacity-100 transition-opacity" />,
    gradient: "from-purple-500/20 to-fuchsia-900/20",
    border: "border-purple-500/20"
  },
  {
    title: "Data Visualization & Trend Analysis",
    category: "Data Analytics",
    description: "End-to-end data analytics pipeline cleaning unstructured data, performing EDA, and building advanced visualizations to uncover hidden business trends.",
    tech: ["Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/revanthkumar257/Futurense-Project",
    metric: "Insight Driven",
    icon: <LineChart size={48} className="text-orange-400 opacity-20 group-hover:opacity-100 transition-opacity" />,
    gradient: "from-orange-500/20 to-red-900/20",
    border: "border-orange-500/20"
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="projects" className="py-32 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 relative">
          
          {/* Sticky Left Column */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4">
              Featured Work
            </h2>
            <AnimatedHeader 
              text="Systems in Production."
              tag="h3"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            />
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8">
              A curated selection of my most technically challenging projects, ranging from custom neural networks to dynamic analytics dashboards.
            </p>
            <a
              href="https://github.com/revanthkumar257"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-dark-bg/5 hover:bg-dark-bg/10 border border-dark-border text-foreground font-medium transition-all"
            >
              <FaGithub size={18} /> View All on GitHub
            </a>
          </div>

          {/* Scrolling Right Column */}
          <div className="lg:w-2/3 flex flex-col gap-10 lg:pt-32 pb-32">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "glass-panel rounded-[2rem] p-8 md:p-10 relative overflow-hidden group border",
                  project.border
                )}
              >
                {/* Background Gradient */}
                <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 dark:opacity-50 opacity-20", project.gradient)} />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2 block">
                        {project.category}
                      </span>
                      <h4 className="text-3xl font-bold text-foreground transition-all duration-300">
                        {project.title}
                      </h4>
                    </div>
                    <div className="bg-white/50 dark:bg-dark-bg/50 backdrop-blur-md border border-dark-border text-xs font-bold px-4 py-2 rounded-full text-foreground shadow-sm">
                      {project.metric}
                    </div>
                  </div>

                  <p className="text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed mb-10 max-w-xl">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-white/50 dark:bg-white/5 px-3 py-1.5 rounded-lg border border-dark-border backdrop-blur-sm flex items-center gap-1.5 shadow-sm">
                          <Code size={12} className="text-brand-500" /> {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center hover:scale-110 transition-transform flex-shrink-0 shadow-xl"
                    >
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>

                {/* Decorative Icon */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none">
                  {project.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
