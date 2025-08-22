"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession(); // NextAuth session
  const [isDark, setIsDark] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-900 dark:text-white">
          MyShop
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 text-gray-700 dark:text-gray-200">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/products" className="hover:text-blue-500">Products</Link>

          {session ? (
            <>
              <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100">
                {session.user.email}
              </span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 border rounded hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="px-3 py-1 border rounded hover:bg-green-500 hover:text-white transition"
            >
              Login
            </Link>
          )}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDark}
            className="ml-4 px-2 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden flex flex-col space-y-2 p-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setOpen(false)}>Products</Link>

          {session ? (
            <>
              <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100">
                {session.user.email}
              </span>
              <button
                onClick={() => { signOut({ callbackUrl: "/" }); setOpen(false); }}
                className="px-3 py-1 border rounded hover:bg-red-500 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="px-3 py-1 border rounded hover:bg-green-500 hover:text-white transition"
            >
              Login
            </Link>
          )}

          <button
            onClick={toggleDark}
            className="mt-2 px-2 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </nav>
      )}
    </header>
  );
}
