import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ContactSection } from './components/sections/ContactSection';

const NAV_LINKS = [
  { name: 'Projects',   href: '#projects'   },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact'    },
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
      {/* Skip to main content */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      {/* Fixed background layers */}
      <div className="bg-layer bg-layer__base"  aria-hidden="true" />
      <div className="bg-layer bg-layer__spotlight" aria-hidden="true" />
      <div className="bg-layer bg-layer__grid" aria-hidden="true" />
      <div className="bg-layer bg-layer__vignette" aria-hidden="true" />

      <Navbar
        navLinks={NAV_LINKS}
        onNavClick={handleNavClick}
        resumeHref="#"
      >
        {/* Brand wordmark */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            onClick={e => { e.preventDefault(); smoothTo('#'); }}
            className="text-lg font-medium tracking-tight"
            style={{
              fontFamily: 'var(--font-serif)',
              color: 'var(--fg-primary)',
              fontWeight: 400,
            }}
            aria-label="Return to top"
          >
            Fawas
            <span style={{ color: 'var(--accent-warm)' }}>.</span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary navigation">
            {NAV_LINKS.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className="text-sm transition-colors"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </Navbar>

      <main id="main-content">
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
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--fg-muted)',
          }}
        >
          Fawas
          <span style={{ color: 'var(--accent-warm)', margin: '0 0.5rem' }}>◆</span>
          © {new Date().getFullYear()}
        </p>
        <a
          href="https://github.com/Fawwas25/new-porto"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors"
          style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--fg-muted)',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-muted)'; }}
        >
          Source ↗
        </a>
      </Footer>
    </Router>
  );
}
