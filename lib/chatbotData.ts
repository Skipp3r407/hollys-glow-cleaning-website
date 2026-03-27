export type ChatbotFaq = {
  id: string;
  keywords: string[];
  answer: string;
};

export const CHATBOT_FALLBACK = `Thanks for your question! For anything specific, please use the booking or contact section and someone will get back to you soon.

Would you like help with pricing, services, or booking?`;

export const QUICK_REPLIES: { label: string; message: string }[] = [
  { label: "Services", message: "What cleaning services do you offer?" },
  { label: "Pricing", message: "How much do your cleaning packages cost?" },
  { label: "Booking", message: "How do I book a cleaning?" },
  { label: "Service Areas", message: "What areas around Orlando do you serve?" },
  { label: "Deep Cleaning", message: "What is included in a deep cleaning?" },
  { label: "Airbnb Cleaning", message: "Do you clean Airbnb and short-term rentals?" },
  { label: "Contact", message: "What is your phone number and email?" },
];

export const CHATBOT_FAQS: ChatbotFaq[] = [
  {
    id: "faq-001",
    keywords: [
      "services",
      "offer",
      "what do you do",
      "packages",
      "what cleaning",
    ],
    answer:
      "We offer residential cleaning, Airbnb turnovers, move-in/move-out cleaning, and post-construction cleaning across Orlando and nearby areas. Popular packages include Glow Basic, Glow Deep, Glow Air, Glow Move, and Glow Post-Construction.",
  },
  {
    id: "faq-002",
    keywords: ["orlando", "serve", "local"],
    answer:
      "Yes. Holly's Glow proudly serves Orlando, Florida and surrounding communities. Tell us your address when you book and we will confirm coverage.",
  },
  {
    id: "faq-003",
    keywords: ["areas", "cover", "service area"],
    answer:
      "We focus on Orlando and nearby surrounding areas. Coverage can vary by schedule and drive time, so share your location for the fastest confirmation.",
  },
  {
    id: "faq-004",
    keywords: ["licensed", "insured", "insurance"],
    answer:
      "Yes. We are licensed and insured for your peace of mind. If you need documentation for a property manager or HOA, ask when you book.",
  },
  {
    id: "faq-005",
    keywords: ["weekends", "saturday", "sunday"],
    answer:
      "Weekend availability may be offered based on schedule. Share your preferred day and time on the booking form or call us to check the next openings.",
  },
  {
    id: "faq-006",
    keywords: ["locally owned", "local business", "small business"],
    answer:
      "We are a local Orlando-area cleaning business focused on dependable service, clear communication, and detail-oriented results for homes and rentals.",
  },
  {
    id: "faq-007",
    keywords: ["contact", "reach you", "get in touch"],
    answer:
      "Call 321-550-6592, email hollyssparklesolutions87@gmail.com, or use the Contact page to request a booking. We will respond as quickly as we can.",
  },
  {
    id: "faq-008",
    keywords: ["hours", "business hours", "when are you open"],
    answer:
      "Hours can vary by season and schedule. The fastest way to confirm timing is to message us or submit a booking request with your preferred date.",
  },
  {
    id: "faq-009",
    keywords: ["same company", "who are you", "about you"],
    answer:
      "Holly's Glow Suds and Scents L.L.C. provides premium-feel, professional cleaning for busy homeowners, families, and short-term rental hosts in Orlando.",
  },
  {
    id: "faq-010",
    keywords: ["emergency", "urgent", "asap"],
    answer:
      "We will do our best to accommodate urgent requests based on availability. For fastest help, call 321-550-6592 and share your timeline and address.",
  },
  {
    id: "faq-011",
    keywords: ["book", "booking", "schedule", "how do i book"],
    answer:
      "Book through the Contact page, call 321-550-6592, or email hollyssparklesolutions87@gmail.com with your address, service type, and preferred date.",
  },
  {
    id: "faq-012",
    keywords: ["online", "website", "form"],
    answer:
      "Yes. You can request service through the website contact form. Include details like home size and the package you want so we can respond accurately.",
  },
  {
    id: "faq-013",
    keywords: ["advance", "how far ahead", "notice"],
    answer:
      "Booking at least a few days ahead helps secure your preferred time. If you need sooner, ask anyway—sometimes we have last-minute openings.",
  },
  {
    id: "faq-014",
    keywords: ["same day", "today", "tonight"],
    answer:
      "Same-day service may be available depending on schedule and scope. Call 321-550-6592 for the quickest answer and next available slot.",
  },
  {
    id: "faq-015",
    keywords: ["reschedule", "change date", "move appointment"],
    answer:
      "Yes, rescheduling is possible depending on availability. Contact us as soon as your plans change so we can adjust your visit.",
  },
  {
    id: "faq-016",
    keywords: ["cancel", "cancellation", "refund"],
    answer:
      "Cancellation policies can vary by booking type and timing. Share your situation when you contact us and we will walk you through the best option.",
  },
  {
    id: "faq-017",
    keywords: ["recurring", "weekly", "biweekly", "monthly"],
    answer:
      "We offer recurring cleaning options such as weekly, bi-weekly, and monthly when scheduling allows. Ask for a recurring plan that fits your home.",
  },
  {
    id: "faq-018",
    keywords: ["first time", "new client", "intro"],
    answer:
      "New clients often start with Glow Deep for a thorough reset, then move to Glow Basic for maintenance. Tell us your goals and we will recommend a fit.",
  },
  {
    id: "faq-019",
    keywords: ["estimate", "quote", "price quote"],
    answer:
      "We can provide estimates based on your home details and selected package. Pricing may vary by home size, condition, and add-ons—share photos or notes if helpful.",
  },
  {
    id: "faq-020",
    keywords: ["free quote", "free estimate"],
    answer:
      "Yes—reach out for a quote. Include your address, square footage if known, and the service you want so we can respond with accurate guidance.",
  },
  {
    id: "faq-021",
    keywords: ["glow basic", "basic cleaning", "140"],
    answer:
      "Glow Basic starts at $140 and is designed for routine maintenance cleaning to keep your home fresh and comfortable. Final pricing may vary by home size and needs.",
  },
  {
    id: "faq-022",
    keywords: ["glow deep", "deep cleaning", "250"],
    answer:
      "Glow Deep starts at $250 and targets detailed, top-to-bottom cleaning with extra attention to buildup and often-missed areas. Pricing may vary by home size and condition.",
  },
  {
    id: "faq-023",
    keywords: ["glow air", "airbnb refresh", "130"],
    answer:
      "Glow Air starts at $130 and is a lighter refresh ideal for upkeep or short-term rental turnovers when you need a guest-ready reset quickly.",
  },
  {
    id: "faq-024",
    keywords: ["glow move", "move out", "move in", "350"],
    answer:
      "Glow Move starts at $350 and is for move-in or move-out cleaning in an empty or mostly empty home. Pricing may vary based on size and condition.",
  },
  {
    id: "faq-025",
    keywords: ["post construction", "renovation dust", "construction cleaning"],
    answer:
      "Glow Post-Construction starts at $350 and focuses on detailed cleanup after renovations or construction. Scope can vary—share project details when booking.",
  },
  {
    id: "faq-026",
    keywords: ["add on", "add-on", "extras", "20"],
    answer:
      "Add-on services start from $20 and can include items like inside fridge, inside oven, interior windows, laundry, patio sweeping, and pet hair removal.",
  },
  {
    id: "faq-027",
    keywords: ["price vary", "home size", "square feet", "how much", "cost"],
    answer:
      "Yes. Prices listed are baseline estimates and may vary based on home size, condition, and specific cleaning needs. We will confirm details before your visit.",
  },
  {
    id: "faq-028",
    keywords: ["payment", "pay", "card", "cash"],
    answer:
      "Payment options can be confirmed at booking. If you have a preferred method, mention it when you schedule and we will guide you.",
  },
  {
    id: "faq-029",
    keywords: ["tip", "gratuity"],
    answer:
      "Tips are never required but always appreciated if you love the service. Many clients prefer to tip in cash or through whatever method you already use for payment.",
  },
  {
    id: "faq-030",
    keywords: ["discount", "coupon", "deal"],
    answer:
      "Ask about any current promotions when you book. We can also recommend the best package to match your budget and cleaning goals.",
  },
  {
    id: "faq-031",
    keywords: ["glow basic include", "basic include"],
    answer:
      "Glow Basic focuses on routine maintenance tasks like surface wiping, kitchen and bath sanitizing, vacuuming/mopping, and general tidying—great for recurring upkeep.",
  },
  {
    id: "faq-032",
    keywords: ["glow deep include", "deep include"],
    answer:
      "Glow Deep adds more detail work such as deeper kitchen/bath cleaning, baseboards/trim attention, and more thorough dusting in overlooked areas.",
  },
  {
    id: "faq-033",
    keywords: ["glow air include", "air include"],
    answer:
      "Glow Air is a lighter refresh—ideal for quick turnovers—with surface wipe-downs, bathroom/kitchen refresh, vacuum/mop, and guest-friendly straightening.",
  },
  {
    id: "faq-034",
    keywords: ["glow move include", "move cleaning include"],
    answer:
      "Glow Move is designed for empty homes: detailed cleaning throughout rooms, cabinets/shelves/closets wipe-downs, and strong focus on kitchens and baths.",
  },
  {
    id: "faq-035",
    keywords: ["post construction include", "construction include"],
    answer:
      "Post-construction cleaning targets fine dust, debris residue, and detailed wipe-downs after work is complete so the home feels livable again.",
  },
  {
    id: "faq-036",
    keywords: ["standard cleaning", "regular cleaning"],
    answer:
      "A standard or routine cleaning typically covers high-touch surfaces, kitchens and bathrooms, floors, and general tidying—similar to Glow Basic maintenance goals.",
  },
  {
    id: "faq-037",
    keywords: ["kitchen", "clean kitchen"],
    answer:
      "Yes. Kitchen cleaning is included in our packages, with deeper detail in Glow Deep and move/post-construction services depending on your needs.",
  },
  {
    id: "faq-038",
    keywords: ["bathroom", "bath", "toilet"],
    answer:
      "Yes. Bathrooms are sanitized and detailed based on your package. Deep and move-out cleans include more intensive buildup removal.",
  },
  {
    id: "faq-039",
    keywords: ["bedroom", "bedrooms"],
    answer:
      "Yes. Bedrooms are dusted, tidied, and vacuumed as applicable. Let us know if you want extra focus on closets or baseboards.",
  },
  {
    id: "faq-040",
    keywords: ["baseboards", "baseboard"],
    answer:
      "Baseboard wiping is emphasized in deeper services like Glow Deep and many move/post-construction visits. Ask to add baseboard focus if needed.",
  },
  {
    id: "faq-041",
    keywords: ["inside fridge", "refrigerator"],
    answer:
      "Inside fridge cleaning is available as an add-on starting from $20. Mention it when booking so we can schedule enough time.",
  },
  {
    id: "faq-042",
    keywords: ["inside oven", "oven"],
    answer:
      "Inside oven cleaning is an add-on starting from $20. If it has heavy buildup, tell us so we can set the right expectations and time.",
  },
  {
    id: "faq-043",
    keywords: ["windows", "interior windows"],
    answer:
      "Interior window cleaning can be added as an add-on. Exterior windows may be limited—ask when booking if you need that specifically.",
  },
  {
    id: "faq-044",
    keywords: ["laundry", "wash clothes"],
    answer:
      "Laundry-related help may be available as an add-on depending on scheduling. Share what you need and we will confirm if we can include it.",
  },
  {
    id: "faq-045",
    keywords: ["patio", "sweep patio", "outdoor"],
    answer:
      "Patio sweeping may be available as an add-on. Mention outdoor areas when booking so we allocate time and confirm scope.",
  },
  {
    id: "faq-046",
    keywords: ["pet hair", "pets", "dog", "cat"],
    answer:
      "Pet hair removal can be added as an add-on. If shedding is heavy, let us know so we can plan extra time for floors and upholstery edges.",
  },
  {
    id: "faq-047",
    keywords: ["ceiling", "fans", "ceiling fan"],
    answer:
      "Reachable fans and fixtures may be dusted depending on package and safety. Ask if you want ceiling fans prioritized.",
  },
  {
    id: "faq-048",
    keywords: ["blinds", "shutters"],
    answer:
      "Dusting blinds can often be included upon request, especially in deep cleaning. Heavy grime may need extra time—mention it when booking.",
  },
  {
    id: "faq-049",
    keywords: ["mold", "mildew"],
    answer:
      "We clean surface grime in bathrooms, but specialized mold remediation may require a different professional. Share photos if you are unsure.",
  },
  {
    id: "faq-050",
    keywords: ["hoarding", "extreme mess"],
    answer:
      "Extremely cluttered homes may need decluttering before a standard cleaning can be effective. Tell us the situation so we can recommend the right approach.",
  },
  {
    id: "faq-051",
    keywords: ["airbnb", "short term rental", "turnover", "vrbo"],
    answer:
      "Yes. We handle Airbnb-style turnovers with scheduling focused on guest-ready presentation. Glow Air is built for quick refresh needs.",
  },
  {
    id: "faq-052",
    keywords: ["between guests", "guest stays"],
    answer:
      "We can clean between guest stays to reset bathrooms, kitchens, floors, and common areas so your rental is guest-ready on time.",
  },
  {
    id: "faq-053",
    keywords: ["short notice rental", "last minute airbnb"],
    answer:
      "Short-notice turnovers depend on availability. Call 321-550-6592 with checkout/check-in times for the fastest scheduling options.",
  },
  {
    id: "faq-054",
    keywords: ["guest ready", "5 star", "reviews"],
    answer:
      "We focus on reliable, detail-oriented turnover cleaning to help hosts maintain consistent guest experiences—especially kitchens, baths, and floors.",
  },
  {
    id: "faq-055",
    keywords: ["linens", "strip beds", "sheets"],
    answer:
      "Bed-making and linen handling may be available depending on your package and instructions. Confirm what you want done between stays when booking.",
  },
  {
    id: "faq-056",
    keywords: ["key lockbox", "smart lock"],
    answer:
      "Many hosts provide lockbox or door code access. Share clear entry instructions in your booking message so the visit stays smooth and secure.",
  },
  {
    id: "faq-057",
    keywords: ["move out", "moving out"],
    answer:
      "Move-out cleaning helps prepare a property for inspection or the next resident. Homes should be empty or mostly empty for best results.",
  },
  {
    id: "faq-058",
    keywords: ["move in", "moving in"],
    answer:
      "Move-in cleaning helps you start fresh before you unpack. We focus on detailed cleaning so your new space feels comfortable from day one.",
  },
  {
    id: "faq-059",
    keywords: ["empty home", "empty house"],
    answer:
      "Move-focused cleaning works best when rooms are empty so we can reach corners, closets, and cabinets effectively.",
  },
  {
    id: "faq-060",
    keywords: ["cabinets inside", "inside cabinets"],
    answer:
      "Inside cabinet wipe-downs are commonly included in move cleaning scopes. Confirm your priorities if you want extra time in kitchens or baths.",
  },
  {
    id: "faq-061",
    keywords: ["appliances", "inside appliances"],
    answer:
      "Inside fridge and oven are add-ons. Other appliance fronts are typically wiped down as part of standard or deep cleaning tasks.",
  },
  {
    id: "faq-062",
    keywords: ["construction dust", "renovation"],
    answer:
      "Post-construction cleaning addresses fine dust and residue after work is finished. Heavy debris removal may need to happen before we arrive.",
  },
  {
    id: "faq-063",
    keywords: ["remodel", "remodeling"],
    answer:
      "Yes—after remodeling we can help remove dust from surfaces, trim, and fixtures so the home feels clean and livable again.",
  },
  {
    id: "faq-064",
    keywords: ["paint overspray", "sheetrock dust"],
    answer:
      "We focus on cleanable dust and residue typical after projects. Unusual materials or hazards should be handled by the appropriate contractor first.",
  },
  {
    id: "faq-065",
    keywords: ["home during cleaning", "be home", "do i need to be home"],
    answer:
      "You do not have to be home. Many clients provide secure access instructions. If you prefer to be present, that works too.",
  },
  {
    id: "faq-066",
    keywords: ["supplies", "bring supplies", "equipment"],
    answer:
      "Yes—we arrive with professional cleaning supplies and tools. If you have product preferences or sensitivities, tell us before the appointment.",
  },
  {
    id: "faq-067",
    keywords: ["kids", "children", "safe"],
    answer:
      "We prioritize family-friendly approaches and can discuss product choices for households with kids. Mention any sensitivities when booking.",
  },
  {
    id: "faq-068",
    keywords: ["pets safe", "pet safe products"],
    answer:
      "Let us know about pets and any product concerns. We can adjust choices when possible to keep your home comfortable for animals and people.",
  },
  {
    id: "faq-069",
    keywords: ["how long", "duration", "hours"],
    answer:
      "Cleaning time depends on home size, package, and condition. Many visits fall in the 2–5 hour range, but we will estimate more accurately after details.",
  },
  {
    id: "faq-070",
    keywords: ["access", "instructions", "gate code"],
    answer:
      "Please provide clear access instructions (codes, parking notes, pets). The smoother the access, the more time we can spend cleaning.",
  },
  {
    id: "faq-071",
    keywords: ["security", "camera", "alarm"],
    answer:
      "If you have alarms or cameras, share how you want them handled. We respect privacy and follow your entry instructions carefully.",
  },
  {
    id: "faq-072",
    keywords: ["why choose you", "why hire you"],
    answer:
      "Clients choose us for dependable scheduling, detail-focused cleaning, and a polished experience tailored to Orlando homes and short-term rentals.",
  },
  {
    id: "faq-073",
    keywords: ["detail oriented", "attention to detail"],
    answer:
      "Yes—detail is a core part of our service, especially in deep cleans, turnovers, and post-construction work where finishing touches matter most.",
  },
  {
    id: "faq-074",
    keywords: ["different", "what makes you different"],
    answer:
      "We combine elevated presentation with local, personalized service—clear communication, consistent quality, and packages built for real home and rental needs.",
  },
  {
    id: "faq-075",
    keywords: ["testimonials", "reviews"],
    answer:
      "You can read client feedback on our Testimonials page. If you want references for a specific service type, ask when you contact us.",
  },
  {
    id: "faq-076",
    keywords: ["before and after", "photos", "gallery"],
    answer:
      "Visit the Gallery page for examples. Real photos can be updated over time as we collect more project images.",
  },
  {
    id: "faq-077",
    keywords: ["satisfaction", "guarantee", "redo"],
    answer:
      "If something misses the mark, contact us promptly so we can make it right. Clear feedback helps us improve every visit.",
  },
  {
    id: "faq-078",
    keywords: ["supplies i provide", "my vacuum"],
    answer:
      "We typically bring everything needed. If you want us to use specific products or equipment you provide, mention it before the appointment.",
  },
  {
    id: "faq-079",
    keywords: ["eco", "green", "natural products"],
    answer:
      "Ask about product preferences. We can discuss options for households that prefer gentler or fragrance-sensitive cleaning approaches when possible.",
  },
  {
    id: "faq-080",
    keywords: ["phone number", "call you"],
    answer:
      "Call us at 321-550-6592 for the fastest answers about availability, packages, and booking.",
  },
  {
    id: "faq-081",
    keywords: ["email address", "email you"],
    answer:
      "Email hollyssparklesolutions87@gmail.com with your details and preferred service. We will follow up as soon as we can.",
  },
  {
    id: "faq-082",
    keywords: ["get started", "next steps"],
    answer:
      "Choose a package, pick a preferred date, then submit the contact form or call 321-550-6592. We will confirm details and finalize your visit.",
  },
  {
    id: "faq-083",
    keywords: ["request quote", "get a quote"],
    answer:
      "Request a quote via the Contact page or email. Include home size, service type, and any add-ons for the most accurate guidance.",
  },
  {
    id: "faq-084",
    keywords: ["one time", "one-time", "single visit"],
    answer:
      "Yes—one-time cleanings are available. Many clients choose Glow Deep for a reset or Glow Move for transitions.",
  },
  {
    id: "faq-085",
    keywords: ["large home", "big house", "mansion"],
    answer:
      "Larger homes may require more time or adjusted pricing. Share square footage and photos if possible so we can plan appropriately.",
  },
  {
    id: "faq-086",
    keywords: ["apartment", "condo", "townhome"],
    answer:
      "Yes—we clean apartments, condos, and townhomes where scheduling and building access rules allow. Provide parking and entry notes.",
  },
  {
    id: "faq-087",
    keywords: ["hoa", "property manager"],
    answer:
      "We can coordinate with HOA or property requirements when needed. Share rules or documentation requests during booking.",
  },
  {
    id: "faq-088",
    keywords: ["supplies running out", "ran out of paper towels"],
    answer:
      "We aim to arrive prepared. If your home has unusual needs, tell us ahead of time so we can bring the right products and tools.",
  },
  {
    id: "faq-089",
    keywords: ["holiday", "black friday", "christmas"],
    answer:
      "Holiday schedules can fill quickly. Book early for peak dates, or call to ask about limited availability around major holidays.",
  },
  {
    id: "faq-090",
    keywords: ["gift", "gift card", "buy for someone"],
    answer:
      "If you want to gift cleaning services, contact us and we can discuss the best way to set it up for your recipient.",
  },
  {
    id: "faq-091",
    keywords: ["seniors", "elderly"],
    answer:
      "We work with many homeowners who want reliable, respectful service. Share any accessibility notes that help us serve you comfortably.",
  },
  {
    id: "faq-092",
    keywords: ["allergies", "asthma", "fragrance"],
    answer:
      "Tell us about allergies or fragrance sensitivity. We will do our best to accommodate product choices when possible.",
  },
  {
    id: "faq-093",
    keywords: ["keys", "lockbox"],
    answer:
      "Many clients use lockboxes or codes. Provide instructions securely and confirm what to do when the cleaning is complete.",
  },
  {
    id: "faq-094",
    keywords: ["team", "how many people", "crew"],
    answer:
      "Team size can vary by job scope and scheduling. We focus on efficient, thorough service whether it is a solo visit or a coordinated clean.",
  },
  {
    id: "faq-095",
    keywords: ["background", "screening", "trust"],
    answer:
      "We take professionalism seriously. If you have specific vetting questions for recurring access, ask during booking.",
  },
  {
    id: "faq-096",
    keywords: ["covid", "sanitize", "disinfect"],
    answer:
      "We emphasize sanitizing high-touch surfaces in kitchens and baths. If you want extra disinfection focus, mention it when scheduling.",
  },
  {
    id: "faq-097",
    keywords: ["floors", "hardwood", "tile", "laminate"],
    answer:
      "We vacuum and mop appropriate flooring types. Tell us about delicate finishes or special floor care instructions if needed.",
  },
  {
    id: "faq-098",
    keywords: ["stairs", "staircase"],
    answer:
      "Stair cleaning is included as part of reachable areas in your package. Very tall or narrow spaces may have limits—ask if unsure.",
  },
  {
    id: "faq-099",
    keywords: ["garage", "clean garage"],
    answer:
      "Garage cleaning may be available depending on scope. Describe what you want swept or wiped down and we will confirm feasibility.",
  },
  {
    id: "faq-100",
    keywords: ["laundry room", "utility room"],
    answer:
      "Laundry areas can be wiped down and tidied as part of your cleaning scope. Add laundry folding only if offered and scheduled as an add-on.",
  },
];
