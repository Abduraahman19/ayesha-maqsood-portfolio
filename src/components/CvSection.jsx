import React, { useState } from 'react';
import { personalInfo, education, languages } from '../data/portfolioData';
import { 
  FileText, 
  Printer, 
  Download, 
  Maximize2, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Languages as LanguagesIcon, 
  CheckCircle2, 
  Sparkles,
  Briefcase,
  Copy,
  Check
} from 'lucide-react';

export default function CvSection({ onOpenCvModal }) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `AYESHA MAQSOOD - VIRTUAL ASSISTANT | SOCIAL MEDIA & E-COMMERCE ASSISTANT
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
Location: ${personalInfo.location} (Remote Work)
Education: ${education.degree} - ${education.institution}
Summary: ${personalInfo.bio}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cv-section" className="py-20 bg-slate-900/40 border-t border-slate-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official CV & Resume Overview
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            A verified, structured document formatted for hiring managers and remote recruiters.
          </p>

          {/* Action Toolbar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-md shadow-purple-600/30 transition-all duration-200"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Full-Screen Interactive CV</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 transition-all duration-200"
            >
              <Printer className="w-4 h-4 text-purple-400" />
              <span>Print / Save as PDF</span>
            </button>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-900/70 hover:bg-slate-800 border border-slate-800 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Quick Summary</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Paper Document Representation */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800/90 shadow-2xl overflow-hidden p-6 sm:p-10 text-slate-200">
          
          {/* Header of CV */}
          <div className="border-b border-slate-800 pb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-6">
            <div>
              <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {personalInfo.name.toUpperCase()}
              </h1>
              <p className="text-sm sm:text-base font-bold text-purple-400 tracking-wide mt-1">
                VIRTUAL ASSISTANT | SOCIAL MEDIA & E-COMMERCE ASSISTANT
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Specialized in AI Content & Remote Digital Operations
              </p>
            </div>

            {/* Contact details pill */}
            <div className="flex flex-col gap-1.5 text-xs text-slate-300 sm:text-right">
              <span className="flex items-center sm:justify-end gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>Pakistan | Remote Work Worldwide</span>
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center sm:justify-end gap-1.5 text-purple-400 hover:underline">
                <Mail className="w-3.5 h-3.5" />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center sm:justify-end gap-1.5 text-emerald-400 hover:underline">
                <Phone className="w-3.5 h-3.5" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Two Columns Layout (mirroring CV structure) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
            
            {/* Left Main Column (Professional Summary + Practical Expertise) */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Professional Summary */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-3">
                  Professional Summary
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Proactive Virtual Assistant & AI Content Specialist with proven hands-on experience building and scaling digital platforms from the ground up. I leverage advanced AI tools, strategic social media planning, and e-commerce optimization to drive organic growth. Having successfully launched an e-commerce brand (<strong>Siyah Official</strong>) and an AI-driven YouTube channel (<strong>MazaaqiyaShortsTV</strong>), I offer the practical expertise, self-discipline, and digital fluency needed to streamline your daily operations and boost online presence.
                </p>
              </div>

              {/* Practical Expertise & Value Proposition */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-4">
                  Practical Expertise & Value Proposition
                </h3>
                <p className="text-xs italic text-slate-400 mb-4">
                  Demonstrated capabilities through the independent management of personal digital platforms:
                </p>

                {/* 1. AI Content */}
                <div className="mb-5">
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-pink-500/20 text-pink-300 flex items-center justify-center text-[10px]">1</span>
                    <span>AI Content Creation & Social Media Strategy</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc marker:text-purple-400">
                    <li>
                      <strong className="text-slate-100">Advanced AI Utilization:</strong> Expert in using ChatGPT and AI video/voice generators to script, design, and animate high-retention short-form videos (as seen on my YouTube channel).
                    </li>
                    <li>
                      <strong className="text-slate-100">End-to-End Social Management:</strong> Independently develop content calendars, design visuals (Canva), write engaging captions, and execute targeted hashtag strategies to maximize reach.
                    </li>
                  </ul>
                </div>

                {/* 2. E-Commerce */}
                <div className="mb-5">
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-300 flex items-center justify-center text-[10px]">2</span>
                    <span>E-Commerce & Product Optimization</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc marker:text-purple-400">
                    <li>
                      <strong className="text-slate-100">Listing & SEO Operations:</strong> Craft SEO-friendly product titles and conversion-focused descriptions that highlight key features for buyers.
                    </li>
                    <li>
                      <strong className="text-slate-100">Market Intelligence:</strong> Conduct ongoing keyword, trend, and competitor research to align digital content and products with active consumer demand.
                    </li>
                  </ul>
                </div>

                {/* 3. VA & Admin */}
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2 flex items-center gap-1.5">
                    <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-[10px]">3</span>
                    <span>Virtual Assistance & Administrative Support</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300 pl-4 list-disc marker:text-purple-400">
                    <li>
                      <strong className="text-slate-100">Data & Workflow Management:</strong> Highly proficient in utilizing Google Workspace (Docs, Sheets) and MS Office for structured data entry, tracking, and organization.
                    </li>
                    <li>
                      <strong className="text-slate-100">Autonomous Execution:</strong> Self-taught and highly organized; proven ability to manage digital tasks dependably without requiring micromanagement.
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right Sidebar Column (Core Skills, Education, Languages, Objective) */}
            <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-slate-800 lg:pl-6">
              
              {/* Core Skills */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-3">
                  Core Skills
                </h3>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <h5 className="font-bold text-slate-200">Admin & E-commerce</h5>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Virtual Assistance, Data Entry, Web Research, Product Listings.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Social Media</h5>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Instagram, TikTok & YouTube, Content Planning, Captions.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">AI & Creative Tools</h5>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Advanced AI Prompting, AI Video/Voice Generation, ChatGPT, Canva.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-200">Software</h5>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      Google Docs/Sheets, MS Word, Excel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-3">
                  Education
                </h3>
                <h5 className="font-bold text-white text-xs">
                  {education.degree}
                </h5>
                <p className="text-purple-300 text-[11px] mt-0.5">
                  GCWUF
                </p>
                <p className="text-slate-400 text-[11px]">
                  Faisalabad, Pakistan
                </p>
              </div>

              {/* Languages */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-3">
                  Languages
                </h3>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-200">Urdu</span>
                    <span className="text-slate-400 text-[11px]">Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-200">English</span>
                    <span className="text-slate-400 text-[11px]">Working Proficiency</span>
                  </div>
                </div>
              </div>

              {/* Career Objective */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-purple-400 border-b border-slate-800 pb-2 mb-3">
                  Career Objective
                </h3>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

            </div>

          </div>

          {/* Bottom Footer Note */}
          <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
            <span>Ayesha Maqsood — Official CV Portfolio Edition</span>
            <span>Remote Work Ready</span>
          </div>

        </div>

      </div>
    </section>
  );
}
