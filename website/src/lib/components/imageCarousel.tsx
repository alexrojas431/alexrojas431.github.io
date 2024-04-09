"use client";
import { useState } from "react";
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
        >
          <span className={styles.slideImg}>
            <Image src={image.src} alt={image.alt} width={800} height={800} />
          </span>
          <p>{image.caption}</p>
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
            onClick={() => goToSlide(index)}
          >
            <Image
              src={image.src}
              alt=""
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
