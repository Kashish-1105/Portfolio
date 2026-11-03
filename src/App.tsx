import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero, PortfolioMode } from './components/Hero';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { ExperienceSkills } from './components/ExperienceSkills';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CustomCursor } from './components/CustomCursor';
import { Project, projects } from './data/projects';

export function App() {
  const [mode, setMode] = useState<PortfolioMode>('designer');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141413] flex flex-col font-sans selection:bg-charcoal selection:text-[#FAF8F5] relative">
      {/* Desktop Magnetic Follower Cursor */}
      <CustomCursor />

      {/* Top Navigation with Live Status Capsule */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Section 01: Hero / Introduction with Tactile Mode Switcher */}
        <Hero
          mode={mode}
          onToggleMode={setMode}
          onExploreClick={scrollToProjects}
          onContactClick={scrollToContact}
        />

        {/* Section 02: Recent Projects & Editorial Showcase with Tilt and Cursor Pill */}
        <Projects
          mode={mode}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 03: Services ("I CAN HELP YOU WITH" + Hover Dimming & Micro-Specs) */}
        <Services />

        {/* Section 04: Experience & Skills */}
        <ExperienceSkills />

        {/* Section 05: The Journey & Key Metrics with Animated Counters + LeetCode Topics */}
        <Journey />

        {/* Section 06: Contact & Closing CTA with Copy Email Toast */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Case Study Modal with Visual UI, Architecture & Tech Stack Tabs */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(project) => setSelectedProject(project)}
          allProjects={projects}
        />
      )}
    </div>
  );
}

export default App;
