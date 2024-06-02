import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark-white.svg";
import LinkedInIcon from "@/public/In-Blue-128@2x.png";

export const homeLogoData: LogoInterface[] = [
  {
    id: "home-Logo-1",
    link: "https://github.com/alexrojas431",
    image: {
      id: "home-Logo-1-img",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to my GitHub page",
    },
    description: "My GitHub Page",
  },
  {
    id: "home-Logo-2",
    link: "https://www.linkedin.com/in/alexanderrojas431/",
    image: {
      id: "home-Logo-2-img",
      src: LinkedInIcon,
      alt: "LinkedIn Icon, click to go to my LinkedIn page",
    },
    description: "My LinkedIn Page",
  },
];
