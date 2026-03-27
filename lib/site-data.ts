export const businessInfo = {
  name: "Holly's Glow Suds and Scents L.L.C.",
  shortName: "Holly's Glow",
  phone: "321-550-6592",
  phoneHref: "tel:+13215506592",
  email: "hollyssparklesolutions87@gmail.com",
  emailHref: "mailto:hollyssparklesolutions87@gmail.com",
  serviceArea: "Orlando, Florida and surrounding areas",
  addressLocality: "Orlando",
  addressRegion: "FL",
};

/** Official social profiles (footer & optional reuse). Order: WhatsApp, X, Instagram, Facebook. */
export const socialLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/13215506592",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/hollysglow",
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/hollysglowsudsandscents",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/hollysglowsudsandscents",
  },
] as const;

export type ServiceItem = {
  slug: string;
  name: string;
  price: string;
  shortSummary: string;
  whoItsFor: string;
  included: string[];
  idealUseCases: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "glow-basic",
    name: "Glow Basic",
    price: "$140",
    shortSummary:
      "Routine maintenance cleaning to keep your home consistently fresh and comfortable.",
    whoItsFor:
      "Busy homeowners and families who want dependable recurring upkeep.",
    included: [
      "Dusting and wiping reachable surfaces",
      "Kitchen and bathroom surface sanitizing",
      "Vacuuming and mopping high-traffic floors",
      "Trash removal and general tidying",
    ],
    idealUseCases: [
      "Weekly or bi-weekly service",
      "General home upkeep",
      "Staying ahead of mess and buildup",
    ],
  },
  {
    slug: "glow-deep",
    name: "Glow Deep",
    price: "$250",
    shortSummary:
      "A detailed top-to-bottom reset that targets buildup and often-missed areas.",
    whoItsFor:
      "Homes needing extra attention before events, after busy seasons, or as a first clean.",
    included: [
      "Detailed bathroom and kitchen deep cleaning",
      "Baseboards, doors, and trim wiped down",
      "Thorough dust removal in overlooked areas",
      "Extended floor and high-touch detail work",
    ],
    idealUseCases: [
      "Seasonal reset cleaning",
      "First-time client starter service",
      "Pre-holiday or post-holiday refresh",
    ],
  },
  {
    slug: "glow-air",
    name: "Glow Air",
    price: "$130",
    shortSummary:
      "A light refresh service ideal for quick turnarounds and short-term rental upkeep.",
    whoItsFor:
      "Airbnb hosts and homeowners who need a clean, guest-ready space fast.",
    included: [
      "Surface wipe-down and quick sanitizing",
      "Bathroom and kitchen refresh",
      "Vacuuming and mopping",
      "Quick staging-friendly straightening",
    ],
    idealUseCases: [
      "Short-term rental turnovers",
      "Midweek touch-ups",
      "Pre-guest arrivals",
    ],
  },
  {
    slug: "glow-move",
    name: "Glow Move",
    price: "$350",
    shortSummary:
      "A move-in or move-out cleaning designed for empty homes and fresh starts.",
    whoItsFor:
      "Renters, homeowners, and property managers preparing a space for transition.",
    included: [
      "Detailed cleaning throughout empty rooms",
      "Cabinet, shelf, and closet wipe-downs",
      "Kitchen and bathroom deep sanitizing",
      "Full floor edge-to-edge cleaning",
    ],
    idealUseCases: [
      "Lease turnovers",
      "Pre-listing home prep",
      "Move-in peace of mind",
    ],
  },
  {
    slug: "glow-post-construction",
    name: "Glow Post-Construction",
    price: "$350",
    shortSummary:
      "Comprehensive post-renovation cleanup to remove dust and restore comfort.",
    whoItsFor:
      "Homeowners and contractors finishing remodels, repairs, or construction projects.",
    included: [
      "Fine dust removal from surfaces and corners",
      "Detailed fixture, trim, and baseboard wipe-down",
      "Kitchen and bathroom polishing",
      "Floor cleaning for debris and dust residue",
    ],
    idealUseCases: [
      "After remodels or additions",
      "After contractor completion",
      "Final cleanup before occupancy",
    ],
  },
];

/** One-line “Inclusions” copy for the /services pricing summary table. */
export const servicesPricingTableSummaries: Record<string, string> = {
  "glow-basic":
    "Routine maintenance cleaning for kitchens, bathrooms, and living areas",
  "glow-deep":
    "Detailed top-to-bottom cleaning targeting buildup and overlooked areas",
  "glow-air":
    "Light refresh cleaning ideal for upkeep or short-term rental turnovers",
  "glow-move": "Move-in or move-out cleaning for empty homes",
  "glow-post-construction":
    "Post-renovation cleanup for dust, debris residue, and detailed wipe-downs",
};

/** Featured client quotes shown on the Services & pricing page. */
export const servicesPageTestimonials: {
  name: string;
  date: string;
  quote: string;
  source?: string;
}[] = [
  {
    name: "Elizabeth H.",
    date: "1/29/26",
    quote:
      "Holly did an amazing job! Bathrooms and bedrooms were spotless. She even left an awesome-smelling candle for us to use. Highly recommend!",
  },
  {
    name: "Diane M.",
    date: "1/28/26",
    quote:
      "I hired Holly for a Deep Clean and my house still sparkles. Thank you for a job well done. I look forward to the future with this cleaning team.",
  },
  {
    name: "Everett Street",
    date: "January 17",
    source: "Facebook recommendation",
    quote:
      "Holly's Glow Suds and Scents did an amazing job! The kitchen, bathrooms, walls, and floors were spotless, and even the carpet spot cleaning looked fantastic—everything felt fresh and truly cared for. Professional, thorough, and reliable service I'd highly recommend.",
  },
];

export const addOnServices = [
  "Inside fridge",
  "Inside oven",
  "Interior windows",
  "Laundry folding",
  "Patio sweeping",
  "Pet hair removal",
];

export const testimonials = [
  {
    name: "Vanessa R.",
    quote:
      "My home felt brand new after the deep clean. Every detail was handled with care, and the booking process was simple.",
    service: "Glow Deep",
  },
  {
    name: "Marcus T.",
    quote:
      "As an Airbnb host, consistency is everything. Holly's Glow keeps my turnovers smooth and my guests happy.",
    service: "Glow Air",
  },
  {
    name: "Priya M.",
    quote:
      "Professional, punctual, and so detail-oriented. I love coming home after they visit.",
    service: "Glow Basic",
  },
  {
    name: "Ashley D.",
    quote:
      "Our move-out clean was flawless. The place looked better than when we moved in.",
    service: "Glow Move",
  },
  {
    name: "Carlos S.",
    quote:
      "Post-renovation dust was everywhere, and they handled it beautifully. The home finally feels livable again.",
    service: "Glow Post-Construction",
  },
  {
    name: "Nina L.",
    quote:
      "Reliable scheduling and great communication every time. You can tell they genuinely care about quality.",
    service: "Recurring Service",
  },
];

export const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "We serve Orlando, Florida and nearby surrounding areas. Reach out with your address and we will confirm availability.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer:
      "Yes, we arrive with professional cleaning products and tools. If you have product preferences, we can discuss them before your appointment.",
  },
  {
    question: "Are your products safe for kids and pets?",
    answer:
      "We prioritize family-friendly products and can adjust product choices for households with specific sensitivities.",
  },
  {
    question: "How long does a cleaning usually take?",
    answer:
      "Timing depends on home size, current condition, and selected package. Most standard visits take between 2 and 5 hours.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer:
      "No. Many clients provide secure entry instructions. You are also welcome to be home if preferred.",
  },
  {
    question: "Do you offer recurring service?",
    answer:
      "Yes, recurring options are available for weekly, bi-weekly, and monthly schedules based on your needs.",
  },
  {
    question: "Do you handle Airbnb turnovers?",
    answer:
      "Absolutely. Our Glow Air service is built for short-term rental refreshes and guest-ready presentation.",
  },
  {
    question: "What is included in a deep cleaning?",
    answer:
      "Deep cleaning includes enhanced detail work in kitchens, bathrooms, baseboards, and overlooked areas where dust and buildup collect.",
  },
  {
    question: "How do move-in and move-out cleanings work?",
    answer:
      "These services are performed in empty or mostly empty homes and focus on a complete reset before or after occupancy.",
  },
  {
    question: "Can I request add-on services?",
    answer:
      "Yes. Add-ons start at $20 and can be tailored to your visit, including inside oven, fridge, interior windows, and more.",
  },
  {
    question: "How do I book?",
    answer:
      "Use our booking form, call us at 321-550-6592, or email hollyssparklesolutions87@gmail.com to request your preferred date.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes, we are licensed and insured for your peace of mind.",
  },
];

export const trustPoints = [
  "Reliable scheduling",
  "Detail-focused cleaning",
  "Family-friendly service",
  "Serving Orlando and surrounding areas",
];

export const whyChooseUsPoints = [
  "Detail-oriented cleaning",
  "Dependable and professional",
  "Easy booking process",
  "Personalized service",
  "Great for recurring or one-time cleanings",
  "Ideal for homes and short-term rentals",
];

export const galleryItems = [
  {
    title: "Kitchen Detail Refresh",
    category: "Kitchen",
  },
  {
    title: "Bathroom Shine Reset",
    category: "Bathroom",
  },
  {
    title: "Guest-Ready Bedroom",
    category: "Bedroom",
  },
  {
    title: "Living Space Refresh",
    category: "Living Space",
  },
  {
    title: "Move-Out Turnover",
    category: "Move-Out",
  },
  {
    title: "Airbnb Same-Day Reset",
    category: "Airbnb",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];
