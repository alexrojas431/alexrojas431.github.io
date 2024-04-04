"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import { ImageSetCaptions } from "@/interface/imageSetInterfaces";
import styles from "@/scss/components/imageCarousel.module.scss";

/**
 * ImageCarousel
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

  function nextSlide() {
    const newIndex = currentSlide + 1;
    if (newIndex >= 0 && newIndex < p.imageCarouselData.length) {
      setCurrentSlide(newIndex);
    } else if (newIndex === p.imageCarouselData.length) {
      setCurrentSlide(0);
    }
  }

  function previousSlide() {
    const newIndex = currentSlide - 1;
    if (newIndex >= 0 && newIndex < p.imageCarouselData.length) {
      setCurrentSlide(newIndex);
    } else if (newIndex < 0) {
      setCurrentSlide(p.imageCarouselData.length - 1);
    }
  }

  return (
    <section className={styles.carousel}>
      <header id={styles.caraHeader}>
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
        >
          <span className={styles.imgContainer}>
            <Image
              className={styles.slideImg}
              src={image.src}
              alt={image.alt}
              width={700}
              height={700}
            />
            <span className={styles.backArrow}>&lt;</span>
            <span className={styles.forwardArrow}>&gt;</span>
          </span>
          <p>{image.caption}</p>
        </div>
      ))}
      <span className={styles.thumbnails}>
        {p.imageCarouselData.map((image: ImageSetCaptions, index: number) => (
          <Image
            key={image.id + "-thumbnail"}
            src={image.src}
            alt=""
            className={`${
              index === currentSlide
                ? ""
                : styles.notCurrentThumb
            }`}
            width={55}
            height={50}
          />
        ))}
      </span>
    </section>
  );
};

export default ImageCarousel;
