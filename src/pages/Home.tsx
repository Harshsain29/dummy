import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, ShieldCheck, Truck, RefreshCw, Lock, Sparkles, AlertCircle } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS, TESTIMONIALS } from "../data";
import SEO from "../components/SEO";

interface HomeProps {
  onProductClick: (product: Product) => void;
}

export default function Home({ onProductClick }: HomeProps) {
  const navigate = useNavigate();
  const [newsEmail, setNewsEmail] = useState("");
  const [successMsg, setSuccessMsg] = useState(false);

  const categories = [
    {
      name: "Men's Collection",
      filter: "Men's Collection",
      image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600",
      count: "Heavyweight utility layers & denim"
    },
    {
      name: "Women's Collection",
      filter: "Women's Collection",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600",
      count: "Seasonal streetwear & essentials"
    },
    {
      name: "Accessories",
      filter: "Accessories",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=600",
      count: "Minimal pack list & daily items"
    },
    {
      name: "New Arrivals",
      filter: "New Arrivals",
      image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=600",
      count: "Fresh hoodies & drop tees"
    }
  ];

  // Best Sellers list corresponds exactly to products 1, 2, 3, and 4
  const bestSellers = PRODUCTS.filter(p => ["prod-1", "prod-2", "prod-3", "prod-4"].includes(p.id));

  const handleCategoryNav = (filterVal: string) => {
    navigate(`/products?category=${encodeURIComponent(filterVal)}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsEmail.trim()) {
      setSuccessMsg(true);
      setNewsEmail("");
      setTimeout(() => setSuccessMsg(false), 5000);
    }
  };

  return (
    <div id="home-page-container" className="font-sans text-zinc-900 bg-white">
      <SEO 
        title="Streetwear Tshirt, Streetwear Jacket &amp; Streetwear India | UrbanClothing" 
        description="Welcome to UrbanClothing: your source for the finest streetwear tshirt collections, rugged military-grade streetwear jacket outerwear, and premium designs in streetwear india."
      />
      
      {/* Editorial Streetwear Hero Section */}
      <section className="relative overflow-hidden bg-zinc-50 border-b border-zinc-100" id="hero-section">
        {/* Decorative Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-1 bg-zinc-950 text-white font-mono text-[10px] font-bold tracking-widest px-3 py-1 rounded-full uppercase mb-6 animate-pulse">
            <Sparkles className="h-3 w-3 text-amber-400" /> New Season Dispatches 2025
          </span>
          
          <h1 className="font-display font-black text-4xl sm:text-6xl tracking-tight text-zinc-950 uppercase max-w-4xl leading-none">
            Welcome to <span className="text-zinc-500 font-normal">Urban</span>Clothing - Premium Streetwear Tshirt, Streetwear Jacket &amp; Streetwear India
          </h1>
          
          <p className="font-display font-medium text-lg sm:text-xl text-zinc-700 mt-6 tracking-wide uppercase">
            High-Grade streetwear tshirt options and premium outerwear designed for active streets.
          </p>
          
          <p className="max-w-xl text-xs sm:text-sm text-zinc-500 mt-4 leading-relaxed font-medium">
            Discover modern streetwear tshirt essentials, heavy combat streetwear jacket layers, and limited catalog releases shipped directly across streetwear india with a deep commitment to sustainable construction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <button
              onClick={() => { navigate("/products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="bg-zinc-950 hover:bg-zinc-800 text-white py-3.5 px-8 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              id="hero-shop-now-btn"
            >
              <span>Shop Streetwear Jacket and Tshirts</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleCategoryNav("New Arrivals")}
              className="bg-white hover:bg-zinc-50 text-zinc-950 py-3.5 px-8 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border border-zinc-200 flex items-center justify-center cursor-pointer"
              id="hero-explore-btn"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-b border-zinc-100" id="featured-categories-section">
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Interactive Navigation</span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight mt-1">Featured Categories</h2>
          <p className="text-xs text-zinc-500 mt-2">Filter and browse through our diverse segmented collections prioritizing streetwear tshirt and jacket releases.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            // Apply customized alt tag keywords based on index/category for SEO validation
            let altTag = cat.name;
            if (idx === 0) altTag = `${cat.name} and streetwear tshirt options`;
            if (idx === 1) altTag = `${cat.name} under streetwear india tags`;
            if (idx === 3) altTag = `${cat.name} streetwear jacket options`;

            return (
              <div
                key={cat.name}
                onClick={() => handleCategoryNav(cat.filter)}
                className="group cursor-pointer overflow-hidden rounded-xl bg-zinc-50 border border-zinc-150 relative aspect-[4/5] shadow-xs hover:shadow-md transition-all duration-300"
                id={`cat-card-${cat.name.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <img
                  src={cat.image}
                  alt={altTag}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter saturate-90 group-hover:saturate-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/30 to-transparent flex flex-col justify-end p-5">
                  <h3 className="font-display text-lg font-black text-white uppercase tracking-tight leading-tight">{cat.name}</h3>
                  <p className="text-[10px] text-zinc-300 font-medium font-mono mt-1 opacity-90">{cat.count}</p>
                  <span className="mt-3 text-[10px] text-white font-bold uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Browse Catalog
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us trust signals */}
      <section className="bg-zinc-50 border-b border-zinc-100" id="why-choose-us-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase font-sans">Brand Guarantees</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight mt-1">Why Choose Us</h2>
            <p className="text-xs text-zinc-500 mt-2">Our modern garments represent ethical design, durability, and secure execution.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-5 rounded-xl border border-zinc-150 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">Premium Materials</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Source garments under strict checks. Heavyweight robust fibers built for long-term wear.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-150 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 mb-4">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">Sustainable</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Work hand-in-hand with verified carbon neutral clothing hubs and recycle loops.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-150 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 mb-4">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">Worldwide Shipping</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Low-carbon parcel delivery dispatched to your doorstep anywhere across the globe.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-150 text-center flex flex-col items-center">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 mb-4">
                <RefreshCw className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">Easy Returns</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                Not fully satisfied? Take benefit of our zero-friction 30-day domestic return window.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-zinc-150 text-center flex flex-col items-center sm:col-span-2 lg:col-span-1">
              <div className="h-10 w-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-950 mb-4">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">Secure Payments</h3>
              <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
                All mock transactions are secured behind SSL pipelines. Real-time safety at checkout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Showcase Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-b border-zinc-100" id="best-sellers-section">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <div className="text-center sm:text-left">
            <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Top Rated Gear</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight mt-1">Best Sellers</h2>
            <p className="text-xs text-zinc-500 mt-1">Our customer-favorite street essentials.</p>
          </div>
          <div>
            <button
              onClick={() => { navigate("/products"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="group-hover:translate-x-1 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-zinc-950 border-b-2 border-zinc-950 pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-all cursor-pointer"
            >
              <span>View All Collections</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onProductClick(prod)}
              className="group cursor-pointer bg-white rounded-xl border border-zinc-150 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
              id={`best-seller-card-${prod.id}`}
            >
              <div className="relative aspect-square overflow-hidden bg-zinc-50 flex items-center justify-center">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Accent - hover indicator */}
                <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4">
                  <span className="bg-white/95 backdrop-blur-sm text-zinc-950 font-bold text-[10px] uppercase tracking-widest py-2 px-4 rounded shadow-md border border-zinc-100">
                    Quick Inspection
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase bg-zinc-50 border border-zinc-100 rounded px-1.5 py-0.5">{prod.sizes?.join("/") || "All Size"}</span>
                <h3 className="font-display font-black text-sm uppercase text-zinc-950 tracking-tight mt-2.5 truncate">{prod.name}</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="font-black text-sm text-zinc-950">${prod.price.toFixed(2)}</span>
                  <div className="flex items-center text-amber-500 text-xs font-bold">
                    ★ {prod.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Review panel */}
      <section className="bg-zinc-50 border-b border-zinc-100" id="testimonials-section">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Customer Voice</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight mt-1">Store Testimonials</h2>
            <p className="text-xs text-zinc-500 mt-2">Real reviews forwarded from verified local shoppers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div key={t.id} className="bg-white p-6 rounded-xl border border-zinc-150 relative shadow-xs flex flex-row gap-4" id={`testimonial-card-${idx}`}>
                <div className="flex flex-col justify-between">
                  <div>
                    {/* Stars bar */}
                    <div className="flex gap-0.5 text-zinc-950 mb-3.5">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-zinc-950 text-zinc-950" />
                      ))}
                    </div>
                    {/* Quote text block */}
                    <p className="text-zinc-600 text-xs sm:text-sm italic leading-relaxed">
                      "{t.quote}"
                    </p>
                  </div>
                  <div className="mt-5 border-t border-zinc-100 pt-3 flex items-center justify-between">
                    <span className="text-zinc-950 text-xs font-bold font-display uppercase tracking-tight">{t.name}</span>
                    <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Newsletter sub section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="newsletter-subscription-section">
        <div className="bg-zinc-950 rounded-2xl relative overflow-hidden p-8 sm:p-12 text-center border border-zinc-900">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(63,63,70,0.15)_0%,transparent_100%) pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="font-mono text-[9px] font-bold tracking-widest text-zinc-500 uppercase">UrbanClothing Dispatch</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-2">
              Stay updated with the latest fashion trends and exclusive offers.
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-3 leading-relaxed">
              Enter your email address down below to subscribe. Get immediate digital alerts for seasonal flash discounts, catalog releases, and streetwear updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-md" id="home-newsletter-form">
              <input
                type="email"
                required
                placeholder="Email Address"
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                className="flex-grow bg-zinc-900 text-zinc-100 placeholder-zinc-500 rounded-lg py-3 px-4 text-xs sm:text-sm border border-zinc-800 focus:outline-none focus:border-zinc-700 min-w-0"
              />
              <button
                type="submit"
                className="bg-white hover:bg-zinc-100 text-zinc-950 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                id="home-newsletter-sub-btn"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            {successMsg && (
              <div className="mt-4 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold uppercase font-mono animate-fadeIn">
                <AlertCircle className="h-4 w-4" />
                <span>Subscription activated! Check support@urbanclothing.com for a welcome coupon.</span>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
