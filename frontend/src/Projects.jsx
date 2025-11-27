// components/Projects/Projects.jsx
import React, { useState } from "react";
import { useInView } from "./hooks/useInView";
import {
  projectContent,
  techLabels,
  getFilteredProjects,
} from "./data/projects";
import { FILTERS } from "./data/filters";
import FeaturedProjectCard from "./components/FeaturedProjectCard;";
import ProjectGridCard from "./components/ProjectGridCard;";
import EmptyState from "./components/EmptyState";

export default function Projects({ darkMode = false }) {
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [featuredRef, featuredInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [otherRef, otherInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = getFilteredProjects(projectContent, activeFilter);
  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const otherProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className={`py-24 relative overflow-hidden transition-all duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-700 transform ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2
            className={`text-5xl lg:text-6xl font-bold mb-6 ${
              darkMode ? "text-teal-400" : "text-teal-600"
            }`}
          >
            My Projects
          </h2>
          <p
            className={`text-xl leading-relaxed max-w-4xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A curated collection of my recent work showcasing modern web
            development techniques, responsive design principles, and
            exceptional user experience optimization.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-200 transform ${
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter.key
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/25"
                  : darkMode
                  ? "bg-gray-800/60 text-gray-300 hover:bg-gray-700/80 backdrop-blur-sm border border-gray-700"
                  : "bg-white/70 text-gray-700 hover:bg-white shadow-lg backdrop-blur-sm border border-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div
            ref={featuredRef}
            className={`mb-20 transition-all duration-700 delay-300 transform ${
              featuredInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3
              className={`text-3xl font-bold text-center mb-12 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              ✨ Featured Projects
            </h3>
            <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                  techLabels={techLabels}
                  animationDelay={
                    featuredInView ? `${400 + index * 150}ms` : "0ms"
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <div
            ref={otherRef}
            className={`transition-all duration-700 delay-500 transform ${
              otherInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h3
              className={`text-3xl font-bold text-center mb-12 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {activeFilter === "all" ? "🚀 More Projects" : "📁 Projects"}
            </h3>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <ProjectGridCard
                  key={project.id}
                  project={project}
                  darkMode={darkMode}
                  techLabels={techLabels}
                  animationDelay={
                    otherInView ? `${200 + index * 100}ms` : "0ms"
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && <EmptyState darkMode={darkMode} />}
      </div>
    </section>
  );
}
