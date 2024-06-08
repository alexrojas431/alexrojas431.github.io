import { JobCardInterface } from "@/interface/jobCardInterface";
import CodeOrange from "@/public/DFS/code_orange entry.jpg";
import TCSLogo from "@/public/TCS/TCS.NS.png";
import WalgreensLogo from "@/public/TCS/W_logo_RGB.png";
import mthreeLogo from "@/public/mthree/mthree logo-01.webp";

export const jobCardData: JobCardInterface[] = [
  {
    id: "jobCard-3",
    company: "Tata Consultancy Services",
    department: "Walgreens RxI RunOps supports group",
    position: "TCS Contractor, March 2021 - March 2022",
    location: "Remote",
    images: [
      {
        id: "jobCard-3-img-01",
        src: TCSLogo,
        alt: "A picture of the TCS logo.",
      },
      {
        id: "jobCard-3-img-02",
        src: WalgreensLogo,
        alt: "A picture of the Walgreens logo.",
      },
    ],
    description: [
      "Outside of a couple of stints here and there Tata Consultancy Services (TCS) would be the first long-term job I would hold outside of university.",
      "Due to the nature of the company, I worked on technologies for other companies rather than TCS directly.",
      "In my case I got assigned to a new group being built up within Walgreens called RunOps.",
      "\n\nRunOps helped handle the emerging RxI program which would replace related programs in exchange for an easier to use centralized hub.",
      "Since RxI was new, there would be a ton of issues that would pop up, making RunOps a hectic environment focused on daily problem-solving.",
      "\n\nOur goal in RunOps was to solve as many issues as possible by coordinating with relevant teams.",
      "While it was definitely taxing, it was also just as rewarding, as per procedure I was able to connect with and learn from many people across the company.",
      "I best remember this position because I was entrusted with and pulled through on big tasks like presenting reports various team leadership twice on a daily basis.",
      "This was especially tough on me as one of my weaker skills was definitely my communication and my public speaking skills.",
      "One of the more nerve-racking situations I've been in was talking to the head of the RxI program but at the end of it all, I greatly improved my weaker skills.",
      "Getting the opportunity to improve like that was a great plus in my eyes.",
      "Due to the programs quick pace I also got to exert those skills under great pressure like in the situations where I needed to rally people to help solve sudden emergency issues.",
      "It wasn't rare to be on call on the weekend and be the only one available to take the lead on an issue.",
      "\n\nI proved to myself that I was capable of much more than I thought by dealing with these problems as well as I did.",
    ].join(" "),
  },
  {
    id: "jobCard-2",
    company: "Discover Financial Services",
    department: "code_orange program",
    position: "Campus Innovator (Intern), May 2019 - August 2020",
    location: "Dekalb, IL, USA",
    images: [
      {
        id: "jobCard-2-img-01",
        src: CodeOrange,
        alt: "A picture of the code_orange space when you enter the office.",
        credits: "Picture taken by NIU on campus from the code_orange space",
        creditLink:
          "https://calendar.niu.edu/event/discover_financial_services_code_orange_program_open_house_6049",
        creditTitle: "NIU code_orange open house",
      },
    ],
    description: [
      "At this point in time, I was still in university as a sophomore.",
      "I was thinking about my future past university and how I could further expand my knowledge in programming.",
      "Luckily for me Discover Financial Services (DFS) and Northern Illinois University (NIU) had created an internship for computer scientists that was located within the campus.",
      "\n\nUpon being accepted into the program, I was introduced to a bunch of likeminded people which reaffirmed my passion for the field.",
      "In the program, I learned a lot at quick pace often switching from one unique tech stack to another all while creating a different product.",
      "For example, my group used the Ticketmaster API to mimic a ticket vendor website while another task was to make a chatbot able to answer questions about the internship program.",
      "In the program I got to exert my knowledge and creativity in creating around 9 full stack applications, but I also had the pleasure of working with several intelligent and kind people.",
      "\n\nThat last bit being a struggle of mine, as my communication skills were always behind my technical skills.",
      "However, by the end of the program even that would see improvement as I constantly had to communicate in order to get my ideas across.",
      "All the groups would make a presentation showcasing their project and it's business use case.",
      "I connected with a lot of people in the program and had such a comradery with my teammates that some have even become very close friends of mine.",
      "This was my first experience in a professional workplace, and it's had a lasting positive impression.",
      "\n\nI regard this time so highly because it fostered my creativity and my passion for my profession.",
    ].join(" "),
  },
  {
    id: "jobCard-1",
    company: "mthree",
    department: "Software Guild training",
    position: "IT Consultant, Dec 2020 - April 2021",
    location: "Remote",
    images: [
      {
        id: "jobCard-1-img-01",
        src: mthreeLogo,
        alt: "A picture of the mthree logo",
      },
    ],
    description: [
      "The second I was straight out of university I was eager to start my career and quickly landed a position in mthree.",
      "\n\nmthree was fun as my prior experience within the internship really gave me head start.",
      "At mthree we first worked as individuals, later working in a group to make a big full stack application, something I did regularly in the internship.",
      "Not only was I able to make applications at a good pace, but I also took up a leadership role.",
      "\n\nMy newfound leadership role was a significant milestone for and something I look back fondly on.",
      "Previously, I was the one in need of some kind of mentorship or guidance.",
      "In mthree, my role had switched, I was the one mentoring others and I played a key part in designing the group application.",
      "It was an experience I did not expect myself to have so soon at that point in my career which made it that more rewarding.",
      "\n\nMy time in mthree was also interesting because it includes a notable failure.",
      "At the end of the program, we interviewed with recruiters from an external company.",
      "I did pretty bad in my interview and the biggest reason why was because of my communication skills under pressure.",
      "In hindsight the job I held in TCS afterwards was essential since I'd successfully overcome and improve on these areas while working in TCS.",
      "\n\nNobody has a great time revisiting past failures but it's necessary context for the achievements that I would later take.",
      "If you'd like to learn more about the company then they're now known as Wiley Edge.",
    ].join(" "),
  },
];
