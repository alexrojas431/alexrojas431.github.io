import Image from "next/image";
import GitHubIcon from "../../../../public/github-mark/github-mark-white.svg";
import styles from "../projects.module.scss";
import Link from "next/link";

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
        <p>
          Code on GitHub:
          <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Game-Session-API">
            <Image src={GitHubIcon} alt="GitHub Icon" width={50} height={50} />
          </Link>
          <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki">
            Wiki for Project
          </Link>
          <Link href="https://github.com/LlamasOnTheRun/Star-Wars-Rebellion-Component-Info-API/wiki/Architecture-Overview">
            Detailed explanation on project structure and data replicated in API
          </Link>
          <br />
          <br />
          My friend really likes board games and wanted to experiment with
          translating a Star Wars themed board game into a virtual medium. One
          step he decided to take was to make an API so the game can have all
          the information readily available to it. This was a big project, so he
          asked for my help. The project uses Java Springboot. The project also
          uses the MVC architecture as a guide for its organization as well as
          the DAO design pattern for our entities. Before I list what, I did on
          the project I want to explain the project first beforehand. To help
          illustrate the organization of the code, I'll present an entity and go
          through how it's written so it's usable by the database. ActionCard is
          the entity class which declares what would be inside an ActionCard, in
          the board game an action card typically has some text describing its
          function. A designated faction (bad/good or empire/rebel) etc.
          ActionCardRequest - a class that declares members that would be a part
          of an action card ActionCardSpecification - A class that houses a
          method that uses given data to find a specific instance of a card. If
          no data is given, then you're given every action card
          ActionCardRepository - interface that uses related specification for
          methods that help find specified cards ActionCardController - A class
          houses Get and post methods. This class creates and uses related repo
          and spec objects. Get methods assume that you want all the action
          cards, so the repo is used with no data given to the spec. Post
          methods take in data through the form of a request object. This
          request is passed to the spec which is passed to the repo's respective
          methods. I'll summarize the things I worked on below: - Created
          several entities for specific card types or game items using MVC as a
          guide. (EX: ActionCard, Leader or Ring) - Added to the H2 Database for
          specific cards/items found in the game. (EX: Bobba Fett as an empire
          leader, among many other empire and rebel leaders) - Used Postman to
          make sure that the newly added info would display correctly through
          their get and post methods within the entities related controller. -
          The project includes 100% code coverage testing using Junit Uses MVC
          and REST but doesn't follow them closely. Have MC but doesn't follow
          view completely. REST but isn't completely stateless as the database
          is attached to the application. Embeddable dictates several columns in
          a single column. Predicates customize the SQL query| used for database
          operations | found in javax package EX where (...) This is where the
          predicate comes in. JPA. JPA is a Java specification for
          object-relational mapping and criteria queries are a way of building
          dynamic queries using Java objects, rather than using SQL directly1.
          Predicates are Boolean expressions that are used to filter the results
          of a criteria query2. Looking into interfaces and its uses outside of
          classes
        </p>
      </article>
    </main>
  );
}
