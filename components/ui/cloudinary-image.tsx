"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

export interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

export function CloudinaryImage({
  publicId,
  alt,
  width,
  height,
  priority = false,
  className,
}: CloudinaryImageProps) {
  const imageUrl = `https://res.cloudinary.com/dgwesgtcp/image/upload/q_auto,f_auto/${publicId}`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}