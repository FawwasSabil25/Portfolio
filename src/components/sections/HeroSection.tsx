import { FloralHero } from '../../assets/ornaments/FloralHero';
import { portfolioData } from '../../data/portfolioData';
import ScrollReveal from '../ScrollReveal';

export function HeroSection() {
  const { hero } = portfolioData;
  const cvUrl = portfolioData.cvUrl;

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
        className="relative flex flex-col gap-12 mx-auto lg:flex-row lg:items-start"
        style={{ maxWidth: 'var(--container-max)' }}
      >
        {/* ── Text column ──────────────────────────────────── */}
        <ScrollReveal className="flex-1 min-w-0" delay={0.2}>
          {/* Availability status */}
          <p
            className="flex items-center gap-2 mb-8"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--fg-muted)' }}
          >
            {/* Gold dot — breathing status indicator */}
            <span
              className="block w-1.5 h-1.5 rounded-full flex-shrink-0 breathing-dot"
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
              fontSize: '1.125rem',
              color: 'var(--fg-secondary)',
              maxWidth: '52ch',
            }}
          >
            {hero.about}
          </p>

          {/* Education */}
          <p
            className="mt-3"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: 'var(--fg-muted)',
            }}
          >
            {hero.education}
          </p>

          {/* Action row */}
          <div className="flex flex-wrap items-center gap-4 mt-10">
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

            {cvUrl && (
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-11 px-6 text-sm font-medium rounded-[var(--radius-md)] transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid var(--border-ornament)',
                  color: 'var(--fg-primary)',
                  padding: '0.25rem 0.75rem'
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
                View CV
              </a>
            )}

            <div
              className="flex flex-wrap items-center"
              style={{ columnGap: '1.25rem', rowGap: '0.5rem', padding: '0.25rem 0.75rem' }}
            >
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
                Phone ↗
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Floral column — desktop only ─────────────────── */}
        <div
          className="items-start justify-end flex-shrink-0 hidden lg:flex"
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
