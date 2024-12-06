"use client";

import { GalleryImageProps } from "./types";
import { CloudinaryImage } from "../cloudinary-image";

export function GalleryImage({ image, onClick }: GalleryImageProps) {
  return (
    <div 
      className="mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
        <CloudinaryImage
          publicId={image.id}
          alt="Kitchen design"
          fill
          className="transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
}