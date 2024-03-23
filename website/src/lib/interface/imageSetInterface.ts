import { StaticImageData } from "next/image";

export interface ImageSetInterface {
  id: string;
  image: string | StaticImageData;
  alt: string;
  credits?: string;
  creditLink?: string;
}
