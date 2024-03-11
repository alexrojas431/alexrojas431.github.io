import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <article className={styles.description}>
        <h1>Hey, I'm Alex</h1>
        <p>
          I'm based in the US and spent most of my dev career working on full
          stack web applications from home.
          <br />
          I'm available from 8:00AM to 5:00PM CST/UTC-6
          <br />
          Check out the overview of my personal projects below
          <br />
          Contact Info:
        </p>
      </article>
      <div className={styles.grid}>
        <Link href="/projects/starwarsapi">
          <article className={styles.card}>
            <h2>
              Star Wars API <span>-&gt;</span>
            </h2>
            <p>
              My friend really likes board games and wanted to experiment with
              translating a Star Wars themed board game into a virtual medium. One
              step he decided to take was to make an API so the game can have all
              the information readily available to it. This was a big project, so
              he asked for my help...
            </p>
          </article>
        </Link>
        <article className={styles.card}>
          <h2>
            ReactJam Winter 23/24: Cyberpunk Tycoon <span>-&gt;</span>
          </h2>
          <p>
            Along with a friend of mine, we used React.JS to make a game within
            12 days in the event called ReactJam 23/24. One thing you'll notice
            is that it has little to it. I prefer the work we did on the project
            rather than the result. It was our first game jam and our first time
            making a video game. Due to this, we needed to learn a lot very
            quickly. The biggest thing was utilizing Graphic resources as best
            as possible...
          </p>
        </article>
        <article className={styles.card}>
          <h2>
            Rollback Netcode Implementation <span>-&gt;</span>
          </h2>
          <p>
            One of the reasons why I decided to pursue a career in programming
            is because of my interest in making videogames. While I'm not as
            interested in a career within the videogame industry, I still love
            videogames as a hobby and this personal project is just another
            example of that...
          </p>
        </article>
      </div>
    </main>
  );
}
