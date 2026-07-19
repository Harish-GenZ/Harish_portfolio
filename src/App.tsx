import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeViewer } from './components/ResumeViewer';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (currentPath === '/resume') {
    return <ResumeViewer />;
  }

  return (
    <div className="bg-[#0d0f12] min-h-screen text-slate-200 font-sans selection:bg-primary/30 selection:text-white flex overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />

      <div className="flex-1 flex flex-col min-w-0 md:ml-0">
        <Navbar setSidebarOpen={setSidebarOpen} setPaletteOpen={setPaletteOpen} />

        <main className="relative flex-1 overflow-x-hidden pt-20 md:pt-20 pb-12">
          {/* Catchy Floating Resume Button */}
          <button
            onClick={() => {
              window.location.pathname = '/resume';
            }}
            className={`fixed top-32 md:top-28 right-4 md:right-8 z-40 bg-[#0d0f12]/80 backdrop-blur-md border border-primary text-primary hover:bg-primary/20 hover:text-white px-4 py-2 rounded-md font-mono text-xs md:text-sm shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300 flex items-center gap-2 group cursor-pointer ${isScrolled ? 'opacity-40 hover:opacity-100' : 'opacity-100'}`}
          >
            <span className="w-2 h-2 rounded-full bg-primary group-hover:bg-white animate-pulse"></span>
            $ resume
          </button>

          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />

          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 flex flex-wrap items-center justify-center font-mono text-[10px] sm:text-xs text-slate-500 opacity-60 hover:opacity-100 transition-opacity gap-1">
            <span className="text-white whitespace-nowrap">harish</span>
            <span className="text-primary">=</span>
            <span className="text-[var(--color-syntax-purple)] whitespace-nowrap">pipeline</span>
            <span className="text-slate-400">(</span>
            <span className="text-[var(--color-syntax-green)] whitespace-nowrap">"ai-engineer"</span>
            <span className="text-slate-400">,</span>
            <span className="text-white ml-1 whitespace-nowrap">version</span>
            <span className="text-primary">=</span>
            <span className="text-[var(--color-syntax-green)] whitespace-nowrap">"1.3"</span>
            <span className="text-slate-400">)</span>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
