import { Section } from './Section';
import { skillCategories } from '../data/skills';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <Section id="skills" title="Skills & Arsenal">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[#121214] border border-[#27272A] rounded-xl p-6 hover:border-indigo-500/30 transition-colors group"
          >
            <h3 className="text-slate-200 font-medium mb-4 group-hover:text-indigo-400 transition-colors">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-[#1A1A1D] border border-[#27272A] text-slate-400 text-sm font-mono rounded-md hover:bg-indigo-500/10 hover:text-indigo-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
