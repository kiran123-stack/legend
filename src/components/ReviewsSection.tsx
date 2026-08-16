import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ExternalLink, Sparkles, Filter, ThumbsUp, ShieldCheck } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_INFO } from '../data/salonData';

export const ReviewsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Reviews (1,595+)' },
    { id: 'colour', label: 'Balayage & Colour' },
    { id: 'haircut', label: 'Precision Haircuts' },
    { id: 'keratin', label: 'Keratin & Hair Spa' },
    { id: 'bridal', label: 'Bridal & Grooming' },
  ];

  const filteredReviews = REVIEWS_DATA.filter((review) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'colour') return review.service.toLowerCase().includes('balayage') || review.service.toLowerCase().includes('colour') || review.service.toLowerCase().includes('gloss');
    if (selectedFilter === 'haircut') return review.service.toLowerCase().includes('haircut') || review.service.toLowerCase().includes('styling') || review.service.toLowerCase().includes('cut');
    if (selectedFilter === 'keratin') return review.service.toLowerCase().includes('keratin') || review.service.toLowerCase().includes('spa') || review.service.toLowerCase().includes('therapy');
    if (selectedFilter === 'bridal') return review.service.toLowerCase().includes('bridal') || review.service.toLowerCase().includes('makeup') || review.service.toLowerCase().includes('beard');
    return true;
  });

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#EEE8DF]/40 border-y border-[#D8C9B8]/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header & Trust Scoreboard */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D8C9B8]/60 text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
              <span>AUTHENTIC GOOGLE REVIEWS</span>
            </div>

            <h2
              id="reviews-heading"
              className="font-serif text-3xl sm:text-5xl text-[#2A211D] font-normal tracking-tight"
            >
              Loved by Our Clients
            </h2>
            <p className="text-[#8D8176] text-base sm:text-lg font-light leading-relaxed mt-2 max-w-xl">
              Real verified client feedback from residents & executives across DLF Phase 3, Cyber City, and Gurugram.
            </p>
          </div>

          {/* Rating Summary Scorecard */}
          <div className="bg-[#FAF8F5] p-6 sm:p-7 rounded-3xl border border-[#D8C9B8] shadow-lg flex flex-col sm:flex-row items-center gap-6 self-start lg:self-auto">
            <div className="flex flex-col items-center justify-center border-b sm:border-b-0 sm:border-r border-[#D8C9B8]/60 pb-4 sm:pb-0 sm:pr-6">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#2A211D]">
                {BUSINESS_INFO.googleRating}
              </span>
              <div className="flex items-center text-[#F27D26] mt-1 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#F27D26]" />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#8D8176] mt-1 font-semibold">
                Google Score
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[#2A211D]">Google Verified Business</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600 inline flex-shrink-0" />
              </div>
              <span className="text-xs text-[#8D8176] mt-0.5">
                Based on <strong className="text-[#2A211D] font-semibold">{BUSINESS_INFO.totalReviews.toLocaleString()}+ authentic reviews</strong>
              </span>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-[11px] font-medium bg-emerald-50 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  98% Recommended
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#9A8060] hover:text-[#2A211D] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read on Google</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[1px] transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === cat.id
                  ? 'bg-[#2A211D] text-[#F7F4EF] shadow-sm'
                  : 'bg-white/80 text-[#8D8176] hover:text-[#2A211D] hover:bg-white border border-[#D8C9B8]/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Real Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => {
            const initials = review.author
              .split(' ')
              .map((n) => n[0])
              .join('')
              .slice(0, 2);

            return (
              <div
                key={review.id}
                id={`review-card-${review.id}`}
                className="bg-[#FAF8F5] p-7 rounded-3xl border border-[#D8C9B8]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Reviewer Info + Google Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D8C9B8] text-[#2A211D] font-serif font-bold text-sm flex items-center justify-center border border-white shadow-2xs">
                        {initials}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#2A211D] flex items-center gap-1.5">
                          <span>{review.author}</span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" title="Verified Review" />
                        </h3>
                        <p className="text-[11px] text-[#8D8176] font-light">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <div className="text-[10px] text-[#8D8176] font-medium bg-white px-2 py-0.5 rounded-md border border-[#D8C9B8]/40">
                      {review.date}
                    </div>
                  </div>

                  {/* Rating Stars & Service Pill */}
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="flex items-center text-[#F27D26] gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#F27D26]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-[#9A8060] font-semibold bg-[#B49A7A]/15 px-2.5 py-0.5 rounded-full">
                      {review.service}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-[13px] text-[#2A211D]/85 font-light leading-relaxed mb-4">
                    "{review.text}"
                  </p>
                </div>

                {/* Bottom Verification Note */}
                <div className="pt-3 border-t border-[#D8C9B8]/30 flex items-center justify-between text-[11px] text-[#8D8176]">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Visit</span>
                  </span>
                  <span>DLF Phase 3, Gurugram</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to View More on Google */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF8F5] text-[#2A211D] border border-[#D8C9B8] px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-[1px] shadow-sm hover:shadow-md transition-all"
          >
            <span>View All 1,595+ Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#B49A7A]" />
          </a>
        </div>

      </div>
    </section>
  );
};
