import { motion } from "framer-motion";
import TechIcon from "../ui/TechIcons";

const About = ({ darkMode }) => {
  const skills = [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Tailwind", icon: "tailwindcss" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "expressjs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "TypeScript", icon: "typescript" },
  ];

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-teal-500 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              Transforming Ideas into Reality
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Based in Germany, I'm a passionate developer who loves bridging the gap between design and technology. My journey in development started with curiosity and has evolved into a career focused on delivering high-quality, scalable solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in creating interactive web applications that are not just visually stunning but also technically robust. Every project I undertake is a blend of code efficiency and user-centric design.
            </p>
            
            <div className="pt-8 grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Education</h4>
                <p className="text-slate-500 dark:text-slate-400">Software Engineering Focus</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Location</h4>
                <p className="text-slate-500 dark:text-slate-400">Available Worldwide</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-white dark:border-slate-700 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Tech Stack & Mastery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {skills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm hover:shadow-md border border-slate-100 dark:border-slate-700"
                >
                  <TechIcon tech={skill.icon} className="w-10 h-10" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 bg-teal-50 dark:bg-teal-900/20 p-6 rounded-2xl">
              <p className="text-sm text-center text-teal-700 dark:text-teal-300 font-medium">
                "Clean code and exceptional performance are my top priorities."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
