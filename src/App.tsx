import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ParallaxStarBackground } from './components/background/ParallaxStarBackground';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';

const NAV_LINKS = [
  { name: 'projects',   href: '#projects'   },
  { name: 'skills',     href: '#skills'     },
  { name: 'experience', href: '#experience' },
  { name: 'contact',    href: '#contact'    },
];

function smoothTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function App() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothTo(href);
  };

  return (
    <Router>
      <a className="skip-link" href="#main-content">Skip to main content</a>

      {/* Fixed background layers */}
      <ParallaxStarBackground />

      <Navbar
        navLinks={NAV_LINKS}
        onNavClick={handleNavClick}
        resumeHref="#"
      />

      <main id="main-content" className="pt-32">
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
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-muted)' }}>
          Fawas
          <span style={{ color: 'var(--accent-warm)', margin: '0 0.5rem' }}>◆</span>
          © {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/username/new-porto"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-muted)' }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'; }}
        >
          source ↗
        </a>
      </Footer>
    </Router>
  );
}
