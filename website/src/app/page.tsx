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
        <article className={styles.card}>
          <h2>
            Star Wars API <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </article>
        <article className={styles.card}>
          <h2>
            ReactJam Winter 23/24: Cyberpunk Tycoon <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </article>
        <article className={styles.card}>
          <h2>
            Rollback Netcode Implementation <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </article>
      </div>
    </main>
  );
}
