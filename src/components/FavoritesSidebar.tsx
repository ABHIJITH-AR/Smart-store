import React from "react";
import { X, Heart, ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WatchProduct } from "../data";

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  favoriteItems: WatchProduct[];
  onRemoveFavorite: (productId: string) => void;
  onAddToCart: (product: WatchProduct, e?: any) => void;
  onExploreClick: () => void;
}

export default function FavoritesSidebar({
  isOpen,
  onClose,
  favoriteItems,
  onRemoveFavorite,
  onAddToCart,
  onExploreClick,
}: FavoritesSidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Drawer container */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-stone-100"
            >
              {/* Header */}
              <div className="px-5 py-5 border-b border-stone-100 bg-[#8c1d40] text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base leading-none">Your Wishlist</h3>
                    <span className="text-[10px] text-stone-300 font-medium block mt-1 tracking-wider uppercase">
                      {favoriteItems.length} {favoriteItems.length === 1 ? "Item" : "Items"} Liked
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-stone-350 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Favorites contents */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {favoriteItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-5">
                    <div className="w-20 h-20 bg-rose-50/50 rounded-full flex items-center justify-center border border-rose-100 shadow-xs">
                      <Heart className="w-10 h-10 text-stone-300" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-stone-800 text-lg">Your Wishlist is empty</h4>
                      <p className="text-stone-450 text-xs font-light mt-1 max-w-xs mx-auto">
                        Tap the heart symbol on any watch to save it here for later. Compare your favorites easily!
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        onClose();
                        onExploreClick();
                      }}
                      className="bg-forest-800 text-white font-semibold text-xs px-6 py-3 rounded-xl hover:bg-forest-700 transition active:scale-95 shadow-xs cursor-pointer"
                    >
                      Browse Products
                    </button>
                  </div>
                ) : (
                  favoriteItems.map((product) => {
                    const originalPrice = product.price + 800;
                    return (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-2xl p-3.5 border border-stone-150/70 flex gap-4 hover:shadow-xs transition"
                      >
                        {/* Image wrapper */}
                        <div className="w-20 h-20 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-center p-2 shrink-0 select-none">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            referrerPolicy="no-referrer"
                            className="object-contain w-full h-full drop-shadow-md"
                          />
                        </div>

                        {/* Text and Actions */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-display font-bold text-stone-900 text-xs sm:text-sm truncate">
                                {product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveFavorite(product.id)}
                                className="text-stone-300 hover:text-red-500 p-0.5 rounded transition cursor-pointer"
                                title="Remove from wishlist"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider block bg-amber-50 rounded-sm px-1.5 py-0.5 w-max mt-1">
                              75% OFF
                            </span>
                          </div>

                          <div className="flex justify-between items-end mt-2">
                            {/* Price details */}
                            <div>
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs text-stone-400 line-through">
                                  ₹{originalPrice}
                                </span>
                                <span className="text-sm font-bold font-space text-forest-800">
                                  ₹{product.price}
                                </span>
                              </div>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                              onClick={(e) => {
                                onAddToCart(product, e);
                                // Keep favorites sidebar open or close, up to preference.
                                // We can also close it or let it remain. Let's let it remain or show.
                              }}
                              className="bg-forest-800 text-white hover:bg-forest-700 hover:text-amber-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold active:scale-95 transition cursor-pointer border border-forest-900"
                            >
                              <ShoppingCart className="w-3.5 h-3.5" />
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Footer */}
              {favoriteItems.length > 0 && (
                <div className="p-5 border-t border-stone-150 bg-stone-50/75 space-y-4">
                  <button
                    onClick={() => {
                      onClose();
                      onExploreClick();
                    }}
                    className="w-full bg-[#8c1d40] hover:bg-[#6c122e] text-stone-50 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>Keep Shopping Products</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
