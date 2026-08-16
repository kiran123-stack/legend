import React from 'react';
import { Calendar, Phone, Sparkles, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section id="book-cta" className="relative py-24 sm:py-32 bg-[#1E1714] text-[#F7F4EF] overflow-hidden">
      {/* Background Image with Atmospheric Luxury Tint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=85"
          alt="Legend Unisex Salon Ambience"
          className="w-full h-full object-cover object-center opacity-18 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E1714]/90 via-[#1E1714]/95 to-[#1E1714]" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#1E1714]/70 to-[#1E1714]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
          <span className="text-xs font-semibold tracking-[0.25em] text-[#F7F4EF] uppercase">
            BESPOKE APPOINTMENTS
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F7F4EF] font-normal tracking-tight mb-6 leading-tight">
          Ready for Your Next Look?
        </h2>

        {/* Supporting Copy */}
        <p className="text-[#D8C9B8] text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10 text-balance">
          Book your appointment at Legend Unisex Salon and make your next style your signature.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
          <button
            id="final-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F7F4EF] hover:bg-[#B49A7A] text-[#2A211D] hover:text-white px-9 py-4 rounded-full text-base font-semibold tracking-wide transition-all duration-300 shadow-2xl hover:shadow-black/50 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment</span>
          </button>

          <a
            id="final-call-btn"
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-[#F7F4EF] px-8 py-4 rounded-full text-base font-medium tracking-wide transition-all duration-200 border border-white/20 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#B49A7A]" />
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        {/* Rating Trust Badge */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-[#D8C9B8]/80">
          <div className="flex items-center text-[#B49A7A] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#B49A7A]" />
            ))}
          </div>
          <span>4.9 / 5.0 Google Rating</span>
          <span>·</span>
          <span>1,595+ Verified Reviews in Gurugram</span>
        </div>

      </div>
    </section>
  );
};
