import React from "react";
import { X, ShoppingCart, Plus, Minus, Trash2, ShieldCheck, Truck, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WatchProduct } from "../data";

interface CartItem {
  product: WatchProduct;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, currentQty: number, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onExploreClick: () => void;
}

export default function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onExploreClick,
}: CartSidebarProps) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const totalOriginalAmount = cartItems.reduce((acc, item) => acc + (item.product.price + 800) * item.quantity, 0);
  const totalSaved = totalOriginalAmount - totalAmount;

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
              <div className="px-5 py-5 border-b border-stone-100 bg-[#0d3629] text-white flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <div className="bg-white/10 p-2 rounded-lg">
                    <ShoppingCart className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base leading-none">Your Shopping Cart</h3>
                    <span className="text-[10px] text-stone-300 font-medium block mt-1 tracking-wider uppercase">
                      {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"} Selected
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="w-5.5 h-5.5" />
                </button>
              </div>

              {/* Cart contents */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center p-8 text-center space-y-5">
                    <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center border border-stone-100 shadow-xs">
                      <ShoppingCart className="w-10 h-10 text-stone-300" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-stone-800 text-lg">Your cart is empty</h4>
                      <p className="text-stone-450 text-xs font-light mt-1 max-w-xs mx-auto">
                        Explore our curated series of premium products under 75% OFF. Add your favorite ones to get free cash on delivery!
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
                  cartItems.map((item) => {
                    const originalPrice = item.product.price + 800;
                    return (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-2xl p-3.5 border border-stone-150/70 flex gap-4 hover:shadow-xs transition"
                      >
                        {/* Image wrapper */}
                        <div className="w-20 h-20 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-center p-2 shrink-0 select-none">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            referrerPolicy="no-referrer"
                            className="object-contain w-full h-full drop-shadow-md"
                          />
                        </div>

                        {/* Text and Actions */}
                        <div className="flex-1 flex flex-col justify-between min-w-0">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <h4 className="font-display font-bold text-stone-900 text-xs sm:text-sm truncate">
                                {item.product.name}
                              </h4>
                              <button
                                onClick={() => onRemoveItem(item.product.id)}
                                className="text-stone-350 hover:text-red-500 p-0.5 rounded transition cursor-pointer"
                                title="Remove Item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <span className="text-[10px] text-amber-500 font-bold uppercase tracking-wider block bg-amber-50 rounded-sm px-1.5 py-0.5 w-max mt-1">
                              75% OFF
                            </span>
                          </div>

                          <div className="flex justify-between items-end mt-2">
                            {/* Quantity Adjustment Controls */}
                            <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-lg p-0.5">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity, -1)}
                                className="p-1 text-stone-500 hover:text-forest-800 hover:bg-stone-100 rounded transition cursor-pointer"
                                disabled={item.quantity <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold px-2 text-stone-800 min-w-[16px] text-center font-mono">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity, 1)}
                                className="p-1 text-stone-500 hover:text-forest-800 hover:bg-stone-100 rounded transition cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                              <div className="flex items-center gap-1.5 justify-end">
                                <span className="text-xs text-stone-400 line-through">
                                  ₹{originalPrice * item.quantity}
                                </span>
                                <span className="text-sm font-bold font-space text-forest-800">
                                  ₹{item.product.price * item.quantity}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                )}
              </div>

              {/* Sticky bottom summary of prices */}
              {cartItems.length > 0 && (
                <div className="p-5 border-t border-stone-150 bg-stone-50/75 space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-stone-500 font-light">
                      <span>Subtotal (M.R.P.)</span>
                      <span className="line-through font-mono">₹{totalOriginalAmount}</span>
                    </div>
                    <div className="flex justify-between text-xs text-emerald-600 font-semibold">
                      <span>Discount (75% Off Promotional offer)</span>
                      <span className="font-mono">-₹{totalSaved}</span>
                    </div>
                    <div className="flex justify-between text-xs text-stone-500 font-light pb-2 border-b border-stone-150">
                      <span>Postage / Deliver Charge</span>
                      <span className="text-emerald-600 font-bold uppercase tracking-wider font-mono">FREE</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-1">
                      <span className="text-sm font-bold text-stone-900">Total COD Value</span>
                      <span className="text-xl font-black font-space text-forest-800">
                        ₹{totalAmount}
                      </span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 border border-emerald-200/50 p-2.5 rounded-xl flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-[10px] text-emerald-800 leading-tight">
                      <strong>100% Cash on Delivery:</strong> No card or prepayment is requested here. Verify order, expect delivery confirmation within 24 hours.
                    </div>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={onCheckout}
                    className="w-full bg-forest-800 text-stone-50 hover:bg-forest-700 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
                  >
                    <span>Proceed Express COD Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-1 text-[10px] text-stone-400 font-medium">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Takes ~3-5 business days across India</span>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
