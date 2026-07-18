import { Section } from './Section';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-slate-100 mb-6">Let's build something</h3>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
            I'm currently open to new opportunities, collaborations, and interesting projects. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <a href="mailto:balah8986@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group w-fit">
              <div className="w-12 h-12 rounded-full bg-[#121214] border border-[#27272A] group-hover:border-indigo-500/50 flex items-center justify-center transition-colors">
                <Mail size={20} />
              </div>
              <span className="text-lg">balah8986@gmail.com</span>
            </a>
            
            <a href="tel:+917708035227" className="flex items-center gap-4 text-slate-300 hover:text-indigo-400 transition-colors group w-fit">
              <div className="w-12 h-12 rounded-full bg-[#121214] border border-[#27272A] group-hover:border-indigo-500/50 flex items-center justify-center transition-colors">
                <Phone size={20} />
              </div>
              <span className="text-lg">+91 7708035227</span>
            </a>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/Harish-GenZ" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#121214] border border-[#27272A] hover:border-indigo-500/50 hover:text-indigo-400 flex items-center justify-center transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/balaharish-yogesh-n-95a277305" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#121214] border border-[#27272A] hover:border-indigo-500/50 hover:text-indigo-400 flex items-center justify-center transition-all">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form className="bg-[#121214] border border-[#27272A] rounded-2xl p-8 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-[#1A1A1D] border border-[#27272A] rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-[#1A1A1D] border border-[#27272A] rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-[#1A1A1D] border border-[#27272A] rounded-lg px-4 py-3 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                Send Message
                <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </Section>
  );
}
