import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'services', 'experience', 'about', 'gallery', 'reviews', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out py-3 sm:py-4 px-3 sm:px-6 lg:px-8 ${
          isScrolled ? 'top-1' : 'top-2 sm:top-4'
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <nav
            id="navbar-container"
            aria-label="Main Navigation"
            className={`transition-all duration-500 flex items-center justify-between px-4 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-full border ${
              isScrolled
                ? 'bg-[#1D1714]/92 text-[#F7F4EF] backdrop-blur-xl border-[#B49A7A]/35 shadow-[0_10px_35px_rgba(0,0,0,0.35)]'
                : 'bg-[#1D1714]/75 text-[#F7F4EF] backdrop-blur-lg border-white/20 shadow-[0_6px_25px_rgba(0,0,0,0.2)]'
            }`}
          >
            {/* Brand Logo / Name */}
            <a
              href="#hero"
              id="brand-logo-link"
              className="group flex flex-col tracking-wider focus:outline-none focus:ring-2 focus:ring-[#B49A7A] rounded-md px-1 leading-none"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-[2.5px] text-[#F7F4EF] group-hover:text-[#B49A7A] transition-colors duration-300">
                  LEGEND
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#B49A7A] animate-pulse"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[3.5px] text-[#D8C9B8]/90 uppercase font-medium mt-0.5">
                UNISEX SALON
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 text-[11.5px] font-semibold uppercase tracking-[1.2px]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    id={`nav-link-${link.id}`}
                    className={`px-3 py-1.5 rounded-full transition-all duration-200 relative ${
                      isActive
                        ? 'text-white bg-white/15 font-bold shadow-xs'
                        : 'text-[#D8C9B8] hover:text-[#F7F4EF] hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Medium screen navigation for tablets */}
            <div className="hidden md:flex lg:hidden items-center space-x-1 text-[11px] font-semibold uppercase tracking-[1px]">
              {navLinks.filter(l => ['Services', 'About', 'Reviews', 'Contact'].includes(l.label)).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-1 text-[#D8C9B8] hover:text-white rounded-full transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Header Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Direct Phone CTA (Desktop) */}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                id="header-phone-cta"
                title="Call Legend Unisex Salon"
                className="hidden xl:inline-flex items-center gap-1.5 text-xs text-[#D8C9B8] hover:text-[#F7F4EF] bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/10 transition-all duration-200"
              >
                <Phone className="w-3 h-3 text-[#B49A7A]" />
                <span className="font-medium tracking-wide">{BUSINESS_INFO.phone}</span>
              </a>

              {/* Book Appointment CTA Button */}
              <button
                id="header-book-btn"
                onClick={onOpenBooking}
                className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#F7F4EF] hover:bg-[#B49A7A] text-[#2A211D] hover:text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[1.2px] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B49A7A] group-hover:text-white" />
                <span className="hidden sm:inline">Book Appointment</span>
                <span className="sm:hidden">Book</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                id="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
                className="lg:hidden p-2 rounded-full text-[#F7F4EF] hover:text-[#B49A7A] hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B49A7A]"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer Menu with Smooth Backdrop */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 bg-[#140F0D]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 sm:p-8 transition-all overflow-y-auto animate-fadeIn"
        >
          {/* Mobile Header Top Bar */}
          <div className="flex items-center justify-between border-b border-[#D8C9B8]/20 pb-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-[2px] text-[#F7F4EF]">
                LEGEND
              </span>
              <span className="text-[10px] tracking-[3px] text-[#B49A7A] uppercase font-medium">
                UNISEX SALON · GURUGRAM
              </span>
            </div>
            <button
              id="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2.5 text-[#F7F4EF] hover:text-[#B49A7A] rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex flex-col space-y-3 py-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#F7F4EF] hover:text-[#B49A7A] transition-colors py-2 border-b border-white/5 flex items-center justify-between group"
              >
                <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                <span className="text-xs text-[#B49A7A] font-sans font-semibold">0{idx + 1}</span>
              </a>
            ))}
          </div>

          {/* Drawer Footer Actions */}
          <div className="space-y-3 pt-4 border-t border-[#D8C9B8]/20">
            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-[#F7F4EF] text-[#2A211D] hover:bg-[#B49A7A] hover:text-white py-3.5 rounded-full font-semibold text-xs uppercase tracking-[1.5px] flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
            >
              <Calendar className="w-4 h-4 text-[#B49A7A]" />
              <span>Book Appointment</span>
            </button>

            <a
              id="mobile-drawer-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full bg-white/10 hover:bg-white/20 text-[#F7F4EF] py-3 rounded-full font-medium text-xs uppercase tracking-[1.5px] flex items-center justify-center gap-2 border border-white/15 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#B49A7A]" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>

            <div className="text-center pt-2">
              <span className="text-[11px] text-[#D8C9B8]/70">
                 DLF Phase 3, Sector 24, Gurugram · ★ {BUSINESS_INFO.googleRating} ({BUSINESS_INFO.totalReviews.toLocaleString()}+ Reviews)
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
