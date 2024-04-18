import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
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

describe("imageCarousel component", (): void => {
  it("Should render component without crashing", (): void => {
    render(<ImageCarousel imageCarouselData={mockImageData} />);
  });

  // Props are rendered in the page
  it("Passes in data from array correctly", (): void => {
    const { getByAltText, getByText } = render(
      <ImageCarousel imageCarouselData={mockImageData} />
    );

    mockImageData.forEach(async (image): Promise<void> => {
      let tag = getByAltText(image.alt);

      await waitFor((): void => {
        expect(tag).toHaveAttribute("src", image.src);
        console.log(tag);
      });

      expect(tag).toHaveAttribute("alt", image.alt);
      expect(getByText(image.caption)).toBeInTheDocument();
    });
  });

  // Clicking on left arrow changes currentSlide to the previous index
  it("Switches displayed image to the left ", (): void => {
    const { getByText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockImageData} />
    );

    fireEvent.click(getByText("<"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockImageData[2].caption
    );

    fireEvent.click(getByText("<"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockImageData[1].caption
    );
  });

  // Clicking on right arrow changes currentSlide to the following index
  it("Switches displayed image to the right ", (): void => {
    const { getByText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockImageData} />
    );

    fireEvent.click(getByText(">"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockImageData[1].caption
    );

    fireEvent.click(getByText(">"));
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockImageData[2].caption
    );
  });

  /*
    Clicking on none active thumbnail should make it active,
    make then thumbnail notcurrent and change current slide
  */
  it("Switches to clicked thumbnail image ", (): void => {
    const { getByAltText, getByTestId } = render(
      <ImageCarousel imageCarouselData={mockImageData} />
    );

    // alt for thumbnail adds one to the index for screen readers
    const thumbnail = getByAltText("image 2 thumbnail");

    fireEvent.click(thumbnail);
    expect(thumbnail).toHaveClass("currentThumb");
    expect(getByAltText("image 1 thumbnail")).toHaveClass("notCurrentThumb");
    expect(getByTestId("currentSlide")).toHaveTextContent(
      mockImageData[1].caption
    );
  });
});
