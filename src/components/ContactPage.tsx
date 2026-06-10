import React, { useState } from "react";
import { Mail, MessageCircle, Clock, BookOpen, Send, CheckCircle2, MapPin, Copy, Check } from "lucide-react";
import { motion } from "motion/react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<"whatsapp" | "email">("whatsapp");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("smartstoreofficial382@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);

      const customWelcome = `Hello Smart Store Support,

I have a query. My name is ${name}.
Phone: ${phone || "Not specified"}
Email: ${email || "Not specified"}

Message: ${message}`;

      if (submitType === "whatsapp") {
        const url = `https://wa.me/917012700636?text=${encodeURIComponent(customWelcome)}`;
        window.open(url, "_blank");
      } else {
        const subject = encodeURIComponent(`Smart Store Inquiry from ${name}`);
        const body = encodeURIComponent(customWelcome);
        const url = `mailto:smartstoreofficial382@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = url;
      }

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }, 1200);
  };

  return (
    <div className="bg-stone-50/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-forest-800/10 rounded-full text-xs font-semibold tracking-wider uppercase text-forest-800"
          >
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Fast Curation Support</span>
          </motion.div>
          <h2 className="font-display text-3.5xl sm:text-5xl font-bold tracking-tight text-stone-900">
            Contact Smart Store
          </h2>
          <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto font-light">
            Have questions about delivery speeds, product specs, or packaging? Tell us how we can help you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-bold text-stone-900">
                Support Channels
              </h3>

              <div className="space-y-4 pt-1">
                <a
                  href="https://wa.me/917012700636"
                  target="_blank"
                  className="flex gap-4 items-start p-3 hover:bg-stone-50 rounded-xl transition"
                >
                  <div className="bg-emerald-100 text-emerald-800 p-2.5 rounded-lg shrink-0">
                    <MessageCircle className="w-5 h-5 fill-emerald-800 stroke-none" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-500">WhatsApp Support (Instant)</span>
                    <span className="text-sm font-bold text-stone-900">+91 7012700636</span>
                    <p className="text-[11px] text-stone-400 font-light mt-0.5">Average reply time under 10 minutes</p>
                  </div>
                </a>

                <div className="relative group flex gap-4 items-start p-3 hover:bg-stone-50 rounded-xl transition">
                  <a
                    href="mailto:smartstoreofficial382@gmail.com"
                    className="flex gap-4 items-start w-full"
                  >
                    <div className="bg-amber-100 text-[#0F3D2E] p-2.5 rounded-lg shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="block text-xs font-semibold text-stone-500">Email Address</span>
                      <span className="text-sm font-bold text-stone-900 break-all pr-8 block hover:underline">
                        smartstoreofficial382@gmail.com
                      </span>
                      <p className="text-[11px] text-stone-400 font-light mt-0.5">
                        We reply within 24 operational hours
                      </p>
                    </div>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    title="Copy Email Address"
                    className="absolute right-3 top-5 text-stone-400 hover:text-forest-800 transition p-1.5 hover:bg-stone-100 rounded-lg cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500 animate-bounce" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                  {copied && (
                    <span className="absolute right-12 top-6 bg-emerald-50 text-emerald-700 text-[10px] font-semibold px-2 py-0.5 rounded border border-emerald-200 shadow-sm animate-pulse">
                      Copied!
                    </span>
                  )}
                </div>

                <div className="flex gap-4 items-start p-3 rounded-xl border border-dashed border-stone-250">
                  <div className="bg-stone-100 text-stone-600 p-2.5 rounded-lg shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-stone-500">Store Hours</span>
                    <span className="text-sm font-bold text-stone-900">Monday - Sunday (All Days)</span>
                    <p className="text-[11px] text-stone-400 font-light mt-0.5">9:00 AM to 9:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-forest-900 text-amber-100 p-6 rounded-2xl shadow-sm space-y-4 bg-[#0d3629]">
              <h4 className="font-display font-medium text-lg text-stone-50">Secure Direct Logistics</h4>
              <p className="text-stone-300 text-xs leading-relaxed font-light">
                Our main dispatch warehouses are strategically located across crucial hubs in India to enable rapid postal transits via Air and Express Surface mail streams.
              </p>
              <div className="flex gap-2 items-center text-xs text-amber-300">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>All-India Insured Shipments. COD Only.</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-in">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="font-display text-xl font-bold text-stone-900">
                  Message Prepared Successfully
                </h3>
                <p className="text-stone-500 text-sm max-w-sm mx-auto">
                  Your request is being processed. You will now be redirected to WhatsApp to immediately dispatch this inquiry to our support desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl font-bold text-stone-900 mb-2">
                  Drop us a Message
                </h3>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 focus:border-forest-800"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Email Address <span className="text-stone-400 font-light">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 focus:border-forest-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                      Mobile Number <span className="text-stone-400 font-light">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="10-digit phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 focus:border-forest-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wide mb-1">
                    Your Message / Inquiry <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe product details or logistics questions you have..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-forest-800/15 focus:border-forest-800 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    onClick={() => setSubmitType("whatsapp")}
                    className="flex-1 bg-forest-800 hover:bg-forest-700 text-white font-bold py-3.5 px-4 rounded-xl transition active:scale-98 flex items-center justify-center gap-2 text-xs uppercase cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white stroke-none" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="submit"
                    onClick={() => setSubmitType("email")}
                    className="flex-1 bg-stone-100 hover:bg-stone-200 border border-stone-200 text-stone-800 font-bold py-3.5 px-4 rounded-xl transition active:scale-98 flex items-center justify-center gap-2 text-xs uppercase cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-stone-700" />
                    <span>Send via Email</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
