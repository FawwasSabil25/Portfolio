import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';
import { Badge } from '../common/Badge';

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="02 // COMPETENCIES"
          title="Technical Capabilities"
          description="Core skills in web development, system analysis, and quality assurance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend & Web Development */}
          <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#0f1118]">
            <h3 className="text-xl font-semibold text-[#f8fafc] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span>
              {skills.frontend.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.items.map((skill) => (
                <Badge key={skill} variant="subtle" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* System Analysis */}
          <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#0f1118]">
            <h3 className="text-xl font-semibold text-[#f8fafc] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span>
              {skills.systemAnalysis.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.systemAnalysis.items.map((skill) => (
                <Badge key={skill} variant="subtle" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* QA & Testing */}
          <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#0f1118]">
            <h3 className="text-xl font-semibold text-[#f8fafc] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span>
              {skills.qaTesting.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.qaTesting.items.map((skill) => (
                <Badge key={skill} variant="subtle" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="border border-[rgba(255,255,255,0.08)] rounded-xl p-6 bg-[#0f1118]">
            <h3 className="text-xl font-semibold text-[#f8fafc] mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#06b6d4]"></span>
              {skills.tools.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.items.map((skill) => (
                <Badge key={skill} variant="subtle" className="px-3 py-1.5">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
