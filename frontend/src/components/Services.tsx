import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineGlobeAlt, HiOutlineLightningBolt } from "react-icons/hi";
import { motion } from "framer-motion";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const offerings: Service[] = [
  {
    title: "UI Engineering",
    description: "Developing visually stunning and responsive user interfaces that provide seamless experiences across all devices.",
    icon: <HiOutlineCode className="w-8 h-8" />,
  },
  {
    title: "Performance",
    description: "Optimizing web performance for ultra-fast load times and high metrics, ensuring better SEO and user retention.",
    icon: <HiOutlineLightningBolt className="w-8 h-8" />,
  },
  {
    title: "Modernization",
    description: "Modernizing legacy applications with the latest frameworks like Next.js and React for robust scalability.",
    icon: <HiOutlineDeviceMobile className="w-8 h-8" />,
  },
  {
    title: "Backend Systems",
    description: "Building robust, scalable backends with Express and Node.js to power dynamic, interactive client applications.",
    icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
  }
];

const TiltCard = ({ service }: { service: Service }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current && window.innerWidth >= 768) {
      VanillaTilt.init(cardRef.current, {
        max: 8,
        speed: 400,
        scale: 1.02,
        glare: true,
        "max-glare": 0.05,
      });
    }
  }, []);

  return (
    <div 
      ref={cardRef} 
      className="shrink-0 w-full md:w-[320px] bg-[#111] border border-white/10 border-l-2 border-l-transparent hover:border-l-accent p-8 flex flex-col transition-colors duration-300 group cursor-pointer"
    >
      <div className="text-white/40 group-hover:text-accent group-hover:scale-110 transition-all origin-left duration-300 mb-8">
        {service.icon}
      </div>
      <h3 className="text-xl font-syne font-bold text-white mb-4 uppercase tracking-wide">
        {service.title}
      </h3>
      <p className="text-sm font-space text-white/50 leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-32 bg-darkBg border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold font-syne text-white mb-4"
        >
          EXPERTISE
        </motion.h2>
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.1 }}
           className="text-white/50 font-space text-sm md:text-base max-w-xl"
        >
          Delivering end-to-end solutions that merge high-end aesthetics with rock-solid engineering.
        </motion.p>
      </div>

      <div className="w-full relative">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 overflow-x-auto pb-12 px-6 md:px-12 lg:px-20 hide-scrollbar snap-x snap-mandatory">
          {offerings.map((service, idx) => (
            <motion.div 
              key={idx} 
              className="snap-center md:snap-align-none w-full md:w-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <TiltCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
