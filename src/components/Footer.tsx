import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#140F0D] text-[#D8C9B8] pt-16 sm:pt-20 pb-12 border-t border-[#D8C9B8]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#F7F4EF]">
                LEGEND
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#B49A7A]"></span>
            </div>
            <span className="text-[10px] tracking-[0.25em] text-[#B49A7A] uppercase block mb-5 font-semibold">
              UNISEX SALON · GURUGRAM
            </span>

            <p className="text-sm text-[#D8C9B8]/80 font-light leading-relaxed mb-6 max-w-sm">
              A luxury unisex salon located on Road No. 16, U Block, DLF Phase 3, Gurugram. Offering precision haircutting, seamless balayage, acrylic nails, skincare, and bridal makeovers.
            </p>
                        
            <div className="flex flex-wrap items-center gap-3">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#B49A7A]">
              <span>★ {BUSINESS_INFO.googleRating} Rating ({BUSINESS_INFO.totalReviews}+ Google Reviews)</span>
               </div>
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-[#F7F4EF] hover:text-[#B49A7A] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#B49A7A]" />
                <span>{BUSINESS_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F7F4EF] uppercase mb-4 font-sans">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-[#F7F4EF] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Services</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-[#F7F4EF] transition-colors">Experience</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F7F4EF] transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F7F4EF] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#F7F4EF] transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F7F4EF] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F7F4EF] uppercase mb-4 font-sans">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Haircuts & Precision Styling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Balayage & Dimensional Colour</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Keratin & Hair Botox</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Restorative Hair Spa</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Bridal & Occasion Styling</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F7F4EF] transition-colors">Men’s Grooming & Beard Architecture</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#F7F4EF] uppercase mb-4 font-sans">
              VISIT & CONTACT
            </h4>
            
            <div className="space-y-3.5 text-sm text-[#D8C9B8]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B49A7A] flex-shrink-0 mt-0.5" />
                <span className="leading-snug">
                  SHOP No. L 1-2, PINK TOWN, U-25 Rd, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122002
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B49A7A] flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[#F7F4EF] transition-colors font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B49A7A] flex-shrink-0" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="mt-6 w-full bg-[#B49A7A] hover:bg-[#C8B398] text-[#1E1714] font-semibold py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-md cursor-pointer"
            >
              Book Appointment
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D8176]">
          <p>© 2026 Legend Unisex Salon. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>DLF Phase 3, Gurugram</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D8C9B8] hover:text-[#F7F4EF] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
