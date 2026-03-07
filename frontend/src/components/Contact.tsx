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
    <section id="contact" className="py-32 bg-darkBg border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-[#0a0a0a] border border-white/10 overflow-hidden relative">
          <div className="grid lg:grid-cols-2">
            
            {/* Left: Info */}
            <div className="p-12 md:p-20 border-b lg:border-b-0 lg:border-r border-white/10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-syne text-white mb-8"
              >
                LET'S TALK
              </motion.h2>
              <p className="font-space text-white/50 text-sm md:text-base leading-relaxed mb-16 max-w-sm">
                Have a project in mind? I'm currently available for work and open to discussing new opportunities.
              </p>

              <div className="space-y-12">
                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-white/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    <HiOutlineMail size={20} />
                  </div>
                  <div>
                    <h3 className="font-space text-xs uppercase tracking-widest text-white/40 mb-2">Email</h3>
                    <p className="font-syne text-lg text-white font-bold">Mr.mustafaegeh@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-white/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    <HiOutlinePhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-space text-xs uppercase tracking-widest text-white/40 mb-2">WhatsApp</h3>
                    <p className="font-syne text-lg text-white font-bold">+905338353099</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-10 h-10 border border-white/20 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all">
                    <HiOutlineLocationMarker size={20} />
                  </div>
                  <div>
                    <h3 className="font-space text-xs uppercase tracking-widest text-white/40 mb-2">Location</h3>
                    <p className="font-syne text-lg text-white font-bold">Famagusta, Cyprus</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-12 md:p-20 relative bg-[#050505]">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="font-space text-[10px] uppercase tracking-widest text-white/40 mb-3 block">Name</label>
                    <input 
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-space text-sm focus:border-accent outline-none transition-colors rounded-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="font-space text-[10px] uppercase tracking-widest text-white/40 mb-3 block">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      className="w-full bg-transparent border-b border-white/20 py-3 text-white font-space text-sm focus:border-accent outline-none transition-colors rounded-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-space text-[10px] uppercase tracking-widest text-white/40 mb-3 block">Subject</label>
                  <input 
                    required
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    type="text" 
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white font-space text-sm focus:border-accent outline-none transition-colors rounded-none"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div>
                  <label className="font-space text-[10px] uppercase tracking-widest text-white/40 mb-3 block">Message</label>
                  <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white font-space text-sm focus:border-accent outline-none transition-colors rounded-none resize-none h-32"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-accent text-black font-space font-bold uppercase tracking-widest text-xs py-5 hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'loading' ? (
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>SENT <HiCheckCircle size={16} /></>
                  ) : "SEND MESSAGE"}
                </button>
              </form>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[#050505]/95 backdrop-blur-sm"
                  >
                    <div className="text-center p-8 border border-accent/30 bg-accent/5">
                      <HiCheckCircle className="text-accent w-12 h-12 mx-auto mb-4" />
                      <h3 className="text-xl font-syne font-bold text-white mb-2">Message Sent</h3>
                      <p className="font-space text-white/60 text-sm">I'll get back to you as soon as possible.</p>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 border border-red-500/30 flex items-center gap-3 text-red-500 font-space text-xs"
                  >
                    <HiExclamationCircle size={16} />
                    <p>Network error. Please try again.</p>
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
