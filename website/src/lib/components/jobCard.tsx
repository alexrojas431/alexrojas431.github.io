import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { JobCardInterface } from "@/interface/jobCardInterface";
import { ImageSetInterface } from "@/lib/interface/imageSetInterfaces";
import { splitContent } from "@/util/splitContent";
import styles from "@/scss/components/jobCard.module.scss";

/**
 * JobCard
 *
 * @what
 * A jobCard is a section within the jobList article in the homepage.
 * This makes up the template for a jobCard.
 *
 * @param jobCardData - Fills in the details of the template
 *
 * @related jobCardData.ts, jobCardInterface.ts
 */

interface Props {
  readonly jobCardData: JobCardInterface[];
}

const JobCard = (p: Props) => {
  if (!Array.isArray(p.jobCardData)) {
    throw new Error("\nJobCard requires data to be an array.\n");
  } else if (p.jobCardData.length === 0) {
    throw new Error("\nJobCard requires data to be passed in.\n");
  }

  // Check that props are in form of JobCardInterface
  const isValidData = p.jobCardData.every((job): boolean => {
    const isValidJob =
      typeof job === "object" &&
      "id" in job &&
      "company" in job &&
      "department" in job &&
      "position" in job &&
      "location" in job &&
      "description" in job &&
      typeof job.id === "string" &&
      typeof job.company === "string" &&
      typeof job.department === "string" &&
      typeof job.position === "string" &&
      typeof job.location === "string" &&
      job.id.length > 0 &&
      job.company.length > 0 &&
      job.department.length > 0 &&
      job.position.length > 0 &&
      job.location.length > 0 &&
      "images" in job &&
      Array.isArray(job.images) &&
      job.images.every((image): boolean => {
        const isValidImage =
          typeof image === "object" &&
          "id" in image &&
          "src" in image &&
          "alt" in image &&
          typeof image.id === "string" &&
          (typeof image.src === "string" || typeof image.src === "object") &&
          typeof image.alt === "string" &&
          image.id.length > 0 &&
          Object.keys(image.src).length > 0 &&
          image.alt.length > 0;

        const creditsExists = typeof image.credits === "string";
        const creditTitleExists = typeof image.creditTitle === "string";
        const creditLinkExists = typeof image.creditLink === "string";
        const creditItemsAlign =
          creditsExists === creditTitleExists &&
          creditsExists === creditLinkExists;

        return isValidImage && creditItemsAlign;
      }) &&
      typeof job.description === "string" &&
      job.description.length > 0 &&
      typeof job.description === "string";

    return isValidJob;
  });

  if (!isValidData) {
    throw new Error(
      "\nJobCard: 'jobCardData' should contain non empty elements of following the interface 'JobCardInterface'.\n"
    );
  }

  return (
    <Fragment>
      {p.jobCardData.map((job: JobCardInterface) => (
        <section key={job.id} className={styles.jobCard}>
          <header>
            <h2>{job.company}</h2>
            <h3>{job.department}</h3>
            <h4>{job.position}</h4>
            <h5>{job.location}</h5>
          </header>
          <span className={styles.imgSection} data-testid="jobCardImgSection">
            {job.images.map((image: ImageSetInterface) => (
              <span key={image.id}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={150}
                  height={100}
                />
                {image.credits && image.creditLink && (
                  <Fragment>
                    <br />
                    <Link
                      href={image.creditLink}
                      title={image.creditTitle}
                      className={styles.credits}
                    >
                      {image.credits}
                    </Link>
                  </Fragment>
                )}
              </span>
            ))}
          </span>
          <p>{splitContent(job.id + "-desc", job.description)}</p>
        </section>
      ))}
    </Fragment>
  );
};

export default JobCard;
