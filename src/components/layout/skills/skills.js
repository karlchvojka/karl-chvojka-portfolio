/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Component Imports */
import AccordionWrap from "components/elements/accordion/accordion.tsx";
import SectionHeader from "components/elements/sec-head/sec-head.tsx";
/* End Component Imports */

/* Style Imports */
import styles from "./skills.module.css";
/* End Style Imports */

/**
 * Skills Section
 *
 * Skills Section Component
 *
 * @returns Skills Section Component
 */
export default function Skills() {
  return (
    <section className={styles.skills_section}>
      <SectionHeader title="Skills "/>
    </section>
  );
}

