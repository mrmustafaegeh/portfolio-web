import { useEffect, useRef, useState } from "react";
import { Project } from "../types/project";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

interface Project3DCardProps {
  project: Project;
  darkMode: boolean;
  techLabels: Record<string, string>;
}

const Project3DCard = ({ project, darkMode, techLabels }: Project3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setFlipped] = useState(false);
  useEffect(() => {
    const mobileCheck = window.innerWidth < 768;

    if (cardRef.current && !mobileCheck) {
      VanillaTilt.init(cardRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.4,
        perspective: 1000,
      });
    }

    return () => {
      if (cardRef.current && (cardRef.current as any).vanillaTilt) {
        (cardRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div className="project-card flex-shrink-0 w-[90vw] md:max-w-[480px] max-h-[420px] h-[70vh] mr-8 perspective-1200" style={{ transformStyle: 'preserve-3d' }}>
      <motion.div
        ref={cardRef}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
        onClick={() => setFlipped(!isFlipped)}
        className={`relative w-full h-full rounded-[2.5rem] cursor-pointer group ${
          darkMode ? "bg-slate-900 shadow-teal-500/10" : "bg-white shadow-xl"
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Neon Border on hover via Conic Gradient */}
        <div className="absolute inset-0 rounded-[2.5rem] p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'translateZ(-1px)', background: 'conic-gradient(from 180deg at 50% 50%, #14b8a6, #3b82f6, #8b5cf6, #14b8a6)' }} />

        <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden bg-white dark:bg-slate-900 backface-hidden flex flex-col" style={{ backfaceVisibility: 'hidden' }}>
          <div className="relative w-full h-[220px] shrink-0 bg-slate-100 dark:bg-slate-800 overflow-hidden">
             <img src={project.src} alt={project.alt} className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700" />
          </div>
          
          <div className="p-5 flex flex-col flex-1" style={{ transform: 'translateZ(30px)' }}>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2" style={{ transform: 'translateZ(50px)' }}>{project.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed" style={{ transform: 'translateZ(40px)' }}>{project.description}</p>
            <div className="flex gap-2 flex-wrap mt-auto" style={{ transform: 'translateZ(30px)' }}>
              {project.tech.slice(0, 3).map((t) => (
                <span key={t} className="px-2 py-1 bg-slate-100 dark:bg-white/10 rounded-full text-xs font-semibold text-slate-700 dark:text-teal-400 border border-slate-200 dark:border-teal-400/30">
                  {techLabels[t] || t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back face */}
        <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden bg-slate-900 dark:bg-slate-800 p-8 backface-hidden flex flex-col" style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
          <div className="flex justify-between items-start mb-4">
             <h3 className="text-lg font-bold text-white">{project.title}</h3>
             <button onClick={(e) => { e.stopPropagation(); setFlipped(false); }} className="text-slate-400 hover:text-white transition-colors" aria-label="Close">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
          
          <p className="text-sm text-slate-300 leading-relaxed mb-6">{project.challenges || project.description}</p>
          
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">🛠️ Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="bg-teal-500/20 text-teal-300 text-xs px-2 py-1 rounded-full">
                  {techLabels[t] || t}
                </span>
              ))}
            </div>
          </div>

          {project.outcome && (
            <div className="mb-6 flex-1">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">✨ Key Features:</h4>
              <ul className="text-sm text-slate-400 space-y-2">
                 <li className="flex items-start gap-2"><span className="text-teal-500 mt-1">•</span>{project.outcome}</li>
              </ul>
            </div>
          )}
          
          <div className="flex gap-4 mt-auto">
            {project.liveDemo && (
              <a href={project.liveDemo} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="bg-teal-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-teal-400 transition">
                🔗 Live Demo
              </a>
            )}
            {project.gitHub && (
              <a href={project.gitHub} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} className="border border-slate-500 text-slate-300 text-sm px-4 py-2 rounded-lg hover:border-teal-400 hover:text-teal-400 transition">
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Project3DCard;
