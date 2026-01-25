import { motion } from "framer-motion";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

interface FooterProps {
  value: boolean; // Using 'value' as it was named in App.tsx
}

export default function Footer({ value: darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`py-12 border-t transition-colors duration-500 ${
      darkMode 
        ? "bg-slate-950 border-slate-800 text-slate-400" 
        : "bg-white border-slate-200 text-slate-600"
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent font-burtons mb-2">
              Egeh
            </h2>
            <p className="text-sm">Building the future of the web, one pixel at a time.</p>
          </div>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -3, color: "#14b8a6" }}
              href="https://instagram.com/"
              target="_blank"
              className="transition-colors"
              aria-label="Instagram Profile"
            >
              <AiFillInstagram size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#14b8a6" }}
              href="https://www.linkedin.com/in/mr-mustafaegeh/"
              target="_blank"
              className="transition-colors"
              aria-label="LinkedIn Profile"
            >
              <AiFillLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#14b8a6" }}
              href="https://github.com/mrmustafaegeh"
              target="_blank"
              className="transition-colors"
              aria-label="GitHub Profile"
            >
              <AiFillGithub size={24} />
            </motion.a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm font-medium">© {currentYear} Mustafa Egeh</p>
            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">Handcrafted with React & Tailwind</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
