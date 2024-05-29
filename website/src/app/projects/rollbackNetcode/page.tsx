import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { rollbackNetcodeLogoData } from "@/data/logoData/rollbackNetcodeLogoData";
import { rollbackNetcodeProjectTemplate } from "@/data/projectTemplateData/rollbackNetcodeProjectTemplate";
import styles from "@/scss/projects.module.scss";

export default function RollbackNetcode() {
  return (
    <main className={styles.main}>
      <Link href="/">
        <h3 className={styles.arrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card}>
        <header>
          <h1>Rollback Netcode (WIP)</h1>
          <div className={styles.grid}>
            <LogoRow logoData={rollbackNetcodeLogoData} />
          </div>
        </header>
        <ProjectTemplate projectTemplateData={rollbackNetcodeProjectTemplate} />
      </article>
    </main>
  );
}
