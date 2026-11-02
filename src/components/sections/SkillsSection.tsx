import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { FloralDivider } from '../../assets/ornaments/FloralDivider';
import ScrollReveal from '../ScrollReveal';

export function SkillsSection() {
  const { skills } = portfolioData;
  const allCategories = [
    skills.frontend,
    skills.systemAnalysis,
    skills.language,
    skills.tools,
  ];

  return (
    <>
      {/* Botanical section divider — separates Projects from Skills */}
      <div
        style={{ paddingInline: 'clamp(1rem, 4vw, 2rem)', maxWidth: 'var(--container-max)', marginInline: 'auto' }}
      >
        <FloralDivider />
      </div>

      <section
        id="skills"
        style={{ 
          paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
          paddingInline: 'clamp(1rem, 4vw, 2rem)'
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <SectionHeader
            eyebrow="Competencies"
            title="Capabilities"
            description="Core skills in web development and system analysis."
          />

          {/* Primary card — Frontend spans full width */}
          <ScrollReveal delay={0.2}>
            <div
              style={{
                marginTop: '2.5rem',
                padding: '2rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  marginBottom: '0.75rem',
                  color: 'var(--fg-primary)',
                }}
              >
                <span style={{ color: 'var(--accent-warm)', marginRight: '0.5rem' }}>+</span>
                {skills.frontend.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  marginBottom: '1.25rem',
                  lineHeight: 1.6,
                  color: 'var(--fg-secondary)',
                }}
              >
                Primary discipline — building accessible, responsive web interfaces.
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.625rem',
                }}
              >
                {skills.frontend.items.map(skill => (
                  <Badge key={skill} variant="subtle">{skill}</Badge>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Secondary cards — responsive grid (3 cols on desktop) */}
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            }}
          >
            {allCategories.slice(1).map((cat, index) => (
              <ScrollReveal key={cat.title} delay={0.4 + index * 0.1}>
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 500,
                      fontSize: '1.0625rem',
                      marginBottom: '1.25rem',
                      color: 'var(--fg-primary)',
                    }}
                  >
                    <span style={{ color: 'var(--accent-warm)', marginRight: '0.5rem' }}>+</span>
                    {cat.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.625rem',
                    }}
                  >
                    {cat.items.map(skill => (
                      <Badge key={skill} variant="subtle">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
