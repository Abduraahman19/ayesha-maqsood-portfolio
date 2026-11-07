import React from 'react';
import { personalInfo, education, languages, valuePropositions } from '../data/portfolioData';
import { 
  GraduationCap, 
  Languages as LanguagesIcon, 
  Target, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  Globe, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function About() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Terminal: Terminal,
    Globe: Globe
  };

  return (
    <section id="about" className="py-16 bg-slate-900/30 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Tech-Savvy Foundation & Proactive Execution
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Combining IT expertise with real-world entrepreneurial experience in e-commerce and AI media.
          </p>
        </div>

        {/* 2-Column Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Background & Career Objective */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-purple-500/30 transition-all">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-400 block mb-2">
                Proven Track Record
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Hands-on Operator, Not Just an Assistant
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                With a <strong className="text-white">BS in Information Technology</strong> from GCWUF, I independently built and launched handmade accessories brand <strong className="text-purple-300">Siyah Official</strong> (beaded bracelets & keychains) and AI comedy channel <strong className="text-pink-300">MazaaqiyaShortsTV</strong>.
              </p>
              
              {/* 3 bullet highlights */}
              <div className="space-y-2 text-xs text-slate-300 mb-5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Self-taught, disciplined, and capable of working completely independently.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Expert in using ChatGPT to script viral comedy shorts and product SEO listings.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Proficient in Google Workspace, MS Office spreadsheets, and web research.</span>
                </div>
              </div>
            </div>

            {/* Objective Quote Box */}
            <div className="p-3.5 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs">
              <span className="font-bold text-pink-300 text-[11px] uppercase tracking-wider block mb-1">
                Career Goal
              </span>
              <p className="text-slate-200 italic">
                "{personalInfo.careerObjective}"
              </p>
            </div>
          </div>

          {/* Right Column: Education & Languages Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Education Box */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/30 transition-all flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400">Education</span>
                <h4 className="font-bold text-white text-sm mt-0.5">{education.degree}</h4>
                <p className="text-purple-300 text-xs">{education.institution}</p>
                <p className="text-slate-400 text-[11px]">{education.location}</p>
              </div>
            </div>

            {/* Languages Box */}
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-emerald-500/30 transition-all flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <LanguagesIcon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400">Languages</span>
                <div className="mt-1 space-y-1.5 text-xs">
                  {languages.map((lang, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="font-semibold text-white">{lang.language}</span>
                      <span className="text-slate-400 text-[11px]">({lang.proficiency})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-slate-300 font-medium">Remote Work Status</span>
              </div>
              <span className="text-emerald-400 font-bold text-[11px]">
                Immediate Start
              </span>
            </div>

          </div>

        </div>

        {/* 4 Value Pillars (Ultra Concise) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {valuePropositions.map((item, idx) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/40 hover:-translate-y-1 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-600/10 text-purple-400 flex items-center justify-center mb-2.5">
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-xs sm:text-sm mb-1">{item.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
