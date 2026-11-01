import { portfolioData } from '../../data/portfolioData';
import { SectionHeader } from '../common/SectionHeader';

export function ContactSection() {
  const { contact } = portfolioData;

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="04 // CONTACT"
          title="Let's Connect"
          description="I'm currently available for internship opportunities. Reach out to discuss potential contributions."
          align="center"
        />

        <div className="bg-[#0f1118] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-semibold text-[#f8fafc] mb-6">
            Ready to Discuss Your Project?
          </h3>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex-1 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#06b6d4] text-[#08090d] font-medium rounded-lg hover:bg-[#22d3ee] transition-colors"
              >
                Email Me Directly
              </a>
              <span className="text-[#64748b] text-sm">
                {contact.responseTime} response time
              </span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[rgba(255,255,255,0.16)] text-[#f8fafc] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors font-medium text-sm"
              >
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 border border-[rgba(255,255,255,0.16)] text-[#f8fafc] rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors font-medium text-sm"
              >
                GitHub
              </a>
            </div>

            <div className="pt-6 border-t border-[rgba(255,255,255,0.08)]">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[rgba(255,255,255,0.04)] rounded-md">
                <span className="text-[#64748b] text-sm">Current Timezone:</span>
                <span className="text-[#06b6d4] text-sm font-mono">{contact.timezone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
