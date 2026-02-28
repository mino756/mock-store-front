"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ChevronDown, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  HelpCircle,
  Truck,
  CreditCard,
  RefreshCcw,
  Package,
  Sparkles
} from "lucide-react";

// FAQ Categories and Questions
const faqCategories = [
  {
    id: "orders",
    name: "Orders & Shipping",
    icon: Package,
    questions: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 3-5 business days. Express shipping (1-2 business days) is available at checkout. Free shipping is offered on all orders over $50!"
      },
      {
        q: "Can I track my order?",
        a: "Absolutely! Once your order ships, you'll receive an email with a tracking number. You can also track your order in your account dashboard under 'Order History'."
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days depending on your location."
      },
      {
        q: "What if my package is lost or damaged?",
        a: "We take full responsibility for lost or damaged packages. Contact our support team within 48 hours of delivery, and we'll send a replacement or issue a full refund."
      }
    ]
  },
  {
    id: "returns",
    name: "Returns & Refunds",
    icon: RefreshCcw,
    questions: [
      {
        q: "What is your return policy?",
        a: "We offer a 30-day hassle-free return policy. If you're not completely satisfied, you can return any unused product in its original packaging for a full refund."
      },
      {
        q: "How do I initiate a return?",
        a: "Simply log into your account, go to 'Order History', select the order, and click 'Return Items'. We'll provide a prepaid return label for your convenience."
      },
      {
        q: "When will I receive my refund?",
        a: "Refunds are processed within 3-5 business days after we receive your return. The funds will appear in your account within 5-10 business days depending on your bank."
      },
      {
        q: "Can I exchange a product instead of returning it?",
        a: "Yes! You can exchange products for a different shade or size within 30 days. Exchanges are subject to availability."
      }
    ]
  },
  {
    id: "payment",
    name: "Payment & Billing",
    icon: CreditCard,
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Buy Now Pay Later options like Klarna and Afterpay."
      },
      {
        q: "Is my payment information secure?",
        a: "Absolutely! We use industry-standard SSL encryption to protect your data. We never store your full credit card information on our servers."
      },
      {
        q: "Can I use multiple discount codes?",
        a: "Only one discount code can be applied per order. However, you can combine a discount code with free shipping offers!"
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes! Digital gift cards are available in denominations from $25 to $500. They never expire and can be used on any product."
      }
    ]
  },
  {
    id: "products",
    name: "Products & Ingredients",
    icon: Sparkles,
    questions: [
      {
        q: "Are your products cruelty-free?",
        a: "Yes! All our products are 100% cruelty-free. We never test on animals and are certified by Leaping Bunny."
      },
      {
        q: "Do you have products for sensitive skin?",
        a: "Absolutely! We have a dedicated Sensitive Skin line that's fragrance-free, hypoallergenic, and dermatologist-tested. Look for the 'Gentle' badge on products."
      },
      {
        q: "Where can I find ingredient lists?",
        a: "Full ingredient lists are available on each product page under the 'Details' tab. You can also scan the QR code on product packaging."
      },
      {
        q: "What is the shelf life of your products?",
        a: "Unopened products last 24-36 months. Once opened, we recommend using them within 12 months for optimal freshness. The PAO symbol on packaging indicates this."
      }
    ]
  }
];

// Quick links for common questions
const quickLinks = [
  { icon: Truck, label: "Track Order", href: "#" },
  { icon: RefreshCcw, label: "Start Return", href: "#" },
  { icon: Package, label: "Shipping Info", href: "#" },
  { icon: MessageCircle, label: "Live Chat", href: "#" },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = useCallback((categoryId: string, questionIndex: number) => {
    const key = `${categoryId}-${questionIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  // Memoize filtered categories to avoid recalculation on every render
  const filteredCategories = useMemo(() => {
    return faqCategories.map(cat => ({
      ...cat,
      questions: cat.questions.filter(
        q => 
          q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    })).filter(cat => cat.questions.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100 py-20 relative overflow-hidden">
        {/* Static background elements - removed animations */}
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl"
          style={{ willChange: "auto" }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl"
          style={{ willChange: "auto" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-pink-600" />
              <span className="text-pink-700 font-medium">Help Center</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
              How Can We <span className="text-pink-600">Help You?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
              Find answers to frequently asked questions about orders, shipping, returns, and our products.
            </p>

            {/* Search Bar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/10 border-0 focus:ring-2 focus:ring-pink-400 text-gray-800 placeholder-gray-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
<section>
      {/* Quick Links */}
      
        <div className="max-w-5xl mx-auto mt-24 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {quickLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col items-center gap-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/10 hover:bg-white/80 transition-colors"
              >
                <div className="p-3 bg-pink-400 rounded-xl">
                  <link.icon className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold text-gray-800">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      

      {/* FAQ Categories */}
      
        <div className="max-w-5xl mx-auto mt-18 px-5">
          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === null
                  ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                  : "bg-white/60 text-gray-700 hover:bg-white/80"
              }`}
            >
              All
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30"
                    : "bg-white/60 text-gray-700 hover:bg-white/80"
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-6 mb-18 px-2">
            {filteredCategories
              .filter(cat => activeCategory === null || cat.id === activeCategory)
              .map((category, catIdx) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + catIdx * 0.1 }}
                className="bg-white/70 backdrop-blur-md rounded-3xl shadow-xl shadow-black/10 overflow-hidden"
              >
                {/* Category Header */}
                <div className="p-6 bg-gradient-to-r from-pink-400/20 to-sky-400/20 border-b border-pink-200/50">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-pink-500 rounded-xl">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                  </div>
                </div>

                {/* Questions */}
                <div className="divide-y divide-gray-100">
                  {category.questions.map((item, idx) => {
                    const isOpen = openItems[`${category.id}-${idx}`];
                    return (
                      <div key={idx} className="">
                        <button
                          onClick={() => toggleItem(category.id, idx)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-pink-50/50 transition-colors"
                        >
                          <span className="font-semibold text-gray-800 pr-4">{item.q}</span>
                          <div
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease-in-out" }}
                            className="flex-shrink-0"
                          >
                            <ChevronDown className="w-5 h-5 text-pink-500" />
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                                {item.a}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {searchQuery && filteredCategories.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No results found</h3>
              <p className="text-gray-500">Try searching with different keywords or contact us directly.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl shadow-black/20 p-8 md:p-12 text-center">
            <div className="inline-block mb-6">
              <MessageCircle className="w-16 h-16 text-pink-500" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
              Our friendly support team is here to help. Reach out and we'll get back to you within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:support@beauty.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition shadow-lg shadow-pink-500/30"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-50 transition border-2 border-gray-200"
              >
                <Phone className="w-5 h-5" />
                Call Support
              </motion.a>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Available Monday - Friday, 9AM - 6PM EST
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Back to Home */}
      <section className="px-4 pb-12 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-white/60 backdrop-blur-sm text-gray-800 rounded-xl hover:bg-white/80 transition font-medium"
        >
          ← Back to Home
        </Link>
      </section>
    </div>
  );
}