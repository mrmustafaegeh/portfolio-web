/// <reference types="@react-three/fiber" />
import { ReactNode, useEffect, useRef, useState, useMemo } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { blobAssets } from "../data/blobAssets";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiArrowNarrowRight, HiSparkles } from "react-icons/hi";
import { SiReact, SiTailwindcss, SiFramer } from "react-icons/si";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useTexture, shaderMaterial } from "@react-three/drei";

interface SocialLink {
  icon: ReactNode;
  link: string;
  label: string;
}

interface Stat {
  label: string;
  value: string;
}

const GlitchMaterial = shaderMaterial(
  { uTime: 0, uTexture: null, uHover: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uHover;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      float scanline = sin(uv.y * 800.0 + uTime * 10.0) * 0.04;
      vec4 tex = texture2D(uTexture, uv);
      
      tex.rgb -= scanline * (1.0 - uHover);
      
      if(uHover > 0.0) {
        float r = texture2D(uTexture, uv + vec2(0.01 * uHover * sin(uTime * 20.0), 0.0)).r;
        float g = texture2D(uTexture, uv).g;
        float b = texture2D(uTexture, uv - vec2(0.01 * uHover * cos(uTime * 20.0), 0.0)).b;
        tex.rgb = mix(tex.rgb, vec3(r, g, b), uHover);
      }
      
      gl_FragColor = tex;
    }
  `
);
extend({ GlitchMaterial });

const HeroImage = ({ src }: { src: string }) => {
  const texture = useTexture(src);
  const materialRef = useRef<any>(null);
  const { viewport } = useThree();
  const [hovered, setHovered] = useState(false);
  const prefersReduced = useMemo(() => window.matchMedia("(prefers-reduced-motion: reduce)").matches, []);

  useFrame((state) => {
    if (materialRef.current && !prefersReduced) {
      materialRef.current.uTime = state.clock.elapsedTime;
      materialRef.current.uHover = THREE.MathUtils.lerp(
        materialRef.current.uHover,
        hovered ? 1 : 0,
        0.1
      );
    }
  });

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <planeGeometry args={[viewport.width, viewport.height]} />
      {/* @ts-ignore */}
      <glitchMaterial ref={materialRef} uTexture={texture} />
    </mesh>
  );
};

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
  const me = blobAssets["me2.webp"];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid lg:grid-cols-12 gap-16 items-center relative z-20">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 text-left"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-medium mb-8 shadow-inner"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
            </span>
            Available for New Projects
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-8 text-slate-800 dark:text-white">
            <AnimatedText text="Crafting " className="inline-block" />
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
              <AnimatedText text="Digital" />
            </span>
            <br />
            <AnimatedText text="Excellence." className="inline-block" />
          </h1>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-700 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed"
          >
            I'm <span className="text-slate-800 dark:text-white font-bold">Mustafa Egeh</span>, a Creative Developer pushing the boundaries of the modern web with high-performance experiences.
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

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-8 p-8 rounded-3xl bg-white/50 dark:bg-white/5 backdrop-blur-md border border-slate-200 dark:border-white/10 shadow-xl"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-3xl font-bold text-slate-800 dark:text-white">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest font-semibold text-slate-700 dark:text-slate-500">{stat.label}</span>
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
            <div className="relative group mx-auto max-w-[260px] md:max-w-none md:w-[320px]">
              <div className="absolute -inset-4 bg-gradient-to-tr from-teal-500 to-purple-500 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-teal-500/40 dark:border-teal-400/30 shadow-[0_25px_60px_rgba(20,184,166,0.15)] transition-transform duration-500 group-hover:scale-[1.02] bg-slate-900">
                {!isMobile ? (
                  <Canvas className="w-full h-full absolute inset-0">
                    <ambientLight intensity={1} />
                    <HeroImage src={me} />
                  </Canvas>
                ) : (
                  <img 
                    src={me} 
                    alt="Mustafa Egeh" 
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </div>

            <motion.div
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 md:-right-12 top-1/4 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-white/20 z-30"
            >
              <div className="flex flex-col gap-4">
                <SiReact className="w-10 h-10 text-[#61DAFB]" />
                <SiTailwindcss className="w-10 h-10 text-[#06B6D4]" />
                <SiFramer className="w-10 h-10 text-slate-800 dark:text-white" />
              </div>
            </motion.div>

            <motion.div
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -left-6 bottom-4 p-3 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-[0_25px_60px_rgba(20,184,166,0.15)] border border-white/20 dark:border-slate-700/50 z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/40">
                  <HiSparkles className="text-lg" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-tighter">Full Stack</p>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 font-medium">Performance Driven</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
