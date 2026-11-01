import { useState, useEffect } from 'react';

interface NavbarProps {
  navLinks?: { name: string; href: string }[];
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  resumeHref?: string;
}

export function Navbar({ navLinks = [], onNavClick, resumeHref = '#' }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavClick?.(e, href);
  };

  return (
    <header
      className="fixed z-40 w-full transition-transform duration-300"
      style={{
        top: '1rem',
        left: '50%',
        transform: isVisible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(-120%)',
        maxWidth: 'calc(var(--container-max) + 4rem)',
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div
        className="backdrop-blur-md rounded-[var(--radius-lg)]"
        style={{
          maxWidth: 'var(--container-max)',
          marginInline: 'auto',
          paddingInline: 'clamp(1rem, 4vw, 2rem)',
          paddingBlock: '0.75rem',
          border: '1px solid var(--border-subtle)',
          backgroundColor: 'rgba(6,8,16,0.85)',
        }}
        >
          {/* ── Left Zone: Brand Identity ──────────────────────────────── */}
          <div
            className="flex items-center h-14 md:h-[72px]"
            style={{ gap: '0' }}
          >
            <a
              href="#"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              aria-label="Return to top"
              className="brand-link"
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 400,
                fontSize: '1.125rem',
                color: 'var(--fg-primary)',
                letterSpacing: '-0.01em',
                flexShrink: 0,
                padding: '0.25rem 0.5rem',
                borderRadius: 'var(--radius-md)',
              }}
            >
              Fawas<span style={{ color: 'var(--accent-warm)' }}>.</span>
            </a>

            {/* ── Center Zone: Horizontal Nav Links ──────────────────────── */}
            <nav
              className="flex-1 flex items-center justify-center gap-1 ml-4 md:ml-8"
              aria-label="Primary navigation"
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleLink(e, link.href)}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.06em',
                    color: 'var(--fg-muted)',
                    padding: '0.375rem 0.625rem',
                    borderRadius: 'var(--radius-md)',
                    transition: 'color var(--t-fast), background-color var(--t-fast)',
                    textTransform: 'lowercase',
                  }}
                  className="nav-link"
                  tabIndex={0}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* ── Right Zone: Contact CTA ────────────────────────────────── */}
            <div className="flex-1 flex items-center justify-end md:justify-start md:ml-4">
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.06em',
                  color: 'var(--accent)',
                  padding: '0.375rem 0.875rem',
                  border: '1px solid var(--border-mid)',
                  borderRadius: 'var(--radius-md)',
                  transition: 'color var(--t-fast), border-color var(--t-fast), background-color var(--t-fast)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--fg-primary)';
                  el.style.borderColor = 'var(--accent)';
                  el.style.background = 'rgba(123,167,212,0.08)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = 'var(--accent)';
                  el.style.borderColor = 'var(--border-mid)';
                  el.style.background = '';
                }}
              >
                [ Get in Touch ]
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
