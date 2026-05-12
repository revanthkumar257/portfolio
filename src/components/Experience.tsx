"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedHeader from "./AnimatedHeader";

export default function Experience() {
  const experiences = [
    {
      role: "Data Scientist Intern",
      company: "Futurense Technologies",
      date: "June 2025 - August 2025",
      points: [
        "Processed and analyzed 10,000+ multi-source student and marketing records, enabling data-driven strategic decisions.",
        "Performed ROI and conversion analysis across Facebook, Google, and LinkedIn campaigns, optimizing budget reallocation.",
        "Segmented leads using demographic and behavioral attributes, improving high-quality lead precision by uncovering that 45% were B.Tech students.",
        "Designed a data-driven budget optimization model dynamically reallocating ad spend based on historical performance.",
        "Built interactive Power BI dashboards for platform performance, lead quality, and counselor productivity."
      ]
    }
  ];

  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University, Punjab",
      date: "2022 - 2026",
      score: "CGPA: 7.87",
    },
    {
      degree: "Intermediate",
      institution: "Tirumala Junior College, Visakhapatnam",
      date: "2020 - 2022",
      score: "94.70%",
    }
  ];

  return (
    <section id="experience" className="py-32 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20 flex flex-col items-center">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-4">
            The Journey
          </h2>
          <AnimatedHeader 
            text="Experience & Education."
            tag="h3"
            className="text-4xl md:text-5xl font-bold tracking-tight text-foreground justify-center text-center"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          
          {/* Experience Timeline */}
          <div className="lg:w-1/2">
            <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
              <span className="w-10 h-10 rounded-xl glass flex items-center justify-center shadow-md">
                <Briefcase size={20} className="text-brand-500" />
              </span>
              Work Experience
            </h4>
            
            <div className="relative border-l border-dark-border ml-5 pl-10 pb-4 space-y-12">
              {/* Glowing Timeline Line */}
              <div className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-brand-500 via-brand-600 to-transparent" />

              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[45px] top-1.5 h-3 w-3 rounded-full bg-brand-400 shadow-[0_0_15px_rgba(45,212,191,0.8)] group-hover:scale-150 transition-transform" />
                  
                  <div className="glass-panel p-8 rounded-3xl group-hover:-translate-y-1 transition-transform duration-300">
                    <span className="text-brand-500 text-xs font-bold tracking-widest uppercase mb-3 block">{exp.date}</span>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{exp.role}</h3>
                    <h4 className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 font-medium">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex items-start">
                          <span className="text-brand-600 mr-3 mt-1.5 leading-none">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="lg:w-1/2">
            <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-foreground">
              <span className="w-10 h-10 rounded-xl glass flex items-center justify-center shadow-md">
                <GraduationCap size={20} className="text-brand-400" />
              </span>
              Education
            </h4>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="absolute right-0 bottom-0 p-6 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                    <GraduationCap size={120} className="text-brand-400" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-brand-500 text-xs font-bold tracking-widest uppercase mb-3 block">{edu.date}</span>
                    <h3 className="text-xl font-bold text-foreground mb-2">{edu.degree}</h3>
                    <h4 className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm">{edu.institution}</h4>
                    <span className="inline-block bg-white/50 dark:bg-white/5 text-foreground px-4 py-2 rounded-full text-xs font-medium border border-dark-border backdrop-blur-md shadow-sm">
                      Score: {edu.score}
                    </span>
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
