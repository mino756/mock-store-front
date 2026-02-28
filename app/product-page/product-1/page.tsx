"use client";

import ProductFadeIn from "@/components/productfadin";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { 
  Heart, 
  Share2, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  Star,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart
} from "lucide-react";

// Product data (in real app, this would come from API/database)
const product = {
  id: 1,
  name: "Cosmetics Collection",
  price: 89.00,
  originalPrice: 120.00,
  rating: 4.5,
  reviewCount: 128,
  stock: 12,
  images: [
    "/pngtree-3d-beauty-cosmetics-product-design-png-image_3350325-removebg-preview.png",
    "/products/product-2.png",
    "/products/product-3.png",
    "/products/product-4.png"
  ],
  variants: [
    { name: "Size", options: ["Travel Kit", "Regular", "Deluxe"] },
    { name: "Shade", options: ["Natural", "Rose", "Ivory"] }
  ],
  description: `Elevate your daily beauty routine with our expertly curated Cosmetics Collection. Crafted with high-quality, skin-loving ingredients, this set delivers long-lasting wear, a flawless finish, and effortless elegance from morning to night.`,
  features: [
    "Cruelty-free and vegan-friendly formulas",
    "Dermatologist tested for all skin types",
    "Long-lasting 12-hour wear",
    "Non-comedogenic and breathable"
  ],
  shipping: "Free shipping on orders over $50. Estimated delivery 3-5 business days.",
  returns: "30-day hassle-free returns. Full refund guaranteed."
};



export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "details" | "reviews">("description");
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleVariantSelect = (variantName: string, option: string) => {
    setSelectedVariants(prev => ({ ...prev, [variantName]: option }));
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <ProductFadeIn>
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-200 to-pink-300/90">
      {/* Breadcrumb */}
      <nav className="px-1 sm:px-8 py-8
      ">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li><Link href="/" className="hover:text-pink-600 transition">Home</Link></li>
          <ChevronRight className="w-4 h-4" />
          <li><Link href="/product-page" className="hover:text-pink-600 transition">Products</Link></li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <main className="px-4 sm:px-6 py-6">
        {/* Main Product Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/30 shadow-xl rounded-2xl shadow-5xl shadow-black/40  overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - Image Gallery */}
              <div className="p-6 lg:p-10 bg-white/60 shadow-xl rounded-2xl shadow-5xl shadow-black/40  overflow-hidden">
                {/* Main Image */}
                <div className="relative aspect-square bg-white/40 shadow-xl rounded-2xl shadow-5xl shadow-black/40  overflow-hidden mb-4">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                  />
                  {/* Discount Badge */}
                  {discount > 0 && (
                    <span className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -{discount}%
                    </span>
                  )}
                  {/* Wishlist Button */}
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-md hover:shadow-lg transition"
                  >
                    <Heart 
                      className={`w-5 h-5 transition ${isWishlisted ? "fill-pink-500 text-pink-500" : "text-gray-600"}`} 
                    />
                  </button>
                </div>
                
                {/* Thumbnail Gallery */}
                <div className="flex gap-3 justify-center">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                        selectedImage === idx ? "border-pink-500" : "border-transparent hover:border-pink-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} view ${idx + 1}`}
                        fill
                        className="object-contain p-2 bg-white"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE - Product Details */}
              <div className="p-6 lg:p-10 flex flex-col">
                {/* Title & Rating */}
                <div className="mb-4">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating) 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-xl text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`w-3 h-3 rounded-full ${product.stock > 10 ? "bg-green-500" : product.stock > 0 ? "bg-yellow-500" : "bg-red-500"}`} />
                  <span className={`font-medium ${product.stock > 10 ? "text-green-600" : product.stock > 0 ? "text-yellow-600" : "text-red-600"}`}>
                    {product.stock > 10 ? "In Stock" : product.stock > 0 ? `Only ${product.stock} left!` : "Out of Stock"}
                  </span>
                </div>

                {/* Variant Selectors */}
                <div className="space-y-4 mb-6">
                  {product.variants.map((variant) => (
                    <div key={variant.name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {variant.name}: {selectedVariants[variant.name] || "Select an option"}
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {variant.options.map((option) => (
                          <button
                            key={option}
                            onClick={() => handleVariantSelect(variant.name, option)}
                            className={`px-4 py-2 rounded-lg border-b border-white transition ${
                              selectedVariants[variant.name] === option
                                ? "border-pink-500 bg-pink-50 text-pink-700"
                                : "border-pink-200 hover:border-pink-300"
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quantity & Actions */}
                <div className="space-y-4 mb-6">
                  <label className="block text-sm font-medium text-gray-700">Quantity</label>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border-2 border-gray-200 rounded-xl">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="p-3 hover:bg-gray-100 transition"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        className="p-3 hover:bg-gray-100 transition"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-8">
                  <button
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition ${
                      isAddedToCart
                        ? "bg-green-500 text-white"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                    }`}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {isAddedToCart ? "Added to Cart!" : "Add to Cart"}
                  </button>
                  <button className="flex-1 bg-pink-500 text-white py-4 rounded-xl font-semibold hover:bg-pink-600 transition">
                    Buy Now
                  </button>
                  <button className="p-4 border-2 border-gray-200 rounded-xl hover:border-pink-300 transition">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="flex flex-col items-center text-center">
                    <Truck className="w-6 h-6 text-pink-500 mb-1" />
                    <span className="text-xs text-gray-600">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <ShieldCheck className="w-6 h-6 text-pink-500 mb-1" />
                    <span className="text-xs text-gray-600">Secure Payment</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <RotateCcw className="w-6 h-6 text-pink-500 mb-1" />
                    <span className="text-xs text-gray-600">Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information Tabs */}
          <div className="mt-8 bg-white/90 shadow-xl rounded-2xl shadow-5xl shadow-black/40 overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                {(["description", "details", "reviews"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 font-medium capitalize transition ${
                      activeTab === tab
                        ? "text-pink-600 border-b-2 border-pink-600"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 lg:p-10">
              {activeTab === "description" && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {product.description}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <span className="w-2 h-2 bg-pink-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {activeTab === "details" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Shipping Information</h3>
                    <p className="text-gray-700">{product.shipping}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Return Policy</h3>
                    <p className="text-gray-700">{product.returns}</p>
                  </div>
                </div>
              )}
              
              {activeTab === "reviews" && (
                <div className="text-center py-10">
                  <p className="text-gray-600 mb-4">Reviews coming soon!</p>
                  <button className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition">
                    Write a Review
                  </button>
                </div>
              )}
            </div>
          </div>


          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link
              href="/product-page"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gray-100 text-gray-800 rounded-xl hover:bg-gray-200 transition"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </main>
    </div>
    </ProductFadeIn>
  );
}