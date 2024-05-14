import { ImageSetCaptions } from "@/interface/imageSetInterfaces";
import oldProj from "@/public/ReactJam23_24Winter/cyberpunkTycoonOld.png";
import newProj from "@/public/ReactJam23_24Winter/cyberpunkTycoonUpdated.png";
import tinyTower from "@/public/ReactJam23_24Winter/tinyTower.png";

export const reactJam23_24WinterCarousel: ImageSetCaptions[] = [
  {
    id: "reactJam23_24WinterCarousel-img-1",
    src: newProj,
    alt: "Picture of the project in its most up to date form",
    caption:
      "The completed project on the main gameplay screen. Many improvements were made in a couple of hours.",
  },
  {
    id: "reactJam23_24WinterCarousel-img-2",
    src: oldProj,
    alt: "Picture of the project in its out of date version",
    caption:
      "The project on the main gameplay screen as it was submitted to the reactJam. This version of the project is out of date.",
  },
  {
    id: "reactJam23_24WinterCarousel-img-3",
    src: tinyTower,
    alt: "Picture of another game called Tiny Tower",
    caption:
      "Other games from a similar genre, like Tiny Tower, acted as inspiration for this project",
  },
];
