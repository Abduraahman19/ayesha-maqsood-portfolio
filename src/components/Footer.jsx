import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer({ onOpenCvModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Logo & Bio snippet */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 flex items-center justify-center">
                <span className="font-display font-bold text-white text-xs">AM</span>
              </div>
              <span className="font-display font-bold text-white text-base">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-sm">
              Virtual Assistant, Social Media & E-Commerce Assistant. Helping global businesses scale through AI and dependable execution.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <button onClick={onOpenCvModal} className="hover:text-purple-400 transition-colors">
              CV / Resume
            </button>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-[11px] font-semibold">Top</span>
          </button>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React, Vite & Tailwind CSS</span>
            <span>•</span>
            <span className="text-purple-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Modern Digital Portfolio
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
