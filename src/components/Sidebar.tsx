import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, FileText, FileCode2, Terminal, X, FolderOpen, Folder } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const files = [
  { name: 'main.py', href: '#hero', icon: <FileCode2 size={14} className="text-[var(--color-syntax-purple)]" /> },
  { name: 'about.md', href: '#about', icon: <FileText size={14} className="text-blue-400" /> },
  { name: 'skills.yaml', href: '#skills', icon: <FileCode2 size={14} className="text-yellow-400" /> },
  {
    name: 'models.py',
    href: '#projects',
    icon: <Folder size={14} className="text-[var(--color-syntax-purple)]" />,
    children: [
      { name: 'flagship_models.py', href: '#flagship-models', icon: <FileCode2 size={13} className="text-[var(--color-syntax-purple)]" /> },
      { name: 'hackathons_and_events.py', href: '#hackathons', icon: <FileCode2 size={13} className="text-amber-400" /> },
      { name: 'mini_models.py', href: '#mini-models', icon: <FileCode2 size={13} className="text-slate-400" /> },
    ]
  },
  { name: 'metrics.csv', href: '#achievements', icon: <FileText size={14} className="text-green-400" /> },
  { name: 'training.log', href: '#education', icon: <Terminal size={14} className="text-slate-400" /> },
  { name: 'inference.py', href: '#contact', icon: <FileCode2 size={14} className="text-[var(--color-syntax-purple)]" /> },
];

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const [modelsExpanded, setModelsExpanded] = useState(false);

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar Content */}
      <motion.aside
        className={`fixed top-0 left-0 h-screen w-64 bg-[#181a1f] border-r border-[#27272A] z-50 flex flex-col font-mono text-sm overflow-hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="h-10 flex items-center justify-between px-4 text-xs font-medium text-slate-400 border-b border-[#27272A] uppercase tracking-wider bg-[#0d0f12]">
          <span>Explorer</span>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X size={16} className="text-slate-400 hover:text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-2">
          <div className="px-2 mb-1 flex items-center gap-1 text-slate-300 cursor-pointer hover:bg-white/5 py-1 rounded">
            <ChevronDown size={16} />
            <FolderOpen size={16} className="text-slate-400" />
            <span className="font-bold">HARISH.DEV</span>
          </div>
          
          <div className="flex flex-col">
            {files.map((file) => {
              if (file.children) {
                return (
                  <div key={file.name}>
                    {/* Folder row — navigate + toggle */}
                    <div className="flex items-center">
                      <a
                        href={file.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 pl-8 pr-2 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors flex-1"
                      >
                        {modelsExpanded
                          ? <FolderOpen size={14} className="text-[var(--color-syntax-purple)] shrink-0" />
                          : <Folder size={14} className="text-[var(--color-syntax-purple)] shrink-0" />
                        }
                        <span>{file.name}</span>
                      </a>
                      <button
                        onClick={() => setModelsExpanded(prev => !prev)}
                        className="pr-3 py-1.5 text-slate-500 hover:text-white transition-colors"
                        aria-label="Toggle models"
                      >
                        {modelsExpanded
                          ? <ChevronDown size={13} />
                          : <ChevronRight size={13} />
                        }
                      </button>
                    </div>

                    {/* Children tree */}
                    <AnimatePresence>
                      {modelsExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          {file.children.map((child, i) => (
                            <a
                              key={child.name}
                              href={child.href}
                              onClick={(e) => {
                                e.preventDefault();
                                const targetId = child.href.substring(1);
                                const target = document.getElementById(targetId);
                                if (target) {
                                  const y = target.getBoundingClientRect().top + window.scrollY - 100;
                                  window.scrollTo({ top: y, behavior: 'smooth' });
                                  window.history.pushState(null, '', child.href);
                                }
                                setTimeout(() => setIsOpen(false), 150);
                              }}
                              className="flex items-center gap-2 pl-6 pr-4 py-1.5 text-slate-500 hover:text-white hover:bg-white/5 transition-colors"
                            >
                              {/* Tree connector lines */}
                              <span className="text-slate-700 font-mono text-[10px] select-none shrink-0">
                                {i === file.children!.length - 1 ? '└─' : '├─'}
                              </span>
                              {child.icon}
                              <span className="text-xs truncate">{child.name}</span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <a
                  key={file.name}
                  href={file.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = file.href.substring(1);
                    const target = document.getElementById(targetId);
                    if (target) {
                      const y = target.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                      window.history.pushState(null, '', file.href);
                    }
                    setTimeout(() => setIsOpen(false), 150);
                  }}
                  className="flex items-center gap-2 px-8 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  {file.icon}
                  <span>{file.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </motion.aside>
    </>
  );
}
