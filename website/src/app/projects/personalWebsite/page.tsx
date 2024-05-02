import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { personalsiteProjectTemplate } from "@/data/projectTemplateData/personalsiteProjectTemplate";
import { personalSiteLogoData } from "@/data/logoData";
import styles from "@/scss/projects.module.scss";

export default function PersonalWebsite() {
  return (
    <main className={styles.main}>
      <Link href="/">
        <h3 className={styles.arrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card}>
        <header>
          <h1>My personal website</h1>
          <div className={styles.grid}>
            <LogoRow logoData={personalSiteLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={personalsiteProjectTemplate} />
      </article>
    </main>
  );
}
