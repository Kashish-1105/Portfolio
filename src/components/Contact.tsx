import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'kashishmayurshah@gmail.com';
  const phone = '+91 93760 94456';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    window.location.href = `mailto:${email}?subject=Project Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.email)}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 relative overflow-hidden bg-[#FAF8F5]">
      {/* Minimal Toast Notification */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-50 bg-[#141413] text-[#FAF8F5] px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2 border border-white/10 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>✓ EMAIL COPIED</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Reference Headline with Serif Accents */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-charcoal/60 inline-block">
            05 / GET IN TOUCH • INITIATE <span className="font-serif italic font-normal text-charcoal">COLLABORATION</span>
          </span>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-charcoal tracking-tight leading-[0.95]">
            READY TO START <br />
            <span className="font-serif italic font-normal">A PROJECT?</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-charcoal/80 font-serif italic max-w-2xl mx-auto pt-2">
            "Let's create something thoughtful and meaningful together."
          </p>

          {/* Quick Copy / Action Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href={`mailto:${email}`}
              className="px-8 py-4 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-bold uppercase tracking-widest hover:bg-black transition-all hover:shadow-xl flex items-center gap-2 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={copyToClipboard}
              className="px-6 py-4 rounded-full bg-[#EFECE6] border border-[#DDD8CE] text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-[#E5E1D8] transition-colors flex items-center gap-2"
            >
              <Copy className="w-4 h-4 text-charcoal/70" />
              <span>Copy Email</span>
            </button>
          </div>
        </div>

        {/* Contact Form & Information Matrix */}
        <div className="mt-20 pt-16 border-t border-[#E3DFD7] grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-black text-charcoal tracking-tight">
              Direct Inquiries
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed">
              Available for full-time frontend engineering & product design roles, collaborative builds, and technical UI challenges.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7] hover:border-charcoal/40 transition-colors text-charcoal text-xs font-semibold"
              >
                <Mail className="w-4 h-4 text-charcoal/60" />
                <span>{email}</span>
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7] hover:border-charcoal/40 transition-colors text-charcoal text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-charcoal/60" />
                <span>{phone}</span>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7] text-charcoal text-xs font-semibold">
                <MapPin className="w-4 h-4 text-charcoal/60" />
                <span>Vadodara, Gujarat, India</span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://github.com/Kashish-1105"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFECE6] border border-[#DDD8CE] text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/kashish-shah-22b655275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFECE6] border border-[#DDD8CE] text-xs font-bold uppercase tracking-wider text-charcoal hover:bg-charcoal hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Quick Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#F4F1EA] border border-[#E3DFD7]">
            <h4 className="text-base font-bold text-charcoal mb-4">
              Send a Message
            </h4>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-600 mx-auto" />
                <h5 className="text-sm font-bold text-emerald-900">Thank you for reaching out!</h5>
                <p className="text-xs text-emerald-700">Your email draft has been prepared. I will respond promptly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD8CE] text-xs text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD8CE] text-xs text-charcoal focus:outline-none focus:border-charcoal transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product, timeline, or design engineering requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#DDD8CE] text-xs text-charcoal focus:outline-none focus:border-charcoal transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-bold uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
