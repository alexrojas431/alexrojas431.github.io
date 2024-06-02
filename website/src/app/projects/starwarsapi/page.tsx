import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import ImageCarousel from "@/components/imageCarousel";
import { starWarsCarousel } from "@/data/imageCarouselData/starWarsCarouselData";
import { starWarsProjectTemplate } from "@/data/projectTemplateData/starwarsProjectTemplate";
import { starLogoData } from "@/data/logoData/starWarsLogoData";
import styles from "@/scss/projects.module.scss";
import unique from "@/scss/pages/starwars.module.scss";

export default function StarWarsAPI() {
  return (
    <main className={styles.main}>
      <span id={unique.stars}></span>
      <span id={unique.twinkle}></span>
      <Link href="/">
        <h3 className={styles.arrow} id={unique.starArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={unique.starCard}>
        <header>
          <h1>Star Wars API</h1>
          <div className={styles.grid} id={unique.starGrid}>
            <LogoRow logoData={starLogoData} />
          </div>
        </header>
        <ImageCarousel imageCarouselData={starWarsCarousel} />
        <ProjectTemplate projectTemplateData={starWarsProjectTemplate} />
      </article>
    </main>
  );
}
