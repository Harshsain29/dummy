import React, { useState } from "react";
import { X, Minus, Plus, Trash2, ShieldCheck, CreditCard, Sparkles, ShoppingBag } from "lucide-react";
import { CartItem } from "../types";

interface CartProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void;
}

export default function Cart({ isOpen, setIsOpen, cart, setCart }: CartProps) {
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "submitting" | "success">("cart");
  const [shippingAddress, setShippingAddress] = useState({ name: "", street: "", city: "" });

  if (!isOpen) return null;

  const updateQuantity = (index: number, delta: number) => {
    const updated = [...cart];
    updated[index].quantity += delta;
    if (updated[index].quantity <= 0) {
      updated.splice(index, 1);
    }
    setCart(updated);
  };

  const removeItem = (index: number) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const discountAmount = appliedPromo ? calculateSubtotal() * 0.15 : 0; // 15% discount
  const shippingFee = calculateSubtotal() > 100 || calculateSubtotal() === 0 ? 0 : 9.99;
  const grandTotal = calculateSubtotal() - discountAmount + shippingFee;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "URBAN15" || promoCode.toUpperCase() === "STREETWEAR") {
      setAppliedPromo(promoCode.toUpperCase());
    } else {
      alert("Invalid Code! Try using 'URBAN15' for a 15% discount.");
    }
    setPromoCode("");
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep("submitting");
    setTimeout(() => {
      setCheckoutStep("success");
      setCart([]); // Clear cart upon success state!
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[50] overflow-hidden" id="sliding-cart-drawer">
      {/* Dark overlay backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity" 
        onClick={() => { if (checkoutStep !== "submitting") setIsOpen(false); }}
      />

      <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-zinc-100 animate-slideLeft">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
            <h2 className="font-display text-lg font-black tracking-tight text-zinc-950 uppercase flex items-center gap-2">
              <ShoppingBag className="h-5 w-5" />
              <span>Shopping Cart</span>
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              disabled={checkoutStep === "submitting"}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-950 hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Core Content Area */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {checkoutStep === "cart" && (
              <>
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="h-16 w-16 bg-zinc-50 border border-zinc-100 rounded-full flex items-center justify-center mb-4 text-zinc-400">
                      <ShoppingBag className="h-8 w-8 stroke-[1.2px]" />
                    </div>
                    <span className="text-zinc-800 font-semibold text-sm">Your cart is empty</span>
                    <p className="text-zinc-400 text-xs mt-1 max-w-xs">
                      Discover premium streetwear items and check out our new arrivals page.
                    </p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="mt-6 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors cursor-pointer"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}`} className="flex py-3 border-b border-zinc-100 gap-4">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-20 w-16 rounded-lg bg-zinc-100 object-cover flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 flex flex-col justify-between">
                          <div>
                            <h4 className="text-sm font-semibold text-zinc-950 line-clamp-1">{item.product.name}</h4>
                            <div className="flex flex-wrap gap-x-3 text-xs text-zinc-500 mt-1">
                              {item.selectedSize && (
                                <span className="bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-100">Size: {item.selectedSize}</span>
                              )}
                              {item.selectedColor && (
                                <span className="bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-100">Color: {item.selectedColor}</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            {/* Quantity Controls */}
                            <div className="flex items-center border border-zinc-200 rounded-lg">
                              <button
                                onClick={() => updateQuantity(index, -1)}
                                className="p-1 hover:text-zinc-900 text-zinc-400"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-2.5 text-xs text-zinc-900 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(index, 1)}
                                className="p-1 hover:text-zinc-900 text-zinc-400"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-bold text-zinc-950">${(item.product.price * item.quantity).toFixed(2)}</span>
                              <button
                                onClick={() => removeItem(index)}
                                className="text-zinc-400 hover:text-red-500 transition-colors p-1"
                                aria-label="Remove item"
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {checkoutStep === "submitting" && (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="h-12 w-12 border-4 border-zinc-950 border-t-zinc-200 rounded-full animate-spin mb-4" />
                <span className="text-sm font-semibold text-zinc-950">Processing Order...</span>
                <p className="text-xs text-zinc-400 mt-1">Establishing ethical packaging & shipping logs.</p>
              </div>
            )}

            {checkoutStep === "success" && (
              <div className="h-full flex flex-col items-center justify-center text-center py-8">
                <div className="h-16 w-16 bg-emerald-50 rounded-full border border-emerald-100 flex items-center justify-center mb-6 text-emerald-500 animate-scaleUp">
                  <ShieldCheck className="h-9 w-9" />
                </div>
                <h3 className="text-xl font-display font-black tracking-tight text-zinc-950 uppercase mb-2">Order Confirmed!</h3>
                <p className="text-xs text-zinc-600 leading-relaxed max-w-sm mb-6">
                  Thank you for shopping with **UrbanClothing**. We are preparing your shipment at 145 Fashion Avenue. A receipt and tracking coordinates have been dispatched to your designated contact email.
                </p>
                <div className="bg-zinc-50 border border-zinc-100 p-4 rounded-xl w-full text-left font-mono text-[10px] text-zinc-500 space-y-1">
                  <p className="text-zinc-950 font-bold">TRANSACTION REPORT:</p>
                  <p>ID: #UC-{(Math.floor(Math.random() * 900000) + 100000)}</p>
                  <p>STATUS: Ethical Fulfillment Queued</p>
                  <p>METHOD: Simulated Card Gateway</p>
                  <p>DISPATCH: Express Worldwide Ground</p>
                </div>
                <button
                  onClick={() => {
                    setCheckoutStep("cart");
                    setIsOpen(false);
                  }}
                  className="mt-8 w-full bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs py-3.5 rounded-lg transition-colors cursor-pointer"
                >
                  Return to Storefront
                </button>
              </div>
            )}
          </div>

          {/* Footer Receipt Summary */}
          {cart.length > 0 && checkoutStep === "cart" && (
            <div className="border-t border-zinc-100 px-6 py-6 bg-zinc-50">
              
              {/* Promo Panel */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Promo Code (e.g. URBAN15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-grow bg-white text-zinc-900 border border-zinc-200 rounded-lg px-3 py-1.5 text-xs placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
                />
                <button
                  type="submit"
                  className="bg-zinc-950 hover:bg-zinc-800 text-white font-medium text-xs px-3 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="bg-emerald-50 text-emerald-800 border border-emerald-100 rounded-lg p-2 text-xs flex justify-between items-center mb-4">
                  <span className="flex items-center gap-1 font-medium">
                    <Sparkles className="h-3.5 w-3.5" /> Promo "{appliedPromo}" Applied (15% Off)
                  </span>
                  <button onClick={() => setAppliedPromo(null)} className="text-emerald-800/60 hover:text-emerald-800">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}

              {/* Fee Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-500 mb-4 font-medium">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-zinc-900 font-bold">${calculateSubtotal().toFixed(2)}</span>
                </div>
                {appliedPromo && (
                  <div className="flex justify-between text-emerald-600">
                    <span>Discount (15%)</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-zinc-900 font-bold">
                    {shippingFee === 0 ? "FREE" : `$${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t border-zinc-200/80 my-2 pt-2 flex justify-between text-sm text-zinc-950 font-black">
                  <span>Total Due</span>
                  <span>${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Form */}
              <form onSubmit={handleCheckoutSubmit} className="space-y-2.5">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Simulated Dispatch Info</p>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Recipient Name"
                    value={shippingAddress.name}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, name: e.target.value })}
                    className="bg-white text-zinc-900 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
                  />
                  <input
                    type="text"
                    required
                    placeholder="City / Postal Code"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="bg-white text-zinc-900 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Street Shipping Address"
                  value={shippingAddress.street}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, street: e.target.value })}
                  className="w-full bg-white text-zinc-900 border border-zinc-200 rounded-lg px-2.5 py-1.5 text-xs placeholder-zinc-400 focus:outline-none focus:border-zinc-400"
                />
                
                <button
                  type="submit"
                  className="w-full mt-3 bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs py-3.5 rounded-lg transition-all shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Execute Simulated Checkout</span>
                </button>
              </form>

              <p className="text-[10px] text-zinc-400 text-center mt-3">
                🔒 Secured simulated SSL gateway. No real payment required.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
