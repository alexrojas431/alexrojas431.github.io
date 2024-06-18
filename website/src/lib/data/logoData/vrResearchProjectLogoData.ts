import { LogoInterface } from "@/interface/logoInterface";
import PDFIcon from "@/public/icons8-pdf-96.png";
import LinkedInIcon from "@/public/In-White-128@2x.png";

export const vrResearchProjectLogoData: LogoInterface[] = [
  {
    id: "vrResearchProj-Logo-1",
    link: "https://libjournals.unca.edu/ncur/wp-content/uploads/2021/02/3321-Rojas-Alexander-FINAL.pdf",
    image: {
      id: "vrResearchProj-Logo-1-img",
      src: PDFIcon,
      alt: "PDF icon, click to go to the archived research paper",
      credits: "PDF icon from Icons8",
      creditLink: "https://icons8.com/icon/13417/pdf",
      creditTitle: "Link to Icons8 website",
    },
    description:
      "Research paper submitted to NCUR, it's archived in their 2020 proceedings.",
  },
  {
    id: "vrResearchProj-Logo-2",
    link: "https://www.linkedin.com/in/ivan-sanchez-299605152/",
    image: {
      id: "vrResearchProj-Logo-2-img",
      src: LinkedInIcon,
      alt: "LinkedIn icon, click to go to the LinkedIn profile",
    },
    description:
      "Ivan Sanchez co-authored the paper and was a massive help on the project, check out his other work.",
  },
  {
    id: "vrResearchProj-Logo-3",
    link: "https://www.linkedin.com/in/michaelpapka/",
    image: {
      id: "vrResearchProj-Logo-3-img",
      src: LinkedInIcon,
      alt: "LinkedIn icon, click to go to the LinkedIn profile",
    },
    description:
      "Dr. Michael E. Papka was a faculty advisor and helped throughout the project, check out his other work.",
  },
  {
    id: "vrResearchProj-Logo-4",
    link: "https://www.linkedin.com/in/zachary-wahl-alexander-667783263/",
    image: {
      id: "vrResearchProj-Logo-4-img",
      src: LinkedInIcon,
      alt: "LinkedIn icon, click to go to the LinkedIn profile",
    },
    description:
      "Dr. Zachary Wahl-Alexander was a faculty advisor and helped throughout the project, check out his other work.",
  },
];
