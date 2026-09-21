/**
 * Single source of truth for site copy.
 * Mirrors landing.md — edit here, the pages follow.
 */

export const site = {
  name: "Expendifii",
  tagline: "Small software for small businesses.",
  footerLine: "Built, owned, and run by us.",
  positioning:
    "Expendifii builds and runs its own software for small Indian businesses — review collection, loyalty stamps, and transport management. Live products, paying customers.",
  whatsapp: "+91 96393 56395",
  whatsappHref: "https://wa.me/919639356395",
  email: "work.sameerfaridi@gmail.com",
  location: "India",
  linkedin: "https://www.linkedin.com/in/sameer-faridi",
  year: 2026,
} as const;

export const hero = {
  h1a: "Small software for",
  h1b: "small businesses.",
  sub: "We build and run our own products review collection, digital loyalty cards, and transport management. All three are live today and used by shops, cafés, and transporters across India.",
  cta: "See a Demo on WhatsApp",
  micro:
    "No signup page, no free trial. We show you a demo, and if it fits, you're running it the same week.",
} as const;

export type Product = {
  slug: string;
  name: string;
  domain: string;
  href: string;
  status: string;
  customers: string;
  headline: string;
  summary: string;
  body: string[];
  bullets: string[];
  note?: string;
  audience?: string;
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string; caption: string }[];
  accentIndex: string;
};

export const products: Product[] = [
  {
    slug: "biltyone",
    name: "BiltyOne",
    domain: "biltyone.com",
    href: "https://biltyone.com",
    status: "Live",
    customers: "10 paying transporters",
    headline: "Transport management for Indian transporters.",
    summary:
      "Replaces paper GRs, Excel sheets, and hired data-entry staff with one system.",
    body: [
      "Replaces paper GRs, Excel sheets, and hired data-entry staff with one system. Built around how Indian transport actually runs — the GR format, the three-copy print, drivers and customers managed on the ground — not a repurposed logistics tool from somewhere else.",
    ],
    bullets: [
      "Digital GRs instead of 20+ fields filled by hand, three times, every trip",
      "Records that don't get lost, misplaced, or soaked",
      "Customer and driver management built in",
      "Print output that matches what your office already uses",
    ],
    note: "Still early. We're onboarding our first transporters and changing things fast based on what they tell us.",
    image: "/projects/biltyoneLandingPage.webp",
    imageAlt: "BiltyOne consignment note entry screen",
    gallery: [
      {
        src: "/animation_images/Gr_preview_image.webp",
        alt: "BiltyOne consignment note entry screen",
        caption: "One entry replaces twenty-plus fields written three times.",
      },
      {
        src: "/animation_images/Gr_preview_image.webp",
        alt: "BiltyOne consignment list with status",
        caption: "Every GR searchable, nothing lost in a register.",
      },
    ],
    accentIndex: "01",
  },
  {
    slug: "review",
    name: "Review",
    domain: "review.expendifii.com",
    href: "https://review.expendifii.com",
    status: "Live",
    customers: "35 paying businesses",
    headline:
      "Review collection and customer analytics for shops, cafés, and restaurants.",
    summary:
      "A tap at the counter turns into a written Google review and data you keep.",
    body: [
      "A customer taps or scans the QR code at your counter. They pick what stood out — staff, food, music, whatever you set up — and rate you out of five. They get back a written review built from what they actually selected, not a generic AI paragraph. One tap copies it and opens your Google review page.",
      "Whether or not they post it, you keep the data: what customers notice, what's rated well, what isn't.",
    ],
    bullets: [
      "QR or tap card at the counter, nothing for the customer to install",
      "Review text built from what the customer actually selected",
      "One tap copies it and opens your Google review page",
      "You keep every response, posted or not",
    ],
    audience:
      "For any counter-facing business that wants Google reviews without asking staff to beg for them.",
    image: "/projects/reviewlandingPage.webp",
    imageAlt: "Review tap screen with rating chips",
    gallery: [
      {
        src: "/animation_images/review_image_.webp",
        alt: "Review tap screen with rating chips",
        caption: "The customer picks what stood out. The words follow.",
      },
      {
        src: "/animation_images/analytics_display_image.webp",
        alt: "Review analytics dashboard",
        caption: "What customers notice, whether or not they post it.",
      },
    ],
    accentIndex: "02",
  },
  {
    slug: "lol",
    name: "LOL",
    domain: "lol.expendifii.com",
    href: "https://lol.expendifii.com",
    status: "Live",
    customers: "44 paying businesses",
    headline: "A digital stamp card for cafés and restaurants.",
    summary:
      "A stamp each visit, a reward at the milestone, and no paper card to lose.",
    body: [
      "Your customer collects a stamp each visit. Hit the milestone, get the reward. You get a repeat customer instead of a one-time walk-in, and nobody loses a paper card in their wallet.",
    ],
    bullets: [
      "Works from the customer's phone, nothing to install",
      "You set the milestone and the reward",
      "You can see who's coming back and how often",
    ],
    image: "/projects/lolLandingPage.webp",
    imageAlt: "LOL digital stamp card",
    gallery: [
      {
        src: "/animation_images/lol_display_image.webp",
        alt: "LOL digital stamp card",
        caption: "Six of eight. Nothing to install, nothing to lose.",
      },
      {
        src: "/mock/lol-dashboard.svg",
        alt: "LOL repeat customer dashboard",
        caption: "Which days bring people back, and how often.",
      },
    ],
    accentIndex: "03",
  },
  {
    slug: "landing-pages",
    name: "Websites for local businesses",
    domain: "Built to order",
    href: "#contact",
    status: "Available",
    customers: "13+ live websites",
    headline: "Professional websites for local businesses",
    summary:
      "Ready-made packages from ₹6,000 for restaurants, shops, and local businesses.",
    body: [
      "We design, build, and launch fast, mobile-friendly websites for restaurants, shops, services, and local businesses. Choose a ready package or tell us what you need built once, hosted and maintained by us.",
    ],
    bullets: [
      "Ready packages from ₹6,000, or a custom quote for admin panels and backend features",
      "Mobile-first, WhatsApp-ready, built to launch fast",
      "We host and maintain it",
    ],
    image: "/animation_images/landingPageDisplay.webp",
    imageAlt: "Website built for a local café",
    gallery: [
      {
        src: "/animation_images/landingPageDisplay.webp",
        alt: "Website built for a local café",
        caption: "One page, built once, hosted and maintained by us.",
      },
    ],
    accentIndex: "04",
  },
];

export type Restaurant = {
  id: number;
  image?: string;
  city: string;
  name: string;
  category: string;
  tag: "cafe" | "restaurant";
  address: string;
  website: string;
  website_verified: boolean;
  phone?: string;
  alternate_phone?: string;
  email?: string;
  opening_hours?: string;
};

export const restaurantsData: Restaurant[] = [
  {
    id: 2,
    image: "/cafe_images/bhumiCafe.webp",
    city: "Rishikesh",
    name: "Bhūmi Café",
    category: "Cafe / Vegan / Healthy Food",
    tag: "cafe",
    address:
      "Divya, Yoga St, opposite Patanjali Yoga Foundation, Lower Tapovan, Rishikesh, Uttarakhand 249192",
    website: "https://www.bhumicafe.com/",
    website_verified: true,
    phone: "+91 9045641669",
    email: "hello@bhumicafe.com",
    opening_hours: "Daily 8:30 AM - 10:30 PM",
  },
  {
    id: 3,
    image: "/cafe_images/gangaviewcafe.webp",
    city: "Rishikesh",
    name: "Ganga View Cafe",
    category: "Cafe / Multi Cuisine / Riverside Restaurant",
    tag: "cafe",
    address: "Near 13 Stories Temple, Laxman Jhula, Rishikesh 249302",
    website: "https://gangaviewcafe.com/",
    website_verified: true,
    phone: "+91 92979 72929",
    opening_hours: "Daily 10:00 AM - 10:00 PM",
  },
  {
    id: 4,
    image: "/cafe_images/pinkcafe.webp",
    city: "Rishikesh",
    name: "Pink Cafe Bar & Restaurant",
    category: "Cafe / Bar / Restaurant",
    tag: "cafe",
    address: "Bypass Road, near Swiss Cottage, Tapovan, Rishikesh 249192",
    website: "https://pinkcaferishikesh.com/",
    website_verified: true,
    phone: "+91 80066 53825",
  },
  {
    id: 5,
    image: "/cafe_images/desivibesCafe.webp",
    city: "Noida",
    name: "Desi Vibes",
    category: "North Indian / Mughlai",
    tag: "restaurant",
    address: "G-44, Sector 18, Noida, Uttar Pradesh 201301",
    website: "https://www.desivibes.in/",
    website_verified: true,
    phone: "+91 120 4222227",
  },
  {
    id: 6,
    image: "/cafe_images/thePunjabiClubCafe.webp",
    city: "Noida",
    name: "The Punjab Club",
    category: "North Indian / Punjabi / Mughlai / Continental",
    tag: "restaurant",
    address:
      "Ground Floor, Tower B, Advant Navis Business Park, Sector 142, Noida, Uttar Pradesh 201304",
    website: "https://www.thepunjabclub.com/",
    website_verified: true,
    phone: "+91 9821699916",
    email: "info@thepunjabclub.com",
  },
  {
    id: 7,
    image: "/cafe_images/tawakCafe.webp",
    city: "Noida",
    name: "TAWAK",
    category: "Indian / Oriental / Pan Asian",
    tag: "restaurant",
    address: "H-224/H, 1st Floor, Sector 63, Noida, Uttar Pradesh 201301",
    website: "https://tawak.limetray.com/",
    website_verified: true,
    phone: "+91 8826774446",
    alternate_phone: "0120-4277446",
    email: "TAWAK@chefsatwork.co.in",
  },
  {
    id: 8,
    image: "/cafe_images/rustnroastCafe.webp",
    city: "Noida",
    name: "Rust 'N' Roast",
    category: "Indian / Italian / Fast Food",
    tag: "restaurant",
    address: "Sector 16B, Noida, Uttar Pradesh, India",
    website: "https://www.rustnroast.com/",
    website_verified: true,
  },
  {
    id: 9,
    image: "/cafe_images/ministryofdarucafe.webp",
    city: "Noida",
    name: "Ministry of Daru",
    category: "Restaurant / Bar / Live Music",
    tag: "restaurant",
    address: "H1A/25, Sector 63, Noida, Uttar Pradesh 201301",
    website: "https://www.ministryofdaru.com/",
    website_verified: true,
    phone: "+91 9667623005",
    email: "info@ministryofdaru.com",
  },
  {
    id: 10,
    image: "/cafe_images/sauleCafe.webp",
    city: "Noida",
    name: "Saulé Kitchen & Bar",
    category: "Contemporary Restaurant / Bar",
    tag: "restaurant",
    address:
      "1st Floor, Golf Street Hub, Jaypee Wishtown, Sector 128, Noida, Uttar Pradesh 201304",
    website: "https://www.saule.co.in/",
    website_verified: true,
    phone: "+91 9158800900",
    email: "saulebygng@gmail.com",
  },
  {
    id: 11,
    image: "/cafe_images/anardanaCafe.webp",
    city: "Noida",
    name: "Anardana",
    category: "Modern Indian",
    tag: "restaurant",
    address: "Sector 50, Noida, Uttar Pradesh, India",
    website: "https://www.anardana.in/",
    website_verified: true,
    phone: "01204678639",
    email: "hello@anardana.in",
  },
  {
    id: 12,
    image: "/cafe_images/goldenspoonrestroCafe.webp",
    city: "Noida",
    name: "Golden Spoon Restaurant",
    category: "Pure Vegetarian / Indian",
    tag: "restaurant",
    address: "Noida, Uttar Pradesh, India",
    website: "https://goldenspoonrestro.com/",
    website_verified: true,
  },
  {
    id: 13,
    image: "/cafe_images/biryanibiullsCafe.webp",
    city: "Noida",
    name: "Biryani Blues",
    category: "Biryani / Indian",
    tag: "restaurant",
    address: "Sector 110, Noida, Uttar Pradesh, India",
    website: "https://biryanibluescom.limetray.com/",
    website_verified: true,
    phone: "8010801000",
  },
  {
    id: 14,
    image: "/cafe_images/vaangoCafe.webp",
    city: "Noida",
    name: "Vaango",
    category: "South Indian / Vegetarian",
    tag: "restaurant",
    address: "Noida, Uttar Pradesh, India",
    website: "https://vaango.in/",
    website_verified: true,
  },
];

export const heroDeck = [
  {
    src: "/animation_images/Gr_preview_image.webp",
    alt: "BiltyOne goods receipt entry form",
  },
  {
    src: "/animation_images/review_image_.webp",
    alt: "Review tap screen with star ratings",
  },
  {
    src: "/animation_images/lol_display_image.webp",
    alt: "LOL digital stamp card",
  },
  {
    src: "/animation_images/biltyone_display_image.webp",
    alt: "BiltyOne transport dashboard",
  },
  {
    src: "/animation_images/analytics_display_image.webp",
    alt: "Review analytics dashboard",
  },
  {
    src: "/animation_images/tsm_page.webp",
    alt: "BiltyOne marketing landing page",
  },
];

export const numbers = [
  { value: "3", label: "Products live" },
  { value: "89", label: "Paying businesses" },
  { value: "100%", label: "Built and run by us" },
  { value: "India", label: "Based in India, customers India-wide" },
];

export type Audience = {
  id: string;
  index: string;
  name: string;
  line: string;
  icon: "cup" | "plate" | "shop" | "scissors" | "truck";
};

export const audiences: Audience[] = [
  { id: "cafes", index: "01", name: "Cafés", line: "Stamps and reviews", icon: "cup" },
  { id: "restaurants", index: "02", name: "Restaurants", line: "Repeat tables", icon: "plate" },
  { id: "retail", index: "03", name: "Retail counters", line: "Reviews at the till", icon: "shop" },
  { id: "salons", index: "04", name: "Salons & clinics", line: "Bookings that return", icon: "scissors" },
  { id: "transport", index: "05", name: "Transporters", line: "GRs without paper", icon: "truck" },
];

export const testimonials = [
  {
    quote:
      "We were asking every customer for a Google review and getting maybe one a week. Now it's on the table, they tap it, and it's done. Reviews went up in the first month.",
    name: "Rohit Sharma",
    role: "Owner, [Café name]",
    product: "Review",
  },
  {
    quote:
      "The stamp card got people coming back on weekdays, which never used to happen. Regulars started tracking it themselves.",
    name: "Neha Gupta",
    role: "Owner, [Restaurant name]",
    product: "LOL",
  },
  {
    quote:
      "We were filling GRs by hand and paying someone just to type them again. Now it's one entry and it prints the way we already print.",
    name: "Mohammed Ali",
    role: "[Transport company name]",
    product: "BiltyOne",
  },
];

export const founder = {
  heading: "We build what we've watched people struggle with.",
  paragraphs: [
    "I'm a curious person who doesn't like wasted time. If I've got a spare hour, I'd rather build something with it.",
    "BiltyOne came first. My father and relatives have been in transport for years, and I grew up watching paper GRs filled by hand — twenty-plus fields, three copies, every single trip. Records lost, misplaced, ruined in the rain. I'm a software engineer, and the tools to fix it already existed. So in 2025 I built it.",
    "Review and LOL came the same way: a small business doing something by hand that shouldn't be done by hand.",
  ],
  signature: "Sameer Faridi, Founder",
};

export const inDevelopment = {
  label: "In development",
  title: "Student tracking for school safety",
  body: "A device and app so parents know where their child is on the way to and from school. Early development. Not live, not taking customers yet.",
};

export const faqs = [
  {
    q: "Is there a free trial or a signup page?",
    a: "Not yet. We show you a demo, set it up for you, and you start using it. Self-signup is planned.",
  },
  {
    q: "What does it cost?",
    a: "It depends on the product and the size of your business. We quote after the demo. Public pricing will come with self-signup.",
  },
  {
    q: "Does the review tool write fake reviews?",
    a: "No. The text is built from what the customer actually selected and rated. They read it and choose whether to post it. Nothing is posted automatically.",
  },
  {
    q: "Do I need an app for the stamp card?",
    a: "No. It runs from the customer's phone browser. Nothing to install.",
  },
  {
    q: "Is BiltyOne finished?",
    a: "It's live and in daily use, but still early. We're onboarding our first transporters and shipping changes based on what they need.",
  },
  {
    q: "Do you build custom software?",
    a: "We build single-page sites for small businesses. For anything larger, ask us and we'll tell you honestly whether it's a fit.",
  },
  {
    q: "Where are you based?",
    a: "India. Customers are across the country.",
  },
];

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why us", href: "/#why" },
];

/**
 * Content for the /products/landing-pages sales catalog page.
 * Kept separate from the generic `products` template above since this
 * page follows its own sales-page structure, not the product template.
 */

export function packageWhatsappHref(packageName?: string) {
  const lines = [
    "Hi, I found your website packages on Expendifii. I want to build a website for my business.",
    "",
    "Business name:",
    "Business type:",
    packageName
      ? `Package I'm interested in: ${packageName}`
      : "Package I'm interested in:",
    "Requirements:",
  ];
  return `${site.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export type WebsitePackage = {
  id: string;
  name: string;
  price: string;
  bestFor: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

export const websitePackages: WebsitePackage[] = [
  {
    id: "starter",
    name: "Starter Website",
    price: "₹6,000",
    bestFor:
      "Small businesses that need a simple professional online presence.",
    features: [
      "One-page website",
      "Mobile responsive design",
      "Business information",
      "Services/products section",
      "Gallery",
      "WhatsApp button",
      "Google Maps",
      "Contact section",
      "Basic SEO setup",
    ],
    cta: "See Starter Demo",
  },
  {
    id: "business",
    name: "Business Website",
    price: "₹10,000–₹12,000",
    bestFor:
      "Businesses that need multiple pages and more room to showcase their services.",
    features: [
      "Everything in Starter",
      "Multiple pages",
      "Services/menu pages",
      "Gallery",
      "Contact form",
      "WhatsApp integration",
      "Google Maps",
      "Social media links",
      "Basic SEO setup",
    ],
    cta: "See Business Demos",
  },
  {
    id: "custom",
    name: "Custom Website",
    price: "₹16,000–₹20,000+",
    bestFor:
      "Businesses that need custom functionality or an admin panel.",
    features: [
      "Everything in Business",
      "Custom UI/UX",
      "Admin panel",
      "Content management",
      "Database",
      "Backend integration",
      "Custom business features",
      "Deployment",
    ],
    cta: "Request a Quote",
    highlight: true,
  },
];

export const designDirection = {
  heading: "Already have a look in mind?",
  note: "Custom design is available on every package, not just Custom.",
  linkHref: "https://dribbble.com/tags/restaurant-landing-page",
};

export const packageComparison: {
  feature: string;
  starter: string;
  business: string;
  custom: string;
}[] = [
  { feature: "Responsive design", starter: "✓", business: "✓", custom: "✓" },
  { feature: "WhatsApp", starter: "✓", business: "✓", custom: "✓" },
  { feature: "Google Maps", starter: "✓", business: "✓", custom: "✓" },
  { feature: "Gallery", starter: "✓", business: "✓", custom: "✓" },
  { feature: "Contact form", starter: "Optional", business: "✓", custom: "✓" },
  { feature: "Multiple pages", starter: "—", business: "✓", custom: "✓" },
  { feature: "Menu / catalogue", starter: "Basic", business: "✓", custom: "✓" },
  { feature: "Custom UI", starter: "—", business: "Basic", custom: "✓" },
  { feature: "Admin panel", starter: "—", business: "—", custom: "✓" },
  { feature: "Database / backend", starter: "—", business: "—", custom: "✓" },
  { feature: "Custom features", starter: "—", business: "—", custom: "✓" },
];

export const websiteFeatures = [
  {
    title: "Mobile-first",
    body: "Your website works properly on phones, tablets and desktops.",
  },
  {
    title: "WhatsApp",
    body: "Customers can contact you directly from the website.",
  },
  {
    title: "Google Maps",
    body: "Make it easy for customers to find your business.",
  },
  {
    title: "Gallery",
    body: "Show your products, food, work, interiors or services.",
  },
  {
    title: "Contact & enquiries",
    body: "Let customers send enquiries directly from the website.",
  },
  {
    title: "Fast & hosted",
    body: "We deploy the website and handle the technical setup.",
  },
];

export const packageGuide = [
  {
    id: "starter",
    title: "Choose Starter if:",
    body: "You mainly need a professional page with your business information, services, photos, WhatsApp and location.",
  },
  {
    id: "business",
    title: "Choose Business if:",
    body: "You need separate pages for services, menu, products, gallery or other business information.",
  },
  {
    id: "custom",
    title: "Choose Custom if:",
    body: "You need an admin panel, database, booking, payments, product management or custom functionality.",
  },
];

export const addOns: { name: string; price: string }[] = [
  { name: "Extra page", price: "₹1,000" },
  { name: "Admin panel", price: "₹5,000" },
  { name: "Product catalogue", price: "₹3,000" },
  { name: "Booking system", price: "₹3,000" },
  { name: "Payment integration", price: "₹2,000" },
  { name: "Enquiry management", price: "₹2,000" },
  { name: "Basic SEO setup", price: "₹1,500" },
  { name: "Custom functionality", price: "Get a quote" },
];

export const whatsIncludedItems = [
  "UI/design",
  "Frontend development",
  "Responsive implementation",
  "Agreed integrations",
  "Deployment",
  "Basic testing",
  "Agreed revisions",
];

export const whatsNotIncluded = [
  "Domain, hosting, paid APIs, SMS services, WhatsApp/SMS providers, payment gateway charges, premium plugins/services and other third-party costs may be charged separately.",
  "Professional photography, video production, extensive copywriting and other content-production work are not included unless specifically agreed.",
  "Custom features outside the selected package are quoted separately.",
];

export const revisionPolicy =
  "Each project includes a defined number of revision rounds based on the selected package. Major redesigns or new functionality requested after approval may be quoted separately.";

export const whatWeNeed = [
  "Business name",
  "Logo",
  "Business description",
  "Services/products",
  "Photos",
  "Phone number",
  "WhatsApp number",
  "Address",
  "Google Maps location",
  "Social media links",
  "Domain name, if already available",
];

export const buildProcess = [
  {
    step: "01",
    title: "Tell us about your business",
    body: "Send your business details and requirements.",
  },
  {
    step: "02",
    title: "Choose your package",
    body: "We recommend the appropriate package based on your requirements.",
  },
  {
    step: "03",
    title: "We design & build",
    body: "We create the website and implement the agreed features.",
  },
  {
    step: "04",
    title: "Review",
    body: "You review the website and provide feedback.",
  },
  {
    step: "05",
    title: "Launch",
    body: "We deploy the final website on your domain.",
  },
];

export const websiteFaqs = [
  {
    q: "How much does a website cost?",
    a: "Website packages start at ₹6,000. Multi-page websites start at ₹10,000–₹12,000 and custom websites with admin functionality start at ₹16,000–₹20,000+.",
  },
  {
    q: "Is domain and hosting included?",
    a: "Domain, hosting and third-party service costs depend on the setup and may be charged separately.",
  },
  {
    q: "Can I request custom features?",
    a: "Yes. Custom functionality is quoted separately based on the requirement.",
  },
  {
    q: "Can I update my website myself?",
    a: "Yes, if an admin panel/content management system is included in your package.",
  },
  {
    q: "Is the website mobile friendly?",
    a: "Yes. All website packages are designed to work across mobile, tablet and desktop screens.",
  },
  {
    q: "Can you help with content?",
    a: "Yes. Content assistance can be discussed if you need help preparing website copy.",
  },
  {
    q: "Can I add features later?",
    a: "Yes. Additional functionality can be added later and will be quoted separately.",
  },
  {
    q: "How long does it take?",
    a: "Delivery time depends on the package, content readiness and project scope. We confirm the expected timeline before starting.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Hosting and maintenance arrangements can be discussed based on the project.",
  },
];

export const websiteTrustStrip = [
  "13+ live websites",
  "Mobile responsive",
  "WhatsApp integration",
  "India-based development",
  "Direct support",
];
