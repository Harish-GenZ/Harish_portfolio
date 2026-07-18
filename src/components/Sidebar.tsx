import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText, FileCode2, Terminal, X, FolderOpen } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const files = [
  { name: 'main.py', href: '#hero', icon: <FileCode2 size={14} className="text-[var(--color-syntax-purple)]" /> },
  { name: 'about.md', href: '#about', icon: <FileText size={14} className="text-blue-400" /> },
  { name: 'skills.yaml', href: '#skills', icon: <FileCode2 size={14} className="text-yellow-400" /> },
  { name: 'models.py', href: '#projects', icon: <FileCode2 size={14} className="text-[var(--color-syntax-purple)]" /> },
  { name: 'metrics.csv', href: '#achievements', icon: <FileText size={14} className="text-green-400" /> },
  { name: 'training.log', href: '#education', icon: <Terminal size={14} className="text-slate-400" /> },
  { name: 'inference.py', href: '#contact', icon: <FileCode2 size={14} className="text-[var(--color-syntax-purple)]" /> },
];

export function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
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
            {files.map((file) => (
              <a
                key={file.name}
                href={file.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-8 py-1.5 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                {file.icon}
                <span>{file.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
}
