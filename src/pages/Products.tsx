import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, ArrowUpDown, RefreshCw } from "lucide-react";
import { Product } from "../types";
import { PRODUCTS } from "../data";
import SEO from "../components/SEO";

export default function Products({ onProductClick }: { onProductClick: (product: Product) => void }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "all";

  const setCategoryFilter = (category: string) => {
    setSearchParams({ category });
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(100);
  const [sortBy, setSortBy] = useState<string>("recommended");

  const categories = ["all", "Men's Collection", "Women's Collection", "Accessories", "New Arrivals"];

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("all");
    setMaxPrice(100);
    setSortBy("recommended");
  };

  // Memoized filtered and sorted collection
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Filter by Search Query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.material.toLowerCase().includes(query)
      );
    }

    // Filter by Category
    if (categoryFilter !== "all") {
      result = result.filter((p) => p.category === categoryFilter);
    }

    // Filter by Price range
    result = result.filter((p) => p.price <= maxPrice);

    // Sorting execution
    if (sortBy === "price-low-high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high-low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "name-az") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [searchQuery, categoryFilter, maxPrice, sortBy]);

  return (
    <div id="products-page-container" className="font-sans text-zinc-900 bg-white">
      <SEO 
        title="Urban Clothing, Men's Fashion, Clothing Store &amp; Streatwear | UrbanClothing" 
        description="Shop at the ultimate urban clothing store. Discover top tier Men's Fashion, premium cargo fits, upcycled items, and authentic streatwear choices for a stylish capsule."
      />
      
      {/* Page Header */}
      <section className="bg-zinc-50 border-b border-zinc-100 py-12" id="products-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-mono text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">Urbanclothing Catalog</span>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-zinc-950 uppercase tracking-tight mt-1">
            Our Urban Clothing, Men's Fashion &amp; Streatwear Collection
          </h1>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-zinc-500 mt-2 leading-relaxed">
            Welcome to our premium online <span className="font-bold text-zinc-800">Clothing Store</span>. Browse contemporary shapes, boxy aesthetics, class-leading <span className="font-bold text-zinc-800">Men's Fashion</span> cuts, and carbon-neutral carbon blends designed under authentic <span className="font-bold text-zinc-800">streatwear</span> and streetwear concepts.
          </p>
        </div>
      </section>

      {/* Main Filter and Showcase Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8" id="products-grid-section">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Side Control Filters - Desktop */}
          <aside className="w-full lg:w-64 space-y-8 flex-shrink-0" id="products-filters-sidebar">
            
            {/* SEO Side Note */}
            <div className="bg-zinc-950 p-4 rounded-xl text-white text-xs">
              <span className="font-mono text-[8px] tracking-widest text-zinc-400 uppercase font-extrabold block mb-1">Store Quality Verified</span>
              <p className="leading-relaxed">
                As a global <span className="font-bold">Clothing Store</span>, our premium lines represent raw <span className="font-bold">streatwear</span> ideals combined with highly versatile <span className="font-bold">Men's Fashion</span> aesthetics.
              </p>
            </div>

            {/* Search Input Box */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-150 relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wide text-zinc-950 flex items-center gap-1.5">
                  <Search className="h-4 w-4 text-zinc-600" /> Search
                </span>
              </div>
              <input
                type="text"
                placeholder="Keywords..."
                value={searchQuery}
                aria-label="Search clothing items"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-zinc-900 placeholder-zinc-400 border border-zinc-200 rounded-lg py-2 px-3 text-xs focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* Category Segment Selectors */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-150">
              <span className="text-xs font-bold uppercase tracking-wide text-zinc-950 block mb-4 flex items-center gap-1.5">
                <SlidersHorizontal className="h-4 w-4 text-zinc-600" /> Categories
              </span>
              <div className="space-y-1.5">
                {categories.map((catKey) => {
                  const isActive = categoryFilter === catKey;
                  return (
                    <button
                      key={catKey}
                      onClick={() => setCategoryFilter(catKey)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? "bg-zinc-950 text-white"
                          : "bg-white hover:bg-zinc-100 text-zinc-600 border border-zinc-200"
                      }`}
                    >
                      <span>{catKey === "all" ? "All Apparel" : catKey}</span>
                      {isActive && <span className="h-1.5 w-1.5 bg-white rounded-full" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Price Range Slider */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-150">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-wide text-zinc-950">Max Price</span>
                <span className="font-mono text-xs font-bold bg-white px-2 py-0.5 rounded border border-zinc-200/80">${maxPrice}</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                step="5"
                aria-label="Filter by maximum price"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-zinc-950 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-zinc-400 font-mono mt-1 pt-1.5">
                <span>$20</span>
                <span>$60</span>
                <span>$100</span>
              </div>
            </div>

            {/* Sorting criteria */}
            <div className="bg-zinc-50 p-5 rounded-xl border border-zinc-150">
              <span className="text-xs font-bold uppercase tracking-wide text-zinc-950 block mb-3.5 flex items-center gap-1.5">
                <ArrowUpDown className="h-4 w-4 text-zinc-600" /> Sort By
              </span>
              <select
                value={sortBy}
                aria-label="Sort product ordering"
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white text-zinc-900 border border-zinc-200 rounded-lg p-2.5 text-xs focus:outline-none focus:border-zinc-500 cursor-pointer"
              >
                <option value="recommended">Featured Picks</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="rating">Rating: High to Low</option>
                <option value="name-az">Alphabetical: A-Z</option>
              </select>
            </div>

            {/* Reset helper */}
            <button
              onClick={handleResetFilters}
              className="w-full py-2.5 px-4 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset All Filters</span>
            </button>
          </aside>

          {/* Catalog Grid Area */}
          <div className="flex-grow">
            
            {/* Products Found report */}
            <div className="flex justify-between items-center mb-6 text-xs text-zinc-500 bg-zinc-50 p-3 rounded-lg border border-zinc-150/80">
              <span>Found <span className="font-bold text-zinc-950">{filteredProducts.length}</span> luxury item(s)</span>
              {categoryFilter !== "all" && (
                <span className="bg-zinc-200/80 text-zinc-700 px-2 py-0.5 rounded text-[10px] font-bold uppercase font-mono">
                  Filter: {categoryFilter}
                </span>
              )}
            </div>

            {/* Product card layout list */}
            {filteredProducts.length === 0 ? (
              <div className="py-20 flex flex-col items-center justify-center text-center bg-zinc-50/55 rounded-xl border border-dashed border-zinc-200">
                <SlidersHorizontal className="h-10 w-10 text-zinc-300 stroke-[1.2px] mb-4" />
                <span className="text-zinc-800 font-bold text-sm">No items match your criteria</span>
                <p className="text-zinc-400 text-xs mt-1 max-w-sm">
                  Try adjusting your price sliding scale, clearing keywords, or switching categories.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="mt-6 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs px-5 py-3 rounded-md transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => onProductClick(prod)}
                    className="group cursor-pointer bg-white rounded-xl border border-zinc-150 overflow-hidden shadow-xs hover:shadow-md transition-all duration-200"
                    id={`catalog-product-card-${prod.id}`}
                  >
                    <div className="relative aspect-square overflow-hidden bg-zinc-50 flex items-center justify-center">
                      <img
                        src={prod.image}
                        alt={`${prod.name} - high-grade urban clothing item from our Clothing Store. Best-selling streatwear design for Men's Fashion.`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                        <span className="bg-zinc-950/90 text-white font-mono text-[8px] font-bold tracking-widest px-2 py-0.5 uppercase rounded">
                          {prod.category}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-neutral-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-center pb-4">
                        <span className="bg-white/95 backdrop-blur-sm text-zinc-950 font-bold text-[10px] uppercase tracking-widest py-2 px-4 rounded shadow-md border border-zinc-100">
                          Inspect Specs
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <span className="font-mono text-[9px] text-zinc-400 font-bold uppercase bg-zinc-50 border border-zinc-100 rounded px-1.5 py-0.5">{prod.sizes?.join("/") || prod.capacity || "One Size"}</span>
                      <h3 className="font-display font-black text-sm uppercase text-zinc-950 tracking-tight mt-2.5 truncate">{prod.name}</h3>
                      <p className="text-zinc-500 text-xs mt-1 line-clamp-2 leading-relaxed min-h-[32px]">{prod.description}</p>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-zinc-100">
                        <span className="font-black text-sm text-zinc-950">${prod.price.toFixed(2)}</span>
                        <div className="flex items-center text-amber-500 text-xs font-bold leading-none select-none">
                          ★ <span className="ml-1 text-zinc-800">{prod.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
