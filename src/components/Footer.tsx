import { GitBranch, Terminal, RefreshCw, Check, Bell } from 'lucide-react';

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-7 bg-[#0d0f12] border-t border-[#27272A] flex items-center justify-between px-3 z-50 font-mono text-[11px] text-slate-400 overflow-x-auto no-scrollbar whitespace-nowrap">
      <div className="flex items-center h-full gap-4 min-w-max">
        <a href="https://github.com/Harish-GenZ/Harish_portfolio" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <GitBranch size={13} className="text-primary" />
          <span>main*</span>
        </a>
        <div className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <RefreshCw size={12} />
          <span>0</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <Terminal size={13} />
          <span>Terminal</span>
        </div>
      </div>

      <div className="flex items-center h-full gap-4 min-w-max ml-4">
        <div className="hidden md:flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <span>Python {'>'} PyTorch</span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <Check size={13} />
          <span>Prettier</span>
        </div>
        <div className="flex items-center gap-1.5 hover:bg-white/5 px-2 h-full cursor-pointer transition-colors">
          <Bell size={13} />
        </div>
      </div>
    </footer>
  );
}
