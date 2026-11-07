import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Briefcase, 
  Sparkles, 
  Share2, 
  Cpu, 
  Check, 
  Layers
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const iconComponents = [Briefcase, Sparkles, Share2, Cpu];

  return (
    <section id="skills" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <span>CORE SKILLS & TOOLS</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Competencies Matrix
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Categorized capabilities across administration, e-commerce, AI tools, and social media.
          </p>

          {/* Quick Category Tabs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {skillCategories.map((cat, idx) => {
              const IconComp = iconComponents[idx] || Briefcase;
              const isSelected = selectedCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 border border-purple-500 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Skills */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 sm:p-7 backdrop-blur-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {skillCategories[selectedCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-bold text-white text-xs sm:text-sm">
                      {skill.name}
                    </h4>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase ${
                      skill.level === 'Expert' 
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-800/40' 
                        : 'bg-purple-950 text-purple-300 border border-purple-800/40'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug">
                    {skill.desc}
                  </p>
                </div>
                
                <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center gap-1 text-[10px] text-purple-300">
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span>Verified & Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software Tag Cloud */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {[
            "ChatGPT Plus",
            "Canva Pro",
            "Google Sheets",
            "Google Docs",
            "MS Excel",
            "CapCut",
            "YouTube Studio",
            "TikTok Creator",
            "Trello",
            "Slack"
          ].map((tool, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-[11px] font-medium hover:border-purple-500/40 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
