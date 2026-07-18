import { Section } from './Section';
import { flagshipProjects, miniProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, TerminalSquare } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  return (
    <Section id="projects" title="Featured Work">
      
      {/* Flagship Projects */}
      <div className="space-y-24 mb-32">
        {flagshipProjects.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-8 items-center"
          >
            {/* Abstract visual representation instead of a screenshot */}
            <div className={`lg:col-span-7 aspect-[16/10] bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              
              {/* Terminal / Code mockup graphic */}
              <div className="absolute inset-0 p-6 flex flex-col opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="font-mono text-sm text-indigo-400/80 mt-auto">
                  <TerminalSquare size={48} strokeWidth={1} className="mb-4 opacity-50" />
                  $ systemctl start {project.id}_engine<br/>
                  &gt; loading models... OK<br/>
                  &gt; initializing environment... OK<br/>
                  <span className="text-emerald-500/80">&gt; ready.</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:text-right lg:order-1' : ''}`}>
              {project.status && (
                <div className={`text-xs font-mono text-emerald-400 mb-3 ${index % 2 === 1 ? 'lg:justify-end' : ''} flex items-center gap-2`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.status}
                </div>
              )}
              <h3 className="text-2xl font-bold text-slate-100 mb-4">{project.title}</h3>
              
              <div className="bg-[#121214] border border-[#27272A] p-6 rounded-xl mb-6 text-slate-400 text-sm leading-relaxed shadow-xl relative z-20">
                <p className="mb-4 text-slate-300">{project.description}</p>
                <ul className={`space-y-2 ${index % 2 === 1 ? 'text-left' : ''}`}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-indigo-500 mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`flex flex-wrap gap-3 font-mono text-xs text-slate-500 mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <FaGithub size={20} />
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mini Projects */}
      <div>
        <h3 className="text-2xl font-bold text-slate-200 mb-8 text-center">Other Noteworthy Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {miniProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#121214] border border-[#27272A] p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300 group cursor-default flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <TerminalSquare className="text-indigo-500/50 group-hover:text-indigo-500 transition-colors" size={32} strokeWidth={1.5} />
                <div className="flex gap-3">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} className="text-slate-400 hover:text-indigo-400">
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h4>
              <p className="text-sm text-slate-400 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-500 mt-auto">
                {project.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
}
