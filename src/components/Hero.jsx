import React, { useState, useEffect } from 'react';
import { personalInfo, rotatingRoles, stats } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  Phone, 
  Sparkles, 
  Copy, 
  Check, 
  Bot,
  ShoppingBag,
  TrendingUp,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function Hero({ onOpenCvModal }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  // Rotating roles animation
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setFadeAnim(true);
      }, 250);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background glowing ambient light orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-purple-600/25 via-pink-600/15 to-indigo-500/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-indigo-600/15 blur-[90px] rounded-full pointer-events-none -z-10 animate-float-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Rotating Role & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill with pulse dot */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-purple-500/30 text-xs font-semibold text-slate-200 shadow-sm mb-5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Remote Work</span>
              <span className="text-slate-600">•</span>
              <span className="text-purple-400 flex items-center gap-1 font-bold">
                <Zap className="w-3 h-3 text-pink-400" /> AI-Fast
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-300">{personalInfo.name}</span>
            </h1>

            {/* Animated Rotating Role Bar */}
            <div className="h-10 sm:h-12 flex items-center mt-2">
              <span className="text-base sm:text-xl font-bold text-slate-400 mr-2">I am an</span>
              <span 
                className={`text-lg sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 transition-all duration-300 transform ${
                  fadeAnim ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {rotatingRoles[currentRoleIndex]}
              </span>
            </div>

            {/* Concise, Skimmable Bio (NOT verbose) */}
            <p className="mt-2 text-sm sm:text-base text-slate-300/95 leading-relaxed max-w-xl">
              I help founders and store owners scale by handling <strong className="text-white">e-commerce listings</strong>, automating <strong className="text-white">AI short-form content</strong>, and managing <strong className="text-white">daily operations</strong>—with zero micromanagement.
            </p>

            {/* Quick Proof Badges */}
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium">
              <span className="px-2.5 py-1 rounded-lg bg-purple-950/70 border border-purple-800/60 text-purple-300 flex items-center gap-1">
                <Bot className="w-3.5 h-3.5 text-pink-400" /> MazaaqiyaShortsTV (AI Comedy)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-indigo-950/70 border border-indigo-800/60 text-indigo-300 flex items-center gap-1">
                <ShoppingBag className="w-3.5 h-3.5 text-purple-400" /> Siyah Official (Beaded Accessories)
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> BS IT (GCWUF)
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 hover:-translate-y-0.5 transition-all text-xs sm:text-sm"
              >
                <span>Hire Me / Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/60 hover:-translate-y-0.5 transition-all text-xs sm:text-sm shadow-sm"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View CV (Printable)</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Micro-pills */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <a href={`mailto:${personalInfo.email}`} className="hover:text-purple-300 transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-purple-400" /> {personalInfo.email}
              </a>
              <span>•</span>
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-emerald-400" /> {personalInfo.phone}
              </a>
            </div>

          </div>

          {/* Right Column: Visual Interactive Card with Floating Badges */}
          <div className="lg:col-span-5 w-full relative">
            
            {/* Animated Floating Badges */}
            <div className="hidden sm:flex absolute -top-4 -left-4 z-10 px-3 py-1.5 rounded-full bg-slate-900/95 border border-purple-500/40 text-purple-300 text-xs font-bold shadow-xl animate-float-slow items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>ChatGPT & AI Automation</span>
            </div>

            <div className="hidden sm:flex absolute -bottom-4 -right-2 z-10 px-3 py-1.5 rounded-full bg-slate-900/95 border border-emerald-500/40 text-emerald-300 text-xs font-bold shadow-xl animate-float-reverse items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Autonomous</span>
            </div>

            {/* Profile Card */}
            <div className="rounded-3xl p-1 bg-gradient-to-b from-purple-500/30 via-slate-800/40 to-slate-900/80 shadow-2xl">
              <div className="rounded-[22px] bg-slate-950/90 p-5 sm:p-6 backdrop-blur-xl border border-slate-800/80 flex flex-col gap-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center font-display font-extrabold text-white text-lg">
                        AM
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-base">Ayesha Maqsood</h3>
                      <p className="text-xs text-purple-400 font-medium">Virtual Assistant & AI Specialist</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Ready
                  </span>
                </div>

                {/* 3 Quick Capability Rows */}
                <div className="space-y-2.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">AI Comedy & Video Creation</div>
                      <div className="text-[11px] text-slate-400">Comedy scripts, funny voices & YouTube Shorts</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                      <ShoppingBag className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Handmade Accessories & E-Commerce</div>
                      <div className="text-[11px] text-slate-400">Beaded bracelets, keychains, SEO listings</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-xs">Data & Administrative Operations</div>
                      <div className="text-[11px] text-slate-400">Google Sheets formulas, web research & SOPs</div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Looking for remote help?</span>
                  <a href="#contact" className="text-purple-400 font-bold hover:text-purple-300 flex items-center gap-1">
                    Message Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* 4 Quick Stat Counters */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="p-3.5 sm:p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/30 hover:bg-slate-900/70 transition-all text-center sm:text-left"
            >
              <div className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {item.value}
              </div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">
                {item.label}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
