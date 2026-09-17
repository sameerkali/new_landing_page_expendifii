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
  location: "Noida, India",
  linkedin: "https://in.linkedin.com/company/expendifii",
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
    name: "Custom landing pages",
    domain: "Built to order",
    href: "#contact",
    status: "Available",
    customers: "Built once, hosted by us",
    headline: "Need a page, not a product?",
    summary:
      "Single-page sites for shops and small businesses, hosted and maintained by us.",
    body: [
      "We also build single-page sites for shops and small businesses — somewhere to send people from Instagram, Google, or a printed menu. Built once, fast, and we host and maintain it so you don't have to think about it again.",
    ],
    bullets: [
      "Somewhere to send people from Instagram, Google, or a printed menu",
      "Built once, fast",
      "We host and maintain it",
    ],
    image: "/animation_images/landingPageDisplay.webp",
    imageAlt: "Custom landing page built for a café",
    gallery: [
      {
        src: "/animation_images/landingPageDisplay.webp",
        alt: "Custom landing page built for a café",
        caption: "One page, built once, hosted and maintained by us.",
      },
    ],
    accentIndex: "04",
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
  { value: "Noida", label: "Based in India, customers India-wide" },
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
    a: "Noida, India. Customers are across India.",
  },
];

export const navLinks = [
  { label: "Products", href: "/#products" },
  { label: "Why us", href: "/#why" },
  { label: "FAQ", href: "/#faq" },
];
