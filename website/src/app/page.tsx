import Link from "next/link";
import Image from "next/image";
import styles from "./home.module.scss";
import GitHubIcon from "../../public/github-mark/github-mark-white.svg";
import LinkedInIcon from "../../public/LinkedIn-Logos/In-Blue-128.png";
import ProfilePic from "../../public/AlexRProfilePic.jpg";

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
          <p>
            I'm based in the US and spent most of my dev career working on full
            stack web applications from home.
            <br />
            I'm available from 8:00AM to 5:00PM CST/UTC-6
            <br />
            Heres details on my workstyle
            <br />
            Heres details on my peronality and related items that are outside my
            career.
            <br />
            You can check out the overview of my personal projects below as well
            as my personal takeaways from my previous jobs
            <br />
          </p>
          <footer>
            Contact Info
            <br />
            <Link href="https://github.com/alexrojas431">
              <Image
                src={GitHubIcon}
                alt="GitHub Icon, click to go to my GitHub Page"
                width={50}
                height={50}
              />
            </Link>
            <br />
            My GitHub Page
            <Link href="https://github.com/alexrojas431">
              <Image
                src={LinkedInIcon}
                alt="LinkedIn Icon, click to go to my LinkedIn page"
                width={50}
                height={50}
              />
            </Link>
            <br />
            My LinkedIn Page
          </footer>
        </section>
      </article>
      <article>
        <header>
          <h1>List of my personal projects</h1>
        </header>
        <div className={styles.grid}>
          <Link href="/projects/starwarsapi">
            <section className={styles.card}>
              <h2>
                Star Wars API <span>-&gt;</span>
              </h2>
              <p>
                This API spits out data within a StarWars themed board game.
                This was a 4 month project with 100+ commits with cross
                collaboration with a small network of developers ...
              </p>
            </section>
          </Link>
          <section className={styles.card}>
            <h2>
              ReactJam Winter 23/24: Cyberpunk Tycoon <span>-&gt;</span>
            </h2>
            <p>
              Along with a friend of mine, we used React.JS to make a game
              within 12 days in the event called ReactJam 23/24. One thing
              you'll notice is that it has little to it. I prefer the work we
              did on the project rather than the result. It was our first game
              jam and our first time making a video game. Due to this, we needed
              to learn a lot very quickly. The biggest thing was utilizing
              Graphic resources as best as possible ...
            </p>
          </section>
          <section className={styles.card}>
            <h2>
              Rollback Netcode Implementation <span>-&gt;</span>
            </h2>
            <p>
              One of the reasons why I decided to pursue a career in programming
              is because of my interest in making videogames. While I'm not as
              interested in a career within the videogame industry, I still love
              videogames as a hobby and this personal project is just another
              example of that ...
            </p>
          </section>
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
