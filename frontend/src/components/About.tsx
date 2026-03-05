import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechIcon from "../ui/TechIcons";
import { blobAssets } from "../data/blobAssets";

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  icon: string;
}

const BioText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const lines = containerRef.current.querySelectorAll('.reveal-line');
    
    gsap.fromTo(lines, 
      { y: 100, opacity: 0, rotateX: 45 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.15,
        ease: "power4.out",
        duration: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className="space-y-6 perspective-1000">
      <div className="overflow-hidden">
        <h3 className="reveal-line text-xl md:text-2xl font-semibold text-slate-700 dark:text-slate-200">
          Transforming Ideas into Reality
        </h3>
      </div>
      <div className="overflow-hidden">
        <p className="reveal-line text-base text-slate-600 dark:text-slate-400 leading-7">
          Based in Germany, I'm a passionate developer who loves bridging the gap between design and technology. My journey in development started with curiosity and has evolved into a career focused on delivering high-quality, scalable solutions.
        </p>
      </div>
      <div className="overflow-hidden">
        <p className="reveal-line text-base text-slate-600 dark:text-slate-400 leading-7">
          I specialize in creating interactive web applications that are not just visually stunning but also technically robust. Every project I undertake is a blend of code efficiency and user-centric design.
        </p>
      </div>
      
      <div className="pt-8 grid grid-cols-2 gap-6">
        <div className="overflow-hidden">
          <div className="reveal-line">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-2">Education</h4>
            <p className="text-teal-600 dark:text-teal-400 font-medium text-base">Software Engineering Focus</p>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="reveal-line">
            <h4 className="text-sm font-semibold tracking-widest uppercase text-slate-700 dark:text-slate-300 mb-2">Location</h4>
            <p className="text-teal-600 dark:text-teal-400 font-medium text-base">Available Worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechCarousel = ({ isMobile }: { isMobile: boolean }) => {
  const skills: Skill[] = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "expressjs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "TypeScript", icon: "typescript" },
  ];
  const radius = isMobile ? 140 : 250;
  
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center" style={{ perspective: "1500px" }}>
      <style>
        {`
          @keyframes spinY {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
          .carousel-spin {
            animation: spinY 25s linear infinite;
            transform-style: preserve-3d;
          }
          .carousel-spin:hover {
            animation-play-state: paused;
          }
          .carousel-item {
            transform-style: preserve-3d;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      {/* Central Profile Image */}
      <div className="absolute z-10 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-teal-500/40 dark:border-teal-400/30 overflow-hidden shadow-[0_20px_50px_rgba(20,184,166,0.3)] bg-slate-900 group">
        <img 
          src={blobAssets["me2.webp"]} 
          alt="Mustafa Egeh" 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
      </div>

      <div className="absolute w-full h-full carousel-spin flex items-center justify-center">
        {skills.map((skill, i) => {
          const angle = (360 / skills.length) * i;
          return (
            <div 
              key={i} 
              className="absolute carousel-item w-28 h-28 bg-slate-900/80 backdrop-blur-xl rounded-3xl flex flex-col items-center justify-center border border-teal-500/20 hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-xl shadow-teal-500/0 hover:shadow-teal-500/50 cursor-crosshair group"
              style={{ transform: `rotateY(${angle}deg) translateZ(${radius}px)` }}
            >
              <div className="group-hover:-translate-y-2 transition-transform duration-300 mb-2">
                 <TechIcon tech={skill.icon} className="w-12 h-12" />
              </div>
              <span className="text-white font-bold text-xs uppercase tracking-wider opacity-60 group-hover:opacity-100 group-hover:text-teal-400 transition-colors">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = window.innerWidth < 768;
    setIsMobile(mobileCheck);

    if (!mobileCheck && containerRef.current) {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!prefersReduced) {
        gsap.to(".layer-bg", { y: -150, scrollTrigger: { trigger: containerRef.current, scrub: 0.5 } });
        gsap.to(".layer-mid", { y: -80, scrollTrigger: { trigger: containerRef.current, scrub: 0.5 } });
        gsap.to(".layer-fg", { y: -250, scrollTrigger: { trigger: containerRef.current, scrub: 0.5 } });
      }
    }
  }, []);

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background Parallax Layer */}
      <div className="layer-bg absolute inset-0 z-0 pointer-events-none opacity-20 flex justify-center items-center">
        <div className="w-[800px] h-[800px] border border-teal-500/20 rounded-full border-dashed animate-spin-slow" />
        <div className="absolute w-[600px] h-[600px] border border-purple-500/20 outline outline-offset-4 outline-purple-500/10 rounded-full animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-800 dark:text-white">
            About Me
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full shadow-lg shadow-teal-500/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Midground Layer */}
          <div className="layer-mid relative z-10 drop-shadow-2xl">
            <BioText />
          </div>

          {/* Foreground Layer */}
          <div className="layer-fg relative z-20">
             <TechCarousel isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
