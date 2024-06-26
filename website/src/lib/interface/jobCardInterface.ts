import { ImageSetInterface } from "@/interface/imageSetInterfaces";

export interface JobCardInterface {
  id: string;
  company: string;
  department: string;
  position: string;
  location: string;
  images: ImageSetInterface[];
  description: string;
}
