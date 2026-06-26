import React, { useState } from "react";
import { Scissors, Sparkles, RefreshCw, Layers, Calendar, ChevronRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Services() {
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [selectedService, setSelectedService] = useState("styling");
  const [submitted, setSubmitted] = useState(false);

  const premiumServices = [
    {
      id: "tailoring",
      title: "Bespoke Distressing & Custom Alterations",
      subtitle: "Precision engineering for the absolute perfect streetwear drape.",
      icon: Scissors,
      details: "Streetwear is completely defined by silhouette and silhouette is defined by drape. Access our standard tailoring service to taper leg seams, add custom crop hems, or overlay premium distressed sashiko embroidery patches on heavy denim.",
      price: "Alterations start at $25.00"
    },
    {
      id: "styling",
      title: "1-on-1 Virtual Wardrobe Consultation",
      subtitle: "Establish a minimalist capsule wardrobe with senior stylists.",
      icon: Sparkles,
      details: "Meet online with fashion advisors to create a personalized capsule wardrobe. We'll identify exact color coordinates, sizing options, and layering styles (such as denim and oversized cargo integrations) tailored specifically to your daily lifestyle.",
      price: "$45.00 / 45-min Zoom Session"
    },
    {
      id: "recycling",
      title: "Circular Garment Trade-In & Repair",
      subtitle: "Ethics-first loop supporting complete wardrobe regeneration.",
      icon: RefreshCw,
      details: "Mail in or drop off your well-worn UrbanClothing gear. We sanitize, repair, and restitch them to feed secondary markets, or fully recycle the fibers into our upcycled collections. Receive a 15% digital coupon for every garment trade-in.",
      price: "100% Free / Receive 15% Reward"
    },
    {
      id: "branding",
      title: "Bespoke Merchandising & Collective Printing",
      subtitle: "Collaborate on high-grade custom drops and limited designs.",
      icon: Layers,
      details: "For creators, startups, and music bands: design high-weight customized collections utilizing our premium blanks, organic cotton, and certified screen-printing facilities. Enjoy tiered wholesale prices and high-tactile embroidery templates.",
      price: "Inquire for Custom Quote"
    }
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (bookingName.trim() && bookingEmail.trim()) {
      setSubmitted(true);
      setBookingName("");
      setBookingEmail("");
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div id="services-page-container" className="font-sans text-zinc-900 bg-white">
      {/* Dynamic SEO Head updates */}
      <SEO 
        title="Premium Tailoring & Styling Services | UrbanClothing" 
        description="Experience personalized fashion with our bespoke tailoring, virtual styling sessions, and circular clothing trade-ins curated by UrbanClothing." 
      />

      {/* Editorial Page Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-12" id="services-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Urbanclothing Ecosystem</span>
          {/* Unique H1 */}
          <h1 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 uppercase tracking-tight mt-1" id="services-main-heading">
            Premium Personal &amp; Alteration Services
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
            Elevating your modern casual wear with responsive fitting services, customized capsule creation, and ethical textile restoration programs.
          </p>
        </div>
      </section>

      {/* Services Presentation Grid */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="services-grid-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          <div className="space-y-8">
            {premiumServices.map((srv) => {
              const IconComp = srv.icon;
              return (
                <div 
                  key={srv.id} 
                  className="bg-white border border-zinc-150 p-6 sm:p-8 rounded-2xl shadow-xs flex gap-5 group hover:border-zinc-350 transition-all"
                  id={`srv-card-${srv.id}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-center text-zinc-950 shrink-0 mt-1">
                    <IconComp className="h-5.5 w-5.5 stroke-[1.8px]" />
                  </div>
                  <div className="flex-grow space-y-2">
                    <h3 className="font-display text-base font-black uppercase text-zinc-950 tracking-tight leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wide">
                      {srv.subtitle}
                    </p>
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                      {srv.details}
                    </p>
                    <div className="pt-2 flex justify-between items-center text-xs">
                      <span className="font-sans font-bold text-zinc-950">{srv.price}</span>
                      <button 
                        onClick={() => {
                          setSelectedService(srv.id);
                          document.getElementById("booking-card")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 group-hover:text-zinc-950 hover:underline inline-flex items-center gap-0.5"
                      >
                        Book Now <ChevronRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Styling Consultation Booking Card */}
          <div className="lg:sticky lg:top-24 h-fit" id="booking-card">
            <div className="bg-zinc-50 border border-zinc-150 rounded-2xl p-6 sm:p-8 relative">
              <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">Consultations Booking</span>
              <h2 className="font-display text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight mt-1 mb-6">
                Reserve Service Slot
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 rounded-xl p-8 border border-emerald-150 text-center flex flex-col items-center animate-scaleUp">
                  <div className="h-12 w-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-4 border border-emerald-200">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-display text-base font-black text-zinc-950 uppercase tracking-tight">Booking Request Logged!</h4>
                  <p className="text-zinc-600 text-xs mt-2 leading-relaxed">
                    Thank you. We have logged your slot request and sent an interactive confirmation questionnaire.
                  </p>
                  <p className="font-mono text-[9px] text-zinc-400 mt-4 uppercase uppercase">
                    Our current cue count: 2 requests ahead
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-4" id="consultation-booking-form">
                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Choice of Service</label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white text-zinc-900 border border-zinc-200 rounded-lg p-3 text-xs focus:outline-none focus:border-zinc-500 cursor-pointer"
                    >
                      <option value="styling">1-on-1 Virtual Styling Session ($45)</option>
                      <option value="tailoring">Custom Distressing &amp; Alteration Fitting (Inquiry)</option>
                      <option value="recycling">Circular Garment Mail-In (Free trade-in)</option>
                      <option value="branding">Bespoke Boutique Print Consultation (Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="David Miller"
                      value={bookingName}
                      onChange={(e) => setBookingName(e.target.value)}
                      className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-zinc-800 uppercase tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="david@example.com"
                      value={bookingEmail}
                      onChange={(e) => setBookingEmail(e.target.value)}
                      className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-zinc-200 rounded-lg p-3 text-xs focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <p className="text-[10px] text-zinc-400 leading-relaxed font-semibold">
                    💡 All virtual calendar sessions are coordinated across worldwide timezones via automated scheduling invitations.
                  </p>

                  <button
                    type="submit"
                    className="w-full mt-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="h-4.5 w-4.5" />
                    <span>Submit Slot Reservation</span>
                  </button>
                </form>
              )}
            </div>

            {/* Quick Promo box */}
            <div className="mt-6 bg-zinc-950 rounded-2xl p-6 border border-zinc-900 text-center text-white">
              <span className="font-mono text-[8px] font-bold text-zinc-500 tracking-wider uppercase">Collection Promo</span>
              <h4 className="font-display text-sm font-black uppercase tracking-tight mt-1">Want to view the actual products instead?</h4>
              <p className="text-[11px] text-zinc-400 mt-1 pb-4 leading-relaxed max-w-xs mx-auto">
                Discover our streetwear staples made of heavy-weight cotton blends, tapered cargo pants, and minimal tech items.
              </p>
              <Link 
                to="/products"
                className="inline-flex items-center gap-1.5 justify-center py-2 px-5 bg-white text-zinc-950 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-zinc-100 transition-colors"
                id="booking-shop-btn"
              >
                <span>Browse Products catalog</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
