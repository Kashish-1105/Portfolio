import React from 'react';
import { ArrowUp, Github, Linkedin, ExternalLink, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#E3DFD7] py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Wordmark */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-black tracking-tight text-charcoal">
              KASHISH SHAH
            </span>
            <span className="text-xs text-charcoal/50 font-medium">
              • UI Engineer & Product Designer
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-bold tracking-wider uppercase text-charcoal/70">
            <a
              href="https://linkedin.com/in/kashish-shah-22b655275"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Kashish-1105"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.figma.com/proto/zfTYb5GVnGFA2siGzMjYtd/personal-portfolio?node-id=1-2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              Figma
            </a>
            <a
              href="mailto:kashishmayurshah@gmail.com"
              className="hover:text-charcoal transition-colors"
            >
              Email
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-charcoal hover:underline underline-offset-4"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 border-t border-[#E3DFD7]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-charcoal/50 font-medium tracking-wide">
          <div>
            © {new Date().getFullYear()} Kashish Shah. All rights reserved.
          </div>
          <div>
            Vadodara, Gujarat, India • Parul University '27
          </div>
        </div>
      </div>
    </footer>
  );
};
