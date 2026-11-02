import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

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

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="relative overflow-hidden transition-colors group project-card project-card-enter"
              style={{
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-subtle)',
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-warm)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
              }}
            >
              {/* Image banner - only if image is provided */}
              {project.image && (
                <div
                  className="absolute inset-x-0 top-0 h-48 pointer-events-none"
                  aria-hidden="true"
                >
                  <img
                    src={project.image}
                    alt=""
                    className="object-cover object-top w-full h-full opacity-30"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(6,8,16,0) 0%, rgba(6,8,16,0.85) 85%)'
                    }}
                  />
                </div>
              )}

              <div className="relative z-10">
              {/* Header row: case number + date + role badge */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 mb-4"
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem',
                  paddingLeft: '1rem',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      letterSpacing: '0.12em',
                      color: 'var(--fg-muted)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {String(project.order).padStart(2, '0')}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{
                      color: 'var(--border-subtle)',
                      fontSize: '0.625rem',
                    }}
                  >
                    •
                    •
                    • 
                  </span>
                  {project.date && (
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.875rem',
                        color: 'var(--fg-muted)',
                      }}
                    >
                      {project.date}
                    </span>
                  )}
                </div>
                <Badge variant="accent">
                  {project.role.split('/')[0].trim()}
                </Badge>
              </div>

              {/* Title — Geist Sans h3 */}
              <h3
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.01em',
                  color: 'var(--fg-primary)',
                  paddingLeft: '1rem',
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6 pl-2 leading-[1.7]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '1rem',
                  color: 'var(--fg-secondary)',
                  maxWidth: '64ch',
                  paddingLeft: '1rem',
                }}
              >
                {project.longDescription}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap mb-6 gap-x-3 gap-y-2" style={{ paddingLeft: '1rem' }}>
                {project.techStack.map(tech => (
                  <Badge key={tech} variant="subtle">{tech}</Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6 pl-2" style={{ paddingLeft: '1rem' }}>
                {project.links.link && (
                  <a
                    href={project.links.link}
                    className="text-sm transition-colors"
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
                    className="text-sm transition-colors"
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
          ))}
        </div>
      </div>
    </section>
  );
}
