import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutMe() {
  const [darkMode, setDarkMode] = useState(false);

  const me = "/me.jpg";
  const design = "/design.png";
  const code = "/code.png";

  // Load theme preference from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Update theme in localStorage and document class
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
                className="cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                href="/MustafaEgeh.pdf"
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
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/mustafa-egeh-7b6533351/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/mrmustafaegeh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image
              src={me}
              alt="personal photo"
              width={320}
              height={320}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-3xl py-1 dark:text-white">About me</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Hello! I am Mustafa, a Junior Frontend Developer skilled in
          JavaScript, React, HTML, CSS, Tailwind CSS, and Git commands. I love
          turning designs into responsive, user-friendly websites and apps. My
          projects include a React weather app and an e-commerce site with
          dynamic filtering and cart features. I focus on writing clean,
          efficient code and improving performance, such as reducing load times
          by 40% through smart optimizations. I collaborate well in agile teams
          using Git and tools like Trello and Slack. I am eager to keep learning
          and contribute to exciting, innovative projects.
        </p>

        <h3 className="text-3xl py-1 dark:text-white">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I have done freelance work for agencies, startups, and collaborated on
          digital products for both businesses and consumers.
        </p>

        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image src={design} width={100} height={100} alt="design" />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
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
    </main>
  );
}
