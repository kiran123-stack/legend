import { Service, Review, GalleryItem, Benefit } from '../types';

export const BUSINESS_INFO = {
  name: 'LEGEND UNISEX SALON',
  tagline: 'Where Your Style Becomes Your Signature',
  phone: '09911691417',
  formattedPhone: '+91 99116 91417',
  address: 'SHOP No. L 1-2, PINK TOWN, U-25 Rd, U Block, DLF Phase 3, Sector 24, Gurugram, Haryana 122002',
  shortAddress: 'Pink Town, U-Block, DLF Phase 3, Gurugram',
  googleRating: 4.9,
  totalReviews: 1595,
  openingHours: 'Mon - Sun: 9:30 AM – 9:00 PM',
  email: 'appointments@legendsalon.in',
  mapsQuery: 'LEGEND+UNISEX+SALON+PINK+TOWN+DLF+Phase+3+Gurugram',
  googleMapsUrl: 'https://maps.google.com/?q=SHOP+No.+L+1-2,+PINK+TOWN,+U-25+Rd,+U+Block,+DLF+Phase+3,+Sector+24,+Gurugram,+Haryana+122002',
  amenities: [
    'Bespoke 1-on-1 Consultation',
    'Private VIP Treatment Suites',
    'Complimentary Artisan Beverages',
    'Ample Dedicated Parking',
    'High-Speed Wi-Fi',
    'Premium Imported Hair Formulations'
  ]
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'haircuts-styling',
    name: 'Haircuts & Styling',
    category: 'styling',
    categoryLabel: 'Signature Cuts',
    description: 'Precision cuts tailored to your facial architecture, hair texture, and individual personality.',
    fullDetails: 'Includes a sensory scalp massage, nourishing hair wash with customized luxury shampoo, precision texturizing, and a signature editorial blowout finish.',
    duration: '45 - 60 mins',
    priceStartingAt: '₹800',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    popular: true
  },
  {
    id: 'balayage-highlights',
    name: 'Balayage & Highlights',
    category: 'colour',
    categoryLabel: 'Artisan Colour',
    description: 'Bespoke hand-painted balayage, subtle contour baby-lights, and seamless dimensional transitions.',
    fullDetails: 'Customized lightening technique preserving hair health with Olaplex/K18 bond builders, followed by a gloss toner and silk hydration glaze.',
    duration: '180 - 240 mins',
    priceStartingAt: '₹4,500',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    popular: true
  },
  {
    id: 'keratin-treatment',
    name: 'Keratin & Botox Treatment',
    category: 'treatment',
    categoryLabel: 'Smoothening & Repair',
    description: 'Intense frizz reduction, mirror-like gloss, and long-lasting hair fiber strengthening.',
    fullDetails: 'Infuses pure amino acids, hydrolyzed keratin, and nourishing botanicals deep into the hair cortex to restore elasticity and eliminate humidity frizz for up to 5 months.',
    duration: '120 - 180 mins',
    priceStartingAt: '₹3,800',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85',
    featured: true,
    popular: true
  },
  {
    id: 'hair-spa-care',
    name: 'Hair Spa & Deep Care',
    category: 'spa',
    categoryLabel: 'Restorative Spa',
    description: 'Therapeutic scalp detox, steam infusion, and customized hair nourishment masks.',
    fullDetails: 'A multi-step sensory ritual featuring aromatic essential oils, micro-mist steam opening the hair cuticles, acupressure scalp massage, and intensive moisture sealing.',
    duration: '60 - 75 mins',
    priceStartingAt: '₹1,600',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
    featured: true
  },
  {
    id: 'blow-dry-styling',
    name: 'Blow Dry & Signature Styling',
    category: 'styling',
    categoryLabel: 'Finishing & Blowout',
    description: 'Voluminous beach waves, glass-sleek straight locks, or bouncy glamour blowouts.',
    fullDetails: 'Cleanse with heat-protectant prep, round brush blowout, and thermal finishing for long-lasting bounce and luminous movement.',
    duration: '40 - 50 mins',
    priceStartingAt: '₹600',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85',
    featured: true
  },
  {
    id: 'bridal-occasion',
    name: 'Bridal & Occasion Styling',
    category: 'bridal',
    categoryLabel: 'Occasion & Couture',
    description: 'Exquisite bridal updos, contemporary reception styling, and occasion-ready elegance.',
    fullDetails: 'Complete consultation, trial styling preview, veil/floral setting, and long-wear structural hold that lasts flawlessly through your celebrations.',
    duration: '90 - 150 mins',
    priceStartingAt: '₹3,500',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85',
    featured: true
  },
  {
    id: 'mens-grooming',
    name: 'Men’s Precision Grooming',
    category: 'grooming',
    categoryLabel: 'Men’s Styling',
    description: 'Sculpted fade, scissor work, beard architecture, and hot towel facial compress.',
    fullDetails: 'Consultation-driven cutting, beard contouring with straight razor crisp lines, soothing botanical balm, and matte or satin hair styling paste finish.',
    duration: '45 - 60 mins',
    priceStartingAt: '₹600',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
    featured: false
  },
  {
    id: 'global-hair-colour',
    name: 'Global Colour & Root Touch-Up',
    category: 'colour',
    categoryLabel: 'Rich Pigments',
    description: 'Seamless grey coverage, rich espresso brunettes, warm chestnuts, and luminous copper tones.',
    fullDetails: 'Ammonia-free high-shine formulations that nourish hair integrity while delivering deep, vibrant pigment depth and multidimensional reflection.',
    duration: '90 - 120 mins',
    priceStartingAt: '₹2,200',
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=85',
    featured: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Contemporary Styling Stations',
    category: 'interiors',
    categoryLabel: 'Salon Ambience',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85',
    description: 'Warm cove lighting, plush Italian styling chairs, and architectural mirrors create an inspiring space.',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    id: 'g2',
    title: 'Dimensional Honey Balayage',
    category: 'colour',
    categoryLabel: 'Colour Artistry',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
    description: 'Seamless sun-kissed blending for low-maintenance, luxurious grow-out.'
  },
  {
    id: 'g3',
    title: 'Precision Layered Cut',
    category: 'styling',
    categoryLabel: 'Signature Cuts',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1000&q=85',
    description: 'Face-framing movement sculpted with customized shear texturizing.'
  },
  {
    id: 'g4',
    title: 'Restorative Hair Spa Wash Lounge',
    category: 'treatments',
    categoryLabel: 'Spa Lounge',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
    description: 'Ergonomic reclined wash basins designed for complete physical relaxation during scalp treatments.'
  },
  {
    id: 'g5',
    title: 'Silky Keratin Transformation',
    category: 'treatments',
    categoryLabel: 'Smooth & Gloss',
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85',
    description: 'Glass-smooth shine and weightless movement after our signature smoothing ritual.'
  },
  {
    id: 'g6',
    title: 'Bridal & Red-Carpet Styling',
    category: 'styling',
    categoryLabel: 'Occasion Hair',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1000&q=85',
    description: 'Intricate romantic textures and secure hold engineered for milestone events.'
  },
  {
    id: 'g7',
    title: 'Men’s Sculpted Fade & Styling',
    category: 'styling',
    categoryLabel: 'Grooming',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85',
    description: 'Clean taper lines and refined texture tailored for contemporary professionals.'
  },
  {
    id: 'g8',
    title: 'Luxury Product Dispenser Bar',
    category: 'interiors',
    categoryLabel: 'Artisan Care',
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=85',
    description: 'Curated premium organic serums, restorative bond builders, and high-performance finishing oils.'
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'r1',
    author: 'Neha Singhal',
    role: 'Local Guide · DLF Phase 3',
    rating: 5,
    date: '3 days ago',
    service: 'Balayage & Hair Gloss',
    text: 'Visited Legend Unisex Salon at Pink Town for a complete hair makeover. The senior stylist took 20 minutes just consulting on shades that suit my warm undertone. The balayage came out so seamless and zero brassiness! Absolutely the top salon in DLF Phase 3.',
    verified: true
  },
  {
    id: 'r2',
    author: 'Vikramaditya Roy',
    role: 'Cyber Hub Executive',
    rating: 5,
    date: '1 week ago',
    service: 'Advanced Haircut & Beard Sculpting',
    text: 'Been coming here since 2018. Legend Salon never disappoints. Their precision shears and clean fade technique are unmatched in Gurgaon. The staff is courteous, appointments are strictly on time, and hygiene is 10/10.',
    verified: true
  },
  {
    id: 'r3',
    author: 'Ananya Deshmukh',
    role: 'Verified Google Reviewer',
    rating: 5,
    date: '2 weeks ago',
    service: 'Keratin Smoothing & Hair Spa',
    text: 'My frizzy and unmanageable hair feels like silk after their Keratin treatment. No burning eyes, no overwhelming odor, and the wash basin massage was pure bliss. Highly recommend for anyone looking for gentle hair smoothing in Sector 24.',
    verified: true
  },
  {
    id: 'r4',
    author: 'Harsh Vardhan Sharma',
    role: 'Sector 24 Resident',
    rating: 5,
    date: '3 weeks ago',
    service: 'Men’s Styling & Scalp Detox',
    text: 'Top notch unisex salon on U-25 road. Very professional vibe without the snobbish attitude of other high-end salons. Fair pricing, premium products, and great coffee while you wait. 4.9 stars is thoroughly earned.',
    verified: true
  },
  {
    id: 'r5',
    author: 'Meenakshi Iyer',
    role: 'Local Guide · 48 Reviews',
    rating: 5,
    date: '1 month ago',
    service: 'Bridal Occasion Styling & Makeup',
    text: 'Booked Legend for a family sangeet event. They accommodated 4 of us smoothly. The curls stayed intact all night despite the humidity, and the makeup was subtle, radiant, and elegant. Super grateful to the team!',
    verified: true
  },
  {
    id: 'r6',
    author: 'Kabir Oberoi',
    role: 'DLF Cyber City Regular',
    rating: 5,
    date: '1 month ago',
    service: 'Signature Cut & Protein Therapy',
    text: 'Hands down the best grooming and haircut spot in U-Block. The master stylist knows exact sectioning techniques and gives great tips for everyday maintenance. Always leave feeling confident.',
    verified: true
  }
];

export const BENEFITS_DATA: Benefit[] = [
  {
    id: 'b1',
    title: 'Personalised Consultation',
    description: 'Every appointment begins with an in-depth conversation to understand your hair history, daily lifestyle, and style goals.',
    iconName: 'Sparkles'
  },
  {
    id: 'b2',
    title: 'Modern Techniques',
    description: 'Contemporary European cutting methods, precision foil balayage, and advanced bond-strengthening formulations.',
    iconName: 'Scissors'
  },
  {
    id: 'b3',
    title: 'Calm Luxury Ambience',
    description: 'An oasis of calm with warm architectural cove lighting, acoustic comfort, and attentive hospitality.',
    iconName: 'Compass'
  },
  {
    id: 'b4',
    title: 'Attention to Detail',
    description: 'From customized sectioning to meticulous blow-dry finishes, no step is compromised.',
    iconName: 'CheckCircle2'
  },
  {
    id: 'b5',
    title: 'Unisex Hair Artistry',
    description: 'Equally refined styling, texturizing, colouring, and grooming treatments tailored for both women and men.',
    iconName: 'Users'
  }
];

export const EXPERIENCE_BENEFITS = [
  {
    title: 'Personalised Consultation',
    description: 'We map your face shape, texture, and personal aesthetic before touching a strand.'
  },
  {
    title: 'Experienced Master Stylists',
    description: 'Artists trained in international academies with deep mastery of modern techniques.'
  },
  {
    title: 'Premium Formulations',
    description: 'Only high-performance, bond-protecting, and nourishing products touch your hair.'
  }
];

export const TRUST_CATEGORIES = [
  {
    id: 'styling',
    title: 'Hair Styling',
    description: 'Personalised cuts and styling designed to complement your features and personality.',
    icon: 'Scissors',
    badge: 'Precision Artistry'
  },
  {
    id: 'colour',
    title: 'Hair Colour',
    description: 'Modern colour techniques, highlights, balayage, and personalised colour transformations.',
    icon: 'Sparkles',
    badge: 'Seamless Depth'
  },
  {
    id: 'treatment',
    title: 'Hair Treatments',
    description: 'Professional treatments focused on healthier, smoother, stronger-looking hair.',
    icon: 'ShieldCheck',
    badge: 'Restorative Care'
  }
];
