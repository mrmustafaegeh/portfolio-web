// components/Projects/ProjectGridCard.jsx
import ProjectImage from "../ProjectsImage";
import TechIcon from "../ui/TechIcons";
import { AiFillGithub, FaGlobe } from "../icons";

const ProjectGridCard = ({ project, darkMode, techLabels, animationDelay }) => (
  <div
    className={`group relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 ${
      darkMode
        ? "bg-gray-800/40 backdrop-blur-sm border border-gray-700/40"
        : "bg-white/60 backdrop-blur-sm border border-gray-200/40"
    }`}
    style={{ transitionDelay: animationDelay }}
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
);

export default ProjectGridCard;
