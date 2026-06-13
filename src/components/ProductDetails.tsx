import { useState, useEffect, FormEvent } from "react";
import { Star, Truck, CheckCircle, Shield, ArrowLeft, Send, Sparkles, MapPin, ChevronLeft, ChevronRight, ShoppingCart, Plus, Minus, MessageSquare, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WatchProduct } from "../data";

const PRODUCT_COLORS: Record<string, { name: string; hexs: string[]; description: string }> = {
  "ravishing-men": {
    name: "Classic Charcoal Onyx & Textured Black",
    hexs: ["#1F2937", "#111827"],
    description: "Deep black mineral dial face with fine stone-gray accents, matching comfortably with the dark textured strap."
  },
  "fancy-men": {
    name: "Sporty Chrome & Metallic Silver",
    hexs: ["#D1D5DB", "#94A3B8"],
    description: "Rugged sterling silver tri-dial framework paired organically with rich premium metallic security band."
  },
  "ravishing-premium": {
    name: "Royal Emerald Sunray & Gold Finish",
    hexs: ["#064E3B", "#D97706"],
    description: "Magnificent forest-green dial paired with a lustrous electroplated gold anti-oxidation protective bezel finish."
  },
  "daniel-jubilee": {
    name: "Polished Chrome Silver & Oyster White",
    hexs: ["#F1F5F9", "#CBD5E1"],
    description: "Iconic glinting steel-polished fluted crown combined with an interwoven platinum sterling metal link strap."
  },
  "armada": {
    name: "Deep Tactical Olive & Admiral Green",
    hexs: ["#14532D", "#166534"],
    description: "Heavy-duty brushed forest green steel plate guards combined with tough military-grade tactical marine silicone."
  }
};

interface ProductDetailsProps {
  product: WatchProduct;
  isLiked: boolean;
  onLikeToggle: () => void;
  onBack: () => void;
  onBuyNow: (productId: string, quantity: number) => void;
  onAddToCart: (product: WatchProduct, quantity: number) => void;
}

export default function ProductDetails({
  product,
  isLiked,
  onLikeToggle,
  onBack,
  onBuyNow,
  onAddToCart,
}: ProductDetailsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left/prev, 1 for right/next
  const [qty, setQty] = useState(1);
  const originalPrice = product.price + 800;

  // Comments states
  const [comments, setComments] = useState<Array<{ name: string; comment: string; rating: number; date: string; verified: boolean }>>([]);
  const [newCommentName, setNewCommentName] = useState("");
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentRating, setNewCommentRating] = useState(5);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
    setDirection(0);
    setQty(1);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Load custom comments from localStorage
    const saved = localStorage.getItem(`smart_store_comments_${product.id}`);
    if (saved) {
      try {
        setComments(JSON.parse(saved));
      } catch {
        setComments([]);
      }
    } else {
      setComments([]);
    }
  }, [product]);

  const handleNextSlide = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevSlide = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir === 0 ? 0 : dir * 180,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (dir: number) => ({
      x: dir === 0 ? 0 : dir * -180,
      opacity: 0,
      scale: 0.95
    })
  };

  const handleSubmitComment = (e: FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newCommentItem = {
      name: newCommentName.trim(),
      comment: newCommentText.trim(),
      rating: newCommentRating,
      date: "Just now",
      verified: true
    };

    const updated = [newCommentItem, ...comments];
    setComments(updated);
    try {
      localStorage.setItem(`smart_store_comments_${product.id}`, JSON.stringify(updated));
    } catch (err) {
      console.warn("Could not save comment to localStorage", err);
    }

    setNewCommentName("");
    setNewCommentText("");
    setNewCommentRating(5);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 4000);
  };

  return (
    <div className="bg-stone-50/50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-forest-800 mb-8 px-4 py-2 bg-white rounded-full shadow-xs border border-stone-100 transition-all cursor-pointer font-space"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm">
          {/* Left Column: Image Slideshow */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div className="relative aspect-square w-full bg-stone-50 rounded-2xl flex items-center justify-center p-8 border border-stone-105 group overflow-hidden select-none">
              <div className="absolute top-4 left-4 z-10 bg-forest-800 text-stone-50 text-[10px] font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Truck className="w-3.5 h-3.5" />
                <span>Free Insured Delivery</span>
              </div>
              <div className="absolute top-4 right-4 z-10 bg-amber-400 text-forest-900 text-[10px] font-black px-3 py-1 rounded-sm uppercase tracking-widest shadow-xs">
                75% OFF
              </div>

              {/* Slide controls */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 hover:bg-white text-stone-800 rounded-full border border-stone-150 flex items-center justify-center shadow-md active:scale-90 transition opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 bg-white/90 hover:bg-white text-stone-800 rounded-full border border-stone-150 flex items-center justify-center shadow-md active:scale-90 transition opacity-0 group-hover:opacity-100 cursor-pointer"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Animated Slide Image Wrapper */}
              <div className="h-full w-full flex items-center justify-center p-4 overflow-hidden relative">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.img
                    key={activeIndex}
                    src={product.images[activeIndex]}
                    alt={`${product.name} - Slide ${activeIndex + 1}`}
                    referrerPolicy="no-referrer"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: "spring", stiffness: 280, damping: 28 },
                      opacity: { duration: 0.22 }
                    }}
                    className="object-contain h-5/6 w-auto drop-shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Indicator Dots */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-stone-900/10 backdrop-blur-xs px-3 py-1.5 rounded-full z-10">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > activeIndex ? 1 : -1);
                        setActiveIndex(i);
                      }}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        activeIndex === i ? "bg-forest-800 w-4" : "bg-stone-400 hover:bg-stone-500"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Heart Wishlist Like Button */}
              <button
                onClick={onLikeToggle}
                className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center cursor-pointer transition hover:scale-105 active:scale-90"
                title={isLiked ? "Unlike product" : "Like product"}
              >
                <Heart
                  className={`w-5 h-5 transition ${
                    isLiked ? "fill-rose-500 text-rose-500" : "text-stone-450 hover:text-stone-600"
                  }`}
                />
              </button>
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 justify-center">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > activeIndex ? 1 : -1);
                      setActiveIndex(idx);
                    }}
                    className={`relative w-16 h-16 bg-stone-50 rounded-xl border-2 flex items-center justify-center p-2 transition cursor-pointer ${
                      activeIndex === idx ? "border-forest-800 scale-102" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} - View ${idx + 1}`}
                      referrerPolicy="no-referrer"
                      className="object-contain w-full h-full drop-shadow-xs select-none"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: product parameters & specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "fill-amber-500" : ""
                      }`}
                    />
                  ))}
                  <span className="text-sm font-semibold ml-1 text-stone-800">{product.rating}</span>
                </div>
                <span className="text-sm text-stone-400">|</span>
                <span className="text-xs text-stone-500">{product.ratingCount} Customers Answered</span>
              </div>

              <h2 className="font-display text-2xl sm:text-3.5xl font-bold text-stone-900 tracking-tight leading-none">
                {product.name}
              </h2>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-3xl font-bold font-space text-forest-800">
                  ₹{product.price * qty}
                </span>
                <span className="text-base text-stone-400 line-through">
                  ₹{originalPrice * qty}
                </span>
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-sm ml-2">
                  SAVE ₹{(originalPrice - product.price) * qty} NOW
                </span>
              </div>

              <p className="text-stone-600 text-sm leading-relaxed font-light">
                {product.shortDescription}
              </p>

              {/* Product Color Option Description ("product color patti parayam") */}
              {PRODUCT_COLORS[product.id] && (
                <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/70 shadow-3xs space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-stone-550 uppercase tracking-widest font-space">
                      Product Finished Tone
                    </span>
                    <span className="text-[11px] font-bold text-forest-900 bg-forest-800/10 px-2.5 py-0.5 rounded-full border border-forest-800/5">
                      {PRODUCT_COLORS[product.id].name}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    {/* Render visual color swatches */}
                    <div className="flex items-center gap-1.5 mt-0.5 pt-0.5 shrink-0">
                      {PRODUCT_COLORS[product.id].hexs.map((hex, index) => (
                        <div
                          key={index}
                          style={{ backgroundColor: hex }}
                          className="w-5.5 h-5.5 rounded-full border border-stone-300 shadow-inner flex items-center justify-center relative group"
                          title={`Color Spec: ${hex}`}
                        >
                          <span className="w-1.5 h-1.5 bg-white rounded-full opacity-60" />
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-stone-500 font-light leading-snug pl-3 border-l border-stone-200">
                      {PRODUCT_COLORS[product.id].description}
                    </p>
                  </div>
                </div>
              )}

              {/* Quantity Changer Block ("count add cheyanam") */}
              <div className="py-3 border-t border-b border-stone-100 flex items-center justify-between">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-widest font-space">
                  Select Order Quantity
                </span>
                <div className="flex items-center gap-2.5 bg-stone-50 border border-stone-200 rounded-xl p-1 shadow-2xs">
                  <button
                    onClick={() => setQty((prev) => Math.max(1, prev - 1))}
                    disabled={qty <= 1}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-150 flex items-center justify-center text-stone-700 font-bold hover:bg-stone-50 hover:text-forest-800 active:scale-95 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-10 text-center font-bold text-stone-800 text-sm font-mono">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((prev) => prev + 1)}
                    className="w-8 h-8 rounded-lg bg-white border border-stone-150 flex items-center justify-center text-stone-700 font-bold hover:bg-stone-50 hover:text-forest-800 active:scale-95 transition cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold text-xs sm:text-xs">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>100% Cash on Delivery (COD) Available</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-light pl-6">
                  No online payment required. Pay only when our courier executive delivers the watch at your doorstep securely.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <Truck className="w-5 h-5 text-forest-800" />
                  <div>
                    <span className="text-xs font-bold text-stone-850 block">All-India Delivery</span>
                    <span className="text-[11px] text-stone-500">Free Home Shipping</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-50 border border-stone-100">
                  <Shield className="w-5 h-5 text-forest-800" />
                  <div>
                    <span className="text-xs font-bold text-stone-850 block">Defect Proof Guarantee</span>
                    <span className="text-[11px] text-stone-500">7-Day Free Replacement</span>
                  </div>
                </div>
              </div>

              {/* Multi-action Buy Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 pt-3">
                <button
                  onClick={() => onAddToCart(product, qty)}
                  className="sm:col-span-5 bg-stone-50 border border-stone-250 hover:bg-stone-100/80 hover:border-forest-800/10 text-stone-850 py-4 px-4 rounded-xl text-xs sm:text-sm font-bold active:scale-[0.98] transition flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <ShoppingCart className="w-4 h-4 text-forest-800" />
                  <span>Add {qty > 1 ? `(${qty}) Items` : ""} to Cart</span>
                </button>
                
                <button
                  onClick={() => onBuyNow(product.id, qty)}
                  className="sm:col-span-7 bg-forest-800 text-stone-50 hover:bg-forest-700 py-4 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                >
                  <Send className="w-4 h-4 fill-stone-50 stroke-none" />
                  <span>Order Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-5">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span>Product Description & Features</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h4 className="font-space uppercase text-xs tracking-widest text-forest-900 font-bold mb-2">
                  Product Overview
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  {product.overview}
                </p>
              </div>

              <div>
                <h4 className="font-space uppercase text-xs tracking-widest text-forest-900 font-bold mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-space uppercase text-xs tracking-widest text-forest-900 font-bold mb-3">
                  Product Benefits
                </h4>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-stone-600 text-sm">
                      <span className="bg-forest-800/10 text-forest-800 text-[10px] font-bold px-1.5 py-0.5 rounded-sm shrink-0 mt-0.5">
                        0{i + 1}
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6">
              <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                <h4 className="font-space uppercase text-xs tracking-widest text-stone-700 font-bold mb-4">
                  Specifications
                </h4>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, val]) => (
                    <div key={key} className="flex justify-between items-center text-xs pb-2 border-b border-stone-200/50">
                      <span className="text-stone-400 font-normal">{key}</span>
                      <span className="text-stone-850 font-semibold text-right">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-forest-900/5 p-6 rounded-2xl border border-forest-800/10 space-y-3">
                <h5 className="text-xs font-bold text-forest-900 uppercase tracking-wider flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Delivery Logistics</span>
                </h5>
                <p className="text-stone-600 text-xs leading-relaxed">
                  Fast reliable dispatch within 24 hours. Courier partners include DTDC, Blue Dart, and Delhivery. Complete tracking link will be messaged to you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Comments & Reviews Section ("comment cheyan box venam") */}
        <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-5">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-forest-800" />
              <span>Customer Comments & Reviews</span>
            </h3>
            <p className="text-stone-500 text-xs sm:text-sm font-light mt-1">
              Read opinions of active verified buyers or submit your own review/comment about this product instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Comments List */}
            <div className="lg:col-span-7 space-y-4">
              {comments.length === 0 ? (
                <div className="text-center py-8 bg-stone-50 rounded-2xl border border-dashed border-stone-200">
                  <p className="text-stone-400 text-sm">No comments left yet. Be the first to express your thoughts!</p>
                </div>
              ) : (
                comments.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="bg-stone-50/50 p-5 rounded-2xl border border-stone-100 shadow-3xs space-y-2.5"
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-forest-800 text-stone-50 rounded-full flex items-center justify-center font-bold text-xs uppercase shadow-xs">
                          {item.name.substring(0, 2)}
                        </div>
                        <div>
                          <h4 className="font-display font-semibold text-sm text-stone-900 leading-none">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-stone-400 block mt-1.5 font-light">
                            {item.date}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center text-amber-500 gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < item.rating ? "fill-amber-500 text-amber-500" : "text-stone-200"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-stone-700 text-xs sm:text-xs font-light leading-relaxed pl-0 sm:pl-12">
                      "{item.comment}"
                    </p>

                    {item.verified && (
                      <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold pl-0 sm:pl-12">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Verified Store Purchase</span>
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </div>

            {/* Right Column: Submission Form ("comment cheyan box") */}
            <div className="lg:col-span-5 bg-stone-50/70 rounded-2xl p-6 border border-stone-200/60 sticky top-4">
              <h4 className="font-space uppercase text-xs tracking-widest text-stone-700 font-bold mb-4 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-forest-800" />
                <span>Write a Comment</span>
              </h4>

              <form onSubmit={handleSubmitComment} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-600 mb-1.5 uppercase tracking-wider font-space">
                    Your Rating
                  </label>
                  <div className="flex items-center gap-1 bg-white p-2 rounded-xl border border-stone-200 w-fit shadow-2xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        type="button"
                        key={i}
                        onClick={() => setNewCommentRating(i + 1)}
                        className="p-1 hover:scale-110 active:scale-95 transition cursor-pointer"
                        aria-label={`Rate ${i + 1} stars`}
                      >
                        <Star
                          className={`w-5 h-5 ${
                            i < newCommentRating
                              ? "fill-amber-400 text-amber-400"
                              : "text-stone-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[#4c4743] text-xs font-bold mb-1.5 uppercase tracking-wider font-space">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newCommentName}
                    onChange={(e) => setNewCommentName(e.target.value)}
                    placeholder="E.g. Amal Dev"
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-light text-stone-800 focus:outline-none focus:ring-1 focus:ring-forest-800 shadow-3xs"
                  />
                </div>

                <div>
                  <label className="block text-[#4c4743] text-xs font-bold mb-1.5 uppercase tracking-wider font-space">
                    Write Your Feedback / Comment
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    placeholder="Describe your design, color finish, or packaging review here..."
                    className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-light text-stone-800 focus:outline-none focus:ring-1 focus:ring-forest-800 shadow-3xs resize-none"
                  />
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-2 text-xs text-emerald-800 font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Your comment has been submitted beautifully!</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-forest-800 hover:bg-forest-700 text-stone-50 py-3.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <Send className="w-3.5 h-3.5 fill-stone-50 stroke-none" />
                  <span>Post Comment</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
