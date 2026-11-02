import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';
import ScrollReveal from '../ScrollReveal';

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      style={{ paddingBlock: 'clamp(4rem, 8vw, 7rem)', paddingInline: 'clamp(1rem, 4vw, 2rem)' }}
    >
      <div style={{ maxWidth: 'var(--container-max)', marginInline: 'auto' }}>
        <SectionHeader
          eyebrow="Projects"
          title="Featured Work"
          description="Selected case studies in web development."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <article
                className="relative overflow-hidden"
                style={{
                  border: '1px solid var(--border-subtle)',
                  backgroundColor: 'rgba(12, 15, 28, 0.65)',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '8px',
                }}
              >
              {/* 1. Image in normal flow with fixed height - DO NOT CHANGE */}
              {project.image && (
                <div className="relative w-full h-48 overflow-hidden md:h-60">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="object-cover object-top w-full h-full"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                    }}
                  />
                </div>
              )}

              {/* 2. Text below image - using inline styles for all spacing */}
              <div
                style={{
                  position: 'relative',
                  zIndex: 10,
                  paddingInline: '1.5rem',
                  paddingBottom: '1.5rem',
                  paddingTop: '1rem',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    color: 'var(--fg-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {String(project.order).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3
                  style={{
                    marginTop: '0.5rem',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '1.25rem',
                    letterSpacing: '-0.01em',
                    color: 'var(--fg-primary)',
                  }}
                >
                  {project.title}
                </h3>

                {/* Long Description */}
                <p
                  style={{
                    marginBottom: '1rem',
                    lineHeight: 1.6,
                    maxWidth: '65ch',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--fg-secondary)',
                  }}
                >
                  {project.longDescription}
                </p>

                {/* Role row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                  </span>
                  <Badge variant="subtle">{project.role.split('/')[0].trim()}</Badge>
                </div>

                {/* Tech stack row */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginTop: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.techStack.map(tech => (
                      <span
                        key={tech}
                        style={{
                          padding: '0.25rem 0.75rem',
                          fontSize: '0.8125rem',
                          borderRadius: '8px',
                          border: '1px solid rgba(148,175,220,0.2)',
                          color: '#d0d7e2',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1.5rem',
                    marginTop: '1.25rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-subtle)',
                    fontSize: '0.875rem',
                  }}
                >
                  {project.links.link && project.links.link !== '#' && (
                    <a
                      href={project.links.link}
                      className="transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                    >
                      View Project →
                    </a>
                  )}
                  {project.links.repository && (
                    <a
                      href={project.links.repository}
                      className="transition-colors"
                      style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                    >
                      Architecture →
                    </a>
                  )}
                </div>
              </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
