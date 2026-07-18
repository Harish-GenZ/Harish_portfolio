import { Section } from './Section';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Contact() {
  return (
    <Section id="contact" title="inference.py">
      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-mono font-bold text-slate-200 mb-6 flex items-center">
            <span className="text-primary mr-2">~/</span>open_to_work
          </h3>
          <p className="text-slate-400 mb-8 font-sans leading-relaxed">
            I'm always interested in hearing about new opportunities, exciting projects, 
            or discussing the latest in AI/ML. Let's build something intelligent together.
          </p>

          <div className="space-y-6 font-mono text-sm">
            <a href="mailto:balah8986@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="bg-[var(--color-bg-surface)] p-3 rounded border border-[var(--color-border-subtle)] group-hover:border-primary/50 transition-colors">
                <Mail size={20} className="text-[var(--color-syntax-green)]" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 mb-1">Email</div>
                balah8986@gmail.com
              </div>
            </a>
            
            <a href="tel:+917708035227" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group">
              <div className="bg-[var(--color-bg-surface)] p-3 rounded border border-[var(--color-border-subtle)] group-hover:border-primary/50 transition-colors">
                <Phone size={20} className="text-[var(--color-syntax-orange)]" />
              </div>
              <div>
                <div className="text-[10px] text-slate-500 mb-1">Phone</div>
                +91 7708035227
              </div>
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="https://github.com/Harish-GenZ" target="_blank" rel="noreferrer" className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] hover:border-primary/50 p-3 rounded text-slate-400 hover:text-white transition-colors">
              <FaGithub size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/balaharish-yogesh-n-95a277305" target="_blank" rel="noreferrer" className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] hover:border-primary/50 p-3 rounded text-slate-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg overflow-hidden group hover:border-primary/30 active:border-primary/30 transition-colors cursor-default">
            {/* Window Controls */}
            <div className="px-4 py-2 border-b border-[var(--color-border-subtle)] bg-[#1e2127] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-red-500 group-active:bg-red-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-amber-500 group-active:bg-amber-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-green-500 group-active:bg-green-500 transition-colors" />
              <div className="ml-2 font-mono text-[10px] text-slate-500">python inference.py --contact</div>
            </div>

            <form className="p-6 space-y-4 font-mono text-sm border-l-2 border-transparent group-hover:border-primary/50 group-active:border-primary/50 transition-colors">
              <div>
                <label htmlFor="name" className="block text-slate-500 text-xs mb-2">Name</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-500">&gt;</span>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#0d0f12] border border-[var(--color-border-subtle)] rounded px-8 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="guest_user"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-slate-500 text-xs mb-2">Email</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-500">&gt;</span>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-[#0d0f12] border border-[var(--color-border-subtle)] rounded px-8 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="user@domain.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-500 text-xs mb-2">Message</label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-slate-500">&gt;</span>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-[#0d0f12] border border-[var(--color-border-subtle)] rounded px-8 py-3 text-slate-300 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Enter message..."
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full mt-4 bg-transparent border border-primary/50 text-primary hover:bg-primary/10 py-3 rounded font-bold transition-colors flex items-center justify-center gap-2"
                onClick={(e) => e.preventDefault()}
              >
                $ invoke model
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
