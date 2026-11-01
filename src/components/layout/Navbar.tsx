import { ReactNode, useState, useEffect, useRef } from 'react';

interface NavbarProps {
  children: ReactNode;
  /** Mobile nav links passed separately so drawer can render them */
  navLinks?: { name: string; href: string }[];
  onNavClick?: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
  resumeHref?: string;
}

export function Navbar({ children, navLinks = [], onNavClick, resumeHref }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  // Focus trap inside drawer
  useEffect(() => {
    if (!open || !drawerRef.current) return;
    const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    focusables[0]?.focus();

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [open]);

  // Prevent body scroll while drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    onNavClick?.(e, href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full"
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-subtle)',
          backgroundColor: 'rgba(6,8,16,0.82)',
        }}
      >
        <div
          className="flex items-center justify-between h-16"
          style={{
            maxWidth: 'var(--container-max)',
            marginInline: 'auto',
            paddingInline: 'clamp(1rem, 4vw, 2rem)',
          }}
        >
          {/* Brand + desktop nav */}
          {children}

          {/* Desktop resume CTA */}
          {resumeHref && (
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-4 py-2 text-sm transition-colors rounded-[var(--radius-md)]"
              style={{
                fontFamily: 'var(--font-sans)',
                border: '1px solid var(--border-ornament)',
                color: 'var(--fg-primary)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(148,175,220,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '';
              }}
            >
              Résumé ↗
            </a>
          )}

          {/* Hamburger — mobile only */}
          <button
            ref={triggerRef}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-nav-drawer"
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            style={{ color: 'var(--fg-primary)' }}
          >
            {/* Animated bars */}
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: 'currentColor',
                transition: 'transform var(--t-normal), opacity var(--t-fast)',
                transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: 'currentColor',
                transition: 'opacity var(--t-fast)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '20px',
                height: '1.5px',
                background: 'currentColor',
                transition: 'transform var(--t-normal), opacity var(--t-fast)',
                transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          aria-modal="true"
          role="dialog"
          aria-label="Navigation menu"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0"
            style={{ background: 'rgba(6,8,16,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            className="absolute top-0 right-0 h-full w-72 flex flex-col"
            style={{
              background: 'var(--bg-surface)',
              borderLeft: '1px solid var(--border-subtle)',
            }}
          >
            {/* Drawer header */}
            <div
              className="flex items-center justify-between h-16 px-6"
              style={{ borderBottom: '1px solid var(--border-subtle)' }}
            >
              <span
                className="text-sm tracking-[0.18em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-muted)' }}
              >
                Menu
              </span>
              <button
                aria-label="Close navigation menu"
                onClick={() => { setOpen(false); triggerRef.current?.focus(); }}
                className="flex items-center justify-center w-8 h-8 rounded-[var(--radius-md)]"
                style={{ color: 'var(--fg-secondary)', border: '1px solid var(--border-subtle)' }}
              >
                ✕
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => handleLink(e, link.href)}
                  className="flex items-center h-11 px-3 rounded-[var(--radius-md)] text-base transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--fg-secondary)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)';
                    (e.currentTarget as HTMLElement).style.background = 'rgba(148,175,220,0.06)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)';
                    (e.currentTarget as HTMLElement).style.background = '';
                  }}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Resume link at bottom */}
            {resumeHref && (
              <div className="mt-auto p-6" style={{ borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center h-11 w-full rounded-[var(--radius-md)] text-sm transition-colors"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    border: '1px solid var(--border-ornament)',
                    color: 'var(--fg-primary)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(148,175,220,0.08)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = '';
                  }}
                >
                  Résumé ↗
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
