import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";

export default function Projects() {
  const projectContent = [
    {
      id: 1,
      title: "pokodex Cards",
      description: "game",
      src: "/pokedex.png",
      alt: "pokemon CardS",
      gitHub: "https://github.com/mrmustafaegeh/Pokedex-app.git",
      LiveDemo: "https://pokedex-app-self.vercel.app",
    },

    {
      id: 2,
      title: "Weather App",
      description:
        "React app using OpenWeatherMap API to show real-time weather info like temperature, humidity, etc.",
      src: "/weatheApp.png",
      alt: "Weather App",
      gitHub: "https://github.com/mrmustafaegeh/my-weather-app-API-.git",
      liveDemo: "https://weather-app-theta-two-40.vercel.app",
    },
    {
      id: 3,
      title: "Todo-App",
      description:
        "todo-app list works in both devices mobile and web application",
      src: "/Todo-App.png",
      alt: "TodoList-App",
      gitHub: "https://github.com/mrmustafaegeh/Todo-App.git",
      LiveDemo: "https://todo-app-two-gilt-65.vercel.app",
    },
    {
      id: 4,
      title: "Hand Game",
      description:
        "Rock Paper Scissors game against computer with score tracking and animations.",
      src: "/rockPaperSi.png",
      alt: "Rock Paper Scissors Game",
      gitHub: "https://github.com/mrmustafaegeh/hand-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/hand-game/",
    },
    {
      id: 5,
      title: "TodoList",
      description:
        "Functional to-do list with add/delete/complete tasks and localStorage support.",
      src: "/todolist.jpg",
      alt: "Todo List App",
      gitHub: "https://github.com/mrmustafaegeh/todoList.git",
      liveDemo: "https://mrmustafaegeh.github.io/todoList/",
    },
    {
      id: 6,
      title: "Loan Form",
      description:
        "React form with real-time validation, error handling, and responsive styling.",
      src: "/reactForm.png",
      alt: "Loan Form App",
      gitHub: "https://github.com/mrmustafaegeh/my-React-Form-project-.git",
      liveDemo: "https://my-react-form-project.vercel.app",
    },
    {
      id: 7,
      title: "Phone Store",
      description:
        "Responsive e-commerce UI for phones with cart logic and product cards.",
      src: "/phoneStore.png",
      alt: "Phone Store",
      gitHub: "https://github.com/mrmustafaegeh/mobile-phone-store-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/mobile-phone-store-project/",
    },
    {
      id: 8,
      title: "Job Seeking Web",
      description:
        "Responsive front-end homepage for Jobringer with clean mobile & desktop design.",
      src: "/jobWeb.png",
      alt: "Job Finder Web",
      gitHub: "https://github.com/mrmustafaegeh/job-finder-web",
      liveDemo: "https://job-finder-web-zeta.vercel.app/index.html",
    },
    {
      id: 9,
      title: "Color Generator Project",
      description:
        "A simple tool that generates random colors with HEX/RGB code and updates the background.",
      src: "/colorG.jpg",
      alt: "Color Generator App",
      gitHub: "https://github.com/mrmustafaegeh/Color-Generator-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/Color-Generator-project/",
    },
    {
      id: 10,
      title: "Coin Flip Game",
      description:
        "Interactive coin flip game using HTML, CSS, and JS with animations and tracking.",
      src: "/coinFlip.png",
      alt: "Coin Flip Game",
      gitHub: "https://github.com/mrmustafaegeh/coinflip-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/coinflip-game/",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <h3 className="text-4xl font-semibold  text-gray-900 dark:text-white mb-16">
        Projects:
      </h3>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectContent.map(
          ({ id, src, alt, title, description, gitHub, liveDemo }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              <div className="w-full">
                <Image
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
                <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                  {description}
                </p>
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
