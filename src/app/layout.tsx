import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageTransition from "@/components/PageTransition";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luxoticinfra.com"),
  title: {
    default: "LUXOTIC Infrastructure | Premium Real Estate, Farmhouses & Plotted Developments",
    template: "%s | LUXOTIC Infrastructure",
  },
  description:
    "LUXOTIC Infrastructure Private Limited is a trusted real estate company delivering premium farmhouses, residential properties, and plotted developments across prime growth corridors in India.",
  keywords: [
    "Luxotic Infrastructure",
    "Luxury Real Estate India",
    "Premium Farmhouses Noida",
    "Plotted Developments NCR",
    "Residential Land Investment",
    "Luxury Villas India",
    "Real Estate Investment Advisory"
  ],
  authors: [{ name: "LUXOTIC Infrastructure Pvt. Ltd." }],
  openGraph: {
    title: "LUXOTIC Infrastructure | Building Trust. Creating Value.",
    description:
      "Delivering premium real estate solutions across farmhouses, residential properties, and plotted developments with complete transparency and excellence.",
    url: "https://www.luxoticinfra.com",
    siteName: "LUXOTIC Infrastructure",
    images: [
      {
        url: "/images/hero/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "LUXOTIC Infrastructure Real Estate Showcase",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LUXOTIC Infrastructure | Premium Real Estate",
    description:
      "Discover premium farmhouses, plotted developments, and residential properties.",
    images: ["/images/hero/hero-main.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sansFont.variable} ${displayFont.variable}`}
    >
      <body className="bg-white text-slate-900 flex flex-col min-h-screen antialiased selection:bg-slate-900 selection:text-white">
        <Header />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
