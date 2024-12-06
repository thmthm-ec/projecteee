import { CloudinaryImage } from "@/lib/types/cloudinary";

export interface GalleryImageProps {
  image: CloudinaryImage;
  onClick: () => void;
}

export interface GalleryModalProps {
  image: CloudinaryImage | null;
  onClose: () => void;
}

export interface MasonryGalleryProps {
  images: CloudinaryImage[];
}