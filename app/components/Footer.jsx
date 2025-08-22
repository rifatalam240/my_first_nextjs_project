"use client";

import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left: Logo / Name */}
        <div className="mb-4 md:mb-0 text-xl font-bold">
          MyShop
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
