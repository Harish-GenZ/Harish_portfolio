import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {title && (
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-mono font-bold mb-12 text-slate-300"
          >
            <span className="text-primary/70 mr-3">//</span>
            {title}
          </motion.h2>
        )}
        {children}
      </div>
    </section>
  );
}
