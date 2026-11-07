import React, { useEffect } from 'react';
import { personalInfo, education, languages } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  GraduationCap,
  Sparkles,
  ShoppingBag,
  Briefcase
} from 'lucide-react';

export default function CvModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Sticky Toolbar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-950/90 border-b border-slate-800 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-sm font-bold text-white tracking-wide">
              Ayesha Maqsood — Interactive Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-purple-600 hover:bg-purple-500 shadow-sm transition-colors"
              title="Print CV or save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper CV Sheet Body (Formatted identically to original CV with modern polish) */}
        <div className="p-6 sm:p-12 bg-white text-slate-900 font-sans print:p-0">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-5 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 font-display">
              AYESHA MAQSOOD
            </h1>
            <p className="text-sm sm:text-base font-bold text-sky-700 tracking-wider uppercase mt-1">
              Virtual Assistant | Social Media & E-Commerce Assistant
            </p>
          </div>

          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Experience & Summary */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Professional Summary */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                  Professional Summary
                </h2>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                  Proactive Virtual Assistant & AI Content Specialist with proven hands-on experience building and scaling digital platforms from the ground up. I leverage advanced AI tools, strategic social media planning, and e-commerce optimization to drive organic growth. Having successfully launched an e-commerce brand (<strong>Siyah Official</strong>) and an AI-driven YouTube channel (<strong>MazaaqiyaShortsTV</strong>), I offer the practical expertise, self-discipline, and digital fluency needed to streamline your daily operations and boost online presence.
                </p>
              </div>

              {/* Practical Expertise & Value Proposition */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2.5">
                  Practical Expertise & Value Proposition
                </h2>
                <p className="text-xs italic text-slate-600 mb-3">
                  Demonstrated capabilities through the independent management of my personal digital platforms:
                </p>

                {/* Point 1 */}
                <div className="mb-4">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    1. AI Content Creation & Social Media Strategy
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
                    <li>
                      <strong>Advanced AI Utilization:</strong> Expert in using ChatGPT and AI video/voice generators to script, design, and animate high-retention short-form videos (as seen on my YouTube channel).
                    </li>
                    <li>
                      <strong>End-to-End Social Management:</strong> Independently develop content calendars, design visuals (Canva), write engaging captions, and execute targeted hashtag strategies to maximize reach.
                    </li>
                  </ul>
                </div>

                {/* Point 2 */}
                <div className="mb-4">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    2. E-Commerce & Product Optimization
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
                    <li>
                      <strong>Listing & SEO Operations:</strong> Craft SEO-friendly product titles and conversion-focused descriptions that highlight key features for buyers.
                    </li>
                    <li>
                      <strong>Market Intelligence:</strong> Conduct ongoing keyword, trend, and competitor research to align digital content and products with active consumer demand.
                    </li>
                  </ul>
                </div>

                {/* Point 3 */}
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    3. Virtual Assistance & Administrative Support
                  </h3>
                  <ul className="text-xs text-slate-700 space-y-1.5 pl-4 list-disc">
                    <li>
                      <strong>Data & Workflow Management:</strong> Highly proficient in utilizing Google Workspace (Docs, Sheets) and MS Office for structured data entry, tracking, and organization.
                    </li>
                    <li>
                      <strong>Autonomous Execution:</strong> Self-taught and highly organized; proven ability to manage digital tasks dependably without requiring micromanagement.
                    </li>
                  </ul>
                </div>

              </div>

            </div>

            {/* Right 4 Cols: Contact, Skills, Education, Languages, Objective */}
            <div className="md:col-span-4 space-y-5 md:border-l md:border-slate-200 md:pl-6 text-xs">
              
              {/* Contact */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Contact
                </h2>
                <div className="space-y-1 text-slate-700">
                  <div>
                    <span className="font-bold block text-slate-900">Location</span>
                    <span>Pakistan | Remote Work</span>
                  </div>
                  <div className="pt-1">
                    <span className="font-bold block text-slate-900">Email</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-sky-700 font-medium hover:underline break-all">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="pt-1">
                    <span className="font-bold block text-slate-900">Phone</span>
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>
              </div>

              {/* Core Skills */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Core Skills
                </h2>
                
                <div className="space-y-2 text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900 block">Admin & E-commerce</span>
                    <span className="text-[11px] leading-tight block">
                      Virtual Assistance, Data Entry, Web Research, Product Listings.
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Social Media</span>
                    <span className="text-[11px] leading-tight block">
                      Instagram, TikTok & YouTube, Content Planning, Captions.
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">AI & Creative Tools</span>
                    <span className="text-[11px] leading-tight block">
                      Advanced AI Prompting, AI Video/Voice Generation, ChatGPT, Canva.
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Software</span>
                    <span className="text-[11px] leading-tight block">
                      Google Docs/Sheets, MS Word, Excel.
                    </span>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Education
                </h2>
                <div>
                  <span className="font-bold text-slate-900 block">
                    {education.degree}
                  </span>
                  <span className="text-slate-700 block">GCWUF</span>
                  <span className="text-slate-500 text-[11px] block">Faisalabad, Pakistan</span>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Languages
                </h2>
                <div className="space-y-1 text-slate-700">
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">Urdu</span>
                    <span>Native</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">English</span>
                    <span>Working Proficiency</span>
                  </div>
                </div>
              </div>

              {/* Career Objective */}
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Career Objective
                </h2>
                <p className="text-slate-700 italic text-[11px] leading-relaxed">
                  "{personalInfo.careerObjective}"
                </p>
              </div>

            </div>

          </div>

          {/* Footer of CV */}
          <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-500">
            <span>Ayesha Maqsood — CV</span>
            <span>Page 1 of 1</span>
          </div>

        </div>

      </div>
    </div>
  );
}
