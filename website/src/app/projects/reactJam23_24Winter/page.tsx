import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import ImageCarousel from "@/components/imageCarousel";
import { reactJam23_24WinterProjectTemplate } from "@/data/projectTemplateData/reactJam23_24WinterProjectTemplate";
import { reactJam23_24WinterLogoData } from "@/data/logoData/reactJam23_24WinterLogoData";
import { reactJam23_24WinterCarousel } from "@/data/imageCarouselData/reactJam23_24WinterCarouselData";
import styles from "@/scss/projects.module.scss";
import unique from "@/scss/pages/reactJam23_24Winter.module.scss";

export default function ReactJam23_24Winter() {
  return (
    <main className={styles.main} id={unique.jam23WinterMain}>
      <Link href="/">
        <h3 className={styles.arrow} id={unique.jam23WinterArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={unique.jam23WinterCard}>
        <header>
          <h1>ReactJam Winter 2023/24: Cyberpunk Tycoon</h1>
          <div className={styles.grid} id={unique.jam23WinterGrid}>
            <LogoRow logoData={reactJam23_24WinterLogoData} />
          </div>
        </header>
        <ImageCarousel imageCarouselData={reactJam23_24WinterCarousel} />
        <ProjectTemplate
          projectTemplateData={reactJam23_24WinterProjectTemplate}
        />
      </article>
    </main>
  );
}
