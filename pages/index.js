import Head from "next/head";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image";

// Static image paths from public folder
const me = "/me.jpg";
const code = "/code.png";
const design = "/design.png";
const consulting = "/consulting.png";
const colorG = "/colorG.jpg";
const todolist = "/todolist.jpg";
const rockPaperSi = "/rockPaperSi.jpg";
const reactForm = "/reactForm.png";
const weatheApp = "/weatheApp.png";
const coinFlip = "/coinFlip.jpg";
const phoneStore = "/phoneStore.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const projectContent = [
    {
      id: 1,
      title: "Color Generator Project",
      description:
        "A simple tool that generates random colors with HEX/RGB code and updates the background. Built with HTML, CSS, JavaScript.",
      src: colorG,
      alt: "great colors app",
      gitHub: "https://github.com/mrmustafaegeh/Color-Generator-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/Color-Generator-project/",
    },
    {
      id: 2,
      title: "Weather App",
      description:
        "Responsive React app using OpenWeatherMap API to show real-time weather info like temperature, humidity, wind, etc.",
      src: weatheApp,
      alt: "weather app front page",
      gitHub: "https://github.com/mrmustafaegeh/my-weather-app-API-.git",
      liveDemo: "https://weather-app-theta-two-40.vercel.app",
    },
    {
      id: 3,
      title: "Coin Flip Game",
      description:
        "Interactive coin flip game using HTML, CSS, and JS with animations and result tracking using Math.random().",
      src: coinFlip,
      alt: "coinFlip game",
      gitHub: "https://github.com/mrmustafaegeh/coinflip-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/coinflip-game/",
    },
    {
      id: 4,
      title: "Hand Game",
      description:
        "Rock Paper Scissors game against computer. Built with JS, featuring score tracking, animations, and logic.",
      src: rockPaperSi,
      alt: "game front end view",
      gitHub: "https://github.com/mrmustafaegeh/hand-game.git",
      liveDemo: "https://mrmustafaegeh.github.io/hand-game/",
    },
    {
      id: 5,
      title: "TodoList",
      description:
        "Functional to-do list built in HTML/CSS/JS. Features add/delete/complete tasks and localStorage for persistence.",
      src: todolist,
      alt: "todolist frontend pic",
      gitHub: "https://github.com/mrmustafaegeh/todoList.git",
      liveDemo: "https://mrmustafaegeh.github.io/todoList/",
    },
    {
      id: 6,
      title: "Loan Form",
      description:
        "React form with multiple fields, real-time validation, error handling, and responsive styling. Great UX/UI demo.",
      src: reactForm,
      alt: "frontend of form",
      gitHub: "https://github.com/mrmustafaegeh/my-React-Form-project-.git",
      liveDemo: "https://my-react-form-project.vercel.app",
    },
    {
      id: 7,
      title: "Phone Store",
      description:
        "Fully responsive fake e-commerce site for phones with product cards, cart logic, and stylish front-end UI.",
      src: phoneStore,
      alt: "frontend phone store web",
      gitHub: "https://github.com/mrmustafaegeh/mobile-phone-store-project.git",
      liveDemo: "https://mrmustafaegeh.github.io/mobile-phone-store-project/",
    },
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mustafa Egeh Portfolio</title>
        <meta name="description" content="Frontend Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <div className="font-burtons text-xl">Egeh</div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  href="/mustafaEgeh-2.pdf"
                  download
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Mustafa Egeh
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              FrontEnd Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Skilled front-end developer with expertise in building responsive,
              user-friendly websites and applications using modern web
              technologies.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillInstagram />
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/mrmustafaegeh">
                <AiFillGithub />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image
                src={me}
                alt="personal photo"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I have done freelance work for agencies, startups, and collaborated
            on digital products for both businesses and consumers.
          </p>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating modern, elegant, and accessible UI designs.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="code" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Turn ideas into functional, dynamic websites.
              </p>
              <h4 className="py-4 text-teal-600">Languages I use</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
              <p className="text-gray-800 py-1">React</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
          <div className="grid gap-10 py-10 lg:grid-cols-2">
            {projectContent.map((project) => (
              <div
                key={project.id}
                className="rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 dark:text-white">
                  <h4 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h4>
                  <p className="mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.gitHub}
                      className="text-teal-500 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <AiFillGithub />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="text-teal-500 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGlobe />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
