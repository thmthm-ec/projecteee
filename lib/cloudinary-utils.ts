import { v2 as cloudinary } from 'cloudinary';

export interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function getCloudinaryResources(prefix: string): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.api.resources({
      prefix,
      max_results: 100,
      type: 'upload'
    });

    return result.resources.map(resource => ({
      id: resource.public_id,
      url: resource.secure_url,
      width: resource.width,
      height: resource.height
    }));
  } catch (error) {
    console.error('Error fetching resources from Cloudinary:', error);
    return [];
  }
}

export function generateCloudinaryUrl(publicId: string, options = {}) {
  return cloudinary.url(publicId, {
    secure: true,
    quality: 'auto',
    fetch_format: 'auto',
    ...options
  });
}