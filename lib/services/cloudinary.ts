import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../config/cloudinary";
import { CloudinaryImage } from "../types/cloudinary";

cloudinary.config(cloudinaryConfig);

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