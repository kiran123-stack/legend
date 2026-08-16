import React, { useState } from 'react';
import { Sparkles, Eye, Expand } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { GalleryLightbox } from './GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Showcase' },
    { id: 'interiors', label: 'Salon Ambience' },
    { id: 'styling', label: 'Cuts & Styling' },
    { id: 'colour', label: 'Colour & Balayage' },
    { id: 'treatments', label: 'Spa & Treatments' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE8DF] text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
          <span>VISUAL PORTFOLIO</span>
        </div>

        <h2
          id="gallery-heading"
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#2A211D] font-normal tracking-tight mb-4"
        >
          A Glimpse Inside Legend
        </h2>

        <p className="text-[#8D8176] text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
          Explore our space, precision craft, dimensional colours, and transformative hair styling moments created in our Gurugram salon.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-start md:justify-center overflow-x-auto no-scrollbar gap-2 pb-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            id={`gallery-filter-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[#2A211D] text-[#F7F4EF] shadow-md'
                : 'bg-[#EEE8DF]/70 text-[#2A211D] hover:bg-[#EEE8DF]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Editorial Masonry Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            id={`gallery-item-${item.id}`}
            onClick={() => setSelectedLightboxItem(item)}
            className="group relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-[#EEE8DF] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#D8C9B8]/50"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1714]/85 via-[#1D1714]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

            {/* Text Overlay info */}
            <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#B49A7A]">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-xl text-[#F7F4EF] font-medium tracking-tight">
                  {item.title}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Expand className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={selectedLightboxItem}
        items={filteredItems}
        onClose={() => setSelectedLightboxItem(null)}
        onSelect={(item) => setSelectedLightboxItem(item)}
      />
    </section>
  );
};
