export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'experience' | 'education' | 'freelance' | 'certification';
  location?: string;
  points: string[];
  tags?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 'fleet-exp',
    role: 'Frontend Engineering — GPS Tracking & Fleet Analytics',
    organization: 'Fleet Management System',
    period: '2024 — Present',
    type: 'experience',
    points: [
      'Built responsive React-based tracking interfaces with dynamic geospatial visual feeds.',
      'Integrated real-time REST API endpoints for telemetry ingestion, status alerts, and vehicle coordinates.',
      'Designed operational performance dashboards displaying idle time, speed analytics, and driver logs.',
      'Collaborated on interface usability optimization, state handling, and production deployment.'
    ],
    tags: ['React.js', 'REST APIs', 'GPS Telemetry', 'Dashboard UI']
  },
  {
    id: 'femcare-exp',
    role: "Frontend & Interface Developer — AI-Based Women's Health",
    organization: 'FemCare Health Tech',
    period: '2024',
    type: 'experience',
    points: [
      'Developed core frontend dashboard components using React and responsive CSS architectures.',
      'Integrated backend machine learning prediction endpoints for cycle phase calculations and symptom forecasting.',
      'Worked with cross-functional healthcare research inputs to ensure verified WHO & NHS advisory guidelines.',
      'Iterated on accessible UX patterns for cycle logging, emergency support, and interactive medical charts.'
    ],
    tags: ['React.js', 'Healthcare UI', 'ML Integration', 'Python API']
  },
  {
    id: 'freelance-styluxe',
    role: 'Freelance UI/UX & Editorial Catalogue Designer',
    organization: 'Styluxe Architectural Systems',
    period: '2024',
    type: 'freelance',
    points: [
      'Designed luxury multi-page digital and print product catalogues for architectural aluminium systems.',
      'Created balanced visual hierarchy pairing high-end residential photography with rigid technical specification grids.',
      'Maintained brand consistency across geometric identity marks, typography scales, and print deliverables.',
      'Incorporated client iterations rapidly to meet commercial delivery deadlines.'
    ],
    tags: ['Figma', 'Editorial Layout', 'Brand Design', 'Print Specifications']
  },
  {
    id: 'education-pu',
    role: 'B.Tech in Computer Engineering',
    organization: 'Parul University of Engineering and Technology',
    period: '2023 — 2027 (Expected)',
    type: 'education',
    location: 'Vadodara, Gujarat, India',
    points: [
      'Current Academic Standing: CGPA 8.47 / 10.0.',
      'Rigorous foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Object-Oriented Design.',
      'Active developer in college tech communities, open-source cohorts, and project build-a-thons.'
    ],
    tags: ['CGPA: 8.47/10', 'Computer Engineering', 'B.Tech']
  },
  {
    id: 'cert-google-ux',
    role: 'Google UX Design Professional Certificate',
    organization: 'Google Career Certificates',
    period: 'Certified',
    type: 'certification',
    points: [
      'Comprehensive training in user-centered design, user research, wireframing, and interactive prototyping.',
      'Completed end-to-end design sprints with usability testing, iterative refinement, and Figma design systems.',
      'Mastered accessibility standards (WCAG), information architecture, and cross-platform design consistency.'
    ],
    tags: ['Certified UX Designer', 'Google Professional', 'Design Systems']
  },
  {
    id: 'gssoc-contributor',
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code (GSSoC)',
    period: 'Contributor',
    type: 'experience',
    points: [
      'Contributed bug fixes, UI improvements, and responsive component enhancements across open-source web repositories.',
      'Collaborated through GitHub pull requests, peer reviews, and automated CI/CD workflows.'
    ],
    tags: ['Open Source', 'GitHub', 'Collaboration']
  }
];

export const journeyStats = [
  { value: '10+', label: 'UI / UX DESIGNS', note: 'Interactive Figma prototypes & production design systems' },
  { value: '05+', label: 'FRONTEND PROJECTS', note: 'Full-stack React, TypeScript & API-integrated applications' },
  { value: '200+', label: 'LEETCODE SOLVED', note: 'Data structures, algorithms & problem solving' },
  { value: '8.47', label: 'CGPA / 10', note: 'B.Tech Computer Engineering at Parul University' },
  { value: '2023–27', label: 'ACADEMIC JOURNEY', note: 'Engineering graduate in 2027 with dual design-code focus' },
  { value: 'CERTIFIED', label: 'GOOGLE UX DESIGN', note: 'Industry-standard user experience certification' }
];
