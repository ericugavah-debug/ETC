
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from './HeroSection';
import BookingSection from './BookingSection';
import FeaturesSection from './FeaturesSection';
import StatsSection from './StatsSection';
import TestimonialsSection from './TestimonialsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BookingSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
