import { Fragment } from "react";
import {
  ListPoint,
  ProjectTemplateInterface,
  TechStack,
} from "@/interface/projectTemplateInterface";
import { splitContent } from "@/util/splitContent";
import styles from "@/scss/projects.module.scss";

/**
 ** ProjectTemplate
 *
 * @what
 * A projectTemplate are the common sections found across all project pages.
 *
 * @param projectPageData - Fills in the details of the template
 *
 * @relatedFiles projectTemplateData folder, projectTemplateInterface.ts
 */

interface Props {
  readonly projectTemplateData: ProjectTemplateInterface;
}

const ProjectTemplate = (p: Props) => {
  /**
   ** isFinalItem
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

  const project = p.projectTemplateData;

  return (
    <Fragment key={project.id}>
      <section>
        <header>
          <h2>Summary of my work on the project</h2>
        </header>
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
      <section>
        <header>
          <h2>Tech Stack</h2>
        </header>
        <p>{splitContent(project.id + "-techStack", project.techStack)}</p>
        <section>
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
      <section>
        <header>
          <h2>Overall Description</h2>
        </header>
        <p>{splitContent(project.id + "-desc", project.description)}</p>
      </section>
    </Fragment>
  );
};

export default ProjectTemplate;
