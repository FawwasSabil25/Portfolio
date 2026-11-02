export interface PortfolioData {
  hero: {
    name: string;
    role: string;
    status: string;
    about: string;
    education: string;
    ctaText: string;
    links: {
      github: string;
      linkedin: string;
      email: string;
    };
  };
  projects: Project[];
  skills: {
    frontend: { title: string; items: string[] };
    systemAnalysis: { title: string; items: string[] };
    qaTesting: { title: string; items: string[] };
    tools: { title: string; items: string[] };
  };
  experience: ExperienceItem[];
  contact: {
    email: string;
    linkedin: string;
    github: string;
    timezone: string;
    responseTime: string;
  };
  experienceImage: {
    src: string;
    alt: string;
  };
}

export interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  longDescription: string;
  techStack: string[];
  role: string;
  image: string;
  imageAlt: string;
  links: {
    link: string;
    repository?: string;
  };
  order: number;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
}
