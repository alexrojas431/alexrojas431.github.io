import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { rollbackNetcodeLogoData } from "@/data/logoData/rollbackNetcodeLogoData";
import { rollbackNetcodeProjectTemplate } from "@/data/projectTemplateData/rollbackNetcodeProjectTemplate";
import styles from "@/scss/projects.module.scss";
import rollback from "@/scss/pages/rollbackNetcode.module.scss";
//TODO: standardize css imports from projects css to "unique"

export default function RollbackNetcode() {
  return (
    <main className={styles.main} id={rollback.rollbackMain}>
      <Link href="/">
        <h3 className={styles.arrow} id={rollback.rollbackArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={rollback.rollbackCard}>
        <header>
          <h1>Rollback Netcode (WIP)</h1>
          <div className={styles.grid} id={rollback.rollbackGrid}>
            <LogoRow logoData={rollbackNetcodeLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={rollbackNetcodeProjectTemplate} />
      </article>
    </main>
  );
}
