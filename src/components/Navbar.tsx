import { useState, useEffect, useRef } from 'react';
import { Menu, Search } from 'lucide-react';

const navLinks = [
  { name: 'main.py', href: '#hero' },
  { name: 'about.md', href: '#about' },
  { name: 'skills.yaml', href: '#skills' },
  { name: 'models.py', href: '#projects' },
  { name: 'metrics.csv', href: '#achievements' },
  { name: 'training.log', href: '#education' },
  { name: 'inference.py', href: '#contact' },
];

interface NavbarProps {
  setSidebarOpen: (isOpen: boolean) => void;
  setPaletteOpen: (isOpen: boolean) => void;
}

export function Navbar({ setSidebarOpen, setPaletteOpen }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('main.py');
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.querySelector('[data-active="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeSection]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = navLinks.find(link => link.href.substring(1) === entry.target.id);
            if (activeLink) {
              setActiveSection(activeLink.name);
            }
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 w-full z-40 bg-[#0d0f12] border-b border-[#27272A] flex flex-col md:flex-row md:items-center md:justify-between font-mono text-sm md:h-16 md:px-8">
      {/* Top Title Bar (Mobile) & Brand (Desktop) */}
      <div className="flex items-center justify-between px-4 md:px-0 h-12 md:h-full bg-[#181a1f] md:bg-transparent border-b border-[#27272A] md:border-none w-full md:w-auto md:mr-8">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-slate-400 hover:text-white flex items-center justify-center w-8 h-8 md:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={21} />
          </button>
          <a href="#" className="font-bold text-slate-300 text-lg md:text-xl md:text-white flex items-center">
            <span className="hidden md:inline text-primary mr-3">~/</span>
            Harish.dev
          </a>
        </div>
        <button
          onClick={() => setPaletteOpen(true)}
          className="text-slate-400 hover:text-white flex items-center justify-center w-8 h-8 md:hidden"
          aria-label="Search command palette"
        >
          <Search size={18} />
        </button>
      </div>

      {/* Nav Links / Editor Tabs */}
      <div className="flex items-center overflow-x-auto no-scrollbar bg-[#0d0f12] md:bg-transparent h-12 md:h-full w-full md:w-auto" ref={tabsContainerRef}>
        <div className="flex items-center min-w-max h-full">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.name)}
                data-active={isActive}
                className={`relative flex items-center px-4 md:px-6 h-full transition-colors ${isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-4 md:left-6 right-4 md:right-6 h-0.5 bg-primary"></span>
                )}
              </a>
            );
          })}

          <div className="hidden md:flex items-center pl-6 gap-6 h-full">
            <a
              href="#projects"
              className="text-primary hover:text-white transition-colors px-4 py-2 border border-primary/30 rounded-md bg-primary/10 hover:bg-primary/20"
            >
              $ resume
            </a>
            <button
              onClick={() => setPaletteOpen(true)}
              className="text-slate-400 hover:text-white flex items-center justify-center w-9 h-9 transition-colors bg-[#181a1f] rounded-md border border-[#27272A] hover:border-primary/50"
              aria-label="Search command palette"
            >
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
