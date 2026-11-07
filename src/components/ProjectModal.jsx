import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, Sparkles, ShoppingBag, Briefcase, Bot } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-950 text-purple-300 border border-purple-800">
              {project.category}
            </span>
            <span className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Hero Image */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-950">
          <img 
            src={project.image} 
            alt={project.title} 
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1573446238824-c28afa0cd312?auto=format&fit=crop&w=800&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1">
              Case Study Deep Dive
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-300 text-xs sm:text-sm">
          
          {/* Overview Section */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-2">
              Project Overview & Mission
            </h3>
            <p className="text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-center">
            {project.metrics.map((m, idx) => (
              <div key={idx}>
                <div className="text-[11px] text-slate-400">{m.label}</div>
                <div className="text-sm sm:text-base font-bold text-purple-300 mt-0.5">{m.value}</div>
              </div>
            ))}
          </div>

          {/* Execution Strategy */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-3">
              Core Responsibilities & Workflow
            </h3>
            <div className="space-y-2.5">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Skills applied */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-3">
              Tools & Methodologies Applied
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-800 text-purple-300 border border-slate-700 text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Interested in implementing this type of workflow for your business?
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-xs shadow-md shadow-purple-600/30"
            >
              <span>Discuss Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
