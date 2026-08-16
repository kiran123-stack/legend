import React, { useState } from 'react';
import { ArrowRight, Sparkles, Clock, Tag, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/salonData';
import { Service } from '../types';

interface ServicesSectionProps {
  onBookService: (service: Service) => void;
  onViewDetails: (service: Service) => void;
  activeCategoryFilter?: string | null;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onBookService,
  onViewDetails,
  activeCategoryFilter
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'styling', label: 'Haircuts & Styling' },
    { id: 'colour', label: 'Balayage & Colour' },
    { id: 'treatment', label: 'Keratin & Treatments' },
    { id: 'spa', label: 'Hair Spa & Care' },
    { id: 'bridal', label: 'Bridal & Occasion' },
    { id: 'grooming', label: 'Men’s Grooming' },
  ];

  const filteredServices = selectedFilter === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === selectedFilter);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE8DF] text-[#2A211D] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
          <span>Tailored Artistry</span>
        </div>

        <h2
          id="services-heading"
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A211D] font-normal tracking-tight mb-4"
        >
          Our Hair Services
        </h2>

        <p className="text-[#8D8176] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Meticulously crafted hair transformations, precision styling, and restorative treatments designed to elevate your everyday confidence.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-10 sm:mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`service-filter-${cat.id}`}
            onClick={() => setSelectedFilter(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
              selectedFilter === cat.id
                ? 'bg-[#2A211D] text-[#F7F4EF] shadow-md shadow-[#2A211D]/15'
                : 'bg-[#EEE8DF]/70 text-[#2A211D] hover:bg-[#EEE8DF] hover:text-[#2A211D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Services Grid (Editorial Card Tiles matching reference) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredServices.map((service) => (
          <article
            key={service.id}
            id={`service-card-${service.id}`}
            className="group bg-[#FAF8F5] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D8C9B8]/40 shadow-sm hover:shadow-xl hover:shadow-[#2A211D]/8 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              {/* Image Container with Elegant Aspect Ratio & Subtle Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#EEE8DF]">
                <img
                  src={service.image}
                  alt={`${service.name} at Legend Unisex Salon`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1714]/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#1D1714]/75 backdrop-blur-md text-[#F7F4EF] text-[11px] font-medium tracking-wider uppercase border border-white/10">
                    {service.categoryLabel}
                  </span>
                </div>

                {/* Starting Price Badge */}
                <div className="absolute bottom-3 right-4">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#2A211D] text-xs font-semibold shadow-sm">
                    From {service.priceStartingAt}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center gap-3 text-xs text-[#8D8176] mb-2.5">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#B49A7A]" />
                    {service.duration}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-[#2A211D] font-medium tracking-tight mb-2.5 group-hover:text-[#9A8060] transition-colors duration-300">
                  {service.name}
                </h3>

                <p className="text-sm text-[#8D8176] font-normal leading-relaxed mb-4 line-clamp-2">
                  {service.description}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-0 flex items-center justify-between border-t border-[#D8C9B8]/20 mt-auto">
              <button
                type="button"
                onClick={() => onViewDetails(service)}
                className="text-xs font-semibold text-[#8D8176] hover:text-[#2A211D] transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
              >
                <span>View Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => onBookService(service)}
                className="inline-flex items-center gap-1.5 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 hover:shadow-md cursor-pointer"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
