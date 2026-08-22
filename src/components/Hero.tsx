import React from 'react';
import { Star, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-32 sm:pb-40"
    >
      {/* Background Image Container with Warm Cinematic Salon Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2000&q=85"
          alt="Legend Unisex Salon Contemporary Luxury Interior in DLF Phase 3 Gurugram"
          className="w-full h-full object-cover object-center scale-100 hover:scale-102 transition-transform duration-10000 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Dark & Warm Overlays for Typography Contrast */}
        <div className="absolute inset-0 bg-[#140E0B]/70" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(180,154,122,0.25) 0%, rgba(29,23,20,0.75) 50%, rgba(20,14,11,0.92) 100%)',
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-[#F7F4EF] via-[#F7F4EF]/70 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Subtle Eyebrow Badge */}
        <div
          id="hero-eyebrow"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#F7F4EF] uppercase">
            LEGEND UNISEX SALON · DLF PHASE 3, GURUGRAM
          </span>
        </div>

        {/* Main Serif Headline */}
        <h1
          id="hero-main-title"
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] text-[#F7F4EF] font-normal tracking-tight max-w-4xl mb-6 drop-shadow-md"
        >
          Where Your Style <br className="hidden sm:inline" />
          <span className="italic font-normal text-[#E8DFD5]">
            Becomes Your Signature.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg md:text-xl text-[#D8C9B8] font-light max-w-2xl leading-relaxed mb-9 text-balance"
        >
          Personalised hair styling, contemporary colouring techniques, and professional treatments designed in a refined Gurugram atmosphere.
        </p>

        {/* Primary CTA Buttons */}
        <div
          id="hero-cta-group"
          className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10"
        >
          <button
            id="hero-primary-book-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#F7F4EF] hover:bg-[#B49A7A] text-[#2A211D] hover:text-white px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B49A7A] group-hover:text-white" />
            <span>Book Appointment</span>
          </button>

          <a
            id="hero-secondary-explore-btn"
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-[#F7F4EF] hover:text-white px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[1.5px] transition-all duration-300 border border-white/30 backdrop-blur-sm hover:-translate-y-0.5"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#B49A7A]" />
          </a>
        </div>

        {/* Google Trust Indicator */}
        <a
          href="#reviews"
          id="hero-trust-indicator"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1D1714]/80 border border-[#D8C9B8]/30 backdrop-blur-md text-xs sm:text-sm text-[#F7F4EF] hover:border-[#B49A7A] transition-all duration-200"
        >
          <div className="flex items-center text-[#F27D26] gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#F27D26]" />
            ))}
          </div>
          <span className="font-bold text-[#F7F4EF]">4.9</span>
          <span className="text-[#D8C9B8]/70">/ 5</span>
          <span className="text-[#D8C9B8]/50">·</span>
          <span className="text-[#D8C9B8] text-xs font-medium uppercase tracking-wider">1,048+ Google Reviews</span>
        </a>
      </div>
    </section>
  );
};
