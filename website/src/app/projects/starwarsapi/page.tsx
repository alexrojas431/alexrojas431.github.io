import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import ImageCarousel from "@/components/imageCarousel";
import { starWarsCarousel } from "@/data/imageCarouselData";
import { starWarsTemplateData } from "@/data/projectTemplateData/starwarsTemplateData";
import { starLogoData } from "@/data/logoData";
import styles from "@/scss/projects.module.scss";
import star from "@/scss/pages/starwars.module.scss";

export default function StarWarsAPI() {
  return (
    <main className={styles.main}>
      <span id={star.stars}></span>
      <span id={star.twinkle}></span>
      <Link href="/">
        <h3 className={styles.arrow} id={star.starArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={star.starCard}>
        <header>
          <h1>Star Wars API</h1>
          <div className={styles.grid} id={star.starGrid}>
            <LogoRow logoData={starLogoData} />
          </div>
        </header>
        <ImageCarousel imageCarouselData={starWarsCarousel} />
        <ProjectTemplate projectPageData={starWarsTemplateData} />
      </article>
    </main>
  );
}
