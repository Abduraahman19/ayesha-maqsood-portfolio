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
  CheckCircle2,
  FileCheck
} from 'lucide-react';

export default function About({ onOpenCvModal }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Zap: Zap,
    Terminal: Terminal,
    Globe: Globe
  };

  return (
    <section id="about" className="py-20 bg-slate-900/40 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proactive Mindset, Practical Results, Zero Micromanagement
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Bridging technical IT fundamentals with modern AI automation and e-commerce execution to give business owners back their valuable time.
          </p>
        </div>

        {/* Top Split: Professional Summary & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900/80 border border-slate-800/90 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                <FileCheck className="w-4 h-4" />
                <span>Professional Background & Philosophy</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Self-Taught, Tech-Savvy & Ready to Drive Growth
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                As a graduate in <strong className="text-white">BS Information Technology</strong> from GCWUF, I combine a structured technical mindset with real-world digital experience. Rather than relying on theoretical knowledge alone, I put my skills to work by independently founding and running an e-commerce brand (<strong className="text-purple-300">Siyah Official</strong>) and developing an AI-driven short-form media channel (<strong className="text-pink-300">MazaaqiyaShortsTV</strong>).
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether it's managing complex spreadsheets, generating conversion-oriented product descriptions, or producing high-retention video content with AI tools like ChatGPT, I treat every task with deep ownership, strict data privacy, and attention to detail.
              </p>
            </div>

            {/* Quick badges */}
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                100% Remote Disciplined
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Data Organization
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                AI Prompt Engineering
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                Canva Visuals
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700">
                SEO Product Copy
              </span>
            </div>
          </div>

          {/* Right Column: Career Objective & Education/Languages */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Career Objective Box */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-950/40 via-slate-900/80 to-slate-900 border border-purple-500/20 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Target className="w-4 h-4" />
                <span>Career Objective</span>
              </div>
              <blockquote className="text-slate-200 text-sm sm:text-base italic leading-relaxed">
                "{personalInfo.careerObjective}"
              </blockquote>
            </div>

            {/* Education Box */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3">
                <GraduationCap className="w-4 h-4" />
                <span>Formal Education</span>
              </div>
              <h4 className="font-bold text-white text-base">
                {education.degree}
              </h4>
              <p className="text-purple-300 text-sm font-medium mt-0.5">
                {education.institution}
              </p>
              <p className="text-slate-400 text-xs mt-1">
                {education.location}
              </p>
              <p className="text-slate-300 text-xs mt-3 leading-relaxed">
                {education.description}
              </p>
            </div>

            {/* Languages Box */}
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800/90 p-6 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
                <LanguagesIcon className="w-4 h-4" />
                <span>Languages</span>
              </div>
              <div className="space-y-3">
                {languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs">
                    <div>
                      <span className="font-semibold text-white text-sm">{lang.language}</span>
                      <span className="text-slate-400 ml-2">({lang.proficiency})</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-800/40 text-emerald-300 font-semibold text-[11px]">
                      Fluent
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Why Work With Me (Value Propositions) */}
        <div className="mt-16">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white text-center mb-8">
            Why Business Owners Choose to Work With Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valuePropositions.map((item, idx) => {
              const IconComp = iconMap[item.icon] || ShieldCheck;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl bg-slate-900/70 border border-slate-800 p-6 flex flex-col hover:border-purple-500/40 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
