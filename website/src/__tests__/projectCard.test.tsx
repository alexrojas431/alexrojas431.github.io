import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectCard from "@/components/projectCard";
import { ProjectCardInterface } from "@/interface/projectCardInterface";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
} from "@/util/globalConstants";

//* Mock data

const mockProjectData: ProjectCardInterface[] = [
  {
    id: "proj_0",
    link: "https://google.com",
    title: "title of proj_0",
    description: "desc of proj_0",
  },
  {
    id: "proj_1",
    link: "https://bing.com",
    title: "title of proj_1",
    description: "desc of proj_1",
  },
];

//* Invalid mock data

const mockIncompleteData: any[] = [
  {
    id: "",
    link: "",
    title: "",
    description: "",
  },
];

describe("ProjectCard prop validation", (): void => {
  // Check that props is not empty
  it("Should throw error if props has not data", (): void => {
    expect(() => render(<ProjectCard projectCardData={[]} />)).toThrow(
      "\nProjectCard: " + EMPTY_PROPS_ERROR_MESSAGE + "\n"
    );
  });

  // Check that invalid object fails empty props for keys validation
  it("Should throw error if object has empty properties for required keys", (): void => {
    expect(() =>
      render(<ProjectCard projectCardData={mockIncompleteData} />)
    ).toThrow(
      "\nProjectCard: " +
        EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
        " 'ProjectCardInterface'.\n"
    );
  });
});

describe("ProjectCard component", (): void => {
  // Multiple elements are rendered
  it("Should render several objects at a time", (): void => {
    const { getByText } = render(
      <ProjectCard projectCardData={mockProjectData} />
    );

    mockProjectData.forEach((project): void => {
      expect(getByText(project.title)).toBeInTheDocument();
      expect(getByText(project.description)).toBeInTheDocument();

      const linkTag = getByText(project.title).parentElement?.parentElement;
      expect(linkTag).toHaveAttribute("href", project.link);
    });
  });
});
