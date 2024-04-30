import Link from "next/link";
import { Fragment } from "react";
import { ProjectCardInterface } from "@/interface/projectCardInterface";
import styles from "@/scss/components/projectCard.module.scss";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
} from "@/util/globalConstants";

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

function ProjectCard(p: Props) {
  if (p.projectCardData.length === 0) {
    throw new Error("\nProjectCard: " + EMPTY_PROPS_ERROR_MESSAGE + "\n");
  }

  p.projectCardData.every((project): void => {
    const isNotEmpty: boolean =
      project.id.length > 0 &&
      project.link.length > 0 &&
      project.title.length > 0 &&
      project.description.length > 0;

    if (!isNotEmpty) {
      throw new Error(
        "\nProjectCard: " +
          EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
          " 'ProjectCardInterface'.\n"
      );
    }
  });

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
}

export default ProjectCard;
