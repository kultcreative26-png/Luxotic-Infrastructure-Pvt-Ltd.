export interface DownloadableDoc {
  id: string;
  title: string;
  category: "Company Profile" | "Project Brochures" | "Project Presentations" | "Masterplans" | "Other Documents";
  fileType: "PDF" | "DOCX" | "ZIP";
  fileSize: string;
  filePath: string;
  isAvailable: boolean;
  description: string;
}

export const DOWNLOADS_DATA: DownloadableDoc[] = [
  {
    id: "company-profile",
    title: "LUXOTIC Infrastructure Corporate Profile",
    category: "Company Profile",
    fileType: "PDF",
    fileSize: "2.4 MB",
    filePath: "/downloads/Luxotic-Infrastructure-Corporate-Profile.pdf",
    isAvailable: true,
    description: "Official corporate presentation outlining Luxotic's vision, mission, core services, leadership message, and project portfolio."
  },
  {
    id: "farmhouses-brochure",
    title: "Luxotic Signature Farmhouses Brochure",
    category: "Project Brochures",
    fileType: "PDF",
    fileSize: "4.8 MB",
    filePath: "/downloads/Luxotic-Farmhouses-Brochure.pdf",
    isAvailable: true,
    description: "Comprehensive project brochure detailing plot dimensions, enclave amenities, location map, and investment benefits."
  },
  {
    id: "plots-brochure",
    title: "Luxotic Horizon Plotted Enclave Brochure",
    category: "Project Brochures",
    fileType: "PDF",
    fileSize: "3.9 MB",
    filePath: "/downloads/Luxotic-Plots-Brochure.pdf",
    isAvailable: true,
    description: "Complete overview of masterplanned plotted developments, underground utilities grid, and site layout plans."
  },
  {
    id: "residences-brochure",
    title: "Luxotic Grand Residences Overview",
    category: "Project Brochures",
    fileType: "PDF",
    fileSize: "5.1 MB",
    filePath: "/downloads/Luxotic-Residences-Brochure.pdf",
    isAvailable: false, // Coming soon fallback test
    description: "Architectural layouts, floor plans, luxury finishes, and lifestyle specifications for modern luxury residences."
  },
  {
    id: "masterplan-farmhouses",
    title: "Luxotic Farmhouses Enclave Masterplan",
    category: "Masterplans",
    fileType: "PDF",
    fileSize: "1.8 MB",
    filePath: "/downloads/Luxotic-Farmhouses-Masterplan.pdf",
    isAvailable: true,
    description: "High-resolution architectural layout showing internal roads, green belts, and plot orientation."
  },
  {
    id: "investment-guide",
    title: "Real Estate Investment & Property Advisory Guide",
    category: "Other Documents",
    fileType: "PDF",
    fileSize: "1.2 MB",
    filePath: "/downloads/Luxotic-Investment-Guide.pdf",
    isAvailable: false,
    description: "Market insights, legal due-diligence checklists, and growth trajectory analysis for NCR real estate."
  }
];
