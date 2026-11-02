import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Fawwas Nawwaf Sabil',
    role: 'Web Developer',
    status: 'Fresh from the oven!',
    about: 'Informatics Engineer ◦ Web Development ◦ System Analyst',
    education: 'Pasundan University Bandung ◦ GPA 3.72/4.00 ◦ Class of 2026',
    ctaText: '',
    links: {
      github: 'https://github.com/FawwasSabil25',
      linkedin: 'https://linkedin.com/in/username',
      email: 'fawwas2573@gmail.com',
    },
  },
  projects: [
    {
      id: '1',
      title: 'Myko Pingpong',
      date: '2026',
      description: 'Stock and order tracking for multi-platform sellers, with WhatsApp alerts.',
      longDescription: 'Web app that tracks stock and orders from Shopee, Tokopedia, and TikTok Shop in one place. Owners manage products and sales reports, managers process and ship orders. Built as my thesis, tested with usability testing.',
      techStack: ['Next.js, TypeScript, Tailwind CSS, Supabase, Fonnte API'],
      role: 'System Analyst & Developer',
      image: '/images/projects/project-1.jpg',
      imageAlt: 'Myko Pingpong stock tracking dashboard',
      links: {
        link: 'https://mykopingpongstocksystems.vercel.app/setup',
      },
      order: 1,
    },
    {
      id: '2',
      title: 'Project Title Two',
      date: '2026',
      description: 'System analysis and QA-focused application with comprehensive testing coverage.',
      longDescription: 'Focused on test-driven development, usability testing methodologies, and system architecture documentation. Includes detailed test case specifications and performance metrics.',
      techStack: ['Node.js', 'Jest', 'Cypress'],
      role: 'QA Engineer / System Analyst',
      image: '/images/projects/project-2.jpg',
      imageAlt: 'Testing dashboard interface',
      links: {
        link: '#',
      },
      order: 2,
    },
    {
      id: '3',
      title: 'Project Title Three',
      date: '2026',
      description: 'Responsive web application with emphasis on accessibility and performance.',
      longDescription: 'Implemented WCAG 2.1 AA compliance, keyboard navigation, and performance optimization techniques. Designed for cross-browser compatibility and mobile-first approach.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      role: 'Frontend Developer / QA Specialist',
      image: '/images/projects/project-3.jpg',
      imageAlt: 'Accessible web interface example',
      links: {
        link: '#',
      },
      order: 3,
    },
  ],
  skills: {
    frontend: {
      title: 'Web Development',
      items: ['React / Next.js', 'Laravel / PHP', 'TypeScript', 'HTML5 / CSS3', 'Responsive Design', 'State Management', 'REST APIs', 'Accessibility (WCAG)'],
    },
    systemAnalysis: {
      title: 'System Analysis & Architecture',
      items: ['Requirements Gathering', 'Flow Diagrams', 'System Documentation'],
    },
    qaTesting: {
      title: 'Quality Assurance & Testing',
      items: ['Test Case Design', 'Usability Testing', 'Accessibility Testing', 'Manual Testing'],
    },
    tools: {
      title: 'Core Tools & Foundations',
      items: ['Git & Version Control', 'Figma / Design Tools', 'Terminal / CLI', 'CI/CD Fundamentals', 'Agile Methodologies'],
    },
  },
  experience: [
    {
      id: 'exp1',
      title: 'Software Development Intern',
      organization: 'Tech Company',
      period: 'Summer 2024',
      description: [
        'Developed responsive web components using React and TypeScript.',
        'Participated in code reviews and implemented accessibility improvements.',
        'Collaborated with system analysts to document technical requirements.',
      ],
    },
    {
      id: 'exp2',
      title: 'and more to come...',
      organization: '',
      period: '',
      description: [
      ],
    }
  ],
  contact: {
    email: 'fawwas2573@gmail.com',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/FawwasSabil25',
    timezone: 'GMT+8',
    responseTime: '24-48 hours',
  },
  experienceImage: {
    src: '/images/experience/workspace.jpg',
    alt: 'Development workspace and team collaboration',
  },
};
