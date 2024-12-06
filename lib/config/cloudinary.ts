import { CloudinaryConfig } from "../types/cloudinary";

export const cloudinaryConfig: CloudinaryConfig = {
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "dgwesgtcp",
  api_key: process.env.CLOUDINARY_API_KEY || "215814727196357",
  api_secret: process.env.CLOUDINARY_API_SECRET || "E1Uq7Ty8jFUq2EkdvgglNuu10a4",
  secure: true,
};