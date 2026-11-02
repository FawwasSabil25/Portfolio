import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import ScrollReveal from '../ScrollReveal';

export function ExperienceSection() {
  const { experience, experienceImage } = portfolioData;

  return (
    <section
      id="experience"
      style={{ 
        paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
        paddingInline: 'clamp(1rem, 4vw, 2rem)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <SectionHeader
          eyebrow="Experience"
          title="Professional Milestones"
          description="Professional Experience."
        />

        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2.5rem',
              alignItems: 'stretch',
              marginTop: '2.5rem',
            }}
          >
            {/* Timeline column */}
            <div
              style={{
                flex: '2 1 360px',
                minWidth: '0',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  paddingLeft: '2rem',
                  borderLeft: '2px solid var(--border-subtle)',
                  paddingBlock: '0.25rem',
                }}
              >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3.5rem',
                }}
              >
                {experience.map((item) => (
                  <div key={item.id} style={{ position: 'relative' }}>
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        left: 'calc(-2rem - 1px)',
                        top: '0.25rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.625rem',
                        color: 'var(--accent-warm)',
                        lineHeight: 1,
                        transform: 'translateX(-50%)',
                      }}
                    >
                      ◆
                    </span>

                    <p
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.1em',
                        color: 'var(--fg-muted)',
                        textTransform: 'uppercase',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {item.period}
                    </p>

                    <h3
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 500,
                        fontSize: '1.125rem',
                        color: 'var(--fg-primary)',
                        marginBottom: '0.375rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        color: 'var(--fg-secondary)',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {item.organization}
                    </p>

                    {item.description.length > 0 && (
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.625rem',
                        }}
                      >
                        {item.description.map((bullet, i) => (
                          <li
                            key={i}
                            style={{
                              display: 'flex',
                              gap: '0.75rem',
                              alignItems: 'flex-start',
                              fontSize: '0.875rem',
                              lineHeight: 1.65,
                            }}
                          >
                            <span
                              style={{ color: 'var(--fg-muted)', flexShrink: 0 }}
                              aria-hidden="true"
                            >
                              —
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image column */}
          {experienceImage && (
            <div
              style={{
                flex: '1 1 280px',
                minWidth: '0',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  height: '100%',
                  minHeight: '16rem',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src={experienceImage.src}
                  alt={experienceImage.alt}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          )}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
