/* NextJS Declarations */
"use client";
/* End NextJS Declarations */

/* Framework Component Imports */
/* End Framework Component Imports */

/* Component Imports */
import HeroImage from "components/features/hero-image/hero-image.js";
import Projects from "components/layout/projects/projects.js";
import Skills from "components/layout/skills/skills.js";
/* End Component Imports */

/* Styles Imports */
import styles from "./page.module.css";
/* End Styles Imports */

/**
 * Home
 *
 * Home Component
 *
 * @returns Home Component
 */
export default function Page() {
  return (
    <div className={styles.home_wrap}>
      <HeroImage />
      <main className="main_wrap">
        <Projects />
        <Skills />
      </main>
    </div>
  );
}
