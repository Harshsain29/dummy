import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X } from "lucide-react";
import { CartItem } from "../types";

interface HeaderProps {
  cart: CartItem[];
  setCartOpen: (open: boolean) => void;
}

export default function Header({ cart, setCartOpen }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const activePath = location.pathname;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navigationItems = [
    { path: "/", id: "home", label: "Home" },
    { path: "/products", id: "products", label: "Products" },
    { path: "/services", id: "services", label: "Services" },
    { path: "/blog", id: "blog", label: "Blog" },
    { path: "/about", id: "about", label: "About Us" },
    { path: "/contact", id: "contact", label: "Contact Us" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-[40] w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link 
          to="/"
          onClick={handleNavClick} 
          className="flex cursor-pointer items-center space-x-2 font-display text-xl font-black tracking-widest text-zinc-950 uppercase"
          id="hdr-logo"
        >
          <span className="bg-zinc-950 px-2.5 py-1 text-white select-none">U</span>
          <span>UrbanClothing</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = activePath === item.path;
            return (
              <Link
                key={item.id}
                id={`nav-link-${item.id}`}
                to={item.path}
                onClick={handleNavClick}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-200 py-1.5 ${
                  isActive ? "text-zinc-950" : "text-zinc-500 hover:text-zinc-900"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-zinc-950" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon button */}
          <button
            id="cart-trigger-btn"
            onClick={() => setCartOpen(true)}
            className="group relative p-2 text-zinc-700 hover:text-zinc-950 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="h-5.5 w-5.5 stroke-[1.8px] transition-transform duration-200 group-hover:scale-105" />
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-950 text-[10px] font-bold text-white ring-2 ring-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu trigger */}
          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-700 hover:text-zinc-950 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5.5 w-5.5 stroke-[2px]" />
            ) : (
              <Menu className="h-5.5 w-5.5 stroke-[2px]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-zinc-100 bg-white" id="mobile-nav-panel">
          <div className="space-y-1 px-4 py-3 pb-4">
            {navigationItems.map((item) => {
              const isActive = activePath === item.path;
              return (
                <Link
                  key={item.id}
                  id={`mob-nav-link-${item.id}`}
                  to={item.path}
                  onClick={handleNavClick}
                  className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive 
                      ? "bg-zinc-50 text-zinc-950" 
                      : "text-zinc-500 hover:bg-zinc-50/50 hover:text-zinc-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
