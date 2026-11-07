import React from 'react';
import { Check, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PricingPackages() {
  const packages = [
    {
      name: "Dedicated Part-Time",
      hours: "20 Hours / Week",
      badge: "Popular for E-Commerce",
      description: "Consistent daily execution for growing stores and content creators.",
      features: [
        "4 hours / day focused execution",
        "Social media scheduling & Canva graphics",
        "E-commerce product listing updates & SEO",
        "Clean Google Sheets & daily status logs"
      ],
      cta: "Hire Part-Time",
      highlight: false
    },
    {
      name: "Dedicated Full-Time",
      hours: "40 Hours / Week",
      badge: "Maximum Output",
      description: "Full operational integration as your primary remote virtual assistant.",
      features: [
        "8 hours / day dedicated focus & priority turnaround",
        "AI video generation, short-form editing & scripts",
        "Store management, SEO descriptions & inventory",
        "Web research dossiers & zero micromanagement"
      ],
      cta: "Hire Full-Time",
      highlight: true
    },
    {
      name: "Project Sprint",
      hours: "Milestone-Based",
      badge: "Targeted Scope",
      description: "Ideal for one-off store setups, video batches, or data cleanup sprints.",
      features: [
        "Batch creation of AI video scripts & shorts",
        "Bulk product listing uploads with SEO copy",
        "Messy spreadsheet / database overhaul",
        "Fast delivery with revisions included"
      ],
      cta: "Discuss Project Sprint",
      highlight: false
    }
  ];

  return (
    <section id="engagement-models" className="py-16 relative bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>COLLABORATION MODELS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Flexible Ways to Work Together
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Choose the engagement model that fits your business needs and schedule.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-purple-950/60 via-slate-900/90 to-slate-900 border-2 border-purple-500 shadow-xl shadow-purple-950/40 relative lg:-translate-y-2'
                  : 'bg-slate-900/70 border border-slate-800 hover:border-purple-500/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-[10px] uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Recommended</span>
                </div>
              )}

              <div>
                <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                  {pkg.badge}
                </span>

                <h3 className="font-display text-xl font-bold text-white">
                  {pkg.name}
                </h3>
                
                <div className="mt-1 mb-3 inline-block px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-xs font-bold text-slate-300">
                  {pkg.hours}
                </div>

                <p className="text-xs text-slate-400 mb-5">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-200">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-all ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-md shadow-purple-600/30'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                  }`}
                >
                  <span>{pkg.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
