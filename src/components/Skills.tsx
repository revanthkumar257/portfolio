"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Data & Analytics",
      skills: ["Power BI", "MySQL", "Advanced SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    },
    {
      title: "ML & AI",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Generative AI"],
    },
    {
      title: "Frameworks & Tools",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "FAISS", "React", "Next.js"],
    },
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C", "HTML/CSS"],
    },
  ];

  return (
    <section id="skills" className="py-24 relative bg-dark-surface/30">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-foreground tracking-tight text-center">
          Technical <span className="text-brand-500">Arsenal.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-bg border border-dark-border rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-white border-b border-dark-border pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 bg-dark-surface text-zinc-300 rounded-full text-sm font-medium border border-dark-border hover:border-brand-500 hover:text-brand-500 transition-colors cursor-default"
                  >
                    {skill}
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
