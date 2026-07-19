import { Section } from './Section';
import { flagshipProjects, miniProjects, hackathonProjects } from '../data/projects';
import { motion } from 'framer-motion';
import { ExternalLink, TerminalSquare, Play } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export function Projects() {
  return (
    <Section id="projects" title="models.py">
      <p className="text-slate-400 font-mono text-sm mb-16 -mt-8 opacity-70">
        # Click on the project titles to view their detailed posts and deployments
      </p>

      {/* Flagship Projects */}
      <div id="flagship-models" className="scroll-mt-24 mb-32">
        <h3 className="text-xl md:text-2xl font-mono font-bold text-slate-300 mb-8"># flagship_models.py</h3>
        <div className="space-y-24">
        {flagshipProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-12 gap-8 items-center group"
          >
            {/* Terminal mock instead of image */}
            <motion.div
              whileTap={{ scale: 0.97 }}
              className={`lg:col-span-6 aspect-video bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg overflow-hidden group-hover:border-primary/30 active:border-primary/30 transition-colors ${index % 2 === 1 ? 'lg:order-2' : ''} cursor-default`}
            >
              <div className="px-4 py-2 border-b border-[var(--color-border-subtle)] bg-[#1e2127] flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-red-500 group-active:bg-red-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-amber-500 group-active:bg-amber-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-green-500 group-active:bg-green-500 transition-colors" />
                <div className="ml-2 font-mono text-[10px] text-slate-500">bash — {project.id}</div>
              </div>
              <div className="p-4 flex flex-col h-[calc(100%-36px)] border-l-2 border-transparent group-hover:border-primary/50 group-active:border-primary/50 transition-colors overflow-x-hidden">
                <div className="font-mono text-sm text-slate-400 break-words">
                  <TerminalSquare size={32} strokeWidth={1} className="mb-4 opacity-50" />
                  <span className="text-primary">$</span> systemctl start {project.id}_engine<br />
                  &gt; loading models... OK<br />
                  &gt; initializing environment... OK<br />
                  <span className="text-[var(--color-syntax-green)]">&gt; ready.</span>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className={`lg:col-span-6 border-l-2 border-transparent group-hover:border-primary/50 group-active:border-primary/50 pl-4 transition-colors ${index % 2 === 1 ? 'lg:order-1 lg:border-l-0 lg:border-r-2 lg:pl-0 lg:pr-4 lg:text-right' : ''}`}>
              {project.status && (
                <div className={`text-xs font-mono text-primary mb-3 flex items-center gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {project.status}
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-mono font-bold text-[var(--color-syntax-purple)] mb-4 hover:text-white transition-colors">
                {project.titleUrl ? (
                  <a href={project.titleUrl} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 decoration-primary/50">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>

              <div className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                <p className="mb-4 text-slate-300">{project.description}</p>
                <ul className={`space-y-2 ${index % 2 === 1 ? 'text-left inline-block' : ''}`}>
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`flex flex-wrap gap-3 font-mono text-xs text-[var(--color-syntax-green)] mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className={`flex gap-6 font-mono text-sm ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <FaGithub size={16} />
                    $ code
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== '#' && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <ExternalLink size={16} />
                    $ deploy
                  </a>
                )}
                {project.playUrl && project.playUrl !== '#' && (
                  <a href={project.playUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Play size={16} />
                    $ Click here to Play
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      {/* Hackathons & Competitions */}
      <div id="hackathons" className="mb-32 scroll-mt-24">
        <h3 className="text-xl md:text-2xl font-mono font-bold text-slate-300 mb-8"># hackathons_and_events.py</h3>
        <div className="space-y-8">
          {hackathonProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-[#13151a] border border-[var(--color-border-subtle)] rounded-lg p-6 md:p-8 hover:border-primary/30 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  {project.status && (
                    <div className="text-xs font-mono text-primary mb-2 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                      {project.status}
                    </div>
                  )}
                  <h4 className="text-xl font-mono font-bold text-[var(--color-syntax-purple)] hover:text-white transition-colors">
                    {project.titleUrl ? (
                      <a href={project.titleUrl} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4 decoration-primary/50">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h4>
                </div>
                
                <div className="flex gap-4 font-mono text-sm shrink-0">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-300 text-sm mb-6 font-sans leading-relaxed max-w-3xl">
                {project.description}
              </p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-2 mb-6 max-w-3xl text-sm text-slate-400 font-sans">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary mt-1 text-xs">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-3 font-mono text-xs text-[var(--color-syntax-green)]">
                {project.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mini Projects */}
      <div id="mini-models" className="scroll-mt-24">
        <h3 className="text-xl md:text-2xl font-mono font-bold text-slate-300 mb-8"># mini_models.py</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {miniProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[var(--color-bg-surface)] border border-[var(--color-border-subtle)] rounded-lg overflow-hidden group hover:border-primary/30 active:border-primary/30 transition-colors flex flex-col h-full cursor-default"
            >
              <div className="px-4 py-2 border-b border-[var(--color-border-subtle)] bg-[#1e2127] flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-red-500 group-active:bg-red-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-amber-500 group-active:bg-amber-500 transition-colors" />
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600 group-hover:bg-green-500 group-active:bg-green-500 transition-colors" />
                <div className="ml-2 font-mono text-[10px] text-slate-500">{project.id}.py</div>

                {project.githubUrl && project.githubUrl !== '#' && (
                  <a href={project.githubUrl} className="ml-auto text-slate-400 hover:text-white transition-colors">
                    <FaGithub size={14} />
                  </a>
                )}
              </div>

              <div className="p-5 flex-grow flex flex-col border-l-2 border-transparent group-hover:border-primary/50 group-active:border-primary/50 transition-colors">
                <h4 className="text-md font-mono font-bold text-[var(--color-syntax-purple)] mb-2 transition-colors">
                  {project.titleUrl ? (
                    <a href={project.titleUrl} target="_blank" rel="noreferrer" className="group-hover:text-white group-active:text-white hover:underline underline-offset-4 decoration-primary/50">
                      {project.title}
                    </a>
                  ) : (
                    <span className="group-hover:text-white group-active:text-white">{project.title}</span>
                  )}
                </h4>
                <p className="text-sm text-slate-400 mb-6 font-sans flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 font-mono text-[11px] text-[var(--color-syntax-green)] mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </Section>
  );
}
