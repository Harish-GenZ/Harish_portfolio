import { useState } from 'react';
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

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <div className="bg-[#0d0f12] min-h-screen text-slate-200 font-sans selection:bg-primary/30 selection:text-white flex overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <CommandPalette isOpen={paletteOpen} setIsOpen={setPaletteOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 md:ml-0">
        <Navbar setSidebarOpen={setSidebarOpen} setPaletteOpen={setPaletteOpen} />
        
        <main className="flex-1 overflow-x-hidden pt-20 md:pt-20 pb-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 flex items-center justify-center font-mono text-xs text-slate-500 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[var(--color-syntax-purple)] mr-2">const</span>
            <span className="text-white mr-2">project</span>
            <span className="text-primary mr-2">=</span>
            <span className="text-[var(--color-syntax-green)]">"Harish_portfolio_V 1.0"</span>
            <span className="text-slate-400">;</span>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
