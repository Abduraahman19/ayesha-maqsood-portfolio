import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CvSection from './components/CvSection';
import PricingPackages from './components/PricingPackages';
import FaqSection from './components/FaqSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CvModal from './components/CvModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
        <About onOpenCvModal={() => setIsCvModalOpen(true)} />
        <Services />
        <Projects />
        <Skills />
        <CvSection onOpenCvModal={() => setIsCvModalOpen(true)} />
        <PricingPackages />
        <FaqSection />
        <Contact />
      </main>

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onOpenCvModal={() => setIsCvModalOpen(true)} />

      {/* Fullscreen CV Dialog / Print View */}
      <CvModal 
        isOpen={isCvModalOpen} 
        onClose={() => setIsCvModalOpen(false)} 
      />
    </div>
  );
}
