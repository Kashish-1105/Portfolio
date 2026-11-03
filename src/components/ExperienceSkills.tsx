import React, { useState } from 'react';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import { GraduationCap, Briefcase, Award, CheckCircle2, ChevronRight, Terminal, Sparkles } from 'lucide-react';

export const ExperienceSkills: React.FC = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState(0);

  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E3DFD7]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-3">
              03 / BACKGROUND & SKILLS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal tracking-tight">
              EXPERIENCE & EXPERTISE.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-charcoal/70 max-w-md font-normal leading-relaxed">
            A cohesive track record combining computer engineering rigor, real-world frontend delivery, and verified UX design certifications.
          </p>
        </div>

        {/* Two-Column Grid: Left Experience Timeline | Right Categorized Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 pt-12">
          {/* Left Column: Timeline of Experience & Education */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-2 pb-2">
              <Briefcase className="w-4 h-4 text-charcoal" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">
                Practical Experience & Academic Track
              </h3>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-[1.5px] before:bg-[#E3DFD7]">
              {experiences.map((item) => (
                <div key={item.id} className="relative pl-10 group">
                  {/* Timeline Dot */}
                  <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#FAF8F5] border-2 border-charcoal group-hover:scale-125 transition-transform flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-charcoal"></span>
                  </div>

                  {/* Card Container */}
                  <div className="p-6 rounded-2xl bg-[#F4F1EA] border border-[#E3DFD7] hover:border-charcoal/30 shadow-[0_2px_12px_rgba(20,20,19,0.02)] transition-all">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/50">
                        {item.period} {item.location ? `• ${item.location}` : ''}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#DDD8CE] text-charcoal">
                        {item.type}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-charcoal mb-1">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/70 mb-4">
                      {item.organization}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {item.points.map((pt, i) => (
                        <li key={i} className="text-xs sm:text-sm text-charcoal/80 flex items-start gap-2.5 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-charcoal/50 mt-1.5 flex-shrink-0"></span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E3DFD7]">
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-bold tracking-tight text-charcoal/70 px-2 py-0.5 rounded bg-[#FAF8F5] border border-[#E3DFD7]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Categorized Technical Skills */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 pb-2">
              <Terminal className="w-4 h-4 text-charcoal" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal">
                Technical Stack & Core Disciplines
              </h3>
            </div>

            {/* Interactive Category Selector */}
            <div className="flex flex-col gap-2">
              {skillCategories.map((cat, idx) => (
                <div
                  key={cat.title}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    activeSkillCategory === idx
                      ? 'bg-[#FAF8F5] border-charcoal shadow-md'
                      : 'bg-[#F4F1EA] border-[#E3DFD7] hover:border-[#DDD8CE]'
                  }`}
                >
                  <button
                    onClick={() => setActiveSkillCategory(idx)}
                    className="w-full p-5 text-left flex items-center justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-charcoal/50 block">
                        Category 0{idx + 1}
                      </span>
                      <h4 className="text-base font-bold text-charcoal tracking-tight">
                        {cat.title}
                      </h4>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 text-charcoal transition-transform duration-300 ${
                        activeSkillCategory === idx ? 'rotate-90' : ''
                      }`}
                    />
                  </button>

                  {/* Expanded Skills Drawer */}
                  {activeSkillCategory === idx && (
                    <div className="px-5 pb-6 pt-1 border-t border-[#E3DFD7] space-y-4 animate-fadeIn">
                      <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                        {cat.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#DDD8CE] text-xs font-semibold text-charcoal tracking-tight shadow-sm flex items-center gap-1.5"
                          >
                            <CheckCircle2 className="w-3 h-3 text-charcoal/70" />
                            <span>{skill}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* LeetCode & Certifications Highlight Card */}
            <div className="p-6 rounded-2xl bg-charcoal text-[#FAF8F5] space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FAF8F5]/60 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" /> Problem Solving Milestone
                </span>
                <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono font-bold">
                  200+ Solved
                </span>
              </div>

              <h4 className="text-xl font-black tracking-tight">
                Data Structures & Algorithmic Foundations
              </h4>
              <p className="text-xs text-[#FAF8F5]/80 leading-relaxed font-normal">
                Actively practicing algorithmic problem solving on LeetCode with 200+ questions solved spanning Trees, Graphs, Dynamic Programming, and System Design.
              </p>

              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#FAF8F5]/90">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Google UX Design Certified Professional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
