import React, { useState, useEffect, useRef } from 'react';
import { Award, Terminal, Code2, ArrowUpRight } from 'lucide-react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  started: boolean;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = '',
  decimals = 0,
  started,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    let startTime: number;
    const duration = 1600; // 1.6s smooth duration

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(easedProgress * target);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [started, target]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
};

export const Journey: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const leetCodeTopics = [
    'Arrays',
    'Strings',
    'Linked Lists',
    'Trees',
    'Graphs',
    'Binary Search',
    'Sliding Window',
    'Dynamic Programming',
  ];

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[#F4F1EA] border-t border-[#E3DFD7]"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Serif Accents */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#DDD8CE]">
          <div>
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-3">
              04 / THE JOURNEY • TRACKED <span className="font-serif italic font-normal text-charcoal">BY THE NUMBERS</span>
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-charcoal tracking-tight">
              QUANTIFIABLE <span className="font-serif italic font-normal">MILESTONES.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-charcoal/70 max-w-md font-normal leading-relaxed">
            Concrete milestones reflecting deliberate practice, shipped interfaces, and rigorous computer engineering foundations.
          </p>
        </div>

        {/* Editorial Numerical Grid with Animated Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {/* Card 1: UI/UX Designs */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40 block mb-4">
                METRIC 01 / DESIGN SYSTEMS
              </span>
              <div className="text-5xl sm:text-6xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                <AnimatedCounter target={10} suffix="+" started={hasAnimated} />
              </div>
            </div>
            <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                UI / UX DESIGNS
              </h4>
              <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                Interactive Figma prototypes & production design systems.
              </p>
            </div>
          </div>

          {/* Card 2: Frontend Projects */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40 block mb-4">
                METRIC 02 / CODE DELIVERY
              </span>
              <div className="text-5xl sm:text-6xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                0<AnimatedCounter target={5} suffix="+" started={hasAnimated} />
              </div>
            </div>
            <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                FRONTEND PROJECTS
              </h4>
              <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                Full-stack React, TypeScript & API-integrated applications.
              </p>
            </div>
          </div>

          {/* Card 3: LeetCode Algorithms & Topic Tags */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40">
                  METRIC 03 / ALGORITHMS
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-charcoal text-[#FAF8F5]">
                  DSA Core
                </span>
              </div>
              <div className="text-5xl sm:text-6xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                <AnimatedCounter target={200} suffix="+" started={hasAnimated} />
              </div>
            </div>

            <div className="pt-6 border-t border-[#E3DFD7] mt-6 space-y-3">
              <div>
                <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                  LEETCODE PROBLEMS
                </h4>
                <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                  Data structures, algorithmic time complexity & technical interviews.
                </p>
              </div>

              {/* Monochromatic LeetCode Topic Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {leetCodeTopics.map((topic) => (
                  <span
                    key={topic}
                    className="text-[10px] font-semibold text-charcoal/75 px-2 py-0.5 rounded bg-[#EFECE6] border border-[#DDD8CE]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Academic CGPA */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40 block mb-4">
                METRIC 04 / ACADEMICS
              </span>
              <div className="text-5xl sm:text-6xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                <AnimatedCounter target={8.47} decimals={2} started={hasAnimated} />
                <span className="text-2xl text-charcoal/40 font-normal"> / 10</span>
              </div>
            </div>
            <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                ACADEMIC STANDING
              </h4>
              <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                B.Tech Computer Engineering at Parul University.
              </p>
            </div>
          </div>

          {/* Card 5: Engineering Journey */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40 block mb-4">
                METRIC 05 / TIMELINE
              </span>
              <div className="text-5xl sm:text-6xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                2023–27
              </div>
            </div>
            <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                ENGINEERING JOURNEY
              </h4>
              <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                Dual expertise in interface design and full-stack implementation.
              </p>
            </div>
          </div>

          {/* Card 6: Google UX Certificate */}
          <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7] hover:border-charcoal/40 transition-all duration-300 shadow-[0_2px_15px_rgba(20,20,19,0.02)] flex flex-col justify-between group">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/40 block mb-4">
                METRIC 06 / CERTIFICATION
              </span>
              <div className="text-4xl sm:text-5xl font-black text-charcoal tracking-tight group-hover:scale-[1.02] transition-transform">
                CERTIFIED
              </div>
            </div>
            <div className="pt-8 border-t border-[#E3DFD7] mt-8 space-y-1">
              <h4 className="text-sm font-black uppercase tracking-wider text-charcoal">
                GOOGLE UX PROFESSIONAL
              </h4>
              <p className="text-xs text-charcoal/70 font-normal leading-relaxed">
                Human-centered research, user journeys & accessibility standards.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Quote Banner */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E3DFD7] text-center max-w-4xl mx-auto">
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-charcoal/90 leading-snug">
            "Design without code is an unfulfilled promise; code without design is a missed opportunity."
          </p>
          <span className="block mt-4 text-[11px] font-bold uppercase tracking-widest text-charcoal/50">
            Kashish Shah — UI/UX Designer & Frontend Engineer
          </span>
        </div>
      </div>
    </section>
  );
};
