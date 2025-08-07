/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Framework Imports */
import { useState } from 'react';
/* End Framework Imports*/

/* Component Imports */
import Image from 'next/image';
/* End Component Imports */

/* Style Imports */
import styles from './acc-item.module.css';
/* End Style Imports */

/* Types Imports */
import { skillItem } from 'src/types/data.interface';

/* End Types Imports */
/* Accordion Item Prop Types */
type AccordionItemProps = {
  def: boolean,
  title: string,
  skillList: Array<skillItem>,
};
/* End Accordion Item Prop Types */

/**
 * Accordion Item
 *
 * Accordion Item Component
 *
 * @returns Accordion Item Component
 */
export default function AccordionItem({
    def,
    title, 
    skillList
  }: AccordionItemProps) {
  
  /* State Declarations */
  const [isActive, setIsActive] = useState(def ? true : false);
  if (isActive) {
    console.log('true');
  } else {
    console.log('false');
}

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
