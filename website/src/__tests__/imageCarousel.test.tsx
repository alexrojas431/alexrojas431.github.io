import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import ImageCarousel from "@/lib/components/imageCarousel";
import { ImageSetCaptions } from "@/lib/interface/imageSetInterfaces";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
  INVALID_INTERFACE_ERROR_MESSAGE,
  INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE,
  INVALID_TYPE_ERROR_MESSAGE,
  NON_ARRAY_ERROR_MESSAGE,
} from "@/lib/util/globalConstants";

//* Mock data

const mockCarouselData: ImageSetCaptions[] = [
  {
    id: "0",
    src: "/image_0.jpg",
    alt: "alt of image_0",
    credits: "credits 0",
    creditTitle: "creditsTitle 0",
    creditLink: "https://google.com",
    caption: "caption of image_0",
  },
  {
    id: "1",
    src: "/image_1.jpg",
    alt: "alt of image_1",
    credits: "credits 1",
    creditTitle: "creditsTitle 1",
    creditLink: "https://bing.com",
    caption: "caption of image_1",
  },
  {
    id: "2",
    src: "/image_2.jpg",
    alt: "alt of image_2",
    credits: "credits 2",
    creditTitle: "creditsTitle 2",
    creditLink: "https://yahoo.com",
    caption: "caption of image_2",
  },
];

const mockWithStaticImageData: ImageSetCaptions[] = [
  {
    id: "0",
    src: {
      src: "/image_0.jpg",
      height: 50,
      width: 50,
    },
    alt: "alt of image_0",
    caption: "caption of image_0",
  },
];

const mockWithoutCreditsData: ImageSetCaptions[] = [
  {
    id: "0",
    src: "/image_0.jpg",
    alt: "alt of image_0",
    caption: "caption of image_0",
  },
];

//* Invalid mock data

const mockNonArrayData: any = {
  id: 1,
  location: "location",
};

const mockInvalidObjectData: any[] = [
  {
    id: 1,
    location: "location",
  },
];

const mockIncompleteData: any[] = [
  {
    id: "",
    src: "",
    alt: "",
    caption: "",
  },
];

const mockInvalidTypeData: any[] = [
  {
    id: 1,
    src: 1,
    alt: 1,
    caption: 2,
  },
];

const mockInvalidStaticImageData: any[] = [
  {
    id: "0",
    src: {
      src: "/image_0.jpg",
    },
    alt: "alt of image_0",
    caption: "caption of image_0",
  },
];

const mockInvalidCreditsData: ImageSetCaptions[] = [
  {
    id: "0",
    src: "/image_0.jpg",
    alt: "alt of image_0",
    creditTitle: "exCreditsTitle",
    creditLink: "https://google.com",
    caption: "caption of image_0",
  },
];

describe("imageCarousel prop validation", (): void => {
  // Check that props is an array
  it("Should throw error if props isn't an array", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockNonArrayData} />)
    ).toThrow("\nImageCarousel: " + NON_ARRAY_ERROR_MESSAGE + "\n");
  });

  // Check that props is not empty
  it("Should throw error if props has not data", (): void => {
    expect(() => render(<ImageCarousel imageCarouselData={[]} />)).toThrow(
      "\nImageCarousel: " + EMPTY_PROPS_ERROR_MESSAGE + "\n"
    );
  });

  // Check that invalid object fails interface validation
  it("Should throw error if object doesn't follow interface's keys", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockInvalidObjectData} />)
    ).toThrow(
      "\nImageCarousel: " +
        INVALID_INTERFACE_ERROR_MESSAGE +
        " 'ImageSetCaptions'.\n"
    );
  });

  // Check that invalid object fails type validation
  it("Should throw error if object doesn't follow interface's key types", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockInvalidTypeData} />)
    ).toThrow(
      "\nImageCarousel: " +
        INVALID_TYPE_ERROR_MESSAGE +
        " 'ImageSetCaptions'.\n"
    );
  });

  // Check that invalid object fails empty props for keys validation
  it("Should throw error if object has empty properties for required keys", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockIncompleteData} />)
    ).toThrow(
      "\nImageCarousel: " +
        EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
        " 'ImageSetCaptions'.\n"
    );
  });

  // Check that invalid object fails credits validation
  it("Should throw error if object has inconsistant filled/empty credit items", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockInvalidCreditsData} />)
    ).toThrow("\nImageCarousel: " + INVALID_CREDITS_ERROR_MESSAGE + "\n");
  });

  // Check that invalid object fails next/Image validation
  it("Should throw error if src key has object that doesn't follow StaticImageData.", (): void => {
    expect(() =>
      render(<ImageCarousel imageCarouselData={mockInvalidStaticImageData} />)
    ).toThrow(
      "\nImageCarousel: " + INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE + "\n"
    );
  });
});

describe("imageCarousel component", (): void => {
  // Check that staticImageData properties are used
  it("Renders ImageCarousel even with staticImageData", (): void => {
    const { getByAltText } = render(
      <ImageCarousel imageCarouselData={mockWithStaticImageData} />
    );

    mockWithStaticImageData.forEach(async (image): Promise<void> => {
      let tag = getByAltText(image.alt);

      await waitFor((): void => {
        expect(tag).toHaveAttribute("src", image.src);
        expect(tag).toHaveAttribute("height", 50);
        expect(tag).toHaveAttribute("width", 50);
      });
    });
  });

  // Check that Credits text are not rendered when not provided
  it("Does not render credits as it's empty", (): void => {
    const { getByText } = render(
      <ImageCarousel imageCarouselData={mockWithoutCreditsData} />
    );

    const pTag = getByText(mockWithoutCreditsData[0].caption);

    expect(pTag).not.toHaveTextContent(/credits/);
  });

  // Multiple elements are rendered
  it("Should render several objects at a time", (): void => {
    const { getByAltText, getByText } = render(
      <ImageCarousel imageCarouselData={mockCarouselData} />
    );

    mockCarouselData.forEach(async (image): Promise<void> => {
      let tag = getByAltText(image.alt);

      await waitFor((): void => {
        expect(tag).toHaveAttribute("src", image.src);
      });

      expect(tag).toHaveAttribute("alt", image.alt);
      expect(getByText(image.caption)).toBeInTheDocument();
      expect(getByText(image.credits as string)).toBeInTheDocument();
      expect(getByText(image.credits as string)).toHaveAttribute(
        "href",
        image.creditLink
      );
      expect(getByText(image.credits as string)).toHaveAttribute(
        "title",
        image.creditTitle
      );
    });
  });

  // Check that currentSlide changes to the previous index
  it("Switches displayed image to the left when clicking on left arrow", (): void => {
    const { getByText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockCarouselData} />
    );

    fireEvent.click(getByText("<"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[2].caption
    );

    fireEvent.click(getByText("<"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[1].caption
    );
  });

  // Check that currentSlide changes to the following index
  it("Switches displayed image to the right when clicking on the right arrow", (): void => {
    const { getByText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockCarouselData} />
    );

    fireEvent.click(getByText(">"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[1].caption
    );

    fireEvent.click(getByText(">"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[2].caption
    );

    fireEvent.click(getByText(">"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[0].caption
    );
  });

  /*
    Check that on click non-active thumbnail turns active,
    makes active thumbnail turn non-active,
    and changes current slide to then clicked thumbnail image
  */
  it("Switches to image based on clicked thumbnail image ", (): void => {
    const { getByAltText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockCarouselData} />
    );

    // alt for thumbnail adds one to the index for screen readers
    const thumbnail = getByAltText("image 2 thumbnail");

    fireEvent.click(thumbnail);
    expect(thumbnail).toHaveClass("currentThumb");
    expect(getByAltText("image 1 thumbnail")).toHaveClass("notCurrentThumb");
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockCarouselData[1].caption
    );
  });
});
