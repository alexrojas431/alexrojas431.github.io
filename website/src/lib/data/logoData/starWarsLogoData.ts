import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark-white.svg";
import APIArch from "@/public/StarWars/StarWarsCompAPI-Architecture.png";
import wikiIcon from "@/public/wiki icon.png";
import LinkedInIcon from "@/public/In-White-128@2x.png";

export const starLogoData: LogoInterface[] = [
  {
    id: "star-Logo-1",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API",
    image: {
      id: "star-Logo-1-img",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to the projects GitHub Page",
    },
    description: "Project code on GitHub",
  },
  {
    id: "star-Logo-2",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki",
    image: {
      id: "star-Logo-2-img",
      src: wikiIcon,
      alt: "Wiki icon, click to go to the projects wiki",
      credits: "Wiki icons created by Freepik - Flaticon",
      creditLink: "https://www.flaticon.com/free-icons/wiki",
      creditTitle: "wiki icons",
    },
    description: "Project Wiki",
  },
  {
    id: "star-Logo-3",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview",
    image: {
      id: "star-Logo-3-img",
      src: APIArch,
      alt: "Picture of architecture of API, click to go to the architecture section of the wiki",
    },
    description: "Detailed explanation of architecture of API",
  },
  {
    id: "star-Logo-4",
    link: "https://www.linkedin.com/in/ryan-llamas-05459414a/",
    image: {
      id: "star-Logo-4-img",
      src: LinkedInIcon,
      alt: "LinkedIn icon, click to go to the LinkedIn profile",
    },
    description: "Ryan Llamas started the project, check out his other work.",
  },
];
