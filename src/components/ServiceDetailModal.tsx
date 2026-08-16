import React, { useEffect } from 'react';
import { X, Clock, Tag, Sparkles, Check, Calendar, ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onBook: (service: Service) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      id="service-detail-backdrop"
      className="fixed inset-0 z-50 bg-[#1D1714]/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="service-detail-card"
        className="relative bg-[#FAF8F5] rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#D8C9B8] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-[#EEE8DF]">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D1714]/80 via-transparent to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
            <div>
              <span className="px-3 py-1 rounded-full bg-[#B49A7A] text-[#1D1714] text-xs font-bold uppercase tracking-wider">
                {service.categoryLabel}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mt-2">
                {service.name}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-[#D8C9B8] block">Starting at</span>
              <span className="font-serif text-xl sm:text-2xl text-[#F7F4EF] font-bold">
                {service.priceStartingAt}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          
          {/* Quick Metrics */}
          <div className="flex items-center gap-6 pb-5 mb-5 border-b border-[#D8C9B8]/40 text-xs sm:text-sm text-[#8D8176]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#B49A7A]" />
              <span>Duration: <strong className="text-[#2A211D]">{service.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#B49A7A]" />
              <span>Includes 1-on-1 Consultation</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <div>
              <h4 className="text-xs font-bold text-[#8D8176] uppercase tracking-wider mb-1">
                Overview
              </h4>
              <p className="text-sm sm:text-base text-[#2A211D] font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            {service.fullDetails && (
              <div>
                <h4 className="text-xs font-bold text-[#8D8176] uppercase tracking-wider mb-1">
                  What’s Included in This Experience
                </h4>
                <p className="text-sm text-[#8D8176] font-light leading-relaxed">
                  {service.fullDetails}
                </p>
              </div>
            )}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#D8C9B8]/40">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold text-[#8D8176] hover:text-[#2A211D] transition-colors cursor-pointer"
            >
              Back to Services
            </button>

            <button
              onClick={() => {
                onClose();
                onBook(service);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] px-7 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Service</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
