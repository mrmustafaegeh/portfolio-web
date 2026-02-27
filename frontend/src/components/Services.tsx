import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineGlobeAlt, HiOutlineLightningBolt } from "react-icons/hi";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorHex: string;
}

const MagneticCard = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!wrapperRef.current) return;
    const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;
    
    // Lerp is implicitly active with CSS transition
    setPosition({ x: x * 0.2, y: y * 0.2 }); 
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`p-6 ${className}`} // Padding acts as the magnetic trigger zone
    >
      <div 
        className="w-full h-full transition-transform duration-300 ease-out will-change-transform" 
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

const SpinningIcon = ({ icon, colorHex }: { icon: React.ReactNode, colorHex: string }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <div 
      className="relative w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-300 border backdrop-blur-md mb-4"
      style={{
        backgroundColor: hovered ? colorHex : colorHex + '20', 
        borderColor: hovered ? '#fff' : 'transparent',
        color: hovered ? '#fff' : colorHex,
        transformStyle: 'preserve-3d',
        animation: hovered ? 'flipFast 0.6s cubic-bezier(0.4, 0, 0.2, 1)' : 'spinSlow 12s linear infinite'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <style>{`
        @keyframes spinSlow { 100% { transform: rotateY(360deg); } }
        @keyframes flipFast { 100% { transform: rotateY(360deg) scale(1.15); } }
      `}</style>
      <div className="w-6 h-6" style={{ transform: 'translateZ(10px)' }}>{icon}</div>
    </div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLElement>(null);

  const offerings: Service[] = [
    {
      title: "UI Development",
      description: "Developing visually stunning and responsive user interfaces that provide seamless experiences across all devices.",
      icon: <HiOutlineCode className="w-full h-full" />,
      colorHex: "#3b82f6"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web performance for ultra-fast load times and high Lighthouse scores, ensuring better SEO and user retention.",
      icon: <HiOutlineLightningBolt className="w-full h-full" />,
      colorHex: "#14b8a6"
    },
    {
      title: "App Modernization",
      description: "Modernizing legacy applications with the latest frameworks like Next.js and React for better scalability.",
      icon: <HiOutlineDeviceMobile className="w-full h-full" />,
      colorHex: "#a855f7"
    },
    {
      title: "Full-Stack Solutions",
      description: "Building robust, scalable backends with Express and Node.js to power your interactive web applications.",
      icon: <HiOutlineGlobeAlt className="w-full h-full" />,
      colorHex: "#f97316"
    }
  ];

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || window.innerWidth < 768) return;

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".service-card");
      gsap.fromTo(cards, 
        { z: -800, opacity: 0, rotateX: 45, y: 150 },
        {
          z: 0,
          opacity: 1,
          rotateX: 0,
          y: 0,
          stagger: 0.15,
          duration: 1.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%"
          }
        }
      );
    }
  }, []);

  return (
    <section id="services" className="py-16 relative flex items-center" ref={containerRef}>
      {/* Background Beam Spotlight Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         <div 
           className="absolute top-1/2 left-1/2 w-[150vw] h-[150vw] -translate-x-1/2 -translate-y-1/2 opacity-30 mix-blend-screen"
           style={{
             background: 'conic-gradient(from 0deg, transparent 0deg, rgba(20, 184, 166, 0.1) 60deg, transparent 120deg)',
             animation: 'spinBeam 20s linear infinite'
           }}
         />
         <style>{`
           @keyframes spinBeam { 100% { transform: translate(-50%, -50%) rotate(360deg); } }
         `}</style>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10" style={{ perspective: "1500px" }}>
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-800 dark:text-white drop-shadow-sm dark:drop-shadow-none">
            My Expertise
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I provide end-to-end development solutions focused on speed, accessibility, and breathtaking modern aesthetics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {offerings.map((service, idx) => (
            <MagneticCard key={idx}>
              <div 
                 className="service-card h-full min-h-[240px] max-h-[280px] p-6 rounded-2xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-xl border border-slate-200 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-900 transition-colors shadow-lg hover:shadow-xl dark:shadow-none flex flex-col group overflow-hidden"
              >
                <SpinningIcon icon={service.icon} colorHex={service.colorHex} />
                <h3 className="text-lg font-semibold mt-4 text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-800 group-hover:to-slate-600 dark:group-hover:from-white dark:group-hover:to-slate-400 transition-all">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 mt-2">
                  {service.description}
                </p>
              </div>
            </MagneticCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
