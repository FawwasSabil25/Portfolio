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
      longDescription: 'Web app (PWA) that tracks stock and orders from Shopee, Tokopedia, and TikTok Shop in one place. Owners manage products and sales reports, managers process and ship orders. Built as my thesis, tested with usability testing.',
      techStack: ['Next.js' , 'TypeScript' , 'Tailwind CSS', 'Supabase', 'Fonnte API'],
      role: 'System Analyst & Developer',
      image: '/images/projects/myko.png.png',
      imageAlt: '',
      links: {
        link: 'https://mykopingpongstocksystems.vercel.app/setup',
        repository: 'https://github.com/FawwasSabil25/Myko-Pingpong-Stock-Systems'
      },
      order: 1,
    },
    {
      id: '2',
      title: 'Cosmic Bunny',
      date: '2024',
      description: 'Game e-commerce web app with an admin panel, built as a team course project.',
      longDescription: 'A digital game store inspired by other game e-commerce sites. Users register, log in, browse games by category, and buy through a cart and checkout. Admins manage games and categories. Built with a team for the Web Programming Practicum course.',
      techStack: ['Laravel', 'MySQL', 'JWT Auth', 'Role-based Access Control', 'Tailwind CSS', 'Vite', 'Blade'],
      role: 'Backend Developer',
      image: '/images/projects/cosmic.png.png',
      imageAlt: '',
      links: {
        link: 'https://cosmic-bunny.rezaa.me/',
        repository: 'https://github.com/FawwasSabil25/cosmic-bunny',
      },
      order: 2,
    },
    {
      id: '3',
      title: 'Troopers',
      date: '2025',
      description: 'Web app for listing internship positions and managing applications, built as a prototype.',
      longDescription: 'A portal where students browse internship and practical-work positions, apply online, and track their application status. Admins review applicants, add interview notes, and update status, with email notifications. made as a protototype for internship project in PT Telekomunikasi Selular (Telkomsel).',
      techStack: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
      role: 'Frontend-focused Developer',
      image: '/images/projects/troopers.png.png',
      imageAlt: 'Accessible web interface example',
      links: {
        link: '#',
        repository: 'https://github.com/FawwasSabil25/Troopers'
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
      items: ['Requirements Gathering', 'Flow Diagrams', 'System Documentation', 'Work System Framework'],
    },
    language: { 
      title: 'Language Proficiency',
      items: ['English (533 TOEFL)', 'Indonesian (Native)'],
    },
    tools: {
      title: 'Core Tools & Foundations',
      items: ['Git & Version Control', 'Figma / Design Tools', 'Terminal / CLI', 'CI/CD Fundamentals', 'Agile Methodologies'],
    },
  },
  experience: [
    {
      id: 'exp1',
      title: 'Friendly User Testing Representative Intern',
      organization: 'PT Telekomunikasi Selular (Telkomsel)',
      period: 'August - September 2025',
      description: [
        'Developed responsive web components using React and TypeScript.', //masukin bulan pertama
        'Participated in code reviews and implemented accessibility improvements.', //masukin Bulan kedua (troopers)
        'Collaborated with system analysts to document technical requirements.', //masukin kadang test ui produk
        'Collaborated .', //masukin kadang ikut ke event event tech
        'Collaborated .', //pernah menjadi notetaker dalam acara telkomday 
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
    src: '/images/experience/telkomsel.png',
    alt: 'Development workspace and team collaboration',
  },
};
