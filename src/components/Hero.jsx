import React, { useState } from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Bot,
  ShoppingBag,
  TrendingUp,
  Award
} from 'lucide-react';

export default function Hero({ onOpenCvModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-purple-600/20 via-indigo-600/15 to-pink-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Primary Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-xs sm:text-sm font-medium text-slate-300 shadow-sm mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">Open for Remote Work Worldwide</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI-Powered
              </span>
            </div>

            {/* Name & Title */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">{personalInfo.name}</span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-200 flex flex-wrap items-center gap-2">
              <span>Virtual Assistant</span>
              <span className="text-purple-400">•</span>
              <span>Social Media & E-Commerce</span>
              <span className="text-purple-400">•</span>
              <span className="text-pink-400 font-bold">AI Content Specialist</span>
            </p>

            {/* Value Proposition Paragraph */}
            <p className="mt-5 text-sm sm:text-base text-slate-300/90 leading-relaxed max-w-2xl">
              Proactive Virtual Assistant with proven hands-on experience building and scaling digital platforms from scratch. 
              Having launched e-commerce brand <strong className="text-white font-semibold underline decoration-purple-500/60 underline-offset-4">Siyah Official</strong> and AI-driven YouTube channel <strong className="text-white font-semibold underline decoration-pink-500/60 underline-offset-4">MazaaqiyaShortsTV</strong>, I offer the self-discipline, tech fluency, and practical AI expertise needed to streamline your operations and accelerate growth.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:via-indigo-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/40 hover:-translate-y-0.5 transition-all duration-200 text-sm"
              >
                <span>Hire Me / Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/60 hover:-translate-y-0.5 transition-all duration-200 text-sm shadow-md"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View CV & Qualifications</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs sm:text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 hover:border-slate-700 transition-colors"
                title="Copy Email Address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Contact Badges */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span>•</span>
              <a 
                href={`https://wa.me/${personalInfo.whatsapp}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalInfo.location}</span>
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Profile & Key Credentials Card */}
          <div className="lg:col-span-5 w-full">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-slate-800/50 to-slate-900/80 shadow-2xl shadow-purple-950/40">
              <div className="rounded-[22px] bg-slate-950/90 p-6 sm:p-7 backdrop-blur-xl border border-slate-800/80 flex flex-col gap-6">
                
                {/* Header of card */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-md shadow-purple-500/30 flex-shrink-0">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-display font-extrabold text-white text-xl">
                        AM
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-lg">Ayesha Maqsood</h3>
                      <p className="text-xs text-purple-400 font-medium">BS Information Technology (GCWUF)</p>
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-500" /> Faisalabad, PK • Remote Ready
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Active
                  </span>
                </div>

                {/* Practical Capabilities Chips */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Demonstrated Capabilities:
                  </span>
                  
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/70 flex items-start gap-3 hover:border-purple-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        AI Content & Video Creation
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-950/70 text-pink-300 font-normal border border-pink-800/40">MazaaqiyaShortsTV</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        High-retention video scripting, voice generation, and automated short-form production using ChatGPT.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/70 flex items-start gap-3 hover:border-purple-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 mt-0.5">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                        E-Commerce & Listing SEO
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-950/70 text-purple-300 font-normal border border-purple-800/40">Siyah Official</span>
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Conversion-focused copy, SEO titles, product descriptions, market research & customer order operations.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/70 flex items-start gap-3 hover:border-purple-500/30 transition-colors">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">
                        Executive VA & Data Management
                      </h4>
                      <p className="text-xs text-slate-300 mt-0.5">
                        Google Workspace, MS Office, accurate data entry, competitor research, and zero micromanagement execution.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Action */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Looking for remote support?</span>
                  <a 
                    href="#contact" 
                    className="text-purple-400 font-semibold hover:text-purple-300 flex items-center gap-1"
                  >
                    Send a Message <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-sm flex flex-col justify-center transition-all duration-200 hover:border-purple-500/30 hover:bg-slate-900/80"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight flex items-center gap-1.5">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {item.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {item.label}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
