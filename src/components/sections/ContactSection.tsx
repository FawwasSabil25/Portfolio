import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { FloralWatermark } from '../../assets/ornaments/FloralWatermark';

export function ContactSection() {
  const { contact } = portfolioData;
  const subject = encodeURIComponent('work enquiry');

  return (
    <section
      id="contact"
      className="relative overflow-hidden section-appear"
      style={{ 
        paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
        animationDelay: '0.8s' 
      }}
    >
      {/* Floral watermarks — desktop only */}
      <div
        className="absolute hidden w-32 pointer-events-none lg:block bottom-8 left-4"
        aria-hidden="true"
        style={{ opacity: 0.55 }}
      >
        <FloralWatermark side="left" style={{ width: '100%', height: 'auto' }} />
      </div>
      <div
        className="absolute hidden w-32 pointer-events-none lg:block bottom-8 right-4"
        aria-hidden="true"
        style={{ opacity: 0.55 }}
      >
        <FloralWatermark side="right" style={{ width: '100%', height: 'auto' }} />
      </div>

      <div
        className="relative mx-auto"
        style={{ maxWidth: '640px' }}
      >
        <SectionHeader
          eyebrow="Contact"
          title="Let's Connect!"
          description="Open to work opportunities. Reach out to discuss how I can contribute."
          align="center"
        />

        <div className="flex flex-col items-center gap-8">
          {/* Primary — email */}
          <a
            href={`mailto:${contact.email}?subject=${subject}`}
            className="inline-flex items-center h-12 px-8 text-sm font-medium rounded-[var(--radius-md)] transition-colors project-card"
            style={{
              fontFamily: 'var(--font-sans)',
              border: '1px solid var(--border-ornament)',
              color: 'var(--fg-primary)',
              padding: '0.3rem',
            }}
          >
            Email Me!
          </a>

          {/* Secondary links */}
          <div
            className="flex items-center gap-8"
            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}
          >
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--fg-secondary)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
            >
              LinkedIn↗ 
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--fg-secondary)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
            >
              GitHub↗ 
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: 'var(--fg-secondary)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
            >
              Phone↗ 
            </a>
          </div>

          {/* Timezone */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8125rem',
              color: 'var(--fg-muted)',
              letterSpacing: '0.05em',
            }}
          >
            {contact.timezone} · Responds within {contact.responseTime}
          </p>
        </div>
      </div>
    </section>
  );
}
