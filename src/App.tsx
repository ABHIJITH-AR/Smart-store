import React, { useState, useEffect, useRef } from "react";
import { Star, CheckCircle, ChevronDown, Sparkles, MessageCircle, Info, ShieldCheck, ShoppingCart, Search } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { WATCHES, FAQS, WatchProduct } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WatchCard from "./components/WatchCard";
import ProductDetails from "./components/ProductDetails";
import OrderPopup from "./components/OrderPopup";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import PolicyPage from "./components/PolicyPage";
import CartSidebar from "./components/CartSidebar";

interface CartItem {
  product: WatchProduct;
  quantity: number;
}

export default function App() {
  const [currentView, setCurrentView] = useState<
    "home" | "product-details" | "about" | "contact" | "privacy" | "terms" | "refund"
  >("home");

  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [orderProduct, setOrderProduct] = useState<WatchProduct | null>(null);
  const [directOrderQuantity, setDirectOrderQuantity] = useState(1);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("smart_store_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("smart_store_cart", JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const collectionRef = useRef<HTMLDivElement>(null);

  const handleSelectProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentView("product-details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBuyNow = (productId: string, quantity: number = 1) => {
    const product = WATCHES.find((w) => w.id === productId);
    if (product) {
      setDirectOrderQuantity(quantity);
      setOrderProduct(product);
      setIsOrderPopupOpen(true);
    }
  };

  const handleBuyNowFromGrid = (productId: string, e: any) => {
    e.stopPropagation();
    handleBuyNow(productId, 1);
  };

  const handleAddToCart = (product: WatchProduct, e?: any, customQty: number = 1) => {
    if (e) e.stopPropagation();
    setCart((prev) => {
      const existingIdx = prev.findIndex((item) => item.product.id === product.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += customQty;
        return updated;
      }
      return [...prev, { product, quantity: customQty }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateCartQuantity = (productId: string, currentQty: number, delta: number) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.product.id === productId) {
          const newQty = Math.max(1, currentQty + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const handleRemoveCartItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckoutCart = () => {
    setIsCartOpen(false);
    setOrderProduct(null);
    setIsOrderPopupOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const handleShopNowClick = () => {
    setCurrentView("home");
    setTimeout(() => {
      collectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleSearchFocus = () => {
    if (currentView !== "home") {
      setCurrentView("home");
    }
  };

  const filteredWatches = WATCHES.filter((watch) => {
    return (
      watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      watch.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const activeProduct = WATCHES.find((w) => w.id === selectedProductId) || null;

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const renderActiveView = () => {
    switch (currentView) {
      case "product-details":
        if (activeProduct) {
          return (
            <ProductDetails
              product={activeProduct}
              onBack={() => setCurrentView("home")}
              onBuyNow={handleBuyNow}
              onAddToCart={(product, quantity) => handleAddToCart(product, null, quantity)}
            />
          );
        }
        return renderHomeView();

      case "about":
        return <AboutPage />;

      case "contact":
        return <ContactPage />;

      case "privacy":
        return <PolicyPage type="privacy" />;

      case "terms":
        return <PolicyPage type="terms" />;

      case "refund":
        return <PolicyPage type="refund" />;

      case "home":
      default:
        return renderHomeView();
    }
  };

  const renderHomeView = () => {
    return (
      <div className="space-y-16 pb-16">
        <Hero onShopNowClick={handleShopNowClick} />

        <div ref={collectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-800/10 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-800">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-stone-900">
              Featured Analogue Watches
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto font-light leading-relaxed">
              Timeless designs offering unparalleled value. Carefully calibrated weight, premium aesthetics, and complete water resist casing.
            </p>
          </div>

          {searchQuery && (
            <div className="mb-8 flex items-center justify-between bg-stone-100/85 px-4 py-3 rounded-xl border border-stone-200/50 max-w-md mx-auto">
              <span className="text-xs text-stone-600 font-medium font-mono">
                Found {filteredWatches.length} watches for "{searchQuery}"
              </span>
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-forest-800 font-bold hover:underline"
              >
                Clear Search
              </button>
            </div>
          )}

          {filteredWatches.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-100 shadow-xs max-w-md mx-auto p-6 space-y-4">
              <Search className="w-12 h-12 text-stone-300 mx-auto" />
              <h3 className="font-display text-lg font-semibold text-stone-850">
                No Watches Found
              </h3>
              <p className="text-xs text-stone-500">
                We couldn't find matches for "{searchQuery}". Try exploring our standard collection or reset searches.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="bg-forest-800 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-forest-700 transition"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWatches.map((watch) => (
                <WatchCard
                  key={watch.id}
                  product={watch}
                  onSelect={handleSelectProduct}
                  onAddToCartClick={handleAddToCart}
                  onBuyNowClick={handleBuyNowFromGrid}
                />
              ))}
            </div>
          )}
        </div>

        <div className="bg-forest-900 py-16 text-white overflow-hidden relative border-t-2 border-b border-forest-950 bg-[#0d3629]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(44,155,118,0.22),transparent_60%)]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-amber-300 border border-white/5">
                <span>Fast Transit Promise</span>
              </div>
              <h3 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight">
                Secure Express Cash on Delivery
              </h3>
              <p className="text-stone-350 text-xs sm:text-sm font-light leading-relaxed">
                We make shopping stress-free. There are zero requirements for prepayment or card registrations. Fill out our express order sheet, authenticate your dispatch details on WhatsApp, and pay only when the wristwatch is safely in your hands.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-black/25 p-5 rounded-2xl border border-white/10 space-y-2">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">7-Day Free replacement</span>
                <p className="text-stone-300 text-xs font-light leading-relaxed">
                  Every analogue timepiece includes standard defect guarantees. If any transit damages happen, get direct replacements on WhatsApp immediately.
                </p>
              </div>

              <div className="bg-black/25 p-5 rounded-2xl border border-white/10 space-y-2">
                <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">Fully Traceable Logistics</span>
                <p className="text-stone-300 text-xs font-light leading-relaxed">
                  Once order information is verified, dispatch occurs within 24 hours. We share comprehensive real-time tracking IDs via automated SMS.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-forest-800/10 rounded-full text-xs font-semibold tracking-wider text-forest-800 uppercase">
              <span>FAQ Guide</span>
            </div>
            <h3 className="font-display text-2.5xl sm:text-4.5xl font-bold tracking-tight text-stone-900">
              Frequently Asked Questions
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light">
              Clear concise answers regarding payment, shipping mechanics, and watch characteristics.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-stone-100 shadow-xs overflow-hidden divide-y divide-stone-100">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="transition-all duration-200">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-stone-50/50 transition duration-150 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-stone-900 text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${
                      activeFaq === idx ? "rotate-180 text-forest-800" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-xs sm:text-sm text-stone-500 font-light leading-relaxed bg-stone-50/25">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6]">
      <Navbar
        currentView={currentView}
        setView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchFocus={handleSearchFocus}
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView + (selectedProductId || "")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {renderActiveView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setView={setCurrentView} />

      <OrderPopup
        product={orderProduct}
        singleQuantity={orderProduct ? directOrderQuantity : 1}
        cartItems={orderProduct ? null : cart}
        isOpen={isOrderPopupOpen}
        onClose={() => setIsOrderPopupOpen(false)}
        onOrderSuccess={handleOrderSuccess}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={handleCheckoutCart}
        onExploreClick={handleShopNowClick}
      />
    </div>
  );
}
