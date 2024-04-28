"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ImageSetCaptions } from "@/interface/imageSetInterfaces";
import styles from "@/scss/components/imageCarousel.module.scss";
import {
  INVALID_CREDITS_ERROR_MESSAGE,
  EMPTY_PROPS_ERROR_MESSAGE,
  EMPTY_OBJECT_KEYS_ERROR_MESSAGE,
} from "@/util/globalConstants";

/**
 ** ImageCarousel
 *
 * @what
 * ImageCarousel is the template for a set of images that are displayed in a slideshow format.
 * Can also be manually flipped through.
 *
 * @param imageCarouselData - Fills in the details of the template
 *
 * @relatedFiles imageCarouselData.ts, imageSetCaptionsInterface.ts
 */

interface Props {
  readonly imageCarouselData: ImageSetCaptions[];
}

const ImageCarousel = (p: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (p.imageCarouselData.length === 0) {
    throw new Error("\nImageCarousel: " + EMPTY_PROPS_ERROR_MESSAGE + "\n");
  }

  // Go through props data and validate it
  p.imageCarouselData.every((image): void => {
    const isNotEmpty: boolean =
      image.id.length > 0 &&
      Object.keys(image.src).length > 0 &&
      image.alt.length > 0 &&
      image.caption.length > 0;

    if (!isNotEmpty) {
      throw new Error(
        "\nImageCarousel: " +
          EMPTY_OBJECT_KEYS_ERROR_MESSAGE +
          " 'ImageSetCaptions'.\n"
      );
    }

    const creditsExists = typeof image.credits === "string";
    const creditTitleExists = typeof image.creditTitle === "string";
    const creditLinkExists = typeof image.creditLink === "string";
    const creditItemsAlign =
      creditsExists === creditTitleExists && creditsExists === creditLinkExists;

    if (!creditItemsAlign) {
      throw new Error(
        "\nImageCarousel: " + INVALID_CREDITS_ERROR_MESSAGE + "\n"
      );
    }
  });

  function nextSlide(): void {
    const newIndex = currentSlide + 1;
    if (newIndex >= 0 && newIndex < p.imageCarouselData.length) {
      setCurrentSlide(newIndex);
    } else if (newIndex === p.imageCarouselData.length) {
      setCurrentSlide(0);
    }
  }

  function previousSlide(): void {
    const newIndex = currentSlide - 1;
    if (newIndex >= 0 && newIndex < p.imageCarouselData.length) {
      setCurrentSlide(newIndex);
    } else if (newIndex < 0) {
      setCurrentSlide(p.imageCarouselData.length - 1);
    }
  }

  function goToSlide(newIndex: number): void {
    setCurrentSlide(newIndex);
  }

  return (
    <section className={styles.carousel}>
      <header className={styles.caraHeader}>
        <h2>Images</h2>
      </header>
      {p.imageCarouselData.map((image: ImageSetCaptions, index: number) => (
        <div
          key={image.id}
          className={`${
            index === currentSlide
              ? styles.currentSlide
              : styles.notCurrentSlide
          }`}
          data-testid={`${
            index === currentSlide ? "currentSlide" : "notCurrentSlide " + index
          }`}
        >
          <span className={styles.slideImg}>
            {typeof image.src === "object" ? (
              <Image
                src={image.src.src}
                alt={image.alt}
                width={image.src.width}
                height={image.src.height}
              />
            ) : (
              <Image src={image.src} alt={image.alt} width={800} height={800} />
            )}
          </span>
          <p>
            {image.caption}
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
          </p>
        </div>
      ))}
      <button className={styles.back} onClick={previousSlide}>
        &lt;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &gt;
      </button>
      <span className={styles.thumbnails}>
        {p.imageCarouselData.map((image: ImageSetCaptions, index: number) => (
          <button
            key={image.id + "-thumbnail"}
            onClick={(): void => goToSlide(index)}
          >
            <Image
              src={image.src}
              alt={"image " + (index + 1) + " thumbnail"}
              className={`${
                index === currentSlide
                  ? styles.currentThumb
                  : styles.notCurrentThumb
              }`}
              width={55}
              height={50}
            />
          </button>
        ))}
      </span>
    </section>
  );
};

export default ImageCarousel;
