import Image from "next/image";
import LogoRow from "@/components/logoRow";
import ProjectCard from "@/components/projectCard";
import JobCard from "@/components/jobCard";
import { homeLogoData } from "@/data/logoData/homeLogoData";
import { projectCardData } from "@/data/projectCardData";
import { jobCardData } from "@/data/jobCardData";
import ProfilePic from "@/public/AlexRProfilePic.jpg";
import styles from "@/scss/pages/home.module.scss";
//TODO: Revise contents in this page
//TODO: Go through visual aspect of the website with other people to see if it looks good

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Hey, I&apos;m Alex</h1>
        <Image
          src={ProfilePic}
          alt="A picture of myself - Alexander Rojas"
          width={1334}
          height={1959}
          priority
          style={{ width: "auto", height: "150px" }}
        />
      </header>
      <article className={styles.description}>
        <section>
          <header>
            <h2>About Myself</h2>
          </header>
          <p>
            <br />
            I&apos;m based in the US and spent most of my dev career working on
            full stack web applications from home.
            <br />
            I&apos;m available from 8:00AM to 5:00PM CST/UTC-6
            <br />
            <br />
            In the workplace and in my teams I love to keep a welcoming
            atmosphere that when mistakes are made are able to kindly guide
            others to the right direction. The ability to reflect on losses and
            celebrate wins is something I highly value within a team setting. In
            my mind, a rising tide lifts all boats so if the goal is to get
            people on the same page and happy in general then that&apos;s
            helpful for everybody.
            <br />
            Aside from that I also like to be as concise as possible. Along the
            same vein, I like to be quick in my work and get to the next stop.
            <br />
            Individually, I like to understand concepts inside and out so I can
            interact with tools as fluidly as I do with a language. This is
            especially true when my curiosity and interest points me in a
            certain direction. Something that extends outside of the workplace.
            <br />
            <br />
            Outside of work I like to keep to myself. I&apos;m an introvert and
            my hobbies reflect that. I&apos;ve loved video games since I was
            young and grew an appreciation for tech because of it. Over the
            years that appreciation for tech meant me dismantling video game
            hardware to dismantling general tech hardware and eventually getting
            me curious about the software in video games. From there I move on
            to the software in unrelated technology and so on and so forth.
            Point being my passion is often what leads me into new and
            interesting paths. I pride myself a lot on this aspect and I plan on
            continuing this trend.
            <br />
            <br />
            Scroll through the website to find out more about my personal
            projects and career.
            <br />
          </p>
          <footer>
            <br />
            <h3>Contact Info</h3>
            <br />
            <span className={styles.contactGrid}>
              <LogoRow logoData={homeLogoData} />
            </span>
          </footer>
        </section>
      </article>
      <article>
        <header>
          <h1>My personal projects</h1>
        </header>
        <div className={styles.projectGrid}>
          <ProjectCard projectCardData={projectCardData} />
        </div>
      </article>
      <article className={styles.jobList}>
        <header>
          <h1>My jobs</h1>
          <br />
          Below better describes what I took away from my jobs rather than what
          I did. For that you can go to my LinkedIn page.
        </header>
        <br />
        <JobCard jobCardData={jobCardData} />
      </article>
    </main>
  );
}
