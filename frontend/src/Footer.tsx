import { motion } from "framer-motion";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

interface FooterProps {
  value?: boolean; // legacy prop
}

export default function Footer({}: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-bold text-white font-syne uppercase tracking-widest mb-2">
              Mustafa Egeh
            </h2>
            <p className="text-xs font-space text-white/40">Premium web engineering.</p>
          </div>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -2, color: "#CAFF00" }}
              href="https://instagram.com/"
              target="_blank"
              className="text-white/40 transition-colors"
              aria-label="Instagram Profile"
            >
              <AiOutlineInstagram size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#CAFF00" }}
              href="https://www.linkedin.com/in/mr-mustafaegeh/"
              target="_blank"
              className="text-white/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <AiOutlineLinkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -2, color: "#CAFF00" }}
              href="https://github.com/mrmustafaegeh"
              target="_blank"
              className="text-white/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <AiOutlineGithub size={20} />
            </motion.a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs font-space text-white/50 uppercase tracking-widest">© {currentYear}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
