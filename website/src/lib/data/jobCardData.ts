import { JobCardInterface } from "@/interface/jobCardInterface";
import CodeOrange from "@/public/DFS/code_orange entry.jpg";

export const JobCardData: JobCardInterface[] = [
  {
    id: "jobCard-1",
    company: "Discover Financial Services",
    department: "code_orange program",
    position: "Campus Innovator (Intern), May 2019 - August 2020",
    location: "Dekalb, IL, USA",
    images: [
      {
        id: "1-image-01",
        image: CodeOrange,
        alt: "A picture of the code_orange space when you enter the office.",
      },
    ],
    description: [
      "At this point in time, I was still in university as a sophomore.",
      "I was thinking about my future past university and how I would be able to test my knowledge.",
      "Luckily for me Discover Financial Services (DFS) and Northern Illinois University (NIU) had just entered a partnership to create an internship program for computer scientists that would work within a space sectioned off within the campus.",
      "The program came into existence at a time when I was interested in looking to work for one and not only did this program have a pay rate it was also very convenient.",
      "Upon being accepted into the program, I was introduced to a bunch of likeminded people doing what I was passionate something that only reaffirmed that I was on the right path.",
      "By the end of the program not only did I get to exert my knowledge and creativity in creating around 9 full stack applications, but I also had the pleasure of working with several intelligent and kind people.",
      "I've had such a comradery with my teammates and coworkers that some have even become very close friends of mine.",
      "My first entry into the professional workplace was a great first impression.",
      "It was such a great time that it helped foster my creativity and my passion for my profession.",
    ].join(" "),
  },
];
