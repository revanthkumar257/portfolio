"use client";

import { motion } from "framer-motion";
import { Code2, Database, BrainCircuit, LineChart } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "AI & Machine Learning",
      description: "Developing custom deep learning models (ResNet, CNNs) and fine-tuning LLMs (LoRA, Falcon) for real-world applications.",
      icon: <BrainCircuit className="text-brand-500" size={32} />,
    },
    {
      title: "Data Analytics",
      description: "Processing large datasets, conducting ROI analysis, and building interactive Power BI dashboards for executive-level insights.",
      icon: <LineChart className="text-brand-500" size={32} />,
    },
    {
      title: "Computer Vision",
      description: "Implementing facial recognition and plant disease detection systems using OpenCV and TensorFlow.",
      icon: <Code2 className="text-brand-500" size={32} />,
    },
    {
      title: "Full-Stack Development",
      description: "Building production-ready systems bridging complex AI/Data backends (Python, SQL) with modern frontends.",
      icon: <Database className="text-brand-500" size={32} />,
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Engineering <span className="text-brand-500">Intelligence.</span>
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            I am currently pursuing my B.Tech in Computer Science and Engineering at Lovely Professional University.
            My passion lies in transforming raw data into actionable insights and building AI systems that solve practical problems.
            From optimizing ad spend pipelines to training custom neural networks, I approach engineering with a data-driven mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-dark-surface border border-dark-border hover:border-brand-500/50 transition-colors group"
            >
              <div className="mb-6 bg-dark-bg w-16 h-16 rounded-xl flex items-center justify-center border border-dark-border group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
