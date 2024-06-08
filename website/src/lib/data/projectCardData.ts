import { ProjectCardInterface } from "@/interface/projectCardInterface";

export const projectCardData: ProjectCardInterface[] = [
  {
    id: "projectCard-1",
    link: "/projects/starwarsapi",
    title: "Star Wars API",
    description: [
      "This API provides data from a StarWars themed board game.",
      "This was a 4 month project with 100+ commits with cross collaboration with a small network of developers.",
    ].join(" "),
  },
  {
    id: "projectCard-2",
    link: "/projects/reactJam23_24Winter",
    title: "ReactJam Winter 23/24: Cyberpunk Tycoon",
    description: [
      "Along with a friend, we developed a game using React.JS in 12 days in the event called ReactJam 23/24.",
      "It was our first game jam and our first attempt at making a video game.",
      "Due to this, we learned a lot very quickly.",
      "Some of the main highlights are the game design principles and the graphic optimization tools we studied and learned.",
    ].join(" "),
  },
  {
    id: "projectCard-3",
    link: "/projects/rollbackNetcode",
    title: "Rollback Netcode Implementation",
    description: [
      "My passion leads me to interesting places.",
      "Implementing rollback netcode is a combination of my love of video games and my interest in programming.",
      "This project I'll focus on online connectivity between other people.",
    ].join(" "),
  },
  {
    id: "projectCard-4",
    link: "/projects/personalWebsite",
    title: "My Personal Website",
    description: [
      "I created a portfolio website using my full-stack dev skills.",
      "To add to the task I've also decided to introduce new tech I haven't worked with before.",
      "This project taught me a lot about Next.JS as well as expanded my knowledge about Typescript.",
    ].join(" "),
  },
];
