import React, { useState } from 'react';
import { personalInfo, education, languages } from '../data/portfolioData';
import { 
  FileText, 
  Printer, 
  Maximize2, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Check, 
  Copy,
  ChevronDown
} from 'lucide-react';

export default function CvSection({ onOpenCvModal }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `AYESHA MAQSOOD - Virtual Assistant | Social Media & E-Commerce Assistant\nEmail: ${personalInfo.email} | Phone: ${personalInfo.phone}\nLocation: ${personalInfo.location}\nEducation: ${education.degree} (${education.institution})\nBio: ${personalInfo.bio}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cv-section" className="py-16 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME / CV</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Curriculum Vitae Overview
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Official summary formatted for hiring managers and recruiters.
          </p>

          {/* Action Toolbar */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/30 transition-all hover:scale-105"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Open Fullscreen CV</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-purple-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy Text Summary</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Compact Document Preview Card */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800/90 shadow-xl overflow-hidden p-6 sm:p-8 text-slate-200">
          
          {/* Header Row */}
          <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white">
                {personalInfo.name.toUpperCase()}
              </h3>
              <p className="text-xs font-bold text-purple-400 tracking-wider uppercase mt-0.5">
                VIRTUAL ASSISTANT | SOCIAL MEDIA & E-COMMERCE ASSISTANT
              </p>
            </div>
            <div className="text-xs text-slate-400 sm:text-right space-y-0.5">
              <div className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Pakistan | Remote Work
              </div>
              <div>{personalInfo.email} • {personalInfo.phone}</div>
            </div>
          </div>

          {/* Core Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
            
            {/* Left Column: Summary & 3 Pillars */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  Professional Summary
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-2">
                  Demonstrated Platforms & Expertise
                </span>
                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <strong className="text-white block">1. AI Comedy Content & Video Creation:</strong>
                    Humor scripting, funny character voices & short-form video production (MazaaqiyaShortsTV Comedy).
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <strong className="text-white block">2. E-Commerce & Product Optimization:</strong>
                    Handmade beaded bracelets & keychains, SEO product listings & order tracking (Siyah Official).
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                    <strong className="text-white block">3. Virtual Assistance & Admin:</strong>
                    Google Workspace, MS Office, clean data entry & autonomous execution.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Education & Languages */}
            <div className="md:col-span-4 space-y-4 md:border-l md:border-slate-800 md:pl-5 text-xs">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  Education
                </span>
                <div className="font-bold text-white text-xs">{education.degree}</div>
                <div className="text-purple-300 text-[11px]">{education.institution}</div>
                <div className="text-slate-400 text-[10px]">Faisalabad, Pakistan</div>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 block mb-1">
                  Languages
                </span>
                <div className="text-slate-300 text-[11px] space-y-0.5">
                  <div className="flex justify-between">
                    <span>Urdu</span>
                    <span className="text-emerald-400 font-semibold">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span>English</span>
                    <span className="text-slate-400">Working Proficiency</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenCvModal}
                  className="w-full py-2 px-3 rounded-xl bg-purple-950/60 hover:bg-purple-900/70 border border-purple-800/60 text-purple-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Full CV Document</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
