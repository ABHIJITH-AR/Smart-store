import { useState } from "react";
import { Search, Menu, X, PhoneCall, Truck, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentView: string;
  setView: (view: any) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearchFocus: () => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({
  currentView,
  setView,
  searchQuery,
  setSearchQuery,
  onSearchFocus,
  cartCount,
  onCartClick,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string) => {
    setView(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-forest-900 text-amber-100 text-xs py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1">
          <div className="flex items-center gap-2">
            <Truck className="w-3.5 h-3.5" />
            <span className="font-medium tracking-wide">All India Free Home Delivery Available</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-medium tracking-wide">Cash on Delivery (COD) Available</span>
            <span className="hidden sm:inline opacity-60">|</span>
            <a href="https://wa.me/917012700636" target="_blank" className="flex items-center gap-1 hover:text-white transition">
              <PhoneCall className="w-3 h-3" />
              <span>+91 7012700636</span>
            </a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-8 flex-1">
              <button
                onClick={() => setView("home")}
                className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-forest-800 rounded-lg p-1"
              >
                <img
                  src="https://lh3.googleusercontent.com/d/1GuZXgGgTbc4bXMb3L5G22FqTDQPmQ4Sr"
                  alt="Smart Store Logo"
                  referrerPolicy="no-referrer"
                  className="h-11 w-auto rounded-md object-contain border border-stone-100 shadow-xs"
                />
                <div className="text-left flex flex-col justify-center">
                  <h1 className="font-display text-2xl font-black tracking-tight text-stone-900 leading-none flex items-center gap-1">
                    <span className="text-forest-800 tracking-tight">SMART</span>
                    <span className="text-amber-500 font-light text-xl relative top-[-1px]">✦</span>
                  </h1>
                  <span className="text-[8.5px] font-space tracking-[0.38em] text-amber-600 uppercase font-extrabold leading-none mt-1.5 block">
                    STORE
                  </span>
                </div>
              </button>

              <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-stone-600">
                <button
                  onClick={() => handleNavClick("home")}
                  className={`transition hover:text-forest-800 py-2 border-b-2 ${
                    currentView === "home" ? "border-forest-800 text-forest-800" : "border-transparent"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("about")}
                  className={`transition hover:text-forest-800 py-2 border-b-2 ${
                    currentView === "about" ? "border-forest-800 text-forest-800" : "border-transparent"
                  }`}
                >
                  About Us
                </button>
                <button
                  onClick={() => handleNavClick("contact")}
                  className={`transition hover:text-forest-800 py-2 border-b-2 ${
                    currentView === "contact" ? "border-forest-800 text-forest-800" : "border-transparent"
                  }`}
                >
                  Contact Us
                </button>
              </nav>
            </div>

            <div className="flex-1 max-w-sm mx-4 hidden sm:block">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search premium products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={onSearchFocus}
                  className="w-full pl-9 pr-4 py-2 border border-stone-200 rounded-full text-sm bg-stone-50 focus:outline-none focus:ring-1 focus:ring-forest-800 focus:border-forest-800 focus:bg-white transition-all text-stone-800"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-650"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-2 bg-stone-50 hover:bg-stone-100/80 active:scale-95 text-stone-800 px-3.5 py-2 rounded-full border border-stone-150 text-[13px] font-bold shadow-xs transition cursor-pointer"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="w-4 h-4 text-forest-800" />
                <span className="hidden sm:inline text-stone-700">Cart</span>
                {cartCount > 0 ? (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-5 h-5 flex items-center justify-center border border-white shadow-xs">
                    {cartCount}
                  </span>
                ) : (
                  <span className="text-stone-400 text-xs hidden sm:inline">(0)</span>
                )}
              </button>

              <div className="md:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-stone-600 hover:text-forest-800 focus:outline-none"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>


            </div>
          </div>

          <div className="pb-3 block sm:hidden">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={onSearchFocus}
                className="w-full pl-9 pr-4 py-2.5 border border-stone-200 rounded-full text-sm bg-stone-50 focus:outline-none focus:ring-1 focus:ring-forest-800 focus:bg-white transition-all text-stone-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-650 animate-fade-in"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden relative z-30"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 font-medium text-stone-750">
              <button
                onClick={() => handleNavClick("home")}
                className={`block w-full text-left py-2 px-3 rounded-lg ${
                  currentView === "home" ? "bg-forest-800/10 text-forest-800 font-semibold" : "hover:bg-stone-50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={`block w-full text-left py-2 px-3 rounded-lg ${
                  currentView === "about" ? "bg-forest-800/10 text-forest-800 font-semibold" : "hover:bg-stone-50"
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className={`block w-full text-left py-2 px-3 rounded-lg ${
                  currentView === "contact" ? "bg-forest-800/10 text-forest-800 font-semibold" : "hover:bg-stone-50"
                }`}
              >
                Contact Us
              </button>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500 px-3">
                <span>WhatsApp: +91 7012700636</span>
                <span>Free All-India Insured Mail</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
