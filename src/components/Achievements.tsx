import { Section } from './Section';
import { motion } from 'framer-motion';
import { Award, FileText, Medal, BookOpen } from 'lucide-react';

const achievements = [
  {
    title: 'Authored & published "Attendifyx: Smart Attendance System Using Deep Learning"',
    context: 'International Research Journal on Advanced Science Hub (IRJASH)',
    icon: <FileText className="text-[var(--color-syntax-purple)]" size={20} />
  },
  {
    title: 'Presented & published "Quantum Computing in Drug Discovery"',
    context: '2nd International Conference on Futuristic Trends in Science, Engineering, and Management, Patna',
    icon: <BookOpen className="text-[var(--color-syntax-green)]" size={20} />
  },
  {
    title: 'Presented "InsiderWatch — AI-based Threat Detection System"',
    context: 'IMSTEM 2026',
    icon: <Award className="text-[var(--color-syntax-orange)]" size={20} />
  },
  {
    title: 'Oracle Java Certified Foundations Associate',
    context: 'International certification, scored 88%',
    icon: <Medal className="text-primary" size={20} />
  },
  {
    title: 'Value-Added Course completion in Data Science using Python & IoT',
    context: 'Kamaraj College of Engineering and Technology',
    icon: <BookOpen className="text-[var(--color-syntax-green)]" size={20} />
  }
];

export function Achievements() {
  return (
    <Section id="achievements" title="achievements.json">
      <div className="space-y-4 max-w-3xl">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex gap-4 p-4 rounded-lg bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] hover:border-primary/30 transition-colors group border-l-2 hover:border-l-primary/50 cursor-default"
          >
            <div className="flex-shrink-0 mt-1 bg-[#1e2127] p-2.5 rounded-md border border-[var(--color-border-subtle)]">
              {item.icon}
            </div>
            <div>
              <h4 className="text-slate-200 font-mono font-bold text-sm leading-snug mb-1 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-slate-400 text-sm font-sans">{item.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
