'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Nigerian%20university%20students%20with%20backpacks%20and%20luggage%20walking%20together%20on%20a%20modern%20university%20campus%20with%20buses%20and%20transportation%20in%20the%20background%2C%20bright%20sunny%20day%2C%20modern%20educational%20setting%2C%20diverse%20group%20of%20happy%20students%2C%20clean%20minimalist%20background%20perfect%20for%20text%20overlay&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Safe, Affordable Transport for <span className="text-red-400">Students</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Providing transportation services for university students travelling between states, by air or by road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition whitespace-nowrap cursor-pointer">
              Get Started
            </Link>
            <Link href="/about" className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/30 transition whitespace-nowrap cursor-pointer">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}