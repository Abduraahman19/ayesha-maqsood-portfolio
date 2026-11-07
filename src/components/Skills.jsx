import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { 
  Briefcase, 
  Sparkles, 
  Share2, 
  Cpu, 
  CheckCircle, 
  Check, 
  Layers,
  Award
} from 'lucide-react';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const iconComponents = [Briefcase, Sparkles, Share2, Cpu];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <span>CORE CAPABILITIES & TOOLS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Skills Matrix
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Detailed view of my technical skills, AI tooling, e-commerce expertise, and administrative competencies.
          </p>

          {/* Category Tabs */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2">
            {skillCategories.map((cat, idx) => {
              const IconComp = iconComponents[idx] || Briefcase;
              const isSelected = selectedCategory === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(idx)}
                  className={`flex items-center justify-center gap-2 p-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-900/70 to-indigo-900/70 text-white border-purple-500 shadow-md shadow-purple-600/20'
                      : 'bg-slate-900/70 text-slate-400 hover:text-white hover:bg-slate-800 border-slate-800'
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isSelected ? 'text-purple-300' : 'text-slate-400'}`} />
                  <span className="truncate">{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Category Skills Display */}
        <div className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-2">
            <div>
              <h3 className="font-display text-xl font-bold text-white flex items-center gap-2">
                <span>{skillCategories[selectedCategory].category}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-800">
                  {skillCategories[selectedCategory].skills.length} Capabilities
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Verified proficiencies and operational workflows applied across projects.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Expert
              </span>
              <span className="inline-flex items-center gap-1 ml-2">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span> Advanced
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {skillCategories[selectedCategory].skills.map((skill, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">
                      {skill.name}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      skill.level === 'Expert' 
                        ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50' 
                        : skill.level === 'Advanced'
                        ? 'bg-purple-950/80 text-purple-300 border border-purple-800/50'
                        : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/50'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {skill.desc}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-purple-300 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Production Tested</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Software & Tools Icons Cloud */}
        <div className="mt-12 rounded-2xl bg-slate-900/50 border border-slate-800 p-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-4">
            Key Software & Toolchain Stack
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              "ChatGPT Plus (GPT-4o)",
              "Canva Pro",
              "Google Sheets",
              "Google Docs",
              "Google Drive",
              "MS Excel",
              "MS Word",
              "CapCut",
              "AI Voice Synthesizers",
              "YouTube Studio",
              "TikTok Creator Hub",
              "Instagram Business",
              "Trello / Asana",
              "Slack"
            ].map((tool, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-slate-200 text-xs font-medium hover:border-purple-500/50 hover:text-white transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
