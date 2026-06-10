import { useState } from "react";
import { Truck, ShieldCheck, Mail, MessageSquare, MapPin, Copy, Check } from "lucide-react";

interface FooterProps {
  setView: (view: any) => void;
}

export default function Footer({ setView }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("smartstoreofficial382@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-forest-900 text-stone-100 border-t-2 border-amber-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 pb-10 border-b border-stone-800">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://lh3.googleusercontent.com/d/1GuZXgGgTbc4bXMb3L5G22FqTDQPmQ4Sr"
                alt="Smart Store Logo"
                referrerPolicy="no-referrer"
                className="h-10 w-auto rounded-md object-contain border border-white/10"
              />
              <div className="text-left">
                <span className="font-display text-lg font-bold tracking-tight text-white block leading-none">
                  SMART STORE
                </span>
                <span className="text-[9px] font-space tracking-[0.2em] text-amber-300 uppercase block font-semibold">
                  Premium Products
                </span>
              </div>
            </div>
            <p className="text-xs text-stone-300 font-light leading-relaxed">
              Curating exceptional, highly-engineered analog timepieces. Experience premium aesthetics, solid stainless steel links, mechanical bezels, and textured straps.
            </p>
            <div className="flex flex-col gap-2 pt-1 text-xs text-stone-300">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-300" />
                <span>All-India Delivery Available</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Cash on Delivery (COD) Available</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-space uppercase text-xs tracking-widest text-amber-300 font-bold mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <button onClick={() => setView("home")} className="hover:text-white transition cursor-pointer">
                  Home Collection
                </button>
              </li>
              <li>
                <button onClick={() => setView("about")} className="hover:text-white transition cursor-pointer">
                  About Our Brand
                </button>
              </li>
              <li>
                <button onClick={() => setView("contact")} className="hover:text-white transition cursor-pointer">
                  Contact Support
                </button>
              </li>
              <li>
                <a href="https://wa.me/917012700636" target="_blank" className="hover:text-white transition">
                  WhatsApp Store
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space uppercase text-xs tracking-widest text-amber-300 font-bold mb-4">
              Core Policies
            </h4>
            <ul className="space-y-2 text-xs text-stone-300 font-light">
              <li>
                <button onClick={() => setView("privacy")} className="hover:text-white transition cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => setView("terms")} className="hover:text-white transition cursor-pointer">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-space uppercase text-xs tracking-widest text-amber-300 font-bold mb-4">
              Store Support
            </h4>
            <ul className="space-y-3.5 text-xs text-stone-300 font-light">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                <div className="w-full">
                  <span className="block font-semibold text-stone-100">Email Support</span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <a href="mailto:smartstoreofficial382@gmail.com" className="hover:text-white transition break-all hover:underline">
                      smartstoreofficial382@gmail.com
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy Email Address"
                      className="text-stone-400 hover:text-amber-300 transition p-1 hover:bg-stone-800/40 rounded cursor-pointer shrink-0"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400 animate-bounce" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  {copied && (
                    <span className="text-[10px] text-emerald-400 block mt-0.5 font-medium animate-pulse">Copied to clipboard!</span>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-100">Contact Support</span>
                  <a href="https://wa.me/917012700636" target="_blank" className="hover:text-white transition">
                    +91 7012700636
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-300 mt-0.5 shrink-0" />
                <div>
                  <span className="block font-semibold text-stone-100">Headquarters</span>
                  <span>Smart Store India. Premium Products Distributors.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light pt-4 border-t border-stone-800/60">
          <p>© {currentYear} Smart Store. All rights reserved across India.</p>
          <div className="flex gap-4">
            <button onClick={() => setView("privacy")} className="hover:text-white transition cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setView("terms")} className="hover:text-white transition cursor-pointer">Terms & Conditions</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
