import { Fragment } from "react";
import {
  ListPoint,
  ProjectTemplateInterface,
  TechStack,
} from "@/lib/interface/projectTemplateInterface";
import styles from "@/scss/projects.module.scss";

interface Props {
  readonly projectPageData: ProjectTemplateInterface[];
}

const ProjectTemplate = (p: Props) => {
  return (
    <Fragment>
      {p.projectPageData.map((project: ProjectTemplateInterface) => (
        <Fragment key={project.id}>
          <section>
            <header>
              <h2>Summary of my work on the project</h2>
            </header>
            <br />
            <ul className={styles.gridList}>
              {project.summaryList.map((point: ListPoint) => (
                <li key={point.id}>
                  <h3>{point.title}</h3>
                  {point.content}
                </li>
              ))}
            </ul>
          </section>
          <br />
          <section>
            <header>
              <h2>Tech Stack</h2>
            </header>
            <p>{project.techStack}</p>
            <section>
              <br />
              <b>Tech Used</b>
              <ul>
                {project.techStackList.map((tech: TechStack) => (
                  <li key={tech.id}>{tech.tech}</li>
                ))}
              </ul>
            </section>
          </section>
          <section>
            <header>
              <h2>Architecture</h2>
            </header>
            <p>{project.architecture}</p>
          </section>
          <br />
          <section>
            <header>
              <h2>Overall Description</h2>
            </header>
            <p>{project.description}</p>
          </section>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ProjectTemplate;
