import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dgwesgtcp",
  api_key: process.env.CLOUDINARY_API_KEY || "215814727196357",
  api_secret: process.env.CLOUDINARY_API_SECRET || "E1Uq7Ty8jFUq2EkdvgglNuu10a4",
  secure: true,
});

export interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export async function getKitchenImages(): Promise<CloudinaryImage[]> {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "GG/",
      max_results: 100
    });

    return result.resources.map(resource => ({
      id: resource.public_id,
      url: `https://res.cloudinary.com/dgwesgtcp/image/upload/q_auto,f_auto/${resource.public_id}`,
      width: resource.width,
      height: resource.height
    }));
  } catch (error) {
    console.error("Error fetching images from Cloudinary:", error);
    return [];
  }
}