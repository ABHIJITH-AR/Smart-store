import { Shield, BookOpen } from "lucide-react";
import { motion } from "motion/react";

interface PolicyPageProps {
  type: "privacy" | "terms" | "refund";
}

export default function PolicyPage({ type }: PolicyPageProps) {
  const getPolicyContent = () => {
    switch (type) {
      case "privacy":
        return {
          title: "Privacy Policy",
          tagline: "How Smart Store manages, utilizes, and protects your operational information.",
          lastUpdated: "June 09, 2026",
          sections: [
            {
              heading: "1. Information We Collect",
              content: "To facilitate our specialized Cash on Delivery (COD) services and WhatsApp dispatch confirmation, we collect minimal transit information. This includes your Full Name, Mobile Phone Number, Delivery Address, Pincode State, District, and optional landmarks. We do not solicit, process, or store credit card numbers, bank accounts, or digital wallets."
            },
            {
              heading: "2. How We Use Informational Records",
              content: "Your operational name, telephone numbers, and structural house address are purely processed to package and deliver your ordered premium product parcels. We share these records strictly with our logistics transit agencies (e.g., Delhivery, Blue Dart) who act as authorized couriers."
            },
            {
              heading: "3. Retention of Delivery Records",
              content: "All physical order items, customer addresses, and dispatch tickets are retained securely solely until successful delivery transit and replacement warranty terms expire. This prevents historical databases from being vulnerable to unauthorized access."
            },
            {
              heading: "4. Your Consent & Cookies",
              content: "By submitting your order form and transferring to our official WhatsApp service line (+91 7012700636), you grant consent to fulfill the delivery under these bounds. We use local client cache keys purely to preserve your active cart and design layout selections safely."
            }
          ]
        };
      case "terms":
        return {
          title: "Terms & Conditions",
          tagline: "Legal framework defining your rights and obligations when transacting with Smart Store.",
          lastUpdated: "June 09, 2026",
          sections: [
            {
              heading: "1. Agreement to Terms",
              content: "By visiting our website and placing premium product orders, you acknowledge that you have read, understood, and accept these standard terms of commerce."
            },
            {
              heading: "2. COD Integrity Commitments",
              content: "Because we bear substantial forward and return shipping charges to offer 100% Free Cash on Delivery (COD) inside India, customers are requested to maintain high shopping integrity. Please ensure you are available physically at your provided coordinates to receive the courier parcel and execute the cash checkout."
            },
            {
              heading: "3. Real-time Product Visual Representation",
              content: "Product photos represented on Smart Store are real designs captures. Due to ambient light deviations, subtle visual shades might slightly differ inside residential rooms. High structural standards are fully guaranteed."
            },
            {
              heading: "4. Pricing Accuracy",
              content: "We strive to display prices correctly at ₹229, ₹239, and ₹249. In rare instances of visual layout errors, we reserve the right to cancel or amend orders with immediate notification on your WhatsApp telephone."
            }
          ]
        };
      case "refund":
        return {
          title: "Return & Refund Policy",
          tagline: "Our 7-Day Defect Protection and Replacement Assurance Rules inside India.",
          lastUpdated: "June 09, 2026",
          sections: [
            {
              heading: "1. 7-Day Replacement Assurance",
              content: "If your purchased product arrives physically damaged, visually defective, or fails to operate properly upon arrival, you are eligible for an instant free replacement or full refund. To initiate this, contact our WhatsApp Support (+91 7012700636) within 7 calendar days of your delivery date."
            },
            {
              heading: "2. Unboxing Video Obligation",
              content: "To safeguard our operations against rare merchant claims, we mandate that customers record a continuous, unedited unboxing video starting from the sealed outer polybag opening down to visual crown operations. This secures immediate, dispute-free claim approvals."
            },
            {
              heading: "3. Refund Methodology",
              content: "Once physical damage is verified by our team on WhatsApp, we will either initiate an express courier return replacement or directly refund your paid amount via Google Pay, PhonePe, Paytm, or direct IMPS Bank Transfer as preferred by you. All transits are entirely free."
            }
          ]
        };
    }
  };

  const policy = getPolicyContent();

  return (
    <div className="bg-stone-50/50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-stone-900">
            {policy.title}
          </h2>
          <p className="text-stone-500 text-sm max-w-xl mx-auto font-light leading-relaxed">
            {policy.tagline}
          </p>
          <div className="text-[11px] text-stone-400 font-mono">
            Last Updated: {policy.lastUpdated}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-100 shadow-sm space-y-8">
          {policy.sections.map((sect, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-display text-lg font-bold text-stone-900 border-b border-stone-100 pb-2">
                {sect.heading}
              </h3>
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">
                {sect.content}
              </p>
            </div>
          ))}
        </div>

        <div className="p-6 bg-forest-900 text-white rounded-2xl flex flex-col sm:flex-row items-center gap-4 justify-between bg-[#0d3629]">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-bold text-sm">Need help regarding these legal terms?</h4>
            <p className="text-stone-300 text-xs font-light">Get instant assistance from our WhatsApp service center.</p>
          </div>
          <a
            href="https://wa.me/917012700636"
            target="_blank"
            className="bg-amber-400 hover:bg-amber-300 text-forest-900 text-xs font-semibold px-4 py-2.5 rounded-lg transition"
          >
            Connect on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
