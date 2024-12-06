import { Award, Users, Clock, Lightbulb } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    icon: Award,
    value: '10+',
    label: 'Années d\'expérience',
  },
  {
    icon: Users,
    value: '500+',
    label: 'Clients satisfaits',
  },
  {
    icon: Clock,
    value: '1000+',
    label: 'Projets réalisés',
  },
  {
    icon: Lightbulb,
    value: '100%',
    label: 'Satisfaction client',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">À Propos de Perfect Design</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Votre partenaire de confiance pour la conception et la réalisation de cuisines
            exceptionnelles depuis plus de 10 ans.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-gray-900" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?q=80&w=2970&auto=format&fit=crop"
              alt="Notre équipe"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
            <p className="text-gray-600 mb-4">
              Perfect Design est né d&apos;une passion pour l&apos;architecture d&apos;intérieur et 
              d&apos;une vision claire : créer des cuisines qui allient esthétique et fonctionnalité.
            </p>
            <p className="text-gray-600 mb-4">
              Notre équipe d&apos;experts combine créativité et expertise technique pour transformer 
              vos rêves en réalité. Nous croyons que chaque cuisine raconte une histoire unique.
            </p>
            <p className="text-gray-600">
              Basés à Blida, nous servons des clients dans toute l&apos;Algérie, apportant notre 
              touche d&apos;excellence à chaque projet que nous entreprenons.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                Nous nous efforçons d&apos;atteindre l&apos;excellence dans chaque aspect de notre travail.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                Nous restons à la pointe des tendances et des technologies en matière de design.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Engagement</h3>
              <p className="text-gray-600">
                Nous nous engageons à satisfaire pleinement les attentes de nos clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}