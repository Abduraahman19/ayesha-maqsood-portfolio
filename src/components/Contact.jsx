import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  MessageSquare,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Virtual Assistance & Admin',
    message: ''
  });

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
    
    // Also prepare mailto fallback
    const subject = encodeURIComponent(`Inquiry from ${formData.name}: ${formData.service}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService Interested In: ${formData.service}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/60 text-purple-400 border border-purple-800/40 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Streamline Your Digital Operations?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Send an email, drop a WhatsApp message, or submit your project details below for a quick response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Information Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Direct Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-bold text-white text-sm sm:text-base hover:text-purple-300 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-1.5 px-3 rounded-lg bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 text-xs font-semibold text-center transition-colors"
                >
                  Send Email Now
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* WhatsApp & Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">WhatsApp & Phone</span>
                    <a 
                      href={`https://wa.me/${personalInfo.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="font-bold text-white text-sm sm:text-base hover:text-emerald-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
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
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Timezone & Remote Availability Card */}
            <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Availability & Working Hours</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Primary Timezone: <strong>Pakistan Standard Time (PKT / UTC+5)</strong>. 
                Flexible shift availability to match US (EST/PST), UK (GMT/BST), and European working schedules.
              </p>
              <div className="pt-2 flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Currently Accepting New Roles & Clients</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-7 sm:p-9 shadow-xl backdrop-blur-sm">
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Send a Project Inquiry or Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Tell me about your business goals and what support you are looking for.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-white text-base">Inquiry Prepared!</h4>
                  <p className="text-xs text-emerald-200 mt-1 max-w-sm mx-auto">
                    Opening your default email client with your message details. You can also message directly on WhatsApp for an immediate response.
                  </p>
                  <a
                    href={`https://wa.me/${personalInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-500 transition-colors"
                  >
                    <span>Instant WhatsApp Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service / Support Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs sm:text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    >
                      <option value="Virtual Assistance & Admin">Virtual Assistance & Administrative Support</option>
                      <option value="AI Content & YouTube Shorts">AI Content Creation & Video Scripts</option>
                      <option value="E-Commerce & Listing SEO">E-Commerce Product Listings & SEO</option>
                      <option value="Social Media Management">Social Media Strategy & Canva Graphics</option>
                      <option value="Full-time Remote Support Role">Full-time / Part-time Remote Support Role</option>
                      <option value="Other / Custom Request">Other / Custom Request</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what tasks you need help with, weekly hours, or your timeline..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700 text-slate-100 text-xs sm:text-sm placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:via-indigo-500 hover:to-pink-500 shadow-lg shadow-purple-600/30 transition-all duration-200 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message & Start Collaboration</span>
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
