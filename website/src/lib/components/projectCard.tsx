import Link from "next/link";
import { Fragment } from "react";
import { ProjectCardInterface } from "@/interface/projectCardInterface";
import styles from "@/scss/components/projectCard.module.scss";

/**
 ** ProjectCard
 *
 * @what
 * A projectCard is the template for the cards that show a summary for a personal project on the homepage
 *
 * @param projectCardData - Fills in the details of the template
 *
 * @relatedFiles projectCardData.ts, projectCardInterface.ts
 */

interface Props {
  readonly projectCardData: ProjectCardInterface[];
}

const ProjectCard = (p: Props) => {
  return (
    <Fragment>
      {p.projectCardData.map((proj: ProjectCardInterface) => (
        <Link href={proj.link} key={proj.id}>
          <section className={styles.projectCard}>
            <h2>
              {proj.title} <span>-&gt;</span>
            </h2>
            <p>
              {proj.description}
              <br />
              <b>Click for more information</b>
            </p>
          </section>
        </Link>
      ))}
    </Fragment>
  );
};

export default ProjectCard;
