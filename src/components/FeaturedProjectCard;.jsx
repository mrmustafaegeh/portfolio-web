// components/Projects/FeaturedProjectCard.jsx
import ProjectImage from "../ProjectsImage";
import TechIcon from "../ui/TechIcons";
import { AiFillGithub, FaGlobe } from "../icons";

const FeaturedProjectCard = ({
  project,
  darkMode,
  techLabels,
  animationDelay,
}) => (
  <div
    className={`group relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-3xl transform hover:-translate-y-2 ${
      darkMode
        ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
        : "bg-white/80 backdrop-blur-sm border border-gray-200/50"
    }`}
    style={{ transitionDelay: animationDelay }}
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
);

export default FeaturedProjectCard;
