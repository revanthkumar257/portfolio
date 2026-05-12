"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Agri AI",
      description: "Deep Learning-based Plant Disease Detection using a custom ResNet-like CNN architecture, achieving 99.52% accuracy across 39 disease classes on 55,000+ images.",
      tech: ["Computer Vision", "Deep Learning", "TensorFlow", "Python"],
      github: "https://github.com/revanthkumar257/Agri-AI",
      demo: null,
      metric: "99.52% Accuracy",
    },
    {
      title: "Falcon SQL Generator",
      description: "AI-powered tool converting natural language to SQL using fine-tuned Falcon-1B (LoRA) and FAISS-based RAG for schema-aware context retrieval.",
      tech: ["Hugging Face", "PEFT", "FAISS", "Gradio", "Python"],
      github: "https://github.com/revanthkumar257/Falcon-SQL-Generator",
      demo: null,
      metric: "LoRA Fine-tuned",
    },
    {
      title: "Smart Class Attendance",
      description: "Desktop-based automated attendance system utilizing real-time facial recognition (Haar Cascades, LBPH) connected to a MySQL backend.",
      tech: ["OpenCV", "Python", "Tkinter", "MySQL"],
      github: "https://github.com/revanthkumar257/smart-class-attendance-system",
      demo: null,
      metric: "Real-time Tracking",
    },
    {
      title: "Data Visualization & Trend Analysis",
      description: "End-to-end data analytics project involving data cleaning, exploratory data analysis, and advanced visualizations to uncover hidden business trends.",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/revanthkumar257/Futurense-Project",
      demo: null,
      metric: "Analytics Pipeline",
    },
    {
      title: "Flight Price Prediction",
      description: "Machine learning model predicting flight prices based on historical data features such as airline, source, destination, and duration.",
      tech: ["Machine Learning", "Scikit-Learn", "Python", "Data Processing"],
      github: "https://github.com/revanthkumar257/Flight-Price-Prediction",
      demo: null,
      metric: "Regression Model",
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
              Featured <span className="text-brand-500">Projects.</span>
            </h2>
            <p className="text-zinc-400 max-w-xl">
              Showcasing production-ready systems, custom ML models, and interactive analytics tools.
            </p>
          </div>
          <a
            href="https://github.com/revanthkumar257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors border-b border-zinc-600 hover:border-white pb-1"
          >
            View all on GitHub <Github size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-dark-surface border border-dark-border rounded-2xl p-8 hover:border-brand-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-brand-600/10 text-brand-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {project.metric}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <Github size={22} />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                        <ExternalLink size={22} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-medium text-zinc-500 bg-dark-bg px-2.5 py-1 rounded-md border border-dark-border">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
