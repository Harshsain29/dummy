import { useState } from "react";
import { X, Check, ShoppingCart, ShieldCheck, Heart } from "lucide-react";
import { Product } from "../types";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, color: string, quantity: number) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[0] : "");
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : "");
  const [quantity, setQuantity] = useState(1);
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, selectedColor, quantity);
    setAddedFeedback(true);
    setTimeout(() => {
      setAddedFeedback(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl relative border border-zinc-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-none animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-zinc-950 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full shadow-md transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Product Image Panel */}
        <div className="w-full md:w-1/2 bg-zinc-50 relative min-h-[300px] md:min-h-0 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover aspect-square md:aspect-auto md:absolute md:inset-0"
            referrerPolicy="no-referrer"
          />
          {product.category && (
            <span className="absolute top-4 left-4 bg-zinc-900 border border-zinc-700 text-white font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 uppercase rounded">
              {product.category}
            </span>
          )}
        </div>

        {/* Product Specifications and Details Panel */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
          
          {/* Headline & Pricing */}
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">UrbanClothing Collection</span>
            <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight text-zinc-950 mt-1 uppercase leading-tight">
              {product.name}
            </h3>
            
            <div className="flex items-baseline mt-2 gap-3">
              <span className="text-2xl font-black text-zinc-950">${product.price.toFixed(2)}</span>
              {product.rating && (
                <div className="flex items-center text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                  ★ {product.rating} / 5.0
                </div>
              )}
            </div>

            {/* Product Description */}
            <p className="text-xs sm:text-sm text-zinc-600 mt-4 leading-relaxed">
              {product.description}
            </p>
            
            {/* Material Specific fields */}
            <div className="mt-4 pt-4 border-t border-zinc-100 space-y-1 text-xs">
              <p className="text-zinc-500">
                <span className="font-semibold text-zinc-800">Composition:</span> {product.material}
              </p>
              {product.capacity && (
                <p className="text-zinc-500">
                  <span className="font-semibold text-zinc-800">Capacity Volume:</span> {product.capacity}
                </p>
              )}
            </div>
          </div>

          {/* Interactive selectors */}
          <div className="mt-6 space-y-5">
            {/* Render Color Rings if product has colors configured */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <span className="text-xs font-semibold text-zinc-900 block mb-2.5">Select Color: <span className="font-bold text-zinc-500">{selectedColor}</span></span>
                <div className="flex flex-wrap gap-2.5">
                  {product.colors.map((color) => {
                    const hex = product.colorsHex?.[color] || "#71717A";
                    const isSelected = selectedColor === color;
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: hex }}
                        title={color}
                        className={`h-7 w-7 rounded-full border relative transition-all duration-150 cursor-pointer ${
                          isSelected 
                            ? "ring-2 ring-zinc-950 ring-offset-2 scale-110 border-transparent" 
                            : "border-zinc-300 hover:scale-105"
                        }`}
                      >
                        {isSelected && (
                          <span className={`absolute inset-0 flex items-center justify-center ${color === 'White' ? 'text-zinc-900' : 'text-white'}`}>
                            <Check className="h-3 w-3 stroke-[3px]" />
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Render Size selector if active sizes are declared */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <span className="text-xs font-semibold text-zinc-900 block mb-2">Select Size: <span className="font-bold text-zinc-500">{selectedSize}</span></span>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const isSelected = selectedSize === size;
                    return (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer ${
                          isSelected
                            ? "bg-zinc-950 text-white shadow-sm scale-102"
                            : "bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200"
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add action trigger */}
            <div className="flex gap-4 pt-2">
              <div className="flex items-center border border-zinc-200 rounded-lg">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2 hover:text-zinc-950 text-zinc-400 font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-1 text-sm font-bold text-zinc-950 select-none w-5 text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2 hover:text-zinc-950 text-zinc-400 font-bold transition-colors"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                disabled={addedFeedback}
                className={`flex-grow py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                  addedFeedback 
                    ? "bg-emerald-600 text-white" 
                    : "bg-zinc-950 hover:bg-zinc-800 text-white shadow-md active:scale-98"
                }`}
              >
                {addedFeedback ? (
                  <>
                    <ShieldCheck className="h-4.5 w-4.5" />
                    <span>Transferred to Cart</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    <span>Purchase & Add to Cart</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-[10px] text-zinc-400 text-center mt-6 flex items-center justify-center gap-1">
            🌱 Sustainably manufactured and dispatched in zero-plastic parcels.
          </p>
        </div>
      </div>
    </div>
  );
}
