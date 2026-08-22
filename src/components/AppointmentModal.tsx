import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { SERVICES_DATA, BUSINESS_INFO } from '../data/salonData';
import { Service, AppointmentFormData } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: Service | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: initialService?.id || SERVICES_DATA[0].id,
    serviceName: initialService?.name || SERVICES_DATA[0].name,
    date: new Date().toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    stylistPreference: 'any',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceId: initialService.id,
        serviceName: initialService.name,
      }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:00 AM',
    '12:30 PM',
    '02:00 PM',
    '03:30 PM',
    '05:00 PM',
    '06:30 PM',
    '07:45 PM',
  ];

  const handleServiceChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const sId = e.target.value;
    const found = SERVICES_DATA.find((s) => s.id === sId);

    setFormData((prev) => ({
      ...prev,
      serviceId: sId,
      serviceName: found ? found.name : '',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone) return;

    setIsSubmitting(true);

    // Simulate brief luxury submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="appointment-modal-backdrop"
      className="
        fixed inset-0 z-50
        bg-[#1D1714]/80
        backdrop-blur-md
        flex items-center justify-center
        p-0 sm:p-6
        overflow-y-auto
        animate-fadeIn
      "
      onClick={onClose}
    >
      <div
        id="appointment-modal-card"
        className="
          relative
          bg-[#FAF8F5]
          rounded-t-3xl sm:rounded-3xl
          max-w-xl
          w-full
          max-h-[100dvh] sm:max-h-[calc(100dvh-3rem)]
          shadow-2xl
          border border-[#D8C9B8]
          overflow-hidden
          flex flex-col
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="sticky top-0 z-50 flex justify-end pointer-events-none">
          <button
            id="appointment-modal-close"
            onClick={onClose}
            aria-label="Close Booking Modal"
            className="
              pointer-events-auto
              absolute
              top-4 right-4
              sm:top-5 sm:right-5
              p-2
              rounded-full
              bg-[#FAF8F5]/95
              backdrop-blur-sm
              text-[#8D8176]
              hover:text-[#2A211D]
              hover:bg-[#EEE8DF]
              shadow-sm
              transition-colors
              cursor-pointer
            "
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto overscroll-contain flex-1">
          <div className="p-6 sm:p-9">
            {!isSubmitted ? (
              <div>
                {/* Modal Header */}
                <div className="mb-6 pr-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#EEE8DF] text-[11px] font-semibold tracking-wider text-[#9A8060] uppercase mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span>Bespoke Appointment</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#2A211D] font-medium tracking-tight">
                    Request an Appointment
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8D8176] mt-1 font-light">
                    Select your preferred service, date, and time. Our
                    concierge will reach out to confirm your slot.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>

                      <div className="relative">
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ananya Sharma"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              fullName: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] placeholder-[#8D8176]/50 focus:outline-none focus:ring-2 focus:ring-[#B49A7A] focus:border-transparent transition-all"
                        />

                        <User className="w-4 h-4 text-[#8D8176] absolute right-3.5 top-3" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>

                      <div className="relative">
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 09911691417"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] placeholder-[#8D8176]/50 focus:outline-none focus:ring-2 focus:ring-[#B49A7A] focus:border-transparent transition-all"
                        />

                        <Phone className="w-4 h-4 text-[#8D8176] absolute right-3.5 top-3" />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                      Desired Treatment / Service *
                    </label>

                    <select
                      value={formData.serviceId}
                      onChange={handleServiceChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] focus:outline-none focus:ring-2 focus:ring-[#B49A7A] transition-all cursor-pointer"
                    >
                      {SERVICES_DATA.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name} ({s.duration} · from {s.priceStartingAt})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time Slot Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                        Preferred Date *
                      </label>

                      <div className="relative">
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              date: e.target.value,
                            })
                          }
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] focus:outline-none focus:ring-2 focus:ring-[#B49A7A] transition-all cursor-pointer"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                        Preferred Time Slot *
                      </label>

                      <select
                        value={formData.timeSlot}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            timeSlot: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] focus:outline-none focus:ring-2 focus:ring-[#B49A7A] transition-all cursor-pointer"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Notes or Style Wishes */}
                  <div>
                    <label className="block text-xs font-semibold text-[#2A211D] uppercase tracking-wider mb-1.5">
                      Special Notes or Style Goals (Optional)
                    </label>

                    <textarea
                      rows={2}
                      placeholder="Mention any specific stylist preference, hair length, or coloring history..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          notes: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#D8C9B8] text-sm text-[#2A211D] placeholder-[#8D8176]/50 focus:outline-none focus:ring-2 focus:ring-[#B49A7A] transition-all"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#2A211D] hover:bg-[#B49A7A] text-[#F7F4EF] py-3.5 rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit Appointment Request</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-center pt-1">
                    <span className="text-[11px] text-[#8D8176]">
                      Need immediate assistance? Call us directly at{' '}
                      <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="font-semibold text-[#2A211D] underline"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </span>
                  </div>
                </form>
              </div>
            ) : (
              /* Submission Confirmation View */
              <div className="text-center py-6">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EEE8DF] text-[11px] font-semibold tracking-wider text-[#9A8060] uppercase mb-2">
                  <span>Request Received</span>
                </div>

                <h3 className="font-serif text-3xl text-[#2A211D] font-medium mb-3">
                  Thank You, {formData.fullName}!
                </h3>

                <p className="text-sm text-[#8D8176] max-w-md mx-auto leading-relaxed mb-6 font-light">
                  Your appointment request for{' '}
                  <strong className="text-[#2A211D] font-semibold">
                    {formData.serviceName}
                  </strong>{' '}
                  on{' '}
                  <strong className="text-[#2A211D] font-semibold">
                    {formData.date} at {formData.timeSlot}
                  </strong>{' '}
                  has been received. Our salon team will contact you shortly
                  at{' '}
                  <strong className="text-[#2A211D] font-semibold">
                    {formData.phone}
                  </strong>{' '}
                  to confirm your booking.
                </p>

                <div className="bg-[#EEE8DF]/50 p-4 rounded-2xl border border-[#D8C9B8]/50 max-w-sm mx-auto mb-6 text-left text-xs space-y-1.5 text-[#2A211D]">
                  <div className="flex justify-between">
                    <span className="text-[#8D8176]">Salon Location:</span>
                    <span className="font-medium text-right">
                      Road No. 16, U Block, DLF Phase 3
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[#8D8176]">Phone:</span>
                    <span className="font-medium">
                      {BUSINESS_INFO.phone}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2A211D] text-[#F7F4EF] hover:bg-[#B49A7A] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Salon Now</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-[#8D8176] hover:text-[#2A211D] hover:bg-[#EEE8DF] transition-colors cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
