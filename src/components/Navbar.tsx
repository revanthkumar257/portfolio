"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Arsenal", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-[var(--brand-500)] transition-colors">
          Revanth<span className="text-[var(--brand-500)]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border)] transition-all"
            aria-label="Toggle Theme"
          >
            {mounted && (theme === "dark" || (!theme && systemTheme === "dark")) ? (
              <Sun size={18} className="text-zinc-400 hover:text-white" />
            ) : (
              <Moon size={18} className="text-zinc-500 hover:text-zinc-900" />
            )}
          </button>

          <a
            href="mailto:revanthyadavg05@gmail.com"
            className="px-5 py-2.5 rounded-full bg-[var(--brand-600)] text-white hover:bg-[var(--brand-500)] transition-colors shadow-lg"
          >
            Contact Me
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2"
          >
            {mounted && theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-zinc-500 dark:text-zinc-400 hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[var(--surface)] backdrop-blur-xl border-b border-[var(--border)] py-4 px-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-zinc-500 dark:text-zinc-400 hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:revanthyadavg05@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-5 py-2.5 rounded-full bg-[var(--brand-600)] text-white hover:bg-[var(--brand-500)] transition-colors w-fit"
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
