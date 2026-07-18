export function Footer() {
  return (
    <footer className="border-t border-[#27272A] bg-[#0A0A0B] py-10 mt-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-slate-400 text-sm text-center md:text-left">
          <p>© {new Date().getFullYear()} Balaharish Alais Yogesh N.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>

        <div className="flex flex-col items-center md:items-end text-sm text-slate-500 font-mono">
          <p>Built with <span className="text-indigo-400">React</span> & <span className="text-indigo-400">TypeScript</span></p>
          <p className="mt-1">Designed for performance</p>
        </div>

      </div>
    </footer>
  );
}
