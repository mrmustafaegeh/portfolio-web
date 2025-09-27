import React, { useState, useRef, useEffect } from "react";

// Mock icons since we can't import react-icons in this environment
const AiFillGithub = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const FaGlobe = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const FaExternalLinkAlt = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z" />
  </svg>
);

// Tech icons with simple designs
const TechIcon = ({ tech, className }) => {
  const icons = {
    react: (
      <svg className={className} fill="#61DAFB" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="2" />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="8"
          ry="3"
          fill="none"
          stroke="#61DAFB"
          strokeWidth="1"
          transform="rotate(120 12 12)"
        />
      </svg>
    ),
    tailwindcss: (
      <svg className={className} fill="#06B6D4" viewBox="0 0 24 24">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.45 10.9 14.93 12 18 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C16.55 7.1 15.07 6 12 6zM6 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C7.45 16.9 8.93 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.55 13.1 9.07 12 6 12z" />
      </svg>
    ),
    javascript: (
      <div
        className={`${className} bg-yellow-400 rounded flex items-center justify-center text-black font-bold text-xs`}
      >
        JS
      </div>
    ),
    html: (
      <svg className={className} fill="#E34F26" viewBox="0 0 24 24">
        <path d="M2 2h20l-2 18-8 2-8-2L2 2zm4 4v12l6 1.5L18 18V6H6z" />
        <path fill="#fff" d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" />
      </svg>
    ),
    css: (
      <svg className={className} fill="#1572B6" viewBox="0 0 24 24">
        <path d="M2 2h20l-2 18-8 2-8-2L2 2zm4 4v12l6 1.5L18 18V6H6z" />
        <path fill="#fff" d="M8 8h8v2H8V8zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" />
      </svg>
    ),
  };

  return icons[tech] || <div className={className}>?</div>;
};

// ProjectImage component
const ProjectImage = ({ src, alt, title, isFeatured, project }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div
        className={`w-full ${
          isFeatured ? "h-80" : "h-64"
        } bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 flex items-center justify-center relative overflow-hidden group`}
      >
        <div className="text-white text-center z-10">
          <div className="text-5xl mb-3">💻</div>
          <div className="font-semibold text-xl">{title}</div>
        </div>
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
          <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex gap-3">
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-110"
                title="View Code"
              >
                <AiFillGithub className="w-5 h-5" />
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-110"
                  title="Live Demo"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden group">
      <img
        src={src}
        alt={alt}
        onError={() => setImgError(true)}
        className={`w-full ${
          isFeatured ? "h-80" : "h-64"
        } object-cover transition-transform duration-500 group-hover:scale-110`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
        <div className="p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex gap-3">
            <a
              href={project.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-110"
              title="View Code"
            >
              <AiFillGithub className="w-5 h-5" />
            </a>
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-md text-white p-3 rounded-xl hover:bg-white/30 transition-all duration-200 hover:scale-110"
                title="Live Demo"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Projects({ darkMode = false }) {
  // Intersection Observer hook
  const useInView = (options = {}) => {
    const [isInView, setIsInView] = useState(false);
    const [hasViewed, setHasViewed] = useState(false);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (options.triggerOnce && !hasViewed) {
              setHasViewed(true);
            }
          } else if (!options.triggerOnce || !hasViewed) {
            setIsInView(false);
          }
        },
        {
          threshold: options.threshold || 0.1,
          rootMargin: options.rootMargin || "0px",
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options.threshold, options.triggerOnce, hasViewed]);

    return [ref, isInView || (options.triggerOnce && hasViewed)];
  };

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

  const projectContent = [
    {
      id: 1,
      title: "Pokédex App",
      description: `A fully responsive and interactive Pokédex built with React, Tailwind CSS, and PokéAPI. Users can explore detailed Pokémon info such as types, stats, images, and moves. Features include localStorage caching and dynamic modals.`,
      src: "/pokedex.png",
      alt: "Pokédex App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Pokedex-app.git",
      liveDemo: "https://pokedex-app-self.vercel.app",
      featured: true,
    },
    {
      id: 2,
      title: "Weather App",
      description: `A weather forecasting application fetching real-time data from OpenWeatherMap API. Displays temperature, humidity, and weather conditions with a minimalist UI.`,
      src: "/weatheApp.png",
      alt: "Weather App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/my-weather-app-API-.git",
      liveDemo: "https://weather-app-theta-two-40.vercel.app",
      featured: true,
    },
    {
      id: 3,
      title: "To-Do App",
      description: `An intuitive task manager allowing users to add, complete, and delete tasks in real time. Built using React with efficient state handling.`,
      src: "/Todo-App.png",
      alt: "To-Do App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Todo-App.git",
      liveDemo: "https://todo-app-two-gilt-65.vercel.app",
    },
    {
      id: 4,
      title: "Hand Game",
      description: `A fun Rock Paper Scissors game against the computer. Includes score tracking, basic animations, and responsive interface.`,
      src: "/rockPaperSi.png",
      alt: "Hand Game",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/hand-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/hand-game/",
    },
    {
      id: 5,
      title: "TodoList",
      description: `A simple task list using Vanilla JS with localStorage integration for data persistence.`,
      src: "/todolist.jpg",
      alt: "TodoList",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/todoList.git",
      liveDemo: "https://mrmustafaegeh.github.io/todoList/",
    },
    {
      id: 6,
      title: "Loan Form",
      description: `A modern loan application form with real-time form validation and responsive styling using React and Tailwind CSS.`,
      src: "/reactForm.png",
      alt: "Loan Form",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/my-React-Form-project-.git",
      liveDemo: "https://my-react-form-project.vercel.app",
    },
    {
      id: 7,
      title: "Phone Store",
      description: `A dynamic e-commerce UI for mobile phones with product cards and cart logic using React and Context API.`,
      src: "/phoneStore.png",
      alt: "Phone Store",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/mobile-phone-store-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/mobile-phone-store-project/",
    },
    {
      id: 8,
      title: "Job Seeking Web",
      description: `A responsive front-end homepage for a job search platform optimized for both mobile and desktop views.`,
      src: "/jobWeb.png",
      alt: "Job Seeking Web",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/job-finder-web",
      liveDemo: "https://job-finder-web-zeta.vercel.app/index.html",
    },
    {
      id: 9,
      title: "Color Generator",
      description: `Generates random background colors with HEX and RGB codes. Built using Vanilla JS for dynamic color updates.`,
      src: "/colorG.jpg",
      alt: "Color Generator",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Color-Generator-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/Color-Generator-project/",
    },
    {
      id: 10,
      title: "Coin Flip Game",
      description: `A visually engaging coin toss game featuring animation, random outcomes, and score tracking.`,
      src: "/coinFlip.png",
      alt: "Coin Flip Game",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/coinflip-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/coinflip-game/",
    },
  ];

  const techLabels = {
    react: "React",
    tailwindcss: "Tailwind CSS",
    javascript: "JavaScript",
    html: "HTML5",
    css: "CSS3",
  };

  const [activeFilter, setActiveFilter] = useState("all");

  // Filter projects based on active filter
  const filteredProjects = projectContent.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "featured") return project.featured;
    return project.tech.includes(activeFilter);
  });

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
          {[
            { key: "all", label: "All Projects" },
            { key: "featured", label: "Featured" },
            { key: "react", label: "React" },
            { key: "javascript", label: "JavaScript" },
          ].map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${
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
                <div
                  key={project.id}
                  className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 ${
                    darkMode
                      ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
                      : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
                  } ${
                    featuredInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: featuredInView
                      ? `${400 + index * 150}ms`
                      : "0ms",
                  }}
                >
                  {/* Featured badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg">
                      ⭐ FEATURED
                    </span>
                  </div>

                  <ProjectImage
                    src={project.src}
                    alt={project.alt}
                    title={project.title}
                    isFeatured={true}
                    project={project}
                  />

                  <div className="p-8">
                    <h4
                      className={`text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h4>

                    <p
                      className={`text-base leading-relaxed mb-6 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.tech?.map((techItem, idx) => (
                        <span
                          key={idx}
                          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105 ${
                            darkMode
                              ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                              : "bg-gray-100/80 text-gray-700 border border-gray-200"
                          }`}
                        >
                          <TechIcon tech={techItem} className="w-5 h-5" />
                          <span>{techLabels[techItem]}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={project.gitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 transform ${
                          darkMode
                            ? "bg-gray-700 text-white hover:bg-gray-600"
                            : "bg-gray-900 text-white hover:bg-gray-800"
                        } shadow-lg`}
                      >
                        <AiFillGithub className="w-5 h-5" />
                        <span>View Code</span>
                      </a>

                      {project.liveDemo && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-blue-500/25"
                        >
                          <FaGlobe className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
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
                <div
                  key={project.id}
                  className={`group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
                    darkMode
                      ? "bg-gray-800/40 backdrop-blur-sm border border-gray-700/40"
                      : "bg-white/60 backdrop-blur-sm border border-gray-200/40"
                  } ${
                    otherInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: otherInView
                      ? `${200 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <ProjectImage
                    src={project.src}
                    alt={project.alt}
                    title={project.title}
                    isFeatured={false}
                    project={project}
                  />

                  <div className="p-6">
                    <h4
                      className={`text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </h4>

                    <p
                      className={`text-sm leading-relaxed mb-5 ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {project.description.length > 120
                        ? project.description.substring(0, 120) + "..."
                        : project.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {project.tech?.slice(0, 3).map((techItem, idx) => (
                          <div
                            key={idx}
                            className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                              darkMode ? "bg-gray-700/50" : "bg-gray-100"
                            }`}
                            title={techLabels[techItem]}
                          >
                            <TechIcon tech={techItem} className="w-5 h-5" />
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.gitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-2.5 rounded-lg transition-all duration-200 hover:scale-110 ${
                            darkMode
                              ? "text-gray-300 hover:text-white bg-gray-700/50 hover:bg-gray-600"
                              : "text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200"
                          }`}
                          title="View Code"
                        >
                          <AiFillGithub className="w-5 h-5" />
                        </a>

                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 text-blue-500 hover:text-blue-600 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50 rounded-lg transition-all duration-200 hover:scale-110"
                            title="Live Demo"
                          >
                            <FaGlobe className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-8xl mb-6 animate-bounce">🔍</div>
            <h3
              className={`text-2xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              No projects found
            </h3>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Try selecting a different filter to see more projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
