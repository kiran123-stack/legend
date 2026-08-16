import React from 'react';
import { Scissors, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { TRUST_CATEGORIES } from '../data/salonData';

interface TrustCategoryStripProps {
  onSelectCategory: (categoryId: string) => void;
}

export const TrustCategoryStrip: React.FC<TrustCategoryStripProps> = ({ onSelectCategory }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-[#B49A7A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#B49A7A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#B49A7A]" />;
      default:
        return <Scissors className="w-5 h-5 text-[#B49A7A]" />;
    }
  };

  return (
    <section id="trust-categories" className="relative z-20 -mt-16 sm:-mt-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {TRUST_CATEGORIES.map((item) => (
          <div
            key={item.id}
            id={`trust-card-${item.id}`}
            onClick={() => onSelectCategory(item.id)}
            className="group relative bg-[#FAF8F5]/90 hover:bg-white backdrop-blur-xl rounded-[28px] p-8 sm:p-9 border border-white/80 shadow-[0_20px_50px_rgba(42,33,29,0.08)] hover:shadow-[0_25px_60px_rgba(180,154,122,0.18)] transition-all duration-400 ease-out hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center"
          >
            {/* Elegant Circular Icon Badge */}
            <div className="w-14 h-14 rounded-full bg-white group-hover:bg-[#B49A7A]/15 flex items-center justify-center mb-6 shadow-sm border border-[#D8C9B8]/40 transition-all duration-300 group-hover:scale-105">
              {getIcon(item.icon)}
            </div>

            {/* Category Title */}
            <h3 className="font-serif text-2xl sm:text-[26px] text-[#2A211D] font-normal tracking-tight mb-3 group-hover:text-[#9A8060] transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-[13.5px] text-[#8D8176] font-light leading-relaxed mb-6">
              {item.description}
            </p>

            {/* Subtle Action Pill */}
            <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#2A211D] group-hover:text-[#B49A7A] transition-colors duration-200 uppercase">
              <span>View Treatments</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
