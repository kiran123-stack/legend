import React from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Story & Philosophy */}
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEE8DF] text-xs font-semibold tracking-[0.2em] text-[#2A211D] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#B49A7A]" />
            <span>ABOUT LEGEND</span>
          </div>

          <h2
            id="about-headline"
            className="font-serif text-3xl sm:text-5xl lg:text-5xl text-[#2A211D] font-normal tracking-tight mb-6 leading-[1.15]"
          >
            Style, Precision & Confidence
          </h2>

          <div className="space-y-4 text-[#8D8176] text-base sm:text-lg font-light leading-relaxed mb-8">
            <p>
              Located in the heart of DLF Phase 3, Gurugram, <strong className="font-semibold text-[#2A211D]">Legend Unisex Salon</strong> was established with a singular vision: to create a refined salon space where high-standard hair artistry meets genuine, attentive hospitality.
            </p>
            <p>
              We believe great hair is not a one-size-fits-all formula. Whether you seek subtle dimensional balayage, a structural haircut suited to your natural face architecture, or an intensive restorative keratin therapy, our approach is always consultative, precise, and tailored to you.
            </p>
            <p>
              Our spacious, calm unisex studio provides an unhurried atmosphere with thoughtful details—from private wash stations and hygienic tools to curated premium haircare formulations.
            </p>
          </div>

          {/* Core Values Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 border-t border-[#D8C9B8]/40">
            <div className="flex items-center gap-2.5 text-sm text-[#2A211D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#9A8060] flex-shrink-0" />
              <span>Bespoke Hair Consultation</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-[#2A211D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#9A8060] flex-shrink-0" />
              <span>Certified Master Stylists</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-[#2A211D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#9A8060] flex-shrink-0" />
              <span>Full Unisex Grooming Suites</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm text-[#2A211D] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#9A8060] flex-shrink-0" />
              <span>Clean, Calming Studio Ambience</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sophisticated Editorial Multi-Image Collage */}
        <div className="lg:col-span-6 order-1 lg:order-2 relative">
          <div className="relative grid grid-cols-12 gap-4">
            
            {/* Primary Large Image */}
            <div className="col-span-8 rounded-3xl overflow-hidden shadow-xl border border-[#D8C9B8] aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=85"
                alt="Styling craft at Legend Unisex Salon"
                className="w-full h-full object-cover object-center"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Stacked Secondary Detail Images */}
            <div className="col-span-4 flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D8C9B8] aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=85"
                  alt="Balayage detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="rounded-2xl overflow-hidden shadow-lg border border-[#D8C9B8] aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=85"
                  alt="Salon interior detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Floating Review Badge Overlay */}
            <div className="absolute -bottom-5 left-6 bg-[#2A211D] text-white p-4 sm:p-5 rounded-2xl shadow-2xl border border-[#B49A7A]/30 flex items-center gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#B49A7A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B49A7A]" />
                  ))}
                </div>
                <span className="font-serif text-2xl font-bold tracking-tight text-[#F7F4EF] mt-1">4.9 / 5.0</span>
                <span className="text-[11px] text-[#D8C9B8] font-light">1,595+ Happy Clients in Gurugram</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
