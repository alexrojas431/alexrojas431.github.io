import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { rollbackNetcodeLogoData } from "@/data/logoData/rollbackNetcodeLogoData";
import { rollbackNetcodeProjectTemplate } from "@/data/projectTemplateData/rollbackNetcodeProjectTemplate";
import styles from "@/scss/projects.module.scss";
import unique from "@/scss/pages/rollbackNetcode.module.scss";

export default function RollbackNetcode() {
  return (
    <main className={styles.main} id={unique.rollbackMain}>
      <Link href="/">
        <h3 className={styles.arrow} id={unique.rollbackArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={unique.rollbackCard}>
        <header>
          <h1>Rollback Netcode (WIP)</h1>
          <div className={styles.grid} id={unique.rollbackGrid}>
            <LogoRow logoData={rollbackNetcodeLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={rollbackNetcodeProjectTemplate} />
      </article>
    </main>
  );
}
