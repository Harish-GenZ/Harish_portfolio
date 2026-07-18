import { Section } from './Section';
import { skillCategories } from '../data/skills';
import { motion } from 'framer-motion';

export function Skills() {
  return (
    <Section id="skills" title="skills.yaml">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg overflow-hidden group hover:border-primary/30 active:border-primary/30 transition-colors cursor-default"
          >
            {/* Window Controls */}
            <div className="px-4 py-2 border-b border-[var(--color-border-subtle)] bg-[#1e2127] flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-red-500 group-active:bg-red-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-amber-500 group-active:bg-amber-500 transition-colors" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-green-500 group-active:bg-green-500 transition-colors" />
              <div className="ml-2 font-mono text-[10px] text-slate-500">
                {category.title.toLowerCase().replace(/ /g, '_')}.yaml
              </div>
            </div>
            
            <div className="p-6 border-l-2 border-transparent group-hover:border-primary/50 group-active:border-primary/50 transition-colors h-full overflow-x-auto no-scrollbar whitespace-nowrap">
              <h3 className="text-[var(--color-syntax-purple)] font-mono font-medium mb-4 text-sm min-w-max">
                {category.title.toLowerCase().replace(/ /g, '_')}:
              </h3>
              <div className="flex flex-col gap-2 pl-4 mb-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="font-mono text-sm text-[var(--color-syntax-orange)] hover:text-white transition-colors cursor-default"
                  >
                    - {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
