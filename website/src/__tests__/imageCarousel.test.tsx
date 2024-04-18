import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ImageCarousel from "@/lib/components/imageCarousel";
import { ImageSetCaptions } from "@/lib/interface/imageSetInterfaces";

const mockImageData: ImageSetCaptions[] = [
  {
    id: "0",
    src: "/image_0.jpg",
    alt: "alt of image_0",
    caption: "caption of image_0",
  },
  {
    id: "1",
    src: "/image_1.jpg",
    alt: "alt of image_1",
    caption: "caption of image_1",
  },
  {
    id: "2",
    src: "/image_2.jpg",
    alt: "alt of image_2",
    caption: "caption of image_2",
  },
];

describe("imageCarousel component", () => {
  // Image carousel renders without crashing
  it("Should render component without crashing", () => {
    render(<ImageCarousel imageCarouselData={mockImageData} />);
  });

  // Data is used correctly
  it("Displays data from array correctly", () => {
    const { getByAltText, getByText } = render(
      <ImageCarousel imageCarouselData={mockImageData} />
    );

    mockImageData.forEach((image) => {
      expect(getByAltText(image.alt)).toBeDefined();
      expect(getByText(image.caption)).toBeInTheDocument();
    });
  });

  // Check left arrow changes image to the left of itself
  // Check right arrow changes image to the left of itself
  // Clicking on thumbnail goes to the specified image
});
