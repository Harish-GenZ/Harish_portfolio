import { motion } from 'framer-motion';
import { Mail, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-white mb-6 flex items-center">
              Harish<span className="inline-block w-[1ch] h-[1em] bg-primary ml-2 animate-blink"></span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-xl md:text-2xl text-primary font-mono mb-6 flex items-center gap-3">
              <Terminal size={24} />
              AI/ML Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl font-sans">
              Passionate about building intelligent systems from first principles. 
              Currently an AI/ML engineering intern and final-year CS student, 
              focusing on agents, anomaly detection, and LLM-powered products.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 mb-12 font-mono text-sm"
          >
            <a 
              href="#projects" 
              className="text-primary hover:text-white transition-colors"
            >
              $ ./view_projects.sh
            </a>
            <a 
              href="#contact" 
              className="text-slate-400 hover:text-white transition-colors"
            >
              $ init_contact
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 text-slate-500"
          >
            <a href="https://github.com/Harish-GenZ" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaGithub size={22} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/balaharish-yogesh-n-95a277305" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin size={22} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:balah8986@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={22} />
              <span className="sr-only">Email</span>
            </a>
            <a href="https://leetcode.com/u/BALAHARISHALAISYOGESH" target="_blank" rel="noreferrer" className="font-mono text-xs font-medium hover:text-primary transition-colors flex items-center h-5">
              LC
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
