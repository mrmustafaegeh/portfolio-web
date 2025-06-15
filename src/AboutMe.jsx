import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect } from "react";

export default function AboutMe(props) {
  const { darkMode, setDarkMode } = props;

  const me = "/me2.png";
  const design = "/design.png";
  const code = "/code.png";

  // Theme management
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className={darkMode ? "dark" : ""}>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between dark:text-white">
          <div className="font-burtons text-xl">Egeh</div>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-2xl hover:text-teal-500 transition-colors"
              />
            </li>
            <li>
              <a
                href="/MustafaEgeh.pdf"
                download
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:from-cyan-600 hover:to-teal-600 transition-colors"
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
            Frontend Developer
          </h3>
          <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            I build fast, accessible web experiences using React, Next.js and
            modern CSS. Passionate about performance optimization and creating
            intuitive interfaces.
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition-colors"
              aria-label="Instagram"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-egeh-7b6533351/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition-colors"
              aria-label="LinkedIn"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/mrmustafaegeh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-500 transition-colors"
              aria-label="GitHub"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 hover:shadow-xl hover:shadow-teal-500/20 transition-shadow">
            <img
              src={me}
              alt="Mustafa Egeh"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-10">
        <h3 className="text-3xl py-1 dark:text-white font-bold">About Me</h3>
        <div className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 space-y-4">
          <p>
            I'm a frontend developer specializing in <strong>React</strong> and{" "}
            <strong>Next.js</strong>, with expertise in{" "}
            <strong>Tailwind CSS</strong> and modern JavaScript. I transform
            complex problems into intuitive, performant interfaces.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-teal-600 dark:text-teal-400">
                🚀 What I Excel At
              </h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Building responsive, accessible UIs</li>
                <li>Performance optimization</li>
                <li>Clean code architecture</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-teal-600 dark:text-teal-400">
                🏆 Recent Achievements
              </h4>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Improved Lighthouse scores by 40%</li>
                <li>Built pixel-perfect responsive clones</li>
                <li>Mastered complex animations</li>
              </ul>
            </div>
          </div>

          <p>
            I thrive in collaborative environments using <strong>Git</strong>{" "}
            and agile methodologies. Currently expanding my skills in{" "}
            <strong>TypeScript</strong> and advanced Next.js patterns.
          </p>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        <h3 className="text-3xl py-1 dark:text-white font-bold">
          What I Offer
        </h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 mb-8">
          I deliver high-quality solutions for businesses and startups, focusing
          on:
        </p>

        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 transition-transform hover:scale-105">
            <div className="mx-auto bg-teal-100 dark:bg-teal-900/30 w-24 h-24 rounded-full flex items-center justify-center">
              <img
                src={design}
                width={60}
                height={60}
                alt="UI Design"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">UI Development</h3>
            <p className="py-2 dark:text-gray-300">
              Creating modern, accessible interfaces with pixel-perfect
              precision
            </p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">
              Technologies
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                Framer Motion
              </span>
            </div>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-800 flex-1 transition-transform hover:scale-105">
            <div className="mx-auto bg-teal-100 dark:bg-teal-900/30 w-24 h-24 rounded-full flex items-center justify-center">
              <img
                src={code}
                width={60}
                height={60}
                alt="Web Development"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Web Development</h3>
            <p className="py-2 dark:text-gray-300">
              Building performant, scalable web applications
            </p>
            <h4 className="py-4 text-teal-600 dark:text-teal-400">
              Technologies
            </h4>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                REST APIs
              </span>
              <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                Git
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
