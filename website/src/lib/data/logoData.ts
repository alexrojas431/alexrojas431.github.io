import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark/github-mark-white.svg";
import LinkedInIcon from "@/public/LinkedIn-Logos/In-Blue-128.png";
import APIArch from "@/public/StarWarsCompAPI-Architecture.png";
import wikiIcon from "@/public/wiki icon.png";

export const homeLogoData: LogoInterface[] = [
  {
    id: "homeLogo-1",
    link: "https://github.com/alexrojas431",
    image: GitHubIcon,
    alt: "GitHub Icon, click to go to my GitHub page",
    description: "My GitHub Page",
  },
  {
    id: "homeLogo-2",
    link: "https://www.linkedin.com/in/alexanderrojas431/",
    image: LinkedInIcon,
    alt: "LinkedIn Icon, click to go to my LinkedIn page",
    description: "My LinkedIn Page",
  },
];

export const starLogoData: LogoInterface[] = [
  {
    id: "starLogo-1",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API",
    image: GitHubIcon,
    alt: "GitHub Icon, click to go to the projects GitHub Page",
    description: "Code on GitHub",
  },
  {
    id: "starLogo-2",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki",
    image: wikiIcon,
    alt: "Wiki icon, click to go to the projects wiki",
    description: "Project Wiki",
    credit: "Wiki icons created by Freepik - Flaticon",
  },
  {
    id: "starLogo-3",
    link: "https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview",
    image: APIArch,
    alt: "Picture of architecture of API, click to go to the architecture section of the wiki",
    description: "Detailed explanation of architecture of API",
  },
];
