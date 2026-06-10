import React from "react";
import { Star, Truck, Shield, MessageCircle, ShoppingCart, Heart } from "lucide-react";
import { motion } from "motion/react";
import { WatchProduct } from "../data";

interface WatchCardProps {
  key?: string;
  product: WatchProduct;
  onSelect: (productId: string) => void;
  onAddToCartClick: (product: WatchProduct, e: any) => void;
  onBuyNowClick: (productId: string, e: any) => void;
}

export default function WatchCard({ product, onSelect, onAddToCartClick, onBuyNowClick }: WatchCardProps) {
  const originalPrice = product.price + 800;
  
  const [isLiked, setIsLiked] = React.useState(() => {
    try {
      return localStorage.getItem(`liked-${product.id}`) === "true";
    } catch {
      return false;
    }
  });

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextLiked = !isLiked;
    setIsLiked(nextLiked);
    try {
      localStorage.setItem(`liked-${product.id}`, String(nextLiked));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onClick={() => onSelect(product.id)}
      className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl hover:border-forest-800/20 max-w-sm mx-auto flex flex-col h-full cursor-pointer transition-all"
    >
      <div className="relative aspect-square w-full bg-linear-to-b from-stone-50 to-stone-100/50 flex items-center justify-center overflow-hidden p-6 select-none border-b border-stone-50">
        <div className="absolute top-3 left-3 bg-forest-800 text-stone-50 text-[10px] font-semibold px-2.5 py-1 rounded-sm uppercase tracking-wider flex items-center gap-1 shadow-xs">
          <Truck className="w-3.5 h-3.5" />
          <span>COD Available</span>
        </div>

        <div className="absolute top-3 right-3 bg-amber-400 text-forest-900 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wide shadow-xs">
          75% OFF
        </div>

        <img
          src={product.images[0]}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="object-contain h-5/6 w-auto drop-shadow-xl select-none group-hover:scale-106 transition duration-500 ease-out"
        />
        
        <button
          onClick={handleLikeClick}
          className="absolute bottom-3 right-3 z-10 w-8.5 h-8.5 rounded-full bg-white border border-stone-150 flex items-center justify-center shadow-xs active:scale-90 hover:scale-105 transition cursor-pointer"
          title={isLiked ? "Unlike product" : "Like product"}
        >
          <Heart
            className={`w-4 h-4 transition ${
              isLiked ? "fill-rose-500 text-rose-500 scale-110" : "text-stone-400"
            }`}
          />
        </button>

        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="flex items-center text-amber-500">
            <Star className="w-3.5 h-3.5 fill-amber-500" />
            <span className="text-xs font-semibold ml-0.5 text-stone-700">{product.rating}</span>
          </div>
          <span className="text-xs text-stone-400">({product.ratingCount} reviews)</span>
        </div>

        <h3 className="font-display text-lg font-bold text-stone-900 tracking-tight leading-snug group-hover:text-forest-800 transition duration-150">
          {product.name}
        </h3>

        <p className="text-stone-500 text-xs mt-1.5 line-clamp-2 leading-relaxed flex-1">
          {product.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3.5">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold font-space text-forest-800">
                ₹{product.price}
              </span>
              <span className="text-xs text-stone-400 line-through">
                ₹{originalPrice}
              </span>
            </div>
            <div className="text-[10px] text-stone-400 flex items-center gap-0.5">
              <Shield className="w-3 h-3 text-emerald-600" />
              <span>Insured Package</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCartClick(product, e);
              }}
              className="bg-stone-50 border border-stone-200 text-stone-850 hover:bg-stone-100 hover:border-forest-800/20 text-xs font-semibold py-2.5 rounded-lg active:scale-95 transition flex items-center justify-center gap-1"
            >
              <ShoppingCart className="w-3.5 h-3.5 text-forest-800" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={(e) => onBuyNowClick(product.id, e)}
              className="bg-forest-800 text-white hover:bg-forest-700 text-xs font-semibold py-2.5 rounded-lg active:scale-95 transition shadow-sm hover:shadow-md flex items-center justify-center gap-1"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
