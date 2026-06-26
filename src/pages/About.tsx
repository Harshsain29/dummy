import React from "react";
import { ShieldCheck, Heart, Sparkles, UserCheck } from "lucide-react";
import SEO from "../components/SEO";

export default function About() {
  const coreValues = [
    {
      title: "Quality First",
      text: "Every single garment undergoing strict quality checks. Solid fabric weights and precision sewing built for durability.",
      icon: ShieldCheck
    },
    {
      title: "Sustainability",
      text: "We work actively with ethical suppliers, using low-impact organic cottons and recycled post-consumer polyesters.",
      icon: Heart
    },
    {
      title: "Innovation",
      text: "Our forward-looking design circles stay ahead of global high-street trends, introducing modern, boxy shapes.",
      icon: Sparkles
    },
    {
      title: "Customer Centered",
      text: "Your satisfaction remains our highest priority. Complete delivery guarantees and frictionless refund systems.",
      icon: UserCheck
    }
  ];

  const missions = [
    "Deliver premium catalog products representing modern urban Fashion.",
    "Promote highly transparent, eco-friendly manufacturing practices.",
    "Create highly inclusive patterns tailored for everyone.",
    "Provide stellar, responsive, customer support experiences daily."
  ];

  return (
    <div id="about-page-container" className="font-sans text-zinc-900 bg-white">
      <SEO 
        title="Urban Fashion, Women's Fashion &amp; Tendy Apparel | UrbanClothing" 
        description="Learn about UrbanClothing's history. We construct comfortable urban Fashion, curate stunning Women's Fashion classics, and design first-rate Tendy Apparel wardrobe staples."
      />
      
      {/* Editorial Page Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-12" id="about-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Behind the Seams</span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 uppercase tracking-tight mt-1">Our Story - Premium Urban Fashion, Women's Fashion &amp; Tendy Apparel Essentials</h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
            Uncover our core standards, vision reports, and design tenets that shape our streetwear garments since 2021.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="about-narrative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest uppercase block">Est. NYC, 2021</span>
            <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight">
              Contemporary apparel accessible to everyone.
            </h2>
            
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              **UrbanClothing** was founded in 2021 with a clear, uncompromising goal: to deliver the ultimate **Tendy Apparel** essentials across both Men's and **Women's Fashion** lines while respecting deeply sustainable manufacturing methods.
            </p>
            
            <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
              We strongly believe clothing is much more than mere fabric—it is an amazing expressive vehicle. Each seasonal collection harmonizes modern, high-contrast **urban Fashion** aesthetics with soft daily wear profiles, ensuring premium comfort that endures.
            </p>

            <div className="border-t border-zinc-100 pt-6 flex gap-8 font-display">
              <div>
                <span className="block text-3xl font-black text-zinc-950">2021</span>
                <span className="text-[10px] font-bold font-mono uppercase text-zinc-400">Founded</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-zinc-950">150k+</span>
                <span className="text-[10px] font-bold font-mono uppercase text-zinc-400">Happy Customers</span>
              </div>
              <div>
                <span className="block text-3xl font-black text-zinc-950">100%</span>
                <span className="text-[10px] font-bold font-mono uppercase text-zinc-400">Ethical Sourced</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 border border-zinc-150">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
                alt="Urban Fashion design studio focusing on Tendy Apparel and sustainable Women's Fashion collections."
                className="w-full h-full object-cover saturate-50 hover:saturate-100 transition-all duration-300"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards Grid */}
      <section className="bg-zinc-50 border-y border-zinc-100 py-16" id="vision-mission-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* Vision card */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-150 flex flex-col justify-between shadow-xs">
              <div>
                <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest uppercase">Global Projections</span>
                <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight mt-1.5 mb-4">Our Vision</h3>
                <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed">
                  To grow and flourish into an inspiring, globally recognized fashion label that stands as a gold standard for clean innovative manufacturing, circular garment design, and high post-purchase customer satisfaction.
                </p>
              </div>
              <div className="mt-8 bg-zinc-50 border border-zinc-150 p-4 rounded-xl flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>RECYCLABILITY TARGET:</span>
                <span className="font-black text-zinc-950">85% BY 2028</span>
              </div>
            </div>

            {/* Mission card */}
            <div className="bg-white p-8 rounded-2xl border border-zinc-150 shadow-xs">
              <span className="text-[10px] font-bold text-zinc-400 font-mono tracking-widest uppercase">Action Protocols</span>
              <h3 className="font-display text-xl sm:text-2xl font-black text-zinc-950 uppercase tracking-tight mt-1.5 mb-5">Our Mission</h3>
              
              <ul className="space-y-3.5">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start text-xs sm:text-sm text-zinc-700">
                    <span className="h-5 w-5 rounded-full bg-zinc-950 text-white font-mono text-[10px] font-black flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="leading-relaxed font-medium">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" id="core-values-section">
        <div className="text-center mb-12">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Operational Tenets</span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-zinc-950 uppercase tracking-tight mt-1">Core Values</h2>
          <p className="text-xs text-zinc-500 mt-2">Every garment, delivery log, and support conversation is guided by four principles.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="bg-zinc-50 p-6 rounded-2xl border border-zinc-150 hover:bg-white hover:shadow-xs transition-all duration-200" id={`value-card-${idx}`}>
                <div className="h-10 w-10 bg-white border border-zinc-200/80 rounded-xl flex items-center justify-center text-zinc-950 mb-5">
                  <Icon className="h-5 w-5 stroke-[1.8px]" />
                </div>
                <h3 className="font-display text-sm font-black uppercase text-zinc-950 tracking-tight">{value.title}</h3>
                <p className="text-xs text-zinc-500 mt-2.5 leading-relaxed font-medium">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
