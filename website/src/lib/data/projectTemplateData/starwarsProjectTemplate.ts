import { ProjectTemplateInterface } from "@/interface/projectTemplateInterface";

export const starWarsProjectTemplate: ProjectTemplateInterface = {
  id: "starwarsapi",
  summaryList: [
    {
      id: "starwarsapi-point-1",
      title: "Entity Development with MVC Architecture",
      content: [
        "Developed distinct entities following the Model-View-Controller (MVC) architecture, tailored to various card types or game items such as ActionCard, Leader, or Ring.",
        "This approach ensured clear separation of concerns and made maintainability easier ",
      ].join(" "),
    },
    {
      id: "starwarsapi-point-2",
      title: "Integration with H2 Database",
      content: [
        "Integrated the project with an H2 Database to store and manage data pertaining to specific cards/items in the game.",
        "For instance, some entries include Bobba Fett as an Empire leader, alongside numerous other Empire and Rebel leaders.",
        "This database integration ensured efficient data storage and retrieval mechanisms.",
      ].join(" "),
    },
    {
      id: "starwarsapi-point-3",
      title: "API Endpoint validation through Postman",
      content: [
        "Utilized Postman to rigorously validate the functionality of API endpoints associated with retrieving and posting information related to the game's cards/items.",
        "By thoroughly testing these endpoints, I ensured accurate and reliable data transmission and reception.",
        "Further details regarding the endpoints' functionalities were documented in the project's wiki which is linked above.",
      ].join(" "),
    },
    {
      id: "starwarsapi-point-4",
      title: "100% Code Coverage with JUnit Testing",
      content: [
        "Employed JUnit testing methods to achieve comprehensive code coverage, ensuring that every aspect of the codebase was rigorously tested.",
        "By aiming for 100% code coverage, the reliability and stability of the codebase was enhanced.",
      ].join(" "),
    },
    {
      id: "starwarsapi-point-5",
      title: "Short timeframe and teamwork",
      content: [
        "This was a 4-month project with 100+ commits in cross collaboration with a small group of developers.",
        "Due to the nature of this project being owned by someone else, I made sure the actions I took were approved by the group.",
        "This stretched from tiny details to decisions that affected the project as a whole.",
        "For example, rules in the GitHub Repo that would only allow mergers when others had reviewed the request.",
        "Another example was the use of MVC and DAO as guidelines, this affected the whole structure of the project.",
        "In the same vein the structure of many of the classes were standardized along with the data within the database.",
      ].join(" "),
    },
  ],
  techStack: [
    "If needed there is a bare bones page where your requests are displayed on a webpage however, it's best to use Postman to make requests.",
  ].join(" "),
  techStackList: [
    {
      id: "starwarsapi-tech-1",
      tech: "Java Spring boot: Core programming language",
    },
    {
      id: "starwarsapi-tech-2",
      tech: "JPA: For dynamic database queries",
    },
    {
      id: "starwarsapi-tech-3",
      tech: "JUnit: For unit testing",
    },
    {
      id: "starwarsapi-tech-4",
      tech: "Internal H2 Database",
    },
    {
      id: "starwarsapi-tech-5",
      tech: "GitHub: Version control",
    },
    {
      id: "starwarsapi-tech-6",
      tech: "IntelliJ IDEA: Integrated Development Environment (IDE)",
    },
  ],
  architecture: [
    "This project has no dedicated front-end, only focusing on constructing the API and how those requests are handled.",
    "\nThis project uses REST principles with a variation of the MVC structure along with the DAO design pattern for our entities.",
    "\nThis is only a brief overview of the architecture, there is a detailed description of the architecture linked at the top.",
  ].join(" "),
  description: [
    "My friend is an avid board game player and wanted to experiment with translating a Star Wars themed board game into a virtual medium.",
    "To achieve this, he decided to make an API to provide users with the games information such as special properities for a specific character.",
    "This was a big project, so he asked for my help along with a couple of others.",
    "To make sure our codebase was clear and efficient we made sure to organize it accordingly, using REST, MVC, and DAO as the set of guidelines.",
    "\nI'll go over how our entities were integrated through the ActionCard as an example.",
    "\n\nActionCard - This entity class declares what would be inside an ActionCard.",
    "In the board game, an ActionCard typically comprises of descriptive text outlining its function, along with designated factions such as 'Empire' or 'Rebel'.",
    "This class will reflect this fact.",
    "\n\nActionCardRequest - This class declares members included in a request made to the API regarding ActionCards.",
    "For some entities, like the ActionCard, the corresponding request class will look like the entity class.",
    "For others, the request class will look very different.",
    "\n\nActionCardSpecification - This class embodies a method aimed at retrieving specific cards based on user provided criteria.",
    "What criteria can be provided is dictated by the corresponding request class (ActionCardRequest).",
    "When a user provides no data but pings the API concerning ActionCards, this method retrieves all available action cards for the sake of accessibility.",
    "If the user pings the API with no relation to any entity, the API gives you all the data available.",
    "\n\nActionCardRepository - An interface that orchestrates the integration of ActionCard instances with the database.",
    "It employs the ActionCardSpecification class.",
    "\n\nActionCardController - Central to the API's functionality, this class houses the crucial GET and POST methods.",
    "This class creates and uses related repo and spec objects.",
    "The GET methods assume that you want all the action cards, it uses the repository without any specific search criteria.",
    "Conversely, POST methods take in data through the form of a request object.",
    "This object is passed to the specification which is passed to the repository's respective methods, enabling seamless manipulation and storage of ActionCard data.",
    "\n\n",
    "This organization of the code not only makes the structure of the API efficient, but also enhances its usability and maintainability.",
    "This lays a robust foundation for the digital rendition of the Star Wars board game.",
  ].join(" "),
};
