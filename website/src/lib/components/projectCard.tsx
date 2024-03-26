import Link from "next/link";
import { Fragment } from "react";
import { ProjectCardInterface } from "@/interface/projectCardInterface";
import styles from "@/scss/components/projectCard.module.scss";

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
              <div>
                <b>Click for more information</b>
              </div>
            </p>
          </section>
        </Link>
      ))}
    </Fragment>
  );
};

export default ProjectCard;
