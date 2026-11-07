import React from 'react';
import { services } from '../data/portfolioData';
import { 
  Sparkles, 
  ShoppingBag, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Clock
} from 'lucide-react';

export default function Services() {
  const iconList = [Sparkles, ShoppingBag, Briefcase];

  return (
    <section id="services" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <span>CORE SERVICES</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Specialized Services For Rapid Growth
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Clear deliverables designed to save you hours and drive measurable results.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((service, idx) => {
            const Icon = iconList[idx] || Sparkles;
            return (
              <div 
                key={service.id}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-purple-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-purple-400 font-medium mb-4">
                    {service.tagline}
                  </p>

                  {/* Concise Deliverables */}
                  <div className="space-y-2 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.tools.map((tool, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 text-[10px] font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-purple-600 hover:text-white border border-slate-700 hover:border-purple-500 transition-all"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
