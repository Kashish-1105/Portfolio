export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'FRONTEND DEVELOPMENT',
    description: 'Building responsive, scalable web applications with high-performance React architectures.',
    skills: [
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Next.js',
      'Tailwind CSS',
      'HTML5 & Modern CSS3',
      'Component Architecture',
      'Client-Side State',
      'Responsive Web Design',
      'Cross-Browser Standards'
    ]
  },
  {
    title: 'UI / UX DESIGN',
    description: 'Transforming complex problem spaces into thoughtful, intuitive human-centered interfaces.',
    skills: [
      'Figma & Prototyping',
      'Design Systems',
      'Wireframing',
      'User Journey Mapping',
      'Information Architecture',
      'Interaction Design',
      'Visual Hierarchy',
      'Usability Auditing',
      'Design Consistency',
      'Micro-Interactions'
    ]
  },
  {
    title: 'BACKEND & DATA',
    description: 'Connecting frontend clients to secure, RESTful endpoints and database systems.',
    skills: [
      'Node.js',
      'Express.js',
      'RESTful APIs',
      'MongoDB',
      'Python',
      'SQL / Relational DB',
      'JWT & OAuth 2.0 Auth',
      'Data Modeling'
    ]
  },
  {
    title: 'DEV TOOLS & WORKFLOW',
    description: 'Version control, developer tooling, test routines, and continuous delivery.',
    skills: [
      'Git & GitHub',
      'Postman API Testing',
      'VS Code Ecosystem',
      'Vite & Build Tooling',
      'Docker & Containerization',
      'Debugging & Performance',
      'Vercel Deployment'
    ]
  },
  {
    title: 'COMPUTER SCIENCE CORE',
    description: 'Rigorous algorithmic foundation and systems computer engineering principles.',
    skills: [
      'Data Structures & Algorithms',
      '200+ LeetCode Solved',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks'
    ]
  }
];
