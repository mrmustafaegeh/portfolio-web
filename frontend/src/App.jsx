import { useState, lazy, Suspense, useEffect } from "react";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";

// Lazy load heavy content
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./Projects.jsx"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./Footer.jsx"));

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update localStorage and HTML class when theme changes
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
    <div className={`${darkMode ? "dark" : ""} min-h-screen font-sans`}>
      <AnimatedBackground darkMode={darkMode} />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero darkMode={darkMode} />
        
        <Suspense fallback={<div className="loading italic">Enhancing experience...</div>}>
          <div className="space-y-32 pb-32">
            <About darkMode={darkMode} />
            <Projects darkMode={darkMode} />
            <Services />
            <Contact />
          </div>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer value={darkMode} />
      </Suspense>
    </div>
  );
}
