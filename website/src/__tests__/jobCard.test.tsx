import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import JobCard from "@/lib/components/jobCard";
import { JobCardInterface } from "@/lib/interface/jobCardInterface";

const mockJobDataWithoutCredits: JobCardInterface[] = [
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

const mockJobDataWithCredits: JobCardInterface[] = [
  {
    id: "job_1",
    company: "comp_1",
    department: "dep_1",
    position: "pos_1",
    location: "loc_1",
    images: [
      {
        id: "job_1-img_0",
        src: "/image_1.jpg",
        alt: "alt of image_1",
        credits: "credits of image_1",
        creditLink: "https://example.com",
        creditTitle: "image_1",
      },
    ],
    description: "desc_1",
  },
];

const mockJobDataWithoutImages: JobCardInterface[] = [
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

const mockInvalidCredits: JobCardInterface[] = [
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

const mockInvalidNonArray: any = {
  id: 1,
  location: "location",
};

const mockInvalidJobData: any[] = [
  {
    id: 1,
    location: "location",
  },
];

describe("JobCard component", (): void => {
  // Check that invalid data is an array
  it("Should throw error if props isn't an array", (): void => {
    expect(() => render(<JobCard jobCardData={mockInvalidNonArray} />)).toThrow(
      "\nJobCard requires data to be an array.\n"
    );
  });

  // Check that the relevant error message is thrown
  it("Should throw error if props has no data", (): void => {
    expect(() => render(<JobCard jobCardData={[]} />)).toThrow(
      "\nJobCard requires data to be passed in.\n"
    );
  });

  // Check that jobData is validated
  it("Should throw error if prop validation fails", (): void => {
    expect(() => render(<JobCard jobCardData={mockInvalidJobData} />)).toThrow(
      "\nJobCard: 'jobCardData' should contain non empty elements of following the interface 'JobCardInterface'.\n"
    );
  });

  // Check that every item in the object renders
  it("Renders all content from object when available", (): void => {
    const { getByAltText, getByText } = render(
      <JobCard jobCardData={mockJobDataWithCredits} />
    );

    const job = mockJobDataWithCredits[0];

    expect(getByText(job.company)).toBeInTheDocument();
    expect(getByText(job.department)).toBeInTheDocument();
    expect(getByText(job.position)).toBeInTheDocument();
    expect(getByText(job.location)).toBeInTheDocument();
    expect(getByText(job.description)).toBeInTheDocument();
    expect(getByText(job.description)).toBeInTheDocument();
    expect(getByAltText(job.images[0].alt)).toBeInTheDocument();
    expect(getByText(job.images[0].credits as string)).toBeInTheDocument();
    expect(getByText(job.images[0].credits as string)).toHaveAttribute(
      "href",
      job.images[0].creditLink
    );
    expect(getByText(job.images[0].credits as string)).toHaveAttribute(
      "title",
      job.images[0].creditTitle
    );
  });

  // Check that Images is not rendered when not provided
  it("Does not render Images as it's empty", (): void => {
    const { getByTestId } = render(
      <JobCard jobCardData={mockJobDataWithoutImages} />
    );

    expect(getByTestId("jobCardImgSection")).toBeEmptyDOMElement();
  });

  // Check that Credits text are not rendered when not provided
  it("Does not render credits as it's empty", (): void => {
    const { getByAltText } = render(
      <JobCard jobCardData={mockJobDataWithoutCredits} />
    );

    const image = getByAltText(mockJobDataWithoutCredits[0].images[0].alt);

    expect(image).not.toHaveTextContent("[\\s\\S]");
  });

  // Check that CreditTitle and Link are not rendered when Credits text not provided
  it("Should throw error if prop validation fails because of credit items being inconsitently filled/empty", (): void => {
    expect(() => render(<JobCard jobCardData={mockInvalidCredits} />)).toThrow(
      "\nJobCard: 'jobCardData' should contain non empty elements of following the interface 'JobCardInterface'.\n"
    );
  });

  // Check that splitContent does what it's supposed to
});

describe("JobCard Integration", (): void => {
  // Check that splitContent made br tags in description
  test("SplitContent's behavior and make sure there are newlines in the description", (): void => {
    const { getByText } = render(
      <JobCard jobCardData={mockJobDataWithoutImages} />
    );

    const desc = getByText(/desc_2/);

    expect(desc.innerHTML).toContain("br");
  });
});
