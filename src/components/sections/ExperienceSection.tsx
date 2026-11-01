import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="03 // EXPERIENCE"
          title="Academic & Professional Milestones"
          description="Timeline of internships, academic projects, and relevant experiences."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[rgba(255,255,255,0.08)] transform md:-translate-x-1/2"></div>

          <div className="space-y-10">
            {experience.map((item) => (
              <div key={item.id} className="relative flex flex-col md:flex-row gap-8">
                {/* Timeline node */}
                <div className="absolute left-[-4px] md:left-1/2 top-0 w-2 h-2 rounded-full bg-[#06b6d4] transform md:-translate-x-1/2 z-10 border-2 border-[#08090d]"></div>

                {/* Date */}
                <div className="md:w-1/2 md:text-right pl-8 md:pr-8">
                  <div className="font-mono text-xs text-[#64748b]">
                    {item.period}
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0">
                  <h3 className="text-lg font-semibold text-[#f8fafc]">
                    {item.title}
                  </h3>
                  <div className="text-[#94a3b8] text-sm mb-3">
                    {item.organization}
                  </div>
                  <ul className="space-y-2">
                    {item.description.map((bullet, index) => (
                      <li key={index} className="text-[#94a3b8] text-sm leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
