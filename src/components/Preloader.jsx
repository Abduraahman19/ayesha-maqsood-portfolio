import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Fast, smooth simulated loading bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 500); // Wait for fade-out animation
          }, 200);
          return 100;
        }
        // Incremental jump
        const increment = Math.floor(Math.random() * 25) + 15;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Center Branding Monogram */}
      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-indigo-600 p-0.5 shadow-2xl shadow-purple-600/40 animate-bounce duration-1000">
          <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
            <span className="font-display font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              AM
            </span>
          </div>
        </div>

        <h2 className="mt-4 font-display font-bold text-white text-lg tracking-tight">
          Ayesha Maqsood
        </h2>
        <p className="text-xs text-purple-400/90 font-medium flex items-center gap-1.5 mt-0.5">
          <Sparkles className="w-3 h-3 text-pink-400 animate-spin" />
          <span>Virtual Assistant & AI Specialist</span>
        </p>

        {/* Progress Bar Container */}
        <div className="w-48 sm:w-60 h-1.5 bg-slate-900 rounded-full mt-6 overflow-hidden border border-slate-800">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 transition-all duration-200 ease-out rounded-full shadow-sm shadow-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Percentage Indicator */}
        <div className="mt-2 text-[10px] font-mono text-slate-500">
          Loading Portfolio • {progress}%
        </div>
      </div>
    </div>
  );
}
