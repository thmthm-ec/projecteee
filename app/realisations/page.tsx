import { getKitchenImages } from "@/lib/services/cloudinary";
import { MasonryGallery } from "@/components/ui/gallery/masonry-gallery";

export const revalidate = 3600; // Revalidate every hour

export default async function RealisationsPage() {
  const images = await getKitchenImages();

  return (
    <main className="min-h-screen pt-24 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Nos Réalisations</h1>
        <p className="text-xl text-gray-600 mb-12">
          Découvrez notre portfolio de cuisines modernes et élégantes, conçues sur mesure pour nos clients.
        </p>
        <MasonryGallery images={images} />
      </div>
    </main>
  );
}