import React, { useState } from 'react';
import { Layout, Code2, Lightbulb, BarChart3, ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      number: '01',
      title: 'UI / UX DESIGN',
      subtitle: 'User Experience & Visual Interface Systems',
      description:
        'Crafting high-fidelity wireframes, interactive prototypes, design systems, and user-centered architectures that bridge elegance and usability.',
      deliverables: ['Wireframing & Prototyping', 'Design Systems & Auto-Layout', 'User Journey Mapping', 'Usability Auditing'],
      microSpecs: ['Figma Tokens', 'Component Variants', 'Information Architecture', 'WCAG Accessibility'],
      icon: Layout,
    },
    {
      number: '02',
      title: 'FRONTEND DEVELOPMENT',
      subtitle: 'Scalable React & TypeScript Engineering',
      description:
        'Building responsive, accessible web applications with clean component hierarchies, state management, and smooth micro-interactions.',
      deliverables: ['React.js & Next.js Architecture', 'TypeScript Type-Safety', 'Tailwind CSS Systems', 'Performance & SEO Optimization'],
      microSpecs: ['Custom Hooks', 'Client State', 'Responsive Grids', 'Bundle Optimization'],
      icon: Code2,
    },
    {
      number: '03',
      title: 'PRODUCT THINKING',
      subtitle: 'Translating Complex Workflows into Products',
      description:
        'Deconstructing ambiguous requirements into structured user journeys, functional specifications, and intuitive feature roadmaps.',
      deliverables: ['Requirements Decomposition', 'Information Architecture', 'Workflow Optimization', 'Feature Scoping'],
      microSpecs: ['User Personas', 'Friction Analysis', 'MVP Scoping', 'Iterative Validation'],
      icon: Lightbulb,
    },
    {
      number: '04',
      title: 'DATA & ANALYTICS',
      subtitle: 'Real-Time Dashboards & Data Visualization',
      description:
        'Transforming high-frequency telemetry, academic metrics, and operational datasets into clean, actionable analytical interfaces.',
      deliverables: ['Telemetry & GPS Dashboards', 'Recharts / Charting Engines', 'REST API Integration', 'KPI Matrix Cards'],
      microSpecs: ['Telemetry Feeds', 'Ratio Distributions', 'Data Aggregation', 'Real-Time Sync'],
      icon: BarChart3,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#F4F1EA] border-y border-[#E3DFD7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Serif Accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD8CE]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-3">
              02 / SERVICES & CAPABILITIES • BUILT <span className="font-serif italic font-normal text-charcoal">WITH CRAFT</span>
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal tracking-tight">
              I CAN HELP <span className="font-serif italic font-normal">YOU WITH.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-charcoal/70 max-w-md font-normal leading-relaxed">
            Bridging the gap between creative visual design and robust frontend engineering to build products people enjoy using.
          </p>
        </div>

        {/* Editorial Service Columns with Hover Dimming and Micro-Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group flex flex-col justify-between p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal shadow-[0_4px_20px_rgba(20,20,19,0.02)] hover:shadow-[0_12px_32px_rgba(20,20,19,0.06)] transition-all duration-300 ${
                  isDimmed ? 'opacity-40 grayscale-[20%]' : 'opacity-100'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-6 border-b border-[#E3DFD7]">
                    <span className="font-serif italic text-2xl font-bold text-charcoal/40 group-hover:text-charcoal transition-colors">
                      {service.number}
                    </span>
                    <div className="p-2.5 rounded-xl bg-[#EFECE6] text-charcoal group-hover:bg-charcoal group-hover:text-[#FAF8F5] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="pt-6 space-y-3">
                    <h3 className="text-xl font-black text-charcoal tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                      {service.subtitle}
                    </p>
                    <p className="text-sm text-charcoal/75 leading-relaxed font-normal pt-2">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-3">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50 block">
                    Core Specializations
                  </span>
                  
                  {/* Micro-specs revealed on hover */}
                  <div className="flex flex-wrap gap-1.5">
                    {service.microSpecs.map((spec) => (
                      <span
                        key={spec}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#EFECE6] text-charcoal/80 border border-[#DDD8CE]/60 group-hover:border-charcoal/30 transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-1.5 pt-2">
                    {service.deliverables.slice(0, 3).map((deliv, i) => (
                      <li key={i} className="text-xs text-charcoal/80 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-charcoal/60"></span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
