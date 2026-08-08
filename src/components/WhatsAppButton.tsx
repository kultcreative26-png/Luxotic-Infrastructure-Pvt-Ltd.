"use client";

import { MessageSquare } from "lucide-react";
import { SITE_DATA } from "@/data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_DATA.social.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact Luxotic on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 shadow-xl hover:shadow-2xl transition-all duration-300 group rounded-none"
    >
      <MessageSquare className="w-5 h-5 text-white" />
      <span className="hidden sm:inline text-xs font-semibold uppercase tracking-wider">
        Chat with Us
      </span>
    </a>
  );
}
