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
        <h3 className={styles.arrow} id={unique.vrArrow}>
          <span>&lt;-</span> Go Back to home page
        </h3>
      </Link>
      <article className={styles.card} id={unique.vrCard}>
        <header>
          <h1>Virtual Reality Research</h1>
          <div className={styles.grid} id={unique.vrGrid}>
            <LogoRow logoData={vrResearchProjectLogoData} />
          </div>
        </header>
        <section>
          <header>
            <h2>Introduction</h2>
          </header>
          <p>
            I was invited into the research project by my then classmate Ivan
            Sanchez, the project was supervised and supported by Dr. Papka and
            Dr. Zachary Wahl-Alexander. By the time I joined the project, a
            pilot of the experiment had been conducted and a 3D model partially
            made, I would be conducting the full experiment and making
            adjustments to the model. In short, we would be performing the
            experiment using that model and writing a research paper explaining
            the process and our conclusions. All in the effort to see if virtual
            reality (VR) could be used in an educational setting, specifically
            to prepare aspiring teachers through VR.
            <br />
            <br />
            This page will be an overview of the project but you can check out
            the research paper linked above for more details. This page will
            also primarily talk about my contributions to the project,
            that&apos;s not to say that I was the only one doing the work. The
            people I previously mentioned contributed a lot, I have links to
            their LinkedIn page above. This project is largely unrelated to my
            software engineering skills so undertaking it was very new to me but
            even still it allowed me to improve my skills in other areas. The
            paper even got published by NCUR in their proceedings in 2020
            (National Conference on Undergraduate Research).
          </p>
        </section>
        <ProjectTemplate projectTemplateData={vrResearchProjectTemplate} />
      </article>
    </main>
  );
}
