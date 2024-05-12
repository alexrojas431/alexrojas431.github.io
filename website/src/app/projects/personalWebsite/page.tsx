import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { personalsiteProjectTemplate } from "@/data/projectTemplateData/personalsiteProjectTemplate";
import { personalSiteLogoData } from "@/data/logoData/personalSiteLogoData";
import styles from "@/scss/projects.module.scss";
import web from "@/scss/pages/personalSite.module.scss";

export default function PersonalWebsite() {
  return (
    <main className={styles.main}>
      <span id={web.webMain}></span>
      <Link href="/">
        <h3 className={styles.arrow} id={web.webArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={web.webCard}>
        <header>
          <h1>My personal website</h1>
          <div className={styles.grid} id={web.webGrid}>
            <LogoRow logoData={personalSiteLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={personalsiteProjectTemplate} />
      </article>
    </main>
  );
}
