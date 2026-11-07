import React, { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  Clock, 
  Send, 
  Copy, 
  Check, 
  MessageSquare,
  ArrowRight,
  ChevronDown,
  Briefcase,
  Bot,
  ShoppingBag,
  Share2,
  Sparkles
} from 'lucide-react';

const serviceOptions = [
  {
    id: "Virtual Assistance & Admin",
    title: "Virtual Assistance & Admin",
    desc: "Google Workspace, spreadsheets, data entry & autonomous task support",
    badge: "Admin",
    icon: Briefcase,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30"
  },
  {
    id: "AI Comedy & Short-Form Video",
    title: "AI Comedy & Short-Form Video",
    desc: "Witty scripts, funny AI character voices & YouTube Shorts (MazaaqiyaShortsTV)",
    badge: "AI Media",
    icon: Bot,
    color: "text-pink-400 bg-pink-500/10 border-pink-500/30"
  },
  {
    id: "Handmade Accessories & E-Commerce",
    title: "Handmade Accessories & E-Commerce",
    desc: "Beaded bracelets, custom keychains, SEO product listings & order management",
    badge: "E-Commerce",
    icon: ShoppingBag,
    color: "text-purple-400 bg-purple-500/10 border-purple-500/30"
  },
  {
    id: "Social Media Strategy & Canva",
    title: "Social Media Strategy & Canva",
    desc: "Visual carousels, monthly content calendar, captions & hashtag research",
    badge: "Social",
    icon: Share2,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30"
  },
  {
    id: "Dedicated Remote Role (Part/Full-Time)",
    title: "Dedicated Remote Role (Part / Full-Time)",
    desc: "20h or 40h/week dedicated integration with flexible US/UK timezone overlap",
    badge: "Long-term",
    icon: Clock,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30"
  }
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: serviceOptions[0].id,
    message: ''
  });

  // Close custom dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.service}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1000);
  };

  const selectedServiceObj = serviceOptions.find(s => s.id === formData.service) || serviceOptions[0];
  const SelectedIcon = selectedServiceObj.icon;

  return (
    <section id="contact" className="py-16 bg-slate-900/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CONTACT</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Let's Discuss Your Project
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-slate-300">
            Available for remote roles. Reach out via email, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">Email Address</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="font-bold text-white text-sm hover:text-purple-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2.5 border-t border-slate-800">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 text-xs font-semibold text-center transition-colors"
                >
                  Send Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">WhatsApp & Phone</span>
                  <a 
                    href={`https://wa.me/${personalInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="font-bold text-white text-sm hover:text-emerald-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2.5 border-t border-slate-800">
                <a
                  href={`https://wa.me/${personalInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold text-center transition-colors"
                >
                  Chat on WhatsApp
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Timezone */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold">
                <Clock className="w-3.5 h-3.5 text-purple-400" />
                <span>Working Hours & Overlap</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Pakistan Time (PKT / UTC+5). Flexible to overlap with US (EST/PST) and UK business hours.
              </p>
            </div>

          </div>

          {/* Right: Quick Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-lg">
              <h3 className="font-display text-lg font-bold text-white mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-5">
                Fill in your details for a fast response.
              </p>

              {formSubmitted ? (
                <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Message Prepared!</h4>
                  <p className="text-xs text-emerald-200 mt-1">
                    Opening your email client. You can also chat on WhatsApp for faster response.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* CUSTOM SERVICE DROPDOWN */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Service / Role Needed
                    </label>

                    {/* Custom Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border text-left flex items-center justify-between transition-all ${
                        dropdownOpen 
                          ? 'border-purple-500 ring-2 ring-purple-500/20 shadow-lg shadow-purple-950/40' 
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`w-7 h-7 rounded-lg ${selectedServiceObj.color} border flex items-center justify-center flex-shrink-0`}>
                          <SelectedIcon className="w-3.5 h-3.5" />
                        </div>
                        <div className="truncate">
                          <span className="text-xs font-bold text-white block truncate">
                            {selectedServiceObj.title}
                          </span>
                          <span className="text-[10px] text-slate-400 block truncate">
                            {selectedServiceObj.desc}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0 ml-2">
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-purple-950/80 border border-purple-800 text-purple-300 hidden sm:inline">
                          {selectedServiceObj.badge}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-purple-400' : ''}`} />
                      </div>
                    </button>

                    {/* Custom Floating Menu */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl bg-slate-950/95 border border-purple-500/30 backdrop-blur-xl shadow-2xl p-1.5 space-y-1 animate-fade-in max-h-72 overflow-y-auto">
                        {serviceOptions.map((opt) => {
                          const IconComp = opt.icon;
                          const isSelected = opt.id === formData.service;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, service: opt.id });
                                setDropdownOpen(false);
                              }}
                              className={`w-full p-2.5 rounded-xl text-left flex items-center justify-between gap-3 transition-colors ${
                                isSelected
                                  ? 'bg-purple-900/40 border border-purple-600/40'
                                  : 'hover:bg-slate-900/90 border border-transparent'
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className={`w-7 h-7 rounded-lg ${opt.color} border flex items-center justify-center flex-shrink-0`}>
                                  <IconComp className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                                    <span className="truncate">{opt.title}</span>
                                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-normal">
                                      {opt.badge}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-400 truncate">
                                    {opt.desc}
                                  </div>
                                </div>
                              </div>

                              {isSelected && (
                                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what tasks or hours you need help with..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs focus:outline-none focus:border-purple-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 shadow-md shadow-purple-600/30 transition-all text-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
