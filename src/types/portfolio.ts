export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  role: string;
  links: {
    code?: string;
    demo?: string;
    architecture?: string;
  };
  order: number;
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
}

export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    status: string;
    about: string;
    ctaText: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  projects: Project[];
  skills: {
    frontend: SkillCategory;
    systemAnalysis: SkillCategory;
    qaTesting: SkillCategory;
    tools: SkillCategory;
  };
  experience: ExperienceItem[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    timezone: string;
    responseTime: string;
  };
}
