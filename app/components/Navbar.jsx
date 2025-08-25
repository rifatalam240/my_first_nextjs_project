"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  // Flicker-proof theme init
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  // Prevent SSR hydration mismatch
  if (!mounted) return null;

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="bg-gradient-to-r from-[#f8fafc] via-[#e9e6ff] to-[#a48cf0] dark:from-[#23255A] dark:via-[#23255A] dark:to-[#23255A] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight"
        >
          <FaShoppingCart className="text-green-500 text-3xl" />
          MyShop
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <Link href="/" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link href="/products" className="hover:text-green-600 transition">
            Products
          </Link>
          {session && (
            <Link
              href="/dashboard/add-product"
              className="hover:text-green-600 transition"
            >
              Add Product
            </Link>
          )}

          {session ? (
            <>
              <span className="px-3 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {session.user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-4 py-1 rounded-full border-2 border-green-500 text-green-700 dark:text-green-300 hover:bg-green-500 hover:text-white transition"
            >
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 px-3 py-1 rounded-full border text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-2"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 dark:text-gray-200 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col space-y-4 px-4 py-6 bg-white/90 dark:bg-gray-900/95 text-lg font-medium shadow-lg rounded-b-xl">
          <Link href="/" onClick={() => setOpen(false)} className="hover:text-green-600 transition">Home</Link>
          <Link href="/products" onClick={() => setOpen(false)} className="hover:text-green-600 transition">Products</Link>
          {session && (
            <Link href="/dashboard/add-product" onClick={() => setOpen(false)} className="hover:text-green-600 transition">
              Add Product
            </Link>
          )}

          {session ? (
            <>
              <span className="px-3 py-1 rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                {session.user.email}
              </span>
              <button
                onClick={() => { signOut({ callbackUrl: "/" }); setOpen(false); }}
                className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="px-4 py-1 rounded-full border-2 border-green-500 text-green-700 dark:text-green-300 hover:bg-green-500 hover:text-white transition"
            >
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full border text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-2 mt-2"
            aria-label="Toggle Dark Mode"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      )}
    </header>
  );
}
