import { Section } from './Section';
import { motion } from 'framer-motion';
import headshot from '../assets/images/headshot.png';

export function About() {
  return (
    <Section id="about" title="about.md">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          whileTap={{ scale: 0.99 }}
          className="md:col-span-8 text-slate-400 text-lg leading-relaxed space-y-6 font-sans group border-l-2 border-transparent hover:border-primary/50 active:border-primary/50 pl-4 transition-colors cursor-default"
        >
          <p>
            Hi, I'm <strong className="text-slate-200">Balaharish alais Yogesh N</strong>. I build end-to-end ML systems—from anomaly detection engines and real-time computer vision applications to LLM-powered autonomous agents.
          </p>
          <p>
            I am a recent B.Tech Information Technology graduate (Class of 2026) from Kamaraj College of Engineering and Technology, where I earned Honors in Product Development. I am currently working as an AI/ML Engineering Intern at a fast-paced startup.
          </p>
          <p>
            My long-term goal is to contribute to frontier AI research and engineering, pushing the boundaries of what intelligent systems can achieve. I thrive in environments that require rapid prototyping, critical thinking, and a deep understanding of core ML principles.
          </p>

          <div className="pt-6">
            <h3 className="text-slate-300 font-mono text-sm mb-3">// Languages</h3>
            <div className="flex gap-4 font-mono text-xs">
              <span className="text-[var(--color-syntax-green)]">Tamil (Native)</span>
              <span className="text-[var(--color-syntax-green)]">English (Fluent)</span>
              <span className="text-[var(--color-syntax-green)]">Hindi (Intermediate)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.97 }}
          className="md:col-span-4"
        >
          <div className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg overflow-hidden group hover:border-primary/30 active:border-primary/30 transition-colors cursor-default">
            {/* Window Controls */}
            <div className="px-4 py-2 border-b border-[var(--color-border-subtle)] bg-[#1e2127] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-red-500 group-active:bg-red-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-amber-500 group-active:bg-amber-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-green-500 group-active:bg-green-500 transition-colors" />
              <div className="ml-2 font-mono text-[10px] text-slate-500">headshot.png</div>
            </div>

            <div className="relative aspect-square flex items-center justify-center bg-[#0d0f12] overflow-hidden">
              <img
                src={headshot}
                alt="Harish"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 active:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
