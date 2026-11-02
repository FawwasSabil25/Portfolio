import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { FloralWatermark } from '../../assets/ornaments/FloralWatermark';
import ScrollReveal from '../ScrollReveal';

export function ContactSection() {
  const { contact } = portfolioData;
  const subject = encodeURIComponent('work enquiry');

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ 
        paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
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
        <ScrollReveal delay={0.2}>
          <SectionHeader
            eyebrow="Contact"
            title="Let's Connect!"
            description="I'm actively seeking opportunities to build and improve. If you're hiring, I'd love to hear from you."
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
                marginBottom: '0.25rem',
                width: '50%',
                justifyContent: 'center',
              }}
            >
              Email Me!
            </a>

            {portfolioData.cvUrl && (
              <a
                href={portfolioData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-8 text-sm font-medium rounded-[var(--radius-md)] transition-colors project-card"
                style={{
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid var(--border-ornament)',
                  color: 'var(--fg-primary)',
                  padding: '0.3rem',
                  width: '50%',
                  justifyContent: 'center',
                }}
              >
                View CV
              </a>
            )}

            {/* Secondary links */}
            <div
              className="flex flex-wrap items-center"
              style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', columnGap: '1.25rem', rowGap: '0.5rem' }}
            >
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors"
                  style={{ color: 'var(--fg-secondary)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
                >
                  LinkedIn ↗
                </a>
              )}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                GitHub ↗
              </a>
              <a
                href={`tel:${contact.phone.replace('https://wa.me/', '')}`}
                className="transition-colors"
                style={{ color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                Phone ↗
              </a>
              <a
                href={portfolioData.hero.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: 'var(--fg-secondary)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-secondary)'; }}
              >
                Instagram ↗
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
        </ScrollReveal>
      </div>
    </section>
  );
}
