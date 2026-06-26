import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowRight, Instagram, Facebook, Twitter, Linkedin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const [emailValue, setEmailValue] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubscribed(true);
      setEmailValue("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const policies: Record<string, { title: string; content: string }> = {
    privacy: {
      title: "Privacy Policy",
      content: "At UrbanClothing, accessible from support@urbanclothing.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by UrbanClothing and how we use it. We collect personal contact information only during checkout or newsletter subscriptions, and we pledge never to distribute or sell your details to third-party ad networks."
    },
    terms: {
      title: "Terms & Conditions",
      content: "By accessing or using the UrbanClothing preview app, you agree to bound by these terms. All designs, product specifications, descriptions, and catalog photographs are property of UrbanClothing. Any reproduction or distribution without explicit designer consent is prohibited. Mock purchases fabricated through this interface carry no transactional obligations."
    },
    shipping: {
      title: "Shipping Policy",
      content: "UrbanClothing offers Worldwide Shipping. All catalog orders undergo ethical fulfillment. Shipments within North America arrive in 3-5 business days. International dispatches can take between 7-14 business days. Free shipping is automatically applied to orders over $100. Ground tracking information is provided on all dispatches."
    },
    return: {
      title: "Return Policy",
      content: "We want you to be completely satisfied with your modern apparel. UrbanClothing provides a hassle-free 30-day Easy Return Policy. Items must be returned in their original condition, unworn, unwashed, with all tracking labels and hangtags attached. Return shipping fees are waived on standard domestic returns."
    }
  };

  return (
    <footer className="bg-zinc-950 text-zinc-300 font-sans border-t border-zinc-900" id="app-footer">
      
      {/* Top Banner section */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-zinc-800 pb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-black tracking-widest text-white uppercase flex items-center space-x-2">
              <span className="bg-white text-zinc-950 px-2 py-0.5 text-sm font-black">U</span>
              <span>UrbanClothing</span>
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Fashion for every street, every season, and every style. Designed for modern lifestyles with deep focus on premium durability and minimal impact.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-4.5 w-4.5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 hover:bg-zinc-800 rounded-full hover:text-white transition-colors" aria-label="Linkedin">
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Home</Link>
              </li>
              <li>
                <Link to="/products" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Products Collection</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Bespoke Services</Link>
              </li>
              <li>
                <Link to="/blog" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Latest Blog Insights</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Our Story</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-white transition-colors text-zinc-400">Get In Touch</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Panel */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold tracking-widest uppercase">Newsletter</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Stay updated with the latest fashion trends and exclusive catalog collections.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2" id="footer-newsletter-form">
              <div className="relative flex-grow">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="w-full bg-zinc-900 text-zinc-100 placeholder-zinc-500 rounded-md py-2.5 pl-3 pr-10 text-sm border border-zinc-800 focus:outline-none focus:border-zinc-700"
                />
                <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-zinc-500">
                  <Mail className="h-4 w-4" />
                </span>
              </div>
              <button
                type="submit"
                className="bg-white hover:bg-zinc-100 text-zinc-950 font-medium text-sm py-2.5 px-4 rounded-md transition-all duration-200 flex items-center justify-center space-x-1"
                id="footer-newsletter-sub"
              >
                <span>Subscribe</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium animate-fadeIn">
                <ShieldCheck className="h-3.5 w-3.5" /> Core subscription activated! Thank you.
              </p>
            )}
          </div>
        </div>

        {/* Bottom copyright part */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 gap-4">
          <div>
            <p>© 2025 UrbanClothing. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <button onClick={() => setSelectedPolicy("privacy")} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>|</span>
            <button onClick={() => setSelectedPolicy("terms")} className="hover:text-white transition-colors">Terms & Conditions</button>
            <span>|</span>
            <button onClick={() => setSelectedPolicy("shipping")} className="hover:text-white transition-colors">Shipping Policy</button>
            <span>|</span>
            <button onClick={() => setSelectedPolicy("return")} className="hover:text-white transition-colors">Return Policy</button>
          </div>
        </div>
      </div>

      {/* Modern Overlay Modal for Policy Information */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white text-zinc-900 rounded-xl p-6 max-w-lg w-full shadow-2xl relative border border-zinc-100 animate-slideUp">
            <h3 className="text-xl font-display font-black tracking-tight text-zinc-950 mb-3 uppercase">
              {policies[selectedPolicy].title}
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed mb-6">
              {policies[selectedPolicy].content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedPolicy(null)}
                className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Accept & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
