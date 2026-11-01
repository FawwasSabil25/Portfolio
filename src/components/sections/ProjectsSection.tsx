import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="01 // PROJECTS"
          title="Featured Projects"
          description="Showcasing technical contributions, system architecture, and quality assurance efforts."
        />

        <div className="space-y-12 md:space-y-16">
          {projects.map((project) => (
            <article key={project.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="accent" className="order-2 md:order-1">
                    {project.role.split('/')[0].trim()}
                  </Badge>
                  <span className="text-[#64748b] text-sm font-mono">Case Study 0{project.order}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-[#f8fafc] mb-4">
                  {project.title}
                </h3>
                
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  {project.longDescription}
                </p>
                
                <div className="mb-6">
                  <p className="text-[#64748b] text-sm mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="subtle" className="px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {project.links.code && (
                    <a href={project.links.code} className="text-[#06b6d4] hover:text-[#22d3ee] font-medium text-sm inline-flex items-center gap-1">
                      View Code
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} className="text-[#06b6d4] hover:text-[#22d3ee] font-medium text-sm inline-flex items-center gap-1">
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.links.architecture && (
                    <a href={project.links.architecture} className="text-[#06b6d4] hover:text-[#22d3ee] font-medium text-sm inline-flex items-center gap-1">
                      Architecture
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
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
