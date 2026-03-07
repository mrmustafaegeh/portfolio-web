import { lazy, Suspense, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";

const Hero3D = lazy(() => import("./Hero3D"));

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer — React · Node · TypeScript";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const titleWords = ["ENGINEERING", "DIGITAL", "EXCELLENCE."];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center bg-darkBg overflow-hidden">
      {/* 3D Background - limited to right side on desktop */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-0 opacity-40 md:opacity-80">
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-2/3 flex flex-col items-start text-left">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap gap-x-4 gap-y-2 mb-8"
          >
            {titleWords.map((word, idx) => (
              <motion.h1
                key={idx}
                variants={wordVariants}
                className="text-5xl md:text-7xl lg:text-8xl font-bold font-syne text-white uppercase leading-none tracking-tight"
              >
                {word}
              </motion.h1>
            ))}
          </motion.div>

          {/* Typewriter text */}
          <div className="h-6 md:h-8 mb-12">
            <p className="font-space text-white/70 text-sm md:text-base uppercase tracking-widest">
              {text}
              <span className="animate-pulse text-accent">|</span>
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 bg-accent text-black font-space text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 text-center"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-10 py-4 border border-white/30 text-white font-space text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors duration-300 text-center"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
