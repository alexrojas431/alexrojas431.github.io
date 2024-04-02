import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { LogoInterface } from "@/interface/logoInterface";
import styles from "@/scss/components/logoRow.module.scss";

/**
 * LogoRow
 *
 * @what
 * A logoRow is the set of images that would link to another website.
 * May also include the credits for an image if it requires it.
 *
 * @param logoData - Fills in the details of the template
 *
 * @relatedFiles logoData.ts, logoInterface.ts
 */

interface Props {
  readonly logoData: LogoInterface[];
}

const LogoRow = (p: Props) => {
  return (
    <Fragment>
      {p.logoData.map((logo: LogoInterface) => (
        <span key={logo.id}>
          <Link href={logo.link}>
            <Image
              src={logo.image.src}
              alt={logo.image.alt}
              width={50}
              height={50}
              priority
            />
          </Link>
          <br />
          {logo.description}
          {logo.image.credits && logo.image.creditLink && (
            <Fragment>
              <br />
              <Link
                href={logo.image.creditLink}
                title={logo.image.creditTitle}
                className={styles.credits}
              >
                {logo.image.credits}
              </Link>
            </Fragment>
          )}
        </span>
      ))}
    </Fragment>
  );
};

export default LogoRow;
