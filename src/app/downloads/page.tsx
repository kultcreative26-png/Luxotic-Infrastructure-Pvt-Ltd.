"use client";

import { useState } from "react";
import { Download, Eye, Clock } from "lucide-react";
import { DOWNLOADS_DATA } from "@/data/downloads";
import PageHeroBanner from "@/components/PageHeroBanner";

export default function DownloadsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Company Profile",
    "Project Brochures",
    "Masterplans",
    "Other Documents",
  ];

  const filteredDocs =
    selectedCategory === "All"
      ? DOWNLOADS_DATA
      : DOWNLOADS_DATA.filter((d) => d.category === selectedCategory);

  return (
    <div className="space-y-0 bg-white min-h-screen">
      {/* High-Impact Architectural Hero Banner */}
      <PageHeroBanner
        tag="DOCUMENT & RESOURCE HUB"
        title="Official Downloads"
        highlightText="& Documentation."
        subtitle="Access verified company profiles, project brochures, masterplans, and real estate investment resources."
        backgroundImage="/images/fresh/luxotic-masterplan-render.jpg"
      />

      {/* Downloads Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3 pb-8 border-b border-slate-200 mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-2">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="bg-white border border-slate-200 p-8 flex flex-col justify-between luxury-card space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 bg-slate-100 text-slate-700">
                      {doc.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {doc.fileType} • {doc.fileSize}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-slate-900">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {doc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-4">
                  {doc.isAvailable ? (
                    <>
                      <a
                        href={doc.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 flex items-center gap-2 transition-colors"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View</span>
                      </a>

                      <a
                        href={doc.filePath}
                        download
                        className="px-4 py-2.5 bg-slate-100 text-slate-900 text-xs font-semibold uppercase tracking-wider hover:bg-slate-200 flex items-center gap-2 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    </>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider border border-amber-200">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Coming Soon</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
