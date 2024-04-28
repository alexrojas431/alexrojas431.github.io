import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import JobCard from "@/components/jobCard";
import { JobCardInterface } from "@/interface/jobCardInterface";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
  INVALID_INTERFACE_ERROR_MESSAGE,
  INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE,
  INVALID_TYPE_ERROR_MESSAGE,
  NON_ARRAY_ERROR_MESSAGE,
} from "@/util/globalConstants";

//* Mock data

const mockJobCardData: JobCardInterface[] = [
  {
    id: "job_0",
    company: "comp_0",
    department: "dep_0",
    position: "pos_0",
    location: "loc_0",
    images: [
      {
        id: "job_0-img_0",
        src: "/image_1.jpg",
        alt: "alt of image_0",
        credits: "credits of image_0",
        creditLink: "https://google.com",
        creditTitle: "image_0",
      },
      {
        id: "job_0-img_1",
        src: "/image_2.jpg",
        alt: "alt of image_2",
        credits: "credits of image_2",
        creditLink: "https://bing.com",
        creditTitle: "image_2",
      },
    ],
    description: "desc_0",
  },
  {
    id: "job_1",
    company: "comp_1",
    department: "dep_1",
    position: "pos_1",
    location: "loc_1",
    images: [
      {
        id: "job_1-img_0",
        src: "/image_3.jpg",
        alt: "alt of image_3",
        credits: "credits of image_3",
        creditLink: "https://yahoo.com",
        creditTitle: "image_3",
      },
    ],
    description: "desc_1",
  },
];

const mockDataWithoutCredits: JobCardInterface[] = [
  {
    id: "job_0",
    company: "comp_0",
    department: "dep_0",
    position: "pos_0",
    location: "loc_0",
    images: [
      {
        id: "job_0-img_0",
        src: "/image_0.jpg",
        alt: "alt of image_0",
      },
    ],
    description: "desc_0",
  },
];

const mockWithStaticImageData: JobCardInterface[] = [
  {
    id: "job_0",
    company: "comp_0",
    department: "dep_0",
    position: "pos_0",
    location: "loc_0",
    images: [
      {
        id: "job_0-img_0",
        src: {
          src: "/image_0.jpg",
          height: 50,
          width: 50,
        },
        alt: "alt of image_0",
      },
    ],
    description: "desc_0",
  },
];

const mockDataWithoutImages: JobCardInterface[] = [
  {
    id: "job_2",
    company: "comp_2",
    department: "dep_2",
    position: "pos_2",
    location: "loc_2",
    images: [],
    description: "desc_2\nhello\nbye",
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

const mockIncompleteJobData: any[] = [
  {
    id: "",
    company: "",
    department: "",
    position: "",
    location: "",
    images: [
      {
        id: "",
        src: "",
        alt: "",
      },
    ],
    description: "",
  },
];

const mockInvalidTypeData: any[] = [
  {
    id: 1,
    company: 1,
    department: 1,
    position: 1,
    location: 1,
    images: [
      {
        id: 1,
        src: 1,
        alt: 1,
      },
    ],
    description: 1,
  },
];

const mockInvalidCreditsData: any[] = [
  {
    id: "job_3",
    company: "comp_3",
    department: "dep_3",
    position: "pos_3",
    location: "loc_3",
    images: [
      {
        id: "job_3-img_0",
        src: "/image_0.jpg",
        alt: "alt of image_0",
        creditLink: "https://example.com",
        creditTitle: "image_0",
      },
    ],
    description: "desc_3",
  },
];

const mockInvalidStaticImageData: any[] = [
  {
    id: "job_0",
    company: "comp_0",
    department: "dep_0",
    position: "pos_0",
    location: "loc_0",
    images: [
      {
        id: "job_0-img_0",
        src: {
          height: 50,
          width: 50,
        },
        alt: "alt of image_0",
      },
    ],
    description: "desc_0",
  },
];

describe("JobCard prop validation", (): void => {
  // Check that props is an array
  it("Should throw error if props isn't an array", (): void => {
    expect(() => render(<JobCard jobCardData={mockNonArrayData} />)).toThrow(
      "\nJobCard: " + NON_ARRAY_ERROR_MESSAGE + "\n"
    );
  });

  // Check that props is not empty
  it("Should throw error if props has no data", (): void => {
    expect(() => render(<JobCard jobCardData={[]} />)).toThrow(
      "\nJobCard: " + EMPTY_PROPS_ERROR_MESSAGE + "\n"
    );
  });

  // Check that invalid object fails interface validation
  it("Should throw error if object doesn't follow JobCardInterface's keys", (): void => {
    expect(() =>
      render(<JobCard jobCardData={mockInvalidObjectData} />)
    ).toThrow(
      "\nJobCard: " + INVALID_INTERFACE_ERROR_MESSAGE + " 'JobCardInterface'.\n"
    );
  });

  // Check that invalid object fails type validation
  it("Should throw error if object doesn't follow JobCardInterface's key types", (): void => {
    expect(() => render(<JobCard jobCardData={mockInvalidTypeData} />)).toThrow(
      "\nJobCard: " + INVALID_TYPE_ERROR_MESSAGE + " 'JobCardInterface'.\n"
    );
  });

  // Check that invalid object fails empty props for keys validation
  it("Should throw error if object has empty properties for required keys from JobCardInterface", (): void => {
    expect(() =>
      render(<JobCard jobCardData={mockIncompleteJobData} />)
    ).toThrow(
      "\nJobCard: " + EMPTY_OBJECT_KEYS_ERROR_MESSAGE + " 'JobCardInterface'.\n"
    );
  });

  // Check that invalid object fails credits validation
  it("Should throw error if object has inconsistant filled/empty credit items", (): void => {
    expect(() =>
      render(<JobCard jobCardData={mockInvalidCreditsData} />)
    ).toThrow("\nJobCard: " + INVALID_CREDITS_ERROR_MESSAGE + "\n");
  });

  // Check that invalid object fails next/Image validation
  it("Should throw error if src key has object that doesn't follow StaticImageData.", (): void => {
    expect(() =>
      render(<JobCard jobCardData={mockInvalidStaticImageData} />)
    ).toThrow(
      "\nJobCard: " + INVALID_STATICIMAGEDATA_OBJECT_ERROR_MESSAGE + "\n"
    );
  });
});

describe("JobCard component", (): void => {
  // Check that staticImageData properties are used
  it("Renders JobCard even with staticImageData", (): void => {
    const { getByAltText } = render(
      <JobCard jobCardData={mockWithStaticImageData} />
    );

    mockWithStaticImageData[0].images.forEach(async (image): Promise<void> => {
      let tag = getByAltText(image.alt);

      await waitFor((): void => {
        expect(tag).toHaveAttribute("src", image.src);
        expect(tag).toHaveAttribute("height", 50);
        expect(tag).toHaveAttribute("width", 50);
      });
    });
  });

  // Check that Images is not rendered when not provided
  it("Does not render Images as it's empty", (): void => {
    const { getByTestId } = render(
      <JobCard jobCardData={mockDataWithoutImages} />
    );

    expect(getByTestId("jobCardImgSection")).toBeEmptyDOMElement();
  });

  // Check that Credits text are not rendered when not provided
  it("Does not render credits as it's empty", (): void => {
    const { getByTestId } = render(
      <JobCard jobCardData={mockDataWithoutCredits} />
    );

    const imageSection = getByTestId("jobCardImgSection");

    expect(imageSection).not.toHaveTextContent(/credits/);
  });

  // Check that every item in the object renders
  it("Renders all content from object when available", (): void => {
    const { getByAltText, getByText } = render(
      <JobCard jobCardData={mockJobCardData} />
    );

    mockJobCardData.forEach((job): void => {
      expect(getByText(job.company)).toBeInTheDocument();
      expect(getByText(job.department)).toBeInTheDocument();
      expect(getByText(job.position)).toBeInTheDocument();
      expect(getByText(job.location)).toBeInTheDocument();
      expect(getByText(job.description)).toBeInTheDocument();

      job.images.forEach(async (image): Promise<void> => {
        let tag = getByAltText(image.alt);

        await waitFor((): void => {
          expect(tag).toHaveAttribute("src", image.src);
        });

        expect(tag).toHaveAttribute("alt", image.alt);
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
  });
});

describe("JobCard Integration", (): void => {
  // Check that splitContent made br tags in description
  test("SplitContent's behavior and make sure there are newlines in the description", (): void => {
    const { getByText } = render(
      <JobCard jobCardData={mockDataWithoutImages} />
    );

    const desc = getByText(/desc_2/);

    expect(desc.innerHTML).toContain("br");
  });
});
