import { Section } from './Section';
import { motion } from 'framer-motion';

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-8 text-slate-400 text-lg leading-relaxed space-y-6">
          <p>
            Hi, I'm <strong className="text-slate-200">Balaharish Alais Yogesh N</strong>. I build end-to-end ML systems—from anomaly detection engines and real-time computer vision applications to LLM-powered autonomous agents.
          </p>
          <p>
            Currently, I'm a final-year B.Tech Computer Science student at Kamaraj College of Engineering and Technology (Honors in Product Development), and working as an AI/ML Engineering Intern at a fast-paced startup.
          </p>
          <p>
            My long-term goal is to contribute to frontier AI research and engineering, pushing the boundaries of what intelligent systems can achieve. I thrive in environments that require rapid prototyping, critical thinking, and a deep understanding of core ML principles.
          </p>
          
          <div className="pt-6">
            <h3 className="text-slate-300 font-medium mb-3">Languages</h3>
            <div className="flex gap-4 font-mono text-sm">
              <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-indigo-300">Tamil (Native)</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-indigo-300">English (Fluent)</span>
              <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-indigo-300">Hindi (Intermediate)</span>
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-4 relative group"
        >
          {/* Decorative frame */}
          <div className="absolute -inset-4 border border-indigo-500/20 rounded-2xl bg-indigo-500/5 transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
          <div className="absolute -inset-4 border border-slate-700/50 rounded-2xl bg-slate-800/50 transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500" />
          
          <div className="relative aspect-square overflow-hidden rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
            {/* Fallback avatar if headshot is missing */}
            <div className="text-slate-500 font-mono text-sm text-center px-4">
              [Professional Headshot Placeholder]
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
