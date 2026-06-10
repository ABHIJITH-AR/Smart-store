import { Shield, Hammer, Users, Gift, Heart, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-800/10 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-800"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage Story</span>
          </motion.div>
          <h2 className="font-display text-3.5xl sm:text-5xl font-bold tracking-tight text-stone-900">
            About Smart Store
          </h2>
          <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto font-light">
            Bringing elite, beautifully-detailed premium products directly to our buyers with complete transparency.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm space-y-6">
          <h3 className="font-display text-2xl font-bold text-stone-900">
            Crafting Elegance for Every Wrist
          </h3>
          <p className="text-stone-600 text-sm leading-relaxed font-light">
            Smart Store was established with a singular, clear vision: to democratize premium design aesthetics. Historically, high-quality styles featured an artificial markup, placing beautiful fluted bezels and premium leather-patterned straps out of reach for many. We changed that by forming direct supply partnerships to import and distribute timepieces without broker inflation.
          </p>
          <p className="text-stone-600 text-sm leading-relaxed font-light">
            Every analogue timepiece showcased in the Smart Store collection undergo strict testing parameters. From case metal durability to crown operation forces and calibration frequency, we ensure your parcel looks spectacular the moment you open it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-[#0F3D2E]">
              <Heart className="w-5 h-5 fill-current" />
            </div>
            <h4 className="font-display font-bold text-stone-900 text-lg">Customer Obsessed</h4>
            <p className="text-xs text-stone-500 leading-relaxed font-light">
              We operate standard support lines on WhatsApp. Get help regarding deliveries, custom features, or refunds instantly from responsive humans.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-[#0F3D2E]">
              <Hammer className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-stone-900 text-lg">Precision Inspected</h4>
            <p className="text-xs text-stone-500 leading-relaxed font-light">
              Each shipment is inspected by skilled technicians prior to packaging to guarantee flawless ticking, zero dial alignment gaps, and scratch-free crystals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-xs space-y-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-[#0F3D2E]">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-display font-bold text-stone-900 text-lg">Secure Home Delivery</h4>
            <p className="text-xs text-stone-500 leading-relaxed font-light">
              With 100% Cash on Delivery across and complete tracking coverage, we bear all shipping risks so you can buy with total peace of mind.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-forest-900 to-forest-800 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(44,155,118,0.2),transparent_50%)]" />
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest font-space">Our Mission</span>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold">
              Quality That Speaks, Value That Shines
            </h3>
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-light">
              We define quality as the integration of pristine metals, robust movements, and premium leather finishes that stand the test of time. We prove that premium quality isn't a price point; it is an outstanding habit of craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
