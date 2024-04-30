import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
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

describe("LogoRow component", (): void => {
  // Check that staticImageData properties are used
  it("Renders LogoRow even with staticImageData", (): void => {
    const { getByAltText } = render(
      <LogoRow logoData={mockWithStaticImageData} />
    );

    expect(
      getByAltText(mockWithStaticImageData[0].image.alt)
    ).toBeInTheDocument();

    let tag = getByAltText(mockWithStaticImageData[0].image.alt);

    const expectedSrc = expect.stringMatching("image-1.jpg");

    expect(tag).toHaveAttribute("src", expectedSrc);
    expect(tag).toHaveAttribute("height", "50");
    expect(tag).toHaveAttribute("width", "50");
  });

  // Check that Credits text are not rendered when not provided
  it("Does not render credits as it's empty", (): void => {
    const { getByText } = render(<LogoRow logoData={mockDataWithoutCredits} />);

    expect(
      getByText(mockDataWithoutCredits[0].description)
    ).not.toHaveTextContent(/credits/);
  });

  // Check that every item in the object renders
  it("Renders multiple Logo's when available", (): void => {
    const { getByAltText, getByText } = render(
      <LogoRow logoData={mockLogoData} />
    );

    mockLogoData.forEach(async (logo): Promise<void> => {
      expect(getByText(logo.description)).toBeInTheDocument();
      expect(getByAltText(logo.image.alt)).toBeInTheDocument();

      const imgTag = getByAltText(logo.image.alt);

      await waitFor((): void => {
        expect(imgTag).toHaveAttribute("src", logo.image.src);
      });

      expect(imgTag.parentElement).toHaveAttribute("href", logo.link);
      expect(getByText(logo.image.credits as string)).toBeInTheDocument();
      expect(getByText(logo.image.credits as string)).toHaveAttribute(
        "href",
        logo.image.creditLink
      );
      expect(getByText(logo.image.credits as string)).toHaveAttribute(
        "title",
        logo.image.creditTitle
      );
    });
  });
});
