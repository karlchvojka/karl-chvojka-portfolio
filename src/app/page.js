/* Component Imports */
import Header from "components/layout/header/header.js";
import HeroImage from "components/features/hero-image/hero-image.jsx";
import Projects from "components/layout/projects/projects.js";
import Skills from "components/layout/skills/skills.js";
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
        <Projects />
        <Skills /> 
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}
