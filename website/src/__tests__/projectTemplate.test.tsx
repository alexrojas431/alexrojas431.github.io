import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ProjectTemplate from "@/components/projectTemplate";
import { ProjectTemplateInterface } from "@/interface/projectTemplateInterface";
import { EMPTY_OBJECT_KEYS_ERROR_MESSAGE } from "@/util/globalConstants";

//* Mock data

const mockProjectTemplateData: ProjectTemplateInterface = {
  id: "project",
  summaryList: [
    {
      id: "project-point_1",
      title: "title of point_1",
      content: "content of point_1",
    },
    {
      id: "project-point_2",
      title: "title of point_2",
      content: "content of point_2",
    },
  ],
  techStack: "techStack of project",
  techStackList: [
    {
      id: "project-tech_1",
      tech: "tech of tech_1",
    },
    {
      id: "project-tech_2",
      tech: "tech of tech_2",
    },
  ],
  architecture: "architecture of project",
  description: "desc of project",
};

//* Invalid mock data

const mockIncompleteData: any = {
  id: "",
  summaryList: [],
  techStack: "",
  techStackList: [],
  architecture: "",
  description: "",
};

describe("ProjectTemplate prop validation", (): void => {
  // Check that invalid object fails empty props for keys validation
  it("Should throw error if object has empty properties for required keys", (): void => {
    expect(() =>
      render(<ProjectTemplate projectTemplateData={mockIncompleteData} />)
    ).toThrow(
      "\nProjectTemplate: " +
        EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
        " 'ProjectTemplateInterface'.\n"
    );
  });
});

describe("ProjectTemplate component", (): void => {
  // Check that every item was rendered
  it("Should render every element", (): void => {
    const { getByText } = render(
      <ProjectTemplate projectTemplateData={mockProjectTemplateData} />
    );

    expect(getByText(mockProjectTemplateData.techStack)).toBeInTheDocument();
    expect(getByText(mockProjectTemplateData.architecture)).toBeInTheDocument();
    expect(getByText(mockProjectTemplateData.description)).toBeInTheDocument();

    mockProjectTemplateData.summaryList.every((point): void => {
      expect(getByText(point.title)).toBeInTheDocument();
      expect(getByText(point.content)).toBeInTheDocument();
    });

    mockProjectTemplateData.techStackList.every((tech): void => {
      expect(getByText(tech.tech)).toBeInTheDocument();
    });
  });
});
