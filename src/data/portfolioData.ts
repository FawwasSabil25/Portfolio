import { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Your Name',
    role: 'Web Developer',
    status: 'Available for Summer/Fall Internship',
    about: 'Building accessible web experiences with focus on system architecture and quality assurance. Passionate about crafting clean code, designing intuitive interfaces, and ensuring robust user experiences.',
    ctaText: 'View My Work',
    links: {
      github: 'https://github.com/username',
      linkedin: 'https://linkedin.com/in/username',
      email: 'email@example.com',
    },
  },
  projects: [
    {
      id: '1',
      title: 'Project Title One',
      description: 'A web application demonstrating modern frontend patterns and responsive design.',
      longDescription: 'This project explores component architecture, state management, and responsive layout strategies. The system was designed with maintainability and scalability in mind.',
      techStack: ['React', 'TypeScript', 'CSS'],
      role: 'Full-stack Developer / System Analyst',
      links: {
        code: '#',
        demo: '#',
      },
      order: 1,
    },
    {
      id: '2',
      title: 'Project Title Two',
      description: 'System analysis and QA-focused application with comprehensive testing coverage.',
      longDescription: 'Focused on test-driven development, usability testing methodologies, and system architecture documentation. Includes detailed test case specifications and performance metrics.',
      techStack: ['Node.js', 'Jest', 'Cypress'],
      role: 'QA Engineer / System Analyst',
      links: {
        code: '#',
        architecture: '#',
      },
      order: 2,
    },
    {
      id: '3',
      title: 'Project Title Three',
      description: 'Responsive web application with emphasis on accessibility and performance.',
      longDescription: 'Implemented WCAG 2.1 AA compliance, keyboard navigation, and performance optimization techniques. Designed for cross-browser compatibility and mobile-first approach.',
      techStack: ['React', 'Next.js', 'Tailwind CSS'],
      role: 'Frontend Developer / QA Specialist',
      links: {
        code: '#',
        demo: '#',
      },
      order: 3,
    },
  ],
  skills: {
    frontend: {
      title: 'Frontend & Web Development',
      items: ['React / Next.js', 'TypeScript', 'HTML5 / CSS3', 'Responsive Design', 'State Management', 'REST APIs', 'Accessibility (WCAG)'],
    },
    systemAnalysis: {
      title: 'System Analysis & Architecture',
      items: ['Requirements Gathering', 'Flow Diagrams', 'Database Design', 'System Documentation', 'API Design', 'Technical Specifications', 'Architecture Patterns'],
    },
    qaTesting: {
      title: 'Quality Assurance & Testing',
      items: ['Test Case Design', 'Usability Testing', 'Bug Tracking', 'Performance Audits', 'Cross-browser Testing', 'Accessibility Testing', 'Manual Testing'],
    },
    tools: {
      title: 'Core Tools & Foundations',
      items: ['Git & Version Control', 'Figma / Design Tools', 'Terminal / CLI', 'Linux / Unix', 'Docker Basics', 'CI/CD Fundamentals', 'Agile Methodologies'],
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
      title: 'QA & Testing Intern',
      organization: 'Tech Company',
      period: 'Fall 2023',
      description: [
        'Created and executed test cases for web application functionality.',
        'Conducted usability testing with real users and documented findings.',
        'Assisted in performance audits and bug triage.',
      ],
    },
    {
      id: 'exp3',
      title: 'Academic Project: System Analysis',
      organization: 'University Lab',
      period: '2024',
      description: [
        'Conducted requirements analysis for a campus management system.',
        'Designed database schema and flow diagrams.',
        'Documented technical specifications and architecture decisions.',
      ],
    },
  ],
  contact: {
    email: 'email@example.com',
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username',
    timezone: 'GMT+X',
    responseTime: '24-48 hours',
  },
};
