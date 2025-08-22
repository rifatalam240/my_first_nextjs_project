"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to MyShop
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Explore amazing products and manage your shop with ease. Login to add new products!
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              View Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <Image
            src="/hero-image.png" // public folder এ রাখুন
            alt="Hero Image"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
