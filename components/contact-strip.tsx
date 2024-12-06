"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export function ContactStrip() {
  return (
    <div className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5" />
            <span>+213 658 029 903</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>Designzo341@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>Blida, Ouled Yaïch, Algérie</span>
          </div>
        </div>
      </div>
    </div>
  );
}