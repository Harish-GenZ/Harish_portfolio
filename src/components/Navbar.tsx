import { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, Search, ChevronDown, FolderOpen } from 'lucide-react';

const navLinks = [
  { name: 'main.py', href: '#hero' },
  { name: 'about.md', href: '#about' },
  { name: 'skills.yaml', href: '#skills' },
  {
    name: 'models.py',
    href: '#projects',
    children: [
      { name: 'flagship_models.py', href: '#flagship-models' },
      { name: 'hackathons_and_events.py', href: '#hackathons' },
      { name: 'mini_models.py', href: '#mini-models' },
    ]
  },
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
  const [modelsOpen, setModelsOpen] = useState(false);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const modelsBtnRef = useRef<HTMLButtonElement>(null);

  // Position the fixed dropdown relative to the button
  const openDropdown = useCallback(() => {
    if (modelsBtnRef.current) {
      const rect = modelsBtnRef.current.getBoundingClientRect();
      setDropdownPos({ top: rect.bottom, left: rect.left });
    }
    setModelsOpen(true);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!modelsOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        modelsBtnRef.current &&
        !modelsBtnRef.current.contains(e.target as Node)
      ) {
        setModelsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [modelsOpen]);

  // Auto-scroll active tab into view
  useEffect(() => {
    if (tabsContainerRef.current) {
      const activeTab = tabsContainerRef.current.querySelector('[data-active="true"]');
      if (activeTab) {
        activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeSection]);

  // IntersectionObserver for all sections including sub-sections
  useEffect(() => {
    const allSections = [
      { id: 'hero', name: 'main.py' },
      { id: 'about', name: 'about.md' },
      { id: 'skills', name: 'skills.yaml' },
      { id: 'projects', name: 'models.py' },
      { id: 'flagship-models', name: 'models.py' },
      { id: 'hackathons', name: 'models.py' },
      { id: 'mini-models', name: 'models.py' },
      { id: 'achievements', name: 'metrics.csv' },
      { id: 'education', name: 'training.log' },
      { id: 'contact', name: 'inference.py' },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = allSections.find(s => s.id === entry.target.id);
            if (match) setActiveSection(match.name);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    allSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
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
        <div
          className="flex items-center overflow-x-auto no-scrollbar bg-[#0d0f12] md:bg-transparent h-12 md:h-full w-full md:w-auto"
          ref={tabsContainerRef}
        >
          <div className="flex items-center min-w-max h-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;

              if (link.children) {
                return (
                  <button
                    key={link.name}
                    ref={modelsBtnRef}
                    data-active={isActive}
                    onClick={() => modelsOpen ? setModelsOpen(false) : openDropdown()}
                    className={`relative flex items-center gap-1.5 px-4 md:px-5 h-full transition-colors whitespace-nowrap ${
                      isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${modelsOpen ? 'rotate-180' : ''}`}
                    />
                    {isActive && (
                      <span className="absolute bottom-0 left-4 md:left-5 right-4 md:right-5 h-0.5 bg-primary" />
                    )}
                  </button>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.name)}
                  data-active={isActive}
                  className={`relative flex items-center px-4 md:px-5 h-full transition-colors whitespace-nowrap ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-4 md:left-5 right-4 md:right-5 h-0.5 bg-primary" />
                  )}
                </a>
              );
            })}

            <div className="hidden md:flex items-center pl-6 gap-4 h-full">
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

      {/* Dropdown — rendered at fixed position OUTSIDE the header to avoid overflow clipping */}
      {modelsOpen && (
        <>
          {/* Backdrop for mobile tap-to-close */}
          <div
            className="fixed inset-0 z-[49]"
            onClick={() => setModelsOpen(false)}
          />
          <div
            style={{ top: dropdownPos.top, left: dropdownPos.left }}
            className="fixed z-[51] w-56 bg-[#181a1f] border border-[#27272A] border-t-0 rounded-b-lg shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Tree root label */}
            <div className="flex items-center gap-2 px-3 py-2 text-[11px] text-slate-500 border-b border-[#27272A]">
              <FolderOpen size={12} className="text-[var(--color-syntax-purple)]" />
              <span className="text-[var(--color-syntax-purple)] font-mono">models.py</span>
            </div>

            {navLinks.find(l => l.children)!.children!.map((child, i, arr) => (
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
                  setActiveSection('models.py');
                  setTimeout(() => setModelsOpen(false), 150);
                }}
                className="flex items-center gap-2 px-3 py-2.5 text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span className="text-slate-600 font-mono text-[10px] select-none shrink-0">
                  {i === arr.length - 1 ? '└──' : '├──'}
                </span>
                <span className="text-primary text-[10px]">▸</span>
                <span className="font-mono truncate">{child.name}</span>
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
