import { Check } from "lucide-react";

const features = [
  "Conception personnalisée",
  "Matériaux de haute qualité",
  "Installation professionnelle",
  "Garantie sur les travaux",
  "Service après-vente",
  "Conseils d'experts"
];

export function DevisInfo() {
  return (
    <div className="bg-black text-white rounded-xl p-8">
      <h2 className="text-2xl font-semibold mb-6">Ce qui est inclus</h2>
      
      <div className="space-y-4 mb-8">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <div className="bg-white/10 rounded-lg p-6">
        <p className="text-sm leading-relaxed">
          Ce calculateur fournit une estimation de base pour votre projet de cuisine. 
          Le prix final peut varier en fonction de vos choix spécifiques de matériaux, 
          d&apos;équipements et de finitions. Contactez-nous pour un devis personnalisé détaillé.
        </p>
      </div>
    </div>
  );
}