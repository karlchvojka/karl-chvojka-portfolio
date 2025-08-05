/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Component Imports */
import AccordionItem from './acc-item/acc-item.tsx';
/* End Component Imports */

/* Style Imports */
import styles from './accordion.module.css';
/* End Style Imports */

/**
 * Accordion Wrap
 *
 * Accordion Wrap Component
 *
 * @returns Accordion Wrap Component
 */
export default function AccordionWrap() {
  return (
    <section className={styles.acc_wrap}>
      <AccordionItem />
    </section>
  );
}
