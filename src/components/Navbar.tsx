import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, MapPin } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-4 border-b border-[#E3DFD7]/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Wordmark & Location Pill */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="group flex items-center gap-2 text-charcoal font-black tracking-tight text-xl sm:text-2xl transition-transform duration-200 hover:scale-[1.01]"
          >
            <span>KASHISH</span>
            <span className="w-1.5 h-1.5 rounded-full bg-charcoal group-hover:scale-150 transition-transform"></span>
          </a>

          {/* Discreet Live Status / Location Capsule */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6]/80 border border-[#E3DFD7] text-[11px] font-medium tracking-wider uppercase text-charcoal/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>VADODARA, IN · AVAILABLE FOR OPPORTUNITIES</span>
          </div>
        </div>

        {/* Desktop Navigation Links with Editorial Hover */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-charcoal/80">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-charcoal transition-colors tracking-wide text-xs uppercase font-semibold group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-charcoal transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right side CTAs */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Status badge for medium screens */}
          <div className="xl:hidden flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFECE6] border border-[#E3DFD7] text-[11px] font-medium tracking-wide uppercase text-charcoal">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available</span>
          </div>

          {/* Contact Pill CTA */}
          <button
            onClick={onContactClick}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-all hover:shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal hover:bg-[#EFECE6] rounded-lg transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E3DFD7] px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <div className="pb-3 border-b border-[#EFECE6] flex items-center gap-2 text-xs font-medium uppercase text-charcoal/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Vadodara, IN · Available for Opportunities</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-charcoal/80 hover:text-charcoal py-2 border-b border-[#EFECE6]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
