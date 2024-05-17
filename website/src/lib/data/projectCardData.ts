import { ProjectCardInterface } from "@/interface/projectCardInterface";

export const projectCardData: ProjectCardInterface[] = [
  {
    id: "projectCard-1",
    link: "/projects/starwarsapi",
    title: "Star Wars API",
    description: [
      "This API spits out data within a StarWars themed board game.",
      "This was a 4 month project with 100+ commits with cross collaboration with a small network of developers ...",
    ].join(" "),
  },
  {
    id: "projectCard-2",
    link: "/projects/reactJam23_24Winter",
    title: "ReactJam Winter 23/24: Cyberpunk Tycoon",
    description: [
      "Along with a friend of mine, we used React.JS to make a game within 12 days in the event called ReactJam 23/24.",
      "One thing you'll notice is that it has little to it.",
      "I prefer the work we did on the project rather than the result.",
      "It was our first game jam and our first time making a video game.",
      "Due to this, we needed to learn a lot very quickly.",
      "The biggest thing was utilizing Graphic resources as best as possible ...",
    ].join(" "),
  },
  {
    id: "projectCard-3",
    link: "/projects/starwarsapi",
    title: "Rollback Netcode Implementation",
    description: [
      "One of the reasons why I decided to pursue a career in programming is because of my interest in making videogames.",
      "While I'm not as interested in a career within the videogame industry, I still love videogames as a hobby and this personal project is just another example of that ...",
    ].join(" "),
  },
  {
    id: "projectCard-4",
    link: "/projects/personalWebsite",
    title: "My Personal Website",
    description: [
      "I try to learn new things and challenge myself on every project I contribute to.",
      "It's no different here, since I'm no stranger to making full stack websites let alone the front end for those websites,",
      "I decided to use some new technologies. For instance I'm using Next.JS as well as Typescript ...",
    ].join(" "),
  },
];
