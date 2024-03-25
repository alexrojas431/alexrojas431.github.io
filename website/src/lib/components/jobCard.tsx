import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { JobCardInterface } from "@/interface/jobCardInterface";
import { ImageSetInterface } from "@/interface/imageSetInterface";
import { splitContent } from "@/util/splitContent";
import styles from "@/scss/components/jobCard.module.scss";

interface Props {
  readonly jobCardData: JobCardInterface[];
}

const ProjectCard = (p: Props) => {
  const credits = {
    fontSize: "75%",
    fontStyle: "italic",
  };

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
          <span className={styles.imgSection}>
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
                    <Link href={image.creditLink} style={credits}>
                      {image.credits}
                    </Link>
                  </Fragment>
                )}
              </span>
            ))}
          </span>
          <p>{splitContent(job.id, job.description)}</p>
        </section>
      ))}
    </Fragment>
  );
};

export default ProjectCard;
