import { motion } from "framer-motion";
import { blobAssets } from "../data/blobAssets";

const skills = ["React", "Next.js", "Tailwind", "JavaScript", "Node.js", "TypeScript"];

const Cube = () => {
  return (
    <div className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] relative animate-spin-slow-cube" style={{ transformStyle: 'preserve-3d' }}>
      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(-20deg) rotateY(0deg); }
          100% { transform: rotateX(-20deg) rotateY(360deg); }
        }
        .animate-spin-slow-cube { animation: spinCube 20s linear infinite; }
        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(202, 255, 0, 0.4);
          background: rgba(8, 8, 8, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Mono', monospace;
          color: #CAFF00;
          font-size: 1.5rem;
          font-weight: bold;
          text-transform: uppercase;
          backdrop-filter: blur(4px);
        }
        
        /* Desktop translations */
        @media (min-width: 768px) {
          .front  { transform: translateZ(140px); }
          .back   { transform: rotateY(180deg) translateZ(140px); }
          .right  { transform: rotateY(90deg) translateZ(140px); }
          .left   { transform: rotateY(-90deg) translateZ(140px); }
          .top    { transform: rotateX(90deg) translateZ(140px); }
          .bottom { transform: rotateX(-90deg) translateZ(140px); }
        }
        
        /* Mobile translations */
        @media (max-width: 767px) {
          .front  { transform: translateZ(100px); }
          .back   { transform: rotateY(180deg) translateZ(100px); }
          .right  { transform: rotateY(90deg) translateZ(100px); }
          .left   { transform: rotateY(-90deg) translateZ(100px); }
          .top    { transform: rotateX(90deg) translateZ(100px); }
          .bottom { transform: rotateX(-90deg) translateZ(100px); }
        }
      `}</style>
      <div className="cube-face front">React</div>
      <div className="cube-face back">Node.js</div>
      <div className="cube-face right">TS</div>
      <div className="cube-face left">Next.js</div>
      <div className="cube-face top">Tailwind</div>
      <div className="cube-face bottom">SQL</div>
    </div>
  );
};

export default function About() {
  return (
    <section id="about" className="py-32 relative bg-darkBg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Text */}
          <div className="flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold font-syne text-white mb-8"
            >
              ABOUT ME
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-8 mb-8"
            >
              <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 p-2 bg-[#0a0a0a]">
                <img 
                  src={blobAssets["me.webp"]} 
                  alt="Mustafa Egeh" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="space-y-6 text-white/60 font-space text-sm md:text-base leading-relaxed">
                <p>
                  Based in Germany, I'm a passionate Full Stack Developer who enjoys bridging the gap between engineering and premium design. I focus on building software that looks expensive and works flawlessly.
                </p>
                <p>
                  I specialize in modern JavaScript frameworks (React, Next.js, Node.js) and have a keen eye for minimalist, high-impact aesthetics. My tools of choice allow me to craft experiences that leave a lasting impression without sacrificing performance.
                </p>
              </div>
            </motion.div>

            {/* Tech Pills */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-10 flex flex-wrap gap-3"
            >
              {skills.map((skill) => (
                <div key={skill} className="px-4 py-2 border border-white/20 rounded-none text-white/60 font-space text-xs uppercase tracking-wider">
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: CSS 3D Cube */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="flex justify-center items-center perspective-[1200px]"
          >
            <Cube />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
