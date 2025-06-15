// import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
} from "react-icons/si";

export default function Projects() {
  const projectContent = [
    {
      id: 1,
      title: "Pokédex App",
      description: `A fully responsive and interactive Pokédex built with React, Tailwind CSS, and PokéAPI (https://pokeapi.co/). Users can explore detailed Pokémon info such as types, stats, images, and moves. Features include localStorage caching, dynamic modals, and seamless UI transitions.`,
      src: "/pokedex.png",
      alt: "Pokédex App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Pokedex-app.git",
      liveDemo: "https://pokedex-app-self.vercel.app",
    },
    {
      id: 2,
      title: "Weather App",
      description: `A weather forecasting application fetching real-time data from the OpenWeatherMap API (https://openweathermap.org/api). Developed using React, it displays temperature, humidity, weather conditions, and more with a minimalist and responsive UI.`,
      src: "/weatheApp.png",
      alt: "Weather App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/my-weather-app-API-.git",
      liveDemo: "https://weather-app-theta-two-40.vercel.app",
    },
    {
      id: 3,
      title: "To-Do App",
      description: `An intuitive task manager with a clean layout allowing users to add, complete, and delete tasks in real time. Built using React with efficient state handling and responsive design for all devices.`,
      src: "/Todo-App.png",
      alt: "To-Do App",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Todo-App.git",
      liveDemo: "https://todo-app-two-gilt-65.vercel.app",
    },
    {
      id: 4,
      title: "Hand Game",
      description: `A fun Rock Paper Scissors game against the computer, built with HTML, CSS, and JavaScript. Includes score tracking, basic animations, and a responsive interface.`,
      src: "/rockPaperSi.png",
      alt: "Hand Game",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/hand-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/hand-game/",
    },
    {
      id: 5,
      title: "TodoList",
      description: `A simple and effective task list using Vanilla JS with localStorage integration for data persistence. Users can mark tasks as completed or delete them easily.`,
      src: "/todolist.jpg",
      alt: "TodoList",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/todoList.git",
      liveDemo: "https://mrmustafaegeh.github.io/todoList/",
    },
    {
      id: 6,
      title: "Loan Form",
      description: `A modern loan application form with built-in real-time form validation, error handling, and responsive styling using React and Tailwind CSS.`,
      src: "/reactForm.png",
      alt: "Loan Form",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/my-React-Form-project-.git",
      liveDemo: "https://my-react-form-project.vercel.app",
    },
    {
      id: 7,
      title: "Phone Store",
      description: `A dynamic and responsive e-commerce UI for mobile phones. Features product cards, cart logic, and smooth user experience using React and Context API.`,
      src: "/phoneStore.png",
      alt: "Phone Store",
      tech: ["react", "tailwindcss", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/mobile-phone-store-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/mobile-phone-store-project/",
    },
    {
      id: 8,
      title: "Job Seeking Web",
      description: `A responsive front-end homepage for a fictional job search platform \"Jobringer\". Designed with HTML, CSS, and JavaScript, optimized for both mobile and desktop views.`,
      src: "/jobWeb.png",
      alt: "Job Seeking Web",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/job-finder-web",
      liveDemo: "https://job-finder-web-zeta.vercel.app/index.html",
    },
    {
      id: 9,
      title: "Color Generator Project",
      description: `Generates random background colors with HEX and RGB codes. Built using Vanilla JS, this tool updates the page color dynamically and helps with UI inspiration.`,
      src: "/colorG.jpg",
      alt: "Color Generator",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/Color-Generator-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/Color-Generator-project/",
    },
    {
      id: 10,
      title: "Coin Flip Game",
      description: `A visually engaging coin toss game built with JavaScript, featuring animation, random outcomes, and score tracking. A great project for learning DOM manipulation.`,
      src: "/coinFlip.png",
      alt: "Coin Flip Game",
      tech: ["html", "css", "javascript"],
      gitHub: "https://github.com/mrmustafaegeh/coinflip-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/coinflip-game/",
    },
  ];

  const techIcons = {
    react: (
      <SiReact title="React" className="hover:text-sky-500 transition-colors" />
    ),
    tailwindcss: (
      <SiTailwindcss
        title="Tailwind CSS"
        className="hover:text-teal-400 transition-colors"
      />
    ),
    javascript: (
      <SiJavascript
        title="JavaScript"
        className="hover:text-yellow-400 transition-colors"
      />
    ),
    html: (
      <SiHtml5
        title="HTML5"
        className="hover:text-orange-600 transition-colors"
      />
    ),
    css: (
      <SiCss3 title="CSS3" className="hover:text-blue-500 transition-colors" />
    ),
    nextjs: (
      <SiNextdotjs
        title="Next.js"
        className="hover:text-black dark:hover:text-white transition-colors"
      />
    ),
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <h3 className="text-4xl font-semibold text-gray-900 dark:text-white mb-16">
        Projects:
      </h3>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectContent.map(
          ({ id, src, alt, title, description, gitHub, liveDemo, tech }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-full">
                <img
                  src={src}
                  alt={alt}
                  width={600}
                  height={350}
                  className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {title}
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {description}
                </p>
                <div className="flex space-x-3 mb-4 text-xl">
                  {tech?.map((item, idx) => (
                    <span key={idx}>{techIcons[item]}</span>
                  ))}
                </div>
                <div className="flex items-center space-x-6 text-gray-900 dark:text-white text-2xl">
                  <a
                    href={gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-500"
                    aria-label={`${title} GitHub Repository`}
                  >
                    <AiFillGithub />
                  </a>
                  {liveDemo && (
                    <a
                      href={liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-teal-500"
                      aria-label={`${title} Live Demo`}
                    >
                      <FaGlobe />
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
