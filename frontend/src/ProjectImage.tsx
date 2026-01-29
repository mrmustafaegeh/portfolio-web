import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from "./types/project";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  isFeatured: boolean;
  project: Project;
}

const ProjectImage = ({ src, alt, title, isFeatured, project }: ProjectImageProps) => {
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

  const imageSrc =
    !isFeatured && src?.endsWith(".webp")
      ? src.replace(".webp", "-small.webp")
      : src;

  return (
    <div className="relative overflow-hidden group">
      <img
        src={imageSrc}
        alt={alt}
        width={isFeatured ? "1200" : "600"}
        height={isFeatured ? "600" : "400"}
        loading={isFeatured ? "eager" : "lazy"}
        // @ts-ignore - fetchpriority is relatively new in standard TS types
        fetchpriority={isFeatured ? "high" : "auto"}
        decoding="async"
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

export default ProjectImage;
