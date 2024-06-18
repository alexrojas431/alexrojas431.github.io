import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { vrResearchProjectTemplate } from "@/data/projectTemplateData/vrResearchProjectTemplate";
import { vrResearchProjectLogoData } from "@/data/logoData/vrResearchProjectLogoData";
import styles from "@/scss/projects.module.scss";
import unique from "@/scss/pages/vrResearchProj.module.scss";

export default function VRresearchProject() {
  return (
    <main className={styles.main}>
      <Link href="/">
        <h3 className={styles.arrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card}>
        <header>
          <h1>VR Research Project</h1>
          <div className={styles.grid} id={unique.vrGrid}>
            <LogoRow logoData={vrResearchProjectLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={vrResearchProjectTemplate} />
      </article>
    </main>
  );
}
