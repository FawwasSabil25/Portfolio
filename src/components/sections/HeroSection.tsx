import { portfolioData } from '../../data/portfolioData';

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-mono bg-[rgba(6,182,212,0.12)] text-[#22d3ee] border border-[rgba(6,182,212,0.2)]">
            {hero.status}
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-[#f8fafc]">
          Hi, I'm {hero.name} <br className="hidden md:block" />
          <span className="text-[#06b6d4]">{hero.role}</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#94a3b8] max-w-2xl mx-auto mb-10 leading-relaxed">
          {hero.about}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#06b6d4] text-[#08090d] font-medium rounded-md hover:bg-[#22d3ee] transition-colors">
            {hero.ctaText}
          </a>
          
          <div className="flex gap-3">
            <a href={hero.links.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-[rgba(255,255,255,0.16)] text-[#f8fafc] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-medium text-sm">
              GitHub
            </a>
            <a href={hero.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md border border-[rgba(255,255,255,0.16)] text-[#f8fafc] hover:bg-[rgba(255,255,255,0.08)] transition-colors font-medium text-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
