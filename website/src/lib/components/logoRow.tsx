import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { LogoInterface } from "@/interface/logoInterface";
import styles from "@/scss/components/logoRow.module.scss";
import {
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  INVALID_CREDITS_ERROR_MESSAGE,
} from "@/util/globalConstants";

/**
 ** LogoRow
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

function LogoRow(p: Props) {
  if (p.logoData.length === 0) {
    throw new Error("\nLogoRow: " + EMPTY_PROPS_ERROR_MESSAGE + "\n");
  }

  // Prop validation check that it's not empty and credits are consistent
  p.logoData.every((logo): void => {
    const isNotEmpty: boolean =
      logo.id.length > 0 &&
      logo.link.length > 0 &&
      logo.description.length > 0 &&
      Object.keys(logo.image).length > 0;

    if (!isNotEmpty) {
      throw new Error(
        "\nLogoRow: " + EMPTY_OBJECT_KEYS_ERROR_MESSAGE + " 'LogoInterface'.\n"
      );
    }

    const image = logo.image;

    const creditsExists: boolean = typeof image.credits === "string";
    const creditTitleExists: boolean = typeof image.creditTitle === "string";
    const creditLinkExists: boolean = typeof image.creditLink === "string";
    const creditItemsAlign: boolean =
      creditsExists === creditTitleExists && creditsExists === creditLinkExists;

    if (!creditItemsAlign) {
      throw new Error("\nLogoRow: " + INVALID_CREDITS_ERROR_MESSAGE + "\n");
    }
  });

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
}

export default LogoRow;
