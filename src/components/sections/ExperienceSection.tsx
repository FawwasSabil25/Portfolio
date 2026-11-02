import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      className="section-appear"
      style={{ 
        paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
        animationDelay: '0.4s' 
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <SectionHeader
          eyebrow="Experience"
          title="Academic & Professional Milestones"
          description="Professional Experience."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <div
              className="relative pl-8"
              style={{ borderLeft: '2px solid var(--border-subtle)' }}
            >
              <div className="flex flex-col gap-14">
                {experience.map((item) => (
                  <div key={item.id} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute"
                      style={{
                        left: '-2.25rem',
                        top: '0.25rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.625rem',
                        color: 'var(--accent-warm)',
                        lineHeight: 1,
                      }}
                    >
                      ◆
                    </span>

                    <p
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--fg-muted)',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.period}
                    </p>

                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        fontSize: '1.125rem',
                        color: 'var(--fg-primary)',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mb-5"
                      style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9375rem', color: 'var(--fg-secondary)' }}
                    >
                      {item.organization}
                    </p>

                    <ul className="flex flex-col gap-2">
                      {item.description.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed"
                          style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-secondary)' }}
                        >
                          <span
                            style={{ color: 'var(--fg-muted)', flexShrink: 0, marginTop: '0.05em' }}
                            aria-hidden="true"
                          >
                            —
                          </span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
