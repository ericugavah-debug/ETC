'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <i className="ri-bus-2-line text-2xl text-red-500"></i>
            </div>
            <span className="text-xl font-semibold text-gray-900">EduTransConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/book" className="text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Book a Trip
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Why Choose Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 whitespace-nowrap cursor-pointer">
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link href="/book" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Book a Trip
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Why Choose Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 cursor-pointer">
                Contact
              </Link>
              <Link href="/login" className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 text-center cursor-pointer">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}