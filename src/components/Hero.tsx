import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onShopNowClick: () => void;
}

export default function Hero({ onShopNowClick }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-radial from-[#15533f] via-[#0d3629] to-[#0A261D] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-forest-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(44,155,118,0.18),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15 text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-amber-300 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Premium Products Collection</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-stone-50"
          >
            Redefining <span className="text-amber-300 italic font-medium">Affordable</span> Quality
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
          >
            Discover masterfully crafted designs that command authority. Engineered with precision, built with durable metals, and refined with timeless leather. Genuine premium products, without any middlemen markup.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2"
          >
            <div className="flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-stone-200">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>All-India Delivery Available</span>
            </div>
            <div className="flex items-center gap-2 bg-black/25 px-3 py-1.5 rounded-lg border border-white/5 text-xs text-stone-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Cash on Delivery (COD) Available</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-4"
          >
            <button
              onClick={onShopNowClick}
              className="inline-flex items-center gap-2 bg-amber-400 text-[#0F3D2E] hover:bg-amber-300 font-semibold px-8 py-4 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer text-sm tracking-wide uppercase"
            >
              <span>Shop Current Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[340px] sm:max-w-[380px] bg-gradient-to-b from-stone-500/10 to-stone-900/40 p-6 rounded-2xl border border-white/10 relative shadow-2xl"
          >
            <div className="absolute top-4 right-4 bg-amber-400 text-[#0F3D2E] text-[10px] font-bold px-2 px-1 rounded-sm uppercase tracking-wider shadow-sm flex items-center gap-1 z-20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Best Seller</span>
            </div>
            
            <div className="relative aspect-square w-full bg-forest-900/40 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
              <img
                src="https://lh3.googleusercontent.com/d/1B7ZAWkY4WqTHuhizlExVrCKQwUppLrWx"
                alt="Ravishing Men Analog Watch"
                referrerPolicy="no-referrer"
                className="object-contain h-5/6 w-auto drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] hover:scale-105 transition duration-500"
              />
            </div>

            <div className="mt-4 flex justify-between items-baseline">
              <div>
                <h3 className="font-display text-lg font-semibold text-stone-100">Ravishing Premium</h3>
                <span className="text-xs text-amber-300 block">Collector's Edition</span>
              </div>
              <div className="text-right">
                <span className="text-stone-400 line-through text-xs">₹1,299</span>
                <span className="text-xl font-bold font-space text-stone-50 block">₹249</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
