import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, ChevronRight, ChevronLeft, CheckCircle2, Layers, Cpu, Compass, Image as ImageIcon, Terminal, Code2 } from 'lucide-react';
import { Project } from '../data/projects';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  const [activeTab, setActiveTab] = useState<'ui' | 'architecture' | 'tech'>('ui');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveTab('ui');
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  const availableImages = [
    { title: 'Primary Interface', url: project.image },
    ...(project.secondaryImage ? [{ title: 'Secondary / Workflow View', url: project.secondaryImage }] : []),
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal/80 backdrop-blur-md flex items-start justify-center p-3 sm:p-6 lg:p-10 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#FAF8F5] rounded-3xl border border-[#E3DFD7] shadow-2xl overflow-hidden my-auto">
        {/* Sticky Header Bar */}
        <div className="sticky top-0 z-20 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-[#E3DFD7] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-charcoal/60">
              Case Study Deep-Dive
            </span>
            <span className="text-[#D5D1C8]">•</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-charcoal">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Quick Next/Prev controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#EBE7DF] rounded-full p-1 border border-[#DDD8CE]">
              <button
                onClick={() => onSelectProject(prevProject)}
                className="p-1.5 hover:bg-[#FAF8F5] rounded-full transition-colors text-charcoal"
                title={`Previous: ${prevProject.title}`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onSelectProject(nextProject)}
                className="p-1.5 hover:bg-[#FAF8F5] rounded-full transition-colors text-charcoal"
                title={`Next: ${nextProject.title}`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-charcoal text-[#FAF8F5] hover:bg-black transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-10 max-h-[85vh] overflow-y-auto">
          {/* Hero Section of Case Study */}
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 rounded-full bg-[#EBE7DF] text-[11px] font-bold tracking-widest uppercase text-charcoal">
              {project.category}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal tracking-tight">
              {project.title}
            </h2>
            <p className="text-lg sm:text-xl text-charcoal/80 font-serif italic max-w-3xl">
              {project.subtitle}
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  <Github className="w-4 h-4" /> View GitHub Repository
                </a>
              )}
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EBE7DF] border border-[#DDD8CE] text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-[#E3DFD7] transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Open Figma Prototype
                </a>
              )}
            </div>
          </div>

          {/* Interactive Case Study Tabs: [ VISUAL UI ] [ ARCHITECTURE ] [ TECH STACK ] */}
          <div className="border-b border-[#E3DFD7] pb-4 flex items-center gap-3">
            <button
              onClick={() => setActiveTab('ui')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'ui'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'bg-[#EFECE6] text-charcoal/70 hover:text-charcoal'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>[ VISUAL UI ]</span>
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'bg-[#EFECE6] text-charcoal/70 hover:text-charcoal'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>[ ARCHITECTURE ]</span>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 ${
                activeTab === 'tech'
                  ? 'bg-charcoal text-[#FAF8F5] shadow-sm'
                  : 'bg-[#EFECE6] text-charcoal/70 hover:text-charcoal'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>[ TECH STACK ]</span>
            </button>
          </div>

          {/* TAB 1: VISUAL UI SHOWCASE */}
          {activeTab === 'ui' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Image Switcher Pills if multiple screenshots */}
              {availableImages.length > 1 && (
                <div className="flex items-center gap-2">
                  {availableImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                        activeImageIndex === i
                          ? 'bg-charcoal text-[#FAF8F5]'
                          : 'bg-[#EBE7DF] text-charcoal/70 hover:text-charcoal'
                      }`}
                    >
                      {img.title}
                    </button>
                  ))}
                </div>
              )}

              <div className="rounded-2xl overflow-hidden border border-[#E3DFD7] shadow-lg bg-[#FAF8F5] group relative">
                <img
                  src={availableImages[activeImageIndex].url}
                  alt={`${project.title} Interface`}
                  className="w-full h-auto object-cover max-h-[600px] transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>

              <p className="text-xs text-charcoal/60 text-center tracking-wide italic">
                Authentic interface screenshot extracted directly from development build & prototypes.
              </p>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE & TECHNICAL WORKFLOW */}
          {activeTab === 'architecture' && (
            <div className="space-y-8 animate-fadeIn">
              {project.id === 'mailwise' ? (
                /* Authentic MailWise Technical Showcase */
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#141413] text-[#FAF8F5] space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/60">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-emerald-400" />
                        <span className="font-bold text-white">MailWise Core Pipeline: OAuth 2.0 ➔ Claude AI</span>
                      </div>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Production Logic</span>
                    </div>

                    <div className="space-y-2 text-white/80">
                      <p className="text-emerald-400 font-bold">// 1. Real-Time Gmail Ingestion & OAuth Token Verification</p>
                      <p className="text-white/60">
                        GET https://gmail.googleapis.com/gmail/v1/users/me/messages?q=is:unread
                      </p>
                      <p className="text-emerald-400 font-bold pt-2">// 2. Claude 3.5 Sonnet Heuristic Categorization Payload</p>
                      <pre className="p-4 rounded-xl bg-black/40 text-emerald-300 overflow-x-auto text-[11px] leading-relaxed">
{`{
  "system_prompt": "You are MailWise Academic Classifier. Sort email into student folders.",
  "input": {
    "subject": "CS106B Midterm Exam Seating and Proctor Assignments",
    "from": "registrar@stanford.edu",
    "snippet": "Midterm exams will be held on Thursday in Gates Hall..."
  },
  "expected_output": {
    "category": "ASSESSMENTS",
    "confidence": 0.95,
    "deadline_detected": "2026-10-15T18:00:00Z",
    "urgency": "HIGH"
  }
}`}
                      </pre>
                      <p className="text-emerald-400 font-bold pt-2">// 3. Client Dashboard Visualization</p>
                      <p className="text-white/60">
                        Ingested messages compute real-time ratio rings (Assessments, Internships, Scholarships) and trigger immediate notification badges.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">01. Google Cloud OAuth</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Configured consent screen with Gmail readonly scopes and Passport.js callback handlers.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">02. Claude 3.5 Categorizer</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Extracts deadlines, flags priority alerts, and categorizes academic threads with 95%+ confidence.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">03. React + Tailwind UI</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Renders responsive category distribution rings and synchronization timeline charts.</p>
                    </div>
                  </div>
                </div>
              ) : project.id === 'femcare' ? (
                /* Authentic FemCare Health Tech Architecture */
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#141413] text-[#FAF8F5] space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/60">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-rose-400" />
                        <span className="font-bold text-white">FemCare Pipeline: Predictive Cycle Tracking</span>
                      </div>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Healthcare ML</span>
                    </div>

                    <div className="space-y-2 text-white/80">
                      <p className="text-rose-400 font-bold">// 1. Telemetry Ingestion</p>
                      <p className="text-white/60">Captures day of cycle (e.g. Day 25 of 27), symptom severity, basal temperature, and mood metrics.</p>
                      
                      <p className="text-rose-400 font-bold pt-2">// 2. ML Phase Calculation</p>
                      <pre className="p-4 rounded-xl bg-black/40 text-rose-300 overflow-x-auto text-[11px] leading-relaxed">
{`PhaseDetermination: {
  current_phase: "Luteal Phase",
  range: "Days 17 - 28",
  recovery_protocol: "Rest & Iron Replenishment",
  verified_guidelines: ["WHO Reproductive Standards", "NHS Clinical Advisory"]
}`}
                      </pre>
                      
                      <p className="text-rose-400 font-bold pt-2">// 3. Empathetic Health Feedback</p>
                      <p className="text-white/60">Surfaces non-judgmental dietary suggestions and context-aware conversational AI guidance.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">Cycle Phase Wheel</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Visual day indicator highlighting Menstrual, Follicular, Ovulation, and Luteal intervals.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">Health Assessment</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Correlates sleep, stress, energy, and mood metrics into holistic wellbeing reports.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">Conversational AI</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Answers user health inquiries with verified medical advisory guidelines.</p>
                    </div>
                  </div>
                </div>
              ) : project.id === 'styluxe' ? (
                /* Authentic Styluxe Architectural Catalogue Layout Systems */
                <div className="space-y-6">
                  <div className="p-6 rounded-2xl bg-[#141413] text-[#FAF8F5] space-y-4 font-mono text-xs">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-white/60">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-amber-400" />
                        <span className="font-bold text-white">Styluxe: Personalised Catalogue & Layout System</span>
                      </div>
                      <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">Editorial & Engineering</span>
                    </div>

                    <div className="space-y-3 text-white/80">
                      <p className="text-amber-400 font-bold">// 1. Multi-Page Editorial Spreads & Layout Variations</p>
                      <p className="text-white/60">
                        Crafted multiple layout and view ideas balancing high-resolution architectural photography with numbered capability callouts and technical specifications.
                      </p>

                      <p className="text-amber-400 font-bold pt-1">// 2. Technical Engineering Matrices</p>
                      <pre className="p-4 rounded-xl bg-black/40 text-amber-300 overflow-x-auto text-[11px] leading-relaxed">
{`CatalogueArchitecture: {
  editorial_sections: ["Why Styluxe", "Our Capabilities", "Architectural Windows", "Villa Installations"],
  engineering_specs: {
    thermal_simulation: "EnergyPlus Dynamic Thermal Modeling",
    glazing_systems: "Double & Triple Glazed Acoustic Insulation",
    structural_profiles: "Precision extruded aluminium with multi-chamber thermal breaks"
  },
  layout_variations: ["Asymmetric Hero + Metric Columns", "2-Page Centerfold Spread", "Technical Spec Sheet"]
}`}
                      </pre>

                      <p className="text-amber-400 font-bold pt-1">// 3. Dual-Format Deliverable</p>
                      <p className="text-white/60">
                        Engineered for dual-purpose deployment: CMYK high-resolution print for architectural client presentations, and interactive digital PDF / web deck.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">01. Layout & View Ideas</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Modular page layouts exploring asymmetric balance, bold numbered metrics, and full-bleed villa imagery.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">02. Engineering Precision</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Translates complex fenestration physics (U-factors, solar heat gain, acoustic dampening) into clear visual tables.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]">
                      <h4 className="text-xs font-bold uppercase text-charcoal mb-1">03. Luxury Brand Feel</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Sophisticated dark charcoal typography, warm off-white margins, and restrained gold/amber accents.</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* General System Architecture for Other Projects */
                <div className="space-y-6">
                  <div className="p-8 rounded-2xl bg-[#F4F1EA] border border-[#E3DFD7] space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal">
                      <Cpu className="w-4 h-4 text-charcoal" />
                      <span>System Architecture & Information Hierarchy</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal">
                      {project.title} Architectural Workflow
                    </h3>
                    <p className="text-sm text-charcoal/80 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7]">
                      <span className="text-[10px] font-mono font-bold uppercase text-charcoal/50 block mb-1">01 / INPUT</span>
                      <h4 className="text-sm font-bold text-charcoal mb-2">User Interaction Layer</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Responsive UI components capturing customer parameters with input validation.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7]">
                      <span className="text-[10px] font-mono font-bold uppercase text-charcoal/50 block mb-1">02 / PROCESS</span>
                      <h4 className="text-sm font-bold text-charcoal mb-2">State & Computation</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">Predictive algorithms, RESTful ingestion, or Figma component auto-layout constraints.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E3DFD7]">
                      <span className="text-[10px] font-mono font-bold uppercase text-charcoal/50 block mb-1">03 / OUTPUT</span>
                      <h4 className="text-sm font-bold text-charcoal mb-2">Deliverable Presentation</h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">High-contrast visual cards, telemetry graphs, or high-fidelity design prototypes.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: TECH STACK MATRIX */}
          {activeTab === 'tech' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-8 rounded-2xl bg-[#F4F1EA] border border-[#E3DFD7] space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-charcoal/70 mb-2">
                    Core Technical Foundation
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed">
                    Carefully chosen technologies to deliver type-safety, responsive fluidity, and rock-solid production performance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#DDD8CE] flex items-center justify-between"
                    >
                      <span className="text-xs font-bold text-charcoal">{tech}</span>
                      <CheckCircle2 className="w-4 h-4 text-charcoal/60" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Problem vs Solution Grid (Always Visible) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-y border-[#E3DFD7] py-8">
            <div className="space-y-3 pr-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#E3DFD7] pb-6 md:pb-0">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-charcoal/70">
                <Compass className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                Addressing User Pain Points
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                {project.problem || project.description}
              </p>
            </div>

            <div className="space-y-3 pl-0 md:pl-2">
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-charcoal/70">
                <Cpu className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">
                Architecture & Design Execution
              </h3>
              <p className="text-sm text-charcoal/80 leading-relaxed font-normal">
                {project.solution || 'Engineered responsive interfaces and integrated structured data flows to ensure optimal user experience and seamless performance.'}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xs font-bold tracking-widest uppercase text-charcoal/70 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Key Capabilities & Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 rounded-xl bg-[#F4F1EA] border border-[#E3DFD7]"
                  >
                    <CheckCircle2 className="w-5 h-5 text-charcoal flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcome / Impact */}
          {project.outcome && (
            <div className="space-y-2 border-l-2 border-charcoal pl-6 py-1">
              <span className="text-[11px] font-bold tracking-widest uppercase text-charcoal/60">
                Outcome & Delivery
              </span>
              <p className="text-base text-charcoal font-medium leading-relaxed">
                {project.outcome}
              </p>
            </div>
          )}

          {/* Next / Prev Project Footer Navigation */}
          <div className="pt-8 border-t border-[#E3DFD7] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="text-left group flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-charcoal/70 hover:text-charcoal"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="block text-[10px] text-charcoal/50">Previous Project</span>
                <span>{prevProject.title}</span>
              </div>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-charcoal text-[#FAF8F5] text-xs font-bold uppercase tracking-wider hover:bg-black transition-colors"
            >
              Back to All Projects
            </button>

            <button
              onClick={() => onSelectProject(nextProject)}
              className="text-right group flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-charcoal/70 hover:text-charcoal"
            >
              <div>
                <span className="block text-[10px] text-charcoal/50">Next Project</span>
                <span>{nextProject.title}</span>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
