import React from 'react';
import { ArrowDown, ArrowUpRight, Code, Layers, Sparkles, MapPin, Check, Github, Linkedin, ExternalLink } from 'lucide-react';

export type PortfolioMode = 'designer' | 'engineer';

interface HeroProps {
  mode: PortfolioMode;
  onToggleMode: (mode: PortfolioMode) => void;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  mode,
  onToggleMode,
  onExploreClick,
  onContactClick,
}) => {
  return (
    <section id="about" className="relative min-h-[88vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Background Subtle Editorial Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 border-x border-[#E3DFD7]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 my-auto">
        {/* Top Greeting & Tactile Designer ↔ Engineer Switcher */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E3DFD7]/80">
          <div className="flex items-center gap-3">
            <span className="font-serif italic text-2xl sm:text-3xl text-charcoal/75 tracking-tight">
              Hey, <span className="text-charcoal font-normal">there</span>
            </span>
            <span className="text-charcoal/30">•</span>
            <span className="text-xs uppercase font-bold tracking-widest text-charcoal/60">
              Personal Portfolio
            </span>
          </div>

          {/* Tactile Two-State Toggle */}
          <div className="p-1 rounded-full bg-[#EBE7DF] border border-[#DDD8CE] shadow-inner inline-flex items-center gap-1">
            <button
              onClick={() => onToggleMode('designer')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                mode === 'designer'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>As A Designer</span>
            </button>

            <button
              onClick={() => onToggleMode('engineer')}
              className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-1.5 ${
                mode === 'engineer'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <Code className="w-3 h-3" />
              <span>As An Engineer</span>
            </button>
          </div>
        </div>

        {/* Main Hero Composition: Dominant Headline + Integrated Floating Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left / Center Dominant Typography: "I AM KASHISH." */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-charcoal/60 block mb-2">
                UI / UX Designer & Frontend Developer
              </span>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-charcoal leading-[0.92]">
                I AM <br />
                <span className="underline decoration-[#D5D1C8] decoration-4 underline-offset-8">
                  KASHISH.
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/85 font-normal leading-relaxed max-w-xl">
              {mode === 'designer' ? (
                <>
                  "I craft <span className="font-serif italic font-semibold">thoughtful digital experiences</span> and design visual systems that bring aesthetic clarity to complex ideas."
                </>
              ) : (
                <>
                  "I architect <span className="font-serif italic font-semibold">high-performance interfaces</span> with React and TypeScript, connecting clean design with scalable technology."
                </>
              )}
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-7 py-3.5 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-bold uppercase tracking-widest hover:bg-black hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                <span>Explore Works</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                className="px-7 py-3.5 rounded-full bg-transparent border-2 border-charcoal text-charcoal text-xs font-bold uppercase tracking-widest hover:bg-charcoal hover:text-[#FAF8F5] transition-all flex items-center gap-2 group"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Integrated Floating Profile Card (Browser-Style Minimal Card) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[360px] rounded-2xl border border-[#E3DFD7] bg-[#FAF8F5] shadow-[0_15px_35px_rgba(20,20,19,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_45px_rgba(20,20,19,0.1)] group">
              {/* Card Browser-Style Header */}
              <div className="px-4 py-2.5 bg-[#F2EFEB] border-b border-[#E3DFD7] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]/80"></span>
                </div>
                <span className="text-[10px] font-mono font-medium text-charcoal/50 tracking-wider">
                  kashish.design / profile
                </span>
                <span className="w-2.5"></span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-4">
                  {/* Compact Portrait Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-[#E3DFD7] bg-[#EBE7DF] flex-shrink-0 shadow-sm">
                    <img
                      src="/assets/portrait/kashish_portrait.png"
                      alt="Kashish Shah"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Identity Details */}
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-charcoal tracking-tight leading-snug">
                      Kashish Shah
                    </h3>
                    <p className="text-xs font-semibold text-charcoal/70">
                      UI/UX & Frontend Engineer
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-charcoal/50">
                      <MapPin className="w-3 h-3 text-charcoal/50" />
                      <span>Vadodara, India</span>
                    </div>
                  </div>
                </div>

                {/* Status & Credential Pills */}
                <div className="pt-2 border-t border-[#E3DFD7]/70 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-charcoal/80 font-medium">
                    <span className="text-[11px] text-charcoal/50 uppercase tracking-wider font-bold">Academics</span>
                    <span className="text-[11px] font-semibold">Parul Univ '27 • 8.47 CGPA</span>
                  </div>

                  <div className="flex items-center justify-between text-charcoal/80 font-medium">
                    <span className="text-[11px] text-charcoal/50 uppercase tracking-wider font-bold">Status</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Available for Roles
                    </span>
                  </div>
                </div>

                {/* Quick Social / Portfolio Icons */}
                <div className="pt-2 border-t border-[#E3DFD7]/70 flex items-center justify-between text-xs text-charcoal/60">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40">
                    Connect
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/Kashish-1105"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-[#EBE7DF] text-charcoal hover:text-black transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/kashish-shah-22b655275"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-[#EBE7DF] text-charcoal hover:text-black transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://www.figma.com/proto/zfTYb5GVnGFA2siGzMjYtd/personal-portfolio?node-id=1-2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg hover:bg-[#EBE7DF] text-charcoal hover:text-black transition-colors"
                      title="Figma Portfolio"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Ticker */}
      <div className="w-full border-t border-[#E3DFD7] mt-10 pt-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-wrap items-center justify-between gap-4 text-xs tracking-wider uppercase text-charcoal/60 font-semibold">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-charcoal"></span>
            <span>
              {mode === 'designer' ? 'Figma & Interactive Prototyping' : 'React.js & TypeScript Specialist'}
            </span>
          </div>
          <div>Google UX Design Certified</div>
          <div className="hidden md:block">200+ LeetCode Solved</div>
          <div>Scroll to Discover Works</div>
        </div>
      </div>
    </section>
  );
};
