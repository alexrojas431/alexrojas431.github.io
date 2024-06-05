export interface ProjectTemplateInterface {
  id: string;
  summaryList: ListPoint[];
  techStack: string;
  techStackList: TechStack[];
  architecture: string;
  description: string;
}

export interface ListPoint {
  id: string;
  title: string;
  content: string;
}

export interface TechStack {
  id: string;
  name: string;
  note?: string;
}
