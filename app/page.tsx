"use client";

import { HeroSection } from "@/components/hero-section";
import { ContactStrip } from "@/components/contact-strip";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactStrip />
    </main>
  );
}