/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Style Imports */
import styles from './sec-head.module.css';
/* End Style Imports */

/* Section Header Prop Types */
type SectionHeaerProps = {
  title: string;
};
/* End Section Header Prop Types */

/**
 * Section Header
 *
 * A styled header for sections
 *
 * @param { string } title Text to go into the Header
 * @returns Section Header Component
 */
export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <section className={styles.sect_head_wrap}>
      <section className={styles.cornerWrapHeader}>
        <h2>{title}</h2>
      </section>
    </section>
  );
}
