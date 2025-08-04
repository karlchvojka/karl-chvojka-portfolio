/* Component Imports */
import Header from "components/layout/Header/Header.tsx";
import HeroImage from "components/features/hero-image/hero-image.tsx";
import SectionHeader from "components/elements/sec-head/sec-head.tsx";
import ProjectCard from "components/elements/project-card/project-card.tsx";
/* End Component Imports */

/* Asset Imports */
/* End Asset Imports */

/* Style Imports */
import styles from "./page.module.css";
/* End Style Imports */

/**
 * Home
 *
 * Home Component
 *
 * @returns Home Component
 */
export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <HeroImage />
      <main className={styles.main}>
        <h1>Karl Chvojka's Portfolio</h1>
        <SectionHeader title="Projects" />
        <ProjectCard
          projDesc="This is a description"
          projGit="https://github.com"
          projImg="/global-assets/images/projects/weather.png"
          projTech="All tech"
          projTitle="Project Title"
        />
        <footer className={styles.footer}>
          <p>Footer</p>
        </footer>
      </main>
    </div>
  );
}
