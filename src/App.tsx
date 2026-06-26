import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ProductDetailModal from "./components/ProductDetailModal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { CartItem, Product } from "./types";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Load cart from localStorage if exists
  useEffect(() => {
    const savedCart = localStorage.getItem("urban_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse saved cart", err);
      }
    }
  }, []);

  // Sync cart back to localStorage on change
  const handleUpdateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("urban_cart", JSON.stringify(newCart));
  };

  const handleAddToCart = (product: Product, size: string, color: string, quantity: number) => {
    const newCart = [...cart];
    const existingIndex = newCart.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor === color
    );

    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({ product, selectedSize: size, selectedColor: color, quantity });
    }
    
    handleUpdateCart(newCart);
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white flex flex-col justify-between selection:bg-zinc-950 selection:text-white" id="urban-app-root">
        
        {/* Navigation Header */}
        <Header
          cart={cart}
          setCartOpen={setCartOpen}
        />

        {/* Main Content Area */}
        <main className="flex-grow animate-fadeIn">
          <Routes>
            {/* Home endpoints */}
            <Route path="/" element={<Home onProductClick={setSelectedProduct} />} />
            <Route path="/streetwear-tshirt" element={<Home onProductClick={setSelectedProduct} />} />
            <Route path="/streetwear-india" element={<Home onProductClick={setSelectedProduct} />} />
            <Route path="/streetwear-jacket" element={<Home onProductClick={setSelectedProduct} />} />

            {/* Product endpoints */}
            <Route path="/products" element={<Products onProductClick={setSelectedProduct} />} />
            <Route path="/urban-clothing" element={<Products onProductClick={setSelectedProduct} />} />
            <Route path="/men-s-fashion" element={<Products onProductClick={setSelectedProduct} />} />
            <Route path="/clothing-store" element={<Products onProductClick={setSelectedProduct} />} />
            <Route path="/streatwear" element={<Products onProductClick={setSelectedProduct} />} />

            <Route path="/services" element={<Services />} />

            {/* Blog endpoints */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/casual-wear" element={<Blog />} />
            <Route path="/urban-wear" element={<Blog />} />

            {/* About endpoints */}
            <Route path="/about" element={<About />} />
            <Route path="/urban-fashion" element={<About />} />
            <Route path="/women-s-fashion" element={<About />} />
            <Route path="/tendy-apparel" element={<About />} />

            {/* Contact endpoints */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/fashion-clothing" element={<Contact />} />
            <Route path="/online-fashion" element={<Contact />} />
            <Route path="/fashion-wear" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer block */}
        <Footer />

        {/* Sliding Slide-out Shopping Cart panel */}
        <Cart
          isOpen={cartOpen}
          setIsOpen={setCartOpen}
          cart={cart}
          setCart={handleUpdateCart}
        />

        {/* Center Detail modal for product inspections */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      </div>
    </BrowserRouter>
  );
}
