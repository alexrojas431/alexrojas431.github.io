import Image from "next/image";
import LogoRow from "@/components/logoRow";
import ProjectCard from "@/components/projectCard";
import JobCard from "@/components/jobCard";
import { homeLogoData } from "@/data/logoData/homeLogoData";
import { projectCardData } from "@/data/projectCardData";
import { jobCardData } from "@/data/jobCardData";
import ProfilePic from "@/public/AlexRProfilePic.jpg";
import styles from "@/scss/pages/home.module.scss";
//TODO 1 : Go through visual aspect of the website with other people to see if it looks good, Go through the written down notes. Change header font and general layout of project pages
//TODO 2 : Add project page for my research project on VR

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
            I&apos;m based in the US and spent most of my development career
            working on full stack web applications from home.
            <br />
            I&apos;m available from 8:00AM to 5:00PM CST/UTC-6
            <br />
            <br />
            I&apos;ve had great experiences working with groups of other devs,
            it&apos;s that collaborative mindset I like to extend to the
            workplace. This means keeping a welcoming atmosphere that when
            mistakes are made are kindly corrected allowing for improvement
            without putting others down. The ability to reflect on losses and
            celebrate wins is something I highly value within a team setting. In
            my mind, a rising tide lifts all boats so if the goal is to keep a
            positive atmosphere where learning is encouraged then then
            that&apos;s helpful for everybody. Aside from that I also like to be
            as concise and as efficient as possible, aiming for what comes
            after.
            <br />
            <br />
            Individually, I like to understand concepts inside and out so I can
            interact with tools as fluidly as I do with a language. This is
            especially important when my curiosity and interests can often point
            me in a new direction. Something that extends outside of the
            workplace.
            <br />
            <br />
            Outside of work I like to keep to myself. I&apos;m an introvert and
            my hobbies reflect that. I&apos;ve loved video games since I was
            young and grew an appreciation for tech because of it. Over the
            years that appreciation for tech meant me dismantling video game
            hardware to dismantling general tech hardware and eventually getting
            me curious about the software in video games. My curiosity would
            move to software in unrelated technology. Point being my passion is
            often what leads me into new and interesting paths. I pride myself a
            lot on this and I plan on continuing this habit.
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
          I did. For detailed information, you can go to my LinkedIn page.
        </header>
        <br />
        <JobCard jobCardData={jobCardData} />
      </article>
    </main>
  );
}
