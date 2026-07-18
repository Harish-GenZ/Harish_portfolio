import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, FileJson, FileCode2, Terminal, User, Briefcase, Award, GraduationCap, X } from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const commands = [
  { name: 'Go to Hero', href: '#hero', icon: <User size={16} className="text-slate-400" /> },
  { name: 'Go to About', href: '#about', icon: <FileText size={16} className="text-blue-400" /> },
  { name: 'Go to Skills', href: '#skills', icon: <FileJson size={16} className="text-yellow-400" /> },
  { name: 'Go to Projects', href: '#projects', icon: <Briefcase size={16} className="text-purple-400" /> },
  { name: 'Go to Achievements', href: '#achievements', icon: <Award size={16} className="text-yellow-400" /> },
  { name: 'Go to Education', href: '#education', icon: <GraduationCap size={16} className="text-blue-500" /> },
  { name: 'Go to Contact', href: '#contact', icon: <Terminal size={16} className="text-green-400" /> },
  { name: 'Email Me', href: 'mailto:balah8986@gmail.com', icon: <FileCode2 size={16} className="text-slate-400" /> },
];

export function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen]);

  const filteredCommands = query === '' 
    ? commands 
    : commands.filter(cmd => cmd.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] sm:pt-[20vh]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl mx-4 bg-[#181a1f] border border-[#27272A] rounded-xl shadow-2xl overflow-hidden font-mono"
          >
            <div className="flex items-center px-4 border-b border-[#27272A]">
              <Search size={20} className="text-slate-500" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent border-none text-slate-200 placeholder-slate-500 px-4 py-4 focus:outline-none focus:ring-0 text-sm md:text-base"
              />
              <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white md:hidden">
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto py-2">
              {filteredCommands.length === 0 ? (
                <div className="px-8 py-10 text-center text-slate-500 text-sm">
                  No results found for "{query}"
                </div>
              ) : (
                <ul className="px-2">
                  {filteredCommands.map((cmd) => (
                    <li key={cmd.name}>
                      <a
                        href={cmd.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-primary/20 hover:text-white cursor-pointer transition-colors min-h-[44px]"
                      >
                        {cmd.icon}
                        <span className="text-sm">{cmd.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div className="hidden md:flex items-center px-4 py-3 border-t border-[#27272A] text-xs text-slate-500 bg-[#0d0f12]">
              <span className="flex items-center gap-1">
                <kbd className="bg-[#1e2127] border border-[#27272A] px-1.5 py-0.5 rounded">↑</kbd>
                <kbd className="bg-[#1e2127] border border-[#27272A] px-1.5 py-0.5 rounded">↓</kbd>
                to navigate
              </span>
              <span className="flex items-center gap-1 ml-4">
                <kbd className="bg-[#1e2127] border border-[#27272A] px-1.5 py-0.5 rounded">Enter</kbd>
                to select
              </span>
              <span className="flex items-center gap-1 ml-4">
                <kbd className="bg-[#1e2127] border border-[#27272A] px-1.5 py-0.5 rounded">Esc</kbd>
                to close
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
