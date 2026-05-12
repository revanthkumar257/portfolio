"use client";

import { motion } from "framer-motion";
import { BrainCircuit, LineChart, Code2, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedHeader from "./AnimatedHeader";

export default function About() {
  const features = [
    {
      title: "AI & Machine Learning",
      description: "Custom deep learning models (ResNet) and fine-tuning LLMs (LoRA, Falcon).",
      icon: <BrainCircuit size={24} />,
      color: "text-brand-400",
      bg: "bg-brand-400/10"
    },
    {
      title: "Data Analytics",
      description: "Processing scale datasets, ROI analysis, and building interactive Power BI dashboards.",
      icon: <LineChart size={24} />,
      color: "text-brand-500",
      bg: "bg-brand-500/10"
    },
    {
      title: "Computer Vision",
      description: "Facial recognition and plant disease detection using OpenCV and TensorFlow.",
      icon: <Code2 size={24} />,
      color: "text-brand-600",
      bg: "bg-brand-600/10"
    },
    {
      title: "Full-Stack Integrations",
      description: "Bridging complex AI/Data backends with modern, interactive frontends.",
      icon: <Database size={24} />,
      color: "text-brand-700",
      bg: "bg-brand-700/10"
    },
  ];

  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-20">
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4">
                The Architecture
              </h2>
              <AnimatedHeader 
                text="Bridging the gap between raw data and human interaction."
                tag="h3"
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight"
              />
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed mb-8">
                Currently pursuing my B.Tech in Computer Science at Lovely Professional University. My passion lies in transforming raw data into actionable insights and building AI systems that solve practical problems.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-relaxed">
                From optimizing ad spend pipelines via Data Analytics to training custom neural networks from scratch, I approach engineering with a data-driven mindset and a creative touch.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl flex flex-col gap-6 group hover:-translate-y-2 transition-transform duration-300"
                >
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-colors", feature.bg, feature.color)}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
