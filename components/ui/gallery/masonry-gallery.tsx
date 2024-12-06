"use client";

import Masonry from "react-masonry-css";
import { CloudinaryImage } from "../cloudinary-image";
import type { CloudinaryImage as CloudinaryImageType } from "@/lib/types/cloudinary";

interface MasonryGalleryProps {
  images: CloudinaryImageType[];
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumns}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4 bg-clip-padding"
    >
      {images.map((image, index) => (
        <div key={image.id} className="mb-4">
          <CloudinaryImage
            publicId={image.id}
            alt={`Kitchen design ${index + 1}`}
            width={image.width}
            height={image.height}
            priority={index < 4}
            className="rounded-lg hover:opacity-90 transition-opacity"
          />
        </div>
      ))}
    </Masonry>
  );
}