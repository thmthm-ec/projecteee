export interface CloudinaryResource {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
}

export interface CloudinaryImage {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CloudinaryConfig {
  cloud_name: string;
  api_key?: string;
  api_secret?: string;
  secure: boolean;
}