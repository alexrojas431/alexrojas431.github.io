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
      {p.imageCarouselData.map((image: ImageSetCaptions, index: number) => (
        <div
          key={image.id}
          className={`${
            index === currentSlide
              ? styles.currentSlide
              : styles.notCurrentSlide
          }`}
        >
          <Image src={image.src} alt={image.alt} width={500} height={500} />
          <p>{image.caption}</p>
          <span className="thumbnail">
            <Image
              key={image.id}
              src={image.src}
              alt=""
              width={50}
              height={50}
            />
          </span>
        </div>
      ))}
    </section>
  );
};

export default ImageCarousel;
