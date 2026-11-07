import React from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Video,
  FileSpreadsheet,
  Search,
  PenTool,
  Clock,
  Layers
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: "ai-content",
      badge: "High-Demand AI Skill",
      badgeColor: "bg-pink-950/80 text-pink-300 border-pink-700/40",
      icon: Sparkles,
      iconColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      title: "AI Content Creation & Short-Form Video Strategy",
      tagline: "High-retention scriptwriting, synthetic voiceovers, and short-form video automation.",
      description: "Harness the power of cutting-edge generative AI to keep your brand consistently active on YouTube Shorts, TikTok, and Instagram Reels without burning hours of manual work.",
      deliverables: [
        "AI-Generated Viral Scripts & Narrative Hooks (ChatGPT)",
        "Synthetic Voiceovers & Audio Synchronization",
        "Dynamic Video Editing, Transitions & Subtitles",
        "Monthly Social Media Content Calendars & Scheduling",
        "Canva Graphic Design (Thumbnails, Carousels, Stories)",
        "Targeted Hashtag & SEO Tag Optimization"
      ],
      tools: ["ChatGPT", "AI Voice Generators", "Canva", "CapCut", "YouTube Studio", "Instagram"]
    },
    {
      id: "ecommerce",
      badge: "Sales & Growth Focused",
      badgeColor: "bg-purple-950/80 text-purple-300 border-purple-700/40",
      icon: ShoppingBag,
      iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      title: "E-Commerce Merchandising & Listing SEO",
      tagline: "Conversion-optimized product copy, keyword placement, and catalog management.",
      description: "Backed by direct experience launching and running e-commerce brand Siyah Official, I ensure your products rank high, attract qualified shoppers, and turn casual visitors into buyers.",
      deliverables: [
        "High-Converting SEO Product Titles & Bullet Points",
        "Compelling, Benefit-Driven Product Descriptions",
        "Competitor Pricing, Keyword & Trend Intelligence",
        "Product Catalog Uploads & Category Tagging",
        "Customer Inquiries & Order Status Follow-Ups",
        "Inventory Monitoring & Stock Status Spreadsheets"
      ],
      tools: ["Shopify/Store Portals", "Google Sheets", "Keyword Research", "Canva", "Market Analytics"]
    },
    {
      id: "va-admin",
      badge: "Reliable Remote Support",
      badgeColor: "bg-indigo-950/80 text-indigo-300 border-indigo-700/40",
      icon: Briefcase,
      iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      title: "Virtual Assistance & Operational Administration",
      tagline: "Disciplined data entry, deep web research, and structured workflow organization.",
      description: "Free yourself from repetitive digital chores. I take full accountability for your daily admin tasks, spreadsheets, and documentation with 100% precision and zero babysitting.",
      deliverables: [
        "Accurate Data Entry, Deduplication & Database Cleanup",
        "Custom Google Sheets & MS Excel Trackers with Formulas",
        "Comprehensive Web Research & Competitor Dossiers",
        "Google Drive Folder Hygiene & Document Formatting",
        "Email & Calendar Management Support",
        "Standard Operating Procedures (SOP) Documentation"
      ],
      tools: ["Google Workspace (Docs/Sheets)", "MS Office (Word/Excel)", "Google Drive", "Trello", "Slack"]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <span>CORE SERVICES & VALUE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Digital Services Tailored for Busy Businesses
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Every service is executed with self-discipline, modern AI efficiency, and rigorous attention to detail.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.id}
                className="rounded-3xl bg-slate-900/70 border border-slate-800/90 p-7 sm:p-8 flex flex-col justify-between hover:border-purple-500/40 hover:bg-slate-900/90 transition-all duration-300 group hover:-translate-y-1 shadow-xl shadow-black/20"
              >
                <div>
                  {/* Top Bar with Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${service.iconColor} border flex items-center justify-center transition-transform group-hover:scale-110 duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-semibold border ${service.badgeColor}`}>
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-purple-400/90 mb-4">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Deliverables:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tools & Action */}
                <div className="pt-6 border-t border-slate-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tools.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[10px] font-medium border border-slate-700/60">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-purple-600 hover:text-white border border-slate-700 hover:border-purple-500 transition-all duration-200 group/btn"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-purple-950/50 via-slate-900 to-indigo-950/50 border border-purple-500/20 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 hidden sm:block">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base sm:text-lg">Need a customized ongoing role or project?</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Whether you need 10 hours a week or a dedicated full-time remote partner, I'm ready to integrate seamlessly.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-purple-600/25"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
