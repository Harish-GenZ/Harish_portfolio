import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Harish
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl md:text-3xl text-indigo-400 font-medium mb-6 flex items-center gap-3">
              <Terminal size={28} />
              AI/ML Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl">
              Passionate about building intelligent systems from first principles. 
              Currently an AI/ML engineering intern and final-year CS student, 
              focusing on agents, anomaly detection, and LLM-powered products.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mb-12"
          >
            <a 
              href="#projects" 
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-md transition-colors"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 text-slate-300 font-medium rounded-md transition-all"
            >
              Get in touch
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 text-slate-400"
          >
            <a href="https://github.com/Harish-GenZ" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/balaharish-yogesh-n-95a277305" target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">
              <FaLinkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:balah8986@gmail.com" className="hover:text-indigo-400 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
            {/* LeetCode custom text link since lucide doesn't have it */}
            <a href="https://leetcode.com/u/BALAHARISHALAISYOGESH" target="_blank" rel="noreferrer" className="font-mono text-sm font-medium hover:text-indigo-400 transition-colors flex items-center h-6">
              LC
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
