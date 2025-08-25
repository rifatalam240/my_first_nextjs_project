"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
<section className="
  pt-5 relative min-h-[80vh] flex items-center
  bg-gradient-to-r from-green-100 via-green-50 to-green-100
  dark:bg-gradient-to-r dark:from-red-600 dark:via-red-700 dark:to-red-800
  transition-colors duration-700
">

      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        
        {/* Left: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl dark:text-red-600 md:text-7xl font-extrabold mb-4 
                         text-gray-900  drop-shadow-lg leading-tight">
            Welcome to MyShop
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300">
            Explore amazing products and manage your shop with ease. Login to add new products!
          </p>

          {/* Buttons with Animated Gradient */}
          <div className="flex justify-center md:justify-start gap-4 mb-8">
            {/* View Products Button */}
            <Link
              href="/products"
              className="px-8 py-3 font-semibold rounded-full shadow-lg text-white text-lg
                         bg-gradient-to-r from-green-400 via-green-500 to-green-600
                         hover:from-green-500 hover:via-lime-400 hover:to-green-500
                         transition-all duration-500 ease-in-out"
            >
              View Products
            </Link>

            {/* Login Button */}
            <Link
              href="/login"
              className="px-8 py-3 font-semibold rounded-full text-lg border-2 border-green-500
                         text-green-700 bg-gradient-to-r from-green-100 via-green-50 to-green-100
                         hover:from-green-400 hover:via-green-500 hover:to-green-600
                         hover:text-white transition-all duration-500 ease-in-out
                         dark:text-green-300 dark:border-green-300 dark:bg-gradient-to-r dark:from-green-800 dark:via-green-900 dark:to-green-800 dark:hover:from-green-500 dark:hover:via-lime-400 dark:hover:to-green-500"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center items-center relative">
          <div className="relative w-full max-w-[520px]">
            <Image
              src="/heroimg2.jpg"
              alt="Hero Image"
              width={520}
              height={420}
              className="rounded-3xl shadow-2xl object-cover w-full h-auto 
                         bg-white dark:bg-gray-800 transition-colors duration-700"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
