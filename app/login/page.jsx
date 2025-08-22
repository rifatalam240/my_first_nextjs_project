"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-10 w-full max-w-md text-center">
        {/* Login Illustration */}
        <div className="mb-6">
          <Image
            src="/login-icon.png" // public folder এ রাখবেন
            alt="Login Illustration"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Welcome Back!
        </h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Login to access product management
        </p>

        {/* Google Login Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/products" })}
          className="flex items-center justify-center gap-3 w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow hover:shadow-md transition text-gray-800 dark:text-gray-100 font-semibold"
        >
          <Image
            src="/google-icon.svg" // public folder এ Google icon রাখুন
            alt="Google Logo"
            width={20}
            height={20}
          />
          Continue with Google
        </button>

        {/* Optional: Footer Text */}
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          By continuing, you agree to our Terms of Service.
        </p>
      </div>
    </div>
  );
}
