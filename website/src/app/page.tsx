import Image from "next/image";
import LogoRow from "@/lib/components/logoRow";
import { homeLogoData } from "@/lib/data/logoData";
import { projectCardData } from "@/lib/data/projectCardData";
import ProjectCard from "@/lib/components/projectCard";
import ProfilePic from "@/public/AlexRProfilePic.jpg";
import styles from "@/app/home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1>Hey, I'm Alex</h1>
        <span>
          <Image
            src={ProfilePic}
            alt="A picture of myself - Alexander Rojas"
            width={140}
            height={203}
          />
        </span>
      </header>
      <article className={styles.description}>
        <section>
          <header>
            <h2>About Myself</h2>
          </header>
          <p>
            <br />
            I'm based in the US and spent most of my dev career working on full
            stack web applications from home.
            <br />
            I'm available from 8:00AM to 5:00PM CST/UTC-6
            <br />
            <br />
            In the workplace and in my teams I love to keep a welcoming
            atmosphere that when mistakes are made are able to kindly guide
            others to the right direction. The ability to reflect on losses and
            celebrate wins is something I highly value within a team setting. In
            my mind, a rising tide lifts all boats so if the goal is to get
            people on the same page and happy in general then that's helpful for
            everybody.
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
            Outside of work I like to keep to myself. I'm an introvert and my
            hobbies reflect that. I've loved video games since I was young and
            grew an appreciation for tech because of it. Over the years that
            appreciation for tech meant me dismantling video game hardware to
            dismantling general tech hardware and eventually getting me curious
            about the software in video games. From there I move on to the
            software in unrelated technology and so on and so forth. Point being
            my passion is often what leads me into new and interesting paths. I
            pride myself a lot on this aspect and I plan on continuing this
            trend.
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
        <div className={styles.grid}>
          <ProjectCard projectCardData={projectCardData} />
        </div>
      </article>
      <article className={styles.jobList}>
        <header>
          <h1>List of what I took away from my jobs</h1>
          Below is not what I did during my previous jobs but what I took away
          from my then jobs.
        </header>
        <section>
          <header>
            <h2>Discover Financial Services</h2>
          </header>
          <p>
            I've had such a comroderie with my teammates and coworkers that some
            have my lifelong friends.
          </p>
        </section>
      </article>
    </main>
  );
}
