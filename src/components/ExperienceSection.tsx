import React from 'react';
import { Check, Sparkles, Calendar, Award, Shield, HeartHandshake } from 'lucide-react';
import { EXPERIENCE_BENEFITS } from '../data/salonData';

interface ExperienceSectionProps {
  onOpenBooking: () => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#EEE8DF]/60 border-y border-[#D8C9B8]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Large Editorial Salon Image with Layered Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-[#2A211D]/15 border border-[#D8C9B8]">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1200&q=85"
                alt="Luxury salon experience at Legend Unisex Salon"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform hover:scale-103 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D1714]/40 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Highlight Badge */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 z-20 bg-[#FAF8F5]/95 backdrop-blur-xl border border-[#D8C9B8]/80 p-4 sm:p-5 rounded-2xl shadow-xl max-w-[240px] hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#B49A7A]/20 flex items-center justify-center text-[#9A8060]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#2A211D] uppercase tracking-wider">Unisex Salon</h4>
                  <p className="text-[11px] text-[#8D8176]">DLF Phase 3 · Gurugram</p>
                </div>
              </div>
            </div>

            {/* Subtle background decorative shape */}
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl border-2 border-[#B49A7A]/30 -z-0 hidden md:block" />
          </div>

          {/* Right Column: Editorial Copy and Benefits */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Small uppercase eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#D8C9B8]/60 text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4 self-start shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
              <span>THE LEGEND EXPERIENCE</span>
            </div>

            {/* Large Serif Heading */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#2A211D] font-normal tracking-tight mb-6 leading-[1.15]">
              More Than a Salon Visit.
            </h2>

            {/* Body copy */}
            <p className="text-base sm:text-lg text-[#8D8176] font-light leading-relaxed mb-8">
              From the first consultation to the final finish, every detail is designed around your style, comfort, and confidence.
            </p>

            {/* 3 Core Experience Benefits */}
            <div className="space-y-5 mb-10">
              {EXPERIENCE_BENEFITS.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-[#B49A7A]/15 border border-[#B49A7A]/40 flex items-center justify-center text-[#2A211D] flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#9A8060] stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-[#2A211D] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#8D8176] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button
                id="experience-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Your Experience</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
