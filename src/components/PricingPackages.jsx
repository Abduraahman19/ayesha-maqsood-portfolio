import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, Calendar, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function PricingPackages() {
  const packages = [
    {
      name: "Dedicated Part-Time",
      hours: "20 Hours / Week",
      badge: "Most Popular for E-Commerce",
      description: "Ideal for e-commerce stores, creators, or solo entrepreneurs needing consistent daily support.",
      features: [
        "Daily task execution (4 hours / day)",
        "Social media scheduling & Canva graphics",
        "E-commerce product listing updates & SEO",
        "Google Sheets & data organization",
        "Daily communication & status reporting",
        "Flexible shift overlap"
      ],
      cta: "Hire Part-Time",
      highlight: false
    },
    {
      name: "Dedicated Full-Time",
      hours: "40 Hours / Week",
      badge: "Maximum Output & Priority",
      description: "Complete operational integration as your primary remote virtual assistant & content manager.",
      features: [
        "Full 8 hours / day dedicated focus",
        "Priority turnaround on all urgent tasks",
        "End-to-end AI video & social management",
        "Store management & catalog maintenance",
        "Deep competitor research & market analysis",
        "Dedicated weekly sync & proactive ideas"
      ],
      cta: "Hire Full-Time",
      highlight: true
    },
    {
      name: "Project / Sprint Basis",
      hours: "Custom Scope & Milestone",
      badge: "Targeted Deliverable",
      description: "Perfect for one-off store setups, video batches, or administrative cleanup sprints.",
      features: [
        "Batch creation of AI video scripts & shorts",
        "Bulk product listing uploads with SEO copy",
        "Messy spreadsheet / database overhaul",
        "Competitor research & market intelligence report",
        "Milestone-based delivery guarantee",
        "Post-delivery revisions included"
      ],
      cta: "Discuss Project Sprint",
      highlight: false
    }
  ];

  return (
    <section id="engagement-models" className="py-20 relative bg-slate-900/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>COLLABORATION MODELS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flexible Ways to Work Together
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Choose the engagement structure that matches your current workflow and business stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? 'bg-gradient-to-b from-purple-950/70 via-slate-900/90 to-slate-900 border-2 border-purple-500 shadow-2xl shadow-purple-950/50 relative lg:-translate-y-2'
                  : 'bg-slate-900/70 border border-slate-800 hover:border-purple-500/40'
              }`}
            >
              {pkg.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-[11px] shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Recommended</span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white">
                  {pkg.name}
                </h3>
                
                <div className="mt-2 mb-4 inline-block px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-bold text-slate-200">
                  {pkg.hours}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-3 mb-8">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    What's Included:
                  </span>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href="#contact"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                    pkg.highlight
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30'
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
