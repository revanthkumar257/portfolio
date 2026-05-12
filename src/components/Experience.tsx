"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Data Scientist Intern",
      company: "Futurense Technologies",
      date: "June 2025 - August 2025",
      icon: <Briefcase size={20} />,
      points: [
        "Processed and analyzed 10,000+ multi-source student and marketing records, enabling data-driven strategic decisions.",
        "Performed ROI and conversion analysis across Facebook, Google, and LinkedIn campaigns, influencing budget reallocation.",
        "Segmented leads using demographic and behavioral attributes, uncovering that 45% of high-quality leads were B.Tech students.",
        "Designed a data-driven budget optimization model to dynamically reallocate ad spend based on historical conversion performance.",
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
      icon: <GraduationCap size={20} />
    },
    {
      degree: "Intermediate",
      institution: "Tirumala Junior College, Visakhapatnam",
      date: "2020 - 2022",
      score: "Percentage: 94.70%",
      icon: <GraduationCap size={20} />
    }
  ];

  const certifications = [
    "Infosys Springboard: Principles of Generative AI (May 2025)",
    "Microsoft Certified: Azure Data Scientist Associate (Dec 2024)",
    "Microsoft Certified: Azure Data Fundamentals (Oct 2024)"
  ];

  return (
    <section id="experience" className="py-24 relative bg-dark-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground tracking-tight flex items-center gap-3">
              <Briefcase className="text-brand-500" /> Experience
            </h2>
            <div className="relative border-l border-dark-border ml-3 pl-8 pb-4">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="mb-12 relative"
                >
                  <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-dark-surface bg-brand-500" />
                  <span className="text-brand-500 text-sm font-bold tracking-wider uppercase mb-2 block">{exp.date}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-zinc-400 mb-4">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="text-zinc-400 leading-relaxed flex items-start">
                        <span className="text-brand-500 mr-2 mt-1.5 leading-none">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-foreground tracking-tight flex items-center gap-3">
                <GraduationCap className="text-brand-500" /> Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-dark-bg border border-dark-border p-6 rounded-2xl relative overflow-hidden group hover:border-brand-500/50 transition-colors"
                  >
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                      <GraduationCap size={100} className="text-brand-500" />
                    </div>
                    <span className="text-brand-500 text-sm font-bold tracking-wider uppercase mb-1 block">{edu.date}</span>
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <h4 className="text-zinc-400 mb-3">{edu.institution}</h4>
                    <span className="inline-block bg-dark-surface text-zinc-300 px-3 py-1 rounded-full text-sm border border-dark-border font-medium">
                      {edu.score}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground tracking-tight flex items-center gap-3">
                <Award className="text-brand-500" /> Certifications
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-center gap-4 bg-dark-bg border border-dark-border p-4 rounded-xl"
                  >
                    <div className="bg-dark-surface p-2 rounded-lg border border-dark-border text-brand-500">
                      <Award size={20} />
                    </div>
                    <p className="text-zinc-300 font-medium">{cert}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
