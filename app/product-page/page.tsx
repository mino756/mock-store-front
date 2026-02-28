'use client'

import Image from 'next/image';
import { motion } from "framer-motion"
import FadeInSection from "@/components/FadeInSection";

export default function Page() {
  

  return (

    <FadeInSection>
      <motion.div
  className="min-h-full grid grid-cols-1 md:grid-cols-3 items-start justify-between gap-5 p-16 md:p-30 md:gap-20"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>
        <a href="product-page/product-1">
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{
      y: -8,
      scale: 1.03,
    }}
    className="bg-pink-300/80 rounded-xl shadow-lg shadow-black/50 p-4 mb-30"
  >
            <div className="w-full h-52 p-2 relative">
              <Image
                className="object-cover"
                src="/pngtree-3d-beauty-cosmetics-product-design-png-image_3350325-removebg-preview.png"
                alt="Cosmetics Product"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <button className="w-full py-2 text-white rounded-lg bg-pink-400 hover:bg-pink-500 transition-colors duration-300">
              Buy
            </button>
          </motion.div>
        </a>

        <a href="product-page/product-2">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="bg-sky-300/80 rounded-xl shadow-lg shadow-black/50 p-4 mb-30"
          >
            <div className="w-full h-52 p-2 relative">
              <Image
                className="object-cover"
                src="/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323-removebg-preview.png"
                alt="Cosmetics Product"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="h-20 flex justify-between items-center">
              <h1 className="font-bold text-lg text-gray-900">
                Cosmetics Collection
              </h1>
              <h4 className="text-gray-600">⭐4.1</h4>
            </div>

            <h5 className="text-black/80 font-semibold text-sm mb-3">
              In stock: 22
            </h5>

            <button className="w-full py-2 text-white rounded-lg bg-sky-400 hover:bg-sky-500 transition-colors duration-300">
              Buy
            </button>
          </motion.div>
        </a>

        {/* Product 3 */}
        <a href="product-page/product-3">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            className="bg-green-300/80 rounded-xl shadow-lg shadow-black/50 p-4 mb-30"
          >
            <div className="w-full h-52 p-2 relative">
              <Image
                className="object-cover"
                src="/pngtree-3d-beauty-cosmetics-product-design-png-image_6391025-removebg-preview.png"
                alt="Cosmetics Product"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="h-20 flex justify-between items-center">
              <h1 className="font-bold text-lg text-gray-900">
                Cosmetics Collection
              </h1>
              <h4 className="text-gray-600">⭐4.9</h4>
            </div>

            <h5 className="text-black/80 font-semibold text-sm mb-3">
              In stock: 4
            </h5>

            <button className="w-full py-2 text-white rounded-lg bg-green-500 hover:bg-green-600 transition-colors duration-300">
              Buy
            </button>
          </motion.div>
        </a>
        
      </motion.div>
      



<div className="container bg-white/10 rounded rounded-xl shadow-2xl shadow-black mx-auto mt-8 mb-8 py-12 text-center p-18 space-y-8 mb-12">
             <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">Why You Should Buy From Us</h1>

<p className="text-lg md:text-xl text-gray-700">
When you choose our products, you’re not just buying cosmetics — you’re investing in a premium self-care experience.
</p>

<p className="text-lg md:text-xl text-gray-700">
Every item in our collection is carefully formulated with a powerful blend of clinically tested ingredients and nature-inspired extracts, designed to deliver visible, long-lasting results while keeping your skin healthy and balanced.
</p>

<p className="text-lg md:text-xl text-gray-700">
Unlike mass-produced beauty products, our formulas are developed with precision and care, ensuring each product nourishes, protects, and enhances your natural glow.
</p>
</div>

    </FadeInSection>

  );
}