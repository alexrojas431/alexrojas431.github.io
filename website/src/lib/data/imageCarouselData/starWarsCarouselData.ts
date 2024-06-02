import { ImageSetCaptions } from "@/interface/imageSetInterfaces";
import starBoard from "@/public/StarWars/starwarsBoard.png";
import actionCardsRings from "@/public/StarWars/starwarsVirtualActionCardsAndRings.png";
import empTroopDesc from "@/public/StarWars/starwarsVirtualBoardEmpireTroopDesc.png";
import postman from "@/public/StarWars/starwarsActionCardsPostman.png";

export const starWarsCarousel: ImageSetCaptions[] = [
  {
    id: "starWars-Carousel-img-1",
    src: starBoard,
    alt: "Picture of a Star Wars board game",
    caption: "The Star Wars Rebellion board game",
  },
  {
    id: "starWars-Carousel-img-2",
    src: actionCardsRings,
    alt: "Picture of items from the Star Wars board game",
    caption: "Some action cards and rings found within the game",
  },
  {
    id: "starWars-Carousel-img-3",
    src: empTroopDesc,
    alt: "Picture of description of troops from the Empire troops",
    caption:
      "Some troops have health, type, attack power and capacity info attached to them.",
  },
  {
    id: "starWars-Carousel-img-4",
    src: postman,
    alt: "Picture of actionCardSpecification and Postman request regarding action cards",
    caption:
      "(Left) Example of a specification class. (Right) Results from the Postman asking for a specific action card.",
  },
];
