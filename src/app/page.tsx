/* Component Imports */
import Header from "components/layout/Header/Header.tsx";
import HeroImage from "components/features/hero-image/hero-image.tsx";
/* End Component Imports */

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
        <footer className={styles.footer}>
          <p>Footer</p>
        </footer>
      </main>
    </div>
  );
}
