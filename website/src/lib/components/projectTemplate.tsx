import { Fragment } from "react";
import {
  ListPoint,
  ProjectTemplateInterface,
  TechStack,
} from "@/lib/interface/projectTemplateInterface";
import { splitContent } from "@/util/splitContent";
import styles from "@/scss/projects.module.scss";

interface Props {
  readonly projectPageData: ProjectTemplateInterface[];
}

const ProjectTemplate = (p: Props) => {
  /**
   * isFinalItem
   *
   * @what
   * Determines if the index given is the last element in the array
   * and then if the index is odd
   *
   * @why
   * CSS style finalItem should only apply to the last list item
   * and only if that item needs to take space in both columns (odd index)
   *
   * @param i - current index of array (starts at 0)
   * @param sizeOfArray - full length of array
   * @returns boolean
   */

  const isFinalItem = (i: number, sizeOfArray: number): boolean => {
    if (i === sizeOfArray - 1) {
      return i % 2 === 0;
    }
    return false;
  };

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
              {project.summaryList.map((point: ListPoint, index: number) => (
                <li
                  key={point.id}
                  className={`${
                    isFinalItem(index, project.summaryList.length)
                      ? styles.finalItem
                      : ""
                  }`}
                >
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
            <p>{splitContent(project.id + "-techStack", project.techStack)}</p>
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
            <p>{splitContent(project.id + "-arch", project.architecture)}</p>
          </section>
          <br />
          <section>
            <header>
              <h2>Overall Description</h2>
            </header>
            <p>{splitContent(project.id + "-desc", project.description)}</p>
          </section>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default ProjectTemplate;
