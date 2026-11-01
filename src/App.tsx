import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';

export function App() {
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#08090d]">
        {/* Background layers */}
        <div className="bg-layer bg-layer__base" />
        <div className="bg-layer bg-layer__spotlight" />
        <div className="bg-layer bg-layer__grid" />
        <div className="bg-layer bg-layer__vignette" />

        <Navbar>
          <div className="flex items-center gap-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xl font-bold text-[#f8fafc]"
            >
              Fawas<span className="text-[#06b6d4]">.</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-[#94a3b8] hover:text-[#06b6d4] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden md:block px-4 py-2 rounded-md bg-[#06b6d4] text-[#08090d] text-sm font-medium hover:bg-[#22d3ee] transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </Navbar>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <ProjectsSection />
                  <SkillsSection />
                  <ExperienceSection />
                  <ContactSection />
                </>
              }
            />
          </Routes>
        </main>

        <Footer>
          <div className="flex flex-col md:flex-row items-center gap-4 text-[#64748b] text-sm">
            <p>© 2026 Fawas. All rights reserved.</p>
            <a
              href="https://github.com/username/new-porto"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#06b6d4] transition-colors"
            >
              Source Code
            </a>
          </div>
        </Footer>
      </div>
    </Router>
  );
}
