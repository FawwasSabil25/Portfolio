import { FloralHero } from '../../assets/ornaments/FloralHero';
import { portfolioData } from '../../data/portfolioData';

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section
      className="relative"
      style={{
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(4rem, 8vw, 7rem)',
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div
        className="relative mx-auto flex flex-col lg:flex-row lg:items-start gap-12"
        style={{ maxWidth: 'var(--container-max)' }}
      >
        {/* ── Text column ──────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          {/* Availability status — only when factually valid placeholder */}
          <p
            className="mb-8 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--fg-muted)' }}
          >
            {/* Gold dot — single restrained use of accent-warm */}
            <span
              className="block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-warm)' }}
            />
            {hero.status}
          </p>

          {/* H1 — Geist Serif, large display */}
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(2.75rem, 6.5vw, 4.75rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.018em',
              color: 'var(--fg-primary)',
              maxWidth: '14ch',
            }}
          >
            {hero.name}
            <br />
            <span style={{ color: 'var(--fg-secondary)' }}>
              {hero.role}
            </span>
          </h1>

          {/* Sub-copy */}
          <p
            className="mt-7 leading-[1.7]"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1.0625rem',
              color: 'var(--fg-secondary)',
              maxWidth: '52ch',
            }}
          >
            {hero.about}
          </p>

          {/* Action row */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center h-11 px-6 text-sm font-medium rounded-[var(--radius-md)] transition-colors"
              style={{
                fontFamily: 'var(--font-sans)',
                border: '1px solid var(--border-ornament)',
                color: 'var(--fg-primary)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(148,175,220,0.08)';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = '';
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-ornament)';
              }}
            >
              {hero.ctaText}
            </a>

            <div className="flex items-center gap-5">
              <a
                href={hero.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                GitHub ↗
              </a>
              <a
                href={hero.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors"
                style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* ── Floral column — desktop only ─────────────────── */}
        <div
          className="hidden lg:flex flex-shrink-0 items-start justify-end"
          style={{ width: '260px', paddingTop: '1rem' }}
          aria-hidden="true"
        >
          <FloralHero
            style={{ width: '220px', height: 'auto', opacity: 0.85 }}
          />
        </div>
      </div>
    </section>
  );
}
