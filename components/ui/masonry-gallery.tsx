"use client";

import Masonry from 'react-masonry-css';
import { CloudinaryImage } from './cloudinary-image';
import { useState } from 'react';
import { Dialog, DialogContent } from './dialog';
import { CloudinaryImage as CloudinaryImageType } from '@/lib/cloudinary';

interface MasonryGalleryProps {
  images: CloudinaryImageType[];
}

export function MasonryGallery({ images }: MasonryGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<CloudinaryImageType | null>(null);
  
  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {images.map((image) => (
          <div 
            key={image.id}
            className="mb-4 cursor-pointer transition-transform hover:scale-[1.02]"
            onClick={() => setSelectedImage(image)}
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
        ))}
      </Masonry>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <div className="relative aspect-[4/3]">
              <CloudinaryImage
                publicId={selectedImage.id}
                alt="Kitchen design"
                fill
                priority
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}