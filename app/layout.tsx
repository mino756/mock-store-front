import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/dist/client/link";
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arua - store",
  description: "store for cosmetics and beauty products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-pink-400/90 via-pink-300 to-gray-300`}
      ><SpeedInsights/><nav className="flex items-center justify-between px-10 py-2 bg-white/30 backdrop-blur-md shadow-md sticky top-0 z-50">
        <a href="/">
        <h1 className="text-lg md:text-4xl font-bold md:font-extrabold text-black">Aura</h1>
        </a>
        <div className="flex gap-8 text-gray-800 border-b border-gray-900/20 text-sm ">
          <Link href="/" className="hover:text-pink-500 transition md:text-lg">
            Home
          </Link>
          <Link href="/product-page" className="hover:text-pink-500 transition md:text-lg">
            Products
          </Link>
          <Link href="/faq" className="hover:text-pink-500 transition md:text-lg">
            FAQ
          </Link>
        </div>
        <Link href="/cart">
          <img src="/263142.png" alt="cart" className="w-6 h-6 object-contain" />
        </Link>
      </nav>

        {children}
 

<footer className="bg-gradient-to-br from-pink-200 via-pink-300 to-sky-100">
  <div className="w-full max-w-screen-xl mx-auto px-6 py-12 md:py-16">
    {/* Main Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-18 mb-10">
      
      {/* Brand Column */}
      <div className="space-y-4">
        <a href="/" className="inline-block text-2xl font-bold text-gray-900 hover:scale-105 transition-transform">
          Arua™
        </a>
        <p className="text-gray-700  text-sm leading-relaxed max-w-xs">
          Creating beautiful digital experiences with passion and precision. Join us on our journey.
        </p>
      </div>

      {/* Quick Links */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900  uppercase tracking-wider">
          Quick Links
        </h3>
        <nav className="flex flex-col space-y-2">
          <a href="/faq" className="text-gray-700  hover:text-pink-600 transition-colors text-sm w-fit">About Us</a>
          <a href="/privacy-policy" className="text-gray-700  hover:text-pink-600 transition-colors text-sm w-fit">Privacy Policy</a>
          <a href="/licensing" className="text-gray-700  hover:text-pink-600 transition-colors text-sm w-fit">Licensing</a>
          <a href="/contact" className="text-gray-700  hover:text-pink-600 transition-colors text-sm w-fit">Contact</a>
        </nav>
      </div>

      {/* Social & Connect */}
      <div className="space-y-6 flex flex-col items-start">
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
          Connect
        </h3>
        <div className="flex space-x-3">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/50 hover:-translate-y-1"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-900/50 hover:-translate-y-1 font-bold text-lg"
            aria-label="X (Twitter)"
          >
            W
          </a>
          
          
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-700 hover:from-blue-700 hover:to-blue-800 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.824 0-9.736h3.554v1.378c.43-.664 1.195-1.612 2.905-1.612 2.122 0 3.714 1.388 3.714 4.37v5.6zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.713 0-.956.77-1.715 1.958-1.715 1.187 0 1.914.759 1.939 1.715 0 .952-.752 1.713-1.982 1.713zm1.582 11.597H3.635V9.713h3.284v10.739zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>
          </a>

          
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-t border-gray-400/20 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-700 text-center md:text-left">
          © 2026 <span className="font-semibold text-gray-900">Arua™</span>. All Rights Reserved.
        </p>
        
        <div className="flex items-center space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-pink-600 ">Terms</a>
          <span className="w-1 h-1 rounded-full bg-gray-400 "></span>
          <a href="#" className="hover:text-pink-600 ">Sitemap</a>
          <span className="w-1 h-1 rounded-full bg-gray-400"></span>
          <a href="#" className="hover:text-pink-600 ">Cookies</a>
        </div>
      </div>
    </div>
  </div>
</footer>
      </body>
    </html>
  );
}
