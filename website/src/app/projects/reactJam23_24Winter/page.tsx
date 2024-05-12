import Link from "next/link";
import LogoRow from "@/components/logoRow";
import ProjectTemplate from "@/components/projectTemplate";
import { reactJam23_24WinterProjectTemplate } from "@/data/projectTemplateData/reactJam23_24WinterProjectTemplate";
import { reactJam23_24WinterLogoData } from "@/data/logoData/reactJam23_24WinterLogoData";
import styles from "@/scss/projects.module.scss";

export default function ReactJam23_24Winter() {
  return (
    <main className={styles.main}>
      <Link href="/">
        <h3 className={styles.arrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card}>
        <header>
          <h1>Cyberpunk Tycoon</h1>
          <div className={styles.grid}>
            <LogoRow logoData={reactJam23_24WinterLogoData} />
          </div>
        </header>
        <ProjectTemplate
          projectTemplateData={reactJam23_24WinterProjectTemplate}
        />
      </article>
    </main>
  );
}
