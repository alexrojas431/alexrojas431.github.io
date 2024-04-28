import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { JobCardInterface } from "@/interface/jobCardInterface";
import { ImageSetInterface } from "@/interface/imageSetInterfaces";
import { splitContent } from "@/util/splitContent";
import styles from "@/scss/components/jobCard.module.scss";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
} from "@/util/globalConstants";

/**
 ** JobCard
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
  if (p.jobCardData.length === 0) {
    throw new Error("\nJobCard: " + EMPTY_PROPS_ERROR_MESSAGE + "\n");
  }

  // Check that props are in form of JobCardInterface
  p.jobCardData.every((job): void => {
    const isNotEmpty: boolean =
      job.id.length > 0 &&
      job.company.length > 0 &&
      job.department.length > 0 &&
      job.position.length > 0 &&
      job.location.length > 0 &&
      job.description.length > 0;

    if (!isNotEmpty) {
      throw new Error(
        "\nJobCard: " +
          EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
          " 'JobCardInterface'.\n"
      );
    }

    job.images.every((image): void => {
      const creditsExists: boolean = typeof image.credits === "string";
      const creditTitleExists: boolean = typeof image.creditTitle === "string";
      const creditLinkExists: boolean = typeof image.creditLink === "string";
      const creditItemsAlign: boolean =
        creditsExists === creditTitleExists &&
        creditsExists === creditLinkExists;

      if (!creditItemsAlign) {
        throw new Error("\nJobCard: " + INVALID_CREDITS_ERROR_MESSAGE + "\n");
      }
    });
  });

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
                <div>
                  {typeof image.src === "object" ? (
                    <Image
                      src={image.src.src}
                      alt={image.alt}
                      width={image.src.width}
                      height={image.src.height}
                    />
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={150}
                      height={100}
                    />
                  )}
                </div>
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
