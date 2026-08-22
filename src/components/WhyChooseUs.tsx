import React, { useState } from 'react';
import { Sparkles, Scissors, Compass, CheckCircle2, Users, ShieldCheck, ArrowRight, HeartHandshake, Award, Clock, Star } from 'lucide-react';
import { BENEFITS_DATA, BUSINESS_INFO } from '../data/salonData';

interface WhyChooseUsProps {
  onOpenBooking?: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const detailedPillars = [
    {
      id: 'consultation',
      title: 'Personalised 1-on-1 Consultation',
      subtitle: 'Understanding Face Architecture & Lifestyle',
      icon: Sparkles,
      tag: 'Bespoke Approach',
      description: 'Every appointment begins with a dedicated 15-minute diagnostic session. We analyze your hair porosity, density, face symmetry, and daily maintenance routine before any scissors or color touch your hair.',
      highlights: [
        'Facial shape & contour assessment',
        'Hair texture & scalp health diagnostics',
        'Customized digital color & styling simulation',
        'Realistic maintenance roadmap'
      ],
      quote: '“We never offer cookie-cutter haircuts. Your style must effortlessly reflect your personal signature.”',
      author: 'Master Stylist, Legend Unisex Salon'
    },
    {
      id: 'techniques',
      title: 'Modern European Techniques',
      subtitle: 'Precision Shearing & Seamless Balayage',
      icon: Scissors,
      tag: 'Couture Mastery',
      description: 'Our colorists and stylists undergo continuous training in modern European cutting, foilayage, hand-painted balayage, and dimensional glossing to deliver ultra-natural transitions without harsh demarcation lines.',
      highlights: [
        'Dry & wet precision geometry cutting',
        'Seamless melt balayage without brassiness',
        'Custom formulation for Indian hair undertones',
        'Feathered texture & weight removal'
      ],
      quote: '“Precision is in the millimeters—how hair falls naturally when you run your hands through it at home.”',
      author: 'Senior Colour Director'
    },
    {
      id: 'ambience',
      title: 'Calm Sanctuary in DLF Phase 3',
      subtitle: 'An Oasis Designed for Unhurried Relaxation',
      icon: Compass,
      tag: 'Luxury Atmosphere',
      description: 'Located in Pink Town on U-25 Road, our studio is engineered with acoustic dampening, warm ambient cove lighting, ergonomic Italian wash loungers, and complimentary artisan refreshments so you feel completely revitalized.',
      highlights: [
        'Ergonomic massage wash loungers',
        'Acoustic balance & serene ambient soundscapes',
        'Complimentary artisan roast coffees & herbal teas',
        'Dedicated sanitized VIP treatment stations'
      ],
      quote: '“A salon visit should be your favorite sanctuary hour of the week, not an overwhelming chore.”',
      author: 'Guest Experience Lead'
    },
    {
      id: 'bond-care',
      title: 'Zero Compromise on Hair Health',
      subtitle: 'Ammonia-Free Formulations & K18/Olaplex Bond Protection',
      icon: ShieldCheck,
      tag: 'Health & Integrity',
      description: 'We exclusively utilize premium, bond-strengthening formulations from world-renowned hair houses. Whether lightening to golden beige or smoothing frizzy curls, your hair cuticle integrity is strictly safeguarded.',
      highlights: [
        '100% Ammonia-free gloss & permanent colors',
        'Integrated molecular bond repair (K18 & Olaplex)',
        'Formaldehyde-free keratin smoothing options',
        'Organic scalp detox & botanical spa elixirs'
      ],
      quote: '“We protect the inner cortex of your hair first. Radiant hair is inherently healthy hair.”',
      author: 'Technical Hair Scientist'
    },
    {
      id: 'unisex-artistry',
      title: 'Unisex Artistry & Grooming',
      subtitle: 'Equally Refined for Women and Men',
      icon: Users,
      tag: 'All-Gender Mastery',
      description: 'From intricate bridal updos and dimensional balayage to clean taper fades, hot towel beard sculpting, and executive scalp therapies, Legend delivers bespoke artistry tailored for every guest.',
      highlights: [
        'Men’s executive scissor cuts, fades & beard architecture',
        'Women’s bridal, event styling & balayage artistry',
        'Specialized Rica organic waxing & skin care',
        'Express corporate styling for Cyber City professionals'
      ],
      quote: '“Gurugram professionals deserve top-tier unisex styling under one trustworthy roof.”',
      author: 'Founder & Creative Lead'
    }
  ];

  const stats = [
    { value: '8+ Years', label: 'Established in 2016 in DLF Phase 3' },
    { value: `${BUSINESS_INFO.googleRating} ★`, label: `${BUSINESS_INFO.totalReviews.toLocaleString()}+ Verified Google Reviews` },
    { value: '100%', label: 'Bond-Safe & Gentle Formulations' },
    { value: '15+', label: 'Master Certified Stylists' },
  ];

  const activePillar = detailedPillars[activeTab];
  const ActiveIcon = activePillar.icon;

  return (
    <section id="why-choose-us" className="py-20 sm:py-28 bg-[#FAF8F5] border-y border-[#D8C9B8]/40 overflow-hidden relative">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D8C9B8]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B49A7A]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE8DF] border border-[#D8C9B8]/50 text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
            <span>THE LEGEND STANDARD</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-[#2A211D] font-normal tracking-tight mb-4">
            Why Discerning Clients Choose Us
          </h2>

          <p className="text-[#8D8176] text-base sm:text-lg font-light leading-relaxed">
            Every element of our salon is deliberately designed to provide an unhurried, exceptional experience in DLF Phase 3.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#D8C9B8]/50 text-center shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A211D] group-hover:text-[#B49A7A] transition-colors">
                {stat.value}
              </span>
              <p className="text-xs text-[#8D8176] font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Experience Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Pillar Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#8D8176] mb-1 px-1">
              Select a Pillar of Excellence:
            </span>

            {detailedPillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              const isSelected = activeTab === index;
              return (
                <button
                  key={pillar.id}
                  id={`pillar-tab-${pillar.id}`}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#2A211D] text-[#F7F4EF] border-[#B49A7A] shadow-xl translate-x-1 sm:translate-x-2'
                      : 'bg-white/70 hover:bg-white text-[#2A211D] border-[#D8C9B8]/50 hover:border-[#B49A7A]/50 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${
                        isSelected
                          ? 'bg-[#B49A7A] text-[#2A211D]'
                          : 'bg-[#EEE8DF] text-[#9A8060] group-hover:bg-[#B49A7A]/20'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] uppercase font-bold tracking-widest ${
                          isSelected ? 'text-[#B49A7A]' : 'text-[#8D8176]'
                        }`}>
                          Pillar 0{index + 1}
                        </span>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                          isSelected ? 'bg-white/15 text-[#D8C9B8]' : 'bg-[#EEE8DF] text-[#8D8176]'
                        }`}>
                          {pillar.tag}
                        </span>
                      </div>
                      <h3 className={`font-serif text-base sm:text-lg font-medium mt-0.5 ${
                        isSelected ? 'text-[#F7F4EF]' : 'text-[#2A211D]'
                      }`}>
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${
                      isSelected
                        ? 'text-[#B49A7A] translate-x-1'
                        : 'text-[#D8C9B8] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Animated Detail Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#D8C9B8] shadow-xl flex flex-col justify-between h-full relative overflow-hidden transition-all duration-400">
              
              {/* Subtle top badge */}
              <div className="flex items-center justify-between border-b border-[#D8C9B8]/40 pb-5 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEE8DF] flex items-center justify-center text-[#B49A7A] shadow-xs">
                    <ActiveIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[2px] text-[#B49A7A]">
                      PILLAR 0{activeTab + 1} · {activePillar.tag}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-normal tracking-tight">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1 text-xs text-[#8D8176] bg-white px-3 py-1.5 rounded-full border border-[#D8C9B8]/40">
                  <Star className="w-3.5 h-3.5 text-[#F27D26] fill-[#F27D26]" />
                  <span className="font-bold text-[#2A211D]">4.9 / 5</span>
                </div>
              </div>

              {/* Description and Key Benefits */}
              <div className="space-y-6">
                <p className="text-sm sm:text-base text-[#2A211D]/85 font-light leading-relaxed">
                  {activePillar.description}
                </p>

                {/* Key Execution Highlights */}
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-[1.5px] text-[#8D8176] mb-3">
                    What You Experience at Legend:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 bg-white/75 p-3 rounded-xl border border-[#D8C9B8]/30 shadow-2xs"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9A8060] flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-[#2A211D] font-medium leading-tight">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stylist Quote Box */}
                <div className="bg-[#EEE8DF]/60 p-4 sm:p-5 rounded-2xl border-l-4 border-[#B49A7A] border-y border-r border-[#D8C9B8]/40">
                  <p className="text-xs sm:text-sm text-[#2A211D] italic font-serif leading-relaxed">
                    {activePillar.quote}
                  </p>
                  <p className="text-[11px] text-[#8D8176] font-semibold tracking-wider uppercase mt-2">
                    — {activePillar.author}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 border-t border-[#D8C9B8]/40 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#8D8176]">
                  Experience the difference at <strong className="text-[#2A211D] font-semibold">DLF Phase 3, Gurugram</strong>
                </span>
                
                {onOpenBooking ? (
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] hover:text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[1px] transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>Book With a Specialist</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B49A7A]" />
                  </button>
                ) : (
                  <a
                    href="#services"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] hover:text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[1px] transition-all duration-300 shadow-md hover:-translate-y-0.5"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#B49A7A]" />
                  </a>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
