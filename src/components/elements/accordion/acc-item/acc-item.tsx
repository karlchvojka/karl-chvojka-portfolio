/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Component Imports */
import Image from 'next/image';
/* End Component Imports */

/* Asset Imports */
/* End Asset Imports */

/* Style Imports */
import styles from './acc-item.module.css';
/* End Style Imports */

/**
 * Accordion Item
 *
 * Accordion Item Component
 *
 * @returns Accordion Item Component
 */
export default function AccordionItem() {
  return (
    <section className={styles.acc_item_wrap}>
      <section className={styles.acc_item_inner}>
        <section className={styles.acc_item_title}>
          <button>
            <div>
              <h3>Accordion Item</h3>
            </div>
            <div>
              <Image
                alt="Accordion Arrow Image"
                height={19}
                src="/global-assets/images/arrow.png" 
                width={23}
              />
            </div>
          </button>
        </section>
        <section className={styles.acc_item_content}>
          <section className={styles.skill_item}>
            <h4>Skill Title</h4>
            <section className={styles.progress_wrap}>
              <section className={styles.progress_inner}>
                <p>75%</p>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}
