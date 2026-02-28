
import Image from 'next/image';
import FadeInSection from "@/components/FadeInSection";





export default function Page() {
  return (
    <main>
      
    <FadeInSection className=" min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100 py-20">

  <div className="container bg-pink-100/10 rounded-2xl shadow-2xl shadow-black/50 mx-auto text-center p-18 space-y-8">

    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 ">
      Discover Your Beauty Collection
    </h1>

    <p className="text-medium md:text-xl text-gray-700   ">
      Premium cosmetics designed to enhance your natural glow.<span>
      Explore our latest arrivals and find your perfect match.</span>
    </p>

    <div className="flex justify-center gap-4">
      <a href="product-page">
        <button className="text-sm px-8 py-2 bg-pink-500 text-white rounded-full shadow-lg md:px-8 py-3 hover:bg-pink-600 transition duration-300 cursor-pointer">
          Shop
        </button>
      </a>

      <a href="#">
        <button className="text-sm px-8 py-2 bg-white text-gray-800 rounded-full shadow-lg md:px-8 py-3 hover:bg-gray-100 transition duration-300 cursor-pointer">
          Learn 
        </button>
      </a>
    </div>

  </div>
</FadeInSection>

    

    <FadeInSection className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100">
  <div className="min-h-screen grid justify-center px-2 bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 
                    bg-pink-100/10 rounded-xl shadow-2xl shadow-black/50 mx-auto p-10 my-18 mt-25 space-y-8 md:space-y-0 md:p-20 md:gap-28 ">

      {/* Product 1 */}
      <a href="product-page/product-1">
        <div className="bg-pink-300/80 rounded-xl shadow-lg shadow-black/50 p-4 hover:scale-105 transition-transform duration-300">
          <div className="w-full h-52 p-2 relative">
            <Image
              className="object-cover"
              src="/pngtree-3d-beauty-cosmetics-product-design-png-image_3350325-removebg-preview.png"
              alt="Cosmetics Product"
              fill
              
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="h-20 flex justify-between items-center">
            <h1 className="font-bold text-lg text-gray-900">
              Cosmetics Collection
            </h1>
            <h4 className="text-gray-600">⭐4.8</h4>
          </div>

          <h5 className="text-black/80 font-semibold text-sm mb-3">
            In stock: 10
          </h5>

          <button className="w-full py-2 text-white rounded-lg bg-pink-400 hover:bg-pink-500 transition-colors duration-300">
            Buy
          </button>
        </div>
      </a>

      {/* Product 2 */}
      <a href="product-page/product-2">
        <div className="bg-sky-300/80 rounded-xl shadow-lg shadow-black/50 p-4 hover:scale-105 transition-transform duration-300">
          <div className="w-full h-52 p-2 relative">
            <Image
              className="object-cover"
              src="/pngtree-3d-beauty-cosmetics-product-design-png-image_3350323-removebg-preview.png"
              alt="Cosmetics Product"
              fill
              
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
        </div>
      </a>

      {/* Product 3 */}
      <a href="product-page/product-3">
        <div className="bg-green-300/80 rounded-xl shadow-lg shadow-black/50 p-4 hover:scale-105 transition-transform duration-300">
          <div className="w-full h-52 p-2 relative">
            <Image
              className="object-cover"
              src="/pngtree-3d-beauty-cosmetics-product-design-png-image_6391025-removebg-preview.png"
              alt="Cosmetics Product"
              fill
              
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
        </div>
      </a>

    </div>
  </div>
</FadeInSection>

<FadeInSection className="min-h-screen bg-gradient-to-br from-pink-200/90 via-pink-300 to-sky-200 p-1">

 <div className="min-h-screen grid justify-center px-2 bg-gradient-to-br from-pink-200/90 via-pink-300 to-sky-200 p-8">
<div className="container bg-white/10 rounded rounded-xl shadow-2xl shadow-black mx-auto mt-12 text-center p-18 space-y-8">
<h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">Why Choose Us</h1>
<p className="text-lg md:text-xl text-gray-700">We don’t just create cosmetics — we craft experiences.</p>
<p className="text-lg md:text-xl text-gray-700"> Every product in our collection is carefully formulated using a powerful blend of clinically tested ingredients and nature-inspired extracts to deliver visible, long-lasting results without compromising skin health.</p>
<p className="text-lg md:text-xl text-gray-700">Unlike mass-produced beauty products, our formulas are developed with precision, ensuring each item nourishes, protects, and enhances your natural glow.</p>

</div>
<div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-12 md:p-20">
  <div className="container bg-white/10 rounded rounded-xl shadow-2xl shadow-black mx-auto my-2 mb-12 text-center p-15 ">
  <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-4">🌿 Skin-Loving Ingredients</h1>
  <ul className="list-disc list-inside text-left text-xl text-gray-700">
    <li className="mb-2">Dermatologist-tested formulations</li>
    <li className="mb-2">Paraben-free & sulfate-free ingredients</li>
    <li className="mb-2">Cruelty-free and ethically sourced materials</li>
    <li className="mb-2">Non-comedogenic & skin-safe compounds</li>
  </ul>
    <p className=" md:text-medium font-extrabold text-gray-800 mt-6 text-left">We believe beauty should never come at the cost of your health.</p>
  </div>
  <div className="container bg-white/10 rounded rounded-xl shadow-2xl shadow-black mx-auto my-2 mb-12 text-center p-15 ">
  <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-4">🔬 Quality You Can Trust</h1>
  <ul className="list-disc list-inside text-left text-xl text-gray-700">
    <li className="mb-2">Strict quality control testing</li>
    <li className="mb-2">Stability & safety analysis</li>
    <li className="mb-2">Performance validation</li>
    <li className="mb-2">Packaging durability checks</li>
  </ul>
    <p className=" md:text-medium font-extrabold text-gray-800 mt-6 text-left">From concept to delivery, we maintain premium standards so you receive nothing but excellence.</p>
  </div>
  <div className="container bg-white/10 rounded rounded-xl shadow-2xl shadow-black mx-auto my-2 mb-12 text-center p-15 ">
  <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 mb-4">🚚 Fast & Reliable </h1>
  <ul className="list-disc list-inside text-left text-xl text-gray-700">
    <li className="mb-2">Dermatologist-tested formulations</li>
    <li className="mb-2">Paraben-free & sulfate-free ingredients</li>
    <li className="mb-2">Cruelty-free and ethically sourced materials</li>
    <li className="mb-2">Non-comedogenic & skin-safe compounds</li>
  </ul>
  <p className=" md:text-medium font-extrabold text-gray-800 mt-6 text-left">Your beauty essentials, delivered safely to your doorstep.</p>
  </div>
</div>
  </div>
</FadeInSection>
<FadeInSection className="py-12 bg-gradient-to-br from-pink-200/90 via-pink-300 to-sky-200  ">
  <div className="max-w-7xl mx-auto px-4 text-center mt-2 py-20">

    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
      What Our Customers Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-20">

      {/* Testimonial 1 */}
      <div className="bg-white/10 rounded-xl shadow-2xl shadow-black p-6 hover:scale-105 transition-transform duration-300">
        <p className="text-gray-600 mb-4">
          “Absolutely love the quality! My skin feels smoother and healthier.”
        </p>
        <h4 className="font-semibold text-gray-800">— Sarah M.</h4>
        <p className="text-pink-500">⭐⭐⭐⭐⭐</p>
      </div>

      {/* Testimonial 2 */}
      <div className="bg-white/10 rounded-xl shadow-2xl shadow-black p-6 hover:scale-105 transition-transform duration-300">
        <p className="text-gray-600 mb-4">
          “Fast delivery and beautiful packaging. Highly recommend!”
        </p>
        <h4 className="font-semibold text-gray-800">— Emily R.</h4>
        <p className="text-pink-500">⭐⭐⭐⭐⭐</p>
      </div>

      {/* Testimonial 3 */}
      <div className="bg-white/30 rounded-xl shadow-2xl shadow-black p-6 hover:scale-105 transition-transform duration-300">
        <p className="text-gray-600 mb-4">
          “The best cosmetic brand I’ve tried this year.”
        </p>
        <h4 className="font-semibold text-gray-800">— Jessica L.</h4>
        <p className="text-pink-500">⭐⭐⭐⭐⭐</p>
      </div>

    </div>
    
  </div>
</FadeInSection>
</main>
  );
}