import React from 'react';
import { MapPin, Phone, Clock, Navigation, Sparkles, Calendar, Coffee, Wifi, Car, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
        
        {/* Left Column: Address, Hours, and Actions */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE8DF] text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
              <span>GURUGRAM SALON</span>
            </div>

            <h2
              id="location-heading"
              className="font-serif text-3xl sm:text-5xl text-[#2A211D] font-normal tracking-tight mb-4"
            >
              Visit Legend
            </h2>

            <p className="text-[#8D8176] text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
              Conveniently situated in DLF Phase 3, Gurugram. An unhurried oasis designed for your comfort, privacy, and style.
            </p>

            {/* Address & Contact Cards */}
            <div className="space-y-4 mb-8">
              
              {/* Address Card */}
              <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-2xl border border-[#D8C9B8]/50 flex items-start gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-[#EEE8DF] flex items-center justify-center text-[#9A8060] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#8D8176] uppercase tracking-wider mb-1">
                    Salon Location
                  </h3>
                  <p className="text-base text-[#2A211D] font-medium leading-snug">
                    {BUSINESS_INFO.address}
                  </p>
                  <p className="text-xs text-[#9A8060] mt-1 font-medium">
                    DLF Phase 3 · Near Cyber City Corridor, Gurugram
                  </p>
                </div>
              </div>

              {/* Hours & Phone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Hours Card */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#D8C9B8]/50 flex items-start gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#EEE8DF] flex items-center justify-center text-[#9A8060] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8D8176] uppercase tracking-wider mb-0.5">
                      Salon Hours
                    </h3>
                    <p className="text-sm font-semibold text-[#2A211D]">
                      {BUSINESS_INFO.openingHours}
                    </p>
                    <p className="text-[11px] text-[#8D8176]">Open 7 Days a Week</p>
                  </div>
                </div>

                {/* Direct Phone Card */}
                <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#D8C9B8]/50 flex items-start gap-3.5 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-[#EEE8DF] flex items-center justify-center text-[#9A8060] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#8D8176] uppercase tracking-wider mb-0.5">
                      Direct Inquiries
                    </h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phone}`}
                      className="text-sm font-bold text-[#2A211D] hover:text-[#9A8060] transition-colors block"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#8D8176]">Call or WhatsApp</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-[#D8C9B8]/40">
            <button
              id="location-book-btn"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <a
              id="location-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-[#FAF8F5] hover:bg-[#EEE8DF] text-[#2A211D] px-6 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-200 border border-[#D8C9B8]"
            >
              <Phone className="w-4 h-4 text-[#9A8060]" />
              <span>Call Salon</span>
            </a>

            <a
              id="location-directions-btn"
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-black/5 text-[#2A211D] px-5 py-3.5 rounded-full text-sm font-medium tracking-wide transition-colors"
            >
              <Navigation className="w-4 h-4 text-[#9A8060]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Location Map Card with Salon Amenities */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="bg-[#2A211D] text-[#F7F4EF] rounded-3xl p-7 sm:p-9 shadow-2xl border border-[#B49A7A]/30 flex-1 flex flex-col justify-between relative overflow-hidden">
            {/* Background subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#B49A7A]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold tracking-[0.25em] text-[#B49A7A] uppercase">
                  SALON ESSENTIALS
                </span>
                <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] text-[#D8C9B8]">
                  Gurugram
                </span>
              </div>

              <h3 className="font-serif text-3xl font-normal text-[#F7F4EF] mb-3">
                Experience Luxury Comfort
              </h3>
              <p className="text-sm text-[#D8C9B8]/80 font-light leading-relaxed mb-8">
                Every visit includes tailored salon amenities to make your appointment relaxing and effortless.
              </p>

              {/* Amenities List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm text-[#F7F4EF]/90">
                  <Car className="w-4 h-4 text-[#B49A7A]" />
                  <span>Ample Parking Space & Drop-off</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F7F4EF]/90">
                  <Coffee className="w-4 h-4 text-[#B49A7A]" />
                  <span>Complimentary Espresso & Herbal Teas</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F7F4EF]/90">
                  <Wifi className="w-4 h-4 text-[#B49A7A]" />
                  <span>High-Speed Guest Wi-Fi</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#F7F4EF]/90">
                  <ShieldCheck className="w-4 h-4 text-[#B49A7A]" />
                  <span>100% Sanitized Tools & Towels</span>
                </div>
              </div>
            </div>

            {/* Quick Map Link Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#F7F4EF]">Pink Town, DLF Phase 3</h4>
                  <p className="text-xs text-[#D8C9B8]/70">Near U-Block & Sector 24</p>
                </div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B49A7A] hover:bg-[#C8B398] text-[#2A211D] px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer"
                >
                  Open Maps
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
