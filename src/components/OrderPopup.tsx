import React, { useState, useEffect } from "react";
import { X, ShieldCheck, CheckCircle2, ShoppingCart, Loader2, Info, MessageSquare, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { WatchProduct, STATES_AND_DISTRICTS } from "../data";

interface CartItem {
  product: WatchProduct;
  quantity: number;
}

interface OrderPopupProps {
  product: WatchProduct | null;
  singleQuantity?: number;
  cartItems?: CartItem[] | null;
  isOpen: boolean;
  onClose: () => void;
  onOrderSuccess?: () => void;
}

export default function OrderPopup({ product, singleQuantity, cartItems, isOpen, onClose, onOrderSuccess }: OrderPopupProps) {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [pincode, setPincode] = useState("");
  const [landmark, setLandmark] = useState("");

  const [districts, setDistricts] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [checkoutUrl, setCheckoutUrl] = useState("");

  const totalPrice = cartItems && cartItems.length > 0
    ? cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    : product
    ? product.price * (singleQuantity || 1)
    : 0;

  useEffect(() => {
    if (selectedState) {
      setDistricts(STATES_AND_DISTRICTS[selectedState] || []);
      setSelectedDistrict("");
    } else {
      setDistricts([]);
      setSelectedDistrict("");
    }
  }, [selectedState]);

  useEffect(() => {
    if (isOpen) {
      setFullName("");
      setMobileNumber("");
      setAddress("");
      setSelectedState("");
      setSelectedDistrict("");
      setPincode("");
      setLandmark("");
      setErrors({});
      setCheckoutUrl("");
      setIsSubmitting(false);
      setIsCancelled(false);
    }
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    } else if (fullName.trim().length < 3) {
      newErrors.fullName = "Please enter your full name (minimum 3 characters)";
    }

    if (!mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile Number is required";
    } else {
      const cleanPhone = mobileNumber.replace(/\D/g, "");
      if (cleanPhone.length < 10) {
        newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
      }
    }

    if (!address.trim()) {
      newErrors.address = "Complete Delivery Address is required";
    } else if (address.trim().length < 10) {
      newErrors.address = "Please provide a more detailed house address for precise delivery";
    }

    if (!selectedState) {
      newErrors.selectedState = "Please select your state";
    }

    if (!selectedDistrict) {
      newErrors.selectedDistrict = "Please select your district";
    }

    if (!pincode.trim()) {
      newErrors.pincode = "6-digit Pincode is required";
    } else {
      const cleanPincode = pincode.replace(/\D/g, "");
      if (cleanPincode.length !== 6) {
        newErrors.pincode = "Pincode must be exactly 6 digits";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!product && (!cartItems || cartItems.length === 0)) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const landmarkText = landmark.trim() ? landmark.trim() : "None Provided";

    let orderDetailsText = "";
    if (cartItems && cartItems.length > 0) {
      orderDetailsText = cartItems
        .map((item) => `- ${item.product.name} (Qty: ${item.quantity}) - ₹${item.product.price * item.quantity}`)
        .join("\n");
    } else if (product) {
      const orderQty = singleQuantity || 1;
      orderDetailsText = `- ${product.name} (Qty: ${orderQty}) - ₹${product.price * orderQty}`;
    }

    const message = `Hello Smart Store,

I would like to place an order.

Items Ordered:
${orderDetailsText}

Total Value: ₹${totalPrice} (Cash on Delivery)

Customer Details:

Name: ${fullName.trim()}

Phone: ${mobileNumber.trim()}

Address: ${address.trim()}

State: ${selectedState}

District: ${selectedDistrict}

Pincode: ${pincode.trim()}

Landmark: ${landmarkText}

Payment Method: Cash on Delivery (COD)

Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917012700636?text=${encodedMessage}`;
    setCheckoutUrl(whatsappUrl);

    // Directly open WhatsApp channel
    try {
      window.open(whatsappUrl, "_blank");
    } catch (err) {
      console.error("Popup window redirect blocked:", err);
      // Fallback redirect
      window.location.href = whatsappUrl;
    }

    setIsSubmitting(false);

    // Automatically complete order and close checkout popup
    if (onOrderSuccess) {
      onOrderSuccess();
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (product || (cartItems && cartItems.length > 0)) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-xs"
          />

          <motion.div
            initial={{ scale: 0.95, y: 15, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 15, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-stone-100 z-10 flex flex-col max-h-[90vh]"
          >
            {isCancelled ? (
              <div className="p-8 text-center flex flex-col items-center justify-center space-y-6 my-12 relative overflow-hidden animate-fade-in">
                {/* Cancel visual icon */}
                <div className="relative flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.25, 1.4], opacity: [0.6, 0.2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                    className="absolute w-24 h-24 rounded-full bg-rose-100 border border-rose-400"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 15 }}
                    className="relative w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                  >
                    <X className="w-10 h-10 text-white" />
                  </motion.div>
                </div>

                <div className="space-y-2 mt-4 z-10">
                  <motion.h3 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                    className="font-display text-2xl font-black text-rose-950 tracking-tight"
                  >
                    You ordered cancel
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                    className="text-stone-500 text-sm max-w-sm font-light leading-relaxed px-4"
                  >
                    Your order checkout has been cancelled. You can go back to complete your order or choose another stylish timepiece!
                  </motion.p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-3 w-full max-w-xs z-10 mt-2"
                >
                  <button
                    type="button"
                    onClick={() => setIsCancelled(false)}
                    className="w-1/2 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold py-3.5 rounded-xl border border-stone-200 transition active:scale-95 cursor-pointer"
                  >
                    Go Back
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-1/2 bg-rose-600 hover:bg-rose-750 text-white text-xs font-bold py-3.5 rounded-xl transition active:scale-95 cursor-pointer"
                  >
                    Close
                  </button>
                </motion.div>
              </div>
            ) : (
              <>
                <div className="bg-forest-850 p-5 text-white flex justify-between items-center bg-[#0d3629]">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <ShoppingCart className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-300 font-bold uppercase tracking-wider block">
                        Confirm Order
                      </span>
                      <h3 className="font-display text-base font-semibold text-stone-50">
                        {cartItems && cartItems.length > 0
                          ? `Order Cart (${cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items)`
                          : `${product?.name} ${singleQuantity && singleQuantity > 1 ? `(Qty: ${singleQuantity})` : ""}`}
                      </h3>
                    </div>
                  </div>
                  <button
                    onClick={onClose}
                    className="p-1 rounded-full text-stone-300 hover:text-white hover:bg-white/10 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
                  <div className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <div className="text-xs">
                      <span className="text-stone-400 block">Total Amount (COD)</span>
                      <span className="text-lg font-bold text-forest-800 font-space">
                        ₹{totalPrice}
                      </span>
                    </div>
                    <div className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-1 rounded-sm uppercase flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>COD Only</span>
                    </div>
                  </div>

                  <div className="flex gap-1 items-center text-[11px] text-stone-400 bg-amber-50 border border-amber-200/50 p-2 rounded-lg">
                    <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Postage & service charges are completely free. Pay ₹{totalPrice} inside India!</span>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Arjun Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-3.5 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 ${
                          errors.fullName ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-forest-800"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        className={`w-full px-3.5 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 ${
                          errors.mobileNumber ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-forest-800"
                        }`}
                      />
                      {errors.mobileNumber && (
                        <p className="text-[11px] text-red-500 mt-0.5">{errors.mobileNumber}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                        Complete Delivery Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={2}
                        placeholder="House No, Road Name, Area, City"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`w-full px-3.5 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 resize-none ${
                          errors.address ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-forest-800"
                        }`}
                      />
                      {errors.address && (
                        <p className="text-[11px] text-red-500 mt-0.5">{errors.address}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                          State <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={selectedState}
                          onChange={(e) => setSelectedState(e.target.value)}
                          className={`w-full px-3 py-2 border rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-forest-800/15 ${
                            errors.selectedState ? "border-red-400" : "border-stone-200"
                          }`}
                        >
                          <option value="">Select State</option>
                          {Object.keys(STATES_AND_DISTRICTS).map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                        {errors.selectedState && (
                          <p className="text-[10px] text-red-500 mt-0.5">{errors.selectedState}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                          District <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={selectedDistrict}
                          onChange={(e) => setSelectedDistrict(e.target.value)}
                          disabled={!selectedState}
                          className={`w-full px-3 py-2 border rounded-xl text-sm bg-white disabled:bg-stone-50 disabled:text-stone-450 focus:outline-none focus:ring-2 focus:ring-forest-800/15 ${
                            errors.selectedDistrict ? "border-red-400" : "border-stone-200"
                          }`}
                        >
                          <option value="">Select District</option>
                          {districts.map((dist) => (
                            <option key={dist} value={dist}>
                              {dist}
                            </option>
                          ))}
                        </select>
                        {errors.selectedDistrict && (
                          <p className="text-[10px] text-red-500 mt-0.5">{errors.selectedDistrict}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                          Pincode <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="6-digit PIN code"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          maxLength={6}
                          className={`w-full px-3.5 py-2 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 ${
                            errors.pincode ? "border-red-400 focus:border-red-500" : "border-stone-200 focus:border-forest-800"
                          }`}
                        />
                        {errors.pincode && (
                          <p className="text-[11px] text-red-500 mt-0.5">{errors.pincode}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                          Landmark <span className="text-stone-400 font-light">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Near Temple, School"
                          value={landmark}
                          onChange={(e) => setLandmark(e.target.value)}
                          className="w-full px-3.5 py-2 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 focus:border-forest-800"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIsCancelled(true)}
                      className="w-1/3 bg-stone-50 hover:bg-stone-100 text-stone-750 text-sm font-semibold py-3 rounded-xl border border-stone-200/60 active:scale-95 transition cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold py-3 rounded-xl active:scale-95 transition shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:bg-stone-300"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Connecting WhatsApp...</span>
                        </>
                      ) : (
                        <>
                          <MessageSquare className="w-4 h-4 fill-white stroke-none" />
                          <span>Confirm to WhatsApp</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
