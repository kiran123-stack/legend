import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div
      id="gallery-lightbox-backdrop"
      className="fixed inset-0 z-50 bg-[#1D1714]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        id="lightbox-close-btn"
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-5 right-5 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F7F4EF] hover:text-[#B49A7A] transition-colors cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Lightbox Main Container */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Navigation Arrow Left */}
        <button
          id="lightbox-prev-btn"
          onClick={handlePrev}
          aria-label="Previous Image"
          className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#2A211D]/80 hover:bg-[#B49A7A] text-white transition-all shadow-lg cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          id="lightbox-next-btn"
          onClick={handleNext}
          aria-label="Next Image"
          className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-[#2A211D]/80 hover:bg-[#B49A7A] text-white transition-all shadow-lg cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black max-h-[72vh] flex items-center justify-center border border-white/10">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl select-none"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Metadata Caption */}
        <div className="mt-4 text-center max-w-2xl px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-semibold tracking-widest text-[#B49A7A] uppercase mb-1">
            <Sparkles className="w-3 h-3" />
            <span>{item.categoryLabel}</span>
          </div>
          <h3 className="font-serif text-2xl text-[#F7F4EF] font-medium tracking-tight mb-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#D8C9B8]/80 font-light">
            {item.description}
          </p>
          <div className="text-[11px] text-[#8D8176] mt-2">
            {currentIndex + 1} of {items.length}
          </div>
        </div>
      </div>
    </div>
  );
};
