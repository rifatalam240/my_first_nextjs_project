"use client";

import { signIn } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e9e6ff] via-[#f8fafc] to-[#a48cf0] px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center flex flex-col items-center">
        {/* Login Illustration */}
        <div className="mb-6">
          <FaUserCircle className="mx-auto text-[100px] text-[#a48cf0]" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900 drop-shadow">
          Welcome Back!
        </h1>
        <p className="mb-6 text-gray-600 text-base md:text-lg">
          Login to access product management
        </p>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-white border border-gray-300 rounded-lg shadow hover:shadow-md transition text-gray-800 font-semibold mb-4"
        >
          <FcGoogle className="text-xl" />
          Continue with Google
        </button>

        {/* Optional: Footer Text */}
        <p className="mt-2 text-sm text-gray-400">
          By continuing, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}
