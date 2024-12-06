"use client";

import { GalleryModalProps } from "./types";
import { Dialog, DialogContent } from "../dialog/dialog";
import { CloudinaryImage } from "../cloudinary-image";

export function GalleryModal({ image, onClose }: GalleryModalProps) {
  if (!image) return null;

  return (
    <Dialog open={!!image} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <div className="relative aspect-[4/3]">
          <CloudinaryImage
            publicId={image.id}
            alt="Kitchen design"
            fill
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}