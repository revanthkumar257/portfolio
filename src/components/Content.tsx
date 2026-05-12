"use client";

import { motion } from "framer-motion";
import { Youtube, ExternalLink } from "lucide-react";

export default function Content() {
  return (
    <section id="content" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-dark-surface border border-dark-border p-10 md:p-16 rounded-3xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-600/10 blur-[100px] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-dark-bg border border-dark-border rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.2)]">
                <Youtube size={40} className="text-red-600" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                Tech Content <span className="text-red-500">&</span> Education
              </h2>
              
              <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                Beyond building systems, I share my knowledge and experiments on YouTube. Follow along for insights into AI, Data Analytics, and Full-Stack Development.
              </p>

              <a
                href="https://www.youtube.com/@Revanthkumar-iw2ps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-red-600 text-white font-bold hover:bg-red-700 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              >
                Visit YouTube Channel
                <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
