/// <reference types="@react-three/fiber" />
import { ReactNode, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import gsap from "gsap";

interface SocialLink {
  icon: ReactNode;
  link: string;
  label: string;
}

interface Stat {
  label: string;
  value: string;
}

const AnimatedText = ({ text, className }: { text: string, className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".split-char",
        { opacity: 0, y: 50, rotateX: 90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.05,
          ease: "back.out(1.7)",
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, [text]);

  return (
    <div ref={containerRef} className={className} style={{ perspective: "1000px" }}>
      {text.split("").map((char, i) => (
        <span key={i} className="split-char inline-block origin-bottom" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
          {char === " " ? " " : char}
        </span>
      ))}
    </div>
  );
};

const Hero = () => {
  useEffect(() => {
    const handleResize = () => {
        // window size listener if needed
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const socialLinks: SocialLink[] = [
    { icon: <AiFillGithub />, link: "https://github.com/mrmustafaegeh", label: "GitHub" },
    { icon: <AiFillLinkedin />, link: "https://www.linkedin.com/in/mr-mustafaegeh/", label: "LinkedIn" },
    { icon: <AiFillInstagram />, link: "https://instagram.com/", label: "Instagram" }
  ];

  const stats: Stat[] = [
    { label: "Years Exp.", value: "2+" },
    { label: "Projects", value: "12+" },
    { label: "Happy Clients", value: "10+" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden transition-colors duration-500 z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-20">
        {/* Centered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center w-full"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-medium mb-8 shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for New Projects
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-slate-800 dark:text-white max-w-4xl">
            <AnimatedText text="Crafting " className="inline-block" />
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              <AnimatedText text="Digital" />
            </span>
            <br className="hidden md:block" />
            <AnimatedText text=" Excellence." className="inline-block" />
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-slate-700 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            I'm <span className="text-slate-800 dark:text-white font-bold">Mustafa Egeh</span>, a Creative Developer pushing the boundaries of the modern web with high-performance experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <a
              href="#projects"
              className="relative group flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-teal-500 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/25 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              Start a Project
              <HiArrowNarrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center justify-center gap-6 px-4">
              {socialLinks.map((social, idx) => (
                <motion.a 
                   key={idx}
                   href={social.link} 
                   target="_blank" 
                   whileHover={{ y: -5, scale: 1.1 }}
                   className="text-3xl text-slate-500 hover:text-teal-500 transition-colors"
                   aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 p-8 sm:p-10 rounded-[2.5rem] bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl w-full max-w-4xl"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <span className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-2">{stat.value}</span>
                <span className="text-xs md:text-sm uppercase tracking-widest font-bold text-slate-500 dark:text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
