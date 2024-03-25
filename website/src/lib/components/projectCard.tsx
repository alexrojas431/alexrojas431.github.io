import Link from "next/link";
import { Fragment } from "react";
import { ProjectCardInterface } from "@/interface/projectCardInterface";
import styles from "@/scss/pages/home.module.scss";

interface Props {
  readonly projectCardData: ProjectCardInterface[];
}

const ProjectCard = (p: Props) => {
  return (
    <Fragment>
      {p.projectCardData.map((proj: ProjectCardInterface) => (
        <Link href={proj.link} key={proj.id}>
          <section className={styles.card}>
            <h2>
              {proj.title} <span>-&gt;</span>
            </h2>
            <p>
              {proj.description}
              <br />
              Click for more information
            </p>
          </section>
        </Link>
      ))}
    </Fragment>
  );
};

export default ProjectCard;
