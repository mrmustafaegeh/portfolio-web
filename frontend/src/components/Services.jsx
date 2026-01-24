import { motion } from "framer-motion";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineGlobeAlt, HiOutlineLightningBolt } from "react-icons/hi";

const Services = () => {
  const offerings = [
    {
      title: "UI Development",
      description: "Developing visually stunning and responsive user interfaces that provide seamless experiences across all devices.",
      icon: <HiOutlineCode className="w-8 h-8" />,
      color: "blue"
    },
    {
      title: "Performance Optimization",
      description: "Optimizing web performance for ultra-fast load times and high Lighthouse scores, ensuring better SEO and user retention.",
      icon: <HiOutlineLightningBolt className="w-8 h-8" />,
      color: "teal"
    },
    {
      title: "App Modernization",
      description: "Modernizing legacy applications with the latest frameworks like Next.js and React for better scalability.",
      icon: <HiOutlineDeviceMobile className="w-8 h-8" />,
      color: "purple"
    },
    {
      title: "Full-Stack Solutions",
      description: "Building robust, scalable backends with Express and MongoDB to power your web applications.",
      icon: <HiOutlineGlobeAlt className="w-8 h-8" />,
      color: "orange"
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            My Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            I provide end-to-end development solutions focus on speed, accessibility, and modern aesthetics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all"
            >
              <div className={`w-16 h-16 rounded-3xl mb-8 flex items-center justify-center bg-${service.color}-50 dark:bg-${service.color}-900/20 text-${service.color}-500`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
