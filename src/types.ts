export interface Service {
  id: string;
  name: string;
  category: 'styling' | 'colour' | 'treatment' | 'spa' | 'bridal' | 'grooming';
  categoryLabel: string;
  description: string;
  fullDetails?: string;
  duration: string;
  priceStartingAt: string;
  image: string;
  featured?: boolean;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  role?: string;
  avatar?: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'interiors' | 'styling' | 'colour' | 'treatments';
  categoryLabel: string;
  image: string;
  description: string;
  span?: string; // for masonry grid variation
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  stylistPreference: 'any' | 'senior' | 'master';
  notes?: string;
}
