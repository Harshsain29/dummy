import React, { useState } from "react";
import { Clock, User, ArrowLeft, ArrowRight, Share2, Heart, CheckCircle } from "lucide-react";
import { BlogPost } from "../types";
import { BLOG_POSTS } from "../data";
import SEO from "../components/SEO";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [copiedLink, setCopiedLink] = useState(false);
  const [bookmarkedId, setBookmarkedId] = useState<Record<string, boolean>>({});

  const tabs = ["All", "Streetwear", "Style Guide", "Sustainability"];

  const filteredPosts = activeTab === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeTab);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedId(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="blog-page-container" className="font-sans text-zinc-900 bg-white">
      {selectedPost ? (
        <SEO title={`${selectedPost.title} | UrbanClothing`} description={`${selectedPost.excerpt}. Read premium casual wear guidelines and urban wear insights.`} />
      ) : (
        <SEO 
          title="Casual Wear &amp; Urban Wear Fashion Insights | UrbanClothing" 
          description="Browse our curated columns concerning modular casual wear, subcultural urban wear trends, capsule construction, and eco-sustainable designs." 
        />
      )}
      
      {/* Blog Article Reader Modal or Overlay */}
      {selectedPost ? (
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 animate-fadeIn" id="blog-article-reader">
          <button
            onClick={() => { setSelectedPost(null); window.scrollTo({ top: 300, behavior: "smooth" }); }}
            className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-widest text-zinc-950 hover:text-zinc-500 mb-8 border border-zinc-200 rounded-lg px-4 py-2 hover:bg-zinc-50 transition-all cursor-pointer"
            id="back-to-insights-btn"
          >
            <ArrowLeft className="h-4.5 w-4.5" />
            <span>Back to Insights Grid</span>
          </button>

          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-80 sm:h-[400px] object-cover rounded-2xl mb-8 shadow-sm"
            referrerPolicy="no-referrer"
          />

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-zinc-400 font-medium font-mono mb-4">
            <span className="bg-zinc-950 text-white font-bold px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">
              {selectedPost.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
            </span>
            <span className="flex items-center gap-1">
              <User className="h-3.5 w-3.5" /> {selectedPost.author}
            </span>
            <span>Published: {selectedPost.publishedDate}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl text-zinc-950 uppercase tracking-tight mb-6 leading-tight">
            {selectedPost.title}
          </h1>

          <p className="text-sm font-semibold select-all text-zinc-800 leading-relaxed border-l-2 border-zinc-900 pl-4 mb-8 bg-zinc-50 py-3 rounded-r-lg">
            {selectedPost.excerpt}
          </p>

          <div className="prose prose-zinc max-w-none text-zinc-650 text-sm sm:text-base leading-relaxed space-y-6">
            {selectedPost.content.split("\n\n").map((para, i) => {
              if (para.startsWith("###")) {
                return (
                  <h3 key={i} className="text-lg font-display font-black uppercase text-zinc-950 tracking-tight pt-2">
                    {para.replace("###", "").trim()}
                  </h3>
                );
              }
              if (para.startsWith("-") || para.startsWith("1.")) {
                return (
                  <div key={i} className="bg-zinc-50 rounded-xl p-4 border border-zinc-150 pl-6 space-y-1 text-sm text-zinc-700">
                    {para.split("\n").map((line, lidx) => (
                      <p key={lidx}>{line}</p>
                    ))}
                  </div>
                );
              }
              return <p key={i}>{para}</p>;
            })}
          </div>

          <div className="mt-12 pt-6 border-t border-zinc-100 flex items-center justify-between">
            <div className="flex gap-2">
              <button
                onClick={(e) => toggleBookmark(selectedPost.id, e)}
                className={`p-2 rounded-full border transition-all flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 cursor-pointer ${
                  bookmarkedId[selectedPost.id]
                    ? "bg-zinc-950 text-white border-transparent"
                    : "bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                <Heart className={`h-4.5 w-4.5 ${bookmarkedId[selectedPost.id] ? "fill-white" : ""}`} />
                <span>{bookmarkedId[selectedPost.id] ? "Saved Article" : "Save Insight"}</span>
              </button>

              <button
                onClick={handleShare}
                className="p-2 bg-white border border-zinc-200 hover:bg-zinc-50 rounded-full text-zinc-700 transition-colors flex items-center justify-center gap-1 px-4 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                <Share2 className="h-4.5 w-4.5" />
                <span>Share link</span>
              </button>
            </div>

            {copiedLink && (
              <span className="text-xs text-emerald-600 font-mono font-bold flex items-center gap-1 animate-fadeIn">
                <CheckCircle className="h-4 w-4" /> Link copied to clipboard!
              </span>
            )}
          </div>
        </article>
      ) : (
        <>
          {/* Blog Landing Page Header */}
          <section className="bg-zinc-50 border-b border-zinc-100 py-12" id="blog-header">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
              <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Urbanclothing Press</span>
              <h1 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 uppercase tracking-tight mt-1">Latest Casual Wear &amp; Urban Wear Fashion Insights</h1>
              <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
                Browse our curated columns concerning optimal daily <span className="font-bold text-zinc-805">Casual wear</span> assembly, styling subcultural <span className="font-bold text-zinc-805">Urban wear</span> garments, capsule catalog construction, and sustainable streetwear designs.
              </p>
            </div>
          </section>

          {/* Interactive filter tabs */}
          <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8" id="blog-filters">
            <div className="flex flex-wrap items-center justify-center gap-2 border-b border-zinc-100 pb-5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-zinc-950 text-white border-transparent shadow-xs"
                      : "bg-white text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 border-zinc-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </section>

          {/* Blog post grids */}
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="blog-posts-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => { setSelectedPost(post); window.scrollTo({ top: 0 }); }}
                  className="group bg-white rounded-2xl border border-zinc-150 overflow-hidden shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col h-full"
                  id={`blog-card-${post.id}`}
                >
                  <div className="relative h-56 sm:h-64 overflow-hidden bg-zinc-50">
                    <img
                      src={post.image}
                      alt={`${post.title} - curated advice for modern Casual wear and versatile Urban wear.`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102 filter saturate-90 group-hover:saturate-100"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 bg-zinc-950/90 text-white text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center gap-x-4 text-[10px] font-mono text-zinc-400 font-bold uppercase mb-3">
                        <span>{post.publishedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-display font-black text-lg sm:text-xl text-zinc-950 uppercase tracking-tight group-hover:text-zinc-500 transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-500 text-xs sm:text-sm mt-3.5 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-950">
                      <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                        <span>Read Insight</span>
                        <ArrowRight className="h-4 w-4" />
                      </span>
                      <button 
                        onClick={(e) => toggleBookmark(post.id, e)}
                        className="text-zinc-400 hover:text-zinc-900 p-1.5 transition-colors"
                        aria-label="Bookmark post"
                      >
                        <Heart className={`h-4.5 w-4.5 ${bookmarkedId[post.id] ? "fill-zinc-950 text-zinc-950" : ""}`} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
