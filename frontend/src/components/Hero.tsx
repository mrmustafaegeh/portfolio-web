import { ReactNode } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiArrowNarrowRight, HiSparkles } from "react-icons/hi";
import { SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

interface SocialLink {
  icon: ReactNode;
  link: string;
  label: string;
}

interface Stat {
  label: string;
  value: string;
}

const Hero = () => {
  const me = "/me2.webp";
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

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
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-50 dark:bg-[#030712] transition-colors duration-500">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-teal-500/20 blur-[120px] animate-blob-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px] animate-blob-medium" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px] animate-blob-fast" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-sm font-semibold mb-8 shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for New Projects
          </motion.div>
          
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 text-slate-900 dark:text-white"
          >
            Crafting <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent">Digital</span> <br />
            Excellence.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium"
          >
            I'm <span className="text-slate-900 dark:text-white font-bold">Mustafa Egeh</span>, a Creative Developer pushing the boundaries of the modern web with high-performance experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 mb-16">
            <a
              href="#projects"
              className="relative group flex items-center gap-3 px-10 py-5 rounded-2xl bg-teal-500 text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-teal-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              Start a Project
              <HiArrowNarrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-6 px-4">
              {socialLinks.map((social, idx) => (
                <motion.a 
                   key={idx}
                   href={social.link} 
                   target="_blank" 
                   whileHover={{ y: -5, scale: 1.1 }}
                   className="text-3xl text-slate-400 hover:text-teal-500 transition-colors"
                   aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats/Features */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-black text-slate-900 dark:text-white">{stat.value}</span>
                <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-500">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Interactive Visual */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            style={{ y: y1 }}
            className="relative z-20"
          >
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 to-purple-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] border-[12px] border-white dark:border-slate-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <img 
                  src={me} 
                  alt="Mustafa Egeh" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                  // @ts-ignore
                  fetchpriority="high"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Floating Tech Stack */}
            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-1/4 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-white/20 z-30"
            >
              <div className="flex flex-col gap-4">
                <SiReact className="text-3xl text-[#61DAFB]" />
                <SiTailwindcss className="text-3xl text-[#06B6D4]" />
                <SiFramer className="text-3xl text-slate-900 dark:text-white" />
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-12 bottom-1/4 p-6 rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-white/20 z-30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/40">
                  <HiSparkles className="text-2xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-tighter">Full Stack</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Performance Driven</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Background shapes */}
          <motion.div
            style={{ y: y2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] -z-10 opacity-30 dark:opacity-20"
          >
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-teal-500">
              <path d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.5,-31.3,86.7,-15.7,85.4,-0.8C84,14.1,78.2,28.2,70.1,41.2C62,54.2,51.7,66.1,38.7,73.4C25.7,80.7,10,83.4,-4.8,81.6C-19.5,79.9,-33.4,73.7,-46.4,66.4C-59.4,59.1,-71.5,50.7,-78.9,38.7C-86.3,26.7,-89.1,11.1,-87.3,-3.9C-85.5,-18.9,-79.1,-33.3,-69.8,-45.3C-60.5,-57.3,-48.3,-66.9,-35.1,-74.3C-21.9,-81.7,-7.6,-86.9,6,-97.2C19.6,-107.5,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
