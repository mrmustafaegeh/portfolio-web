import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          {/* Decorative background blur */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />

          <div className="relative z-10 grid lg:grid-cols-2">
            {/* Left: Info */}
            <div className="p-12 md:p-20 text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-8"
              >
                Let's <span className="text-teal-400 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Collaborate</span>
              </motion.h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <HiOutlineMail size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Email Me</h3>
                    <p className="text-lg font-bold">Mr.mustafaegeh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <HiOutlinePhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Whatsapp Me </h3>
                    <p className="text-lg font-bold">+905338353099</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                    <HiOutlineLocationMarker size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Location</h3>
                    <p className="text-lg font-bold">Famagusta, Cyprus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form Mockup (Simplified for aesthetic) */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-12 md:p-20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 mb-2 block">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 mb-2 block">Message</label>
                  <textarea 
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white h-40 focus:border-teal-400 outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 py-4 rounded-2xl text-slate-900 font-bold hover:shadow-xl hover:shadow-teal-500/20 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
