import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      // Randomly fail 10% of the time to show error handling
      if (Math.random() < 0.1) throw new Error("Network error");
      
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
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
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Collaborate</span>
              </motion.h2>
              <p className="text-slate-400 text-lg mb-12 max-w-md">
                Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-lg border border-slate-700">
                    <HiOutlineMail size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Email Me</h3>
                    <p className="text-lg font-bold">Mr.mustafaegeh@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-lg border border-slate-700">
                    <HiOutlinePhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Whatsapp</h3>
                    <p className="text-lg font-bold">+905338353099</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-lg border border-slate-700">
                    <HiOutlineLocationMarker size={24} />
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wider">Location</h3>
                    <p className="text-lg font-bold">Famagusta, Cyprus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-12 md:p-20 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-bold text-slate-400 mb-2 block">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 mb-2 block">Subject</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white focus:border-teal-400 outline-none transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold text-slate-400 mb-2 block">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 text-white h-40 focus:border-teal-400 outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-gradient-to-r from-teal-400 to-cyan-500 py-4 rounded-2xl text-slate-900 font-bold hover:shadow-xl hover:shadow-teal-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <HiCheckCircle size={24} />
                  ) : "Send Message"}
                </button>
              </form>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900/90 backdrop-blur-sm"
                  >
                    <div className="text-center p-8">
                      <HiCheckCircle className="text-teal-400 w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400">I'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400"
                  >
                    <HiExclamationCircle size={20} />
                    <p className="text-sm">Something went wrong. Please try again later.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
