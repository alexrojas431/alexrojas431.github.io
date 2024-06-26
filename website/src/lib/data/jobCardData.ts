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
        id: "jobCard3-image-01",
        src: TCSLogo,
        alt: "A picture of the TCS logo.",
      },
      {
        id: "jobCard3-image-02",
        src: WalgreensLogo,
        alt: "A picture of the Walgreens logo.",
      },
    ],
    description: [
      "Outside of a couple of stints here and there Tata Consultancy Services (TCS) would be the first long-term job I would hold outside of university.",
      "Due to the nature of the company, I wouldn't be working on technologies for TCS directly but would instead be assigned to other companies.",
      "In my case I got assigned to a new group being built up within Walgreens.",
      "\n\nThis new group, called RunOps, would be dealing with an emerging technology called RxI which would defunct related programs in exchange for a centralized hub that would be easier to use.",
      "Since RxI was new, there would be a ton of issues that would pop up, so it was pretty hectic within RunOps going 100% dealing with issues every day.",
      "\n\nAs part of RunOps that goal was to solve as many issues as possible and the method was to get relevant teams to help solve those issues.",
      "While it was definitely taxing, it was also just as rewarding, as per procedure I was able to interact with many people across the company and was able to learn from them.",
      "On top of that, I best remember this position because as time went on, I was entrusted with and pulled through with big tasks like presenting reports I made to various team leadership on a daily basis, twice in the morning and in the afternoon.",
      "I'd end up talking to people across several teams and even people who led those teams, one of the more nerve-racking situations I've been in was talking to the head of the RxI program.",
      "This was especially tough on me as one of my weaker skills was definitely my communication, specifically my public speaking skills.",
      "Getting the opportunity to amend that was a great plus in my eyes.",
      "Due to the programs quick pace I also got to exert those skills under great pressure like in the situations where I needed to rally people to help solve emergency issues.",
      "\n\nI think I really got to prove to myself that I was capable of much more than I thought by dealing with these problems as well as I did.",
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
        id: "jobCard2-image-01",
        src: CodeOrange,
        alt: "A picture of the code_orange space when you enter the office.",
        credits: "Picture taken by NIU on NIU campus from the code_orange front door",
        creditLink: "https://calendar.niu.edu/event/discover_financial_services_code_orange_program_open_house_6049",
        creditTitle: "NIU code_orange open house",
      },
    ],
    description: [
      "At this point in time, I was still in university as a sophomore.",
      "I was thinking about my future past university and how I would be able to test my knowledge.",
      "Luckily for me Discover Financial Services (DFS) and Northern Illinois University (NIU) had just entered a partnership to create an internship program for computer scientists that would work within a space sectioned off within the campus.",
      "The program came into existence at a time when I was interested in looking to work for one and not only did this program have a pay rate it was also very convenient.",
      "\n\nUpon being accepted into the program, I was introduced to a bunch of likeminded people doing what I was passionate about, this reaffirmed to me that I was on the right path.",
      "By the end of the program not only did I get to exert my knowledge and creativity in creating around 9 full stack applications, but I also had the pleasure of working with several intelligent and kind people.",
      "I've had such a comradery with my teammates and coworkers that some have even become very close friends of mine.",
      "This was my first entry into the professional workplace, and it was a great first impression.",
      "\n\nI regard my time here so highly because it helped foster my creativity and my passion for my profession.",
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
        id: "jobCard1-image-01",
        src: mthreeLogo,
        alt: "A picture of the mthree logo",
      },
    ],
    description: [
      "The second I was straight out of university I, like most, wanted to get a job immediately.",
      "Luckily for me I was able to land on mthree.",
      "\n\nmthree was fun as my prior experience within the internship really gave me a leg up there.",
      "At mthree we were instructed to participate in individual work, later working in a group to make a big application, the full stack application being something I did regularly in the internship.",
      "Not only was I able to make applications at a good pace, but I was also to take up a leadership role.",
      "\n\nMy newfound leadership role was something I look back fondly on within my time in mthree.",
      "Throughout every single prior experience, I was almost always new and in need of some kind of mentorship or tutor.",
      "In mthree, my role switched, I was the one mentoring others, I also played a significant part in designing the group app.",
      "It was an experience I did not expect myself to have so soon at that point in my career.",
      "\n\nMy time in mthree was also interesting because it marks one of my failures.",
      "At the end of the individual work and group work, there was an interview with recruiters from an external company.",
      "I did pretty bad in my interview and the biggest reason why I did bad was because of my communication skills, specifically communicating while under pressure and communication concisely and accurately.",
      "In hindsight the job I held in TCS afterwards was essential since the obstacles that made me trip were the same ones I'd successfully overcome while working in TCS.",
      "It's nobody's preference to relitigate weaknesses or past failures but I think sometimes it's necessary context for the achievements that I would later take.",
      "\n\nIt's a little hard to learn more about the company, even as I looked back for the sake for this post, I found out that the company had changed.",
      "If you'd like to learn more about the company then the name they're now known as is Wiley Edge.",
    ].join(" "),
  },
];
