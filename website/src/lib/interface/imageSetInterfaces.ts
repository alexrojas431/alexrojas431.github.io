import { StaticImageData } from "next/image";

export interface ImageSetInterface {
  id: string;
  src: string | StaticImageData;
  alt: string;
  credits?: string;
  creditLink?: string;
  creditTitle?: string;
}

export interface ImageSetCaptions extends ImageSetInterface{
    caption: string;
}