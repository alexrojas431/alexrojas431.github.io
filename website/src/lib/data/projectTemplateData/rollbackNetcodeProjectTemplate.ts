import { ProjectTemplateInterface } from "@/interface/projectTemplateInterface";

export const rollbackNetcodeProjectTemplate: ProjectTemplateInterface = {
  id: "rollbackNetcode",
  summaryList: [
    {
      id: "rollbackNetcode-point-1",
      title:
        "Object-Oriented programming, Modular data, and type checking with C++",
      content: [
        "There are plenty of benefits to dynamic typing but in this project this behavior can introduce unintended behavior.",
        "A strict adherence to types allows for consistency which is especially important in a project that has many mechanics to it that are designed to interact with each other.",
        "The baseline expectation with any program is that you'll see a bunch of unintended behavior.",
        "Having types makes programming more intentional and easier to debug when something inevitably goes wrong.",
        "This goes hand in hand with the use of objects and classes in the project, by separating concerns I can best focus on the design of the project.",
      ].join(" "),
    },
    {
      id: "rollbackNetcode-point-2",
      title: "100% coverage with google testing",
      content: [
        "Testing goes hand in hand with the adherence to types as I'll need to be sure that everything has a consistent behavior.",
        "This ensures the reliability and stability of the code.",
        "This is critical cause even when things are programmed correctly, the systems may interact and create behaviors I wouldn't want in the game.",
        "With this in mind, testing makes sure that the code works the way I expect it to.",
      ].join(" "),
    },
    {
      id: "rollbackNetcode-point-3",
      title: "CMake for easier build automation",
      content: [
        "CMake helps simplify C++'s build process on top of being cross-platform.",
        "Learning CMake made this project easier to handle and relatively painless through the config files needed for CMake.",
      ].join(" "),
    },
    {
      id: "rollbackNetcode-point-4",
      title: "Global state management",
      content: [
        "The game needs to keep track of items that the player interacts with.",
        "Items like the start screen or the pause screen or in game mechanics like economic elements such as income or costs.",
        "Managing these states throughout the game's runtime ensures consistent and smooth gameplay.",
      ].join(" "),
    },
    {
      id: "rollbackNetcode-point-5",
      title: "Game design",
      content: [
        "The primary focus of my career is learning more about programming.",
        "With that said, in every project I try and learn something new.",
        "Since I'm making a game, I needed to not only exercise good programming fundamentals, but I also needed to study video game design.",
        "To demonstrate why this was necessary, you may be familiar with games that only ask the player to click on an object forever.",
        "Needless to say, this doesn't ask a lot of attention or focus from the player, this is the reason for studying video game design, how a game makes people feel certain things.",
        "It's not enough to be technically sound, the game also needs to be able to be fun, while requiring the players attention.",
        "Video game design looks at how to do this while making the game a cohesive experience.",
      ].join(" "),
    },
  ],
  techStack: [
    "C++ introduces OOP and types for consistency and modularity with classes.",
    "By utilizing OOP, the project is able to separate concerns and avoid spaghetti code.",
  ].join(" "),
  techStackList: [
    {
      id: "rollbackNetcode-tech-1",
      name: "C++",
    },
    {
      id: "rollbackNetcode-tech-2",
      name: "CMake",
      note: "Build tool",
    },
    {
      id: "rollbackNetcode-tech-3",
      name: "Google test",
    },
    {
      id: "rollbackNetcode-tech-4",
      name: "GCC",
      note: "C++ compiler",
    },
    {
      id: "rollbackNetcode-tech-5",
      name: "GitHub",
      note: "Version control",
    },
    {
      id: "rollbackNetcode-tech-6",
      name: "Visual Studio",
      note: "Integrated Development Environment (IDE)",
    },
  ],
  architecture: [
    "The project is made with modularity in mind.",
    "The game is programmed in C++, it handles both the visual component as well as the logic behind the mechanics in the project.",
    "\nThe codebase also houses state management for the status of the game at any given point of the runtime.",
    "Both points are integral to making the development of the project run smoothly.",
    "Since implementing rollback will be difficult enough on its own, the act of development needed to not be an obstacle.",
  ].join(" "),
  description: [
    "I love video games, especially fighting games like Street Fighter, Tekken, Mortal Kombat etc.",
    "Many modern games now have great online functionality allowing you to play with other people across great distances.",
    "This is in part accomplished by the process that maintains the connection between 2 people often reffered to as netcode.",
    "The method used nowadays is called Rollback.",
    "\n\nOriginally, I wanted to create a project that explores the online connection between people for the sake of the Star Wars API project.",
    "My friend Ryan Llamas, who started that project and later brought me on to help, wants to expand on the project and have that API be used to fuel a playable game between 2 players.",
    "Seeing the opportunity, I decided to act on this chance.",
    "Not only is this project used to pursue my interest in fighting games it will also serve as a great test of netcode for the Star Wars project.",
    "Ultimately, the project implements rollback netcode in a playable game.",
    "The goal is not to design an amazing game, it's to implement rollback netcode in order to better understand it.",
    "\n\n--- What is netcode? ---",
    "\n\nAny online game needs to function just as well online as it does offline, there should preferably be no noticeable difference between the two.",
    "Delay-based netcode introduces a variable delay to process inputs and handle errors.",
    "While it did the job it also introduced several problems.",
    "The main problem was that any error that lasted longer than the delay would cause the game to pause and wait for the process to finish.",
    "In game that would look like stutters lasting fractions of a second or freezes that would be seconds long.",
    "Games with delay-based netcode often played significantly worse online than offline and it's the main reason why the industry moved away from using it.",
    "\n\nRollback was designed with delay-based in mind in order to avoid some of its more frustrating pitfalls, building on top of the delay-based method.",
    "Rollback assumes that the next input a player uses will be the same as their previous input.",
    "If this assumption is wrong then the game will rewind the game to reflect the correct inputs, hence the name rollback.",
    "Essentially the game will run no matter what, correcting errors without pausing the game.",
    "Rollback's assumptions were more often right than wrong.",
    "\n\nRollback brought in a lot of benefits over delay-based netcode.",
    "Rollback can maintain smooth connections across very long distances and even on varying network conditions",
    "\nWith that said, my explanation also doesn't go over the added effort needed to make all this work.",
    "Implementing rollback means keeping a timeline of events.",
    "You must also now have a finer control over visuals so you can rewind the game when needed.",
    "This is made more difficult if you have to transfer more data than just player inputs.",
    "\n\nIf you'd like a more in-depth explanation of rollback then I suggest this 8-minute video by Core-A-Gaming:",
    "\nhttps://youtu.be/0NLe4IpdS1w?si=V0bCyruWto8k-IWx",
    "\n\nIf you'd like to hear a longer more developer-oriented explanation of rollback netcode then this video by a game dev who worked on rollback netcode is good too:",
    "\nhttps://youtu.be/7jb0FOcImdg?si=MlHv3SJQeXnaFN-I",
  ].join(" "),
};
