import { Section } from './Section';
import { motion } from 'framer-motion';
import { Award, FileText, Medal, BookOpen } from 'lucide-react';

const achievements = [
  {
    title: 'Authored & published "Attendifyx: Smart Attendance System Using Deep Learning"',
    context: 'International Research Journal on Advanced Science Hub (IRJASH)',
    icon: <FileText className="text-indigo-400" size={24} />
  },
  {
    title: 'Presented & published "Quantum Computing in Drug Discovery"',
    context: '2nd International Conference on Futuristic Trends in Science, Engineering, and Management, Patna',
    icon: <BookOpen className="text-emerald-400" size={24} />
  },
  {
    title: 'Presented "InsiderWatch — AI-based Threat Detection System"',
    context: 'IMSTEM 2026',
    icon: <Award className="text-amber-400" size={24} />
  },
  {
    title: 'Oracle Java Certified Foundations Associate',
    context: 'International certification, scored 88%',
    icon: <Medal className="text-purple-400" size={24} />
  },
  {
    title: 'Value-Added Course completion in Data Science using Python & IoT',
    context: 'Kamaraj College of Engineering and Technology',
    icon: <BookOpen className="text-blue-400" size={24} />
  }
];

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements & Publications">
      <div className="space-y-6 max-w-3xl">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-4 p-5 rounded-xl bg-[#121214] border border-[#27272A] hover:border-indigo-500/30 transition-colors"
          >
            <div className="flex-shrink-0 mt-1 bg-[#1A1A1D] p-3 rounded-lg border border-[#27272A]">
              {item.icon}
            </div>
            <div>
              <h4 className="text-slate-200 font-medium text-lg leading-snug mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm">{item.context}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
