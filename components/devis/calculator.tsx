"use client";

import { useState } from "react";
import { Calculator as CalculatorIcon } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

export function Calculator() {
  const [dimensions, setDimensions] = useState({
    length: "",
    width: "",
  });

  const area = Number(dimensions.length) * Number(dimensions.width);
  const pricePerSquareMeter = 400;
  const totalPrice = area * pricePerSquareMeter;

  return (
    <div className="bg-white rounded-xl shadow-md p-8">
      <div className="flex items-center gap-3 mb-6">
        <CalculatorIcon className="w-6 h-6" />
        <h2 className="text-2xl font-semibold">Calculateur de prix</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="length" className="block text-sm font-medium text-gray-700 mb-1">
            Longueur (mètres)
          </label>
          <input
            type="number"
            id="length"
            min="0"
            step="0.1"
            value={dimensions.length}
            onChange={(e) => setDimensions(prev => ({ ...prev, length: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Ex: 3.5"
          />
        </div>

        <div>
          <label htmlFor="width" className="block text-sm font-medium text-gray-700 mb-1">
            Largeur (mètres)
          </label>
          <input
            type="number"
            id="width"
            min="0"
            step="0.1"
            value={dimensions.width}
            onChange={(e) => setDimensions(prev => ({ ...prev, width: e.target.value }))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
            placeholder="Ex: 2.8"
          />
        </div>

        <div className="pt-6 border-t">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Surface totale:</span>
            <span className="font-semibold">{area ? `${area.toFixed(2)} m²` : "-"}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Prix par m²:</span>
            <span className="font-semibold">{formatCurrency(pricePerSquareMeter)} DZD</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4 pt-4 border-t">
            <span>Prix estimé:</span>
            <span>{area ? formatCurrency(totalPrice) : "-"} DZD</span>
          </div>
        </div>
      </div>
    </div>
  );
}