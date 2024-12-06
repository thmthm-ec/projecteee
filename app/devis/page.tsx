"use client";

import { Calculator } from "@/components/devis/calculator";
import { DevisInfo } from "@/components/devis/devis-info";

export default function DevisPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Calculez votre devis</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtenez une estimation instantanée pour votre projet de cuisine
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Calculator />
          <DevisInfo />
        </div>
      </div>
    </main>
  );
}