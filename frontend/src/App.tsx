import { useState, lazy, Suspense, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import Hero from "./components/Hero";

// Lazy load heavy content
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./Projects"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./Footer"));

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

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
    <div className={`${darkMode ? "dark" : ""} min-h-screen font-sans transition-colors duration-300`}>
      <Helmet>
        <title>Mustafa Egeh | Frontend Developer Portfolio 2026</title>
        <meta name="description" content="Portfolio of Mustafa Egeh, a Frontend Developer specialized in React, Next.js, and modern web technologies. Explore projects, case studies, and engineering solutions." />
        <meta name="keywords" content="Frontend Developer, React, Next.js, Portfolio, Mustafa Egeh, Web Development, UI/UX" />
        <meta property="og:title" content="Mustafa Egeh | Frontend Developer Portfolio" />
        <meta property="og:description" content="Showcasing high-performance web applications and modern frontend architecture." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={darkMode ? "#0f172a" : "#ffffff"} />
      </Helmet>
      
      <AnimatedBackground darkMode={darkMode} />
      
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        <Hero />
        
        <Suspense fallback={<div className="flex items-center justify-center p-20 italic animate-pulse">Enhancing experience...</div>}>
          <div className="space-y-32 pb-32">
            <About />
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
