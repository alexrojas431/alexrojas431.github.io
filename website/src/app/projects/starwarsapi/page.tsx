import Image from "next/image";
import Link from "next/link";
import styles from "../projects.module.scss";
import GitHubIcon from "../../../../public/github-mark/github-mark-white.svg";
import APIArch from "../../../../public/StarWarsCompAPI-Architecture.png";
import wikiIcon from "../../../../public/wiki icon.png";

export default function StarWarsAPI() {
  return (
    <main className={styles.main}>
      <Link href="/">
        <h3 className={styles.arrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card}>
        <h1>Star Wars API</h1>
        <div className={styles.grid}>
          <span>
            <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API">
              <Image
                src={GitHubIcon}
                alt="GitHub Icon"
                width={50}
                height={50}
              />
            </Link>
            <br />
            Code on GitHub
          </span>
          <span>
            <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki">
              <Image src={wikiIcon} alt="Wiki icon" width={50} height={50} />
            </Link>
            <br />
            Project Wiki
          </span>
          <span>
            <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview">
              <Image
                src={APIArch}
                alt="Picture of architecture of API"
                width={50}
                height={50}
              />
            </Link>
            <br />
            Detailed explanation of architecture of API
          </span>
        </div>
        <br />
        <h2>Tech Stack</h2>
        <p>
          This project is has no dedicated front-end, only focusing on
          constructing the API and how those requests are handled. If needed
          there is a bare bones page where your requests are displayed on a
          webpage however, it's best to use Postman to make requests.
          <br />
          <b>Tech Used:</b> Java Spring boot, JPA to dynamically create queries
          to the database, 100% test coverage with JUnit, Internal H2 Database
        </p>
        <br />
        <h2>Architecture</h2>
        <p>
          This project uses <b>REST</b> principles with a variation of the{" "}
          <b>MVC</b> structure along with the <b>DAO</b> design pattern for our
          entities.
          <br />
          This is only a brief overview of the architecture, there is a detailed
          description on the architecture on the following linked page:{" "}
          <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview">
            Detailed architecture explanation
          </Link>
        </p>
        <br />
        <h2>Overall Description</h2>
        <p>
          My friend really likes board games and wanted to experiment with
          translating a Star Wars themed board game into a virtual medium. One
          step he decided to take was to make an API so the game can have all
          the information readily available to the user. This was a big project,
          so he asked for my help.
          <br />
          Before I list what I did on the project I want to explain the project
          first beforehand. To help illustrate the organization of the code,
          I'll present an entity and go through how it's written so it's usable
          by the database.
          <br />
          ActionCard is the entity class which declares what would be inside an
          ActionCard, in the board game an action card typically has some text
          describing its function, a designated faction (bad/good or
          empire/rebel) etc.
          <br />
          ActionCardRequest - a class that declares members that would be a part
          of an action card ActionCardSpecification - A class that houses a
          method that uses given data to find a specific instance of a card. If
          no data is given, then you're given every action card
          <br />
          ActionCardRepository - interface that uses related specification for
          methods that help find specified cards
          <br />
          ActionCardController - A class houses Get and post methods. This class
          creates and uses related repo and spec objects. Get methods assume
          that you want all the action cards, so the repo is used with no data
          given to the spec. Post methods take in data through the form of a
          request object. This request is passed to the spec which is passed to
          the repo's respective methods.
          <br />
          <br />
          I'll summarize the things I worked on below:
        </p>
        <br />
        <ul className={styles.squareGrid}>
          <li>
            Created several entities for specific card types or game items using
            MVC as a guide. (EX: ActionCard, Leader or Ring)
          </li>
          <li>
            Added to the H2 Database for specific cards/items found in the game.
            (EX: Bobba Fett as an empire leader, among many other empire and
            rebel leaders)
          </li>
          <li>
            Used Postman to make sure that the newly added info would display
            correctly through their get and post methods within the entities
            related controller. (More info for the endpoints found in the wiki)
          </li>
          <li>
            Utilized JUnit methods in order to complete 100% code coverage with
            testing
          </li>
        </ul>
      </article>
      <footer className={styles.footer}>
        <a href="https://www.flaticon.com/free-icons/wiki" title="wiki icons">
          Wiki icons created by Freepik - Flaticon
        </a>
      </footer>
    </main>
  );
}
