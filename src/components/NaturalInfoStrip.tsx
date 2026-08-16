import React from 'react';
import { Star, MapPin, Phone, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const NaturalInfoStrip: React.FC = () => {
  return (
    <section
      id="natural-info-strip"
      aria-label="Salon Quick Information"
      className="bg-[#F7F4EF] border-y border-[#B49A7A]/20 py-8 sm:py-10 px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
        
        {/* Location Info Box */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#EEE8DF] flex items-center justify-center text-[#B49A7A] flex-shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[1.5px] text-[#8D8176] font-semibold">
              Location
            </span>
            <span className="text-sm font-semibold text-[#2A211D]">
              DLF Phase 3, Sector 24, Gurugram
            </span>
            <span className="text-xs text-[#8D8176] font-light">
              SHOP No. L 1-2, PINK TOWN, U-25 Rd
            </span>
          </div>
        </div>

        {/* Contact Info Box */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#EEE8DF] flex items-center justify-center text-[#B49A7A] flex-shrink-0">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-[1.5px] text-[#8D8176] font-semibold">
              Contact & Hours
            </span>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-sm font-semibold text-[#2A211D] hover:text-[#B49A7A] transition-colors"
            >
              {BUSINESS_INFO.phone}
            </a>
            <span className="text-xs text-[#8D8176] font-light">
              Daily: 9:30 AM – 9:00 PM
            </span>
          </div>
        </div>

        {/* Rating Badge Box */}
        <div className="flex flex-col items-center md:items-end gap-1.5">
          <div className="inline-flex items-center gap-2 bg-[#EEE8DF] px-4 py-2 rounded-full border border-[#D8C9B8]/40 shadow-xs">
            <span className="text-[#F27D26] text-sm">★</span>
            <span className="font-bold text-sm text-[#2A211D]">4.9</span>
            <span className="text-xs text-[#8D8176]">/ 5</span>
          </div>
          <span className="text-[10px] uppercase tracking-[1.5px] text-[#8D8176] font-semibold">
            1,595+ Google Reviews
          </span>
        </div>

      </div>
    </section>
  );
};
