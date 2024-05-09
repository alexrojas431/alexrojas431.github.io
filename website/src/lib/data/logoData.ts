import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark-white.svg";
import LinkedInIcon from "@/public/In-Blue-128.png";
import APIArch from "@/public/StarWars/StarWarsCompAPI-Architecture.png";
import wikiIcon from "@/public/wiki icon.png";

//TODO: Instead of a file, have a folder with files cause this will get cluttered in a couple more updates. Same with image carousel

export const homeLogoData: LogoInterface[] = [
  {
    id: "homeLogo-1",
    link: "https://github.com/alexrojas431",
    image: {
      id: "homeLogo-1-img-1",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to my GitHub page",
    },
    description: "My GitHub Page",
  },
  {
    id: "homeLogo-2",
    link: "https://www.linkedin.com/in/alexanderrojas431/",
    image: {
      id: "homeLogo-2-img-1",
      src: LinkedInIcon,
      alt: "LinkedIn Icon, click to go to my LinkedIn page",
    },
    description: "My LinkedIn Page",
  },
];

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

export const personalSiteLogoData: LogoInterface[] = [
  {
    id: "personalSiteLogo-1",
    link: "https://github.com/alexrojas431/alexrojas431.github.io",
    image: {
      id: "personalSiteLogo-1-img",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to the projects GitHub Page",
    },
    description: "Project code on GitHub",
  },
];

export const reactJam23_24WinterLogoData: LogoInterface[] = [
  {
    id: "reactJam23_24Winter-Logo-1",
    link: "https://github.com/alexrojas431/CyberpunkTycoon",
    image: {
      id: "reactJam23_24Winter-Logo_1-img",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to the projects GitHub Page",
    },
    description: "Project code on GitHub",
  },
];
