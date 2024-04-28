import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import LogoRow from "@/components/logoRow";
import { LogoInterface } from "@/interface/logoInterface";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
} from "@/util/globalConstants";

//* Mock data

const mockLogoData: LogoInterface[] = [
  {
    id: "logo_0",
    link: "https://bing.com",
    image: {
      id: "logo_0-img",
      src: "/image-1.jpg",
      alt: "alt of image-1",
      credits: "credits of image-1",
      creditLink: "https://google.com",
      creditTitle: "image-1",
    },
    description: "desc_0",
  },
  {
    id: "logo_1",
    link: "https://yahoo.com",
    image: {
      id: "logo_1-img",
      src: "/image-2.jpg",
      alt: "alt of image-2",
      credits: "credits of image-2",
      creditLink: "https://gmail.com",
      creditTitle: "image-2",
    },
    description: "desc_1",
  },
];

const mockDataWithoutCredits: LogoInterface[] = [
  {
    id: "logo_0",
    link: "https://bing.com",
    image: {
      id: "logo_0-img",
      src: "/image-1.jpg",
      alt: "alt of image-1",
    },
    description: "desc_0",
  },
];

const mockWithStaticImageData: LogoInterface[] = [
  {
    id: "logo_0",
    link: "https://bing.com",
    image: {
      id: "logo_0-img",
      src: {
        src: "/image-1.jpg",
        height: 50,
        width: 50,
      },
      alt: "alt of image-1",
    },
    description: "desc_0",
  },
];

//* Invalid mock data

const mockIncompleteJobData: any[] = [
  {
    id: "",
    link: "",
    image: {
      id: "",
      src: "",
      alt: "",
    },
    description: "",
  },
];

const mockInvalidCreditsData: any[] = [
  {
    id: "logo_0",
    link: "https://bing.com",
    image: {
      id: "logo_0-img",
      src: "/image-1.jpg",
      alt: "alt of image-1",
      creditLink: "https://google.com",
      creditTitle: "image-1",
    },
    description: "desc_0",
  },
];

describe("LogoRow prop validation", (): void => {
  // Check that props is not empty
  it("Should throw error if props has no data", (): void => {
    expect(() => render(<LogoRow logoData={[]} />)).toThrow(
      "\nLogoRow: " + EMPTY_PROPS_ERROR_MESSAGE + "\n"
    );
  });

  // Check that invalid object fails empty props for keys validation
  it("Should throw error if object has empty properties for required keys from LogoInterface", (): void => {
    expect(() => render(<LogoRow logoData={mockIncompleteJobData} />)).toThrow(
      "\nLogoRow: " + EMPTY_OBJECT_KEYS_ERROR_MESSAGE + " 'LogoInterface'.\n"
    );
  });

  // Check that invalid object fails credits validation
  it("Should throw error if object has inconsistant filled/empty credit items", (): void => {
    expect(() => render(<LogoRow logoData={mockInvalidCreditsData} />)).toThrow(
      "\nLogoRow: " + INVALID_CREDITS_ERROR_MESSAGE + "\n"
    );
  });
});
