export interface Project {
  slug: string;
  name: string;
  category: "Farmhouses" | "Plotted Developments" | "Residential Properties";
  categorySlug: "farmhouses" | "plots" | "residential";
  tagline: string;
  location: string;
  heroImage: string;
  status: "Ongoing" | "Upcoming" | "Ready for Possession";
  shortDescription: string;
  overview: string[];
  highlights: string[];
  amenities: { name: string; icon: string }[];
  gallery: string[];
  masterplanImage: string;
  brochurePath: string;
  reraNumber: string;
  squareFootage: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    slug: "luxotic-signature-farmhouses",
    name: "Luxotic Signature Farmhouses",
    category: "Farmhouses",
    categorySlug: "farmhouses",
    tagline: "Live in nature. Live in luxury.",
    location: "Prime Green Corridor, Noida / NCR",
    heroImage: "/images/fresh/luxotic-farmhouse-fresh.jpg",
    status: "Ongoing",
    shortDescription: "Exclusive luxury farmhouse estates combining serene natural surroundings, modern architectural aesthetics, private swimming pools, and high-appreciation potential.",
    overview: [
      "Luxotic Signature Farmhouses represent the pinnacle of countryside retreat living designed for discerning buyers seeking serenity without compromising on urban luxury.",
      "Set amid sprawling green spaces, each farmhouse plot is crafted with wide internal roadways, perimeter security, dedicated plantation zones, and seamless access to expressways.",
      "Designed as a peaceful sanctuary for weekend getaways, family celebrations, and secure long-term capital growth."
    ],
    highlights: [
      "Legally verified clear-title farmhouse plots",
      "Private gated entry with 24/7 multi-tier security",
      "Expansive green landscapes & tropical tree plantations",
      "High capital growth & rental return potential",
      "Proximity to major expressways and urban centers",
      "Custom architecture consultation available"
    ],
    amenities: [
      { name: "Private Pool Provision", icon: "Waves" },
      { name: "Gated Enclave", icon: "ShieldCheck" },
      { name: "24/7 Security", icon: "Lock" },
      { name: "Internal Paved Roads", icon: "Milestone" },
      { name: "Perimeter Fencing", icon: "Grid" },
      { name: "Lush Landscaping", icon: "Trees" }
    ],
    gallery: [
      "/images/fresh/luxotic-farmhouse-fresh.jpg",
      "/images/fresh/luxotic-experience-lounge.jpg",
      "/images/hero/hero-main.jpg",
      "/images/fresh/luxotic-interior-living.jpg"
    ],
    masterplanImage: "/images/fresh/luxotic-masterplan-render.jpg",
    brochurePath: "/downloads/luxotic-farmhouses-brochure.pdf",
    reraNumber: "[CONTENT REQUIRED]",
    squareFootage: "[CONTENT REQUIRED]"
  },
  {
    slug: "luxotic-horizon-plots",
    name: "Luxotic Horizon Plotted Enclave",
    category: "Plotted Developments",
    categorySlug: "plots",
    tagline: "Secure today. Prosper tomorrow.",
    location: "Strategic Growth Corridor, Noida, UP",
    heroImage: "/images/fresh/luxotic-plots-fresh.jpg",
    status: "Ongoing",
    shortDescription: "Masterplanned premium residential & investment plots featuring underground utility infrastructure, wide paved roads, and unmatched growth potential.",
    overview: [
      "Luxotic Horizon Plotted Enclave offers strategically located residential plots engineered for high return on investment and immediate construction readiness.",
      "Featuring subterranean electricity cables, modern drainage, solar avenue lighting, and wide internal paved boulevards, this project sets new benchmarks for plotted developments.",
      "Ideal for building custom luxury villas or establishing a resilient real estate asset portfolio in India's fastest-growing corridor."
    ],
    highlights: [
      "Legally verified clear-title plot boundaries",
      "Underground cabling & underground drainage systems",
      "Grand entry gate house with access control",
      "Proximity to upcoming infrastructure corridors & commercial hubs",
      "Flexible plot sizes tailored to custom villa layouts",
      "Immediate site visit & booking support"
    ],
    amenities: [
      { name: "Underground Utilities", icon: "Zap" },
      { name: "Solar Streetlights", icon: "Sun" },
      { name: "Demarcated Plots", icon: "MapPin" },
      { name: "Grand Entrance Gate", icon: "Building2" },
      { name: "Storm Water Drainage", icon: "CloudRain" },
      { name: "Green Park Zones", icon: "Trees" }
    ],
    gallery: [
      "/images/fresh/luxotic-plots-fresh.jpg",
      "/images/fresh/luxotic-masterplan-render.jpg",
      "/images/sustainability/green-building.jpg",
      "/images/fresh/luxotic-residences.jpg"
    ],
    masterplanImage: "/images/fresh/luxotic-masterplan-render.jpg",
    brochurePath: "/downloads/luxotic-plots-brochure.pdf",
    reraNumber: "[CONTENT REQUIRED]",
    squareFootage: "[CONTENT REQUIRED]"
  },
  {
    slug: "luxotic-grand-residences",
    name: "Luxotic Grand Residences",
    category: "Residential Properties",
    categorySlug: "residential",
    tagline: "Modern residential spaces crafted for comfort and class.",
    location: "Prime City Location, Noida, UP",
    heroImage: "/images/fresh/luxotic-residences.jpg",
    status: "Upcoming",
    shortDescription: "Sophisticated luxury apartments and independent residences combining contemporary architecture, double-height lobbies, and world-class lifestyle amenities.",
    overview: [
      "Luxotic Grand Residences are designed to redefine modern urban living through sleek architectural facades, thoughtful spatial planning, and high-specification interiors.",
      "Each residence provides abundant natural light, panoramic balcony views, energy-efficient glazing, and private elevator lobbies.",
      "Embodying modern luxury with zero wasted space, creating an enduring heritage home for generations to come."
    ],
    highlights: [
      "Contemporary glass & stone architectural elevation",
      "Double-height entrance lobby with concierge service",
      "High-speed passenger & service elevators",
      "Dedicated multi-tier resident parking",
      "Energy-efficient orientation & smart home readiness",
      "Prime proximity to schools, hospitals & transit corridors"
    ],
    amenities: [
      { name: "Grand Clubhouse", icon: "Home" },
      { name: "Fitness Center", icon: "Dumbbell" },
      { name: "High-Speed Elevators", icon: "ArrowUp" },
      { name: "Concierge Desk", icon: "UserCheck" },
      { name: "Power Backup", icon: "BatteryCharging" },
      { name: "EV Charging Bay", icon: "Zap" }
    ],
    gallery: [
      "/images/fresh/luxotic-residences.jpg",
      "/images/fresh/luxotic-interior-living.jpg",
      "/images/hero/hero-main.jpg",
      "/images/fresh/luxotic-experience-lounge.jpg"
    ],
    masterplanImage: "/images/fresh/luxotic-masterplan-render.jpg",
    brochurePath: "/downloads/luxotic-residences-brochure.pdf",
    reraNumber: "[CONTENT REQUIRED]",
    squareFootage: "[CONTENT REQUIRED]"
  }
];
