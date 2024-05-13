import { LogoInterface } from "@/interface/logoInterface";
import GitHubIcon from "@/public/github-mark-white.svg";
import ReactLogo from "@/public/ReactJam23_24Winter/ReactIcon.svg";

export const reactJam23_24WinterLogoData: LogoInterface[] = [
  {
    id: "reactJam23_24Winter-Logo-1",
    link: "https://github.com/alexrojas431/CyberpunkTycoon",
    image: {
      id: "reactJam23_24Winter-Logo_1-img",
      src: GitHubIcon,
      alt: "GitHub Icon, click to go to the projects GitHub Page",
    },
    description: "Project* code on GitHub",
  },
  {
    id: "reactJam23_24Winter-Logo-2",
    link: "https://winter-2023.reactjam.com/games/winter-2023-cyberpunk-tycoon-sim",
    image: {
      id: "reactJam23_24Winter-Logo_2-img",
      src: ReactLogo,
      alt: "ReactJam Icon, click to go to the playable project",
    },
    description: "The project* is playable on the ReactJam website",
  },
];
