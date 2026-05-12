"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeaderProps {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function AnimatedHeader({ text, className, tag = "h2" }: AnimatedHeaderProps) {
  // Split words first, then letters
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5
      },
    },
  };

  const Tag = tag;

  return (
    <Tag className={cn("overflow-hidden flex flex-wrap", className)}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap"
      >
        {words.map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block mr-[0.25em] whitespace-nowrap">
            {word.split("").map((char, charIdx) => (
              <motion.span
                key={charIdx}
                variants={child}
                className="inline-block"
                style={{ transformOrigin: "50% 50% -10px" }} // Adds a 3D rolling effect
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.div>
    </Tag>
  );
}
