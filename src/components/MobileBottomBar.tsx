import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenBooking: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenBooking }) => {
  return (
    <div
      id="mobile-bottom-bar"
      className="fixed bottom-3 inset-x-3 z-40 sm:hidden bg-[#1E1714]/95 backdrop-blur-lg rounded-full p-1.5 border border-[#D8C9B8]/30 shadow-2xl shadow-black/40 flex items-center justify-between gap-2 animate-fadeIn"
    >
      <a
        id="mobile-bottom-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-full text-xs font-semibold text-[#F7F4EF] bg-white/10 hover:bg-white/20 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-[#B49A7A]" />
        <span>Call Salon</span>
      </a>

      <button
        id="mobile-bottom-book-btn"
        onClick={onOpenBooking}
        className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 rounded-full text-xs font-semibold text-[#1E1714] bg-[#B49A7A] hover:bg-[#C8B398] shadow-md transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Now</span>
      </button>
    </div>
  );
};
