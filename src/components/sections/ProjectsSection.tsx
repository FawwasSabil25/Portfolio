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
          description="Selected case studies in web development, system analysis, and quality assurance."
        />

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative pl-6 transition-colors project-card project-card-enter"
              style={{
                borderLeft: '2px solid var(--border-subtle)',
                animationDelay: `${index * 100}ms`,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--accent-warm)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderLeftColor = 'var(--border-subtle)';
              }}
            >
              {/* Header row: case number + role badge */}
              <div
                className="flex flex-wrap items-center justify-between gap-3 mb-4"
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1.25rem',
                  marginLeft: '-1.5rem',
                  paddingLeft: '1.5rem',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    color: 'var(--fg-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  {String(project.order).padStart(2, '0')}
                </span>
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
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-6 leading-[1.7]"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--fg-secondary)',
                  maxWidth: '64ch',
                }}
              >
                {project.longDescription}
              </p>

              {/* Tech stack chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <Badge key={tech} variant="subtle">{tech}</Badge>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-6">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    className="text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  >
                    View Code →
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  >
                    Live Demo →
                  </a>
                )}
                {project.links.architecture && (
                  <a
                    href={project.links.architecture}
                    className="text-sm transition-colors"
                    style={{ fontFamily: 'var(--font-sans)', color: 'var(--accent)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--fg-primary)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
                  >
                    Architecture →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
