"use client";

import { motion } from "framer-motion";
import { FaPython, FaReact, FaDatabase, FaGithub, FaDocker, FaJava } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiNextdotjs } from "react-icons/si";

export default function TechMarquee() {
  const icons = [
    { Icon: FaPython, color: "#3776AB", name: "Python" },
    { Icon: SiTensorflow, color: "#FF6F00", name: "TensorFlow" },
    { Icon: FaReact, color: "#61DAFB", name: "React" },
    { Icon: SiPytorch, color: "#EE4C2C", name: "PyTorch" },
    { Icon: FaDatabase, color: "#4479A1", name: "SQL" },
    { Icon: SiScikitlearn, color: "#F7931E", name: "Scikit-learn" },
    { Icon: SiNextdotjs, color: "var(--foreground)", name: "Next.js" },
    { Icon: FaDocker, color: "#2496ED", name: "Docker" },
    { Icon: FaGithub, color: "var(--foreground)", name: "GitHub" },
    { Icon: FaJava, color: "#007396", name: "Java" },
  ];

  // Double the array for seamless infinite scroll
  const doubledIcons = [...icons, ...icons];

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Gradient Fades for edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex gap-16 md:gap-24 items-center w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30, // adjust speed
        }}
      >
        {doubledIcons.map((item, idx) => {
          const { Icon } = item;
          return (
            <motion.div 
              key={idx} 
              className="flex flex-col items-center justify-center gap-3 cursor-grab active:cursor-grabbing group"
              drag
              dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              dragElastic={0.4}
              whileDrag={{ scale: 1.2, zIndex: 50 }}
            >
              <div 
                className="w-16 h-16 md:w-20 md:h-20 glass-panel rounded-2xl flex items-center justify-center shadow-lg group-hover:-translate-y-2 transition-transform duration-300 relative"
              >
                <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <Icon size={40} color={item.color} className="opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
