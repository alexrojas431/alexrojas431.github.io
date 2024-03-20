import { StaticImageData } from "next/image";

export interface LogoInterface {
    id: string;
    link: string;
    image: string | StaticImageData;
    alt: string;
    description: string;
    credit?: string;
}