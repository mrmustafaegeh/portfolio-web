import { useState } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="px-5 md:px-20 lg:px-40 space-y-20">
          <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
          <Projects darkMode={darkMode} />
        </div>
      </main>
      <Footer value={darkMode} />
    </div>
  );
}
