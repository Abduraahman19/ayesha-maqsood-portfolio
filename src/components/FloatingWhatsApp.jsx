import React from 'react';
import { MessageCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/${personalInfo.whatsapp}?text=${encodeURIComponent("Hi Ayesha, I saw your portfolio and would like to discuss a project / remote role with you.")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 transition-all duration-200"
        aria-label="Chat directly with Ayesha on WhatsApp"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-slate-950" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-white"></span>
        </div>
        <span className="hidden sm:inline font-bold">Chat on WhatsApp</span>
      </a>
    </aside>
  );
}
