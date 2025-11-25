import { useState, lazy, Suspense } from "react";
import Header from "./Header.jsx"; // Keep Header sync for immediate display

// Lazy load only heavy below-the-fold components
const AboutMe = lazy(() => import("./AboutMe.jsx"));
const Projects = lazy(() => import("./Projects.jsx"));
const Footer = lazy(() => import("./Footer.jsx"));

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Header loads immediately */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="px-5 md:px-20 lg:px-40 space-y-20">
          <Suspense
            fallback={<div className="loading">Loading content...</div>}
          >
            <AboutMe darkMode={darkMode} setDarkMode={setDarkMode} />
            <Projects darkMode={darkMode} />
          </Suspense>
        </div>
      </main>

      <Suspense fallback={null}>
        {" "}
        {/* Footer can load last */}
        <Footer value={darkMode} />
      </Suspense>
    </div>
  );
}
