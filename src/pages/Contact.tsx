import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Copy, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [formState, setFormState] = useState({ fullName: "", email: "", subject: "", message: "" });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<typeof formState | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.fullName.trim() && formState.email.trim() && formState.message.trim()) {
      setSubmittedData(formState);
      setFormState({ fullName: "", email: "", subject: "", message: "" });
    }
  };

  const socials = [
    { name: "Instagram", handle: "@UrbanClothingOfficial", url: "#", icon: Instagram },
    { name: "Facebook", handle: "UrbanClothing", url: "#", icon: Facebook },
    { name: "Twitter/X", handle: "@UrbanClothing", url: "#", icon: Twitter },
    { name: "LinkedIn", handle: "UrbanClothing Fashion", url: "#", icon: Linkedin }
  ];

  return (
    <div id="contact-page-container" className="font-sans text-zinc-900 bg-white">
      <SEO 
        title="Fashion Clothing, Online Fashion &amp; Fashion Wear Support | UrbanClothing" 
        description="Need sizing help, order details, or want to discuss tailoring custom fits? Contact UrbanClothing customer experience advisors today for premium Fashion clothing and Fashion Wear answers."
      />
      
      {/* Editorial Page Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-12" id="contact-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase font-sans">Get In Touch</span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 uppercase tracking-tight mt-1">Contact Us - Premium Fashion Clothing, Online Fashion &amp; Fashion Wear Advisors</h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
            Have a question concerning capsule catalog sizing, shipping delivery tracking, or premium <span className="font-bold text-zinc-850">Fashion clothing</span> designs? Dispatch a report regarding our <span className="font-bold text-zinc-850">Online Fashion</span> listings or sustainable <span className="font-bold text-zinc-850">Fashion Wear</span> collections down below, and we will reply within 24 hours.
          </p>
        </div>
      </section>

      {/* Primary Grid Layout */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="contact-grid-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Contact Information (4 cols) */}
          <div className="lg:col-span-5 space-y-8" id="contact-details-col">
            
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-150 space-y-6">
              <h3 className="font-display text-lg font-black uppercase text-zinc-950 tracking-tight border-b border-zinc-200 pb-4">
                UrbanClothing Headquarters
              </h3>
              
              {/* Address details */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-950 shrink-0 mt-0.5">
                  <MapPin className="h-4.5 w-4.5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider">Hingpoint Address</span>
                  <p className="text-zinc-800 text-xs sm:text-sm mt-1 leading-relaxed font-semibold">
                    145 Fashion Avenue,<br />
                    New York, NY 10001,<br />
                    USA
                  </p>
                  <button
                    onClick={() => handleCopy("145 Fashion Avenue, New York, NY 10001, USA", "address")}
                    className="mt-2 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-950 flex items-center gap-1 transition-colors"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{copiedKey === "address" ? "Copied!" : "Copy Address"}</span>
                  </button>
                </div>
              </div>

              {/* Phone item */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-950 shrink-0 mt-0.5">
                  <Phone className="h-4.5 w-4.5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider">Phone Link</span>
                  <p className="text-zinc-800 text-xs sm:text-sm mt-1 leading-relaxed font-bold">
                    +1 (212) 555-7845
                  </p>
                  <button
                    onClick={() => handleCopy("+1 (212) 555-7845", "phone")}
                    className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-950 flex items-center gap-1 transition-colors"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{copiedKey === "phone" ? "Copied!" : "Copy Phone"}</span>
                  </button>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-950 shrink-0 mt-0.5">
                  <Mail className="h-4.5 w-4.5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider">Secure Support Email</span>
                  <a
                    href="mailto:support@urbanclothing.com"
                    className="block text-zinc-950 text-xs sm:text-sm mt-1 leading-relaxed font-bold hover:underline"
                  >
                    support@urbanclothing.com
                  </a>
                  <button
                    onClick={() => handleCopy("support@urbanclothing.com", "email")}
                    className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400 hover:text-zinc-950 flex items-center gap-1 transition-colors"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{copiedKey === "email" ? "Copied!" : "Copy Email"}</span>
                  </button>
                </div>
              </div>

              {/* Support schedule item */}
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-950 shrink-0 mt-0.5">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div className="flex-grow">
                  <span className="block text-[10px] font-bold text-zinc-400 font-mono uppercase tracking-wider">Customer Support</span>
                  <p className="text-zinc-800 text-xs sm:text-sm mt-1 leading-relaxed font-semibold">
                    Monday – Friday<br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels card */}
            <div className="bg-zinc-50 rounded-2xl p-6 sm:p-8 border border-zinc-150">
              <h4 className="font-display text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Social Media Channels</h4>
              <div className="grid grid-cols-2 gap-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      href={social.url}
                      key={social.name}
                      className="bg-white border border-zinc-200 hover:border-zinc-400 p-3 rounded-xl flex items-center gap-2.5 transition-colors group"
                      id={`social-link-${social.name.toLowerCase()}`}
                    >
                      <Icon className="h-4.5 w-4.5 text-zinc-500 group-hover:text-zinc-950 transition-colors" />
                      <div>
                        <span className="block text-[9px] font-bold text-zinc-400 uppercase tracking-tight">{social.name}</span>
                        <span className="block text-[10px] font-semibold text-zinc-800 mt-0.5 truncate max-w-[100px]">{social.handle}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Column 2: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7" id="contact-form-col">
            {submittedData ? (
              <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-150 text-center flex flex-col items-center animate-scaleUp">
                <div className="h-14 w-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight">Message Dispatched Successfully!</h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed max-w-md">
                  Thank you, **{submittedData.fullName}**! Your message concerning **"{submittedData.subject || "General inquiry"}"** has been securely cataloged. A responsive support representative will contact you at **{submittedData.email}** within 24 business hours.
                </p>
                
                <div className="bg-white p-5 rounded-xl border border-zinc-150 w-full mt-8 text-left space-y-2 font-mono text-[11px] text-zinc-500">
                  <p className="text-zinc-950 font-bold border-b border-zinc-100 pb-1.5 uppercase font-sans">Pending Ticket Log Summary:</p>
                  <p><span className="font-bold text-zinc-700">TICKET:</span> #TK-{(Math.floor(Math.random() * 80000) + 10000)}</p>
                  <p><span className="font-bold text-zinc-700">RECIPIENT:</span> support@urbanclothing.com</p>
                  <p><span className="font-bold text-zinc-700">SUBJECT:</span> {submittedData.subject || "No Subject"}</p>
                  <p className="line-clamp-2 italic"><span className="font-bold text-zinc-700 font-normal">MESSAGE:</span> "{submittedData.message}"</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="mt-8 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg transition-colors cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white border border-zinc-150 rounded-2xl p-6 sm:p-8 shadow-xs">
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Contact Form</span>
                <h3 className="font-display text-lg sm:text-xl font-black text-zinc-950 uppercase tracking-tight mt-1.5 mb-6">
                  Compose Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5" id="support-contact-form">
                  {/* Name field */}
                  <div>
                    <label htmlFor="usr-name" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="usr-name"
                      required
                      placeholder="Jane Doe"
                      value={formState.fullName}
                      onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                      className="w-full bg-zinc-50 text-zinc-100 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 font-medium text-zinc-950"
                    />
                  </div>

                  {/* Email address field */}
                  <div>
                    <label htmlFor="usr-email" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      id="usr-email"
                      required
                      placeholder="jane@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-zinc-50 text-zinc-100 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 font-medium text-zinc-950"
                    />
                  </div>

                  {/* Subject field */}
                  <div>
                    <label htmlFor="usr-subject" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Subject</label>
                    <input
                      type="text"
                      id="usr-subject"
                      placeholder="Order lookup, partnership, sizing query..."
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-zinc-50 text-zinc-100 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 font-medium text-zinc-950"
                    />
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="usr-message" className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="usr-message"
                      required
                      rows={5}
                      placeholder="Describe your inquiry in detail..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-zinc-50 text-zinc-100 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs sm:text-sm focus:outline-none focus:border-zinc-500 font-medium text-zinc-950 resize-y"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button
                    type="submit"
                    className="w-full bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    id="submit-contact-btn"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Message</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
