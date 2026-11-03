import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { Project, primaryDesignProjects, engineeringProjects } from '../data/projects';
import { PortfolioMode } from './Hero';

interface ProjectsProps {
  mode: PortfolioMode;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ mode, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'design' | 'engineering'>('design');

  const displayedProjects = activeTab === 'design' ? primaryDesignProjects : engineeringProjects;

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E3DFD7]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-2">
              01 / SELECTED WORKS • DESIGNED <span className="font-serif italic font-normal text-charcoal">WITH INTENTION</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal tracking-tight">
              FEATURED <span className="font-serif italic font-normal">PROJECTS.</span>
            </h2>
          </div>

          {/* Compact Switcher Tab */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#EBE7DF] border border-[#DDD8CE]">
            <button
              onClick={() => setActiveTab('design')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'design'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              Design Works ({primaryDesignProjects.length})
            </button>
            <button
              onClick={() => setActiveTab('engineering')}
              className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all ${
                activeTab === 'engineering'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'text-charcoal/70 hover:text-charcoal'
              }`}
            >
              Full-Stack & AI ({engineeringProjects.length})
            </button>
          </div>
        </div>

        {/* Compact Editorial Gallery Grid: Balanced 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-10">
          {displayedProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 shadow-[0_4px_20px_rgba(20,20,19,0.02)] hover:shadow-[0_12px_32px_rgba(20,20,19,0.06)] transition-all duration-300"
            >
              {/* Compact Image Container (Properly Proportioned, NOT huge) */}
              <div
                data-cursor="project"
                onClick={() => onSelectProject(project)}
                className="relative rounded-xl overflow-hidden border border-[#E3DFD7] bg-[#EBE7DF] cursor-pointer aspect-[16/10] max-h-[250px] w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Subtle Hover Pill */}
                <div className="absolute inset-0 bg-charcoal/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <span className="px-4 py-2 rounded-full bg-charcoal text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Content Below */}
              <div className="pt-4 space-y-2 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/50">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-bold text-charcoal/40">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    onClick={() => onSelectProject(project)}
                    className="text-lg sm:text-xl font-black text-charcoal tracking-tight cursor-pointer hover:underline decoration-charcoal/40 underline-offset-4"
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-normal line-clamp-2 mt-1">
                    {project.description}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div className="pt-3 border-t border-[#E3DFD7]/60 flex items-center justify-between gap-2 mt-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold text-charcoal/70 px-2 py-0.5 rounded bg-[#EFECE6] border border-[#DDD8CE]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1 hover:underline underline-offset-4 flex-shrink-0"
                  >
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
