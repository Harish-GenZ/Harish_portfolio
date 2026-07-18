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
    <Section id="education" title="Education">
      <div className="max-w-3xl relative">
        {/* Timeline Line */}
        <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-slate-800" />
        
        <div className="space-y-12 relative z-10">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-8"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#121214] border-2 border-indigo-500 flex items-center justify-center relative mt-1">
                <div className="w-3 h-3 rounded-full bg-indigo-400" />
              </div>
              
              <div className="pt-2">
                <h3 className="text-xl font-bold text-slate-200 mb-1">{item.degree}</h3>
                <h4 className="text-lg text-indigo-400 mb-3">{item.institution}</h4>
                <div className="font-mono text-xs text-slate-500 mb-3 bg-slate-800/50 inline-block px-3 py-1 rounded">
                  {item.duration}
                </div>
                <p className="text-slate-400">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
