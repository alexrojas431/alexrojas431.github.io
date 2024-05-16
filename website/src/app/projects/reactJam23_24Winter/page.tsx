import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import ImageCarousel from "@/components/imageCarousel";
import { reactJam23_24WinterProjectTemplate } from "@/data/projectTemplateData/reactJam23_24WinterProjectTemplate";
import { reactJam23_24WinterLogoData } from "@/data/logoData/reactJam23_24WinterLogoData";
import { reactJam23_24WinterCarousel } from "@/data/imageCarouselData/reactJam23_24WinterCarouselData";
import styles from "@/scss/projects.module.scss";
import jam from "@/scss/pages/reactJam23_24Winter.module.scss";

export default function ReactJam23_24Winter() {
  return (
    <main className={styles.main} id={jam.jam23WinterMain}>
      <Link href="/">
        <h3 className={styles.arrow} id={jam.jam23WinterArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={jam.jam23WinterCard}>
        <header>
          <h1>Cyberpunk Tycoon</h1>
          <div className={styles.grid} id={jam.jam23WinterGrid}>
            <LogoRow logoData={reactJam23_24WinterLogoData} />
          </div>
        </header>
        <ImageCarousel imageCarouselData={reactJam23_24WinterCarousel} />
        <ProjectTemplate
          projectTemplateData={reactJam23_24WinterProjectTemplate}
        />
        snowflake image credits:
        <br />
        <a href="https://www.freepik.com/free-vector/realistic-falling-white-snow-overlay-transparent-background-snowflakes-storm-layer_19393340.htm#fromView=search&page=1&position=0&uuid=4bb644e0-4459-4563-a159-391cc377b1be">
          Image by svstudioart on Freepik
        </a>
      </article>
    </main>
  );
}
