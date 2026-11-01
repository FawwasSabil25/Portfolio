import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import { FloralDivider } from '../../assets/ornaments/FloralDivider';

export function SkillsSection() {
  const { skills } = portfolioData;
  const allCategories = [
    skills.frontend,
    skills.systemAnalysis,
    skills.qaTesting,
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
        className="section-appear"
        style={{ 
          paddingBlock: 'clamp(4rem, 8vw, 7rem)', 
          paddingInline: 'clamp(1rem, 4vw, 2rem)',
          animationDelay: '0.6s' 
        }}
      >
        <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <SectionHeader
            eyebrow="Competencies"
            title="Technical Capabilities"
            description="Core skills in web development, system analysis, and quality assurance."
          />

          {/* Primary card — Frontend spans full width */}
          <div
            className="mb-8 p-8"
            style={{
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <h3
              className="mb-3"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                fontSize: '1.0625rem',
                color: 'var(--fg-primary)',
              }}
            >
              <span style={{ color: 'var(--accent-warm)', marginRight: '0.5rem' }}>+</span>
              {skills.frontend.title}
            </h3>
            <p
              className="mb-5 text-sm leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-secondary)' }}
            >
              Primary discipline — building accessible, responsive web interfaces.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.items.map(skill => (
                <Badge key={skill} variant="subtle">{skill}</Badge>
              ))}
            </div>
          </div>

          {/* Secondary cards — 3 columns on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCategories.slice(1).map(cat => (
              <div
                key={cat.title}
                className="p-6"
                style={{
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                <h3
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: 'var(--fg-primary)',
                  }}
                >
                  <span style={{ color: 'var(--accent-warm)', marginRight: '0.5rem' }}>+</span>
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map(skill => (
                    <Badge key={skill} variant="subtle">{skill}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
