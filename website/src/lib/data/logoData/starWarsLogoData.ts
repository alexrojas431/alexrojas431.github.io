import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark-white.svg";
import APIArch from "@/public/StarWars/StarWarsCompAPI-Architecture.png";
import wikiIcon from "@/public/wiki icon.png";

export const starLogoData: LogoInterface[] = [
  {
    id: "starLogo-1",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API",
    image: {
      id: "starLogo-1-img-1",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to the projects GitHub Page",
    },
    description: "Project code on GitHub",
  },
  {
    id: "starLogo-2",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki",
    image: {
      id: "starLogo-2-img-1",
      src: wikiIcon,
      alt: "Wiki icon, click to go to the projects wiki",
      credits: "Wiki icons created by Freepik - Flaticon",
      creditLink: "https://www.flaticon.com/free-icons/wiki",
      creditTitle: "wiki icons",
    },
    description: "Project Wiki",
  },
  {
    id: "starLogo-3",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview",
    image: {
      id: "starLogo-3-img-1",
      src: APIArch,
      alt: "Picture of architecture of API, click to go to the architecture section of the wiki",
    },
    description: "Detailed explanation of architecture of API",
  },
];
