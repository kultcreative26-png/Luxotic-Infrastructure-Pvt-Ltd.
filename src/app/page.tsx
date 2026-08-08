"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/site";
import { PROJECTS_DATA } from "@/data/projects";
import EnquireModal from "@/components/EnquireModal";
import AnimatedSection from "@/components/AnimatedSection";

export default function HomePage() {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[650px] w-full flex items-center justify-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="LUXOTIC Luxury Real Estate Architecture"
            fill
            priority
            className="object-cover object-center brightness-75 scale-105 transition-transform duration-10000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>LUXOTIC INFRASTRUCTURE PVT. LTD.</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.1] tracking-tight text-white">
              Building Landmarks. <br />
              <span className="italic font-light text-slate-200">Creating Legacies.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl leading-relaxed">
              Delivering premium farmhouses, plotted enclaves, and luxury residences across prime growth corridors in India with complete transparency and uncompromised excellence.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/projects"
                className="px-7 py-3.5 bg-white text-slate-900 text-xs font-semibold uppercase tracking-widest hover:bg-slate-100 transition-all flex items-center gap-2 group shadow-lg"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                onClick={() => setEnquireOpen(true)}
                className="px-7 py-3.5 bg-slate-900/80 hover:bg-slate-900 border border-white/30 text-white text-xs font-semibold uppercase tracking-widest backdrop-blur-md transition-all flex items-center gap-2"
              >
                <span>Discover Luxotic</span>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 text-[10px] uppercase tracking-widest">
          <span>Scroll to Explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                  ABOUT LUXOTIC INFRASTRUCTURE
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 leading-tight">
                  Where Vision Meets <br />
                  <span className="italic">Exceptional Living</span>
                </h2>
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>{SITE_DATA.about.introParagraph1}</p>
                  <p>{SITE_DATA.about.introParagraph2}</p>
                  <p>{SITE_DATA.about.introParagraph3}</p>
                </div>

                <div className="pt-4 flex items-center gap-8">
                  <div>
                    <div className="text-2xl font-serif text-slate-900 font-bold">100%</div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500">
                      Transparent Dealing
                    </div>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div>
                    <div className="text-2xl font-serif text-slate-900 font-bold">Verified</div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-500">
                      Clear Title Land
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-900 hover:text-blue-900 border-b border-slate-900 pb-1 transition-all group"
                  >
                    <span>Read Our Full Story</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl img-zoom-container">
                  <Image
                    src="/images/fresh/luxotic-residences.jpg"
                    alt="Luxotic Premium Architectural Landmark"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-slate-900 text-white p-6 hidden sm:block max-w-xs shadow-xl border border-slate-800">
                  <div className="text-xs uppercase tracking-widest text-amber-400 font-semibold mb-1">
                    Tagline
                  </div>
                  <div className="font-serif text-sm italic">
                    "{SITE_DATA.tagline}"
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY LUXOTIC */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-slate-200">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  OUR CORE DIFFERENCE
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl text-slate-900">
                  Why Luxotic
                </h2>
              </div>
              <p className="text-xs text-slate-500 max-w-md mt-4 md:mt-0 font-light">
                Built upon a foundation of total transparency, strategic location planning, and unyielding customer commitment.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITE_DATA.coreValues.slice(0, 4).map((val, idx) => (
              <AnimatedSection key={val.number} delay={idx * 0.15}>
                <div className="bg-white p-8 border border-slate-200/80 luxury-card flex flex-col justify-between space-y-6 h-full">
                  <div>
                    <div className="text-3xl font-serif font-light text-slate-400 mb-4">
                      {val.number}
                    </div>
                    <h3 className="font-serif text-xl text-slate-900 mb-1">
                      {val.title}
                    </h3>
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-600 mb-3">
                      {val.subtitle}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                  <div className="w-8 h-0.5 bg-slate-900" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                  CURATED REAL ESTATE PORTFOLIO
                </div>
                <h2 className="font-serif text-3xl sm:text-5xl text-slate-900">
                  Featured Projects
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
                {["All", "Farmhouses", "Plotted Developments", "Residential Properties"].map(
                  (cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                        selectedCategory === cat
                          ? "bg-slate-900 text-white shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat}
                    </button>
                  )
                )}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <AnimatedSection key={project.slug} delay={idx * 0.15}>
                <div className="group border border-slate-200 bg-white flex flex-col justify-between luxury-card h-full">
                  <div>
                    <div className="relative aspect-[16/10] w-full img-zoom-container bg-slate-100">
                      <Image
                        src={project.heroImage}
                        alt={project.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 font-semibold">
                        {project.category}
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        {project.location}
                      </div>
                      <h3 className="font-serif text-xl text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      Status: {project.status}
                    </span>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-900 group-hover:translate-x-1 transition-transform"
                    >
                      <span>Explore Project</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-900" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CORE OFFERINGS */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="max-w-2xl mb-16">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-2">
                OUR SPECIALIZED OFFERINGS
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white">
                Tailored Real Estate Solutions
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SITE_DATA.services.slice(0, 3).map((service, idx) => (
              <AnimatedSection key={service.id} delay={idx * 0.15}>
                <div className="relative group border border-slate-800 bg-slate-900/60 p-8 space-y-6 flex flex-col justify-between hover:border-slate-700 transition-colors h-full">
                  <div className="relative aspect-[16/9] w-full overflow-hidden mb-4 img-zoom-container">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl text-white">
                      {service.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      "{service.tagline}"
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/our-approach"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white hover:text-amber-400 pt-4"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              START YOUR REAL ESTATE JOURNEY
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-slate-900 mt-2">
              Let's Create Something Exceptional.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto font-light leading-relaxed mt-4">
              Whether you are looking for a luxury farmhouse, a strategically located plot, or expert property consultation, our team is ready to guide you.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setEnquireOpen(true)}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold uppercase tracking-widest shadow-lg transition-all"
              >
                Send Enquiry
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-semibold uppercase tracking-widest transition-all"
              >
                Visit Contact Page
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <EnquireModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
      />
    </div>
  );
}
