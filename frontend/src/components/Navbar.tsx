import { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (value: boolean) => void;
}

const Navbar = ({}: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-black/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold text-white font-burtons tracking-wide hover:text-accent transition-colors"
        >
          Mustafa Egeh
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-300 font-space"
                >
                  {link.name}
                </a>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          <a
            href="/Mustafa Egeh cv.pdf"
            download
            className="px-6 py-2.5 rounded-none border border-white/30 text-white text-xs uppercase tracking-widest font-space hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-accent transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Down Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[400px] py-6" : "max-h-0 py-0 border-transparent"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-white/60 hover:text-accent transition-colors font-space"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="pt-4 w-full px-12">
            <a
              href="/Mustafa Egeh cv.pdf"
              download
              className="w-full flex justify-center text-center px-8 py-4 border border-white/20 text-white text-xs uppercase tracking-widest font-space hover:bg-accent hover:border-accent hover:text-black transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
