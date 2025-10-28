'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [tripType, setTripType] = useState('one-way');
  const [transportMode, setTransportMode] = useState('road');

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book a Trip</h2>
          <p className="text-lg text-gray-600">What We Offer</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Trip Type Selector */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setTripType('one-way')}
              className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
                tripType === 'one-way' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              One Way
            </button>
            <button
              onClick={() => setTripType('round-trip')}
              className={`px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
                tripType === 'round-trip' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Round Trip
            </button>
          </div>

          {/* Transport Mode Selector */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setTransportMode('road')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
                transportMode === 'road' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-bus-2-line"></i>
              </div>
              Road
            </button>
            <button
              onClick={() => setTransportMode('air')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
                transportMode === 'air' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-plane-line"></i>
              </div>
              Air
            </button>
            <button
              onClick={() => setTransportMode('bundle')}
              className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer whitespace-nowrap ${
                transportMode === 'bundle' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <div className="w-4 h-4 flex items-center justify-center">
                <i className="ri-apps-2-line"></i>
              </div>
              Air + Ground Bundle
            </button>
          </div>

          {/* Booking Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Lagos"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                    <i className="ri-map-pin-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ibadan"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                    <i className="ri-map-pin-line text-gray-400"></i>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2024-06-22"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm pr-8"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Passengers</label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="1"
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center">
                    <i className="ri-user-line text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-red-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-600 transition cursor-pointer whitespace-nowrap"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}