import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustCategoryStrip } from './components/TrustCategoryStrip';
import { ServicesSection } from './components/ServicesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { MobileBottomBar } from './components/MobileBottomBar';
import { Service } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<Service | null>(null);
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<Service | null>(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);

  const handleOpenBooking = (service?: Service) => {
    if (service) {
      setSelectedServiceForBooking(service);
    } else {
      setSelectedServiceForBooking(null);
    }
    setIsBookingOpen(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategoryFilter(categoryId);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewServiceDetails = (service: Service) => {
    setSelectedServiceForDetail(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F4EF] text-[#2A211D] font-sans antialiased selection:bg-[#B49A7A]/25 selection:text-[#2A211D]">
      {/* Floating Translucent Header */}
      <Header onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Cinematic Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3 Floating Category Cards (Inspired by reference) */}
        <TrustCategoryStrip onSelectCategory={handleCategoryClick} />

        {/* Our Hair Services Grid */}
        <ServicesSection
          onBookService={(service) => handleOpenBooking(service)}
          onViewDetails={handleViewServiceDetails}
          activeCategoryFilter={activeCategoryFilter}
        />

        {/* The Legend Experience (Split Section) */}
        <ExperienceSection onOpenBooking={() => handleOpenBooking()} />

        {/* About Legend (Editorial Story & Collage) */}
        <AboutSection />

        {/* Why Choose Us Interactive Animated Pillars */}
        <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

        {/* Visual Gallery with Lightbox */}
        <GallerySection />

        {/* Google Reviews & Social Proof */}
        <ReviewsSection />

        {/* Location, Hours & Directions */}
        <LocationSection onOpenBooking={() => handleOpenBooking()} />

        {/* Final Conversion CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Appointment Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={selectedServiceForBooking}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBook={(service) => handleOpenBooking(service)}
      />

      {/* Sticky Mobile Quick Action Bar */}
      <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
