import { Section } from './Section';
import { motion } from 'framer-motion';

const education = [
  {
    institution: 'Kamaraj College of Engineering and Technology',
    degree: 'B.Tech Computer Science',
    duration: '2022 — 2026',
    details: 'CGPA 8.0, Honors in Product Development'
  },
  {
    institution: 'KVS English Medium School (CBSE)',
    degree: 'Higher Secondary & SSLC',
    duration: '2020 — 2022',
    details: 'SSLC 79%, HSC 76%'
  }
];

export function Education() {
  return (
    <Section id="education" title="education.ts">
      <div className="max-w-3xl relative">
        {/* Timeline Line */}
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] bg-[var(--color-border-subtle)]" />
        
        <div className="space-y-8 relative z-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-8 group"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-bg-surface)] border-2 border-[var(--color-border-subtle)] group-hover:border-primary transition-colors flex items-center justify-center relative mt-1">
                <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-primary transition-colors" />
              </div>
              
              <div className="pt-1 w-full bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg p-5 group-hover:border-primary/30 transition-colors border-l-2 group-hover:border-l-primary/50">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-md font-mono font-bold text-[var(--color-syntax-purple)] group-hover:text-white transition-colors">{item.degree}</h3>
                  <div className="font-mono text-[11px] text-[var(--color-syntax-orange)] bg-[#1e2127] inline-block px-2 py-1 rounded border border-[var(--color-border-subtle)] mt-2 md:mt-0 w-fit">
                    {item.duration}
                  </div>
                </div>
                <h4 className="text-sm font-sans text-slate-300 mb-3">{item.institution}</h4>
                <p className="text-sm text-slate-400 font-mono text-[13px]"><span className="text-primary mr-2">▹</span>{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
