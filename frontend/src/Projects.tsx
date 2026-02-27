import { useState, useEffect, useRef } from "react";
import { projectContent, techLabels, getFilteredProjects } from "./data/projects";
import { FILTERS } from "./data/filters";
import Project3DCard from "./components/Project3DCard";
import EmptyState from "./components/EmptyState";
import { Project } from "./types/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsProps {
  darkMode?: boolean;
}

export default function Projects({ darkMode = false }: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const filteredProjects: Project[] = getFilteredProjects(projectContent, activeFilter);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !trackRef.current || !containerRef.current) return;
    
    // Clear previous ScrollTriggers to handle re-renders (filter change)
    ScrollTrigger.getAll().forEach((st) => {
      if (st.trigger === containerRef.current || st.vars.containerAnimation) st.kill();
    });

    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      // Create Horizontal Scroll Track
      const trackWidth = trackRef.current.scrollWidth;
      
      const scrollTween = gsap.to(trackRef.current, {
        x: () => -(trackWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + trackWidth,
        }
      });

      // Staggered entry from below as they scroll into view horizontally
      const cards = gsap.utils.toArray(".project-card", trackRef.current) as HTMLElement[];
      cards.forEach((card) => {
        gsap.fromTo(card, 
          { y: 120, opacity: 0, rotateX: 30 },
          {
            y: 0, 
            opacity: 1, 
            rotateX: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              containerAnimation: scrollTween,
              start: "left right-=10%", 
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      return () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === containerRef.current || st.vars.containerAnimation) st.kill();
        });
      };
    }
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full z-10 p-6 md:p-12 text-center pointer-events-none">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-slate-800 dark:text-white drop-shadow-sm dark:drop-shadow-none pointer-events-auto">
          My Projects
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 pointer-events-auto mix-blend-difference dark:mix-blend-normal opacity-90">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all focus:outline-none pointer-events-auto ${
                activeFilter === filter.key
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20"
                  : "bg-slate-200/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 backdrop-blur-md"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-40 md:mt-0 lg:h-screen flex items-center">
        {filteredProjects.length > 0 ? (
          <div ref={trackRef} className="projects-track flex items-center md:h-screen pl-[10vw] pr-[10vw] pt-[15vh] pb-[5vh] space-x-12 overflow-x-visible will-change-transform">
            {filteredProjects.map((project) => (
              <Project3DCard
                key={project.id}
                project={project}
                darkMode={darkMode}
                techLabels={techLabels}
              />
            ))}
          </div>
        ) : (
          <div className="w-full flex justify-center mt-32 relative z-20">
             <EmptyState darkMode={darkMode} />
          </div>
        )}
      </div>
    </section>
  );
}
