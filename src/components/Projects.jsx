import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { 
  ExternalLink, 
  Sparkles, 
  ShoppingBag, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Tag,
  Maximize2
} from 'lucide-react';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterOptions = ['All', 'E-Commerce', 'AI Content', 'Virtual Assistance'];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'E-Commerce') return project.category.toLowerCase().includes('e-commerce');
    if (activeFilter === 'AI Content') return project.category.toLowerCase().includes('ai');
    if (activeFilter === 'Virtual Assistance') return project.category.toLowerCase().includes('virtual assistance');
    return true;
  });

  return (
    <section id="projects" className="py-20 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <span>PROVEN PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Real Platforms Built & Scaled Independently
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Proof of capability through active platform ownership, from brand building and AI video production to structured VA systems.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-500'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl shadow-black/25 group"
            >
              <div>
                {/* Visual Image / Header Banner */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-950/90 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                      {project.badge}
                    </span>
                  </div>

                  {/* Top Right Quick Modal Trigger */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/80 hover:bg-purple-600 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                    title="View Full Case Study"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-medium text-purple-300 uppercase tracking-wider block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-slate-300 mb-3 line-clamp-2">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-5 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-[10px] text-slate-500 font-medium">{m.label}</div>
                        <div className="text-xs font-bold text-slate-200 mt-0.5 truncate">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Execution Highlights:
                    </span>
                    {project.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags & Action Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-medium text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-purple-400" />
                    <span>Case Study</span>
                  </button>

                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-purple-300 bg-purple-950/50 hover:bg-purple-900/70 border border-purple-800/50 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
