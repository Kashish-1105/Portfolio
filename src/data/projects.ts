export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  secondaryImage?: string;
  featured: boolean;
  type: 'design' | 'web' | 'ai';
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  outcome?: string;
  github?: string;
  liveUrl?: string;
  figmaLink?: string;
}

export const primaryDesignProjects: Project[] = [
  {
    id: 'coffee-shop',
    title: 'Coffee Shop Design',
    subtitle: 'Artisanal Cold Brew & Drink Digital Experience',
    category: 'UI/UX / WEB DESIGN',
    type: 'design',
    featured: true,
    description: 'Editorial web showcase for an artisanal cafe featuring warm mocha palette, fluid cold brew bottle carousels, and streamlined drink ordering.',
    technologies: ['Figma', 'UI/UX Design', 'Art Direction', 'Prototyping'],
    image: '/assets/projects/coffee_shop_hero.jpg',
    problem: 'Specialty cafes often fail to translate their rich physical sensory ambience and artisanal quality into their digital presence.',
    solution: 'Designed an earth-toned editorial layout pairing warm mocha palettes with interactive 3-bottle carousel animations under the slogan "Drink Cool Feel Good".',
    keyFeatures: [
      'Interactive 3-bottle carousel showcasing cold brews and specialty beverages',
      'Minimal editorial top bar with instant search and order bag view',
      'Balanced typography pairing bold headlines with clean geometric navigation'
    ],
    outcome: 'Featured in Kashish’s Figma portfolio as a prime demonstration of visual art direction and modern web aesthetics.',
    figmaLink: 'https://www.figma.com/proto/kVbhyzRvsNthecU3hPVDyZ/coffee-shop'
  },
  {
    id: 'ebike-product-design',
    title: 'E-Bike Product Design',
    subtitle: 'Futuristic Urban Electric Mobility Experience',
    category: 'PRODUCT DESIGN / BRANDING',
    type: 'design',
    featured: true,
    description: 'High-impact product landing page for next-gen electric scooters with interactive spec hotspots, dark mode neon lighting, and high-performance ergonomics.',
    technologies: ['Figma', 'Product Design', 'Micro-Interactions', 'Visual Hierarchy'],
    image: '/assets/projects/ebike_showcase.jpg',
    secondaryImage: '/assets/projects/styluxe_catalog_1.jpg',
    problem: 'Electric mobility concepts need to convey complex engineering specifications without overwhelming urban consumers with technical jargon.',
    solution: 'Created an immersive dark-mode landing experience pairing neon circular lighting accents with interactive spec hotspots (Regeneration Tier, Tire Specs, Level 2 Ads).',
    keyFeatures: [
      'Interactive technical hotspots directly anchored to scooter components',
      'Floating quick-action navigation dock for instant test-ride bookings',
      'High-contrast neon green and charcoal editorial typography'
    ],
    outcome: 'High-engagement concept demonstrating futuristic consumer technology art direction.',
    figmaLink: 'https://www.figma.com/proto/04DrEcnbOniXS5GIsnqN5w/e-bike-advertisement'
  },
  {
    id: 'your-choice',
    title: 'Your Choice — E-Commerce Website',
    subtitle: 'One-Stop Modern E-Commerce Platform',
    category: 'E-COMMERCE / WEB DESIGN',
    type: 'design',
    featured: true,
    description: 'Clean consumer e-commerce storefront with high-conversion product showcases (audio, beauty, fashion), search navigation, and streamlined cart UX.',
    technologies: ['Figma', 'E-Commerce UX', 'Design Systems', 'Responsive UI'],
    image: '/assets/projects/ecommerce_shopmart.png',
    secondaryImage: '/assets/projects/ecommerce_store.jpg',
    problem: 'E-commerce users face cognitive fatigue when browsing disparate multi-category goods without clear visual breathing room.',
    solution: 'Engineered a modern magazine-style e-commerce layout featuring crisp product cutouts, floating category imagery, and prominent call-to-actions.',
    keyFeatures: [
      'Visual hero layout highlighting audio, beauty, and fashion lifestyle collections',
      'Minimal header with global search, cart counter, and seamless login flow',
      'Social proof badge highlighting 15,000+ trusted brand partners'
    ],
    outcome: 'A scalable storefront design system delivering high visual appeal and clear user conversion paths.',
    figmaLink: 'https://www.figma.com/proto/lvB0Z9nxsFTETSlsejIEM/e-cmmerce-website'
  },
  {
    id: 'styluxe',
    title: 'Styluxe',
    subtitle: 'Personalised Architectural Catalogue & System Showcase',
    category: 'EDITORIAL / CATALOGUE DESIGN',
    type: 'design',
    featured: true,
    description: 'A personalised catalogue with multiple layout and view ideas, showcasing architectural aluminium systems, technical window specifications, and luxury residential aesthetics.',
    technologies: ['Figma', 'Editorial Catalogue', 'Layout Systems', 'Print & Digital Specs'],
    image: '/assets/projects/styluxe_catalogue_cover.png',
    secondaryImage: '/assets/projects/styluxe_catalog_1.jpg',
    problem: 'Architectural manufacturers need complex engineering details (EnergyPlus simulation, glazing optimization, structural weld finishes) communicated with luxury editorial elegance.',
    solution: 'Designed a comprehensive multi-page catalogue featuring asymmetric layout explorations, clean numerical capability grids, quote blocks, and high-end villa photography.',
    keyFeatures: [
      'Editorial "Why Styluxe" spread pairing architectural photography with numbered capability points',
      'Technical expertise matrix detailing EnergyPlus glazing and thermal insulation specs',
      'Multiple layout variations accommodating both print publication and interactive PDF presentations'
    ],
    outcome: 'Created an enduring corporate publication that bridges technical precision with architectural luxury.'
  }
];

export const engineeringProjects: Project[] = [
  {
    id: 'mailwise',
    title: 'MailWise',
    subtitle: 'AI-Powered Student Inbox Organizer & Analytics',
    category: 'AI PRODUCT / WEB APPLICATION',
    type: 'ai',
    featured: false,
    description: 'AI-powered email categorization platform that connects real-time Gmail inbox telemetry with Claude 3.5 Sonnet categorization heuristics.',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Google OAuth 2.0', 'Claude AI'],
    image: '/assets/projects/mailwise_dashboard.jpg',
    secondaryImage: '/assets/projects/mailwise_categories.jpg',
    problem: 'Students miss critical academic deadlines and announcements due to disorganized email inboxes.',
    solution: 'Built real-time Google OAuth synchronization with Claude 3.5 Sonnet to categorize emails into student folders with 95%+ accuracy.',
    github: 'https://github.com/Kashish-1105'
  },
  {
    id: 'femcare',
    title: 'FemCare',
    subtitle: "AI-Based Women's Reproductive Health Platform",
    category: 'AI / HEALTH TECH',
    type: 'ai',
    featured: false,
    description: "Women's reproductive health platform combining cycle tracking, predictive Python ML models, and WHO/NHS-referenced health insights.",
    technologies: ['React.js', 'Node.js', 'Python', 'Machine Learning', 'Tailwind CSS'],
    image: '/assets/projects/femcare_dashboard.jpg',
    problem: 'Lack of accessible, privacy-conscious tools for menstrual health tracking and predictive phase insights.',
    solution: 'Developed an empathetic React dashboard with ML phase forecasting (Follicular, Ovulation, Luteal) and verified clinical advisory callouts.',
    github: 'https://github.com/dchokshi28/ai-women-reproductive-health'
  }
];

export const projects: Project[] = [...primaryDesignProjects, ...engineeringProjects];
