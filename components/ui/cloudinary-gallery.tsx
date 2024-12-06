"use client";

import { CloudinaryImage } from "./cloudinary-image";
import type { CloudinaryImage as CloudinaryImageType } from "@/lib/types/cloudinary";

interface CloudinaryGalleryProps {
  images: CloudinaryImageType[];
}

export function CloudinaryGallery({ images }: CloudinaryGalleryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={image.id} className="relative aspect-square">
          <CloudinaryImage
            publicId={image.id}
            alt={`Gallery image ${index + 1}`}
            width={image.width}
            height={image.height}
            priority={index < 4}
            className="rounded-lg hover:opacity-90 transition-opacity"
          />
        </div>
      ))}
    </div>
  );
}