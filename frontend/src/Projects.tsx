import { useState } from "react";
import { projectContent, getFilteredProjects } from "./data/projects";
import { FILTERS } from "./data/filters";
import EmptyState from "./components/EmptyState";
import { Project } from "./types/project";
import { motion } from "framer-motion";

interface ProjectsProps {
  darkMode?: boolean;
}

export default function Projects({}: ProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const filteredProjects: Project[] = getFilteredProjects(projectContent, activeFilter);

  // Extract the top 3 projects for the featured layout
  const featuredProjects = filteredProjects.slice(0, 3);
  const regularProjects = filteredProjects.slice(3);

  return (
    <section id="projects" className="py-32 relative bg-darkBg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-syne text-white mb-4">
              WORK
            </h2>
            <p className="font-space text-white/50 text-sm md:text-base">
              A curated selection of recent projects.
            </p>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="flex flex-wrap gap-6 mt-8 md:mt-0"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`relative font-space text-xs uppercase tracking-widest pb-1 transition-colors ${
                  activeFilter === filter.key
                    ? "text-accent"
                    : "text-white/40 hover:text-white"
                }`}
              >
                {filter.label}
                {activeFilter === filter.key && (
                  <motion.div 
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1px] bg-accent"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Content */}
        {filteredProjects.length > 0 ? (
          <div className="space-y-16">
            
            {/* Featured Projects (Top 3) */}
            {featuredProjects.map((featuredProject, index) => (
              <motion.div 
                key={featuredProject.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group block relative w-full border border-white/10 bg-[#0a0a0a] p-6 md:p-10 transition-all duration-500 hover:border-white/30"
                style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
              >
                <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center transition-transform duration-500 group-hover:rotate-x-2 group-hover:-rotate-y-2`}>
                  <div className="w-full md:w-[60%] overflow-hidden bg-black/50 border border-white/5 aspect-video relative">
                    <img 
                      src={featuredProject.src} 
                      alt={featuredProject.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 left-4 bg-accent text-black text-[10px] font-bold font-space uppercase px-3 py-1">
                      Featured
                    </div>
                  </div>
                  
                  <div className="w-full md:w-[40%] flex flex-col justify-center">
                    <h3 className="text-3xl font-syne font-bold text-white mb-4 group-hover:text-accent transition-colors">
                      {featuredProject.title}
                    </h3>
                    <p className="text-white/50 font-space text-sm leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                       {featuredProject.tech.slice(0, 4).map((t: string) => (
                         <span key={t} className="text-white/40 text-xs font-space border border-white/10 px-2 py-1">
                           {t}
                         </span>
                       ))}
                    </div>
                    <div className="flex gap-4">
                      {featuredProject.liveDemo && (
                        <a href={featuredProject.liveDemo} target="_blank" rel="noreferrer" className="text-xs uppercase font-space tracking-widest text-white border-b border-white hover:text-accent hover:border-accent transition-colors">
                          Live Site
                        </a>
                      )}
                      {featuredProject.gitHub && (
                        <a href={featuredProject.gitHub} target="_blank" rel="noreferrer" className="text-xs uppercase font-space tracking-widest text-white/50 border-b border-white/30 hover:text-white transition-colors">
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Regular Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx % 3) * 0.1 }}
                  className="group relative h-[400px] w-full [perspective:1000px] cursor-pointer"
                >
                  <div className="absolute inset-0 w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full bg-[#0a0a0a] border border-white/5 [backface-visibility:hidden] flex flex-col overflow-hidden">
                      <div className="w-full h-48 bg-black/50 border-b border-white/5 relative shrink-0">
                        <img 
                          src={project.src} 
                          alt={project.title} 
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-syne font-bold text-white mb-3">
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.tech.slice(0, 3).map((t: string) => (
                            <span key={t} className="text-accent/80 text-[10px] uppercase tracking-wider font-space border border-white/10 px-2 py-1">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full bg-[#050505] border border-white/20 p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
                      <h3 className="text-xl font-syne font-bold text-accent mb-4">
                        {project.title}
                      </h3>
                      <div className="text-white/60 font-space text-sm leading-relaxed overflow-y-auto pr-2 flex-grow mb-4">
                        <p>{project.description}</p>
                        {project.challenges && (
                          <p className="mt-4"><strong className="text-white/80">Challenge:</strong> {project.challenges}</p>
                        )}
                        {project.outcome && (
                          <p className="mt-4"><strong className="text-white/80">Outcome:</strong> {project.outcome}</p>
                        )}
                      </div>
                      
                      <div className="flex gap-4 pt-4 border-t border-white/10 shrink-0">
                        {project.liveDemo && (
                          <a href={project.liveDemo} target="_blank" rel="noreferrer" className="text-[10px] uppercase font-space tracking-widest text-accent border-b border-accent hover:text-white hover:border-white transition-colors">
                            Live Demo
                          </a>
                        )}
                        {project.gitHub && (
                          <a href={project.gitHub} target="_blank" rel="noreferrer" className="text-[10px] uppercase font-space tracking-widest text-white/50 border-b border-white/30 hover:text-white transition-colors">
                            Code
                          </a>
                        )}
                      </div>
                    </div>
                    
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ) : (
          <div className="w-full flex justify-center py-20 border border-white/5 bg-[#0a0a0a]">
            <EmptyState darkMode={true} />
          </div>
        )}
      </div>
    </section>
  );
}
